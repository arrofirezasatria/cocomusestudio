import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const commonChild = {
  padding: "2em",
  zIndex: 2,
  position: "relative",
  borderRadius: ".5em",
  transition: "background-color .2s ease",
  border: "1px solid var(--accents-1)",
  boxShadow:
    "0 0 0 1px rgba(0,0,0,.03),0 2px 4px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.05)",
};

export default function CarouselCard() {
  return (
    <>
      <Box
        sx={{
          padding: "2em 1em",
          overflow: "hidden",
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <Box
          component={"ul"}
          sx={{
            display: "grid",
            width: "100%",
            height: "600px",
            gridTemplateColumns: "1fr 1.2fr 1fr",
            gridTemplateRows: "2fr .5fr 2fr",
            gridGap: "1em",
            gap: "1em",
            listStyle: "none",
            padding: "0 0 1.5rem",
          }}
        >
          <Box
            component={"li"}
            sx={{
              ...commonChild,
              "&:nth-child(1)": {
                gridColumn: "2/3",
                gridRow: "1/4",
              },
            }}
          >
            <Link
              href={"/home"}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                inset: 0,
              }}
            >
              asd
            </Link>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gridGap: "1em",
                gap: "1em",
                justifyContent: "flex-end",
                flex: "1 1",
                height: "100%",
              }}
            >
              <Typography>Title</Typography>
              <Typography>
                With Next.js, Vercel, and Sanity, Loom empowers every team to
                iterate
              </Typography>
            </Box>
          </Box>
          <Box
            component={"li"}
            sx={{
              ...commonChild,
              "&:nth-child(2)": {
                gridColumn: "1/2",
                gridRow: "1/3",
              },
            }}
          >
            asd
          </Box>
          <Box
            component={"li"}
            sx={{
              ...commonChild,
              "&:nth-child(3)": {
                gridColumn: "1/2",
                gridRow: "3/4",
              },
            }}
          >
            asd
          </Box>
          <Box
            component={"li"}
            sx={{
              ...commonChild,
              "&:nth-child(4)": {
                gridColumn: "3/4",
                gridRow: "1/2",
              },
            }}
          >
            asd
          </Box>
          <Box
            component={"li"}
            sx={{
              ...commonChild,
              "&:nth-child(5)": {
                gridColumn: "3/4",
                gridRow: "2/4",
              },
            }}
          >
            asd
          </Box>
        </Box>
      </Box>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={6}
      >
        <Typography sx={{ color: "#666666", fontSize: "20px" }}>
          Find out what Next.js can do for your business
        </Typography>
        <Button
          disableFocusRipple
          disableTouchRipple
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
          Cotanct Sales
        </Button>
      </Stack>
    </>
  );
}
