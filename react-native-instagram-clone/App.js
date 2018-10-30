import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Constants } from "expo";
import AuthorRow from "./components/AuthorRow";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthorRow
          fullname={"First Last"}
          linkText={"Comments"}
          onPressLinkText={() => {
            console.log("Comments Link Clicked");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  }
});
