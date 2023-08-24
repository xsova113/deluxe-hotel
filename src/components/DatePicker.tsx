import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { setCheckInDate, setCheckOutDate } from "@/state/availSlice";

export default function BasicDatePicker({
  label,
}: {
  label: "CHECK-IN" | "CHECK-OUT";
}) {
  const dispatch = useDispatch();

  const handleChange = (newValue: Dayjs | null) => {
    if (label === "CHECK-IN") {
      dispatch(setCheckInDate(newValue));
    } else {
      dispatch(setCheckOutDate(newValue));
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          disablePast
          onChange={(newValue: Dayjs | null) => handleChange(newValue || null)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
