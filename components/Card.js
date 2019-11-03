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
          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15 }}
          >
            <View
              style={{ flexDirection: "column ", width: 130, paddingLeft: 15 }}
            >
              <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                {alarmCount > 0 ? (
                  <Icon
                    name="notifications-active"
                    size={20}
                    color="firebrick"
                  />
                ) : (
                  <Icon name="notifications" size={20} color="slategray" />
                )}
                {alarmCount !== null ? (
                  <Text style={{ paddingLeft: 5 }}> {alarmCount} Alarm</Text>
                ) : (
                  <Text style={{ paddingLeft: 5 }}> Unknown Alarm</Text>
                )}
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                <Icon name="info" size={20} color="royalblue" />
                {eventCount !== null ? (
                  <Text style={{ paddingLeft: 5, color: "royalblue" }}>
                    {" "}
                    {eventCount} Event
                  </Text>
                ) : (
                  <Text style={{ paddingLeft: 5, color: "royalblue" }}>
                    {" "}
                    Unkown Event
                  </Text>
                )}
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                {commStatus === "Online" ? (
                  <Icon name="cloud-circle" size={20} color="slategray" />
                ) : (
                  <Icon name="cloud-off" size={20} color="firebrick" />
                )}
                <Text style={{ paddingLeft: 5 }}> {commStatus}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", width: 125 }}>
              <View style={{ flexDirection: "column", paddingRight: 10 }}>
                {values.temperature ? (
                  <Icon name="add-alert" size={20} color="slategray" />
                ) : null}
                <Text style={styles.textStyle}>
                  {values.temperature ? `${values.temperature}` : null}
                </Text>
                <Text style={styles.textStyle}>
                  {values.temperature ? `Temperature` : null}
                </Text>
              </View>
              <View style={{ flexDirection: "column", paddingRight: 10 }}>
                {values.humidity ? (
                  <Icon name="alarm" size={20} color="slategray" />
                ) : null}
                <Text style={styles.textStyle}>
                  {values.humidity ? `${values.humidity}` : null}
                </Text>
                <Text style={styles.textStyle}>
                  {values.humidity ? `Humidity` : null}
                </Text>
              </View>
              <View style={{ flexDirection: "column", paddingRight: 10 }}>
                {values.flow ? (
                  <Icon name="alarm" size={20} color="slategray" />
                ) : null}
                <Text style={styles.textStyle}>
                  {values.flow ? `${values.flow}` : null}
                </Text>
                <Text style={styles.textStyle}>
                  {values.flow ? `Flow` : null}
                </Text>
              </View>
              <View style={{ flexDirection: "column", paddingRight: 10 }}>
                {values.volume ? (
                  <Icon name="alarm" size={20} color="slategray" />
                ) : null}
                <Text style={styles.textStyle}>
                  {values.volume ? `${values.volume}` : null}
                </Text>
                <Text style={styles.textStyle}>
                  {values.volume ? `Volume` : null}
                </Text>
              </View>
            </View>
          </View>
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
    fontSize: 15,
    textAlign: "center",
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
    width: 285
  }
});
