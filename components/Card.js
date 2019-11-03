import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

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
        {alarmCount > 0 ? (
          <View style={styles.headerContainerRed}>
            <View style={{ width: 295 }}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subText1}>{subtitle}</Text>
              <Text style={styles.subText2}>
                {deviceCount !== null
                  ? deviceCount + " Devices"
                  : "Unknown Devices"}
              </Text>
            </View>
            <Icon
              name="more-vert"
              size={30}
              color="white"
              onPress={() => console.log("clicked")}
            />
          </View>
        ) : (
          <View
            style={
              alarmCount === null
                ? styles.headerContainerslategray
                : styles.headerContainerBlue
            }
          >
            <View style={{ width: 295 }}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subText1}>{subtitle}</Text>
              <Text style={styles.subText2}>
                {deviceCount !== null
                  ? deviceCount + " Devices"
                  : "Unknown Devices"}
              </Text>
            </View>
            <Icon
              name="more-vert"
              size={30}
              color="white"
              onPress={() => console.log("clicked")}
            />
          </View>
        )}
        <View>
          <Text style={styles.textStyle}>
            {values.humidity
              ? `Humidity: ${values.humidity} Temperature: ${values.temperature}`
              : null}
            {values.flow
              ? `Flow: ${values.flow} Volume: ${values.volume}`
              : null}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => console.log("clicked")}
        >
          <Text style={styles.viewButtonText}>View Location</Text>
          <Icon name="keyboard-arrow-right" size={20} color="slategray" />
        </TouchableOpacity>
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
    margin: 15,
    marginBottom: 0
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 15
  },
  textStyle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
    color: "darkslategrey"
  },
  headerContainerRed: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA",
    backgroundColor: "firebrick",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row"
  },
  headerContainerBlue: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA",
    backgroundColor: "royalblue",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row"
  },
  headerContainerslategray: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA",
    backgroundColor: "darkslategrey",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row"
  },
  subText1: {
    color: "white",
    marginLeft: 15,
    fontWeight: "bold"
  },
  subText2: {
    color: "white",
    marginLeft: 15
  },
  viewButton: {
    borderTopWidth: 1,
    borderTopColor: "#D6D7DA",
    flexDirection: "row",
    padding: 20
  },
  viewButtonText: {
    color: "slategray",
    fontSize: 18,
    width: 275
  }
});
