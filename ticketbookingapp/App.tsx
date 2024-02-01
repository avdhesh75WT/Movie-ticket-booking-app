import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Theater from "./screens/Theater";
import Movie from "./screens/Movie";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Booking from "./screens/Booking";
import { StripeProvider } from "@stripe/stripe-react-native";
import Tickets from "./screens/Tickets";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      {/* <StripeProvider publishableKey="pk_test_51OetKdSJ9k6k6jqufR8GZxlfR93gxLmguDWgq17ugNaZVJ74fkRFAnCf7k8fGXMMbkwumi5A13JrOlsr0U5dnh4T00nSwhKdTN"> */}
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
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{ title: "Booked Tickets" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </StripeProvider> */}
    </Provider>
  );
}
