import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useAppSelector } from "../store/store";
import { useEffect, useState } from "react";
import { conversion } from "../utils";

export default function Movie(params: any) {
  const state = useAppSelector((state) => state.theaters);
  const { route, navigation } = params;
  const { theaterId, movieIndex } = route.params;
  const [vips, setVips] = useState<number[]>([]);
  const [booked, setBooked] = useState<number[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  useEffect(() => {
    setVips(state.theaters[theaterId - 1].movies[movieIndex].vip);
    setBooked(state.theaters[theaterId - 1].movies[movieIndex].booked);
  }, []);

  const handleSeatClick = (rowIdx: number, colIdx: number) => {
    const seatIdx = rowIdx * 9 + (rowIdx + colIdx);
    if (selectedSeats.includes(seatIdx)) {
      let updatedSeats = selectedSeats.filter((idx) => {
        return idx !== seatIdx;
      });
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats([...selectedSeats, seatIdx]);
    }
  };

  const handleBooking = (selectedSeats: number[], cost: number) => {
    navigation.navigate("Booking", {
      selectedSeats,
      cost,
      theaterId,
      movieIndex,
    });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>
        {state.theaters[theaterId - 1].movies[movieIndex].name}
      </Text>
      <View style={styles.subHead}>
        <Text>
          Starts At:{" "}
          {state.theaters[theaterId - 1].movies[movieIndex].startTime}
        </Text>
        <Text>
          Duration: {state.theaters[theaterId - 1].movies[movieIndex].duration}
        </Text>
      </View>
      <View style={styles.hall}>
        {Array.from({ length: 10 }, (_, rowIdx) => {
          return (
            <View key={rowIdx} style={styles.row}>
              {Array.from({ length: 10 }, (_, colIdx) => {
                return vips.includes(conversion(rowIdx, colIdx)) ? (
                  <TouchableOpacity
                    key={conversion(rowIdx, colIdx)}
                    disabled
                    onPress={() => handleSeatClick(rowIdx, colIdx)}
                    style={styles.vipSeat}
                  ></TouchableOpacity>
                ) : booked.includes(conversion(rowIdx, colIdx)) ? (
                  <TouchableOpacity
                    key={conversion(rowIdx, colIdx)}
                    disabled
                    onPress={() => handleSeatClick(rowIdx, colIdx)}
                    style={styles.bookedSeat}
                  ></TouchableOpacity>
                ) : selectedSeats.includes(conversion(rowIdx, colIdx)) ? (
                  <TouchableOpacity
                    key={conversion(rowIdx, colIdx)}
                    onPress={() => handleSeatClick(rowIdx, colIdx)}
                    style={styles.selectedSeat}
                  ></TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    key={conversion(rowIdx, colIdx)}
                    onPress={() => handleSeatClick(rowIdx, colIdx)}
                    style={styles.seat}
                  ></TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: 400,
          marginTop: 10,
        }}
      >
        <View style={styles.smallCard}>
          <View style={styles.seat}></View>
          <Text>Available</Text>
        </View>
        <View style={styles.smallCard}>
          <View style={styles.selectedSeat}></View>
          <Text>Selected</Text>
        </View>
        <View style={styles.smallCard}>
          <View style={styles.bookedSeat}></View>
          <Text>Booked</Text>
        </View>
        <View style={styles.smallCard}>
          <View style={styles.vipSeat}></View>
          <Text>VIP</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          backgroundColor: "#bdbdbd",
          marginTop: 20,
          width: 300,
          height: 70,
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          Selected Seats: {selectedSeats.length}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={{ fontSize: 17 }}>
            Total Cost: {selectedSeats.length * 70}
          </Text>
          <Text style={{ fontSize: 17 }}>70 Rupees/seat</Text>
        </View>
      </View>
      <View style={{ marginTop: 23 }}>
        <Button
          onPress={() =>
            handleBooking(selectedSeats, selectedSeats.length * 70)
          }
          title="Book Now"
        />
      </View>
      <View style={styles.screen}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  smallCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  hall: {
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    width: 300,
    height: 350,
    padding: 5,
    borderRadius: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  seat: {
    height: 19,
    width: 19,
    backgroundColor: "#2f7831",
    margin: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bookedSeat: {
    height: 19,
    width: 19,
    backgroundColor: "#595959",
    margin: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  vipSeat: {
    height: 19,
    width: 19,
    backgroundColor: "red",
    margin: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  selectedSeat: {
    height: 19,
    width: 19,
    backgroundColor: "blue",
    margin: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  screen: {
    width: 350,
    height: 0,
    borderBottomWidth: 45,
    borderBottomColor: "gray",
    borderLeftWidth: 60,
    borderLeftColor: "transparent",
    borderRightWidth: 60,
    borderRightColor: "transparent",
    borderStyle: "solid",
    position: "absolute",
    bottom: 0,
  },
  main: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  heading: {
    fontSize: 30,
  },
  subHead: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
});
