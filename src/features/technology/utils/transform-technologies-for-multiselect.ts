import { Technology, TechnologyMultiSelect } from 'features/technology/types/technology-types';

export const transformTechnologiesForMultiselect = (
  technologies: Technology[] = []
): TechnologyMultiSelect[] =>
  technologies.map((technology) => ({
    value: `tech/${technology.name}`,
    label: `tech/${technology.name}`,
    group: 'Technologies',
  }));
