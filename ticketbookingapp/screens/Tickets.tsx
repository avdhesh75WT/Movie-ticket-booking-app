import { View, Text, ScrollView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/store";

export default function Tickets() {
  const [bookingData, setBookingData] = useState<BookingSeats[]>();
  const state = useAppSelector((state) => state.theaters);

  const fetchBookingData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        console.log("Retrieved value:", value);
        const obj: BookingSeats[] = await JSON.parse(value);
        setBookingData(obj);
      } else {
        console.log("Value is null. Key not found.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }

    console.log("booking data:-> ", bookingData);
  };

  useEffect(() => {
    fetchBookingData();
  }, []);
  console.log(bookingData);

  return (
    <ScrollView contentContainerStyle={{ height: "auto" }}>
      <View>
        {bookingData?.map((data) => {
          return data.selectedSeats.map((seat) => {
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 10,
                  padding: 5,
                  margin: 10,
                }}
                key={seat}
              >
                <Text>
                  Seat no. {seat} booked at{" "}
                  {state.theaters[data.theaterId - 1].name}.
                </Text>
                <Text>
                  Movie:{" "}
                  {
                    state.theaters[data.theaterId - 1].movies[data.movieIndex]
                      .name
                  }
                </Text>
                <Text>
                  Duration:{" "}
                  {
                    state.theaters[data.theaterId - 1].movies[data.movieIndex]
                      .duration
                  }
                </Text>
                <Text>
                  Starts At:{" "}
                  {
                    state.theaters[data.theaterId - 1].movies[data.movieIndex]
                      .startTime
                  }
                </Text>
              </View>
            );
          });
        })}
      </View>
    </ScrollView>
  );
}
