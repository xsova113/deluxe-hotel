import BasicDatePicker from "@/components/DatePicker";
import {
  Alert,
  Autocomplete,
  Box,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {
  bedCounts,
  bedroomCategories,
  guestCounts,
  roomCounts,
} from "../ourRooms/constants";
import { useDispatch } from "react-redux";
import {
  setBedCounts,
  setCategory,
  setGuests,
  setRoomCounts,
} from "@/state/availSlice";

const Step1 = ({
  activeStep,
  isValidDate,
}: {
  activeStep: number;
  isValidDate: boolean;
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h2">
        Step {activeStep + 1} - Check Availability
      </Typography>
      {!isValidDate && (
        <Alert sx={{ mt: 4 }} severity="error">
          Please pick a valid date range.
        </Alert>
      )}
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        gap={3}
        mt={4}
      >
        <BasicDatePicker label={"CHECK-IN"} />
        <BasicDatePicker label={"CHECK-OUT"} />
        <Autocomplete
          onChange={(_e, newValue) =>
            dispatch(setCategory(newValue ? newValue : ""))
          }
          options={bedroomCategories}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              variant="standard"
              {...params}
              label="Bedroom Categories"
            />
          )}
        />
        <TextField
          select
          label="Number of Rooms"
          onChange={(e) => dispatch(setRoomCounts(Number(e.target.value)))}
          sx={{ minWidth: "300px" }}
        >
          {roomCounts.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Number of Guests"
          onChange={(e) => dispatch(setGuests(Number(e.target.value)))}
          sx={{ minWidth: "300px" }}
        >
          {guestCounts.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Number of Beds"
          onChange={(e) => dispatch(setBedCounts(Number(e.target.value)))}
          sx={{ minWidth: "300px" }}
        >
          {bedCounts.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
};

export default Step1;
