import  'react-native-gesture-handler'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Colors from './constantes/Colors'
import MainScreen from './pages/Main'

const rootStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: Colors.black
      },
      headerTintColor: Colors.white,
      title: 'Heróis'
    }
  }
})


export default createAppContainer({rootStack})
