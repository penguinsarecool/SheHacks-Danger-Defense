import React from "react";
import SendSMS from 'react-native-sms';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigation
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E7D32",
    alignItems: "center",
    justifyContent: "center"
  },
  red: {
    color: "#2196F3",
    fontSize: 20
  }
})

export default class Registration extends React.Component {
  static navigationOptions = {
    title: "Registration"
  };

  TextNumber() {
    SendSMS.send(myOptionsObject, callback)
      {
        body: "The default body of the SMS!",
        recipients; [ "6176788760"],
        successTypes; ["sent", "queued"]
        sender: ["7818030612"]
      }

    }
       
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.red}>This is your page!</Text>

        <Button title="Not OK" color="#F44336" onPress={() => 
          "TextNumber"} />
        <Button title="OK" color="#000" onPress={() => navigate("Home")} />
      </View>
    );
  }
}
