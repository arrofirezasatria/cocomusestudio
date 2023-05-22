import {
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import LanguageIcon from "@mui/icons-material/Language";
import { data } from "cypress/types/jquery";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
          <Link href="www.google.com" key={index} underline="none">
            <Typography
              key={index}
              sx={{
                color: "#666666",
                fontSize: "14px",
                mb: "12px",
                "&:hover": {
                  color: "black",
                },
              }}
            >
              {item}
            </Typography>
          </Link>
        );
      })}
    </Stack>
  );
};

export default function Footer() {
  const [language, setLanguage] = useState(true);
  const router = useRouter();
  const path = router.asPath;

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container
      maxWidth="lg"
      component={"footer"}
      sx={{ borderRadius: "8px", py: "36px" }}
    >
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
          {/* <TextField
            id="outlined-basic"
            label="you@domain.com"
            variant="outlined"
            size="small"
          /> */}
          <FormControl
            sx={{
              my: 1,
              width: "100%",
              backgroundColor: "#F5F5F5",
              borderRadius: "8px",
              "&:focus": {
                border: "1px solid red",
              },
            }}
            variant="outlined"
          >
            <InputBase
              size="medium"
              id="outlined-adornment-password"
              placeholder="you@domain.com"
              sx={{
                fontSize: "14px",
                pr: "6px",
                py: "4px",
                pl: "10px",
                border: "1px solid transparent",
                borderRadius: "8px",
                boxSizing: "border-box",
                "&.Mui-focused": {
                  border: "1px solid lightgray",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    size="small"
                    sx={{ backgroundColor: "white" }}
                    disableRipple
                  >
                    <Typography
                      sx={{ fontSize: "12px", textTransform: "capitalize" }}
                    >
                      Subscribe
                    </Typography>
                  </Button>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ marginTop: "48px" }}
      >
        <Typography>
          Copyright © 2023 Vercel, Inc. All rights reserved.
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <GitHubIcon />
          <Divider orientation="vertical" flexItem />
          <TwitterIcon />
        </Stack>
      </Stack>
    </Container>
  );
}
