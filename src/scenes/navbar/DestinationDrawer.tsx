import {
  Button,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { cardDetails } from "./constants";
import DestinationCard from "./DestinationCard";
import FlexBetween from "@/components/FlexBetween";
import { Close } from "@mui/icons-material";

const DestinationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { palette } = useTheme();

  return (
    <>
      <Button id="destination" onClick={() => setIsOpen(!isOpen)}>
        destinations
      </Button>
      <Drawer anchor="top" open={isOpen} onClose={() => setIsOpen(false)}>
        <FlexBetween px={10} py={4}>
          <Stack gap={6} width={"25%"}>
            <Typography variant="h2">Your Destinations</Typography>
            <Typography color={palette.primary[400]}>
              Discover all our best in class hotels throughout the cities of
              Canada.
            </Typography>
            <Link textTransform={"uppercase"}>explore all on a map</Link>
          </Stack>
          <FlexBetween width={"73%"}>
            {cardDetails.map((item) => (
              <DestinationCard
                key={item.title}
                image={item.image}
                title={item.title}
              />
            ))}
          </FlexBetween>
        </FlexBetween>
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{ position: "absolute", right: 0, m: 2 }}
        >
          <Close />
        </IconButton>
      </Drawer>
    </>
  );
};

export default DestinationDrawer;
