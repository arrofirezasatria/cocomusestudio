import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useThemeContext } from "@modules/components/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import IconBoilerplate from "@components/icon/IconBoilerplate";
import { textAlign } from "@mui/system";
import ShowcaseSection from "@components/pages/home/ShowcaseSection";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { t } = useTranslation("home");
  const title = t("title");

  return (
    <AppsContainer>
      <Box component="main" sx={{ minHeight: "640px" }}>
        <header>{/* <h1>Title</h1> */}</header>
        <section>
          <Box
            sx={{ display: "flex", justifyContent: "center", height: "120px" }}
          >
            <Box
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                width: "72px",
                height: "72px",
              }}
            >
              <Image
                src={"/static/icons/maskable_icon_x384.png"}
                fill
                alt={""}
              />
            </Box>
          </Box>
        </section>
        <ShowcaseSection />
      </Box>
    </AppsContainer>
  );
}
