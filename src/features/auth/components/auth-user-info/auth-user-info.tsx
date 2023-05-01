import { Text, Title } from '@mantine/core';

import { useAppSelector } from 'app/store-hook';

export const AuthUserInfo = () => {
  const { activeUser } = useAppSelector((store) => store.auth);

  return (
    <div>
      <Title order={1}>Hello {activeUser?.firstName}</Title>

      <Text size="md" color="gray">
        you have <strong>{activeUser?.role.name}</strong> role
      </Text>
    </div>
  );
};
