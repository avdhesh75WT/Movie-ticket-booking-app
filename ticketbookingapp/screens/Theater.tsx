import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useAppSelector } from "../store/store";
import { useEffect } from "react";

export default function Theater(params: any) {
  const { route, navigation } = params;
  const { theaterId } = route.params;
  const state = useAppSelector((state) => state.theaters);

  const handleMovieClick = (index: number) => {
    navigation.navigate("Movie", { theaterId, movieIndex: index });
  };

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>{state.theaters[theaterId - 1].name}</Text>
      <Text style={styles.subheading}>
        {state.theaters[theaterId - 1].address}
      </Text>
      <ScrollView>
        {state.theaters[theaterId - 1].movies.map((movie, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleMovieClick(index)}
              style={styles.card}
            >
              <Text>{movie.name}</Text>
              <Text>Starts At: {movie.startTime}</Text>
              <Text>Duration: {movie.duration}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 35,
  },
  subheading: {
    fontSize: 20,
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
  },
});
