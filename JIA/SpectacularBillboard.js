import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button, RefreshControl, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useEffect } from 'react';
import Component from './Component'
import { MaterialIcons } from '@expo/vector-icons';
import { getDatabase, onValue, ref, on, query } from 'firebase/database';
import networkStatusListener from './NetworkStatus'; // Replace with the correct path
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';
export default function Portrait({ navigation }) {
  const [firebaseData, setFirebaseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState('Rivers');
  const [modalVisible, setModalVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [isInternetReachable, setIsInternetReachable] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    networkStatusListener(updateNetworkStatus);
  }, []);

  const updateNetworkStatus = (isConnected, isInternetReachable) => {
    setIsConnected(isConnected);
    setIsInternetReachable(isInternetReachable);

    if (!isConnected || !isInternetReachable) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const onRetry = () => {
    setShowModal(false);
    // Retry logic here
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    // Any additional data refresh logic can go here
    setIsRefreshing(false);
  };


  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const databaseRef = ref(database, 'SpectacularBillboard');
    const dataQuery = query(databaseRef);

    onValue(dataQuery, (snapshot) => {
      const fetchedData = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedData.push({ id: key, ...data });
      });

      setFirebaseData(fetchedData);
      setLoading(false);
    });
  }, []);

  const getPhoneNumber = (id) => {
    const page = firebaseData.find((page) => page.id === id);
    return page ? page.phoneNumber : '';
  };

  useEffect(() => {
    console.log('Phone Number:', getPhoneNumber(1)); // Log the phone number for page with id 1
  }, [getPhoneNumber]);

  const onLocationChange = (location) => {
    setSelectedLocation(location);
  };
  const seeAll = (location) => {
    setSelectedLocation(location);
    setModalVisible(false); // Close the modal
    navigation.navigate('SpectacularBillboard', { state: location });
    // ...
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <ScrollView style={styles.main}>

        <Modal visible={showModal} transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Connection Error</Text>
              <Text style={styles.modalText}>
                {isInternetReachable
                  ? "Oops! Looks like your device is not connected to the Internet."
                  : "Your Internet connection is weak or unstable."}
              </Text>
            </View>
          </View>
        </Modal>
        <View style={{
          flexDirection: 'row',
          marginTop: 10
        }}>
          <Text style={{
            fontSize: 24,
            color: '#000000',
            marginLeft: 20,
            fontWeight: '400'
          }}>
            Location
          </Text>
        </View>
        <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false} style={{
          }}>
          <Modal visible={modalVisible} animationType="slide">
            <ScrollView>
              <View style={styles.exit}>
                <MaterialIcons onPress={() => setModalVisible(false)} name="exit-to-app" size={25} color="black" />
              </View>
              <Text style={styles.location}>Locations</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Abia' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Abia')}
                >
                  <Text style={{ fontWeight: '400' }}>Abia</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Adamawa' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Adamawa')}
                >
                  <Text style={{ fontWeight: '400' }}>Adamawa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Abuja' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Abuja')}
                >
                  <Text style={{ fontWeight: '400' }}>Abuja</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Akwa Ibom' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Akwa Ibom')}
                >
                  <Text style={{ fontWeight: '400' }}>Akwa Ibom</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Anambra' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Anambra')}
                >
                  <Text style={{ fontWeight: '400' }}>Anambra</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Bauchi' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Bauchi')}
                >
                  <Text style={{ fontWeight: '400' }}>Bauchi</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Bayelsa' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Bayelsa')}
                >
                  <Text style={{ fontWeight: '400' }}>Bayelsa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Benue' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Benue')}
                >
                  <Text style={{ fontWeight: '400' }}>Benue</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Borno' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Borno')}
                >
                  <Text style={{ fontWeight: '400' }}>Borno</Text>
                </TouchableOpacity>

                {/* Add similar TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Cross River' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Cross River')}
                >
                  <Text style={{ fontWeight: '400' }}>Cross River</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Delta' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Delta')}
                >
                  <Text style={{ fontWeight: '400' }}>Delta</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Ebonyi' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Ebonyi')}
                >
                  <Text style={{ fontWeight: '400' }}>Ebonyi</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Edo' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Edo')}
                >
                  <Text style={{ fontWeight: '400' }}>Edo</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Ekiti' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Ekiti')}
                >
                  <Text style={{ fontWeight: '400' }}>Ekiti</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Enugu' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Enugu')}
                >
                  <Text style={{ fontWeight: '400' }}>Enugu</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Gombe' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Gombe')}
                >
                  <Text style={{ fontWeight: '400' }}>Gombe</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Imo' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Imo')}
                >
                  <Text style={{ fontWeight: '400' }}>Imo</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Jigawa' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Jigawa')}
                >
                  <Text style={{ fontWeight: '400' }}>Jigawa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Kaduna' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Kaduna')}
                >
                  <Text style={{ fontWeight: '400' }}>Kaduna</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Kano' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Kano')}
                >
                  <Text style={{ fontWeight: '400' }}>Kano</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Katsina' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Katsina')}
                >
                  <Text style={{ fontWeight: '400' }}>Katsina</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Kebbi' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Kebbi')}
                >
                  <Text style={{ fontWeight: '400' }}>Kebbi</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Kogi' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Kogi')}
                >
                  <Text style={{ fontWeight: '400' }}>Kogi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Kwara' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Kwara')}
                >
                  <Text style={{ fontWeight: '400' }}>Kwara</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Lagos' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Lagos')}
                >
                  <Text style={{ fontWeight: '400' }}>Lagos</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Nasarawa' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Nasarawa')}
                >
                  <Text style={{ fontWeight: '400' }}>Nasarawa</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Niger' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Niger')}
                >
                  <Text style={{ fontWeight: '400' }}>Niger</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Ogun' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Ogun')}
                >
                  <Text style={{ fontWeight: '400' }}>Ogun</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Ondo' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Ondo')}
                >
                  <Text style={{ fontWeight: '400' }}>Ondo</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Osun' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Osun')}
                >
                  <Text style={{ fontWeight: '400' }}>Osun</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Oyo' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Oyo')}
                >
                  <Text style={{ fontWeight: '400' }}>Oyo</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Plateau' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Plateau')}
                >
                  <Text style={{ fontWeight: '400' }}>Plateau</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Rivers' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Rivers')}
                >
                  <Text style={{ fontWeight: '400' }}>Rivers</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Sokoto' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Sokoto')}
                >
                  <Text style={{ fontWeight: '400' }}>Sokoto</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Taraba' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Taraba')}
                >
                  <Text style={{ fontWeight: '400' }}>Taraba</Text>
                </TouchableOpacity>

                {/* Add TouchableOpacity components for the remaining states */}
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Yobe' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Yobe')}
                >
                  <Text style={{ fontWeight: '400' }}>Yobe</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 14,
                    width: 90,
                    height: 30,
                    marginLeft: 20,
                    borderRadius: 5,
                    justifyContent: 'center',
                    backgroundColor: selectedLocation === 'Zamfara' ? '#a9a9a9' : 'white',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                  }}
                  onPress={() => seeAll('Zamfara')}
                >
                  <Text style={{ fontWeight: '400' }}>Zamfara</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Modal>
          <TouchableOpacity
            style={{
              marginTop: 14,
              width: 90,
              height: 30,
              marginLeft: 20,
              borderRadius: 5,
              justifyContent: 'center',
              backgroundColor: selectedLocation === 'Rivers' ? '#a9a9a9' : 'white',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center'
            }}
            onPress={() => onLocationChange('Rivers')}
          >
            <Text style={{ fontWeight: '400' }}>Rivers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 14,
              width: 90,
              height: 30,
              marginLeft: 20,
              borderRadius: 5,
              justifyContent: 'center',
              backgroundColor: selectedLocation === 'Edo' ? '#a9a9a9' : 'white',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center'
            }}
            onPress={() => seeAll('Edo')}
          >
            <Text style={{ fontWeight: '400' }}>Edo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 14,
              width: 90,
              height: 30,
              marginLeft: 20,
              borderRadius: 5,
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center'
            }}
            onPress={openModal}
          >
            <Text style={{ fontWeight: '400' }}>see all</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={{ marginRight: 16, marginTop: 10 }}>
          {loading ? (
            <ActivityIndicator style={{ marginTop: 150 }} color={'#a9a9a9'} size='large' />
          ) : (
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              {firebaseData.map(page => {
                if (
                  (selectedLocation === 'Abia' && (page.id === 51 || page.id === 52)) ||
                  (selectedLocation === 'Abuja' && (page.id === 1851 || page.id === 1852)) ||
                  (selectedLocation === 'Adamawa' && (page.id === 101 || page.id === 102)) ||
                  (selectedLocation === 'Akwa Ibom' && (page.id === 1 || page.id === 2)) ||
                  (selectedLocation === 'Anambra' && (page.id === 151 || page.id === 152)) ||
                  (selectedLocation === 'Bauchi' && (page.id === 201 || page.id === 202)) ||
                  (selectedLocation === 'Bayelsa' && (page.id === 251 || page.id === 252)) ||
                  (selectedLocation === 'Benue' && (page.id === 301 || page.id === 302)) ||
                  (selectedLocation === 'Borno' && (page.id === 351 || page.id === 352)) ||
                  (selectedLocation === 'Cross River' && (page.id === 401 || page.id === 402)) ||
                  (selectedLocation === 'Delta' && (page.id === 451 || page.id === 452)) ||
                  (selectedLocation === 'Ebonyi' && (page.id === 501 || page.id === 502)) ||
                  (selectedLocation === 'Edo' && (page.id === 551 || page.id === 552)) ||
                  (selectedLocation === 'Ekiti' && (page.id === 601 || page.id === 602)) ||
                  (selectedLocation === 'Enugu' && (page.id === 651 || page.id === 652)) ||
                  (selectedLocation === 'Gombe' && (page.id === 751 || page.id === 752)) ||
                  (selectedLocation === 'Imo' && (page.id === 801 || page.id === 802)) ||
                  (selectedLocation === 'Jigawa' && (page.id === 851 || page.id === 852)) ||
                  (selectedLocation === 'Kaduna' && (page.id === 901 || page.id === 902)) ||
                  (selectedLocation === 'Kano' && (page.id === 951 || page.id === 952)) ||
                  (selectedLocation === 'Katsina' && (page.id === 1001 || page.id === 1002)) ||
                  (selectedLocation === 'Kebbi' && (page.id === 1051 || page.id === 1052)) ||
                  (selectedLocation === 'Kogi' && (page.id === 1101 || page.id === 1102)) ||
                  (selectedLocation === 'Kwara' && (page.id === 1151 || page.id === 1152)) ||
                  (selectedLocation === 'Lagos' && (page.id === 1201 || page.id === 1202)) ||
                  (selectedLocation === 'Nasarawa' && (page.id === 1251 || page.id === 1252)) ||
                  (selectedLocation === 'Niger' && (page.id === 1301 || page.id === 1302)) ||
                  (selectedLocation === 'Ogun' && (page.id === 1351 || page.id === 1352)) ||
                  (selectedLocation === 'Ondo' && (page.id === 1401 || page.id === 1402)) ||
                  (selectedLocation === 'Osun' && (page.id === 1451 || page.id === 1452)) ||
                  (selectedLocation === 'Oyo' && (page.id === 1501 || page.id === 1502)) ||
                  (selectedLocation === 'Plateau' && (page.id === 1551 || page.id === 1552)) ||
                  (selectedLocation === 'Rivers' && (page.id === 1601 || page.id === 1602)) ||
                  (selectedLocation === 'Sokoto' && (page.id === 1651 || page.id === 1652)) ||
                  (selectedLocation === 'Taraba' && (page.id === 1701 || page.id === 1702)) ||
                  (selectedLocation === 'Yobe' && (page.id === 1751 || page.id === 1752)) ||
                  (selectedLocation === 'Zamfara' && (page.id === 1801 || page.id === 182))
                ) {
                  return (
                    <Component
                      key={page.id}
                      page={page}
                      source={{ uri: page.imageUrl }}
                      phoneNumber={getPhoneNumber(page.id)}
                      location={page.text3}
                      navigate='Back'
                      margin={5}
                    />
                  );
                }
                return null;
              })}
            </View>
          )}
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 53 || page.id === 54)) ||
                (selectedLocation === 'Abuja' && (page.id === 1853 || page.id === 1854)) ||
                (selectedLocation === 'Adamawa' && (page.id === 103 || page.id === 104)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 3 || page.id === 4)) ||
                (selectedLocation === 'Anambra' && (page.id === 153 || page.id === 154)) ||
                (selectedLocation === 'Bauchi' && (page.id === 203 || page.id === 204)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 253 || page.id === 254)) ||
                (selectedLocation === 'Benue' && (page.id === 303 || page.id === 304)) ||
                (selectedLocation === 'Borno' && (page.id === 353 || page.id === 354)) ||
                (selectedLocation === 'Cross River' && (page.id === 403 || page.id === 404)) ||
                (selectedLocation === 'Delta' && (page.id === 453 || page.id === 454)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 503 || page.id === 504)) ||
                (selectedLocation === 'Edo' && (page.id === 553 || page.id === 554)) ||
                (selectedLocation === 'Ekiti' && (page.id === 603 || page.id === 604)) ||
                (selectedLocation === 'Enugu' && (page.id === 653 || page.id === 654)) ||
                (selectedLocation === 'Gombe' && (page.id === 753 || page.id === 754)) ||
                (selectedLocation === 'Imo' && (page.id === 803 || page.id === 804)) ||
                (selectedLocation === 'Jigawa' && (page.id === 853 || page.id === 854)) ||
                (selectedLocation === 'Kaduna' && (page.id === 903 || page.id === 904)) ||
                (selectedLocation === 'Kano' && (page.id === 953 || page.id === 954)) ||
                (selectedLocation === 'Katsina' && (page.id === 1003 || page.id === 1004)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1053 || page.id === 1054)) ||
                (selectedLocation === 'Kogi' && (page.id === 1103 || page.id === 1104)) ||
                (selectedLocation === 'Kwara' && (page.id === 1153 || page.id === 1154)) ||
                (selectedLocation === 'Lagos' && (page.id === 1203 || page.id === 1204)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1253 || page.id === 1254)) ||
                (selectedLocation === 'Niger' && (page.id === 1303 || page.id === 1304)) ||
                (selectedLocation === 'Ogun' && (page.id === 1353 || page.id === 1354)) ||
                (selectedLocation === 'Ondo' && (page.id === 1403 || page.id === 1404)) ||
                (selectedLocation === 'Osun' && (page.id === 1453 || page.id === 1454)) ||
                (selectedLocation === 'Oyo' && (page.id === 1503 || page.id === 1504)) ||
                (selectedLocation === 'Plateau' && (page.id === 1553 || page.id === 1554)) ||
                (selectedLocation === 'Rivers' && (page.id === 1603 || page.id === 1604)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1653 || page.id === 1654)) ||
                (selectedLocation === 'Taraba' && (page.id === 1703 || page.id === 1704)) ||
                (selectedLocation === 'Yobe' && (page.id === 1753 || page.id === 1754)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1803 || page.id === 1804))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 55 || page.id === 56)) ||
                (selectedLocation === 'Abuja' && (page.id === 1855 || page.id === 1856)) ||
                (selectedLocation === 'Adamawa' && (page.id === 105 || page.id === 106)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 5 || page.id === 6)) ||
                (selectedLocation === 'Anambra' && (page.id === 155 || page.id === 156)) ||
                (selectedLocation === 'Bauchi' && (page.id === 205 || page.id === 206)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 255 || page.id === 256)) ||
                (selectedLocation === 'Benue' && (page.id === 305 || page.id === 306)) ||
                (selectedLocation === 'Borno' && (page.id === 355 || page.id === 356)) ||
                (selectedLocation === 'Cross River' && (page.id === 405 || page.id === 406)) ||
                (selectedLocation === 'Delta' && (page.id === 455 || page.id === 456)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 505 || page.id === 506)) ||
                (selectedLocation === 'Edo' && (page.id === 555 || page.id === 556)) ||
                (selectedLocation === 'Ekiti' && (page.id === 605 || page.id === 606)) ||
                (selectedLocation === 'Enugu' && (page.id === 655 || page.id === 656)) ||
                (selectedLocation === 'Gombe' && (page.id === 755 || page.id === 756)) ||
                (selectedLocation === 'Imo' && (page.id === 805 || page.id === 806)) ||
                (selectedLocation === 'Jigawa' && (page.id === 855 || page.id === 856)) ||
                (selectedLocation === 'Kaduna' && (page.id === 905 || page.id === 906)) ||
                (selectedLocation === 'Kano' && (page.id === 955 || page.id === 956)) ||
                (selectedLocation === 'Katsina' && (page.id === 1005 || page.id === 1006)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1055 || page.id === 1056)) ||
                (selectedLocation === 'Kogi' && (page.id === 1105 || page.id === 1106)) ||
                (selectedLocation === 'Kwara' && (page.id === 1155 || page.id === 1156)) ||
                (selectedLocation === 'Lagos' && (page.id === 1205 || page.id === 1206)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1255 || page.id === 1256)) ||
                (selectedLocation === 'Niger' && (page.id === 1305 || page.id === 1306)) ||
                (selectedLocation === 'Ogun' && (page.id === 1355 || page.id === 1356)) ||
                (selectedLocation === 'Ondo' && (page.id === 1405 || page.id === 1406)) ||
                (selectedLocation === 'Osun' && (page.id === 1455 || page.id === 1456)) ||
                (selectedLocation === 'Oyo' && (page.id === 1505 || page.id === 1506)) ||
                (selectedLocation === 'Plateau' && (page.id === 1555 || page.id === 1556)) ||
                (selectedLocation === 'Rivers' && (page.id === 1605 || page.id === 1606)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1655 || page.id === 1656)) ||
                (selectedLocation === 'Taraba' && (page.id === 1705 || page.id === 1706)) ||
                (selectedLocation === 'Yobe' && (page.id === 1755 || page.id === 1756)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1805 || page.id === 1806))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 57 || page.id === 58)) ||
                (selectedLocation === 'Abuja' && (page.id === 1857 || page.id === 1858)) ||
                (selectedLocation === 'Adamawa' && (page.id === 107 || page.id === 108)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 7 || page.id === 8)) ||
                (selectedLocation === 'Anambra' && (page.id === 157 || page.id === 158)) ||
                (selectedLocation === 'Bauchi' && (page.id === 207 || page.id === 208)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 257 || page.id === 258)) ||
                (selectedLocation === 'Benue' && (page.id === 307 || page.id === 308)) ||
                (selectedLocation === 'Borno' && (page.id === 357 || page.id === 358)) ||
                (selectedLocation === 'Cross River' && (page.id === 407 || page.id === 408)) ||
                (selectedLocation === 'Delta' && (page.id === 457 || page.id === 458)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 507 || page.id === 508)) ||
                (selectedLocation === 'Edo' && (page.id === 557 || page.id === 558)) ||
                (selectedLocation === 'Ekiti' && (page.id === 607 || page.id === 608)) ||
                (selectedLocation === 'Enugu' && (page.id === 657 || page.id === 658)) ||
                (selectedLocation === 'Gombe' && (page.id === 757 || page.id === 758)) ||
                (selectedLocation === 'Imo' && (page.id === 807 || page.id === 808)) ||
                (selectedLocation === 'Jigawa' && (page.id === 857 || page.id === 858)) ||
                (selectedLocation === 'Kaduna' && (page.id === 907 || page.id === 908)) ||
                (selectedLocation === 'Kano' && (page.id === 957 || page.id === 958)) ||
                (selectedLocation === 'Katsina' && (page.id === 1007 || page.id === 1008)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1057 || page.id === 1058)) ||
                (selectedLocation === 'Kogi' && (page.id === 1107 || page.id === 1108)) ||
                (selectedLocation === 'Kwara' && (page.id === 1157 || page.id === 1158)) ||
                (selectedLocation === 'Lagos' && (page.id === 1207 || page.id === 1208)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1257 || page.id === 1258)) ||
                (selectedLocation === 'Niger' && (page.id === 1307 || page.id === 1308)) ||
                (selectedLocation === 'Ogun' && (page.id === 1357 || page.id === 1358)) ||
                (selectedLocation === 'Ondo' && (page.id === 1407 || page.id === 1408)) ||
                (selectedLocation === 'Osun' && (page.id === 1457 || page.id === 1458)) ||
                (selectedLocation === 'Oyo' && (page.id === 1507 || page.id === 1508)) ||
                (selectedLocation === 'Plateau' && (page.id === 1557 || page.id === 1558)) ||
                (selectedLocation === 'Rivers' && (page.id === 1607 || page.id === 1608)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1657 || page.id === 1658)) ||
                (selectedLocation === 'Taraba' && (page.id === 1707 || page.id === 1708)) ||
                (selectedLocation === 'Yobe' && (page.id === 1757 || page.id === 1758)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1807 || page.id === 1808))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 59 || page.id === 60)) ||
                (selectedLocation === 'Abuja' && (page.id === 1859 || page.id === 1860)) ||
                (selectedLocation === 'Adamawa' && (page.id === 109 || page.id === 110)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 9 || page.id === 10)) ||
                (selectedLocation === 'Anambra' && (page.id === 159 || page.id === 160)) ||
                (selectedLocation === 'Bauchi' && (page.id === 209 || page.id === 210)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 259 || page.id === 260)) ||
                (selectedLocation === 'Benue' && (page.id === 309 || page.id === 310)) ||
                (selectedLocation === 'Borno' && (page.id === 359 || page.id === 360)) ||
                (selectedLocation === 'Cross River' && (page.id === 409 || page.id === 410)) ||
                (selectedLocation === 'Delta' && (page.id === 459 || page.id === 460)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 509 || page.id === 510)) ||
                (selectedLocation === 'Edo' && (page.id === 559 || page.id === 560)) ||
                (selectedLocation === 'Ekiti' && (page.id === 609 || page.id === 610)) ||
                (selectedLocation === 'Enugu' && (page.id === 659 || page.id === 660)) ||
                (selectedLocation === 'Gombe' && (page.id === 759 || page.id === 760)) ||
                (selectedLocation === 'Imo' && (page.id === 809 || page.id === 810)) ||
                (selectedLocation === 'Jigawa' && (page.id === 859 || page.id === 860)) ||
                (selectedLocation === 'Kaduna' && (page.id === 909 || page.id === 910)) ||
                (selectedLocation === 'Kano' && (page.id === 959 || page.id === 960)) ||
                (selectedLocation === 'Katsina' && (page.id === 1009 || page.id === 1010)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1059 || page.id === 1060)) ||
                (selectedLocation === 'Kogi' && (page.id === 1109 || page.id === 1110)) ||
                (selectedLocation === 'Kwara' && (page.id === 1159 || page.id === 1160)) ||
                (selectedLocation === 'Lagos' && (page.id === 1209 || page.id === 1210)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1259 || page.id === 1260)) ||
                (selectedLocation === 'Niger' && (page.id === 1309 || page.id === 1310)) ||
                (selectedLocation === 'Ogun' && (page.id === 1359 || page.id === 1360)) ||
                (selectedLocation === 'Ondo' && (page.id === 1409 || page.id === 1410)) ||
                (selectedLocation === 'Osun' && (page.id === 1459 || page.id === 1460)) ||
                (selectedLocation === 'Oyo' && (page.id === 1509 || page.id === 1510)) ||
                (selectedLocation === 'Plateau' && (page.id === 1559 || page.id === 1560)) ||
                (selectedLocation === 'Rivers' && (page.id === 1609 || page.id === 1610)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1659 || page.id === 1660)) ||
                (selectedLocation === 'Taraba' && (page.id === 1709 || page.id === 1710)) ||
                (selectedLocation === 'Yobe' && (page.id === 1759 || page.id === 1760)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1809 || page.id === 1810))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 61 || page.id === 62)) ||
                (selectedLocation === 'Abuja' && (page.id === 1861 || page.id === 1862)) ||
                (selectedLocation === 'Adamawa' && (page.id === 111 || page.id === 112)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 11 || page.id === 12)) ||
                (selectedLocation === 'Anambra' && (page.id === 161 || page.id === 162)) ||
                (selectedLocation === 'Bauchi' && (page.id === 211 || page.id === 212)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 261 || page.id === 262)) ||
                (selectedLocation === 'Benue' && (page.id === 311 || page.id === 312)) ||
                (selectedLocation === 'Borno' && (page.id === 361 || page.id === 362)) ||
                (selectedLocation === 'Cross River' && (page.id === 411 || page.id === 412)) ||
                (selectedLocation === 'Delta' && (page.id === 461 || page.id === 462)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 511 || page.id === 512)) ||
                (selectedLocation === 'Edo' && (page.id === 561 || page.id === 562)) ||
                (selectedLocation === 'Ekiti' && (page.id === 611 || page.id === 612)) ||
                (selectedLocation === 'Enugu' && (page.id === 661 || page.id === 662)) ||
                (selectedLocation === 'Gombe' && (page.id === 761 || page.id === 762)) ||
                (selectedLocation === 'Imo' && (page.id === 811 || page.id === 812)) ||
                (selectedLocation === 'Jigawa' && (page.id === 861 || page.id === 862)) ||
                (selectedLocation === 'Kaduna' && (page.id === 911 || page.id === 912)) ||
                (selectedLocation === 'Kano' && (page.id === 961 || page.id === 962)) ||
                (selectedLocation === 'Katsina' && (page.id === 1011 || page.id === 1012)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1061 || page.id === 1062)) ||
                (selectedLocation === 'Kogi' && (page.id === 1111 || page.id === 1112)) ||
                (selectedLocation === 'Kwara' && (page.id === 1161 || page.id === 1162)) ||
                (selectedLocation === 'Lagos' && (page.id === 1211 || page.id === 1212)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1261 || page.id === 1262)) ||
                (selectedLocation === 'Niger' && (page.id === 1311 || page.id === 1312)) ||
                (selectedLocation === 'Ogun' && (page.id === 1361 || page.id === 1362)) ||
                (selectedLocation === 'Ondo' && (page.id === 1411 || page.id === 1412)) ||
                (selectedLocation === 'Osun' && (page.id === 1461 || page.id === 1462)) ||
                (selectedLocation === 'Oyo' && (page.id === 1511 || page.id === 1512)) ||
                (selectedLocation === 'Plateau' && (page.id === 1561 || page.id === 1562)) ||
                (selectedLocation === 'Rivers' && (page.id === 1611 || page.id === 1612)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1661 || page.id === 1662)) ||
                (selectedLocation === 'Taraba' && (page.id === 1711 || page.id === 1712)) ||
                (selectedLocation === 'Yobe' && (page.id === 1761 || page.id === 1762)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1811 || page.id === 1812))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 63 || page.id === 64)) ||
                (selectedLocation === 'Abuja' && (page.id === 1863 || page.id === 1864)) ||
                (selectedLocation === 'Adamawa' && (page.id === 113 || page.id === 114)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 13 || page.id === 14)) ||
                (selectedLocation === 'Anambra' && (page.id === 163 || page.id === 164)) ||
                (selectedLocation === 'Bauchi' && (page.id === 213 || page.id === 214)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 263 || page.id === 264)) ||
                (selectedLocation === 'Benue' && (page.id === 313 || page.id === 314)) ||
                (selectedLocation === 'Borno' && (page.id === 363 || page.id === 364)) ||
                (selectedLocation === 'Cross River' && (page.id === 413 || page.id === 414)) ||
                (selectedLocation === 'Delta' && (page.id === 463 || page.id === 464)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 513 || page.id === 514)) ||
                (selectedLocation === 'Edo' && (page.id === 563 || page.id === 564)) ||
                (selectedLocation === 'Ekiti' && (page.id === 613 || page.id === 614)) ||
                (selectedLocation === 'Enugu' && (page.id === 663 || page.id === 664)) ||
                (selectedLocation === 'Gombe' && (page.id === 763 || page.id === 764)) ||
                (selectedLocation === 'Imo' && (page.id === 813 || page.id === 814)) ||
                (selectedLocation === 'Jigawa' && (page.id === 863 || page.id === 864)) ||
                (selectedLocation === 'Kaduna' && (page.id === 913 || page.id === 914)) ||
                (selectedLocation === 'Kano' && (page.id === 963 || page.id === 964)) ||
                (selectedLocation === 'Katsina' && (page.id === 1013 || page.id === 1014)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1063 || page.id === 1064)) ||
                (selectedLocation === 'Kogi' && (page.id === 1113 || page.id === 1114)) ||
                (selectedLocation === 'Kwara' && (page.id === 1163 || page.id === 1164)) ||
                (selectedLocation === 'Lagos' && (page.id === 1213 || page.id === 1214)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1263 || page.id === 1264)) ||
                (selectedLocation === 'Niger' && (page.id === 1313 || page.id === 1314)) ||
                (selectedLocation === 'Ogun' && (page.id === 1363 || page.id === 1364)) ||
                (selectedLocation === 'Ondo' && (page.id === 1413 || page.id === 1414)) ||
                (selectedLocation === 'Osun' && (page.id === 1463 || page.id === 1464)) ||
                (selectedLocation === 'Oyo' && (page.id === 1513 || page.id === 1514)) ||
                (selectedLocation === 'Plateau' && (page.id === 1563 || page.id === 1564)) ||
                (selectedLocation === 'Rivers' && (page.id === 1613 || page.id === 1614)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1663 || page.id === 1664)) ||
                (selectedLocation === 'Taraba' && (page.id === 1713 || page.id === 1714)) ||
                (selectedLocation === 'Yobe' && (page.id === 1763 || page.id === 1764)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1813 || page.id === 1814))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 65 || page.id === 66)) ||
                (selectedLocation === 'Abuja' && (page.id === 1865 || page.id === 1866)) ||
                (selectedLocation === 'Adamawa' && (page.id === 115 || page.id === 116)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 15 || page.id === 16)) ||
                (selectedLocation === 'Anambra' && (page.id === 165 || page.id === 166)) ||
                (selectedLocation === 'Bauchi' && (page.id === 215 || page.id === 216)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 265 || page.id === 266)) ||
                (selectedLocation === 'Benue' && (page.id === 315 || page.id === 316)) ||
                (selectedLocation === 'Borno' && (page.id === 365 || page.id === 366)) ||
                (selectedLocation === 'Cross River' && (page.id === 415 || page.id === 416)) ||
                (selectedLocation === 'Delta' && (page.id === 465 || page.id === 466)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 515 || page.id === 516)) ||
                (selectedLocation === 'Edo' && (page.id === 565 || page.id === 566)) ||
                (selectedLocation === 'Ekiti' && (page.id === 615 || page.id === 616)) ||
                (selectedLocation === 'Enugu' && (page.id === 665 || page.id === 666)) ||
                (selectedLocation === 'Gombe' && (page.id === 765 || page.id === 766)) ||
                (selectedLocation === 'Imo' && (page.id === 815 || page.id === 816)) ||
                (selectedLocation === 'Jigawa' && (page.id === 865 || page.id === 866)) ||
                (selectedLocation === 'Kaduna' && (page.id === 915 || page.id === 916)) ||
                (selectedLocation === 'Kano' && (page.id === 965 || page.id === 966)) ||
                (selectedLocation === 'Katsina' && (page.id === 1015 || page.id === 1016)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1065 || page.id === 1066)) ||
                (selectedLocation === 'Kogi' && (page.id === 1115 || page.id === 1116)) ||
                (selectedLocation === 'Kwara' && (page.id === 1165 || page.id === 1166)) ||
                (selectedLocation === 'Lagos' && (page.id === 1215 || page.id === 1216)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1265 || page.id === 1266)) ||
                (selectedLocation === 'Niger' && (page.id === 1315 || page.id === 1316)) ||
                (selectedLocation === 'Ogun' && (page.id === 1365 || page.id === 1366)) ||
                (selectedLocation === 'Ondo' && (page.id === 1415 || page.id === 1416)) ||
                (selectedLocation === 'Osun' && (page.id === 1465 || page.id === 1466)) ||
                (selectedLocation === 'Oyo' && (page.id === 1515 || page.id === 1516)) ||
                (selectedLocation === 'Plateau' && (page.id === 1565 || page.id === 1566)) ||
                (selectedLocation === 'Rivers' && (page.id === 1615 || page.id === 1616)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1665 || page.id === 1666)) ||
                (selectedLocation === 'Taraba' && (page.id === 1715 || page.id === 1716)) ||
                (selectedLocation === 'Yobe' && (page.id === 1765 || page.id === 1766)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1815 || page.id === 1816))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 67 || page.id === 68)) ||
                (selectedLocation === 'Abuja' && (page.id === 1867 || page.id === 1868)) ||
                (selectedLocation === 'Adamawa' && (page.id === 117 || page.id === 118)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 17 || page.id === 18)) ||
                (selectedLocation === 'Anambra' && (page.id === 167 || page.id === 168)) ||
                (selectedLocation === 'Bauchi' && (page.id === 217 || page.id === 218)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 267 || page.id === 268)) ||
                (selectedLocation === 'Benue' && (page.id === 317 || page.id === 318)) ||
                (selectedLocation === 'Borno' && (page.id === 367 || page.id === 368)) ||
                (selectedLocation === 'Cross River' && (page.id === 417 || page.id === 418)) ||
                (selectedLocation === 'Delta' && (page.id === 467 || page.id === 468)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 517 || page.id === 518)) ||
                (selectedLocation === 'Edo' && (page.id === 567 || page.id === 568)) ||
                (selectedLocation === 'Ekiti' && (page.id === 617 || page.id === 618)) ||
                (selectedLocation === 'Enugu' && (page.id === 667 || page.id === 668)) ||
                (selectedLocation === 'Gombe' && (page.id === 767 || page.id === 768)) ||
                (selectedLocation === 'Imo' && (page.id === 817 || page.id === 818)) ||
                (selectedLocation === 'Jigawa' && (page.id === 867 || page.id === 868)) ||
                (selectedLocation === 'Kaduna' && (page.id === 917 || page.id === 918)) ||
                (selectedLocation === 'Kano' && (page.id === 967 || page.id === 968)) ||
                (selectedLocation === 'Katsina' && (page.id === 1017 || page.id === 1018)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1067 || page.id === 1068)) ||
                (selectedLocation === 'Kogi' && (page.id === 1117 || page.id === 1118)) ||
                (selectedLocation === 'Kwara' && (page.id === 1167 || page.id === 1168)) ||
                (selectedLocation === 'Lagos' && (page.id === 1217 || page.id === 1218)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1267 || page.id === 1268)) ||
                (selectedLocation === 'Niger' && (page.id === 1317 || page.id === 1318)) ||
                (selectedLocation === 'Ogun' && (page.id === 1367 || page.id === 1368)) ||
                (selectedLocation === 'Ondo' && (page.id === 1417 || page.id === 1418)) ||
                (selectedLocation === 'Osun' && (page.id === 1467 || page.id === 1468)) ||
                (selectedLocation === 'Oyo' && (page.id === 1517 || page.id === 1518)) ||
                (selectedLocation === 'Plateau' && (page.id === 1567 || page.id === 1568)) ||
                (selectedLocation === 'Rivers' && (page.id === 1617 || page.id === 1618)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1667 || page.id === 1668)) ||
                (selectedLocation === 'Taraba' && (page.id === 1717 || page.id === 1718)) ||
                (selectedLocation === 'Yobe' && (page.id === 1767 || page.id === 1768)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1817 || page.id === 1818))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 69 || page.id === 70)) ||
                (selectedLocation === 'Abuja' && (page.id === 1869 || page.id === 1870)) ||
                (selectedLocation === 'Adamawa' && (page.id === 119 || page.id === 120)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 19 || page.id === 20)) ||
                (selectedLocation === 'Anambra' && (page.id === 169 || page.id === 170)) ||
                (selectedLocation === 'Bauchi' && (page.id === 219 || page.id === 220)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 269 || page.id === 270)) ||
                (selectedLocation === 'Benue' && (page.id === 319 || page.id === 320)) ||
                (selectedLocation === 'Borno' && (page.id === 369 || page.id === 370)) ||
                (selectedLocation === 'Cross River' && (page.id === 419 || page.id === 420)) ||
                (selectedLocation === 'Delta' && (page.id === 469 || page.id === 470)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 519 || page.id === 520)) ||
                (selectedLocation === 'Edo' && (page.id === 569 || page.id === 570)) ||
                (selectedLocation === 'Ekiti' && (page.id === 619 || page.id === 620)) ||
                (selectedLocation === 'Enugu' && (page.id === 669 || page.id === 670)) ||
                (selectedLocation === 'Gombe' && (page.id === 769 || page.id === 770)) ||
                (selectedLocation === 'Imo' && (page.id === 819 || page.id === 820)) ||
                (selectedLocation === 'Jigawa' && (page.id === 869 || page.id === 870)) ||
                (selectedLocation === 'Kaduna' && (page.id === 919 || page.id === 920)) ||
                (selectedLocation === 'Kano' && (page.id === 969 || page.id === 970)) ||
                (selectedLocation === 'Katsina' && (page.id === 1019 || page.id === 1020)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1069 || page.id === 1070)) ||
                (selectedLocation === 'Kogi' && (page.id === 1119 || page.id === 1120)) ||
                (selectedLocation === 'Kwara' && (page.id === 1169 || page.id === 1170)) ||
                (selectedLocation === 'Lagos' && (page.id === 1219 || page.id === 1220)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1269 || page.id === 1270)) ||
                (selectedLocation === 'Niger' && (page.id === 1319 || page.id === 1320)) ||
                (selectedLocation === 'Ogun' && (page.id === 1369 || page.id === 1370)) ||
                (selectedLocation === 'Ondo' && (page.id === 1419 || page.id === 1420))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 71 || page.id === 72)) ||
                (selectedLocation === 'Abuja' && (page.id === 1871 || page.id === 1872)) ||
                (selectedLocation === 'Adamawa' && (page.id === 121 || page.id === 122)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 21 || page.id === 22)) ||
                (selectedLocation === 'Anambra' && (page.id === 171 || page.id === 172)) ||
                (selectedLocation === 'Bauchi' && (page.id === 221 || page.id === 222)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 271 || page.id === 272)) ||
                (selectedLocation === 'Benue' && (page.id === 321 || page.id === 322)) ||
                (selectedLocation === 'Borno' && (page.id === 371 || page.id === 372)) ||
                (selectedLocation === 'Cross River' && (page.id === 421 || page.id === 422)) ||
                (selectedLocation === 'Delta' && (page.id === 471 || page.id === 472)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 521 || page.id === 522)) ||
                (selectedLocation === 'Edo' && (page.id === 571 || page.id === 572)) ||
                (selectedLocation === 'Ekiti' && (page.id === 621 || page.id === 622)) ||
                (selectedLocation === 'Enugu' && (page.id === 671 || page.id === 672)) ||
                (selectedLocation === 'Gombe' && (page.id === 771 || page.id === 772)) ||
                (selectedLocation === 'Imo' && (page.id === 821 || page.id === 822)) ||
                (selectedLocation === 'Jigawa' && (page.id === 871 || page.id === 872)) ||
                (selectedLocation === 'Kaduna' && (page.id === 921 || page.id === 922)) ||
                (selectedLocation === 'Kano' && (page.id === 971 || page.id === 972)) ||
                (selectedLocation === 'Katsina' && (page.id === 1021 || page.id === 1022)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1071 || page.id === 1072)) ||
                (selectedLocation === 'Kogi' && (page.id === 1121 || page.id === 1122)) ||
                (selectedLocation === 'Kwara' && (page.id === 1171 || page.id === 1172)) ||
                (selectedLocation === 'Lagos' && (page.id === 1221 || page.id === 1222)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1271 || page.id === 1272)) ||
                (selectedLocation === 'Niger' && (page.id === 1321 || page.id === 1322)) ||
                (selectedLocation === 'Ogun' && (page.id === 1371 || page.id === 1372)) ||
                (selectedLocation === 'Ondo' && (page.id === 1421 || page.id === 1422)) ||
                (selectedLocation === 'Osun' && (page.id === 1471 || page.id === 1472)) ||
                (selectedLocation === 'Oyo' && (page.id === 1521 || page.id === 1522)) ||
                (selectedLocation === 'Plateau' && (page.id === 1571 || page.id === 1572)) ||
                (selectedLocation === 'Rivers' && (page.id === 1621 || page.id === 1622)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1671 || page.id === 1672)) ||
                (selectedLocation === 'Taraba' && (page.id === 1721 || page.id === 1722)) ||
                (selectedLocation === 'Yobe' && (page.id === 1771 || page.id === 1772)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1821 || page.id === 1822))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 73 || page.id === 74)) ||
                (selectedLocation === 'Abuja' && (page.id === 1873 || page.id === 1874)) ||
                (selectedLocation === 'Adamawa' && (page.id === 123 || page.id === 124)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 23 || page.id === 24)) ||
                (selectedLocation === 'Anambra' && (page.id === 173 || page.id === 174)) ||
                (selectedLocation === 'Bauchi' && (page.id === 223 || page.id === 224)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 273 || page.id === 274)) ||
                (selectedLocation === 'Benue' && (page.id === 323 || page.id === 324)) ||
                (selectedLocation === 'Borno' && (page.id === 373 || page.id === 374)) ||
                (selectedLocation === 'Cross River' && (page.id === 423 || page.id === 424)) ||
                (selectedLocation === 'Delta' && (page.id === 473 || page.id === 474)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 523 || page.id === 524)) ||
                (selectedLocation === 'Edo' && (page.id === 573 || page.id === 574)) ||
                (selectedLocation === 'Ekiti' && (page.id === 623 || page.id === 624)) ||
                (selectedLocation === 'Enugu' && (page.id === 673 || page.id === 674)) ||
                (selectedLocation === 'Gombe' && (page.id === 773 || page.id === 774)) ||
                (selectedLocation === 'Imo' && (page.id === 823 || page.id === 824)) ||
                (selectedLocation === 'Jigawa' && (page.id === 873 || page.id === 874)) ||
                (selectedLocation === 'Kaduna' && (page.id === 923 || page.id === 924)) ||
                (selectedLocation === 'Kano' && (page.id === 973 || page.id === 974)) ||
                (selectedLocation === 'Katsina' && (page.id === 1023 || page.id === 1024)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1073 || page.id === 1074)) ||
                (selectedLocation === 'Kogi' && (page.id === 1123 || page.id === 1124)) ||
                (selectedLocation === 'Kwara' && (page.id === 1173 || page.id === 1174)) ||
                (selectedLocation === 'Lagos' && (page.id === 1223 || page.id === 1224)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1273 || page.id === 1274)) ||
                (selectedLocation === 'Niger' && (page.id === 1323 || page.id === 1324)) ||
                (selectedLocation === 'Ogun' && (page.id === 1373 || page.id === 1374)) ||
                (selectedLocation === 'Ondo' && (page.id === 1423 || page.id === 1424)) ||
                (selectedLocation === 'Osun' && (page.id === 1473 || page.id === 1474)) ||
                (selectedLocation === 'Oyo' && (page.id === 1523 || page.id === 1524)) ||
                (selectedLocation === 'Plateau' && (page.id === 1573 || page.id === 1574)) ||
                (selectedLocation === 'Rivers' && (page.id === 1623 || page.id === 1624)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1673 || page.id === 1674)) ||
                (selectedLocation === 'Taraba' && (page.id === 1723 || page.id === 1724)) ||
                (selectedLocation === 'Yobe' && (page.id === 1773 || page.id === 1774)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1823 || page.id === 1824))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 75 || page.id === 76)) ||
                (selectedLocation === 'Abuja' && (page.id === 1875 || page.id === 1876)) ||
                (selectedLocation === 'Adamawa' && (page.id === 125 || page.id === 126)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 25 || page.id === 26)) ||
                (selectedLocation === 'Anambra' && (page.id === 175 || page.id === 176)) ||
                (selectedLocation === 'Bauchi' && (page.id === 225 || page.id === 226)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 275 || page.id === 276)) ||
                (selectedLocation === 'Benue' && (page.id === 325 || page.id === 326)) ||
                (selectedLocation === 'Borno' && (page.id === 375 || page.id === 376)) ||
                (selectedLocation === 'Cross River' && (page.id === 425 || page.id === 426)) ||
                (selectedLocation === 'Delta' && (page.id === 475 || page.id === 476)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 525 || page.id === 526)) ||
                (selectedLocation === 'Edo' && (page.id === 575 || page.id === 576)) ||
                (selectedLocation === 'Ekiti' && (page.id === 625 || page.id === 626)) ||
                (selectedLocation === 'Enugu' && (page.id === 675 || page.id === 676)) ||
                (selectedLocation === 'Gombe' && (page.id === 775 || page.id === 776)) ||
                (selectedLocation === 'Imo' && (page.id === 825 || page.id === 826)) ||
                (selectedLocation === 'Jigawa' && (page.id === 875 || page.id === 876)) ||
                (selectedLocation === 'Kaduna' && (page.id === 925 || page.id === 926)) ||
                (selectedLocation === 'Kano' && (page.id === 975 || page.id === 976)) ||
                (selectedLocation === 'Katsina' && (page.id === 1025 || page.id === 1026)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1075 || page.id === 1076)) ||
                (selectedLocation === 'Kogi' && (page.id === 1125 || page.id === 1126)) ||
                (selectedLocation === 'Kwara' && (page.id === 1175 || page.id === 1176)) ||
                (selectedLocation === 'Lagos' && (page.id === 1225 || page.id === 1226)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1275 || page.id === 1276)) ||
                (selectedLocation === 'Niger' && (page.id === 1325 || page.id === 1326)) ||
                (selectedLocation === 'Ogun' && (page.id === 1375 || page.id === 1376)) ||
                (selectedLocation === 'Ondo' && (page.id === 1425 || page.id === 1426)) ||
                (selectedLocation === 'Osun' && (page.id === 1475 || page.id === 1476)) ||
                (selectedLocation === 'Oyo' && (page.id === 1525 || page.id === 1526)) ||
                (selectedLocation === 'Plateau' && (page.id === 1575 || page.id === 1576)) ||
                (selectedLocation === 'Rivers' && (page.id === 1625 || page.id === 1626)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1675 || page.id === 1676)) ||
                (selectedLocation === 'Taraba' && (page.id === 1725 || page.id === 1726)) ||
                (selectedLocation === 'Yobe' && (page.id === 1775 || page.id === 1776)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1825 || page.id === 1826))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 77 || page.id === 78)) ||
                (selectedLocation === 'Abuja' && (page.id === 1877 || page.id === 1878)) ||
                (selectedLocation === 'Adamawa' && (page.id === 127 || page.id === 128)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 27 || page.id === 28)) ||
                (selectedLocation === 'Anambra' && (page.id === 177 || page.id === 178)) ||
                (selectedLocation === 'Bauchi' && (page.id === 227 || page.id === 228)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 277 || page.id === 278)) ||
                (selectedLocation === 'Benue' && (page.id === 327 || page.id === 328)) ||
                (selectedLocation === 'Borno' && (page.id === 377 || page.id === 378)) ||
                (selectedLocation === 'Cross River' && (page.id === 427 || page.id === 428)) ||
                (selectedLocation === 'Delta' && (page.id === 477 || page.id === 478)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 527 || page.id === 528)) ||
                (selectedLocation === 'Edo' && (page.id === 577 || page.id === 578)) ||
                (selectedLocation === 'Ekiti' && (page.id === 627 || page.id === 628)) ||
                (selectedLocation === 'Enugu' && (page.id === 677 || page.id === 678)) ||
                (selectedLocation === 'Gombe' && (page.id === 777 || page.id === 778)) ||
                (selectedLocation === 'Imo' && (page.id === 827 || page.id === 828)) ||
                (selectedLocation === 'Jigawa' && (page.id === 877 || page.id === 878)) ||
                (selectedLocation === 'Kaduna' && (page.id === 927 || page.id === 928)) ||
                (selectedLocation === 'Kano' && (page.id === 977 || page.id === 978)) ||
                (selectedLocation === 'Katsina' && (page.id === 1027 || page.id === 1028)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1077 || page.id === 1078)) ||
                (selectedLocation === 'Kogi' && (page.id === 1127 || page.id === 1128)) ||
                (selectedLocation === 'Kwara' && (page.id === 1177 || page.id === 1178)) ||
                (selectedLocation === 'Lagos' && (page.id === 1227 || page.id === 1228)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1277 || page.id === 1278)) ||
                (selectedLocation === 'Niger' && (page.id === 1327 || page.id === 1328)) ||
                (selectedLocation === 'Ogun' && (page.id === 1377 || page.id === 1378)) ||
                (selectedLocation === 'Ondo' && (page.id === 1427 || page.id === 1428)) ||
                (selectedLocation === 'Osun' && (page.id === 1477 || page.id === 1478)) ||
                (selectedLocation === 'Oyo' && (page.id === 1527 || page.id === 1528)) ||
                (selectedLocation === 'Plateau' && (page.id === 1577 || page.id === 1578)) ||
                (selectedLocation === 'Rivers' && (page.id === 1627 || page.id === 1628)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1677 || page.id === 1678)) ||
                (selectedLocation === 'Taraba' && (page.id === 1727 || page.id === 1728)) ||
                (selectedLocation === 'Yobe' && (page.id === 1777 || page.id === 1778)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1827 || page.id === 1828))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 79 || page.id === 80)) ||
                (selectedLocation === 'Abuja' && (page.id === 1883 || page.id === 1884)) ||
                (selectedLocation === 'Adamawa' && (page.id === 129 || page.id === 130)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 29 || page.id === 30)) ||
                (selectedLocation === 'Anambra' && (page.id === 179 || page.id === 180)) ||
                (selectedLocation === 'Bauchi' && (page.id === 229 || page.id === 230)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 279 || page.id === 280)) ||
                (selectedLocation === 'Benue' && (page.id === 329 || page.id === 330)) ||
                (selectedLocation === 'Borno' && (page.id === 379 || page.id === 380)) ||
                (selectedLocation === 'Cross River' && (page.id === 429 || page.id === 430)) ||
                (selectedLocation === 'Delta' && (page.id === 479 || page.id === 480)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 529 || page.id === 530)) ||
                (selectedLocation === 'Edo' && (page.id === 579 || page.id === 580)) ||
                (selectedLocation === 'Ekiti' && (page.id === 629 || page.id === 630)) ||
                (selectedLocation === 'Enugu' && (page.id === 679 || page.id === 680)) ||
                (selectedLocation === 'Gombe' && (page.id === 779 || page.id === 780)) ||
                (selectedLocation === 'Imo' && (page.id === 829 || page.id === 830)) ||
                (selectedLocation === 'Jigawa' && (page.id === 879 || page.id === 880)) ||
                (selectedLocation === 'Kaduna' && (page.id === 929 || page.id === 930)) ||
                (selectedLocation === 'Kano' && (page.id === 979 || page.id === 980)) ||
                (selectedLocation === 'Katsina' && (page.id === 1029 || page.id === 1030)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1079 || page.id === 1080)) ||
                (selectedLocation === 'Kogi' && (page.id === 1129 || page.id === 1130)) ||
                (selectedLocation === 'Kwara' && (page.id === 1179 || page.id === 1180)) ||
                (selectedLocation === 'Lagos' && (page.id === 1229 || page.id === 1230)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1279 || page.id === 1280)) ||
                (selectedLocation === 'Niger' && (page.id === 1329 || page.id === 1330)) ||
                (selectedLocation === 'Ogun' && (page.id === 1379 || page.id === 1380)) ||
                (selectedLocation === 'Ondo' && (page.id === 1429 || page.id === 1430)) ||
                (selectedLocation === 'Osun' && (page.id === 1479 || page.id === 1480)) ||
                (selectedLocation === 'Oyo' && (page.id === 1529 || page.id === 1530)) ||
                (selectedLocation === 'Plateau' && (page.id === 1579 || page.id === 1580)) ||
                (selectedLocation === 'Rivers' && (page.id === 1629 || page.id === 1630)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1679 || page.id === 1680)) ||
                (selectedLocation === 'Taraba' && (page.id === 1729 || page.id === 1730)) ||
                (selectedLocation === 'Yobe' && (page.id === 1779 || page.id === 1780)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1829 || page.id === 1830))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 81 || page.id === 82)) ||
                (selectedLocation === 'Abuja' && (page.id === 1885 || page.id === 1886)) ||
                (selectedLocation === 'Adamawa' && (page.id === 131 || page.id === 132)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 31 || page.id === 32)) ||
                (selectedLocation === 'Anambra' && (page.id === 181 || page.id === 182)) ||
                (selectedLocation === 'Bauchi' && (page.id === 231 || page.id === 232)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 281 || page.id === 282)) ||
                (selectedLocation === 'Benue' && (page.id === 331 || page.id === 332)) ||
                (selectedLocation === 'Borno' && (page.id === 381 || page.id === 382)) ||
                (selectedLocation === 'Cross River' && (page.id === 431 || page.id === 432)) ||
                (selectedLocation === 'Delta' && (page.id === 481 || page.id === 482)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 531 || page.id === 532)) ||
                (selectedLocation === 'Edo' && (page.id === 581 || page.id === 582)) ||
                (selectedLocation === 'Ekiti' && (page.id === 631 || page.id === 632)) ||
                (selectedLocation === 'Enugu' && (page.id === 681 || page.id === 682)) ||
                (selectedLocation === 'Gombe' && (page.id === 781 || page.id === 782)) ||
                (selectedLocation === 'Imo' && (page.id === 831 || page.id === 832)) ||
                (selectedLocation === 'Jigawa' && (page.id === 881 || page.id === 882)) ||
                (selectedLocation === 'Kaduna' && (page.id === 931 || page.id === 932)) ||
                (selectedLocation === 'Kano' && (page.id === 981 || page.id === 982)) ||
                (selectedLocation === 'Katsina' && (page.id === 1031 || page.id === 1032)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1081 || page.id === 1082)) ||
                (selectedLocation === 'Kogi' && (page.id === 1131 || page.id === 1132)) ||
                (selectedLocation === 'Kwara' && (page.id === 1181 || page.id === 1182)) ||
                (selectedLocation === 'Lagos' && (page.id === 1231 || page.id === 1232)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1281 || page.id === 1282)) ||
                (selectedLocation === 'Niger' && (page.id === 1331 || page.id === 1332)) ||
                (selectedLocation === 'Ogun' && (page.id === 1381 || page.id === 1382)) ||
                (selectedLocation === 'Ondo' && (page.id === 1431 || page.id === 1432)) ||
                (selectedLocation === 'Osun' && (page.id === 1481 || page.id === 1482)) ||
                (selectedLocation === 'Oyo' && (page.id === 1531 || page.id === 1532)) ||
                (selectedLocation === 'Plateau' && (page.id === 1581 || page.id === 1582)) ||
                (selectedLocation === 'Rivers' && (page.id === 1631 || page.id === 1632)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1681 || page.id === 1682)) ||
                (selectedLocation === 'Taraba' && (page.id === 1731 || page.id === 1732)) ||
                (selectedLocation === 'Yobe' && (page.id === 1781 || page.id === 1782)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1831 || page.id === 1832))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 83 || page.id === 84)) ||
                (selectedLocation === 'Abuja' && (page.id === 1887 || page.id === 1888)) ||
                (selectedLocation === 'Adamawa' && (page.id === 133 || page.id === 134)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 33 || page.id === 34)) ||
                (selectedLocation === 'Anambra' && (page.id === 183 || page.id === 184)) ||
                (selectedLocation === 'Bauchi' && (page.id === 233 || page.id === 234)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 283 || page.id === 284)) ||
                (selectedLocation === 'Benue' && (page.id === 333 || page.id === 334)) ||
                (selectedLocation === 'Borno' && (page.id === 383 || page.id === 384)) ||
                (selectedLocation === 'Cross River' && (page.id === 433 || page.id === 434)) ||
                (selectedLocation === 'Delta' && (page.id === 483 || page.id === 484)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 533 || page.id === 534)) ||
                (selectedLocation === 'Edo' && (page.id === 583 || page.id === 584)) ||
                (selectedLocation === 'Ekiti' && (page.id === 633 || page.id === 634)) ||
                (selectedLocation === 'Enugu' && (page.id === 683 || page.id === 684)) ||
                (selectedLocation === 'Gombe' && (page.id === 783 || page.id === 784)) ||
                (selectedLocation === 'Imo' && (page.id === 833 || page.id === 834)) ||
                (selectedLocation === 'Jigawa' && (page.id === 883 || page.id === 884)) ||
                (selectedLocation === 'Kaduna' && (page.id === 933 || page.id === 934)) ||
                (selectedLocation === 'Kano' && (page.id === 983 || page.id === 984)) ||
                (selectedLocation === 'Katsina' && (page.id === 1033 || page.id === 1034)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1083 || page.id === 1084)) ||
                (selectedLocation === 'Kogi' && (page.id === 1133 || page.id === 1134)) ||
                (selectedLocation === 'Kwara' && (page.id === 1183 || page.id === 1184)) ||
                (selectedLocation === 'Lagos' && (page.id === 1233 || page.id === 1234)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1283 || page.id === 1284)) ||
                (selectedLocation === 'Niger' && (page.id === 1333 || page.id === 1334)) ||
                (selectedLocation === 'Ogun' && (page.id === 1383 || page.id === 1384)) ||
                (selectedLocation === 'Ondo' && (page.id === 1433 || page.id === 1434)) ||
                (selectedLocation === 'Osun' && (page.id === 1483 || page.id === 1484)) ||
                (selectedLocation === 'Oyo' && (page.id === 1533 || page.id === 1534)) ||
                (selectedLocation === 'Plateau' && (page.id === 1583 || page.id === 1584)) ||
                (selectedLocation === 'Rivers' && (page.id === 1633 || page.id === 1634)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1683 || page.id === 1684)) ||
                (selectedLocation === 'Taraba' && (page.id === 1733 || page.id === 1734)) ||
                (selectedLocation === 'Yobe' && (page.id === 1783 || page.id === 1784)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1833 || page.id === 1834))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 85 || page.id === 86)) ||
                (selectedLocation === 'Abuja' && (page.id === 1889 || page.id === 1890)) ||
                (selectedLocation === 'Adamawa' && (page.id === 135 || page.id === 136)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 35 || page.id === 36)) ||
                (selectedLocation === 'Anambra' && (page.id === 185 || page.id === 186)) ||
                (selectedLocation === 'Bauchi' && (page.id === 235 || page.id === 236)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 285 || page.id === 286)) ||
                (selectedLocation === 'Benue' && (page.id === 335 || page.id === 336)) ||
                (selectedLocation === 'Borno' && (page.id === 385 || page.id === 386)) ||
                (selectedLocation === 'Cross River' && (page.id === 435 || page.id === 436)) ||
                (selectedLocation === 'Delta' && (page.id === 485 || page.id === 486)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 535 || page.id === 536)) ||
                (selectedLocation === 'Edo' && (page.id === 585 || page.id === 586)) ||
                (selectedLocation === 'Ekiti' && (page.id === 635 || page.id === 636)) ||
                (selectedLocation === 'Enugu' && (page.id === 685 || page.id === 686)) ||
                (selectedLocation === 'Gombe' && (page.id === 785 || page.id === 786)) ||
                (selectedLocation === 'Imo' && (page.id === 835 || page.id === 836)) ||
                (selectedLocation === 'Jigawa' && (page.id === 885 || page.id === 886)) ||
                (selectedLocation === 'Kaduna' && (page.id === 935 || page.id === 936)) ||
                (selectedLocation === 'Kano' && (page.id === 985 || page.id === 986)) ||
                (selectedLocation === 'Katsina' && (page.id === 1035 || page.id === 1036)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1085 || page.id === 1086)) ||
                (selectedLocation === 'Kogi' && (page.id === 1135 || page.id === 1136)) ||
                (selectedLocation === 'Kwara' && (page.id === 1185 || page.id === 1186)) ||
                (selectedLocation === 'Lagos' && (page.id === 1235 || page.id === 1236)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1285 || page.id === 1286)) ||
                (selectedLocation === 'Niger' && (page.id === 1335 || page.id === 1336)) ||
                (selectedLocation === 'Ogun' && (page.id === 1385 || page.id === 1386)) ||
                (selectedLocation === 'Ondo' && (page.id === 1435 || page.id === 1436)) ||
                (selectedLocation === 'Osun' && (page.id === 1485 || page.id === 1486)) ||
                (selectedLocation === 'Oyo' && (page.id === 1535 || page.id === 1536)) ||
                (selectedLocation === 'Plateau' && (page.id === 1585 || page.id === 1586)) ||
                (selectedLocation === 'Rivers' && (page.id === 1635 || page.id === 1636)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1685 || page.id === 1686)) ||
                (selectedLocation === 'Taraba' && (page.id === 1735 || page.id === 1736)) ||
                (selectedLocation === 'Yobe' && (page.id === 1785 || page.id === 1786)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1835 || page.id === 1836))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 87 || page.id === 88)) ||
                (selectedLocation === 'Abuja' && (page.id === 1891 || page.id === 1892)) ||
                (selectedLocation === 'Adamawa' && (page.id === 137 || page.id === 138)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 37 || page.id === 38)) ||
                (selectedLocation === 'Anambra' && (page.id === 187 || page.id === 188)) ||
                (selectedLocation === 'Bauchi' && (page.id === 237 || page.id === 238)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 287 || page.id === 288)) ||
                (selectedLocation === 'Benue' && (page.id === 337 || page.id === 338)) ||
                (selectedLocation === 'Borno' && (page.id === 387 || page.id === 388)) ||
                (selectedLocation === 'Cross River' && (page.id === 437 || page.id === 438)) ||
                (selectedLocation === 'Delta' && (page.id === 487 || page.id === 488)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 537 || page.id === 538)) ||
                (selectedLocation === 'Edo' && (page.id === 587 || page.id === 588)) ||
                (selectedLocation === 'Ekiti' && (page.id === 637 || page.id === 638)) ||
                (selectedLocation === 'Enugu' && (page.id === 687 || page.id === 688)) ||
                (selectedLocation === 'Gombe' && (page.id === 787 || page.id === 788)) ||
                (selectedLocation === 'Imo' && (page.id === 837 || page.id === 838)) ||
                (selectedLocation === 'Jigawa' && (page.id === 887 || page.id === 888)) ||
                (selectedLocation === 'Kaduna' && (page.id === 937 || page.id === 938)) ||
                (selectedLocation === 'Kano' && (page.id === 987 || page.id === 988)) ||
                (selectedLocation === 'Katsina' && (page.id === 1037 || page.id === 1038)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1087 || page.id === 1088)) ||
                (selectedLocation === 'Kogi' && (page.id === 1137 || page.id === 1138)) ||
                (selectedLocation === 'Kwara' && (page.id === 1187 || page.id === 1188)) ||
                (selectedLocation === 'Lagos' && (page.id === 1237 || page.id === 1238)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1287 || page.id === 1288)) ||
                (selectedLocation === 'Niger' && (page.id === 1337 || page.id === 1338)) ||
                (selectedLocation === 'Ogun' && (page.id === 1387 || page.id === 1388)) ||
                (selectedLocation === 'Ondo' && (page.id === 1437 || page.id === 1438)) ||
                (selectedLocation === 'Osun' && (page.id === 1487 || page.id === 1488)) ||
                (selectedLocation === 'Oyo' && (page.id === 1537 || page.id === 1538)) ||
                (selectedLocation === 'Plateau' && (page.id === 1587 || page.id === 1588)) ||
                (selectedLocation === 'Rivers' && (page.id === 1637 || page.id === 1638)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1687 || page.id === 1688)) ||
                (selectedLocation === 'Taraba' && (page.id === 1737 || page.id === 1738)) ||
                (selectedLocation === 'Yobe' && (page.id === 1787 || page.id === 1788)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1837 || page.id === 1838))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 89 || page.id === 90)) ||
                (selectedLocation === 'Abuja' && (page.id === 1893 || page.id === 1894)) ||
                (selectedLocation === 'Adamawa' && (page.id === 139 || page.id === 140)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 39 || page.id === 40)) ||
                (selectedLocation === 'Anambra' && (page.id === 189 || page.id === 190)) ||
                (selectedLocation === 'Bauchi' && (page.id === 239 || page.id === 240)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 289 || page.id === 290)) ||
                (selectedLocation === 'Benue' && (page.id === 339 || page.id === 340)) ||
                (selectedLocation === 'Borno' && (page.id === 389 || page.id === 390)) ||
                (selectedLocation === 'Cross River' && (page.id === 439 || page.id === 440)) ||
                (selectedLocation === 'Delta' && (page.id === 489 || page.id === 490)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 539 || page.id === 540)) ||
                (selectedLocation === 'Edo' && (page.id === 589 || page.id === 590)) ||
                (selectedLocation === 'Ekiti' && (page.id === 639 || page.id === 640)) ||
                (selectedLocation === 'Enugu' && (page.id === 689 || page.id === 690)) ||
                (selectedLocation === 'Gombe' && (page.id === 789 || page.id === 790)) ||
                (selectedLocation === 'Imo' && (page.id === 839 || page.id === 840)) ||
                (selectedLocation === 'Jigawa' && (page.id === 889 || page.id === 890)) ||
                (selectedLocation === 'Kaduna' && (page.id === 939 || page.id === 940)) ||
                (selectedLocation === 'Kano' && (page.id === 989 || page.id === 990)) ||
                (selectedLocation === 'Katsina' && (page.id === 1039 || page.id === 1040)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1089 || page.id === 1090)) ||
                (selectedLocation === 'Kogi' && (page.id === 1139 || page.id === 1140)) ||
                (selectedLocation === 'Kwara' && (page.id === 1189 || page.id === 1190)) ||
                (selectedLocation === 'Lagos' && (page.id === 1239 || page.id === 1240)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1289 || page.id === 1290)) ||
                (selectedLocation === 'Niger' && (page.id === 1339 || page.id === 1340)) ||
                (selectedLocation === 'Ogun' && (page.id === 1389 || page.id === 1390)) ||
                (selectedLocation === 'Ondo' && (page.id === 1439 || page.id === 1440)) ||
                (selectedLocation === 'Osun' && (page.id === 1489 || page.id === 1490)) ||
                (selectedLocation === 'Oyo' && (page.id === 1539 || page.id === 1540)) ||
                (selectedLocation === 'Plateau' && (page.id === 1589 || page.id === 1590)) ||
                (selectedLocation === 'Rivers' && (page.id === 1639 || page.id === 1640)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1689 || page.id === 1690)) ||
                (selectedLocation === 'Taraba' && (page.id === 1739 || page.id === 1740)) ||
                (selectedLocation === 'Yobe' && (page.id === 1789 || page.id === 1790)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1839 || page.id === 1840))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 91 || page.id === 92)) ||
                (selectedLocation === 'Abuja' && (page.id === 1895 || page.id === 1896)) ||
                (selectedLocation === 'Adamawa' && (page.id === 141 || page.id === 142)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 41 || page.id === 42)) ||
                (selectedLocation === 'Anambra' && (page.id === 191 || page.id === 192)) ||
                (selectedLocation === 'Bauchi' && (page.id === 241 || page.id === 242)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 291 || page.id === 292)) ||
                (selectedLocation === 'Benue' && (page.id === 341 || page.id === 342)) ||
                (selectedLocation === 'Borno' && (page.id === 391 || page.id === 392)) ||
                (selectedLocation === 'Cross River' && (page.id === 441 || page.id === 442)) ||
                (selectedLocation === 'Delta' && (page.id === 491 || page.id === 492)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 541 || page.id === 542)) ||
                (selectedLocation === 'Edo' && (page.id === 591 || page.id === 592)) ||
                (selectedLocation === 'Ekiti' && (page.id === 641 || page.id === 642)) ||
                (selectedLocation === 'Enugu' && (page.id === 691 || page.id === 692)) ||
                (selectedLocation === 'Gombe' && (page.id === 791 || page.id === 792)) ||
                (selectedLocation === 'Imo' && (page.id === 841 || page.id === 842)) ||
                (selectedLocation === 'Jigawa' && (page.id === 891 || page.id === 892)) ||
                (selectedLocation === 'Kaduna' && (page.id === 941 || page.id === 942)) ||
                (selectedLocation === 'Kano' && (page.id === 991 || page.id === 992)) ||
                (selectedLocation === 'Katsina' && (page.id === 1041 || page.id === 1042)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1091 || page.id === 1092)) ||
                (selectedLocation === 'Kogi' && (page.id === 1141 || page.id === 1142)) ||
                (selectedLocation === 'Kwara' && (page.id === 1191 || page.id === 1192)) ||
                (selectedLocation === 'Lagos' && (page.id === 1241 || page.id === 1242)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1291 || page.id === 1292)) ||
                (selectedLocation === 'Niger' && (page.id === 1341 || page.id === 1342)) ||
                (selectedLocation === 'Ogun' && (page.id === 1391 || page.id === 1392)) ||
                (selectedLocation === 'Ondo' && (page.id === 1441 || page.id === 1442)) ||
                (selectedLocation === 'Osun' && (page.id === 1491 || page.id === 1492)) ||
                (selectedLocation === 'Oyo' && (page.id === 1541 || page.id === 1542)) ||
                (selectedLocation === 'Plateau' && (page.id === 1591 || page.id === 1592)) ||
                (selectedLocation === 'Rivers' && (page.id === 1641 || page.id === 1642)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1691 || page.id === 1692)) ||
                (selectedLocation === 'Taraba' && (page.id === 1741 || page.id === 1742)) ||
                (selectedLocation === 'Yobe' && (page.id === 1791 || page.id === 1792)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1841 || page.id === 1842))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 93 || page.id === 94)) ||
                (selectedLocation === 'Abuja' && (page.id === 1897 || page.id === 1898)) ||
                (selectedLocation === 'Adamawa' && (page.id === 143 || page.id === 144)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 43 || page.id === 44)) ||
                (selectedLocation === 'Anambra' && (page.id === 193 || page.id === 194)) ||
                (selectedLocation === 'Bauchi' && (page.id === 243 || page.id === 244)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 293 || page.id === 294)) ||
                (selectedLocation === 'Benue' && (page.id === 343 || page.id === 344)) ||
                (selectedLocation === 'Borno' && (page.id === 393 || page.id === 394)) ||
                (selectedLocation === 'Cross River' && (page.id === 443 || page.id === 444)) ||
                (selectedLocation === 'Delta' && (page.id === 493 || page.id === 494)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 543 || page.id === 544)) ||
                (selectedLocation === 'Edo' && (page.id === 593 || page.id === 594)) ||
                (selectedLocation === 'Ekiti' && (page.id === 643 || page.id === 644)) ||
                (selectedLocation === 'Enugu' && (page.id === 693 || page.id === 694)) ||
                (selectedLocation === 'Gombe' && (page.id === 793 || page.id === 794)) ||
                (selectedLocation === 'Imo' && (page.id === 843 || page.id === 844)) ||
                (selectedLocation === 'Jigawa' && (page.id === 893 || page.id === 894)) ||
                (selectedLocation === 'Kaduna' && (page.id === 943 || page.id === 944)) ||
                (selectedLocation === 'Kano' && (page.id === 993 || page.id === 994)) ||
                (selectedLocation === 'Katsina' && (page.id === 1043 || page.id === 1044)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1093 || page.id === 1094)) ||
                (selectedLocation === 'Kogi' && (page.id === 1143 || page.id === 1144)) ||
                (selectedLocation === 'Kwara' && (page.id === 1193 || page.id === 1194)) ||
                (selectedLocation === 'Lagos' && (page.id === 1243 || page.id === 1244)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1293 || page.id === 1294)) ||
                (selectedLocation === 'Niger' && (page.id === 1343 || page.id === 1344)) ||
                (selectedLocation === 'Ogun' && (page.id === 1393 || page.id === 1394)) ||
                (selectedLocation === 'Ondo' && (page.id === 1443 || page.id === 1444)) ||
                (selectedLocation === 'Osun' && (page.id === 1493 || page.id === 1494)) ||
                (selectedLocation === 'Oyo' && (page.id === 1543 || page.id === 1544)) ||
                (selectedLocation === 'Plateau' && (page.id === 1593 || page.id === 1594)) ||
                (selectedLocation === 'Rivers' && (page.id === 1643 || page.id === 1644)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1693 || page.id === 1694)) ||
                (selectedLocation === 'Taraba' && (page.id === 1743 || page.id === 1744)) ||
                (selectedLocation === 'Yobe' && (page.id === 1793 || page.id === 1794)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1843 || page.id === 1844))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 95 || page.id === 96)) ||
                (selectedLocation === 'Abuja' && (page.id === 1899 || page.id === 1900)) ||
                (selectedLocation === 'Adamawa' && (page.id === 145 || page.id === 146)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 45 || page.id === 46)) ||
                (selectedLocation === 'Anambra' && (page.id === 195 || page.id === 196)) ||
                (selectedLocation === 'Bauchi' && (page.id === 245 || page.id === 246)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 295 || page.id === 296)) ||
                (selectedLocation === 'Benue' && (page.id === 345 || page.id === 346)) ||
                (selectedLocation === 'Borno' && (page.id === 395 || page.id === 396)) ||
                (selectedLocation === 'Cross River' && (page.id === 445 || page.id === 446)) ||
                (selectedLocation === 'Delta' && (page.id === 495 || page.id === 496)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 545 || page.id === 546)) ||
                (selectedLocation === 'Edo' && (page.id === 595 || page.id === 596)) ||
                (selectedLocation === 'Ekiti' && (page.id === 645 || page.id === 646)) ||
                (selectedLocation === 'Enugu' && (page.id === 695 || page.id === 696)) ||
                (selectedLocation === 'Gombe' && (page.id === 795 || page.id === 796)) ||
                (selectedLocation === 'Imo' && (page.id === 845 || page.id === 846)) ||
                (selectedLocation === 'Jigawa' && (page.id === 895 || page.id === 896)) ||
                (selectedLocation === 'Kaduna' && (page.id === 945 || page.id === 946)) ||
                (selectedLocation === 'Kano' && (page.id === 995 || page.id === 996)) ||
                (selectedLocation === 'Katsina' && (page.id === 1045 || page.id === 1046)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1095 || page.id === 1096)) ||
                (selectedLocation === 'Kogi' && (page.id === 1145 || page.id === 1146)) ||
                (selectedLocation === 'Kwara' && (page.id === 1195 || page.id === 1196)) ||
                (selectedLocation === 'Lagos' && (page.id === 1245 || page.id === 1246)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1295 || page.id === 1296)) ||
                (selectedLocation === 'Niger' && (page.id === 1345 || page.id === 1346)) ||
                (selectedLocation === 'Ogun' && (page.id === 1395 || page.id === 1396)) ||
                (selectedLocation === 'Ondo' && (page.id === 1445 || page.id === 1446)) ||
                (selectedLocation === 'Osun' && (page.id === 1495 || page.id === 1496)) ||
                (selectedLocation === 'Oyo' && (page.id === 1545 || page.id === 1546)) ||
                (selectedLocation === 'Plateau' && (page.id === 1595 || page.id === 1596)) ||
                (selectedLocation === 'Rivers' && (page.id === 1645 || page.id === 1646)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1695 || page.id === 1696)) ||
                (selectedLocation === 'Taraba' && (page.id === 1745 || page.id === 1746)) ||
                (selectedLocation === 'Yobe' && (page.id === 1795 || page.id === 1796)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1845 || page.id === 1846))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 97 || page.id === 98)) ||
                (selectedLocation === 'Abuja' && (page.id === 1901 || page.id === 1902)) ||
                (selectedLocation === 'Adamawa' && (page.id === 147 || page.id === 148)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 47 || page.id === 48)) ||
                (selectedLocation === 'Anambra' && (page.id === 197 || page.id === 198)) ||
                (selectedLocation === 'Bauchi' && (page.id === 247 || page.id === 248)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 297 || page.id === 298)) ||
                (selectedLocation === 'Benue' && (page.id === 347 || page.id === 348)) ||
                (selectedLocation === 'Borno' && (page.id === 397 || page.id === 398)) ||
                (selectedLocation === 'Cross River' && (page.id === 447 || page.id === 448)) ||
                (selectedLocation === 'Delta' && (page.id === 497 || page.id === 498)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 547 || page.id === 548)) ||
                (selectedLocation === 'Edo' && (page.id === 597 || page.id === 598)) ||
                (selectedLocation === 'Ekiti' && (page.id === 647 || page.id === 648)) ||
                (selectedLocation === 'Enugu' && (page.id === 697 || page.id === 698)) ||
                (selectedLocation === 'Gombe' && (page.id === 797 || page.id === 798)) ||
                (selectedLocation === 'Imo' && (page.id === 847 || page.id === 848)) ||
                (selectedLocation === 'Jigawa' && (page.id === 897 || page.id === 898)) ||
                (selectedLocation === 'Kaduna' && (page.id === 947 || page.id === 948)) ||
                (selectedLocation === 'Kano' && (page.id === 997 || page.id === 998)) ||
                (selectedLocation === 'Katsina' && (page.id === 1047 || page.id === 1048)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1097 || page.id === 1098)) ||
                (selectedLocation === 'Kogi' && (page.id === 1147 || page.id === 1148)) ||
                (selectedLocation === 'Kwara' && (page.id === 1197 || page.id === 1198)) ||
                (selectedLocation === 'Lagos' && (page.id === 1247 || page.id === 1248)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1297 || page.id === 1298)) ||
                (selectedLocation === 'Niger' && (page.id === 1347 || page.id === 1348)) ||
                (selectedLocation === 'Ogun' && (page.id === 1397 || page.id === 1398)) ||
                (selectedLocation === 'Ondo' && (page.id === 1447 || page.id === 1448)) ||
                (selectedLocation === 'Osun' && (page.id === 1497 || page.id === 1498)) ||
                (selectedLocation === 'Oyo' && (page.id === 1547 || page.id === 1548)) ||
                (selectedLocation === 'Plateau' && (page.id === 1597 || page.id === 1598)) ||
                (selectedLocation === 'Rivers' && (page.id === 1647 || page.id === 1648)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1697 || page.id === 1698)) ||
                (selectedLocation === 'Taraba' && (page.id === 1747 || page.id === 1748)) ||
                (selectedLocation === 'Yobe' && (page.id === 1797 || page.id === 1798)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1847 || page.id === 1848))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 99 || page.id === 100)) ||
                (selectedLocation === 'Abuja' && (page.id === 1903 || page.id === 1904)) ||
                (selectedLocation === 'Adamawa' && (page.id === 149 || page.id === 150)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 49 || page.id === 50)) ||
                (selectedLocation === 'Anambra' && (page.id === 199 || page.id === 200)) ||
                (selectedLocation === 'Bauchi' && (page.id === 249 || page.id === 250)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 299 || page.id === 300)) ||
                (selectedLocation === 'Benue' && (page.id === 349 || page.id === 350)) ||
                (selectedLocation === 'Borno' && (page.id === 399 || page.id === 400)) ||
                (selectedLocation === 'Cross River' && (page.id === 449 || page.id === 450)) ||
                (selectedLocation === 'Delta' && (page.id === 499 || page.id === 500)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 549 || page.id === 550)) ||
                (selectedLocation === 'Edo' && (page.id === 599 || page.id === 600)) ||
                (selectedLocation === 'Ekiti' && (page.id === 649 || page.id === 650)) ||
                (selectedLocation === 'Enugu' && (page.id === 699 || page.id === 700)) ||
                (selectedLocation === 'Gombe' && (page.id === 799 || page.id === 800)) ||
                (selectedLocation === 'Imo' && (page.id === 849 || page.id === 850)) ||
                (selectedLocation === 'Jigawa' && (page.id === 899 || page.id === 900)) ||
                (selectedLocation === 'Kaduna' && (page.id === 949 || page.id === 950)) ||
                (selectedLocation === 'Kano' && (page.id === 999 || page.id === 1000)) ||
                (selectedLocation === 'Katsina' && (page.id === 1049 || page.id === 1050)) ||
                (selectedLocation === 'Kebbi' && (page.id === 1099 || page.id === 1100)) ||
                (selectedLocation === 'Kogi' && (page.id === 1149 || page.id === 1150)) ||
                (selectedLocation === 'Kwara' && (page.id === 1199 || page.id === 1200)) ||
                (selectedLocation === 'Lagos' && (page.id === 1249 || page.id === 1250)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 1299 || page.id === 1300)) ||
                (selectedLocation === 'Niger' && (page.id === 1349 || page.id === 1350)) ||
                (selectedLocation === 'Ogun' && (page.id === 1399 || page.id === 1400)) ||
                (selectedLocation === 'Ondo' && (page.id === 1449 || page.id === 1450)) ||
                (selectedLocation === 'Osun' && (page.id === 1499 || page.id === 1500)) ||
                (selectedLocation === 'Oyo' && (page.id === 1549 || page.id === 1550)) ||
                (selectedLocation === 'Plateau' && (page.id === 1599 || page.id === 1600)) ||
                (selectedLocation === 'Rivers' && (page.id === 1649 || page.id === 1650)) ||
                (selectedLocation === 'Sokoto' && (page.id === 1699 || page.id === 1700)) ||
                (selectedLocation === 'Taraba' && (page.id === 1749 || page.id === 1750)) ||
                (selectedLocation === 'Yobe' && (page.id === 1799 || page.id === 1800)) ||
                (selectedLocation === 'Zamfara' && (page.id === 1849 || page.id === 1850))
              ) {
                return (
                  <Component
                    key={page.id}
                    page={page}
                    source={{ uri: page.imageUrl }}
                    phoneNumber={getPhoneNumber(page.id)}
                    location={page.text3}
                    navigate='Back'
                    margin={5}
                  />
                );
              }
              return null;
            })}
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {firebaseData.map(page => {
              if (
                (selectedLocation === 'Abia' && (page.id === 7000)) ||
                (selectedLocation === 'Abuja' && (page.id === 7001)) ||
                (selectedLocation === 'Adamawa' && (page.id === 7002)) ||
                (selectedLocation === 'Akwa Ibom' && (page.id === 7003)) ||
                (selectedLocation === 'Anambra' && (page.id === 7004)) ||
                (selectedLocation === 'Bauchi' && (page.id === 7005)) ||
                (selectedLocation === 'Bayelsa' && (page.id === 7006)) ||
                (selectedLocation === 'Benue' && (page.id === 7007)) ||
                (selectedLocation === 'Borno' && (page.id === 7008)) ||
                (selectedLocation === 'Cross River' && (page.id === 7009)) ||
                (selectedLocation === 'Delta' && (page.id === 7010)) ||
                (selectedLocation === 'Ebonyi' && (page.id === 7011)) ||
                (selectedLocation === 'Edo' && (page.id === 7012)) ||
                (selectedLocation === 'Ekiti' && (page.id === 7013)) ||
                (selectedLocation === 'Enugu' && (page.id === 7014)) ||
                (selectedLocation === 'Gombe' && (page.id === 7015)) ||
                (selectedLocation === 'Imo' && (page.id === 7016)) ||
                (selectedLocation === 'Jigawa' && (page.id === 7017)) ||
                (selectedLocation === 'Kaduna' && (page.id === 7018)) ||
                (selectedLocation === 'Kano' && (page.id === 7019)) ||
                (selectedLocation === 'Katsina' && (page.id === 7020)) ||
                (selectedLocation === 'Kebbi' && (page.id === 7021)) ||
                (selectedLocation === 'Kogi' && (page.id === 7022)) ||
                (selectedLocation === 'Kwara' && (page.id === 7023)) ||
                (selectedLocation === 'Lagos' && (page.id === 7024)) ||
                (selectedLocation === 'Nasarawa' && (page.id === 7025)) ||
                (selectedLocation === 'Niger' && (page.id === 7026)) ||
                (selectedLocation === 'Ogun' && (page.id === 7027)) ||
                (selectedLocation === 'Ondo' && (page.id === 7028)) ||
                (selectedLocation === 'Osun' && (page.id === 7029)) ||
                (selectedLocation === 'Oyo' && (page.id === 7030)) ||
                (selectedLocation === 'Plateau' && (page.id === 7031)) ||
                (selectedLocation === 'Rivers' && (page.id === 7032)) ||
                (selectedLocation === 'Sokoto' && (page.id === 7033)) ||
                (selectedLocation === 'Taraba' && (page.id === 7034)) ||
                (selectedLocation === 'Yobe' && (page.id === 7035)) ||
                (selectedLocation === 'Zamfara' && (page.id === 7036))
              ) {
                return (
                  <>
                    <Text style={styles.noData}>
                      {page.text2}
                    </Text>
                    <Text style={styles.noData}>
                      {page.text}
                    </Text>

                    <TouchableOpacity
                      style={{
                        marginTop: 14,
                        width: 90,
                        height: 30,
                        borderRadius: 5,
                        justifyContent: 'center',
                        borderWidth: 1,
                        backgroundColor: '#a9a9a9',
                        borderColor: 'gray',
                        alignItems: 'center'
                      }}
                      onPress={() => navigation.navigate('Home')}                  >
                      <Text style={{ fontWeight: '400' }}>Home</Text>
                    </TouchableOpacity>
                  </>


                );
              }
              return null;
            })}
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    minWidth: '100%',
    minHeight: '100%'
  },
  seeAll: {
    justifyContent: 'flex-end',
  },
  exit: {
    alignItems: "flex-end",
    paddingRight: 20,
    padding: 5
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  location: {
    fontSize: 20,
    fontWeight: '200',
    marginLeft: 20
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
})


