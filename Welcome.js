import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Navigation } from 'react-native';


export default class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
  render() {
      const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.red}>WELCOME</Text>
        <Text>Purpose: To readily alert in times of danger.</Text>
        <Text>YAY</Text>
        
        <Button 
        title = "Press Me"
          onPress = {() =>
            navigate('Registration')
          }
        />
      

    
        
    
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
red: {
  color: 'red', 
  fontSize: 30, 

},
});

