import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export const Navbar = ({
  navRef,
  heroElement,
}: {
  navRef: React.RefObject<HTMLDivElement | null>;
  heroElement: HTMLDivElement | null
}) => {
  const theme = useTheme();

  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  // setup observer for if navbar is intersecting with hero component
  useEffect(() => {
    const NavElement = navRef.current;

    if (!heroElement || !NavElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [heroElement, navRef]);

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
        <Link to={"/"}>Cayden Batten — Electrical and Mechatronics Engineering Student</Link>
        <Typography variant="body1">
          Intersecting: {isIntersecting}
        </Typography>
      </Box>
    </Box>
  );
};
