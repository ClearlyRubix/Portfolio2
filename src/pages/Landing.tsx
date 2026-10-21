import type React from "react";
import { WorkExperienceSection } from "../components/Experience/WorkExperienceSection";
import { Hero } from "../components/Hero";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

const HeroText = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={(theme) => ({
          whiteSpace: "pre-wrap",
          marginBottom: "1rem",
          mixBlendMode: "difference",
          color: theme.palette.primary.main,
        })}
      >
        {"Hi I'm\nCayden Batten"}
      </Typography>
      <Typography
        variant="body1"
        sx={(theme) => ({
          maxWidth: "600px",
          mixBlendMode: "difference",
          color: theme.palette.primary.main,
        })}
      >
        {" "}
        {/* Intro Line */}
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
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        About me blah blah blah. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam id dolor placerat, bibendum tortor sit amet,
        volutpat mi.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        In my free time I. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam id dolor placerat, bibendum tortor sit amet, volutpat mi.
        In odio eros, tristique eu augue ac, egestas euismod eros. Donec
        tristique porta iaculis.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        I also did this at... Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nullam id dolor placerat, bibendum tortor sit amet, volutpat mi.
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
      <Helmet>
        <title>Cayden Batten</title>
        <link rel="canonical" href="https://caydenbatten.ca/" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Cayden Batten",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA",
                "addressLocality": "Calgary, Alberta, Canada"
              },
              "url": "https://caydenbatten.ca",
              "jobTitle": "Electrical and Mechatronics Engineering Student",
              "description": "Electrical and Mechatronics Engineering Student",
              "image": {
                  "@type": "ImageObject",
                  "contentUrl": "https://caydenbatten.ca/icon.svg"
                },
              "sameAs": [
                "https://www.linkedin.com/in/caydenbatten/",
                "https://github.com/ClearlyRubix"
              ],
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "******* ******** ***********",
                  "location": "Calgary, Alberta, Canada",
                  "member": {
                    "@type": "OrganizationRole",
                    "roleName": "Engineer Intern - Pipeline Integrity",
                    "url": "https://www.pembina.com/",
                    "startDate": "2025-04",
                    "endDate": "2026-04"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "******* ******** ***********",
                  "location": "Calgary, Alberta, Canada",
                  "member": {
                    "@type": "OrganizationRole",
                    "roleName": "Summer Student - Operations",
                    "url": "https://www.pembina.com/",
                    "startDate": "2024-05",
                    "endDate": "2024-08"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "****** ****** ******",
                  "location": "Calgary, Alberta, Canada",
                  "member": {
                    "@type": "OrganizationRole",
                    "roleName": "Summer Student - Volumetric & Commercial Applications",
                    "startDate": "2023-05",
                    "endDate": "2023-08"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "******* ******** ***********",
                  "location": "Calgary, Alberta, Canada",
                  "member": {
                    "@type": "OrganizationRole",
                    "roleName": "Software Developer",
                    "startDate": "2022-06",
                    "endDate": "2022-08"
                  }
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Calgary",
                  "url": "https://ucalgary.ca/",
                  "member": {
                    "@type": "OrganizationRole",
                    "startDate": "2022-09",
                    "endDate": "2027-04"
                  }
                }
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Zeus Electric Motorsport",
                  "url": "https://www.zeuselectricmotorsport.com/",
                  "location": "Calgary, Alberta, Canada",
                  "member": { "@type": "OrganizationRole" }
                }
              ]
            }
          }`}
        </script>
      </Helmet>
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
