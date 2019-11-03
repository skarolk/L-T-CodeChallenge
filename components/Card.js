import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default class Card extends React.Component {
  render() {
    // deconstructing props
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
      // with more time, refactor card into three more components: CardHeader, CardBody, LocationButton

      // colored card headers
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
              // pressable menu button
              onPress={() => console.log("clicked")}
            />
          </View>
        ) : (
          <View
            style={
              alarmCount === null
                ? styles.headerContainerGray
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
              // pressable menu button
              onPress={() => console.log("clicked")}
            />
          </View>
        )}
        <View>
          {/* card main information container */}
          <View
            style={{ flexDirection: "row", paddingTop: 15, paddingBottom: 15 }}
          >
            {/* alarm, even, comm status column */}
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
            {/* temperature, humidity, flow, volume container */}
            <View style={{ flexDirection: "row" }}>
              {/* temperature container */}
              <View style={{ flexDirection: "column" }}>
                {values.temperature ? (
                  <Icon name="wb-sunny" size={20} color="slategray" />
                ) : null}
                {values.temperature ? (
                  <Text style={styles.textStyle}>
                    {values.temperature ? `${values.temperature}°F` : null}
                  </Text>
                ) : null}
                {values.temperature ? (
                  <Text style={styles.textStyle}>
                    {values.temperature ? `Temperature` : null}
                  </Text>
                ) : null}
              </View>
              {/* humidity container */}
              <View style={{ flexDirection: "column" }}>
                {values.humidity ? (
                  <Icon name="opacity" size={20} color="slategray" />
                ) : null}
                {values.humidity ? (
                  <Text style={styles.textStyle}>
                    {values.humidity ? `${values.humidity}%` : null}
                  </Text>
                ) : null}
                {values.humidity ? (
                  <Text style={styles.textStyle}>
                    {values.humidity ? `Humidity` : null}
                  </Text>
                ) : null}
              </View>
              {/* flow container */}
              <View style={{ flexDirection: "column" }}>
                {values.flow ? (
                  <Icon name="swap-horiz" size={20} color="slategray" />
                ) : null}
                {values.flow ? (
                  <Text style={styles.textStyle}>
                    {values.flow ? `${values.flow}KSCFH` : null}
                  </Text>
                ) : null}
                {values.flow ? (
                  <Text style={styles.textStyle}>
                    {values.flow ? `Flow` : null}
                  </Text>
                ) : null}
              </View>
              {/* volume container */}
              <View style={{ flexDirection: "column" }}>
                {values.volume ? (
                  <Icon name="local-drink" size={20} color="slategray" />
                ) : null}
                {values.volume ? (
                  <Text style={styles.textStyle}>
                    {values.volume ? `${values.volume}KSCF` : null}
                  </Text>
                ) : null}
                {values.volume ? (
                  <Text style={styles.textStyle}>
                    {values.volume ? `Volume` : null}
                  </Text>
                ) : null}
              </View>
            </View>
          </View>
        </View>
        {/* view location button */}
        <TouchableOpacity
          style={styles.viewButton}
          // pressable button
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
    color: "darkslategrey",
    width: 100
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
  headerContainerGray: {
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
