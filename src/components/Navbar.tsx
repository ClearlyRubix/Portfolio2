import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

export const Navbar = ({
  heroRef,
  navRef
}: {
  heroRef: React.RefObject<HTMLDivElement | null>;
  navRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const theme = useTheme();

  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  // setup observer for if navbar is intersecting with hero component
  useEffect(() => {
    const HeroElement = heroRef.current;
    const NavElement = navRef.current;

    if (!HeroElement || !NavElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(HeroElement);

    return () => {
      observer.disconnect();
    };
  }, [heroRef, navRef]);

  return (
    <Box sx={{
      height: 0,
      top: 0,
      margin: 0,
      position: "sticky",
      zIndex: 200
    }}>
      <Box
        ref={navRef}
        sx={{
          background: isIntersecting
            ? "transparent"
            : theme.palette.background.default,
          borderBottom: isIntersecting
            ? "transparent"
            : `1px solid ${theme.palette.divider}`,
          transition: "background 0.25s, border 0.25s",
          label: "nav",
        }}
      >
        <Typography variant="body1">
          Intersecting: {`${isIntersecting}`}
          Divider: {theme.palette.divider}
        </Typography>
      </Box>
    </Box>
  );
};
