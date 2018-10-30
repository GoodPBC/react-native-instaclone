import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "./components/Avatar";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          initials={"JP"}
          size={100}
          backgroundColor={"teal"}
          borderRadius
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  }
});
