interface BookingSeats {
  selectedSeats: number[];
  theaterId: number;
  movieIndex: number;
  user: string;
}

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
