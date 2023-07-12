import { Box, Stack } from "@mui/material";
import React from "react";
import useSWR from "swr";

const fetcher2 = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function Product() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://api.sunpower.id/api/products",
    fetcher2
  );

  return (
    <Stack spacing={2}>
      {isLoading === true ? (
        <>masih loading</>
      ) : (
        <>
          {data.data.map((item, index) => {
            return <Box key={index}>{item.title}</Box>;
          })}
        </>
      )}
    </Stack>
  );
}
