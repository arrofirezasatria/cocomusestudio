import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Skeleton,
  Stack,
} from "@mui/material";
import { error } from "console";
import { data } from "cypress/types/jquery";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { display, keyframes } from "@mui/system";
import Link from "next/link";
import { title } from "process";

let nextPage = true;

const spin = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow: 0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05);
  }
`;

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const boxShadowAnimation = keyframes`
  from {
    box-shadow: none;
  }
  to {
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  }
`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

interface MediaProps {
  title: string;
  imageLink: string;
  loading?: boolean;
}

// const fetcher = (url) => axios.get(url).then((res) => res.data);
const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

interface PageProps {
  index: number;
  key: number;
}

function Page({ index, key }: PageProps) {
  // console.log(index);
  const { data, error, isLoading, isValidating } = useSWR(
    `https://api.sunpower.id/api/projects?page=${index}`,
    fetcher2
  );
  // console.log(apiUrl + `/projects?page=${index}`);
  // console.log(count);
  // console.log(data);

  if (data === undefined) {
    // console.log("kok undefined");
  } else {
    if (data.metadata.has_more_pages === true) {
      nextPage = true;
      // console.log("page : " + index + " " + nextPage);
    } else {
      nextPage = false;
      // console.log("page : " + index + " " + nextPage);
    }
  }

  // return data.map((item: { title: any }) => {
  //   item.title;
  // });

  if (isLoading) {
    // console.log("masih loading");
  }

  if (isValidating) {
    // console.log("masih validating");
  }

  if (error) {
    // console.log("error appear");
  }

  if (error === true) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // if (data === undefined) return <div>kok undefined</div>;

  return (
    <Grid container spacing={2} sx={{ my: "2px" }}>
      {data !== undefined ? (
        data.data.map(
          (
            item: {
              title: string;
              photo_path_url: string;
            },
            index: React.Key | null | undefined
          ) => (
            <Grid item md={4} sm={6} xs={12} key={index}>
              <Media imageLink={item.photo_path_url} title={item.title} />
            </Grid>
          )
        )
      ) : (
        <>
          {data === undefined ? (
            <>
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>
              <Grid item md={4} key={1}>
                <PlaceholderMedia imageLink={""} title={""} />
              </Grid>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </Grid>
  );
}

export default function Check() {
  const [count, setCount] = useState(1);
  const [IsNextPageAvailable, setIsNextPageAvailable] = useState(false);

  const pages = [];

  for (let i = 0; i < count; i++) {
    console.log(i);

    if (i !== 1) {
      pages.push(<Page index={i} key={i} />);
    }
  }

  const handleLoadMore = () => {
    if (count === 1) setCount((prev) => prev + 2);
    else setCount((prev) => prev + 1);
  };

  return (
    <>
      <Box sx={{ height: "420px", backgroundColor: "lightGray" }}>a</Box>
      <Container maxWidth={"lg"} sx={{ maxWidth: "1264px !important" }}>
        {pages}
        <Box display={"flex"} justifyContent={"center"}>
          <Button onClick={handleLoadMore} sx={{ display: `${nextPage}` }}>
            Load More
          </Button>
        </Box>
      </Container>
    </>
  );
}

function Media(props: MediaProps) {
  const { loading = false, imageLink, title } = props;

  return (
    <Link href={"/"} style={{ textDecoration: "none" }}>
      <Paper
        elevation={0}
        sx={{
          padding: "16px",
          backgroundColor: "#fafafa",
          border: "1px solid #fafafa",
          transition: "all .2s ease-in-out",
          // "&:hover > p": {
          //   color: "#0070f3",
          // },
          "&:hover": {
            border: "1px solid #eaeaea",
            color: "#0070f3",
          },
        }}
      >
        <Box
          sx={{
            // height: "12rem",
            backgroundColor: "transparent",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            overflow: "hidden",
            aspectRatio: "16 / 9",
            marginBottom: "8px",
            borderRadius: "8px",
            animation: `${boxShadowAnimation} 1s ease forwards`,
            transition: "box-shadow .2s ease",

            // transition: "box-shadow .2s ease",
            // animationDelay: ".2s",
            // animation: `${appear} .5s ease forwards`,
            // animationDelay: ".2s",
            "& > img": {
              // animationDelay: "2s",
              animation: `${appear} .5s ease forwards`,
            },
          }}
        >
          <Image
            src={imageLink}
            alt=""
            width={345}
            height={198}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#666666",
          }}
        >
          Residental - Jawa Tengah
        </Typography>
      </Paper>
    </Link>
  );
}

function PlaceholderMedia(props: MediaProps) {
  const { loading = false, imageLink } = props;

  return (
    <Skeleton
      sx={{
        position: "relative",
        width: "100%",
        margin: 0,
        paddingTop: "68.50%",
        animation: `${appear} .5s ease forwards`,
        backgroundColor: "#fafafa",
      }}
      animation="wave"
      variant="rounded"
    />
  );
}
