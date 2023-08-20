import FlexBetween from "@/components/FlexBetween";
import Logo from "@/components/Logo";
import {
  Facebook,
  Instagram,
  Send,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Input,
  InputAdornment,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import IconButtons from "./IconButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Footer = () => {
  const { palette } = useTheme();
  const currentyear = new Date().getFullYear();
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/newsletter", {
        email: email,
      });
      const data = await response.data;

      alert(data.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      bgcolor={palette.primary.main}
      pb={4}
    >
      <FlexBetween
        py={4}
        px={14}
        color={"white"}
        flexDirection={isLargeScreen ? "row" : "column"}
        gap={4}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignSelf={"start"}
          gap={1}
        >
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Site Map
          </Link>
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Term & Conditions
          </Link>
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Privacy Policy
          </Link>
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Affiliate
          </Link>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignSelf={"start"}
          gap={1}
        >
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Our Locations
          </Link>
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Career
          </Link>
          <Link
            onClick={() => navigate("/aboutus")}
            sx={{ color: "white", ":hover": { cursor: "pointer" } }}
          >
            About
          </Link>
          <Link
            onClick={() => navigate("/contact")}
            sx={{ color: "white", ":hover": { cursor: "pointer" } }}
          >
            Contact
          </Link>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignSelf={"start"}
          gap={1}
        >
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            FAQs
          </Link>
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Press
          </Link>
          <Link sx={{ color: "white", ":hover": { cursor: "pointer" } }}>
            Platinum
          </Link>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignSelf={"start"}
          gap={1}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="email" style={{ color: "white", marginBottom: 30 }}>
              Sign up to get our newsletter
            </label>
            <Input
              type="email"
              sx={{ color: "white" }}
              endAdornment={
                <InputAdornment position="end">
                  <Send sx={{ color: palette.primary[300] }} />
                </InputAdornment>
              }
              placeholder="Your email..."
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </form>
        </Box>
      </FlexBetween>
      <Divider
        sx={{ bgcolor: palette.primary[400], mb: 2, width: "82%", mx: "auto" }}
      />
      <FlexBetween mx={14} flexDirection={isLargeScreen ? "row" : "column"}>
        <FlexBetween gap={3}>
          <Logo isFooter />
          <Typography
            alignSelf={"end"}
            color={palette.primary.light}
            fontSize={12}
          >
            © {currentyear} Deluxe Hotel
          </Typography>
        </FlexBetween>
        <FlexBetween color={"white"} gap={3} alignSelf={"end"}>
          <IconButtons icon={<Twitter />} />
          <IconButtons icon={<Facebook />} />
          <IconButtons icon={<Instagram />} />
          <IconButtons icon={<YouTube />} />
        </FlexBetween>
      </FlexBetween>
    </Box>
  );
};

export default Footer;
