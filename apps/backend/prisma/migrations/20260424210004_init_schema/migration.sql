-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "company" VARCHAR(200) NOT NULL,
    "location" VARCHAR(200) NOT NULL,
    "role_id" TEXT,
    "description" TEXT NOT NULL,
    "requirements" TEXT[],
    "salary_range" VARCHAR(100),
    "modality" VARCHAR(20) NOT NULL,
    "experience" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    "user_id" VARCHAR(36) NOT NULL,
    "applicant_name" VARCHAR(200) NOT NULL,
    "applicant_email" VARCHAR(200) NOT NULL,
    "cover_letter" TEXT,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_slug_key" ON "roles"("slug");

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
