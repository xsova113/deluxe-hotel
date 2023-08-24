// Need to use the React-specific entry point to import createApi
import { Reservation } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const reservationApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_API_URL }),
  tagTypes: ["reservation"],
  endpoints: (builder) => ({
    getReservations: builder.query<Reservation[], string | undefined>({
      query: (roomId) => `/myBookings/${roomId}`,
      providesTags: ["reservation"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReservationsQuery } = reservationApi;
