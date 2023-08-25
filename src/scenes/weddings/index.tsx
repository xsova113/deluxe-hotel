import { Stack, useMediaQuery } from "@mui/material";

const WeddingsPage = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Stack mt={isLargeScreen ? 20 : 10} mb={12}>
      Weddings
    </Stack>
  );
};

export default WeddingsPage;
