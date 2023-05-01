import { Button, Group, Paper, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useCreateRoleMutation } from 'features/auth/api/auth-api';
import { PermissionName } from 'features/auth/types/auth-types';
import { WithPermissions } from 'shared/components/with-permissions/with-permissions';

interface FormValues {
  name: string;
  permissions: PermissionName[];
}

const initialValues: FormValues = {
  name: '',
  permissions: ['project/read'],
};

export const AuthRoleCreate = () => {
  const [createRoleMutation] = useCreateRoleMutation();

  const form = useForm({
    initialValues,
  });

  return (
    <Paper shadow="md" radius="md" p="md" mx="auto" mb="xl" withBorder>
      <Title order={2} align="center" mb="md">
        Create role
      </Title>

      <WithPermissions allowedPermissions={['role/create']}>
        <form onSubmit={form.onSubmit((values) => createRoleMutation({ ...values }))}>
          <TextInput
            label="Role name"
            labelProps={{ size: 'md' }}
            size="md"
            mb="lg"
            styles={(theme) => ({
              label: {
                marginBottom: theme.spacing.xs,
              },
            })}
            {...form.getInputProps('name')}
          />

          <Group position="right" mt="md">
            <Button type="submit">Create</Button>
          </Group>
        </form>
      </WithPermissions>
    </Paper>
  );
};
