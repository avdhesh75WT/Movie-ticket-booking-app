import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TheaterState {
  theaters: [
    {
      theaterId: number;
      name: string;
      address: string;
      movies: [
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        }
      ];
    },
    {
      theaterId: number;
      name: string;
      address: string;
      movies: [
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        }
      ];
    },
    {
      theaterId: number;
      name: string;
      address: string;
      movies: [
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        }
      ];
    },
    {
      theaterId: number;
      name: string;
      address: string;
      movies: [
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        },
        {
          name: string;
          duration: string;
          startTime: string;
          seats: string[];
          vip: number[];
          booked: number[];
        }
      ];
    }
  ];
}

const initialState: TheaterState = {
  theaters: [
    {
      theaterId: 1,
      name: "PVR Mohali",
      address: "Mohali sector 35, phase-3A",
      movies: [
        {
          name: "Salaar",
          duration: "109 min",
          startTime: "8:00 AM",
          seats: [],
          vip: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19,
          ],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Merry Christmas",
          duration: "129 min",
          startTime: "2:00 PM",
          seats: [],
          vip: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19,
          ],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Hanuman",
          duration: "130 min",
          startTime: "4:15 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Dunki",
          duration: "150 min",
          startTime: "9:50 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
      ],
    },
    {
      theaterId: 2,
      name: "VR PVR Mohali",
      address: "Chandigarh sector 15, phase-99A",
      movies: [
        {
          name: "Merry Christmas",
          duration: "129 min",
          startTime: "2:00 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Hanuman",
          duration: "130 min",
          startTime: "4:15 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Dunki",
          duration: "150 min",
          startTime: "9:50 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
      ],
    },
    {
      theaterId: 3,
      name: "CP67 Mohali",
      address: "Punjab sector 95, phase-8A",
      movies: [
        {
          name: "Salaar",
          duration: "109 min",
          startTime: "8:00 AM",
          seats: [],
          vip: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19,
          ],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Robote",
          duration: "135 min",
          startTime: "11:00 AM",
          seats: [],
          vip: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19,
          ],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Merry Christmas",
          duration: "129 min",
          startTime: "2:00 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Hanuman",
          duration: "130 min",
          startTime: "4:15 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Dunki",
          duration: "150 min",
          startTime: "9:50 PM",
          seats: [],
          vip: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19,
          ],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
      ],
    },
    {
      theaterId: 4,
      name: "Cosmo PVR Mohali",
      address: "Amritsar sector 315, phase-31A",
      movies: [
        {
          name: "Merry Christmas",
          duration: "129 min",
          startTime: "2:00 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
        {
          name: "Hanuman",
          duration: "130 min",
          startTime: "4:15 PM",
          seats: [],
          vip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          booked: [20, 25, 28, 30, 35, 21, 22, 24, 31, 33, 37],
        },
      ],
    },
  ],
};

export const theaterSlice = createSlice({
  name: "theaters",
  initialState,
  reducers: {
    setSeats: (
      state,
      action: PayloadAction<{
        selectedSeats: number[];
        theaterId: number;
        movieIndex: number;
        str: string;
      }>
    ) => {
      action.payload.selectedSeats.map((seat) => {
        state.theaters[action.payload.theaterId].movies[
          action.payload.movieIndex
        ].booked.push(seat);
        state.theaters[action.payload.theaterId].movies[
          action.payload.movieIndex
        ].seats[seat] = action.payload.str;
        return state;
      });
    },
  },
});

export const { setSeats } = theaterSlice.actions;

export default theaterSlice.reducer;
