import { TextInput, View, Button, Text, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-hook-form";
import { bookingSchema } from "../utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import RazorpayCheckout, { CheckoutOptions } from "react-native-razorpay";
import { useAppSelector } from "../store/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setSeats } from "../store/reducers/theaterReducer";

type RazorpayOptions = {
  description: string;
  image: string;
  currency: string;
  key: string;
  amount: string;
  name: string;
  prefill: {
    email: string;
    contact: string;
    name: string;
  };
  theme: { color: string };
};

export default function Booking(params: any) {
  const dispatch = useAppDispatch();
  let state = useAppSelector((state) => state.theaters);
  let newObj = state;
  console.log(state);
  const [orderId, setOrderId] = useState<string>("");
  const { route, navigation } = params;
  const { selectedSeats, cost, theaterId, movieIndex } = route.params;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; contact: string }>({
    resolver: yupResolver(bookingSchema),
  });

  const onSubmit = async (data: {
    name: string;
    email: string;
    contact: string;
  }) => {
    console.log(data);

    // axios
    //   .post("http://10.0.2.2:3000/", { cost })
    //   .then((res) => {
    //     console.log(res);
    //     setOrderId(res.data.id);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // const res = getMoviesFromApi();
    // console.log(res);
    // let options: CheckoutOptions = {
    //   order_id: orderId,
    //   description: "Movie ticket booking",
    //   image:
    //     "https://www.dlfpromenade.com/Assets/stores/832d34dc-25b4-4e44-a8a3-3fcd1edea9a6.png",
    //   currency: "INR",
    //   key: "rzp_test_Nz0DKL17sCwJU4",
    //   amount: cost,
    //   name: state.theaters[theaterId - 1].name,
    //   prefill: {
    //     email: data.email,
    //     contact: data.contact,
    //     name: data.name,
    //   },
    //   theme: { color: "#004daa" },
    // };

    // console.log(options);

    // RazorpayCheckout.open(options)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const str = data.name + " " + data.email + " " + data.contact;
    // try {
    AsyncStorage.setItem("name", str)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // } catch (err) {
    //   console.log(err);
    // }

    // const fun = async (seat: number) => {
    //   newObj.theaters[theaterId - 1].movies[movieIndex].booked.push(53);
    //   newObj.theaters[theaterId - 1].movies[movieIndex].seats[53] = str;
    // };
    // console.log(selectedSeats, state);
    // selectedSeats.map((seat: number) => {
    //   fun(seat)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });
    dispatch(setSeats({ selectedSeats, theaterId, movieIndex, str }));
    AsyncStorage.setItem("name", str)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
