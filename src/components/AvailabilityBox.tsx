import { Button, Divider, useMediaQuery, useTheme } from "@mui/material";
import DatePicker from "./DatePicker";
import GuestPicker from "./GuestPicker";
import FlexBetween from "./FlexBetween";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AvailabilityBox = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();
  const navigate = useNavigate();

  return (
    <FlexBetween
      bgcolor={"white"}
      displayPrint={"flex"}
      flexDirection={isLargeScreen ? "row" : "column"}
      width={isLargeScreen ? "80%" : "90%"}
      mx={"auto"}
      position={"relative"}
      top={50}
      boxShadow={8}
      display={"flex"}
      p={"1rem 1rem"}
      gap={1}
      component={motion.div}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      initial="hidden"
      whileInView={"visible"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", delay: 0.2 },
        },
      }}
    >
      <DatePicker label={"CHECK-IN"} />
      <Divider
        flexItem
        orientation={isLargeScreen ? "vertical" : "horizontal"}
      />
      <DatePicker label={"CHECK-OUT"} />
      <Divider
        flexItem
        orientation={isLargeScreen ? "vertical" : "horizontal"}
      />
      <GuestPicker />
      <Divider
        flexItem
        orientation={isLargeScreen ? "vertical" : "horizontal"}
      />
      <Button
        sx={{
          bgcolor: palette.secondary.main,
          color: "white",
          fontSize: 14,
          py: 2,
          ":hover": { bgcolor: palette.secondary.light },
        }}
        onClick={() => {
          navigate("/ourRooms");
        }}
      >
        CHECK AVAILABILITY
      </Button>
    </FlexBetween>
  );
};

export default AvailabilityBox;
