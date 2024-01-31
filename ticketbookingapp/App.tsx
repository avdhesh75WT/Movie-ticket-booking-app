import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Theater from "./screens/Theater";
import Movie from "./screens/Movie";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Booking from "./screens/Booking";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            animation: "none",
            animationDuration: 1,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Book My Ticket" }}
          />
          <Stack.Screen
            name="Theater"
            component={Theater}
            options={{ title: "Theater" }}
          />
          <Stack.Screen name="Movie" component={Movie} />
          <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
