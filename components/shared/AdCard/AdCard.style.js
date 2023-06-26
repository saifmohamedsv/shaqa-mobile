import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.medium,
    // borderWidth: 1,
    // borderColor: "rgba(51, 51, 51, 0.15)",
    padding: SIZES.small,
    backgroundColor: "#23262D",
    marginBottom: SIZES.small,
    display: "flex",
  },

  adImage: {
    width: "100%",
    height: 200,
    borderRadius: SIZES.small,
  },

  cardDetailsContainer: {
    marginTop: SIZES.medium,
    display: "flex",
    gap: SIZES.small,
  },

  priceText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.large,
  },

  titleText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
  },

  addressText: {
    color: COLORS.gray,
    fontWeight: "normal",
    fontSize: SIZES.medium,
  },

  amenititesContainer: {
    gap: SIZES.xSmall,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  amenititesIcon: {
    width: 20,
    height: 20,
  },

  amenititesText: {
    color: COLORS.gray2,
    fontSize: SIZES.small,
  },
});

export default styles;
