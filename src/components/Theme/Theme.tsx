import { createTheme } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";

import "@fontsource-variable/roboto";
import "@fontsource/poppins";
import "@fontsource/ubuntu";
import "@fontsource-variable/inter";

interface PaddingOptions {
  pagePadding?: string
}

interface WidthOptions {
  pageMaxWidth?: string
}

declare module "@mui/material/styles" {

  interface Theme {
    padding?: PaddingOptions,
    width?: WidthOptions
  }

  interface ThemeOptions {
    padding?: PaddingOptions,
    width?: WidthOptions
  }

}

declare module "@mui/system" {

  interface Theme {
    padding?: PaddingOptions,
    width?: WidthOptions
  }

}

export const themeOptions: ThemeOptions = {
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#ffffff",
          light: "#f7f7f7",
          dark: "#555555",
          contrastText: "#000000",
        },
        secondary: {
          main: "#9c27b0",
        },
        error: {
          main: "#d32f2f",
        },
        divider: "rgba(255, 255, 255, 0.12)",
      },
    },
    light: {
      palette: {
        primary: {
          main: "#ffffff",
          light: "#f7f7f7",
          dark: "#555555",
          contrastText: "#000000",
        },
        secondary: {
          main: "#9c27b0",
        },
        error: {
          main: "#d32f2f",
        },
        divider: "rgba(0, 0, 0, 0.12)",
      },
    },
  },
  typography: {
    fontFamily: "Inter, Poppins, Ubuntu, Roboto",
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: 1.1,
    },
    h4: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.1,
    },
    h5: {
      fontSize: '1.2rem',
      lineHeight: 1.1,
    },
    h6: {
      fontSize: '1rem',
      lineHeight: 1.1,
      fontWeight: 300,
    },
    fontSize: 16,
    subtitle1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: "0.8rem",
      fontWeight: 200,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      lineHeight: 1.21,
      fontWeight: 400,
    },
    button: {
      fontWeight: 500,
      lineHeight: 1.73,
    },
  },
  padding: {
    pagePadding: "4vw"
  },
};

export const rootTheme = createTheme(themeOptions);
