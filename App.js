import {
  StackNavigator, 
} from 'react-navigation';
import Welcome from "./Welcome"
import Registration from "./Registration"
import Home from "./Home"

export default StackNavigator ({
  Welcome: { screen: Welcome},
Registration: {screen: Registration},
Home: { screen: Home},
})

