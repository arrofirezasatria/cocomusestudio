import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const whoused = [
  { name: "airbnb", image: "airbnb" },
  { name: "github", image: "github" },
  { name: "openai", image: "open-ai" },
  { name: "twitch", image: "twitch" },
  { name: "patreon", image: "patreon" },
  { name: "auth0", image: "auth0" },
  { name: "netflix", image: "netflix" },
];

export default function WhoUsedSection() {
  return (
    <Container maxWidth="lg" sx={{ maxWidth: "1000px !important" }}>
      <Box
        sx={{
          textAlign: "center",
          my: "128px",
        }}
      >
        <Typography sx={{ letterSpacing: "2px", fontWeight: "bold" }}>
          POWERING THE BEST FRONTEND TEAMS
        </Typography>
        <Stack
          direction="row"
          spacing={4}
          sx={{ justifyContent: "center", py: "32px" }}
        >
          {whoused.map((item, index) => {
            return (
              <Box key={index}>
                <Image
                  src={`/static/images/whoused/${item.image}.svg`}
                  alt=""
                  width={100}
                  height={40}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
      <Box
        sx={{
          py: "64px",
          px: "40px",
          border: "1px solid black",
          borderRadius: "12px",
        }}
      >
        <Box>
          <Box></Box>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
        <Box></Box>
      </Box>
    </Container>
  );
}
