import Container from "@/components/Container";
import FlexBetween from "@/components/FlexBetween";
import { Box, Button, useMediaQuery } from "@mui/material";
import MobileNavbar from "./MobileNavbar";
import Logo from "@/components/Logo";
import DestinationDrawer from "./DestinationDrawer";
import { useNavigate } from "react-router-dom";
import OccasionsDrawer from "./OccasionsDrawer";
import BookingMenu from "./BookingMenu";
import { useScrollTrigger } from "@/hooks/use-scroll-trigger";

const Navbar = () => {
  const isDesktopScreen = useMediaQuery("(min-width: 920px)");
  const navigate = useNavigate();
  const show = useScrollTrigger();

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
