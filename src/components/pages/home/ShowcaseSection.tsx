import {
  Box,
  Button,
  ButtonBase,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";

import Image from "next/image";
import { filter } from "cypress/types/bluebird";
import Link from "next/link";
import { keyframes } from "@mui/system";
import CallMadeIcon from "@mui/icons-material/CallMade";

// import { AspectRatio } from "@mui/joy/AspectRatio";

const Category = [
  "All",
  "Finance",
  "Tech",
  "News",
  "Ecommerce",
  "Travel",
  "Creative",
  "Entertainment",
  "Marketing",
];

const ShowcaseItem = [
  {
    name: "Nvidia",
    image: "showcases-01.avif",
    category: "Tech",
    link: "something",
  },
  {
    name: "Netflix",
    image: "showcases-02.avif",
    category: "Creative",
    link: "something",
  },
  {
    name: "Notion",
    image: "showcases-03.avif",
    category: "Entertainment",
    link: "something",
  },
  {
    name: "Hulu",
    image: "showcases-04.avif",
    category: "Marketing",
    link: "something",
  },
  {
    name: "Nvidia",
    image: "showcases-01.avif",
    category: "Tech",
    link: "something",
  },
  {
    name: "Netflix",
    image: "showcases-02.avif",
    category: "Creative",
    link: "something",
  },
  {
    name: "Notion",
    image: "showcases-03.avif",
    category: "Entertainment",
    link: "something",
  },
  {
    name: "Hulu",
    image: "showcases-04.avif",
    category: "Marketing",
    link: "something",
  },
];

const spin = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05);
  }
`;

export default function ShowcaseSection() {
  const [choosedCategory, setChoosedCategory] = useState<string>("All");

  function handleChoosedCategory(item: string) {
    setChoosedCategory((prev) => item);
    console.log(item);
  }

  return (
    <Container
      maxWidth="lg"
      component={"section"}
      sx={{
        py: "32px",
        px: "16px",
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

      <Stack
        direction="row"
        spacing={1}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {Category.map((category, index) => {
          return (
            <Button
              key={index}
              onClick={() => handleChoosedCategory(category)}
              disableRipple
              sx={{
                px: "20px",
                // py: "8px",
                transition: "all .2s ease",
                backgroundColor:
                  category === choosedCategory ? "black" : "white",
                color: category === choosedCategory ? "white" : "#666666",
                "&:hover": {
                  color: category === choosedCategory ? "white" : "black",
                  backgroundColor:
                    category === choosedCategory ? "black" : "white",
                },
              }}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 400,
                }}
              >
                {category}
              </Typography>
            </Button>
          );
        })}
      </Stack>

      <Grid2 container spacing={4} sx={{ width: "100%" }}>
        {(choosedCategory === "All"
          ? ShowcaseItem
          : ShowcaseItem.filter((item) => item.category === choosedCategory)
        ).map((item, index) => {
          return (
            <Grid2 key={index} md={4} sm={6} xs={12}>
              <Link href="wwww.google.com" style={{ textDecoration: "none" }}>
                <Paper
                  elevation={0}
                  sx={{
                    padding: "16px",
                    backgroundColor: "#fafafa",
                    "&:hover > p": {
                      color: "#0070f3",
                    },
                  }}
                >
                  <Box
                    sx={{
                      // height: "12rem",
                      backgroundColor: "lightGray",
                      position: "relative",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      overflow: "hidden",
                      aspectRatio: "16 / 9",
                      marginBottom: "8px",
                      borderRadius: "8px",
                      animation: `${spin} 1s ease forwards`,
                      transition: "box-shadow .2s ease",
                    }}
                  >
                    <Image
                      src={"/static/images/showcase/" + item.image}
                      alt=""
                      width={345}
                      height={198}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Stack direction={"row"} spacing={0.4}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "#444444",
                      }}
                    >
                      on GitHub
                    </Typography>
                    <CallMadeIcon fontSize={"small"} />
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#666666",
                    }}
                  >
                    {item.category}
                  </Typography>
                </Paper>
              </Link>
            </Grid2>
          );
        })}
      </Grid2>
      <Box>
        <ButtonBase
          sx={{
            padding: "12px 32px",
            boxShadow: "0 4px 14px rgba(0,0,0,.05)",
            borderRadius: "0.5rem",
            color: "#666",
            transition: "background .2s ease, border .2s ease, color .2s ease",
            border: "1px solid #eaeaea",
            "&:hover": {
              color: "#000",
              border: "1px solid #000",
            },
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
            Load More
          </Typography>
        </ButtonBase>
      </Box>
    </Container>
  );
}
