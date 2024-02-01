import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from "react-native";
import { useAppSelector } from "../store/store";

export default function Home(props: any) {
  const state = useAppSelector((state) => state.theaters);
  const { navigation } = props;

  const handleTheaterClick = (index: number) => {
    navigation.navigate("Theater", {
      theaterId: index,
    });
  };

  const handleShowBookings = () => {
    navigation.navigate("Tickets");
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.cont}>
        {state.theaters.map((theater) => {
          return (
            <TouchableOpacity
              key={theater.theaterId}
              onPress={() => handleTheaterClick(theater.theaterId)}
              style={styles.card}
            >
              <Text>{theater.name}</Text>
              <Text>{theater.address}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableHighlight
          style={{
            height: 50,
            width: 200,
            marginRight: 10,
            marginTop: 8,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
          }}
          onPress={() => handleShowBookings()}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/booking.png")}
              style={{ height: 30, width: 30 }}
            />
            <Text style={{ fontSize: 20, marginLeft: 10 }}>My Bookings</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: "90%",
    display: "flex",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    height: 80,
    width: 300,
    padding: 10,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 6,
  },
});
