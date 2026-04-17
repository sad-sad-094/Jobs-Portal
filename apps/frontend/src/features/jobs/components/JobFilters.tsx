import { JobFilters as Filters } from '../../../services/job.service';
import Input from '../../../components/ui/Input';
import { Job } from '@job-portal/shared';

interface JobFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const modalityOptions: { value: Job['modality'] | ''; label: string }[] = [
  { value: '', label: 'Todas las modalidades' },
  { value: 'remote', label: 'Remoto' },
  { value: 'onsite', label: 'Presencial' },
  { value: 'hybrid', label: 'Híbrido' },
];

const experienceOptions: { value: Job['experience'] | ''; label: string }[] = [
  { value: '', label: 'Todos los niveles' },
  { value: 'junior', label: 'Junior' },
  { value: 'mid', label: 'Mid' },
  { value: 'semi-senior', label: 'Semi Senior' },
  { value: 'senior', label: 'Senior' },
];

const selectClass = `
  w-full rounded-(--radius-md) border border-(--color-border) bg-(--color-surface)
  px-3 py-2 text-sm text-(--color-text-primary) outline-none transition-colors
  focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary)
  cursor-pointer
`;

const JobFilters = ({ filters, onChange }: JobFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface) p-4 sm:flex-row sm:items-end">
      <div className="flex-1">
        <Input
          id="search"
          label="Buscar"
          placeholder="Cargo, empresa o tecnología..."
          value={filters.search ?? ''}
          onChange={e => onChange({ ...filters, search: e.target.value })}
          fullWidth
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:w-48">
        <label htmlFor="modality" className="text-sm font-medium text-(--color-text-secondary)">
          Modalidad
        </label>
        <select
          id="modality"
          value={filters.modality ?? ''}
          onChange={e => onChange({ ...filters, modality: e.target.value || undefined })}
          className={selectClass}
        >
          {modalityOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5 sm:w-48">
        <label htmlFor="experience" className="text-sm font-medium text-(--color-text-secondary)">
          Experiencia
        </label>
        <select
          id="experience"
          value={filters.experience ?? ''}
          onChange={e => onChange({ ...filters, experience: e.target.value || undefined })}
          className={selectClass}
        >
          {experienceOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default JobFilters;
