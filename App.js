import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Log_in from './JIA/Log_in';
import Sign_up from './JIA/Sign_up';
import HomeScreen from './JIA/HomeScreen';
import Ferd from './JIA/Ferd';
import AkwaIbom from './JIA/AkwaIbom';
import Portrait from './JIA/Portrait';
import Sheet48 from './JIA/Sheet48';
import LargeFormat from './JIA/LargeFormat';
import Appa from './JIA/Appa'
import UniPole from './JIA/UniPole';
import Img1111 from './JIA/Img1111';
import Add from './JIA/Add';
import Aka from './JIA/Aka';
import Img6666 from './JIA/Img6666';
import Img2222 from './JIA/Img2222';
import Img5555 from './JIA/Img5555';
import Nwaniba from './JIA/Nwaniba';
import Itam from './JIA/Itam';
import Itu from './JIA/Itu';
import Oron from './JIA/Oron';
import Oran from './JIA/Oran';
import Akar from './JIA/Akar';
import Abak from './JIA/Abak';
import Ikot from './JIA/Ikot';
import Afa from './JIA/Afa';
import Towel from './JIA/Towel';
import Afriq from './JIA/Afriq';
import Hotel from './JIA/Hotel';
import Way from './JIA/Way';
import Aqu from './JIA/Aqu';
import Point from './JIA/Point';
import Qua from './JIA/Qua';
import Uuth from './JIA/Uuth';
import Fly from './JIA/Fly';
import High from './JIA/High';
import Ggg from './JIA/Ggg';
import Sksed from './JIA/Sksed';
import Akard from './JIA/Akard';
import Jun from './JIA/Jun';
import ProfileScreen from './JIA/ProfileScreen'
import Hhh from './JIA/Hhh';
import UserProvider from './JIA/UserContext';
import Zrt from './JIA/Zrt';
import Brt from './JIA/Brt';
import Ibb from './JIA/Ibb';
import Plaza from './JIA/Plaza';
import Iter from './JIA/Iter';
import Uba from './JIA/Uba';
import Uni from './JIA/Uni';
import Ipa from './JIA/Ipa';
// import { AuthProvider } from './context/authContext';
import Oil from './Cosmrtic/Oil';
import Recovery from './JIA/Recovery';
import Component from './JIA/Component';
import { AuthProvider } from './context/authComponent';
import UserContext from './JIA/UserContext';
import LoginScreen from './JIA/LoginScreen';

// const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
function App() {
  
  return (
    // <Onbouding/>
    <UserProvider>
      {/* <ComponentProvider> */}
        <AuthProvider>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Appa" component={Appa} />
            <Stack.Screen options={{ headerShown: false }} name="UserContext" component={UserContext} />
            <Stack.Screen options={{ headerShown: false }} name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen options={{ headerShown: false }} name="comp" component={Component} />
            <Stack.Screen options={{}} name="Large format" component={LargeFormat} />
            <Stack.Screen options={{}} name="Back" component={Img1111} />
            <Stack.Screen options={{ title: 'Back' }} name="Aka" component={Aka} />
            <Stack.Screen options={{ title: 'Back' }} name="Backu" component={Img2222} />
            <Stack.Screen options={{ title: 'Back' }} name="Img6666" component={Img6666} />
            <Stack.Screen options={{ title: 'Back' }} name="Img5555" component={Img5555} />
            <Stack.Screen options={{ title: 'Back' }} name="Nwaniba" component={Nwaniba} />
            <Stack.Screen options={{ title: 'Back' }} name="Itu" component={Itu} />
            <Stack.Screen options={{ headerShown: false }} name="oil" component={Oil} />
            <Stack.Screen options={{ title: 'Back' }} name="Oron" component={Oron} />
            <Stack.Screen options={{ title: 'Back' }} name="Oran" component={Oran} />
            <Stack.Screen options={{ title: 'Back' }} name="Itam" component={Itam} />
            <Stack.Screen options={{ title: 'Back' }} name="Akar" component={Akar} />
            <Stack.Screen options={{ title: 'Back' }} name="abak" component={Abak} />
            <Stack.Screen options={{ title: 'Back' }} name="Ikot" component={Ikot} />
            <Stack.Screen options={{ title: 'Back' }} name="Ferd" component={Ferd} />
            <Stack.Screen options={{ title: 'Back' }} name="Afa" component={Afa} />
            <Stack.Screen options={{ title: 'Back' }} name="towel" component={Towel} />
            <Stack.Screen options={{ title: 'Back' }} name="afriq" component={Afriq} />
            <Stack.Screen options={{ title: 'Back' }} name="hotel" component={Hotel} />
            <Stack.Screen options={{ title: 'Back' }} name="way" component={Way} />
            <Stack.Screen options={{ title: 'Back' }} name="Aqu" component={Aqu} />
            <Stack.Screen options={{ title: 'Back' }} name="Point" component={Point} />
            <Stack.Screen options={{ title: 'Back' }} name="Qua" component={Qua} />
            <Stack.Screen options={{ title: 'Back' }} name="uuth" component={Uuth} />
            <Stack.Screen options={{ title: 'Back' }} name="hhh" component={Hhh} />
            <Stack.Screen options={{ title: 'Back' }} name="jun" component={Jun} />
            <Stack.Screen options={{ title: 'Back' }} name="akaRd" component={Akard} />
            <Stack.Screen options={{ title: 'Back' }} name="sksEd" component={Sksed} />
            <Stack.Screen options={{ title: 'Back' }} name="ggg" component={Ggg} />
            <Stack.Screen options={{ title: 'Back' }} name="high" component={High} />
            <Stack.Screen options={{ title: 'Back' }} name="fly" component={Fly} />
            <Stack.Screen options={{ title: 'Back' }} name="Zrt" component={Zrt} />
            <Stack.Screen options={{ title: 'Back' }} name="Brt" component={Brt} />
            <Stack.Screen options={{ title: 'Back' }} name="Ibb" component={Ibb} />
            <Stack.Screen options={{ title: 'Back' }} name="Plaza" component={Plaza} />
            <Stack.Screen options={{ title: 'Back' }} name="Iter" component={Iter} />
            <Stack.Screen options={{ title: 'Back' }} name="Uni" component={Uni} />
            <Stack.Screen options={{ title: 'Back' }} name="Recovery" component={Recovery} />
            <Stack.Screen options={{ title: 'Back' }} name="Uba" component={Uba} />
            <Stack.Screen options={{ title: 'Back' }} name="Ipa" component={Ipa} />
            <Stack.Screen options={{ headerShown: false }} name="sign_up" component={Sign_up} />
            <Stack.Screen options={{ headerShown: false }} name="Log_in" component={Log_in} />

            <Stack.Screen options={{ title: 'Add your billboard', headerShown: false }} name="Add" component={Add} />
            <Stack.Screen options={{}} name="Portrait" component={Portrait} />
            <Stack.Screen options={{}} name="Akwa Ibom" component={AkwaIbom} />
            <Stack.Screen options={{}} name="Unipole" component={UniPole} />
            <Stack.Screen options={{}} name="48 sheet" component={Sheet48} />
          </Stack.Navigator>
        </NavigationContainer>
        </AuthProvider>
      {/* /</ComponentProvider> */}
    </UserProvider>
  )
};
export default App;