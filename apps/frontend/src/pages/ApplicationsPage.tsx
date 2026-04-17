import ApplicationList from '../features/applications/components/ApplicationList';

const ApplicationsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-(--color-text-primary)">Mis aplicaciones</h1>
        <p className="text-sm text-(--color-text-secondary)">
          Historial de vacantes a las que has aplicado
        </p>
      </div>
      <ApplicationList />
    </div>
  );
};

export default ApplicationsPage;
