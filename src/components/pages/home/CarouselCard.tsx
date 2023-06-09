import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const commonChild = {
  padding: "2em",
  zIndex: 2,
  position: "relative",
  borderRadius: ".5em",
  transition: "background-color .2s ease",
  border: "1px solid var(--accents-1)",
  boxShadow:
    "0 0 0 1px rgba(0,0,0,.03),0 2px 4px rgba(0,0,0,.05),0 12px 24px rgba(0,0,0,.05)",
  backgroundColor: "white",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: "#fafafa",
  },
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
              overflow: "hidden",
              "&:nth-child(1)": {
                gridColumn: "2/3",
                gridRow: "1/4",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-4rem",
                  left: "-8rem",
                  height: 647,
                  width: 942,
                  overflow: "hidden",
                  backgroundColor:
                    "linear-gradient(30deg,var(#fafafa) -20%,transparent 70%),linear-gradient(220deg,var(#fafafa) -10%,transparent 40%)",
                }}
              >
                <Image
                  src="/static/images/pages/home/wapo.jpg"
                  alt=""
                  fill
                  style={{
                    opacity: 0.6,
                    transform: "scale(0.6)",
                  }}
                />
              </Box>
            </Box>
            <Link
              href={"/home"}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                inset: 0,
              }}
            ></Link>
            <Box>
              <Image
                src="/static/images/pages/home/wapost.svg"
                alt=""
                width={196}
                height={30}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gridGap: "1em",
                gap: "1em",
                justifyContent: "flex-end",
                flex: "1 1",
                height: "94%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#444444",
                  lineHeight: "2rem",
                }}
              >
                AWS and Vercel: Accelerating innovation serverless computing
              </Typography>
            </Box>
            {/* <Box
              sx={{
                position: "absolute",
                inset: "2em",
                top: "auto",
                paddingTop: "1em",
                transform: "translateY(100%) translateZ(0px)",
              }}
            >
              adadad
            </Box> */}
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
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={"/static/images/pages/home/loom-illustration.svg"}
                alt=""
                width={454}
                height={232}
                style={{
                  position: "absolute",
                  opacity: 0.7,
                  left: "7rem",
                  top: "-4rem",
                }}
              />
            </Box>
            <Link
              href={"/home"}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                inset: 0,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={"/static/images/pages/home/loom-illustration.svg"}
                alt=""
                width={454}
                height={232}
                style={{
                  position: "absolute",
                  opacity: 0.7,
                  left: "7rem",
                  top: "-4rem",
                }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: 1.5,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src="/static/images/pages/home/loom.svg"
                  alt=""
                  width={101}
                  height={30}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#444444",
                  lineHeight: "1.5rem",
                }}
              >
                With Next.js, Vercel, and Sanity, Loom empowers every team to
                iterate
              </Typography>
            </Box>
            {/* <Box>ada</Box> */}
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
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={"/static/images/pages/home/plex-illustration.svg"}
                alt=""
                width={454}
                height={232}
                style={{
                  position: "absolute",
                  opacity: 0.7,
                  left: "7rem",
                  top: "-4rem",
                }}
              />
            </Box>
            <Link
              href={"/home"}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                inset: 0,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: 1.5,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src="/static/images/pages/home/plex.svg"
                  alt=""
                  width={70}
                  height={32}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#444444",
                  lineHeight: "1.5rem",
                }}
              >
                How Plex 6x their impressions deploying Next.js on Vercel
              </Typography>
            </Box>
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
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={"/static/images/pages/home/mrbeast-picture.avif"}
                alt=""
                width={388}
                height={496}
                style={{
                  position: "absolute",
                  opacity: 0.1,
                  right: "-1.25rem",
                  objectFit: "cover",
                  height: "100%",
                  width: "12.5rem",
                  mixBlendMode: "multiply",
                  // left: "7rem",
                  // top: "-4rem",
                }}
              />
            </Box>
            <Link
              href={"/home"}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                inset: 0,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: 1.5,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src="/static/images/pages/home/mrbeast.svg"
                  alt=""
                  width={129}
                  height={26}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#444444",
                  lineHeight: "1.5rem",
                }}
              >
                Serving millions of users on the new MrBeast storefront
              </Typography>
            </Box>
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
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={"/static/images/pages/home/basement-stickers.svg"}
                alt=""
                width={454}
                height={232}
                style={{
                  position: "absolute",
                  opacity: 0.7,
                  left: "7rem",
                  top: "-4rem",
                }}
              />
            </Box>
            <Link
              href={"/home"}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                inset: 0,
              }}
            />
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                gap: 1.5,
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src="/static/images/pages/home/basement.svg"
                  alt=""
                  width={150}
                  height={21.5}
                />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#444444",
                  lineHeight: "1.5rem",
                }}
              >
                Navigating tradeoffs in large-scale website migrations
              </Typography>
            </Box>
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
          Contact Sales
        </Button>
      </Stack>
    </>
  );
}
