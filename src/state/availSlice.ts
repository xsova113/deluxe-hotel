import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();

export interface CounterState {
  checkInDate: Dayjs | null;
  checkOutDate: Dayjs | null;
  guests: string;
}

const initialState: CounterState = {
  checkInDate: dayjs(`${year}-${month === 13 ? 1 : month}-${date}`),
  checkOutDate: dayjs(`${year}-${month === 13 ? 1 : month}-${date}`),
  guests: "One",
};

export const availSlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setCheckInDate: (state, action: PayloadAction<Dayjs | null>) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action: PayloadAction<Dayjs | null>) => {
      state.checkOutDate = action.payload;
    },
    setGuests: (state, action: PayloadAction<string>) => {
      state.guests = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCheckInDate, setCheckOutDate, setGuests } =
  availSlice.actions;

export default availSlice.reducer;
