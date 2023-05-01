import { MultiSelect, Paper, Title } from '@mantine/core';
import { useAppDispatch } from 'app/store-hook';

import { setProjectFilterAction } from 'features/project/store/project-slice';
import { useGetEmployeesQuery } from 'features/employee/api/employee-api';
import { useGetTechnologiesTransformedQuery } from 'features/technology/api/technology-api';

export const ProjectFilter = () => {
  const dispatch = useAppDispatch();

  const { data: technologies = [] } = useGetTechnologiesTransformedQuery();
  const { data: employees = [] } = useGetEmployeesQuery();

  return (
    <Paper shadow="md" radius="md" p="md" mx="auto" mb="xl" withBorder>
      <Title order={2} align="center" mb="md">
        Filter projects
      </Title>

      <MultiSelect
        searchable
        clearable
        mb="md"
        nothingFound="Nothing found"
        clearButtonProps={{ 'aria-label': 'Clear selection' }}
        onChange={(value) => dispatch(setProjectFilterAction(value))}
        data={[...technologies, ...employees] || []}
      />
    </Paper>
  );
};
