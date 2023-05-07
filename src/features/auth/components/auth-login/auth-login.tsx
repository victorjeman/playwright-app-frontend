import { useEffect } from 'react';
import { Paper, Title, Container, Button, Image, Text } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';

import { User } from 'features/auth/types/auth-types';
import { useAppDispatch } from 'app/store-hook';
import { setActiveUserAction } from 'features/auth/store/auth-slice';
import { useGetUsersQuery, useLazyGetRoleByIdQuery } from 'features/auth/api/auth-api';

export function AuthLogin() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [, setUserLocalStorage] = useLocalStorage({
    key: 'user',
    // @ts-ignore
    defaultValue: JSON.parse(window.localStorage.getItem('user')),
  });

  const { data: users } = useGetUsersQuery();
  const [getRolesLazyQuery] = useLazyGetRoleByIdQuery();

  async function setActiveUser(user: User) {
    const { data: role } = await getRolesLazyQuery(user.role.id);

    dispatch(setActiveUserAction({ ...user, role: role! }));
    setUserLocalStorage({ ...user, role: role! });

    navigate('/projects');
  }

  useEffect(() => {
    const localStorageUser = JSON.parse(window.localStorage.getItem('user')!);
    if (localStorageUser) {
      dispatch(setActiveUserAction(localStorageUser));
      navigate(location.state?.from?.pathname);
    }
  }, []);

  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome back!</Title>

      <Paper withBorder shadow="md" p={30} mt="md" radius="md">
        <Image src="images/welcome-back.png" />

        {users?.map((item) => (
          <Button
            fullWidth
            key={item.id}
            mt="xl"
            variant="light"
            size="md"
            onClick={() => setActiveUser(item)}
            data-testid="login-button"
          >
            Sign in / {item.firstName} /
            <Text fw="bold" color="green" ml="3px">
              {item.role.name}
            </Text>
          </Button>
        ))}
      </Paper>
    </Container>
  );
}
