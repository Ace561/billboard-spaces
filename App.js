import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './JIA/LoginScreen';
import RegisterScreen from './JIA/RegisterScreen';
import ResetPasswordScreen from './JIA/ResetPasswordScreen';
import SpectacularBillboard from './JIA/SpectacularBillboard';
import HomeScreen from './JIA/HomeScreen';
import Portrait from './JIA/Portrait';
import Gantry from './JIA/Gantry';
import Sheet48 from './JIA/Sheet48';
import LargeFormat from './JIA/LargeFormat';
import UniPole from './JIA/UniPole';
import Img1111 from './JIA/Img1111';
import Add from './JIA/Add';
import Recovery from './JIA/Recovery';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Zoom from './JIA/Zoom'



// Create a Stack Navigator
const Stack = createNativeStackNavigator();


export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication status
  const [loading, setLoading] = useState(false); // Track loading state

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleRegister = (navigation) => {
    setLoading(true); // Set loading to true
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('success');
        const user = userCredential.user;
        console.log(user);
        setUser(user); // Update user state
        if (navigation) {
          navigation.navigate('Add');
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert('error', error.message)
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
  };

  const handleLogin = (navigation) => {
    setLoading(true); // Set loading to true
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('success');
        const user = userCredential.user;
        console.log(user);
        setUser(user); // Update user state
        alert('login succesfull');
        if (navigation) {
          navigation.navigate('Add');
        }
      })
      .catch(error => {
        console.log(error);
        Alert.alert('error', error.message)
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
  };



  const handleResetPassword = (resetEmail) => {
    setLoading(true); // Set loading to true
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        Alert.alert('Password Reset Email Sent', 'Please check your email to reset your password.');
      })
      .catch(error => {
        Alert.alert('Password Reset Failed', error.message);
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
  };
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="Login">
            {props => (
              <LoginScreen
                {...props}
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleResetPassword={() => props.navigation.navigate('ResetPassword')}
                loading={loading}
              />
            )}
          </Stack.Screen>

          <Stack.Screen options={{ headerShown: false }} name="Register">
            {props => (
              <RegisterScreen
                {...props}
                setEmail={setEmail}
                setPassword={setPassword}
                handleRegister={handleRegister}
                loading={loading}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="ResetPassword">
            {props => (
              <ResetPasswordScreen
                {...props}
                handleResetPassword={handleResetPassword}
                loading={loading}
              />
            )}
          </Stack.Screen>
          {/* </>
        )} */}
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Zoom" component={Zoom} />
          <Stack.Screen options={{ title: 'Back' }} name="Recovery" component={Recovery} />
          <Stack.Screen options={{}} name="Large format" component={LargeFormat} />
          <Stack.Screen options={{}} name="Back" component={Img1111} />
          <Stack.Screen options={{ title: 'Add your billboard', headerShown: false }} name="Add" component={Add} />
          <Stack.Screen options={{}} name="Portrait" component={Portrait} />
          <Stack.Screen options={{}} name="Gantry" component={Gantry} />
          <Stack.Screen options={{}} name="SpectacularBillboard" component={SpectacularBillboard} />
          <Stack.Screen options={{}} name="Unipole" component={UniPole} />
          <Stack.Screen options={{}} name="48 sheet" component={Sheet48} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
