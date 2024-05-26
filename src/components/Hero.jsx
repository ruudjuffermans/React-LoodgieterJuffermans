import React from "react";
import { Box, Container, Stack } from "@mui/material";

const Hero = ({ children }) => {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #FFF)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      }}
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
          {children}
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
