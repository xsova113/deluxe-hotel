import {
  Button,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { destinationDetails } from "./constants";
import NavCard from "./NavCard";
import FlexBetween from "@/components/FlexBetween";
import { Close } from "@mui/icons-material";

const DestinationDrawer = ({
  setIsToggled,
}: {
  setIsToggled?: (value: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { palette } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <>
      <Button id="destination" onClick={() => setIsOpen(!isOpen)}>
        destinations
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
            <Typography variant="h2">Your Destinations</Typography>
            <Typography color={palette.primary[400]}>
              Discover all our best in class hotels throughout the cities of
              Canada.
            </Typography>
            <Link href="/destinations" textTransform={"uppercase"}>
              explore all on a map
            </Link>
          </Stack>
          <FlexBetween
            width={"73%"}
            flexDirection={isLargeScreen ? "row" : "column"}
          >
            {destinationDetails.map((item) => (
              <NavCard
                key={item.title}
                image={item.image}
                title={item.title}
                pathname={item.pathname}
                setIsOpen={setIsOpen}
                setIsToggled={setIsToggled}
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

export default DestinationDrawer;
