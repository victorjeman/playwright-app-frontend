import { Route, Routes } from 'react-router-dom';

import { RouteWithPermissions } from 'app/router/route-with-permissions';

import { AuthenticatedLayout } from 'layout/authenticated-layout';

import { LoginPage } from 'pages/login-page';
import { ProjectPage } from 'pages/project-page';
import { TechnologyPage } from 'pages/technology-page';
import { UnauthorizedPage } from 'pages/unauthorized-page';
import { PermissionsPage } from 'pages/permissions-page';

// step 4 - create the public and secured routes
export const PageRouter = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="unauthorized" element={<UnauthorizedPage />} />

    {/* step 6 - use the `RouteWithPermissions` component to secure specific routes */}
    <Route element={<RouteWithPermissions allowedPermissions={['project/read']} />}>
      <Route
        path="projects"
        element={
          <AuthenticatedLayout>
            <ProjectPage />
          </AuthenticatedLayout>
        }
      />
    </Route>

    <Route element={<RouteWithPermissions allowedPermissions={['technology/read']} />}>
      <Route
        path="technologies"
        element={
          <AuthenticatedLayout>
            <TechnologyPage />
          </AuthenticatedLayout>
        }
      />
    </Route>

    <Route element={<RouteWithPermissions allowedPermissions={['role/read']} />}>
      <Route
        path="permissions"
        element={
          <AuthenticatedLayout>
            <PermissionsPage />
          </AuthenticatedLayout>
        }
      />
    </Route>
  </Routes>
);
