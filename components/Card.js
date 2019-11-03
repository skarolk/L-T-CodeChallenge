import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Card extends React.Component {
  render() {
    const {
      alarmCount,
      commStatus,
      deviceCount,
      eventCount,
      subtitle,
      title,
      values
    } = this.props.info;

    return (
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{subtitle}</Text>
        <Text style={styles.textStyle}>
          {values.humidity
            ? `Humidity: ${values.humidity} Temperature: ${values.temperature}`
            : null}
          {values.flow ? `Flow: ${values.flow} Volume: ${values.volume}` : null}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  title: {
    fontSize: 14,
    fontWeight: "bold"
  },
  textStyle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
