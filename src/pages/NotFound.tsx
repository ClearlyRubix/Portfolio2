import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Cayden Batten</title>
        <link rel="canonical" href="https://caydenbatten.ca/contact" />
      </Helmet>
      <Box
        sx={{
          marginTop: "var(--nav-height)",
          minHeight: "calc(100vh - var(--nav-height) - var(--footer-height))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "6rem" }}>
          404
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: "2rem" }}>
          Oops, Page Not Found!
        </Typography>
      </Box>
    </>
  );
};
