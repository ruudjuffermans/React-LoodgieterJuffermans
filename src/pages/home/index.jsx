import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Diensten from './sections/Diensten';
import OverMij from './sections/OverMij';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import { Button, Stack, Typography } from '@mui/material';


export default function Home() {

  return (
    <>
      <Header />
      <Hero >
      <Typography
            variant="h1"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(2rem, 10vw, 5rem)",
            }}
          >
            Loodgietersbedrijf
            <Typography
              component="div"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 5rem)",
                color: "primary.main",
              }}
            >
              Juffermans
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Waterdicht de beste
          </Typography>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ width: { xs: "auto" } }}
          >
            <Button variant="contained" color="primary" sx={{ flexShrink: 0 }}>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  fontSize: "clamp(2rem, 6vw, 1.5rem)",
                  fontWeight: 500,
                  color: "white",
                }}
              >
                TEL. 0643595090
              </Typography>
            </Button>
          </Stack>
      </Hero>
        <Divider />
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
    </>
  );
}