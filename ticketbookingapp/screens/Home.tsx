import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useAppSelector } from "../store/store";

export default function Home(props: any) {
  const state = useAppSelector((state) => state.theaters);
  console.log("state from home:-> ", state.theaters[0].movies[0].booked);
  const { navigation } = props;
  const handleTheaterClick = (index: number) => {
    navigation.navigate("Theater", {
      theaterId: index,
    });
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
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
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
