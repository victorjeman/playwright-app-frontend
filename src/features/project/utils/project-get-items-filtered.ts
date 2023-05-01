import { Project } from 'features/project/types/project-types';

export const projectGetItemsFiltered = ({
  filters = [],
  projects = [],
}: {
  filters: string[];
  projects?: Project[];
}) => {
  if (!filters.length) return projects;

  return projects?.filter((project) => {
    const technologyFilters = filters
      .filter((filter) => filter.includes('tech'))
      .map((filter) => filter.split('/')[1]);

    const employeeFilters = filters
      .filter((filter) => filter.includes('employee'))
      .map((filter) => filter.split('/')[1]);

    const includesTechnologyFilters = project.technologies.some((technology) =>
      technologyFilters.includes(technology)
    );

    const includesEmployeeFilters = project.employees.some((employee) =>
      employeeFilters.includes(employee)
    );

    return includesTechnologyFilters || includesEmployeeFilters;
  });
};
