import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import React from "react";

import Avatar from "./Avatar";
import getAvatarColor from "../utils/getAvatarColor";
import getInitials from "../utils/getInitials";

const AuthorRow = ({ fullName, linkText, onPressLinkText }) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {" "}
        {fullName}{" "}
      </Text>
    </View>
  );
};

AuthorRow.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: 10
  },
  text: {
    marginHorizontal: 6,
    //use flex: 1 to expand Text to fill any remaining space in the View. Will push TouchableOpacity to right
    flex: 1
  }
});

export default AuthorRow;
