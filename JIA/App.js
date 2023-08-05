// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';
// import { firebaseConfig } from './firebaseConfig';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Create a Stack Navigator
// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [user, setUser] = useState(null); // Track user authentication status

//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);

//   // Check if user is already authenticated
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleRegister = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log('success');
//         const user = userCredential.user;
//         console.log(user);
//         setUser(user); // Update user state
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log('success');
//         const user = userCredential.user;
//         console.log(user);
//         setUser(user); // Update user state
//         alert('login succeeded')
//       })
//       .catch(error => {
//         console.log(error);
//         alert(error.message)
//       });
//   };

//   const handleResetPassword = (resetEmail) => {
//     sendPasswordResetEmail(auth, resetEmail)
//       .then(() => {
//         Alert.alert('Password Reset Email Sent', 'Please check your email to reset your password.');
//       })
//       .catch(error => {
//         Alert.alert('Password Reset Failed', error.message);
//         console.log(error.message);
//       });
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         {user ? (
//           <Stack.Screen name="Home" component={HomeScreen} />
//         ) : (
//           <>
//             <Stack.Screen name="Login">
//               {props => (
//                 <LoginScreen
//                   {...props}
//                   setEmail={setEmail}
//                   setPassword={setPassword}
//                   handleLogin={handleLogin}
//                   handleResetPassword={() => props.navigation.navigate('ResetPassword')}
//                 />
//               )}
//             </Stack.Screen>

//             <Stack.Screen name="Register">
//               {props => (
//                 <RegisterScreen
//                   {...props}
//                   setEmail={setEmail}
//                   setPassword={setPassword}
//                   handleRegister={handleRegister}
//                 />
//               )}
//             </Stack.Screen>

//             <Stack.Screen name="ResetPassword">
//               {props => (
//                 <ResetPasswordScreen
//                   {...props}
//                   handleResetPassword={handleResetPassword}
//                 />
//               )}
//             </Stack.Screen>
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // Login Screen component
// function LoginScreen({ navigation, setEmail, setPassword, handleLogin, handleResetPassword }) {
//   const handleReset = () => {
//     if (email) {
//       handleResetPassword(email);
//     } else {
//       Alert.alert('Email is required', 'Please enter your email address.');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <Button title="Register" onPress={()=>navigation.navigate('Register')} />
//       <Button
//         title="Alternative Screen"
//         onPress={() => navigation.navigate('ResetPassword')}
//       />
//     </View>
//   );
// }

// // Register Screen component
// function RegisterScreen({ navigation, setEmail, setPassword, handleRegister }) {
//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={(text) => setPassword(text)}
//       />
//       <Button title="Register" onPress={handleRegister} />
//       <Button
//         title="Back to Login"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   );
// }

// // Reset Password Screen component
// function ResetPasswordScreen({ handleResetPassword }) {
//   const [email, setEmail] = useState('');

//   const handleReset = () => {
//     if (email) {
//       handleResetPassword(email);
//     } else {
//       Alert.alert('Email is required', 'Please enter your email address.');
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         onChangeText={text => setEmail(text)}
//       />
//       <Button title="Reset Password" onPress={handleReset} />
//     </View>
//   );
// }

// // Home Screen component
// function HomeScreen() {
//   return (
//     <View>
//       <Text>Welcome to the Home Screen!</Text>
//     </View>
//   );
// }

import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create a Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication status
  const [loading, setLoading] = useState(false); // Track loading state

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleRegister = () => {
    setLoading(true); // Set loading to true
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('success');
        const user = userCredential.user;
        console.log(user);
        setUser(user); // Update user state
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
  };

  const handleLogin = () => {
    setLoading(true); // Set loading to true
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('success');
        const user = userCredential.user;
        console.log(user);
        setUser(user); // Update user state
        alert('login succeeded')
      })
      .catch(error => {
        console.log(error);
        alert(error.message)
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
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login">
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

            <Stack.Screen name="Register">
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Login Screen component
function LoginScreen({ navigation, setEmail, setPassword, handleLogin, handleResetPassword, loading }) {
  const handleReset = () => {
    if (email) {
      handleResetPassword(email);
    } else {
      Alert.alert('Email is required', 'Please enter your email address.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="small" /> // Show loading indicator while loading
      ) : (
        <>
          <Button
            title="Login"
            onPress={handleLogin}
            disabled={loading}
          />
          <Button
            title="Register"
            onPress={() => navigation.navigate('Register')}
            disabled={loading}
          />
          <Button
            title="Alternative Screen"
            onPress={() => navigation.navigate('ResetPassword')}
            disabled={loading}
          />
        </>
      )}
    </View>
  );
}

// Register Screen component
function RegisterScreen({ navigation, setEmail, setPassword, handleRegister, loading }) {
  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      {loading ? (
        <ActivityIndicator size="small" /> // Show loading indicator while loading
      ) : (
        <>
          <Button
            title="Register"
            onPress={handleRegister}
            disabled={loading}
          />
          <Button
            title="Back to Login"
            onPress={() => navigation.navigate('Login')}
            disabled={loading}
          />
        </>
      )}
    </View>
  );
}

// Reset Password Screen component
function ResetPasswordScreen({ handleResetPassword, loading }) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (email) {
      handleResetPassword(email);
    } else {
      Alert.alert('Email is required', 'Please enter your email address.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      {loading ? (
        <ActivityIndicator size="small" /> // Show loading indicator while loading
      ) : (
        <Button
          title="Reset Password"
          onPress={handleReset}
          disabled={loading}
        />
      )}
    </View>
  );
}


// Home Screen component
function HomeScreen() {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
}
