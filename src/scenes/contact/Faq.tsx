import { Stack, Typography, useMediaQuery } from "@mui/material";
import FaqAccordian from "./FaqAccordian";

const Faq = () => {
  const islargeScreen = useMediaQuery("(min-width: 940px)");

  return (
    <Stack mx={"auto"} mt={12} width={islargeScreen ? "70%" : "90%"}>
      <Typography fontSize={20} mb={3} fontWeight={"bold"}>
        Frequently Asked Questions
      </Typography>
      <FaqAccordian
        question={"What are the discounts or offers?"}
        answer={
          "Duis cillum do nulla culpa commodo.Cillum nisi aute nisi minim est laboris proident commodo incididunt ex.Ipsum magna consequat excepteur nulla cillum fugiat quis laboris laboris."
        }
      />
      <FaqAccordian
        question={"How do I change my reservation?"}
        answer={
          "Duis cillum do nulla culpa commodo.Cillum nisi aute nisi minim est laboris proident commodo incididunt ex.Ipsum magna consequat excepteur nulla cillum fugiat quis laboris laboris."
        }
      />
      <FaqAccordian
        question={"Can I be refunded for cancelling my reservation?"}
        answer={
          "Duis cillum do nulla culpa commodo.Cillum nisi aute nisi minim est laboris proident commodo incididunt ex.Ipsum magna consequat excepteur nulla cillum fugiat quis laboris laboris."
        }
      />
      <FaqAccordian
        question={"How can I get a discount?"}
        answer={
          "Duis cillum do nulla culpa commodo.Cillum nisi aute nisi minim est laboris proident commodo incididunt ex.Ipsum magna consequat excepteur nulla cillum fugiat quis laboris laboris."
        }
      />
    </Stack>
  );
};

export default Faq;
