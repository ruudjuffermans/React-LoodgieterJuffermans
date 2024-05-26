import * as React from "react";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import GalleryImg from "../../../assets/img/home1.jpeg";
import { Button } from "@mui/material";

const userTestimonials = [
  { img: GalleryImg },
  { img: GalleryImg },
  { img: GalleryImg },
  { img: GalleryImg },
  { img: GalleryImg },
  { img: GalleryImg },
  { img: GalleryImg },
  { img: GalleryImg },
  { img: GalleryImg },
];

export default function Diensten() {
  const [imageCount, setImageCount] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 700) {
        setImageCount(3);
      } else if (width >= 700 && width < 1000) {
        setImageCount(4);
      } else {
        setImageCount(9);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      id="over-mij"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Card
        variant="outlined"
        component={Button}
        onClick={() => {}}
        sx={{
          p: 3,
          height: "fit-content",
          width: "100%",
          background: "none",
          padding: 1,
          borderColor: "primary.light",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            textAlign: "left",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            gap: 2.5,
          }}
        >
          <Box sx={{ textTransform: "none" }}>
            <Typography color="text.primary" variant="body2" fontWeight="bold">
              Over Mij
            </Typography>
            <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
              Ik ben gespecialiseerd in alles wat met zink en loodwerk te maken
              heeft...
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
        </Box>
      </Card>
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
