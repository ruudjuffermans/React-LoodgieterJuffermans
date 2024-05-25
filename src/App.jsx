import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/home/sections/Hero';
import Diensten from './pages/home/sections/Diensten';
import OverMij from './pages/home/sections/OverMij';
import Reviews from './pages/home/sections/Reviews';
import FAQ from './pages/home/sections/FAQ';
import getLPTheme from './theme';


export default function LandingPage() {
  const LPtheme = createTheme(getLPTheme('light'));

  return (
    <ThemeProvider theme={ LPtheme }>
      <CssBaseline />
      <Header mode={'light'} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <OverMij />
        <Divider />
        <Reviews />
        <Divider />
        <Diensten />
        <Divider />
        <FAQ />
        <Divider />
        <Footer /> 
      </Box>
    </ThemeProvider>
  );
}