import { Box, Button, TextField, Typography } from "@mui/material";
import type React from "react";
import { Helmet } from "react-helmet-async";

const ContactFormGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        label: "ContactFormGroup",
      }}
    >
      {children}
    </Box>
  );
};

const ContactFormRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: "1rem",
        label: "ContactFormRow",
      }}
    >
      {children}
    </Box>
  );
};

const ContactFormField = ({
  label,
  required = false,
  type = "text",
  name,
}: {
  label: string;
  required?: boolean;
  type: React.ComponentPropsWithoutRef<"input">["type"];
  name: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        label: "ContactFormField",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} component={"label"}>
        {label}
        {required ? (
          <Typography
            sx={{ filter: "contrast(40%)", fontSize: "0.8rem" }}
            component={"span"}
          >
            {" "}
            (required)
          </Typography>
        ) : null}
      </Typography>
      <TextField
        sx={{
          fontWeight: "bold",
          lineHeight: "normal",
          "& .MuiInputBase-input": {
            padding: "0.6rem 0.75rem",
          },
          "& .MuiInputBase-root": {
            borderRadius: 0,
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              mixBlendMode: "difference",
            },
        }}
        type={type}
        name={name}
        required={required}
      />
    </Box>
  );
};

export const ContactForm = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <ContactFormGroup>
        <Typography sx={{ fontWeight: "bold" }} component="label">
          Name
        </Typography>
        <ContactFormRow>
          <ContactFormField
            label="First Name"
            name="firstName"
            required
            type="text"
          />
          <ContactFormField
            label="Last Name"
            name="lastName"
            required
            type="text"
          />
        </ContactFormRow>
      </ContactFormGroup>
      <ContactFormGroup>
        <ContactFormField label="Email" name="email" required type="email" />
      </ContactFormGroup>
      <ContactFormGroup>
        <ContactFormField label="Subject" name="subject" required type="text" />
      </ContactFormGroup>
      <ContactFormGroup>
        <Typography sx={{ fontWeight: "bold" }} component={"label"}>
          Message
          <Typography
            sx={{ filter: "contrast(40%)", fontSize: "0.8rem" }}
            component={"span"}
          >
            {" "}
            (required)
          </Typography>
        </Typography>
        <TextField
          sx={{
            "& .MuiInputBase-input": {
              lineHeight: "normal",
              padding: "0.6rem 0.75rem",
            },
            "& .MuiInputBase-root": {
              padding: 0,
              borderRadius: 0,
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                mixBlendMode: "difference",
              },
          }}
          multiline
          name="message"
          rows={6}
          required
        />
      </ContactFormGroup>
      <Button
        variant="contained"
        type="submit"
        sx={{
          borderRadius: 0,
          alignSelf: "flex-start",
          textTransform: "none",
          boxShadow: "none",
          bgcolor: "white",
          mixBlendMode: "difference",
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact — Cayden Batten</title>
        <link rel="canonical" href="https://caydenbatten.ca/contact" />
      </Helmet>
      <Box
        sx={(theme) => ({
          display: { xs: "flex", md: "grid" },
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          flexDirection: { xs: "column" },
          gap: "4vw",
          alignItems: { xs: "start", md: "center" },
          justifyContent: "center",
          label: "ContactSection",
          marginTop: "var(--nav-height)",
          minHeight: "calc(100vh - var(--nav-height) - var(--footer-height))",
          padding: theme.padding?.pagePadding,
          maxWidth: "1200px",
        })}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            label: "ContactHeader",
          }}
        >
          <Typography variant="h2">Send Me a Message</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            label: "ContactFormColumn",
          }}
        >
          <ContactForm />
        </Box>
      </Box>
    </>
  );
};
