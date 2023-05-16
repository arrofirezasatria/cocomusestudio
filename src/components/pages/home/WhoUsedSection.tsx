import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const whoused = [
  { name: "airbnb", image: "airbnb" },
  { name: "github", image: "github" },
  { name: "openai", image: "open-ai" },
  { name: "twitch", image: "twitch" },
  { name: "patreon", image: "patreon" },
  { name: "auth0", image: "auth0" },
  { name: "netflix", image: "netflix" },
];

const chipdata = [
  { title: "Starter", color: "#9162C0", backgroundColor: "#F1EBFF" },
  { title: "Ecommerce", color: "#C57857", backgroundColor: "#FFEDE8" },
  { title: "Blog", color: "#D17724", backgroundColor: "#FFEFCF" },
  { title: "Al", color: "#4A91EB", backgroundColor: "#E0EDFF" },
  { title: "Edge Config", color: "#9162C0", backgroundColor: "#F1EBFF" },
  { title: "Portofolio", color: "#C57857", backgroundColor: "#FFEDE8" },
  { title: "Saas", color: "#D17724", backgroundColor: "#FFEFCF" },
  { title: "Multi-tenant Apps", color: "#4A91EB", backgroundColor: "#E0EDFF" },
  { title: "Realtime Apps", color: "#9162C0", backgroundColor: "#F1EBFF" },
  { title: "Documentation", color: "#C57857", backgroundColor: "#FFEDE8" },
  { title: "Virtual Event", color: "#D17724", backgroundColor: "#FFEFCF" },
];

export default function WhoUsedSection() {
  return (
    <Container
      maxWidth="lg"
      sx={{ maxWidth: "1000px !important", my: "128px" }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: "64px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "2px",
            my: 2,
            color: "#888888",
          }}
        >
          POWERING THE BEST FRONTEND TEAMS
        </Typography>
        <Stack direction="row" spacing={4} sx={{ justifyContent: "center" }}>
          {whoused.map((item, index) => {
            return (
              <Box key={index}>
                <Image
                  src={`/static/images/whoused/${item.image}.svg`}
                  alt=""
                  width={100}
                  height={40}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          py: "64px",
          px: "40px",
          border: "1px solid #eaeaea",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "stretch",
            position: "absolute",
          }}
        >
          <Box sx={{ height: "32px", display: "block" }}>
            <Stack direction={"row"} spacing={2}>
              {chipdata.map((item, index) => {
                return (
                  <Chip
                    label={item.title}
                    key={index}
                    sx={{
                      backgroundColor: item.backgroundColor,
                      color: item.color,
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              // textAlign: "center",
              background: "linear-gradient(35deg,#555,#000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: "420px",
              // margin: "auto",
              lineHeight: 1,
              textAlign: "left",
            }}
          >
            Build like the Best
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color: "#666666", maxWidth: "312px" }}
          >
            Jumpstart your Next.js development process with our pre-built
            solutions
          </Typography>
          <Button
            disableFocusRipple
            disableTouchRipple
            sx={{
              maxWidth: "300px",
              textTransform: "none",
              backgroundColor: "black",
              border: "1px solid black",
              color: "white",
              py: "8px",
              px: "32px",
              mt: "24px",
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
            <Typography>Deploy a template on Vercel</Typography>
          </Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            direction: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            height: "21rem",
          }}
        >
          <Box
            sx={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)",
              maxWidth: "290px",
              borderRadius: "6px",
              minWidth: "220px",
              position: "absolute",
              transition: "transform .5s ease",
              bottom: 0,
              right: 0,
            }}
          >
            <Image
              src={"/static/images/template-next-boilerplate.jpg"}
              alt={""}
              sizes="100vw"
              width={290}
              height={180}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "0 0 6px 6px",
                padding: "16px",
              }}
            >
              <Typography>Next.js Commerce</Typography>
              <Typography>
                An all-in-one starter kit for high-performance e-commerce sites.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Grid
        container
        sx={{
          display: "flex",
          py: "64px",
          px: "40px",
          border: "1px solid #eaeaea",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            // flex: 1,
            justifyContent: "space-between",
            // alignItems: "stretch",
            // position: "absolute",
          }}
        >
          <Box sx={{ height: "32px", display: "block" }}>
            <Stack direction={"row"} spacing={2}>
              {chipdata.map((item, index) => {
                return (
                  <Chip
                    label={item.title}
                    key={index}
                    sx={{
                      backgroundColor: item.backgroundColor,
                      color: item.color,
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bold",
              // textAlign: "center",
              background: "linear-gradient(35deg,#555,#000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: "420px",
              // margin: "auto",
              lineHeight: 1,
              textAlign: "left",
            }}
          >
            Build like the Best
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color: "#666666", maxWidth: "312px" }}
          >
            Jumpstart your Next.js development process with our pre-built
            solutions
          </Typography>
          <Button
            disableFocusRipple
            disableTouchRipple
            sx={{
              maxWidth: "300px",
              textTransform: "none",
              backgroundColor: "black",
              border: "1px solid black",
              color: "white",
              py: "8px",
              px: "32px",
              mt: "24px",
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
            <Typography>Deploy a template on Vercel</Typography>
          </Button>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            // display: "flex",
            // flex: 1,
            // direction: "row",
            // alignItems: "center",
            // justifyContent: "center",
            position: "relative",
            height: "21rem",
          }}
        >
          <Box
            sx={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)",
              maxWidth: "290px",
              borderRadius: "6px",
              minWidth: "220px",
              position: "absolute",
              transition: "transform .5s ease",
              bottom: 0,
              right: 0,
            }}
          >
            <Image
              src={"/static/images/template-next-boilerplate.jpg"}
              alt={""}
              sizes="100vw"
              width={290}
              height={180}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "0 0 6px 6px",
                padding: "16px",
              }}
            >
              <Typography>Next.js Commerce</Typography>
              <Typography>
                An all-in-one starter kit for high-performance e-commerce sites.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)",
              maxWidth: "290px",
              borderRadius: "6px",
              minWidth: "220px",
              position: "absolute",
              transition: "transform .5s ease",
            }}
          >
            <Image
              src={"/static/images/template-next-boilerplate.jpg"}
              alt={""}
              sizes="100vw"
              width={290}
              height={180}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "0 0 6px 6px",
                padding: "16px",
              }}
            >
              <Typography>Next.js Commerce</Typography>
              <Typography>
                An all-in-one starter kit for high-performance e-commerce sites.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              boxShadow:
                "0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)",
              maxWidth: "290px",
              borderRadius: "6px",
              minWidth: "220px",
              position: "absolute",
              transition: "transform .5s ease",
              top: 0,
              left: 0,
            }}
          >
            <Image
              src={"/static/images/template-next-boilerplate.jpg"}
              alt={""}
              sizes="100vw"
              width={290}
              height={180}
            />
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "0 0 6px 6px",
                padding: "16px",
              }}
            >
              <Typography>Next.js Commerce</Typography>
              <Typography>
                An all-in-one starter kit for high-performance e-commerce sites.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
