export interface Technology {
  id: number;
  name: string;
}

export interface TechnologyMultiSelect {
  label: string;
  value: string;
  group: 'Technologies';
}

export interface TechnologyFormValues {
  name: string;
}
