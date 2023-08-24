import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();

export interface AvailSlice {
  checkInDate: Dayjs | null;
  checkOutDate: Dayjs | null;
  guests: number;
  category: string;
  roomCounts: number;
  bedCounts: number;
}

const initialState: AvailSlice = {
  checkInDate: dayjs(`${year}-${month === 13 ? 1 : month}-${date}`),
  checkOutDate: dayjs(`${year}-${month === 13 ? 1 : month + 2}-${date}`),
  guests: 1,
  bedCounts: 1,
  category: "",
  roomCounts: 1,
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
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setGuests: (state, action: PayloadAction<number>) => {
      state.guests = action.payload;
    },
    setBedCounts: (state, action: PayloadAction<number>) => {
      state.bedCounts = action.payload;
    },
    setRoomCounts: (state, action: PayloadAction<number>) => {
      state.roomCounts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCheckInDate,
  setCheckOutDate,
  setGuests,
  setBedCounts,
  setCategory,
  setRoomCounts,
} = availSlice.actions;

export default availSlice.reducer;
