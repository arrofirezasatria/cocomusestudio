import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";

export default function StatsSection() {
  return (
    <Stack
      component={"section"}
      direction="row"
      flexWrap={"wrap"}
      spacing={12}
      justifyContent="center"
      py={"48px"}
      px={"16px"}
      sx={{
        backgroundColor: "#FAFAFA",
        my: "128px",
        borderTop: "1px solid #eaeaea",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <Stack
        alignItems={"center"}
        sx={{
          "& svg": {
            transform: "translateX(0px) translateY(4px)",
            
          },
          "&:hover": {
            "& svg": {
              color: "red !important",
              transform: "translateX(4px) translateY(-4px)",
            },
          },
        }}
      >
        <Typography sx={{ fontSize: "48px", fontWeight: "500" }}>
          14th
        </Typography>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "400", color: "#333333" }}
        >
          Largest
        </Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "400", color: "#444444" }}
          >
            on GitHub
          </Typography>
          <CallMadeIcon fontSize={"small"} />
        </Stack>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography sx={{ fontSize: "48px", fontWeight: "500" }}>#1</Typography>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "400", color: "#333333" }}
        >
          React
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "400", color: "#444444" }}
        >
          Framework
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Typography sx={{ fontSize: "48px", fontWeight: "500" }}>
          100,000
        </Typography>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "400", color: "#333333" }}
        >
          Stars
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "400", color: "#444444" }}
        >
          on GithHub
        </Typography>
      </Stack>
    </Stack>
  );
}
