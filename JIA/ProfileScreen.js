// ProfileScreen.js

import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { UserContext } from './UserContext';

const ProfileScreen = () => {
  const { userDetails } = useContext(UserContext);

  return (
    <View>
      {userDetails ? (
        <View style={styles.main}>
          <Text>email: {userDetails.email}</Text>
          <Text>Password: {userDetails.password}</Text>
        </View>
      ) : (
        <Text>Please login to view profile details.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})
export default ProfileScreen;
