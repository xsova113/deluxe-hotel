import FlexBetween from "@/components/FlexBetween";
import {
  Box,
  Button,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { roomsInfo } from "../ourRooms/constants";
import { PlayArrow } from "@mui/icons-material";
import { formatter } from "@/libs/util";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

interface Step2Props {
  activeStep: number;
  handleNext: () => void;
}

const Step2 = ({ activeStep, handleNext }: Step2Props) => {
  const { palette } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const guests = useSelector((state: RootState) => state.availability.guests);
  const beds = useSelector((state: RootState) => state.availability.bedCounts);
  const category = useSelector(
    (state: RootState) => state.availability.category
  );
  const navigate = useNavigate();

  const filteredRooms = roomsInfo.filter(
    (item) =>
      item.label.toLowerCase().includes(category.toLowerCase()) &&
      item.guests >= guests &&
      item.beds === beds
  );

  const handleSelect = (id: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (id) {
      searchParams.set("id", id);
    } else {
      searchParams.delete("id");
    }

    const newPathname = `${window.location.pathname}?${searchParams}`;
    navigate(newPathname);

    handleNext();
  };

  return (
    <>
      <Typography variant="h2">
        Step {activeStep + 1} - Select a Room
      </Typography>

      <Box mt={4} display={"flex"} flexDirection={"column"} gap={6}>
        {filteredRooms.map((item) => (
          <FlexBetween
            key={item.id}
            boxShadow={3}
            flexDirection={isLargeScreen ? "row" : "column"}
          >
            <Box
              display={"flex"}
              flexDirection={isLargeScreen ? "row" : "column"}
              gap={2}
            >
              <img src={item.image} width={isLargeScreen ? "60%" : "100%"} />
              <Stack
                justifyContent={"space-between"}
                mx={"auto"}
                my={isLargeScreen ? 2 : 0}
              >
                <Typography variant="h3">{item.title}</Typography>
                <Box display={"flex"} gap={1.5} mb={1}>
                  <Rating precision={0.5} readOnly value={4.5} />
                  <Typography>reviews</Typography>
                </Box>
                <Stack color={palette.primary.light}>
                  <Typography fontWeight={"bold"} display={"flex"}>
                    Status:&nbsp;
                    <Typography
                      color={
                        item.status === "Available"
                          ? palette.success.main
                          : palette.error.main
                      }
                      fontWeight={"bold"}
                    >
                      {item.status}
                    </Typography>
                  </Typography>
                  <Typography fontWeight={"bold"} display={"flex"}>
                    Beds:&nbsp;
                    <Typography color={palette.primary.main}>
                      {item.beds}
                    </Typography>
                  </Typography>
                  <Typography fontWeight={"bold"} display={"flex"}>
                    Guests:&nbsp;
                    <Typography color={palette.primary.main}>
                      {item.guests}
                    </Typography>
                  </Typography>
                </Stack>
                <Typography
                  display={"flex"}
                  fontWeight={"bold"}
                  mt={4}
                  textTransform={"uppercase"}
                  sx={{ cursor: "pointer" }}
                  fontSize={12}
                  alignItems={"center"}
                >
                  view detail
                  <PlayArrow />
                </Typography>
              </Stack>
            </Box>

            <Stack
              gap={isLargeScreen ? 10 : 4}
              p={2}
              width={isLargeScreen ? "50%" : "100%"}
            >
              <Box
                display={"flex"}
                alignItems={"baseline"}
                justifyContent={isLargeScreen ? "start" : "center"}
              >
                <Typography>From</Typography>&nbsp;
                <Typography
                  fontWeight={"bold"}
                  fontSize={20}
                  color={palette.secondary[600]}
                >
                  {formatter.format(item.price)}
                </Typography>
                &nbsp;
                <Typography>/ Night</Typography>
              </Box>
              <Button
                onClick={() => handleSelect(item.id)}
                sx={{
                  bgcolor: palette.secondary.main,
                  color: "white",
                  py: 1.5,
                  ":hover": { bgcolor: palette.secondary.light },
                }}
              >
                select room
              </Button>
            </Stack>
          </FlexBetween>
        ))}
      </Box>
    </>
  );
};

export default Step2;
