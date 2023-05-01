import { useMemo } from 'react';
import { Alert, Box, LoadingOverlay, SimpleGrid } from '@mantine/core';
import { IoAlertCircle } from 'react-icons/io5';

import { useAppSelector } from 'app/store-hook';
import { useGetProjectsQuery } from 'features/project/api/project-api';
import { projectGetItemsFiltered } from 'features/project/utils/project-get-items-filtered';
import { ProjectThumbnail } from 'features/project/components/project-thumbnail/project-thumbnail';

export const ProjectList = () => {
  const filters = useAppSelector((state) => state.project.filters);

  const { data, isLoading, isError } = useGetProjectsQuery();

  const projects = useMemo(
    () => projectGetItemsFiltered({ projects: data, filters }),
    [data, filters]
  );

  return (
    <Box pos="relative" mih={200}>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />

      {isError && (
        <Alert icon={<IoAlertCircle size="1rem" />} title="Bummer!" color="red">
          Failed to load projects
        </Alert>
      )}

      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[{ maxWidth: '36rem', cols: 1, spacing: 'sm' }]}
      >
        {projects?.map((project) => (
          <div key={project.id}>
            <ProjectThumbnail project={project} />
          </div>
        ))}
      </SimpleGrid>
    </Box>
  );
};
