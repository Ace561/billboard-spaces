import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function Add({ route, navigation }) {
  const { imageUrl, text, text2 } = route.params.page;
  const imageUri = imageUrl ? imageUrl : 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/111.jpg?alt=media&token=52f24aed-0a4c-4cf8-b559-8dd68b32191e';
  return (
    <View style={styles.main}>
          <Image source={{ uri: imageUri }} style={{width: '100%', height:200 }} />
      <View style={styles.Total}>
        <Text style={{ marginLeft: 10, fontWeight: '300', fontSize: 23, marginTop: 15 }}>
          {text ? text : "Text here"}
        </Text>
        <Text style={{ marginLeft: 10, fontSize: 23, fontWeight: '300', marginTop: 6 }}>
          {text2 ? text2 : "Text 22"}
        </Text>
        <View style={styles.buttons}>
          <View style={styles.whatsapp}>
            <TouchableOpacity onPress={() => (
              Linking.openURL("whatsapp://send?phone=+2348100652910&text=Hi good day, I want to verify the Large format at Airport Road, Uyo")
            )}>
              <View style={styles.verify}>
                <Text style={{ color: '#34B7F1' }}>Verify the site</Text>
                <FontAwesome name="whatsapp" size={24} color="#34B7F1" style={{ marginLeft: 5 }} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.telebutton}>
            <TouchableOpacity onPress={() => (
              Linking.openURL('tel:+2348100652910')
            )}>
              <View style={styles.telephone}>
                <Text style={{ color: 'white' }}>Mobile number</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttons: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  telephone: {
    width: 300,
    height: 50,
    backgroundColor: '#34B7F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  whatsapp: {
    marginTop: 10,
    borderRadius: 20,
    flex: 1
  },
  verify: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#34B7F1'
  },
  telebutton: {
    borderRadius: 20,
    flexDirection: 'row',
    flex: 1
  },
  Total: {
    backgroundColor: '#ffffff',
    height: "100%",
    marginTop: 20
  }
});


