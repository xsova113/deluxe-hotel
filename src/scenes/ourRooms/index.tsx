import { Box, Typography, useMediaQuery } from "@mui/material";
import Slider from "react-slick";
import FilterBox from "./FilterBox";
import { motion } from "framer-motion";
import RoomsSection from "./RoomsSection";

const OurRooms = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box textAlign={"center"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        height={"460px"}
        color={"white"}
        mb={10}
        maxHeight={400}
      >
        <Box
          zIndex={-10}
          mt={4}
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            zIndex={10}
            mt={isLargeScreen ? 16 : 0}
          >
            <Typography
              variant="h1"
              fontSize={60}
              fontWeight={"bold"}
              component={motion.div}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.1 }}
              whileInView={"visible"}
              variants={variants}
            >
              Our Rooms
            </Typography>
            <Typography
              mt={4}
              component={motion.div}
              initial="hidden"
              transition={{ duration: 0.5, delay: 0.2 }}
              whileInView={"visible"}
              variants={variants}
              width={isLargeScreen ? "50%" : "80%"}
              mx={"auto"}
            >
              Enjoy our world class luxurious rooms. From cheaper to more
              expensive rooms based on the level to suit your needs.
            </Typography>
          </Box>

          <Box
            sx={{ filter: "brightness(75%)" }}
            position={"absolute"}
            top={8}
            width={"100%"}
          >
            <Slider arrows={false} infinite autoplay pauseOnHover={false}>
              <Box height={isLargeScreen ? 600 : 400} position={"relative"}>
                <img
                  src="/assets/supreme1.png"
                  alt="hero-image"
                  style={{
                    objectFit: "cover",
                    height: isLargeScreen ? undefined : 400,
                    width: "100%",
                  }}
                  loading="eager"
                />
              </Box>
              <Box height={isLargeScreen ? 600 : 400} position={"relative"}>
                <img
                  src="/assets/lux1.png"
                  alt="hero-image"
                  style={{
                    objectFit: "cover",
                    height: isLargeScreen ? undefined : 400,
                    width: "100%",
                  }}
                  loading="eager"
                />
              </Box>
              <Box height={isLargeScreen ? 600 : 400} position={"relative"}>
                <img
                  src="/assets/standard1.png"
                  alt="hero-image"
                  style={{
                    objectFit: "cover",
                    height: isLargeScreen ? undefined : 400,
                    width: "100%",
                  }}
                  loading="eager"
                />
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>
      {isLargeScreen && <FilterBox />}
      <RoomsSection />
    </Box>
  );
};

export default OurRooms;
