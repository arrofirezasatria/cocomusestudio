import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import LanguageIcon from "@mui/icons-material/Language";
import { data } from "cypress/types/jquery";
import Image from "next/image";

interface IFooter {
  title: string;
  link: string[];
}

const datafooter: IFooter[] = [
  {
    title: "Resource",
    link: ["Docs", "Learn", "Showcase", "Blog", "Analytics", "Previews"],
  },
  {
    title: "More",
    link: ["Commerce", "Contact Sales", "GitHub", "Release", "Telemetry"],
  },
  {
    title: "About Vercel",
    link: [
      "Next.js + Vercel",
      "Open Source Software",
      "GitHub",
      "Release",
      "Twitter",
    ],
  },
  {
    title: "Legal",
    link: ["Privacy Policy", "Cookie Preferences"],
  },
];

const FooterColumn = (data: IFooter) => {
  return (
    <Stack>
      <Typography sx={{ mb: 2 }}>{data.title}</Typography>
      {data.link.map((item, index) => {
        return (
          <Typography
            key={index}
            sx={{ color: "#666666", fontSize: "14px", mb: "12px" }}
          >
            {item}
          </Typography>
        );
      })}
    </Stack>
  );
};

export default function Footer() {
  const [language, setLanguage] = useState(true);
  const router = useRouter();
  const path = router.asPath;

  return (
    <Box component={"footer"} sx={{ borderRadius: "8px", py: "36px" }}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        sx={{ p: 2 }}
      >
        <Box>
          <Image src="/static/icons/Vercel.png" alt="" width={88} height={21} />
        </Box>
        {datafooter.map((item, index) => {
          return (
            <FooterColumn title={item.title} link={item.link} key={index} />
          );
        })}
        <Box maxWidth={"240px"}>
          <Typography sx={{ mb: 2 }}>
            {"Subscribe to our Newsletter"}
          </Typography>
          <Typography sx={{ color: "#666666", fontSize: "14px", mb: "12px" }}>
            {
              "Stay updated on new releases and features, guides, and case studies."
            }
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
