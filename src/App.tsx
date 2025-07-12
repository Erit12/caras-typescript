import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';


import { Header } from './components/Header';
import { FeaturedSection } from './components/FeaturedSection';
//import { SubscriptionForm } from './components/SubscriptionForm';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Theme } from './styles/theme';

const App = () => (

  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Header />
    <main role="main">
      <section aria-label="Sección de características destacadas">
        <FeaturedSection />
      </section>
      <section aria-label="Testimonios de clientes">
        <Testimonials />
      </section>
    </main>
    <Footer />
  </ThemeProvider>
);

export default App;
