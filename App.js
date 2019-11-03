import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView
} from "react-native";
import InfoCards from "./components/InfoCards";
import data from "./sampleData.json";

export default class App extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;

    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Overview</Text>
          <Text style={styles.title}>Gary SteelWorks</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.cardListContainer}
        >
          <ScrollView style={styles.cardList}>
            <InfoCards data={data} />
          </ScrollView>
        </KeyboardAvoidingView>
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
    borderBottomColor: "#D6D7DA"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  cardList: {
    paddingBottom: 15
  },
  cardListContainer: {
    flex: 1
  }
});
