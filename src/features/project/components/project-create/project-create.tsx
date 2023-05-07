import { useEffect, useState } from 'react';
import { Button, Group, Input, Paper, SegmentedControl, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { ProjectPriority } from 'features/project/types/project-types';
import { useCreateProjectMutation } from 'features/project/api/project-api';
import { WithPermissions } from 'shared/components/with-permissions/with-permissions';

interface FormValues {
  title: string;
}

const initialValues: FormValues = {
  title: '',
};

export const ProjectCreate = () => {
  const [priority, setPriority] = useState<ProjectPriority>('medium');

  const [createProjectMutation, { isSuccess, data: project }] = useCreateProjectMutation();

  const form = useForm({
    initialValues,
  });

  useEffect(() => {
    if (isSuccess) {
      notifications.show({
        title: 'Yey',
        message: `${project?.title} created successfully`,
      });
    }
  }, [isSuccess]);

  return (
    <Paper withBorder shadow="md" radius="md" p="md" mx="auto" my="xl">
      <Title order={2} align="center" mb="lg">
        Create new project
      </Title>

      <WithPermissions allowedPermissions={['project/create']}>
        <form
          onSubmit={form.onSubmit((values) =>
            createProjectMutation({
              ...values,
              priority,
              technologies: ['React', 'Redux'],
              employees: ['John', 'Jane'],
            })
          )}
        >
          <TextInput
            label="Project title"
            labelProps={{ size: 'md' }}
            size="md"
            mb="lg"
            styles={(theme) => ({
              label: {
                marginBottom: theme.spacing.xs,
              },
            })}
            {...form.getInputProps('title')}
          />

          <Input.Label size="md" display="block" mb="xs">
            Select project priority{' '}
          </Input.Label>

          <SegmentedControl
            value={priority}
            onChange={(value: ProjectPriority) => setPriority(value)}
            data={[
              { label: 'Low', value: 'low' },
              { label: 'Medium', value: 'medium' },
              { label: 'High', value: 'high' },
              { label: "It's hot", value: 'hot' },
            ]}
          />

          <Group position="right" mt="md">
            <Button type="submit">Add project</Button>
          </Group>
        </form>
      </WithPermissions>
    </Paper>
  );
};
