import { Stack } from "expo-router";
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { COLORS, SIZES } from "../constants";
import Search from "../components/home/Search/Search";
import AdCard from "../components/shared/AdCard/AdCard";
import FAIcon from "react-native-vector-icons/FontAwesome5";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Shaqa - Realestate",
          headerShadowVisible: false,
          contentStyle: { backgroundColor: COLORS.secondary },
          headerBackVisible: false,
        }}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Search />
      </TouchableWithoutFeedback>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsCountText}>100 Search Results</Text>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          scrollEnabled
          numColumns={1}
          keyExtractor={(item) => item}
          s
          renderItem={({ item }) => <AdCard />}
        />
      </View>

      <TouchableOpacity style={styles.floatingAddButton}>
        <View style={styles.floatingAddButtonContainer}>
          <FAIcon name="plus" size={SIZES.xLarge} color={COLORS.white} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resultsContainer: {
    flex: 1,
    padding: SIZES.small,
  },

  resultsCountText: {
    color: COLORS.white,
    fontWeight: "bold",
    marginBottom: SIZES.small,
    fontSize: SIZES.large,
  },

  floatingAddButtonContainer: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  floatingAddButton: {
    position: "absolute",
    bottom: SIZES.small,
    right: SIZES.small,
  },
});
