import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Navigation, TextInput } from 'react-native';


export default class Registration extends React.Component {
    static navigationOptions = {
        title: 'Registration',
    };
  render() {
      const {navigate} = this.props.navigation;
      return (

      
        

        <View style={styles.container}>
        <TextInput
   
          placeholderTextColor='#f0f' 
          returnKeyType="next"
          onSubmitEditing={async()=> 
          {try {
            await AsyncStorage.setItem('@MySuperStore:number', 'I like to save it');
          } catch (error) {
            // Error saving data
          }}}
          keyobardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input} 
        /> 
        <Text style={styles.red}>Name</Text>
        <Text>Number</Text>
        <Text>Trusted person</Text>
        <Text>Number</Text>
        <TextInput
          placeholder="phone number"
          placeholderTextColor="rgba()"

        />
        <Button 
        title = "Confirm"
           onPress = { async () => 
           
            navigate('Home')}
          

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
  color: '#2196F3', 
  fontSize: 20, 

},
});