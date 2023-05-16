import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { UserContext } from './UserContext';

const LoginScreen = ({ navigation }) => {
  const { userDetails, setUserDetails } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // authenticate user here and get user details
    const user = { email: email, password: password };
    setUserDetails(user);
    navigation.navigate('ProfileScreen')
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
