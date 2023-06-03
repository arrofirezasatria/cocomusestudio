import { Box, Button } from "@mui/material";
import { error } from "console";
import React, { useState } from "react";
import useSWR from "swr";

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
  if (data === undefined) return <div>kok undefined</div>;

  return (
    <div>
      {data === undefined ? (
        <div>kok undefined</div>
      ) : (
        data.data.map((item: { title: any }) => {
          item.title;
        })
      )}
    </div>
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
    <Box>
      <Box>{pages}</Box>
      <Button onClick={() => setCount(count + 1)}>something</Button>
    </Box>
  );
}
