import { Card, SegmentedControl, Text } from '@mantine/core';
import {
  useGetRolesQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from 'features/auth/api/auth-api';
import { UserRole } from 'features/auth/types/auth-types';

function getRoleIdByName({ roles = [], roleName }: { roles?: UserRole[]; roleName: string }) {
  return roles.find((item) => item.name === roleName)?.id;
}

export const AuthUsers = () => {
  const { data: user } = useGetUserByIdQuery(2);
  const { data: roles } = useGetRolesQuery();
  const [updateUserMutation] = useUpdateUserMutation();

  function updateTheRole(value: string) {
    updateUserMutation({
      ...user!,
      role: { id: getRoleIdByName({ roles, roleName: value })!, name: value },
    });
  }

  return (
    <div>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text mb="md">
          Update the role for{' '}
          <strong>
            {user?.firstName} {user?.lastName}
          </strong>{' '}
          user
        </Text>

        <SegmentedControl
          value={user?.role.name}
          onChange={updateTheRole}
          data={roles?.map((item) => item.name) || []}
        />
      </Card>
    </div>
  );
};
