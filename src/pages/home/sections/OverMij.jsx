import * as React from "react";
import Link from "@mui/material/Link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Diensten() {

  return (
    <Container
      id="reviews"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'left' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
        Over Mij
        </Typography>
        <Typography variant="body1" color="text.secondary">
        Ik ben gespecialiseerd in alles wat met zink en loodwerk te maken heeft... <br/> <br/>
        Loodgietersbedrijf MB is een bedrijf dat zich richt op het oplossen van loodgietersproblemen in Zwaag, Hoorn en omgeving. Onze ervaren loodgieters hebben jarenlange ervaring en kunnen u snel en efficiënt van dienst zijn bij problemen met water, gas, CV-installaties, dakgoten, zinkwerk en rioolwerk. Wij staan bekend om onze klantgerichte en snelle service. Bij ons heeft u altijd één aanspreekpunt en kunt u vertrouwen op onze professionaliteit.
        <Typography component="h5" variant="h6" color="text.primary">
        Onze service
        </Typography>

Onze service omvat onder andere het verhelpen van lekkages, het verwijderen, plaatsen en installeren van sanitair, het verhelpen van verstoppingen, cv-ketelproblemen maar ook verbouwingen. Wij zijn uw betrouwbare partner voor al uw loodgietersproblemen in Zwaag, Hoorn en omgeving. Twijfel niet en schakel Loodgietersbedrijf MB in bij uw loodgietersproblemen. Wij staan voor u klaar!
        </Typography>

            <Link
              href={"/over-mij"}
              color="primary"
              variant="body2"
              fontWeight="bold"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                "& > svg": { transition: "0.2s" },
                "&:hover > svg": { transform: "translateX(2px)" },
              }}
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <span>Lees meer</span>
              <ChevronRightRoundedIcon
                fontSize="small"
                sx={{ mt: "1px", ml: "2px" }}
              />
            </Link>
          </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={6} sm={8} md={6} sx={{ display: "flex" }}>
          <Box>
            <Box>
              <Typography component="h2" variant="h4" color="text.primary">
                Over Mij
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="text.secondary">
                Bij Loodgietersbedrijf Juffermans koppelen we ambachtelijke
                vaardigheid aan moderne techniek om u de beste service te
                bieden. Met een schat aan ervaring die zich uitstrekt over 70
                jaar, ben ik gespecialiseerd in alles wat met zink en loodwerk
                te maken heeft.
              </Typography>
              <Link
                href={"/over-mij"}
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <span>Lees meer</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>
        {userTestimonials.slice(0, imageCount).map((testimonial, index) => (
          <Grid item xs={12} sm={4} md={2} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                aspectRatio: 1,
                minHeight: "150px",
                padding: 0,
              }}
            >
              <img
                src={testimonial.img}
                style={{ height: "auto", backgroundAttachment: "center" }}
                alt=""
              />
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
}
