import FlexBetween from "@/components/FlexBetween";
import { formatter } from "@/libs/util";
import { PlayArrow } from "@mui/icons-material";
import {  Box, Rating, Stack, Typography, useTheme } from "@mui/material";

interface RoomProps {
  label: string;
  title: string;
  reviewCounts: number;
  price: number;
  description: string;
  status: "Available" | string;
  beds: number;
  guests: number;
  index: number;
  image: string;
}

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Room = ({
  beds,
  description,
  guests,
  label,
  price,
  reviewCounts,
  status,
  title,
  index,
  image,
}: RoomProps) => {
  const { palette } = useTheme();

  return (
    <FlexBetween pt={8} pb={18} sx={{ alignItems: "start" }}>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{ transform: "rotate(-90deg)" }}
        border={`1px solid ${palette.primary.light}`}
        px={6}
        py={3}
        mt={15}
        color={palette.primary.light}
      >
        <Typography
          mr={8}
          sx={{ transform: "rotate(90deg)" }}
          fontWeight={"bold"}
        >
          0{index}
        </Typography>
        <Typography textTransform={"uppercase"} width={120}>
          {label}
        </Typography>
      </Box>

      <Stack alignItems={"start"} gap={2}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Rating
            precision={0.5}
            readOnly
            value={4.5}
            getLabelText={getLabelText}
          />
          <Typography>{reviewCounts} reviews</Typography>
        </Box>
        <Typography variant="h2" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography
          color={palette.primary.light}
          display={"flex"}
          alignItems={"baseline"}
          gap={1}
        >
          Start from
          <Typography
            color={palette.secondary[600]}
            fontSize={24}
            fontWeight={"bold"}
          >
            {formatter.format(price)}
          </Typography>{" "}
          <Typography color={palette.primary.main}>/ Night</Typography>
        </Typography>
        <Typography component={"p"} width={"80%"} textAlign={"start"}>
          {description}
        </Typography>
        <Stack color={palette.primary.light}>
          <Typography fontWeight={"bold"} display={"flex"}>
            Status:{" "}
            <Typography
              color={
                status === "Available"
                  ? palette.success.main
                  : palette.error.main
              }
              fontWeight={"bold"}
            >
              {status}
            </Typography>
          </Typography>
          <Typography fontWeight={"bold"} display={"flex"}>
            Beds:&nbsp;
            <Typography color={palette.primary.main}>{beds}</Typography>
          </Typography>
          <Typography fontWeight={"bold"} display={"flex"}>
            Guests:&nbsp;
            <Typography color={palette.primary.main}>{guests}</Typography>
          </Typography>
        </Stack>
        <Typography
          display={"flex"}
          fontWeight={"bold"}
          mt={4}
          textTransform={"uppercase"}
          sx={{ cursor: "pointer" }}
        >
          view detail
          <PlayArrow />
        </Typography>
      </Stack>

      <Box>
        <img
          src={image}
          alt="bed"
          width={"100%"}
          height={350}
          style={{ objectFit: "cover" }}
        />
      </Box>
    </FlexBetween>
  );
};

export default Room;
