import AvailabilityBox from "@/components/AvailabilityBox";
import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

interface HeroProps {
  image: string;
  title: string;
}

const Hero = ({ image, title }: HeroProps) => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <>
      <Parallax
        speed={-5}
        style={{
          height: "535px",
          position: "absolute",
          width: "100%",
          zIndex: -10,
        }}
      >
        <img
          src={image}
          style={{
            position: "relative",
            inset: 0,
            width: "100%",
            height: "100%",
            filter: "brightness(80%)",
          }}
        />
      </Parallax>

      <Container sx={{ pt: isLargeScreen ? 20 : 10, pb: 10 }}>
        <Stack color={"white"} textAlign={"center"} gap={4} mb={24}>
          <Typography
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
            variant="h1"
            fontSize={isLargeScreen ? 60 : 45}
            fontWeight={"bold"}
            component={motion.div}
            initial="hidden"
            whileInView={"visible"}
            textTransform={"capitalize"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.5 },
              },
            }}
          >
            {title}
          </Typography>
        </Stack>
        {isLargeScreen && <AvailabilityBox />}
      </Container>
    </>
  );
};

export default Hero;
