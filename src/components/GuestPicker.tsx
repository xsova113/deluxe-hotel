import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setGuests } from "@/state/availSlice";
import { RootState } from "@/state/store";
import { guestCounts } from "@/scenes/ourRooms/constants";

export default function GuestPicker() {
  const dispatch = useDispatch();
  const guests = useSelector((state: RootState) => state.availability.guests);
  const searchParams = new URLSearchParams(window.location.search);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setGuests(Number(event.target.value)));
    searchParams.set("guests", event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="standard">
        <InputLabel id="demo-simple-select-label">GUESTS</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={guests.toString()}
          label="Guest"
          onChange={handleChange}
        >
          {guestCounts.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
