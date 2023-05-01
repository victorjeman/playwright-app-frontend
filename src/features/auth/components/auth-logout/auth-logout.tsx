import { Button } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import { useAppDispatch } from 'app/store-hook';
import { setActiveUserAction } from 'features/auth/store/auth-slice';

export const AuthLogout = () => {
  const dispatch = useAppDispatch();

  const [, setUserLocalStorage] = useLocalStorage({
    key: 'user',
  });

  function logout() {
    dispatch(setActiveUserAction(null));
    setUserLocalStorage('');
  }

  return (
    <Button color="yellow" onClick={logout}>
      Logout
    </Button>
  );
};
