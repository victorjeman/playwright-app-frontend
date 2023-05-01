import { useAppSelector } from 'app/store-hook';
import { PermissionName } from 'features/auth/types/auth-types';

interface Props {
  allowedPermissions: PermissionName[];
  children: React.ReactNode;
}

// step 7 - create special component to secure parts of the UI
export const WithPermissions = ({ allowedPermissions, children }: Props) => {
  const { activeUser } = useAppSelector((state) => state.auth);

  const isAuthorized = activeUser?.role.permissions.some((permission) =>
    allowedPermissions?.includes(permission)
  );

  return isAuthorized ? <>{children}</> : <></>;
};
