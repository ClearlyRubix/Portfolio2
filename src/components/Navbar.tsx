import {
  BusinessCenterOutlined,
  DescriptionOutlined,
  HomeOutlined,
  MailOutlined,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import type { Property } from "csstype";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";

const PlaceholderNavIcon = ({
  width,
  height,
  ref,
}: {
  width: Property.Width<string | number>;
  height: Property.Height<string | number>;
  ref: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <Box
      ref={ref}
      sx={{
        width: width,
        height: height,
      }}
    />
  );
};

const NavIcon = ({
  isOpen,
  setIsOpen,
  position,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  position: {
    top: number;
    left: number;
    width: number;
    height: number;
  } | null;
}) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        width: position?.width,
        height: position?.height,
        top: position?.top,
        left: position?.left,
        padding: 0,
        containerType: "size",
        zIndex: theme.zIndex.drawer + 50,
      })}
    >
      <Box
        component={"button"}
        onClick={handleClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          backgroundColor: "transparent",
          borderRadius: "50%",
          border: "none",
          width: "100%",
          height: "100%",
          padding: "20cqh 20cqw",
          containerType: "size",
          "& .MuiBox-root": {
            width: "100cqw",
            height: "10cqh",
            backdropFilter: "invert(1)",
            transition: "transform 0.25s, opacity 0.25s",
            willChange: "transform",
            transformOrigin: "center",
          },
          "& .MuiBox-root:nth-of-type(1)": {
            transform: isOpen
              ? "translateY(calc((100cqh - 10cqh * 3) / 3 + 10cqh)) rotate(45deg)"
              : "none",
          },
          "& .MuiBox-root:nth-of-type(2)": {
            opacity: isOpen ? 0 : 1,
            transform: isOpen ? "scaleX(0)" : "none",
          },
          "& .MuiBox-root:nth-of-type(3)": {
            transform: isOpen
              ? "translateY(calc((100cqh - 10cqh * 3) / -3 - 10cqh)) rotate(-45deg)"
              : "none",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            backdropFilter: "invert(1)",
            opacity: 0,
            transition: "opacity 0.25s",
            zIndex: -1,
            pointerEvents: "none",
          },
          "&:hover::before": {
            opacity: 0.9,
          },
        }}
      >
        <Box component={"span"} />
        <Box component={"span"} />
        <Box component={"span"} />
      </Box>
    </Box>
  );
};

const NavItem = ({
  text,
  to,
  icon,
  setIsOpen,
}: {
  text: string;
  to: string;
  icon?: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={to}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <Box sx={{display: "flex", alignItems: "center", width: "100%", justifyContent: {xs: "center"}}}>
          <ListItemIcon sx={{ scale: 1.2 }}>{icon}</ListItemIcon>
          <Typography variant="body1" sx={{width: "75px", lineHeight: 2.7}}>{text}</Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

const NavDrawer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
      <Box
        sx={{
          width: { xs: "100vw", sm: "200px" },
          paddingTop: "var(--nav-height)",
        }}
      >
        <List>
          <NavItem
            setIsOpen={setIsOpen}
            text="Home"
            to="/"
            icon={<HomeOutlined />}
          />
          <NavItem
            setIsOpen={setIsOpen}
            text="Resume"
            to="/resume"
            icon={<DescriptionOutlined />}
          />
          <NavItem
            setIsOpen={setIsOpen}
            text="Portfolio"
            to="/portfolio"
            icon={<BusinessCenterOutlined />}
          />
          <NavItem
            setIsOpen={setIsOpen}
            text="Contact"
            to="/contact"
            icon={<MailOutlined />}
          />
        </List>
      </Box>
    </Drawer>
  );
};

export const Navbar = ({
  navRef,
  heroElement,
  name,
  title,
}: {
  navRef: React.RefObject<HTMLDivElement | null>;
  heroElement: HTMLDivElement | null;
  name: string;
  title: string;
}) => {
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

  const [isOpen, setIsOpen] = useState(false);

  const [navIconPosition, setNavIconPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  } | null>(null);

  const placeholderIconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const placeholder = placeholderIconRef.current;
    if (!placeholder) return;

    const updatePosition = () => {
      const rect = placeholder.getBoundingClientRect();

      setNavIconPosition({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(placeholder);

    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <Box
      sx={{
        height: 0,
        top: 0,
        margin: 0,
        position: "sticky",
        zIndex: 200,
        mixBlendMode: isIntersecting ? "difference" : "normal",
      }}
    >
      <Box
        ref={navRef}
        sx={(theme) => ({
          background: isIntersecting
            ? "transparent"
            : theme.palette.background.default,
          borderBottom: isIntersecting
            ? "transparent"
            : `1px solid ${theme.palette.divider}`,
          transition: "background 0.25s, border 0.25s",
          willChange: "background",
          label: "nav",
          padding: `1.2rem ${theme.padding?.pagePadding}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <Typography
          variant="h3"
          component={Link}
          to={"/"}
          sx={{
            textDecoration: "none",
            fontSize: "16px",
            display: { xs: "none", md: "block" },
            "&:visited": {
              color: "inherit",
            },
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {name} — {title}
        </Typography>
        <Typography
          variant="h3"
          component={Link}
          to={"/"}
          sx={{
            textDecoration: "none",
            fontSize: "16px",
            display: { xs: "block", md: "none" },
            "&:visited": {
              color: "inherit",
            },
            "&:hover": {
              textDecoration: "underlined",
            },
          }}
        >
          {name}
        </Typography>
        <PlaceholderNavIcon
          ref={placeholderIconRef}
          width={"30px"}
          height={"30px"}
        />
      </Box>
      {createPortal(
        <NavIcon
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          position={navIconPosition}
        />,
        document.body,
      )}
      <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};
