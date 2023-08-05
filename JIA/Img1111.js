import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, Modal } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function Add({ route, navigation }) {
  const { imageUrl, text, text2, phoneNumber } = route.params.page;
  const imageUri =
    imageUrl ||
    'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/111.jpg?alt=media&token=52f24aed-0a4c-4cf8-b559-8dd68b32191e';

  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setShowFullImage(true)}>
        <Image source={{ uri: imageUri }} style={{ width: '100%', height: 200 }} />
      </TouchableOpacity>
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
              Linking.openURL("whatsapp://send?phone=+2348100652910&text=Hi good day, I want to verify the {Size,Location}")
            )}>
              <View style={styles.verify}>
                <Text style={{ color: '#34B7F1' }}>Verify the site</Text>
                <FontAwesome name="whatsapp" size={24} color="#34B7F1" style={{ marginLeft: 5 }} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.telebutton}>
            <TouchableOpacity onPress={() => (
              Linking.openURL(`tel:${phoneNumber}`)
            )}>
              <View style={styles.telephone}>
                <Text style={{ color: 'white' }}>Mobile number</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal visible={showFullImage} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{ uri: imageUri }} style={styles.fullImage} />
            <TouchableOpacity onPress={() => setShowFullImage(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  Total: {
    backgroundColor: '#ffffff',
    height: "100%",
    marginTop: 20
  },
  buttons: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
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
  telephone: {
    width: 300,
    height: 50,
    backgroundColor: '#34B7F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    backgroundColor: '#000000',
  },
  modalContent: {
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: 400
  },
  fullImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#34B7F1',
  },
});


