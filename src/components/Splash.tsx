import { Avatar, Box } from "@mui/material";

export const Splash = () => {
  return (
    <Box>
      <Box
        component="img"
        src="/banner.png"
        alt="Banner"
        sx={{ width: "100%", objectFit: "cover" }}
      />
      <Avatar
        alt="Avatar"
        src="/avatar.png"
        sx={{
          width: "30%",
          height: "30%",
          marginTop: "-15%",
          marginLeft: "10%",
          zIndex: 2,
        }}
      />
    </Box>
  );
};
