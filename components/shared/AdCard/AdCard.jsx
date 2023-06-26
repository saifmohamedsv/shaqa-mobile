import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./AdCard.style";
import { COLORS, SIZES, icons, images } from "../../../constants";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
import FAIcon from "react-native-vector-icons/FontAwesome5";

const AdCard = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/ad_details/1`)}
    >
      <Image
        source={images.adImage}
        style={styles.adImage}
        resizeMode="cover"
      />
      <View style={styles.cardDetailsContainer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.priceText}>2500.000.00</Text>
          <View
            style={{ display: "flex", flexDirection: "row", gap: SIZES.large }}
          >
            <TouchableOpacity>
              <Icon name="hearto" size={24} color={COLORS.white} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="sharealt" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.titleText}>
          New vintage apartment on the Green Avenue
        </Text>
        <Text style={styles.addressText}>329 Ambarukmo St, Brooklyn, NY</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.amenititesContainer}>
            <FAIcon name="bed" size={20} color={COLORS.gray2} />
            <Text style={styles.amenititesText}>2 Bedroom</Text>
          </View>

          <View style={styles.amenititesContainer}>
            <FAIcon name="shower" size={20} color={COLORS.gray2} />
            <Text style={styles.amenititesText}>2 Bathroom</Text>
          </View>

          <View style={styles.amenititesContainer}>
            <FAIcon name="ruler-combined" size={20} color={COLORS.gray2} />
            <Text style={styles.amenititesText}>2 Bathroom</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AdCard;
