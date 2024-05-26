import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Rating } from '@mui/material';

const userTestimonials = [
  {
    avatar: <Avatar alt="A, Heemskerk" src="/static/images/avatar/1.jpg" />,
    name: 'A, Heemskerk',
    occupation: <Rating  size="small" name="read-only" value={5} readOnly />,
    testimonial: "Aardige man, komt afspraken na, werkt goed door, nieuwe dakgoot zit er goed in, net werk. Kon snel komen. Kortom: wat ik hoopte."
  },
  {
    avatar: <Avatar alt="Marieke van Deldenr" src="/static/images/avatar/2.jpg" />,
    name: 'Marieke van Delden',
    occupation: <Rating  size="small" name="read-only" value={5} readOnly />,
    testimonial:"Betrouwbare en zeer goede vakman. Kan hem iedereen aanraden. Prima werk geleverd en meerwerk in goed overleg en adhv foto’s." 
  },
  {
    avatar: <Avatar alt="Ludwig Fauser" src="/static/images/avatar/3.jpg" />,
    name: 'Ludwig Fauser',
    occupation: <Rating  size="small" name="read-only" value={5} readOnly />,
    testimonial:"Goede communicatie en alles kerig op tijd en volgens afspraak ."
  },
];

export default function Reviews() {
  return (
    <Container
      id="reviews"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Wat klanten over mij zeggen
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Bij mij spreken resultaten. Lees wat klanten te zeggen hebben over hun ervaring met Loodgietersbedrijf Juffermans.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                  subheader={testimonial.occupation}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}