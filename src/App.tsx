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
      <FeaturedSection />

    <Testimonials />
    <Footer />
  </ThemeProvider>
);

export default App;
