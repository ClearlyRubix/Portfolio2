import {
  BusinessCenter,
  Description,
  GitHub,
  Home,
  LinkedIn,
  Mail,
} from "@mui/icons-material";
import { Box, List, ListItem, Typography } from "@mui/material";
import type React from "react";
import { Link } from "react-router";

const NavLink = ({
  text,
  to,
  icon,
  target,
}: {
  text: string;
  to: string;
  icon?: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
}) => {
  return (
    <ListItem disablePadding>
      <Typography
        component={Link}
        to={to}
        target={target}
        sx={(theme) => ({
          textDecoration: "none",
          fontSize: "16px",
          mixBlendMode: "difference",
          color: theme.palette.primary.main,
          "&:visited": {
            color: theme.palette.primary.main,
          },
          "&:hover": {
            textDecoration: "underline",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: { xs: "center" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              color: "white",
              scale: 0.8,
              height: "auto",
              width: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
          <Typography variant="body1" sx={{ width: "75px", lineHeight: 1 }}>
            {text}
          </Typography>
        </Box>
      </Typography>
    </ListItem>
  );
};

const NavLinks = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>Pages</Typography>
      <List disablePadding>
        <NavLink text="Home" to="/" icon={<Home />} />
        <NavLink text="Resume" to="/resume" icon={<Description />} />
        <NavLink text="Portfolio" to="/portfolio" icon={<BusinessCenter />} />
        <NavLink text="Contact" to="/contact" icon={<Mail />} />
      </List>
    </Box>
  );
};

const ExternalLinks = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>External</Typography>
      <List disablePadding>
        <NavLink
          text="LinkedIn"
          to="https://www.linkedin.com/in/caydenbatten/"
          target="_blank"
          icon={<GitHub />}
        />
        <NavLink
          text="GitHub"
          to="https://github.com/ClearlyRubix"
          target="_blank"
          icon={<LinkedIn />}
        />
      </List>
    </Box>
  );
};

const Branding = ({ name, title }: { name: string; title: string }) => {
  return (
    <Box
      sx={{
        paddingLeft: "0 !important",
      }}
    >
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={(theme) => ({
            height: "100%",
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            backgroundColor: theme.palette.divider,
            gap: "1px",
            "& > *": {
              bgcolor: theme.palette.background.default,
            },
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              component={Link}
              to={"/"}
              sx={(theme) => ({
                textDecoration: "none",
                fontSize: "16px",
                mixBlendMode: "difference",
                color: theme.palette.primary.main,
                "&:visited": {
                  color: theme.palette.primary.main,
                },
                "&:hover": {
                  textDecoration: "underline",
                },
              })}
            >
              {name}
            </Typography>
            <Typography variant="subtitle1" sx={{}}>
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption">
              Made with ♡ in Calgary
              <br />
              Copyright ©2026 — Cayden Batten
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Footer = ({
  footerRef,
  name,
  title,
}: {
  footerRef: React.RefObject<HTMLDivElement | null>;
  name: string;
  title: string;
}) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `1rem ${theme.padding?.pagePadding}`,
      })}
    >
      <Box
        ref={footerRef}
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "3fr 1fr 1fr",
          gap: "1px",
          bgcolor: theme.palette.divider,
          "& > .MuiBox-root": {
            bgcolor: theme.palette.background.default,
            paddingX: "1rem",
          },
        })}
      >
        <Branding name={name} title={title} />
        <ExternalLinks />
        <NavLinks />
      </Box>
    </Box>
  );
};
