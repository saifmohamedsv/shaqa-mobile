import { Stack, useRouter } from "expo-router";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Input from "../components/shared/Input/Input";
import { COLORS, SIZES, images } from "../constants";
import Button from "../components/shared/Button/Button";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/actions/authActions";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          title: "Login",
          headerShadowVisible: false,
          contentStyle: { backgroundColor: "" },
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
            <Input placeholder="Enter your email address" label={"Email"} />
            <Input
              placeholder="Enter your password"
              label={"Password"}
              type="password"
            />
            <Button onPress={() => dispatch(signIn())} text="Login" />
            <View style={style.registerMessageContainer}>
              <Text style={{ color: "#fff" }}>Don't have an account ?</Text>
              <TouchableOpacity onPress={() => router.replace("/register")}>
                <Text style={style.registerMessageText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
  },

  inner: {
    display: "flex",
    justifyContent: "center",
    gap: SIZES.xLarge,
    padding: SIZES.xLarge,
    marginVertical: "auto",
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
