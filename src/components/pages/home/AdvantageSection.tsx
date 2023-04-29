import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import DataArrayIcon from "@mui/icons-material/DataArray";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

interface IDataAdvantage {
  title: string;
  desc: string;
}

const dataadvantage: IDataAdvantage[] = [
  {
    title: "Superior Developer Experience",
    desc: "Deploy your Next.js site globally in seconds, with zero configuration just Git push to get started.",
  },
  {
    title: "Battle-tested in Production",
    desc: "All the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
  },
  {
    title: "Performance-obsessed stack",
    desc: "Next.js brings years of experience in building and optimizing production applications.",
  },
];

const AdvantageItem = (data: IDataAdvantage) => {
  return (
    <Box>
      <Box
        sx={{
          width: "48px",
          height: "48px",
          backgroundColor: "white",
          borderRadius: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #EAEAEA",
          mb: "16px",
        }}
      >
        <DataArrayIcon />
      </Box>
      <Typography sx={{ fontSize: "18px", mb: 1 }}>{data.title}</Typography>
      <Typography sx={{ fontSize: "16px", color: "#666666" }}>
        {data.desc}
      </Typography>
    </Box>
  );
};

export default function AdvantageSection() {
  return (
    <Box sx={{ py: "128px", backgroundColor: "#FAFAFA" }}>
      <Typography
        component={"h4"}
        sx={{
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          background: "linear-gradient(35deg,#555,#000)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          maxWidth: "860px",
          margin: "auto",
          lineHeight: 1,
        }}
      >
        A powerful framework for building high-performance, server rendered web
        applications
      </Typography>
      <Stack direction="row" spacing={6} sx={{ my: "64px" }}>
        {dataadvantage.map((item, index) => (
          <AdvantageItem title={item.title} desc={item.desc} key={index} />
        ))}
      </Stack>
      <Stack direction={"row"} sx={{ justifyContent: "center" }} spacing={4}>
        <Button
          size="small"
          sx={{
            textTransform: "none",
            backgroundColor: "white",
            border: "1px solid white",
            py: "8px",
            px: "32px",
            borderRadius: "8px",
            color: "black",
            fontSize: "16px",
            transition: "all .2s ease, border .2s ease, color .2s ease",
            boxShadow: "0 4px 14px rgba(0,0,0,.05)",
            "&:hover": {
              border: "1px solid black",
              backgroundColor: "white",
            },
          }}
        >
          Find Partner
        </Button>
        <Button
          sx={{
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
          Start Learning Next.js
        </Button>
      </Stack>
    </Box>
  );
}
