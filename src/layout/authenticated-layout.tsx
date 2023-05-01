import { Group, Paper } from '@mantine/core';

import { Navigation } from 'shared/components/navigation/navigation';
import { AuthLogout } from 'features/auth/components/auth-logout/auth-logout';
import { AuthUserInfo } from 'features/auth/components/auth-user-info/auth-user-info';

interface Props {
  children: React.ReactNode;
}

export const AuthenticatedLayout = ({ children }: Props) => (
  <>
    <Paper shadow="md" radius="md" p="md" mx="auto" my="xl" withBorder>
      <Group position="apart">
        <AuthUserInfo />

        <AuthLogout />
      </Group>
    </Paper>

    <Navigation />

    <Paper mb="xl" mt="xl">
      {children}
    </Paper>
  </>
);
