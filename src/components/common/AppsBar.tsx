import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useThemeContext } from "@modules/components/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import { alpha, useTheme } from "@mui/material/styles";

import { yaleBlue } from "@modules/brandingTheme";

const link = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blog" },
];

export default function AppsBar() {
  const { toggleDarkMode, darkMode } = useThemeContext();

  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Container
        maxWidth={"lg"}
        disableGutters
        sx={{
          overflow: "hidden",
        }}
      >
        <Toolbar
          disableGutters={true}
          sx={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            my: 2,
          }}
        >
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderWidth: "2px",
              backdropFilter: "blur(20px)",
              boxShadow: `inset 0px -1px 1px ${
                theme.palette.mode === "dark"
                  ? yaleBlue[400]
                  : theme.palette.grey[100]
              }`,
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            ad
          </Box>
          <Stack direction={"row"} sx={{ color: "lightGray" }} spacing={2}>
            <Typography>About US</Typography>
            <Typography>Article</Typography>
            <Typography>Something</Typography>
          </Stack>

          {/* <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start", 
              alignContent: "flex-start",
              px: 2,
            }}
          > */}
          {/* <Box sx={{ position: "relative", height: "50px", width: "100px" }}> */}
          {/* <Image
                src="/static/images/icon/cocomuse colored.svg"
                alt="icon cocomuse color"
                fill
              /> */}
          {/* </Box> */}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
