import { Stack, useRouter, useSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES, images } from "../../constants";
import FAIcon from "react-native-vector-icons/FontAwesome5";

const AdDetails = () => {
  const router = useRouter();
  const { id } = useSearchParams();

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "Advertisement",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: COLORS.secondary },
        }}
      />
      <View style={styles.inner}>
        <View style={{ width: "100%", height: 250, marginBottom: SIZES.small }}>
          <Image
            style={styles.adImage}
            resizeMode="cover"
            source={images.adImage}
          />
        </View>
        <View style={styles.adIntro}>
          <Text style={styles.adTitle}>
            New vintage apartment on the Green Avenue
          </Text>
          <Text style={styles.adPrice}>$ 250,000.00</Text>
          <View style={styles.adAddress}>
            <FAIcon name="map-marker-alt" style={styles.adAddressText} />
            <Text style={styles.adAddressText}>
              329 Ambarukmo St, Brooklyn, NY
            </Text>
          </View>

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

          <View style={styles.adDesriptionContainer}>
            <Text style={styles.adDesriptionTitle}>Property Description</Text>
            <Text style={styles.adDesriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              dolor nam risus sem hac consequat. Nec vitae consectetur velit eu,
              etiam. Nulla senectus dictumst mauris nunc. Senectus nulla lectus
              nam quis nisl non morbi non. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Eget dolor nam risus sem hac
              consequat. Nec vitae consectetur velit eu, etiam. Nulla senectus
              dictumst mauris nunc. Senectus nulla lectus
            </Text>
          </View>

          <View style={styles.ownerContactInfoContainer}>
            <Image
              style={styles.ownerProfilePic}
              source={images.profile}
              resizeMode="cover"
            />
            <View>
              <Text style={styles.ownerNameText}>Saif Mohamed</Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("tel:01206944093")}
              >
                <Text style={styles.ownerPhoneNumber}>
                  <Text style={{ color: COLORS.primary }}>Phone:</Text>{" "}
                  +201206944093 ( click to call )
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL("https://wa.me/+201206944093")}
              >
                <Text style={styles.ownerPhoneNumber}>
                  <Text style={{ color: "green" }}>Whatsapp:</Text>{" "}
                  +201206944093 ( click for chat )
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingHorizontal: SIZES.xSmall,
    display: "flex",
    flexDirection: "column",
    paddingBottom: SIZES.large,
  },
  adImage: {
    width: "100%",
    height: "100%",
  },

  adIntro: {
    display: "flex",
    flexDirection: "column",
    gap: SIZES.medium,
  },

  adTitle: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.white,
  },

  adPrice: {
    fontSize: SIZES.large,
    fontWeight: "600",
    color: COLORS.white,
  },

  adAddress: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.xSmall,
  },

  adAddressText: {
    color: COLORS.gray2,
    fontSize: SIZES.medium,
  },

  amenititesContainer: {
    gap: SIZES.xSmall,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  amenititesText: {
    color: COLORS.gray2,
    fontSize: SIZES.small,
  },

  adDesriptionContainer: {
    display: "flex",
    gap: SIZES.xSmall,
    marginTop: SIZES.xLarge,
  },

  adDesriptionTitle: {
    color: COLORS.white,
    fontWeight: "500",
    fontSize: SIZES.medium,
  },
  adDesriptionText: {
    color: COLORS.gray,
    fontWeight: "300",
    fontSize: SIZES.small,
  },

  ownerContactInfoContainer: {
    marginTop: SIZES.medium,
    borderRadius: SIZES.xSmall,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: SIZES.medium,
    flexWrap: "wrap",
  },

  ownerProfilePic: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },

  ownerNameText: {
    color: COLORS.white,
    fontWeight: "500",
    fontSize: SIZES.large,
  },

  ownerPhoneNumber: {
    color: COLORS.gray,
    marginTop: SIZES.xSmall,
  },
});

export default AdDetails;
