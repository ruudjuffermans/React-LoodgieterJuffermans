import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 20, sm: 30 },
          pb: { xs: 16, sm: 20 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3rem, 10vw, 5rem)",
            }}
          >
            Loodgietersbedrijf
            <Typography
              component="div"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 5rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
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
            <Typography
              component="div"
              variant="h6"
              sx={{
                fontSize: "clamp(2rem, 6vw, 1.5rem)",
                fontWeight: 800,
                color: "black",
              }}
            >
              06 43595090
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
