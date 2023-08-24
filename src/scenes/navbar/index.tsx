import Container from "@/components/Container";
import FlexBetween from "@/components/FlexBetween";
import { Box, Button, useMediaQuery } from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import Logo from "@/components/Logo";
import DestinationDrawer from "./DestinationDrawer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import OccasionsDrawer from "./OccasionsDrawer";
import BookingMenu from "./BookingMenu";

const Navbar = () => {
  const isDesktopScreen = useMediaQuery("(min-width: 920px)");
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function () {
      currentScrollPosition = window.scrollY;

      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <Box bgcolor={"white"}>
      {isDesktopScreen ? (
        <Container as={"nav"}>
          <FlexBetween
            style={{ textTransform: "uppercase", right: 0, top: 0 }}
            position={"fixed"}
            width={"100%"}
            bgcolor={"white"}
            zIndex={10}
            boxShadow={4}
            p={"1rem 2rem"}
            sx={{
              transitionDuration: "300ms",
              translate: show ? 0 : "0 -120%",
            }}
          >
            <DestinationDrawer />
            <OccasionsDrawer />
            <Button onClick={() => navigate("/ourrooms")}>our rooms</Button>
            <Logo />
            <Button onClick={() => navigate("/reservation")}>
              reservation
            </Button>
            <Button onClick={() => navigate("/contact")}>contact</Button>
            <BookingMenu />
          </FlexBetween>
        </Container>
      ) : (
        <FlexBetween px={2} py={1}>
          <Logo />
          <MobileNavbar />
        </FlexBetween>
      )}
    </Box>
  );
};

export default Navbar;
