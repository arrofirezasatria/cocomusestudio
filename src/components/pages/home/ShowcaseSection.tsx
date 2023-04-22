import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";
import RadioButton from "./RadioButton";
import Image from "next/image";

const Category = [
  "All",
  "Finance",
  "Tech",
  "News",
  "ECommerce",
  "Travel",
  "Creative",
  "Entertainment",
  "Marketing",
];

const ShowcaseItem = [
  {
    name: "something",
    image: "link to something",
    link: "something",
  },
  {
    name: "something",
    image: "link to something",
    link: "something",
  },
  {
    name: "something",
    image: "link to something",
    link: "something",
  },
  {
    name: "something",
    image: "link to something",
    link: "something",
  },
  {
    name: "something",
    image: "link to something",
    link: "something",
  },
  {
    name: "something",
    image: "link to something",
    link: "something",
  },
];

export default function ShowcaseSection() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <Typography
        component={"h3"}
        sx={{
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(45deg,#555,#000)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          maxWidth: "520px",
          lineHeight: 1.2,
          margin: "auto",
        }}
      >
        Meet Thousand of Beautiful Design by Cocomuse
      </Typography>
      <Stack direction="row" spacing={3}>
        {Category.map((category, index) => {
          return (
            <Button key={index}>
              <Typography
                component={"span"}
                fontSize={14}
                sx={{ textTransform: "capitalize" }}
              >
                {category}
              </Typography>
            </Button>
          );
        })}
      </Stack>
      <Grid2 container spacing={4} sx={{ width: "100%" }}>
        {ShowcaseItem.map((item, index) => {
          return (
            <Grid2 key={index} md={4}>
              <Paper sx={{ padding: "16px" }}>
                <Box
                  sx={{
                    height: "12rem",
                    backgroundColor: "lightGray",
                    position: "relative",
                  }}
                >
                  <Image
                    src={"/static/images/showcase/showcases-02.avif"}
                    alt=""
                    fill
                  />
                </Box>
                {"something"}
              </Paper>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
}
