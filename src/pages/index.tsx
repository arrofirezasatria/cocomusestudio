import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useThemeContext } from "@modules/components/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import IconBoilerplate from "@components/icon/IconBoilerplate";
import { textAlign } from "@mui/system";
import ShowcaseSection from "@components/pages/home/ShowcaseSection";
import StatsSection from "@components/pages/home/StatsSection";
import WhoUsedSection from "@components/pages/home/WhoUsedSection";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { t } = useTranslation("home");
  const title = t("title");

  return (
    <AppsContainer>
      <Box component="main" sx={{ minHeight: "640px" }}>
        <header>{/* <h1>Title</h1> */}</header>
        <Box component={"section"} mt={"128px"}>
          <Typography
            component={"h1"}
            sx={{
              fontSize: "72px",
              fontWeight: "bold",
              textAlign: "center",
              background: "linear-gradient(35deg,#555,#000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: "720px",
              margin: "auto",
              lineHeight: 1,
            }}
          >
            The web framework for when it matters
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              my: "24px",
              textAlign: "center",
              // background: "linear-gradient(45deg,#555,#000)",
              // WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              maxWidth: "720px",
              mx: "auto",
              color: "#666666",
              lineHeight: 1.2,
            }}
          >
            Peerless performance, efficiency and developer experience. Next.js
            is trusted by some of the biggest names of the web.
          </Typography>
        </Box>
        <StatsSection />
        <ShowcaseSection />
        <WhoUsedSection />
      </Box>
    </AppsContainer>
  );
}
