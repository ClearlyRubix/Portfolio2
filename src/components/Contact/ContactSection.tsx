import { Box, Button, Typography } from "@mui/material";
import type React from "react";

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
      <Typography component={"label"}>
        {label}
        {required ? (
          <Typography component={"span"}> (required)</Typography>
        ) : null}
      </Typography>
      <input type={type} name={name} required={required} />
    </Box>
  );
};

export const ContactSection = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: "4vw",
        alignItems: "center",
        label: "ContactSection",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          label: "ContactHeader",
        }}
      >
        <Typography>Send Me a Message</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          label: "ContactFormColumn",
        }}
      >
        <Box component="form">
          <ContactFormGroup>
            <Typography component="label">Name</Typography>
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
            <ContactFormField
              label="Email"
              name="email"
              required
              type="email"
            />
          </ContactFormGroup>
          <ContactFormGroup>
            <Typography component={"label"}>Message</Typography>
            <textarea name="message" rows={6} required />
          </ContactFormGroup>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
