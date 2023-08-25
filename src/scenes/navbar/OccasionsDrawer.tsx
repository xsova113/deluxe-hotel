import {
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { occasionDetails } from "./constants";
import NavCard from "./NavCard";
import FlexBetween from "@/components/FlexBetween";
import { Close } from "@mui/icons-material";

const OccasionsDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { palette } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <>
      <Button id="destination" onClick={() => setIsOpen(!isOpen)}>
        occasions
      </Button>
      <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
        <FlexBetween
          px={10}
          py={4}
          flexDirection={isLargeScreen ? "row" : "column"}
        >
          <Stack
            gap={6}
            width={isLargeScreen ? "25%" : "100%"}
            mb={isLargeScreen ? 0 : 4}
          >
            <Typography variant="h2">Let's Celebrate</Typography>
            <Typography color={palette.primary[400]}>
              Enjoy and celebrate all the events and turn it into a
              unforgettable memory.
            </Typography>
          </Stack>
          <FlexBetween
            width={"73%"}
            flexDirection={isLargeScreen ? "row" : "column"}
          >
            {occasionDetails.map((item) => (
              <NavCard
                key={item.title}
                image={item.image}
                title={item.title}
                setIsOpen={setIsOpen}
                pathname={item.pathname}
              />
            ))}
          </FlexBetween>
        </FlexBetween>
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{ position: "absolute", left: 0, m: 2 }}
        >
          <Close />
        </IconButton>
      </Drawer>
    </>
  );
};

export default OccasionsDrawer;
