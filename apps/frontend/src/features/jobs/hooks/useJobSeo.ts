import { useEffect } from 'react';
import { Job } from '@job-portal/shared';

const upsertMeta = (
  attr: 'name' | 'property',
  key: string,
  content: string,
): { el: HTMLMetaElement; previous?: string } => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  const previous = el?.content;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
  return { el, previous };
};

const jobPostingJsonLd = (job: Job) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: job.title,
  description: job.description,
  datePosted: job.createdAt,
  hiringOrganization: {
    '@type': 'Organization',
    name: job.company,
  },
  jobLocation: {
    '@type': 'Place',
    address: job.location,
  },
  jobLocationType: job.modality === 'remote' ? 'TELECOMMUTE' : undefined,
  employmentType: 'FULL_TIME',
  ...(job.salaryRange ? { baseSalary: job.salaryRange } : {}),
});

export const useJobSeo = (job: Job | undefined) => {
  useEffect(() => {
    if (!job) return;

    const previousTitle = document.title;
    document.title = `${job.title} at ${job.company} — Job Portal`;

    const description = `${job.title} at ${job.company}. ${job.location} · ${job.modality}. ${job.description.slice(0, 140)}`;

    const restores = [
      upsertMeta('name', 'description', description),
      upsertMeta('property', 'og:title', document.title),
      upsertMeta('property', 'og:description', description),
    ];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jobPostingJsonLd(job));
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      restores.forEach(({ el, previous }) => {
        if (previous !== undefined) el.content = previous;
      });
      script.remove();
    };
  }, [job]);
};
