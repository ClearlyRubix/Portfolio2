import { Box } from "@mui/material";
import { type ResponsiveStyleValue } from "@mui/system";
import type { Property } from "csstype";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

export const Hero = ({
  heroRef,
  src,
  TextComponent,
  minHeight,
  padding,
}: {
  heroRef: React.RefCallback<HTMLDivElement | null>;
  src: string;
  TextComponent?: React.ReactNode;
  minHeight?: ResponsiveStyleValue<Property.Width>;
  padding?: ResponsiveStyleValue<Property.Width>;
}) => {

  const localHeroRef = useRef<HTMLDivElement | null>(null)

  const [heroScale, setHeroScale] = useState(1);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (!localHeroRef.current) return;
        const zoomProgress = Math.min(
          window.scrollY / localHeroRef.current?.offsetHeight,
          1,
        );
        setHeroScale(1 + zoomProgress * 0.12);
      },
      { passive: true },
    );
  }, [heroRef]);


  const setHeroElement = useCallback(
    (node: HTMLDivElement | null) => {
      localHeroRef.current = node
      heroRef(node)
    },
    [heroRef]
  )

  return (
    <Box
      ref={setHeroElement}
      sx={{
        label: "hero",
        overflow: "hidden",
        minHeight: minHeight ?? { xs: "30vw", md: "50vw" },
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
        padding: padding ?? "4vw",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          scale: heroScale,
          zIndex: 0,
          position: "absolute",
          inset: 0,
          willChange: "scale",
        }}
      />
      <Box sx={{position: "relative"}}>{TextComponent}</Box>
    </Box>
  );
};
