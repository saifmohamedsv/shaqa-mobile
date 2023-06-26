import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.small,
  },

  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: SIZES.medium,
    alignItems: "center",
  },

  searchIconContainer: {
    backgroundColor: "#fff",
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.small,
  },

  searchIconImage: {
    width: 24,
    height: 24,
  },

  searchFilterContainer: {
    marginTop: SIZES.xLarge,
    display: "flex",
    flexDirection: "row",
    gap: SIZES.small,
  },
});

export default styles;
