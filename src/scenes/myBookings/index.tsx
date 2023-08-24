import {
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { roomsInfo } from "../ourRooms/constants";
import dayjs from "dayjs";
import { useGetReservationsQuery } from "@/state/reservation";
import { formatter } from "@/libs/util";

const MyBookings = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { id } = useParams();
  const { data, isLoading } = useGetReservationsQuery(id);
  const room = roomsInfo.find((item) => item.id === id);

  if (isLoading)
    return (
      <Typography
        mt={isLargeScreen ? 30 : 10}
        mb={10}
        height={"100%"}
        textAlign={"center"}
        fontSize={20}
      >
        <CircularProgress />
      </Typography>
    );

  if (!data || !room)
    return (
      <Typography
        mt={isLargeScreen ? 30 : 10}
        mb={10}
        height={"35%"}
        textAlign={"center"}
        fontSize={20}
      >
        No bookings found ...
      </Typography>
    );

  return (
    <Box mt={isLargeScreen ? 20 : 10} mb={10}>
      <Typography textAlign={"center"} variant={isLargeScreen ? "h1" : "h2"}>
        My Bookings
      </Typography>
      <Container>
        {data?.map((item) => (
          <Box
            display={"flex"}
            flexDirection={isLargeScreen ? "row" : "column"}
            justifyContent={"space-between"}
            mt={6}
            boxShadow={2}
          >
            <img src={room?.image} width={isLargeScreen ? "40%" : "full"} />
            <Stack py={4} px={4} gap={2} mr={"auto"}>
              <Typography variant="h3">{room?.title}</Typography>
              <Box mt={2} gap={0.5}>
                <Typography>
                  <b>First Name:</b> {item.firstName}
                </Typography>
                <Typography>
                  <b>Last Name:</b> {item.lastName}
                </Typography>
                <Typography>
                  <b>Check-in:</b>{" "}
                  {dayjs(item?.checkInDate).format("YYYY-MM-DD")}
                </Typography>
                <Typography>
                  <b>Check-out:</b>{" "}
                  {dayjs(item?.checkOutDate).format("YYYY-MM-DD")}
                </Typography>
                <Typography>
                  <b>Price:</b> {formatter.format(Number(room?.price))}
                </Typography>
              </Box>
            </Stack>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default MyBookings;
