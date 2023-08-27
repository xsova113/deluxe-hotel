import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import OfferCards from "./OfferCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import "../../App.css";

const Offers = () => {
  const { palette } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 980px)");

  return (
    <Box width={"100%"} py={isLargeScreen ? 14 : 8} px={4} bgcolor={"white"}>
      <Typography
        fontWeight={"bold"}
        variant="h1"
        textAlign={"center"}
        mb={6}
        mt={2}
        color={palette.primary[400]}
      >
        What Deluxe Offer
      </Typography>
      <Slider
        nextArrow={
          <ChevronRight
            sx={{
              color: palette.secondary.main,
              ":hover": { color: palette.secondary.light },
            }}
          />
        }
        prevArrow={
          <ChevronLeft
            sx={{
              color: palette.secondary.main,
              ":hover": { color: palette.secondary.light },
            }}
          />
        }
        dots
        appendDots={(dots) => (
          <div>
            <ul style={{ WebkitTextFillColor: palette.secondary.main }}>
              {dots}
            </ul>
          </div>
        )}
        slidesToScroll={1}
        slidesToShow={isLargeScreen ? 2 : 1}
        centerMode={isLargeScreen}
      >
        <OfferCards
          pathname="/spa"
          image={"spa"}
          label={"Spa"}
          description={
            "Ipsum amet sint adipisicing nostrud. Esse velit duis quis exercitation anim ullamco. Do minim pariatur nostrud consectetur aliquip occaecat."
          }
        />
        <OfferCards
          pathname="/pool"
          image={"pool"}
          label={"Large Pool"}
          description={
            "Do est id dolor voluptate aliquip magna ex culpa ipsum labore laboris cupidatat id."
          }
        />
        <OfferCards
          pathname="/dining"
          image={"dining"}
          label={"Best in Class Dining"}
          description={
            "Sint duis id eu aliqua sint esse officia aute occaecat veniam."
          }
        />
        <OfferCards
          pathname="/ourRooms"
          image={"room"}
          label={"Luxurious Room"}
          description={
            "Proident minim cillum dolor minim Lorem non consectetur id nulla fugiat commodo est esse."
          }
        />
      </Slider>
    </Box>
  );
};

export default Offers;
