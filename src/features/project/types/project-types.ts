export type ProjectPriority = 'low' | 'medium' | 'high' | 'hot';

export type ProjectFilterGroup = 'Employees' | 'Technologies' | 'Priorities';

export interface ProjectFilter {
  group: ProjectFilterGroup;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  priority: ProjectPriority;
  technologies: string[];
  employees: string[];
}
