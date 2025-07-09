import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Theme } from '../styles/theme';


describe('Header component', () => {
  test('Reenderiza correctamente la etiqueta Header', () => {
    render(
      <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Header />
        </ThemeProvider>
    );
    const headerElement = screen.getByRole('banner'); // Usando 'banner' como role para header
    expect(headerElement).toBeInTheDocument();
  });

  test('renderiza el titulo H1 correctamente', () => {
    render(
      <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Header />
      </ThemeProvider>
    );
    const subtitle = screen.getByText('Suscribete a las Newsletter de CARAS');
    expect(subtitle).toBeInTheDocument();
  });

  test('renderiza el logotipo si está presente', () => {
    render(
      <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <Header />
      </ThemeProvider>
    );
    const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
  });
  
});
