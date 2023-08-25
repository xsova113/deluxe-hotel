import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import DestinationsMap from "./DestinationsMap";
import HotelCards from "./HotelCards";

const DestinationsPage = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();

  return (
    <>
      <Stack mt={isLargeScreen ? 20 : 10} mx={4} mb={10} textAlign={"center"}>
        <Typography variant="h1" textTransform={"capitalize"}>
          explore all our destinations
        </Typography>
        <Typography mt={4} color={palette.primary[300]}>
          Discover the best of each destination and hotels around Canada
        </Typography>
      </Stack>
      <DestinationsMap />
      <HotelCards />
    </>
  );
};

export default DestinationsPage;
