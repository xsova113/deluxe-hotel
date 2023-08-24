import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import Map from "@/components/Map";
import { Email, Phone } from "@mui/icons-material";

const ContactSection = ({ isContactPage }: { isContactPage?: boolean }) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();

  return (
    <Box
      mt={!isContactPage ? 20 : 0}
      display={"flex"}
      flexDirection={isLargeScreen ? "row" : "column-reverse"}
      gap={10}
    >
      <Map />
      <Box
        flexBasis={isLargeScreen ? "50%" : "100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        ml={3}
      >
        <Typography fontSize={12}>INFORMATION</Typography>
        <Typography variant="h1" fontWeight={"bold"}>
          Contact Us
        </Typography>
        <Typography variant="h2" mt={10} mb={1}>
          Richmond, Canada
        </Typography>
        <Typography color={palette.primary[400]}>
          1234 No.4 Rd, Richmond, BB, V1B2C3, <br />
        </Typography>
        <Typography color={palette.primary[400]}>Canada</Typography>
        <Typography
          color={palette.primary[400]}
          mt={4}
          alignItems={"center"}
          display={"flex"}
          gap={0.5}
        >
          <Email />
          <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
          <Link href="mailto:info@deluxe.co">info@deluxe.co</Link>
        </Typography>
        <Typography
          color={palette.primary[400]}
          mt={4}
          alignItems={"center"}
          display={"flex"}
          gap={0.5}
        >
          <Phone />
          <span style={{ fontWeight: "bold" }}>Phone:</span> +1 (111) 222 3333
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactSection;
