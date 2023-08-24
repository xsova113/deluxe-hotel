import AvailabilityBox from "@/components/AvailabilityBox";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const Hero = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Box textAlign={"center"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"460px"}
        color={"white"}
      >
        <Parallax
          style={{
            position: "relative",
            display: "flex",
            height: "30%",
            zIndex: -5,
          }}
          speed={-10}
        >
          <img
            src="/assets/hero.png"
            alt="hero-image"
            style={{
              position: "absolute",
              width: "100%",
              height: "520px",
              marginTop: "5rem",
              objectFit: "cover",
              top: -120,
              filter: "brightness(70%)",
            }}
            loading="eager"
          />
        </Parallax>

        <Typography
          mb={2}
          fontSize={16}
          fontWeight={"bold"}
          component={motion.div}
          initial="hidden"
          whileInView={"visible"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          Welcome to
        </Typography>
        <Typography
          color={"white"}
          variant="h1"
          fontSize={isLargeScreen ? 60: 45}
          fontWeight={"bold"}
          component={motion.div}
          initial="hidden"
          whileInView={"visible"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 0.5 },
            },
          }}
        >
          Deluxe Resort
        </Typography>
        <Typography
          mt={4}
          component={motion.div}
          initial="hidden"
          whileInView={"visible"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 0.5 },
            },
          }}
        >
          A place of paradise where you can relax and enjoy life
        </Typography>
      </Box>
      {isLargeScreen && <AvailabilityBox />}
    </Box>
  );
};

export default Hero;
