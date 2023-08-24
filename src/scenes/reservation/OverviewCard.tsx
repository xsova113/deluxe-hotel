import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { roomsInfo } from "../ourRooms/constants";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { formatter } from "@/libs/util";

const OverviewCard = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const selectedRoom = roomsInfo.find(
    (value) => value.id === searchParams.get("id")
  );
  const checkInDate = useSelector(
    (state: RootState) => state.availability.checkInDate
  );
  const checkOutDate = useSelector(
    (state: RootState) => state.availability.checkOutDate
  );

  const totalPrice = () => {
    const numberOfDays = checkOutDate!.date() - checkInDate!.date();
    if (selectedRoom) {
      const total =
        (numberOfDays === 0 ? 1 : numberOfDays) * selectedRoom.price;
      return total;
    }
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="300"
        image={selectedRoom?.image}
        alt="room"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          textAlign={"center"}
          mb={2}
        >
          {selectedRoom?.title}
        </Typography>
        <Box>
          <Typography variant="body1" mb={1}>
            1. Check-in & Check-out Date
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${checkInDate?.format(
              "ddd, DD MMM YYYY"
            )} - ${checkOutDate?.format("ddd, DD MMM YYYY")}`}
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ my: 2 }} />

        <Box>
          <Typography variant="body1" mb={1}>
            2. Selected Room
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Title: </b>
            {selectedRoom?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Category: </b>
            {selectedRoom?.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Price: </b>
            {formatter.format(Number(selectedRoom?.price))} / night
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Beds: </b>
            {selectedRoom?.beds}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Guests: </b>
            {selectedRoom?.guests}
          </Typography>
        </Box>
        <Divider variant="middle" sx={{ my: 2 }} />

        <Box>
          <Typography variant="body1" mb={1} textTransform={"uppercase"}>
            Total:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>{formatter.format(Number(totalPrice()))} </b>CAD (includes tax,
            fee, etc)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
