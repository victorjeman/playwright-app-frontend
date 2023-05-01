import { TechnologyCreate } from 'features/technology/components/technology-create/technology-create';
import { TechnologyList } from 'features/technology/components/technology-list/technology-list';
import { TechnologyUpdate } from 'features/technology/components/technology-update/technology-update';

export const TechnologyPage = () => (
  <>
    <TechnologyList />

    <TechnologyUpdate />

    <TechnologyCreate />
  </>
);
