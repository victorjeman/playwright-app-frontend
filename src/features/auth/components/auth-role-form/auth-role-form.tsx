import { useEffect, useState } from 'react';
import { Box, Button, Group, Modal, Switch, createStyles } from '@mantine/core';
import { useDispatch } from 'react-redux';

import { PermissionName } from 'features/auth/types/auth-types';
import { useAppSelector } from 'app/store-hook';
import { setActiveRoleAction } from 'features/auth/store/auth-slice';
import { useGetPermissionsQuery, useUpdateRoleMutation } from 'features/auth/api/auth-api';

const useStyles = createStyles(() => ({
  body: {
    width: '200px',
    justifyContent: 'space-between',
  },
}));

export const AuthRoleForm = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const { activeRole } = useAppSelector((state) => state.auth);

  const { data: permissions } = useGetPermissionsQuery();
  const [updateRoleMutation] = useUpdateRoleMutation();

  const [activePermissions, setActivePermissions] = useState<PermissionName[]>([]);

  useEffect(() => {
    if (activeRole) setActivePermissions(activeRole.permissions);
  }, [activeRole]);

  async function updateRole() {
    updateRoleMutation({ ...activeRole!, permissions: activePermissions });
    dispatch(setActiveRoleAction(null));
  }

  return (
    <Modal
      title="Update permissions"
      size="lg"
      opened={!!activeRole}
      onClose={() => dispatch(setActiveRoleAction(null))}
    >
      <Box mx="auto">
        {/* @ts-ignore */}
        <Switch.Group value={activePermissions} onChange={setActivePermissions}>
          {permissions?.map((permission) => (
            <Switch
              key={permission.id}
              label={permission.name}
              value={permission.name}
              mb="sm"
              labelPosition="left"
              classNames={{ body: classes.body }}
            />
          ))}
        </Switch.Group>

        <Group position="right">
          <Button type="submit" onClick={updateRole}>
            Update permissions
          </Button>
        </Group>
      </Box>
    </Modal>
  );
};
