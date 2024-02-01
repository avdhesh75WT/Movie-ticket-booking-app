import {
  TextInput,
  View,
  Button,
  Text,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { bookingSchema } from "../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios"; //FOR BACKEND STRIPE API CALL
import { useAppDispatch } from "../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setSeats } from "../store/reducers/theaterReducer";
// import { useStripe } from "@stripe/stripe-react-native"; //STRIPE LIBRARY IMPORT
import { useEffect, useState } from "react";

export default function Booking(params: any) {
  const dispatch = useAppDispatch();
  const [bookingData, setBookingData] = useState<BookingSeats[]>();
  // const [orderId, setOrderId] = useState<string>("");//PAYMENT GATEWAY ORDER ID
  const { route, navigation } = params;
  const { selectedSeats, cost, theaterId, movieIndex } = route.params;
  // const { initPaymentSheet, presentPaymentSheet } = useStripe();//STRIPE GATEWAY METHODS

  // FOR STRIPE PAYMENT GATEWAY
  // const checkOut = async () => {
  //   axios
  //     .post("http://10.0.2.2:3000/", { cost })
  //     .then((res) => {
  //       console.log(res.data);
  //       setOrderId(res.data.paymentIntent);
  //     })
  //     .catch((err) => {
  //       console.log("err:-> ", err);
  //     });

  //   const initResponse = await initPaymentSheet({
  //     merchantDisplayName: "avdhesh.dev",
  //     paymentIntentClientSecret: orderId,
  //   });
  //   if (initResponse.error) {
  //     console.log(initResponse.error);
  //     return;
  //   }

  //   const paymentResponse = await presentPaymentSheet();

  //   if (paymentResponse.error) {
  //     console.log(
  //       `Error code: ${paymentResponse.error.code}`,
  //       paymentResponse.error.message
  //     );
  //     return;
  //   }
  //   console.log("Payment in successful");
  // };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; contact: string }>({
    resolver: yupResolver(bookingSchema),
  });

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

  const onSubmit = async (data: {
    name: string;
    email: string;
    contact: string;
  }) => {
    const str = data.name + " " + data.email + " " + data.contact;
    const obj: BookingSeats = {
      selectedSeats,
      theaterId,
      movieIndex,
      user: str,
    };
    dispatch(setSeats(obj));

    let bookingDataCopy: BookingSeats[] | undefined;
    if (bookingData?.length) {
      bookingDataCopy = [...bookingData, obj];
    } else {
      bookingDataCopy = [obj];
    }
    try {
      await AsyncStorage.setItem("user", JSON.stringify(bookingDataCopy));
      console.log("Data stored successfully!");
    } catch (error) {
      console.error("Error storing data:", error);
    }
    ToastAndroid.show("Ticket booked successfully!", ToastAndroid.SHORT);
    navigation.navigate("Home");
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="name"
        rules={{ required: true }}
      />
      {errors?.name && (
        <Text style={{ color: "red", marginLeft: 30, alignSelf: "flex-start" }}>
          {errors.name.message}
        </Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors?.email && (
        <Text style={{ color: "red", marginLeft: 30, alignSelf: "flex-start" }}>
          {errors.email.message}
        </Text>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contact No."
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="contact"
        rules={{ required: true }}
      />
      {errors?.contact && (
        <Text style={{ color: "red", marginLeft: 30, alignSelf: "flex-start" }}>
          {errors.contact.message}
        </Text>
      )}
      <View style={{ width: 350, marginTop: 30 }}>
        <Button title="Pay Now" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderColor: "blue",
    height: 40,
    width: 350,
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
