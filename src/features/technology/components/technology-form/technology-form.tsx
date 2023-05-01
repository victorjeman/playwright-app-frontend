import { useEffect } from 'react';
import { Box, Button, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { Technology, TechnologyFormValues } from 'features/technology/types/technology-types';

interface Props {
  title: string;
  submitText: string;
  activeTechnology?: Technology | null;
  isOpen: boolean;
  onSubmit: (values: TechnologyFormValues) => void;
  onClose: () => void;
}

export const TechnologyForm = ({
  title,
  submitText,
  activeTechnology,
  isOpen,
  onClose,
  onSubmit,
}: Props) => {
  const form = useForm({
    initialValues: {
      name: '',
    },
  });

  useEffect(() => {
    form.setValues({ name: activeTechnology?.name || '' });
  }, [activeTechnology]);

  return (
    <Modal title={title} size="lg" opened={isOpen} onClose={onClose}>
      <Box mx="auto">
        <form
          onSubmit={form.onSubmit((values) => {
            onSubmit(values);
            form.reset();
          })}
        >
          <TextInput label="Technology name" {...form.getInputProps('name')} mb="md" />

          <Group position="right">
            <Button type="submit">{submitText}</Button>
          </Group>
        </form>
      </Box>
    </Modal>
  );
};
