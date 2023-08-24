import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ReservationSlice {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
  province: string;
  creditCardNumber: string;
  creditCardType: string;
}

const initialState: ReservationSlice = {
  address: "",
  city: "",
  country: "",
  creditCardNumber: "",
  creditCardType: "",
  email: "",
  postalCode: "",
  firstName: "",
  lastName: "",
  phone: "",
  province: "",
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setProvince: (state, action: PayloadAction<string>) => {
      state.province = action.payload;
    },
    setCreditCardNumber: (state, action: PayloadAction<string>) => {
      state.creditCardNumber = action.payload;
    },
    setCreditCardType: (state, action: PayloadAction<string>) => {
      state.creditCardType = action.payload;
    },
    setPostalCode: (state, action: PayloadAction<string>) => {
      state.postalCode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAddress,
  setCity,
  setProvince,
  setCreditCardNumber,
  setCreditCardType,
  setCountry,
  setEmail,
  setFirstName,
  setLastName,
  setPhone,
  setPostalCode
} = reservationSlice.actions;

export default reservationSlice.reducer;
