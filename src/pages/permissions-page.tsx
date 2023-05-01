import { AuthRoleCreate } from 'features/auth/components/auth-role-create/auth-role-create';
import { AuthRoleForm } from 'features/auth/components/auth-role-form/auth-role-form';
import { AuthRoleList } from 'features/auth/components/auth-role-list/auth-role-list';
import { AuthUsers } from 'features/auth/components/auth-users/auth-users';

export const PermissionsPage = () => (
  <>
    <AuthRoleCreate />
    <AuthRoleList />
    <AuthUsers />
    <AuthRoleForm />
  </>
);
