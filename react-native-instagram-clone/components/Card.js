import { Image, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import React from "react";

import AuthorRow from "./AuthorRow";

export default class Card extends React.Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
  };

  static defaultProps = {
    linkText: "",
    onPressLinkText: () => {}
  };

  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;

    return (
      /* Component Render logic here */
      /* View rendered w/ default flexDirection: 'column' to vertically stack Cards */
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <Image style={styles.image} source={image} />
      </View>
    );
  }
}

// Card.js Stylesheet
const styles = StyleSheet.create({
  image: {
    // aspectRatio: 1 to make the height of the Image match its full-screen width
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)"
  }
});
