import { Button, Group, Paper, Title } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Paper shadow="md" radius="md" p="md" mx="auto" mb="xl" withBorder>
      <Group position="apart">
        <Title order={2} align="center">
          Navigation
        </Title>

        <Button.Group>
          <Button
            variant="outline"
            onClick={() => navigate('/projects')}
            sx={{ color: pathname === '/projects' ? 'blue' : 'inherit' }}
          >
            Projects
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate('/technologies')}
            sx={{ color: pathname === '/technologies' ? 'blue' : 'inherit' }}
          >
            Technologies
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate('/permissions')}
            sx={{ color: pathname === '/permissions' ? 'blue' : 'inherit' }}
          >
            Permissions
          </Button>
        </Button.Group>
      </Group>
    </Paper>
  );
};
