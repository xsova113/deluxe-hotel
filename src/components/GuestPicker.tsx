import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setGuests } from "@/state/availSlice";
import { RootState } from "@/state/store";

export default function GuestPicker() {
  const dispatch = useDispatch();
  const guests = useSelector((state: RootState) => state.availability.guests);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setGuests(event.target.value as string));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="standard">
        <InputLabel id="demo-simple-select-label">GUESTS</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={guests}
          label="Guest"
          onChange={handleChange}
        >
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
