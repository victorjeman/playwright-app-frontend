import { Image, Title, Text, Button, SimpleGrid, Paper } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Paper shadow="md" radius="md" p="md" mx="auto" my="xl" withBorder>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <div>
          <Title>Unauthorized</Title>

          <Text color="dimmed" size="lg">
            You are not authorized to access this page.
          </Text>

          <Button variant="outline" size="md" mt="xl" onClick={() => navigate(-1)}>
            Get back
          </Button>
        </div>

        <Image src="images/policewoman.png" />
      </SimpleGrid>
    </Paper>
  );
};
