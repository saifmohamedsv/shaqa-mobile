import React from "react";
import { styles as InputStyle } from "../Input/Input.style";
import { COLORS, SIZES } from "../../../constants";
import SelectDropdown from "react-native-select-dropdown";

const Select = (props) => {
  return (
    <SelectDropdown
      {...props}
      buttonStyle={{ ...InputStyle.inputBody, flex: 1 }}
      buttonTextStyle={{ color: COLORS.gray, fontSize: SIZES.small }}
    />
  );
};

export default Select;
