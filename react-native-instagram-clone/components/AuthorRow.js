import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import React from "react";

import Avatar from "./Avatar";
import getAvatarColor from "../utils/getAvatarColor";
import getInitials from "../utils/getInitials";

const AuthorRow = ({ fullname, linkText, onPressLinkText }) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={50}
        initials={getInitials(fullname)}
        backgroundColor={getAvatarColor(fullname)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {/* numberOflines truncates text at end of line for us*/}
        {fullname}
      </Text>
      {/* !!linkText conditionally renders <TouchableOpacity> || Double negation '!!'  */}
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}> {linkText} </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

AuthorRow.propTypes = {
  fullname: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  text: {
    marginHorizontal: 6,
    //use flex: 1 to expand Text to fill any remaining space in the View. Will push TouchableOpacity to right
    flex: 1
  }
});

export default AuthorRow;
