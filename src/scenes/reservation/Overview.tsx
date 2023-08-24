import { Container, Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import OverviewCard from "./OverviewCard";
import CheckoutForm from "./CheckoutForm";

const Overview = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Container sx={{ mt: 6, mb: 4 }}>
      <Typography variant="h2">Overview & Checkout</Typography>
      <FlexBetween
        display={"flex"}
        sx={{ alignItems: "start" }}
        flexDirection={isLargeScreen ? "row" : "column"}
        mt={4}
        gap={8}
      >
        <CheckoutForm />
        <OverviewCard />
      </FlexBetween>
    </Container>
  );
};

export default Overview;
