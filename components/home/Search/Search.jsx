import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { COLORS, icons } from "../../../constants";
import { styles as InputStyle } from "../../shared/Input/Input.style";
import styles from "./Search.style";
import Select from "../../shared/Select/Select";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          placeholderTextColor={COLORS.gray}
          placeholder="Search for a new home..."
          style={{ ...InputStyle.inputBody, flex: 1 }}
        />
        <TouchableOpacity>
          <View style={styles.searchIconContainer}>
            <Image
              style={styles.searchIconImage}
              source={icons.searchIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.searchFilterContainer}>
        <Select
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />

        <Select
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
    </View>
  );
};

export default Search;
