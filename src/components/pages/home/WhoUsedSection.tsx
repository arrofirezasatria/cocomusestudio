import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
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

const chipdata = [
  { title: "Starter", color: "#9162C0", backgroundColor: "#F1EBFF" },
  { title: "Ecommerce", color: "#C57857", backgroundColor: "#FFEDE8" },
  { title: "Blog", color: "#D17724", backgroundColor: "#FFEFCF" },
  { title: "Al", color: "#4A91EB", backgroundColor: "#E0EDFF" },
  { title: "Edge Config", color: "#9162C0", backgroundColor: "#F1EBFF" },
  { title: "Portofolio", color: "#C57857", backgroundColor: "#FFEDE8" },
  { title: "Saas", color: "#D17724", backgroundColor: "#FFEFCF" },
  { title: "Multi-tenant Apps", color: "#4A91EB", backgroundColor: "#E0EDFF" },
  { title: "Realtime Apps", color: "#9162C0", backgroundColor: "#F1EBFF" },
  { title: "Documentation", color: "#C57857", backgroundColor: "#FFEDE8" },
  { title: "Virtual Event", color: "#D17724", backgroundColor: "#FFEFCF" },
];

export default function WhoUsedSection() {
  return (
    <Container
      maxWidth="lg"
      sx={{ maxWidth: "1000px !important", my: "128px" }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: "64px",
        }}
      >
        <Typography sx={{ letterSpacing: "2px", fontWeight: "bold" }}>
          POWERING THE BEST FRONTEND TEAMS
        </Typography>
        <Stack direction="row" spacing={4} sx={{ justifyContent: "center" }}>
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
          display: "flex",
          py: "64px",
          px: "40px",
          border: "1px solid #eaeaea",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
          spacing={4}
        >
          <Stack direction={"row"} spacing={2}>
            {chipdata.map((item, index) => {
              return (
                <Chip
                  label={item.title}
                  key={index}
                  sx={{
                    backgroundColor: item.backgroundColor,
                    color: item.color,
                  }}
                />
              );
            })}
          </Stack>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              // textAlign: "center",
              background: "linear-gradient(35deg,#555,#000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: "420px",
              // margin: "auto",
              lineHeight: 1,
              textAlign: "left",
            }}
          >
            Build like the Best
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "#666666" }}>
            Jumpstart your Next.js development process with our pre-built
            solutions
          </Typography>
          <Button
            disableFocusRipple
            disableTouchRipple
            sx={{
              maxWidth: "300px",
              textTransform: "none",
              backgroundColor: "black",
              border: "1px solid black",
              color: "white",
              py: "8px",
              px: "32px",
              borderRadius: "8px",
              fontSize: "16px",
              transition: "all .2s ease,border .2s ease,color .2s ease",
              boxShadow: "0 4px 14px rgba(0,0,0,.3)",
              "&:hover": {
                border: "1px solid black",
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            <Typography>Deploy a template on Vercel</Typography>
          </Button>
        </Stack>
        <Box sx={{ display: "flex", flex: 1 }}>
          <Typography>ads</Typography>
        </Box>
      </Box>
    </Container>
  );
}
