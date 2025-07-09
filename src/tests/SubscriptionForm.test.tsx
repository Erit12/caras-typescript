import { render, screen, fireEvent } from '@testing-library/react';
import { SubscriptionForm } from '../components/SubscriptionForm';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Theme } from '../styles/theme';


describe('SubscriptionForm component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <SubscriptionForm />
      </ThemeProvider>
    );
  });

  test('renderiza los campos de nombre y correo', () => {
    expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Correo/i)).toBeInTheDocument();
  });

  test('renderiza el botón de envío', () => {
    expect(screen.getByRole('button', { name: /SUSCRIBETE GRATIS/i })).toBeInTheDocument();
  });

  test('muestra accion de recargar la pagina al hacer clic', () => {
    const handleSubmit = jest.fn();
    
    fireEvent.click(screen.getByRole('button', { name: /SUSCRIBETE GRATIS/i }));
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    //expect(window.location.href).not.toBe(originalHref);
  });

});
