import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import DestinationDrawer from "./DestinationDrawer";
import OccasionsDrawer from "./OccasionsDrawer";
import BookingDrawer from "./BookingDrawer";

const MobileNavbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ ":hover": { cursor: "pointer" } }}>
      <MenuIcon
        sx={{ fontSize: 35 }}
        onClick={() => setIsToggled(!isToggled)}
      />
      <Drawer
        anchor="right"
        open={isToggled}
        onClose={() => setIsToggled(false)}
      >
        <Box mt={3}>
          <Logo />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"300px"}
          alignItems={"start"}
          gap={2}
          px={3}
          mt={4}
        >
          <DestinationDrawer setIsToggled={setIsToggled} />
          <OccasionsDrawer />
          <Button
            sx={{ ":hover": { boxShadow: 2 } }}
            onClick={() => {
              setIsToggled(false);
              navigate("/ourrooms");
            }}
          >
            our rooms
          </Button>
          <Button
            sx={{ ":hover": { boxShadow: 2 } }}
            onClick={() => {
              setIsToggled(false);
              navigate("/reservation");
            }}
          >
            reservation
          </Button>
          <Button
            sx={{ ":hover": { boxShadow: 2 } }}
            onClick={() => {
              navigate("/contact");
              setIsToggled(false);
            }}
          >
            contact
          </Button>
          <BookingDrawer />
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
