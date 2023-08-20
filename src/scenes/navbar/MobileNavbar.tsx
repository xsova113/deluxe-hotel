import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import DestinationDrawer from "./DestinationDrawer";

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
        <Logo />
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"300px"}
          alignItems={"start"}
          gap={2}
          px={3}
          mt={4}
        >
          <DestinationDrawer />
          <Button
            sx={{ ":hover": { boxShadow: 2 } }}
            onClick={() => {
              setIsToggled(false);
              navigate("/occasions");
            }}
          >
            occasions
          </Button>
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
            }}
          >
            reservations
          </Button>
          <Button
            sx={{ ":hover": { boxShadow: 2 } }}
            onClick={() => setIsToggled(false)}
          >
            Platinum
          </Button>
          <Button
            sx={{ ":hover": { boxShadow: 2 } }}
            onClick={() => setIsToggled(false)}
          >
            contact
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
