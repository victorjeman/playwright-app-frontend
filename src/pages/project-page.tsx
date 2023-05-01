import { useState } from 'react';
import { Switch, Box } from '@mantine/core';

import { ProjectCreate } from 'features/project/components/project-create/project-create';
import { ProjectFilter } from 'features/project/components/project-filter/project-filter';
import { ProjectList } from 'features/project/components/project-list/project-list';
import { ProjectUpdate } from 'features/project/components/project-update/project-update';

export const ProjectPage = () => {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <>
      <ProjectCreate />

      <ProjectFilter />

      <Box pos="relative" pt={50}>
        <Switch
          label="Toggle projects"
          labelPosition="left"
          size="md"
          onLabel="ON"
          offLabel="OFF"
          checked={showProjects}
          onChange={(event) => setShowProjects(event.currentTarget.checked)}
          top="10px"
          right="0"
          pos="absolute"
        />

        {showProjects && <ProjectList />}
      </Box>

      <ProjectUpdate />
    </>
  );
};
