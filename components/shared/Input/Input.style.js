import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: SIZES.xSmall,
  },

  inputBody: {
    backgroundColor: "#fff",
    height: 50,
    width: "100%",
    borderRadius: SIZES.small,
    padding: SIZES.small,
    color: "#000",
  },
});
