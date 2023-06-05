import { Box, Button, Container, Grid, Skeleton, Stack } from "@mui/material";
import { error } from "console";
import { data } from "cypress/types/jquery";
import React, { useState } from "react";
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
    opacit: 1;
  }
`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

interface MediaProps {
  imageLink: string;
  loading?: boolean;
}

// const fetcher = (url) => axios.get(url).then((res) => res.data);
const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

function Page({ index }) {
  console.log(index);
  const { data, error, isLoading, isValidating } = useSWR(
    `https://api.sunpower.id/api/projects?page=${index}`,
    fetcher2
  );
  // console.log(apiUrl + `/projects?page=${index}`);
  // console.log(count);
  console.log(data);

  if (data === undefined) {
    console.log("kok undefined");
  }

  // return data.map((item: { title: any }) => {
  //   item.title;
  // });

  if (isLoading) {
    console.log("masih loading");
  }

  if (isValidating) {
    console.log("masih validating");
  }

  if (error) {
    console.log("error appear");
  }

  if (error === true) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // if (data === undefined) return <div>kok undefined</div>;

  return (
    <Grid container width={"1264px"} spacing={3} sx={{ my: "2px" }}>
      {data !== undefined ? (
        data.data.map(
          (
            item: { photo_path_url: string },
            index: React.Key | null | undefined
          ) => (
            <Grid item md={4} key={index}>
              <Media imageLink={item.photo_path_url} />
            </Grid>
          )
        )
      ) : (
        <>
          {data === undefined ? (
            <>
              <Grid item md={4} key={1}>
                <Media imageLink={""} />
              </Grid>
              <Grid item md={4} key={1}>
                <Media imageLink={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <Media imageLink={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <Media imageLink={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <Media imageLink={""} />
              </Grid>{" "}
              <Grid item md={4} key={1}>
                <Media imageLink={""} />
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

  const pages = [];

  for (let i = 0; i < count; i++) {
    // console.log(i);
    pages.push(<Page index={i} key={i} />);
  }

  return (
    <Container>
      {pages}
      <Box display={"flex"} justifyContent={"center"}>
        <Button onClick={() => setCount(count + 1)}>Load More</Button>
      </Box>
    </Container>
  );
}

function Media(props: MediaProps) {
  const { loading = false, imageLink } = props;

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        margin: 0,
        paddingTop: "56.25%",
        animation: `${appear} .2s ease forwards`,
      }}
    >
      {loading ? (
        <Skeleton sx={{ height: 260 }} animation="wave" variant="rectangular" />
      ) : (
        <Image
          src={imageLink}
          alt={"asd"}
          fill
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          style={{
            objectFit: "cover",
            animation: `${appear} .2s ease forwards`,
          }}
        />

        // <CardMedia
        //   component="img"
        //   height="210"
        //   image={imageLink}
        //   alt="Nicola Sturgeon on a TED talk stage"
        // />
      )}
    </Card>
  );
}
