import { Container } from '@mantine/core';

import { PageRouter } from 'app/router/page-router';
import { ThemeProvider } from 'app/theme-provider';

export default function App() {
  return (
    <ThemeProvider>
      <Container maw={760}>
        <PageRouter />
      </Container>
    </ThemeProvider>
  );
}
