import { useAppSelector } from 'app/store-hook';
import { PermissionName } from 'features/auth/types/auth-types';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

interface Props {
  allowedPermissions: PermissionName[];
}

// step 5 - create a special component for routes that required permissions
export const RouteWithPermissions = ({ allowedPermissions }: Props) => {
  const { activeUser } = useAppSelector((state) => state.auth);
  const location = useLocation();

  const isAuthorized = activeUser?.role.permissions.some((permission) =>
    allowedPermissions?.includes(permission)
  );

  return isAuthorized ? (
    <Outlet />
  ) : activeUser ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
