import { Stack, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { COLORS, SIZES, images } from "../constants";
import Input from "../components/shared/Input/Input";
import Button from "../components/shared/Button/Button";

const Register = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "Register",
          headerShadowVisible: false,
          contentStyle: { backgroundColor: "#fff" },
          headerLeft: () => <></>,
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.inner}>
            <View style={style.logoContainer}>
              <Image
                source={images.logoWhiteText}
                resizeMode="contain"
                style={style.logoImage}
              />
            </View>

            <Input placeholder="Enter your full name" label={"Full Name"} />

            <Input placeholder="Enter your email address" label={"Email"} />

            <Input
              placeholder="Enter your password"
              label={"Password"}
              type="password"
            />

            <Button text="Register" />

            <View style={style.registerMessageContainer}>
              <Text style={{ color: "#fff" }}>Already a member ?</Text>
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text style={style.registerMessageText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    gap: SIZES.xLarge,
    padding: SIZES.xLarge,
    margin: "auto",
    flex: 1,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: 50,
  },

  registerMessageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  registerMessageText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
