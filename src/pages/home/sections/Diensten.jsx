import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import Img1 from "../../../assets/img/home1.jpeg";
import Img2 from "../../../assets/img/hero1.jpeg";
import Img3 from "../../../assets/img/home3.jpeg";

const items = [
  {
    title: "Zinkwerk",
    description:
      "Met precisie en vakmanschap brengen we duurzaamheid en schoonheid samen in elk zinkwerk project",
    image: Img1,
    link: '/dienst-lood-zink'
  },
  {
    title: "Loodwerk",
    description:
      "Vertrouw op onze deskundigheid voor nauwkeurig en betrouwbaar loodwerk dat de tand des tijds doorstaat.",
    image: Img2,
    link: '/dienst-lood-zink'
  },
  {
    title: "Dakdekken",
    description:
      "Bescherm uw huis met onze professionele dakdekkingsservices, ontworpen voor maximale duurzaamheid en weerbestendigheid.",
    image: Img3,
    link: '/dienst-dakdekken'
  },
];

export default function Gallerij() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="diensten" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Diensten
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Hieronder vindt u enkele van onze gespecialiseerde diensten. Voor
              een compleet overzicht staan wij u graag te woord.
            </Typography>
          </div>
          <Grid
            container
            item
            gap={{xs: 2,  s: 5 }}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title, link }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: () => {
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    return selectedItemIndex === index ? "none" : "";
                  },
                  m: 0,
                  backgroundColor:
                    selectedItemIndex === index ? "primary.main" : "",
                  "& .MuiChip-label": {
                    color: selectedItemIndex === index ? "#fff" : "",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <img
              src={selectedFeature.image}
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                width: "100%",
                maxHeight: "200px",
              }}
              alt="logo of sitemark"
            />

            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
              </Typography>
              <Link
                href={selectedFeature.link}
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
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
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ title, description, link }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  padding: 1,
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: (theme) => {
                    return selectedItemIndex === index
                      ? "primary.light"
                      : "grey.200";
                  },
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
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      href={link}
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
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              overflow: "hidden",
              maxHeight: "600px",
              width: "100%",
              border: "1px solid grey",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <img
              src={selectedFeature.image}
              style={{ overflow: "hidden", backgroundSize: "contain" }}
              alt="logo of sitemark"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
