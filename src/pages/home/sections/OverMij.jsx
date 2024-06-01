import * as React from "react";
// import Link from "@mui/material/Link";
// import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Diensten() {

  return (
    <Container
      id="overmij"
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
       </Typography>

            {/* <Link
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
            </Link> */}
          </Box>
  
    </Container>
  );
}
