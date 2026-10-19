import type React from "react";
import { WorkExperienceSection } from "../components/Experience/WorkExperienceSection";
import { Hero } from "../components/Hero";
import { Box, Typography } from "@mui/material";

const HeroText = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{ whiteSpace: "pre-wrap", marginBottom: "1rem" }}
      >
        {"Hi I'm\nCayden Batten"}
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: "600px" }}> {/* Intro Line */}
        About me blah blah blah. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam id dolor placerat, bibendum tortor sit amet,
        volutpat mi. In odio eros, tristique eu augue ac, egestas euismod eros.
      </Typography>
    </>
  );
};

const AboutSection = () => {
  return (
    <Box>
      <Typography variant="h1">About Me</Typography> {/* Title */}
      {/* Body */}
      <Typography variant="body1" sx={{ marginBottom: "1rem"}}> 
        About me blah blah blah. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam id dolor placerat, bibendum tortor sit amet,
        volutpat mi.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem"}}> 
        In my free time I. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam id dolor placerat, bibendum tortor sit amet,
        volutpat mi. In odio eros, tristique eu augue ac, egestas euismod eros.
        Donec tristique porta iaculis.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem"}}> 
        I also did this at... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam id dolor placerat, bibendum tortor sit amet,
        volutpat mi.
      </Typography>
    </Box>
  );
};


export const Landing = ({
  heroRef,
}: {
  heroRef: React.RefCallback<HTMLDivElement | null>;
}) => {

  return (
    <>
      <Hero
        heroRef={heroRef}
        src="/banner.png"
        TextComponent={<HeroText />}
        minHeight={{ xs: "50vh", md: "80vh" }}
        padding={"4vw 4vw 6vw"}
      />
      <Box
        sx={(theme) => ({
          padding: theme.padding?.pagePadding,
        })}
      >
        <AboutSection />
        <WorkExperienceSection />
      </Box>
    </>
  );
};
