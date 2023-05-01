import { Badge, Button, Group, Paper, Table, Title } from '@mantine/core';

import { useAppDispatch } from 'app/store-hook';
import { useDeleteRoleMutation, useGetRolesQuery } from 'features/auth/api/auth-api';
import { setActiveRoleAction } from 'features/auth/store/auth-slice';
import { WithPermissions } from 'shared/components/with-permissions/with-permissions';

export const AuthRoleList = () => {
  const dispatch = useAppDispatch();

  const { data: roles } = useGetRolesQuery();
  const [deleteRoleMutation] = useDeleteRoleMutation();

  const ths = (
    <tr>
      <th style={{ width: '100px' }}>Role</th>
      <th>Permission</th>
      <th style={{ width: '200px' }}>Actions</th>
    </tr>
  );

  const rows = roles?.map((role) => (
    <tr key={role.id}>
      <td>{role.name}</td>

      <td>
        <Group position="left" spacing="xs">
          {role.permissions.map((technology) => (
            <Badge key={technology} size="xs" variant="outline">
              {technology}
            </Badge>
          ))}
        </Group>
      </td>

      <td>
        <Group grow>
          <WithPermissions allowedPermissions={['role/update']}>
            {role.name !== 'admin' && (
              <Button
                variant="light"
                color="blue"
                mt="md"
                radius="md"
                size="xs"
                onClick={() => dispatch(setActiveRoleAction(role))}
              >
                Edit
              </Button>
            )}
          </WithPermissions>

          <WithPermissions allowedPermissions={['role/delete']}>
            {role.name !== 'admin' && (
              <Button
                variant="outline"
                color="red"
                p="0"
                mt="md"
                radius="md"
                size="xs"
                onClick={() => deleteRoleMutation(role.id)}
              >
                Delete
              </Button>
            )}
          </WithPermissions>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Paper shadow="md" radius="md" p="md" mx="auto" mb="xl" withBorder>
      <Title order={2} align="center" mb="md">
        Roles
      </Title>

      <Table
        highlightOnHover
        withBorder
        withColumnBorders
        captionSide="bottom"
        maw={700}
        mx="auto"
        mb="xl"
      >
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  );
};
