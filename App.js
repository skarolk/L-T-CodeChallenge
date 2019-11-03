import React from "react";
import { StyleSheet, View, ScrollView, Text, StatusBar } from "react-native";
import InfoCards from "./components/InfoCards";
import data from "./sampleData.json";
import { Icon } from "react-native-elements";

export default class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    // importing data and updating state
    this.setState({ data: data });
  }

  render() {
    // deconstructing state
    const { data } = this.state;

    return (
      // header container
      <View style={styles.appContainer}>
        {/* white status bar text */}
        <StatusBar barStyle="light-content" />
        <View style={styles.titleContainer}>
          <Icon
            name="menu"
            size={30}
            color="white"
            // pressable menu button
            onPress={() => console.log("clicked")}
          />
          <View style={{ width: 285 }}>
            <Text style={styles.title}>Overview</Text>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>Gary SteelWorks</Text>
              <Icon
                name="arrow-drop-down"
                size={25}
                color="white"
                onPress={() => console.log("clicked")}
              />
            </View>
          </View>
          <Icon
            name="more-vert"
            size={30}
            color="white"
            // pressable menu button
            onPress={() => console.log("clicked")}
          />
        </View>

        {/* scrolling card container */}
        <ScrollView style={styles.cardList}>
          <InfoCards data={data} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D6D7DA",
    backgroundColor: "firebrick",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginLeft: 35
  },
  cardList: {
    paddingBottom: 15
  },
  subText: {
    color: "white",
    marginLeft: 35,
    paddingRight: 3,
    fontSize: 20
  },
  subTextContainer: {
    flexDirection: "row"
  }
});
