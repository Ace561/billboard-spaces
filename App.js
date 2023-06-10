import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Log_in from './JIA/Log_in';
import Sign_up from './JIA/Sign_up';
import HomeScreen from './JIA/HomeScreen';
import Portrait from './JIA/Portrait';
import Sheet48 from './JIA/Sheet48';
import LargeFormat from './JIA/LargeFormat';
import UniPole from './JIA/UniPole';
import Img1111 from './JIA/Img1111';
import Add from './JIA/Add';
import Recovery from './JIA/Recovery';
import { AuthProvider } from './context/authContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


// const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
function App() {

  return (
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{}} name="Large format" component={LargeFormat} />
            <Stack.Screen options={{}} name="Back" component={Img1111} />
            <Stack.Screen options={{ title: 'Back' }} name="Recovery" component={Recovery} />
            <Stack.Screen options={{ headerShown: false }} name="sign_up" component={Sign_up} />
            <Stack.Screen options={{ headerShown: false }} name="Log_in" component={Log_in} />
            <Stack.Screen options={{ title: 'Add your billboard', headerShown: false }} name="Add" component={Add} />
            <Stack.Screen options={{}} name="Portrait" component={Portrait} />
            <Stack.Screen options={{}} name="Unipole" component={UniPole} />
            <Stack.Screen options={{}} name="48 sheet" component={Sheet48} />
          </Stack.Navigator>
        </NavigationContainer>
        </GestureHandlerRootView>
      </AuthProvider>
    )
};
export default App;