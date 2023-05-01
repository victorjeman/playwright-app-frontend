import { useEffect, useState } from 'react';
import { Box, Button, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { setActiveProjectAction } from 'features/project/store/project-slice';
import { useUpdateProjectMutation } from 'features/project/api/project-api';
import { useAppDispatch, useAppSelector } from 'app/store-hook';

interface FormValues {
  title: string | undefined;
}

export const ProjectUpdate = () => {
  const dispatch = useAppDispatch();

  const { activeProject } = useAppSelector((state) => state.project);

  const [updatedProjectMutation, { isLoading, isSuccess }] = useUpdateProjectMutation();

  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      title: '',
    },
  });

  useEffect(() => {
    if (isSuccess) {
      notifications.show({
        title: 'Yey',
        message: `${activeProject?.title} updated successfully`,
      });

      dispatch(setActiveProjectAction(null));
    }
  }, [isSuccess]);

  useEffect(() => {
    setOpened(!!activeProject?.id);
    form.setValues({ title: activeProject?.title || '' });
  }, [activeProject]);

  function updatedProject(values: FormValues) {
    updatedProjectMutation({ id: activeProject?.id, project: { ...activeProject, ...values } });
  }

  return (
    <Modal
      title="Update the project"
      size="lg"
      opened={opened}
      onClose={() => dispatch(setActiveProjectAction(null))}
    >
      <Box mx="auto">
        <p>{isLoading && 'Your project is being edited'}</p>

        <form onSubmit={form.onSubmit(updatedProject)}>
          <TextInput label="Project title" {...form.getInputProps('title')} mb="md" />

          <Group position="right">
            <Button type="submit">Updated</Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};
