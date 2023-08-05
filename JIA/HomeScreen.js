import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Modal, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, on, query } from 'firebase/database';
import Component from './Component';
import { firebaseConfig } from '../firebaseConfig';
import networkStatusListener from './NetworkStatus'; // Replace with the correct path


export default function HomeScreen({ navigation }) {

  const [firebaseData, setFirebaseData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    const databaseRef = ref(database, 'yourDataNode');
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


  return (
    <View style={styles.container}>
      <View style={{
        width: '100%',
        flexDirection: 'row'
      }}>
        <Text style={{
          marginTop: 15,
          fontSize: 23, marginLeft: 20,
          color: '#416FDF'
        }}>BILLBOARD</Text>
        <Text style={{
          marginTop: 15,
          fontSize: 23
        }}> SPACES</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      >
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
        <ScrollView style={{
          backgroundColor: '#ffffff',
          width: '100%',
        }}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{
              width: '90%',
            }}>
              <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ass.png?alt=media&token=f76f317e-9e69-4d39-9c78-96a746a56621' }} style={{
                width: '100%',
                height: 200,
                resizeMode: 'contain',
              }} />
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            backgroundColor: '#d0d0c0'
          }}>
            <Text style={{
              fontSize: 24,
              color: '#000000',
              marginLeft: 12,
              fontWeight: "300",
            }}>
              Buy BillBoard Spaces
            </Text>
          </View>


          <View style={{
            flexDirection: 'row',
            marginTop: 20
          }}>
            <Text style={{
              fontSize: 24,
              color: '#000000',
              marginLeft: 12,
              fontWeight: '400'
            }}>
              Categories
            </Text>
          </View>
          <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false} style={{
            }}>

            <View style={{
              marginTop: 14, width: 90, height: 30,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center',

            }}>
              <TouchableOpacity onPress={() => navigation.navigate('48 sheet')}>
                <Text style={{ fontWeight: '500' }}>48 sheet</Text>
              </TouchableOpacity>

            </View>
            <View style={{
              marginTop: 14, width: 80, height: 30,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('Portrait')}>
                <Text style={{ fontWeight: '500' }}>Portrait</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginTop: 14, width: 110, height: 30,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center'
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('Large format')}>
                <Text style={{ fontWeight: '500' }}>Large format</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginTop: 14, width: 75, height: 30,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center',
              marginRight: 10
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('Unipole')}>
                <Text style={{ fontWeight: '500' }}>Unipole</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginTop: 14, width: 150, height: 30,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center',
              marginRight: 10
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('SpectacularBillboard')}>
                <Text style={{ fontWeight: '500' }}>SpectacularBillboard</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              marginTop: 14, width: 75, height: 30,
              marginLeft: 20,
              borderRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#F5F5F5',
              borderWidth: 1,
              borderColor: 'gray',
              alignItems: 'center',
              marginRight: 10
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('Gantry')}>
                <Text style={{ fontWeight: '500' }}>Gantry</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View>
            <View style={{
              flexDirection: 'row',
              marginTop: 20
            }}>
              <Text style={{
                fontSize: 24,
                color: '#000000',
                marginLeft: 12,
                fontWeight: '400'
              }}>
                Popular
              </Text>
            </View>
          </View >
          <View style={{ marginRight: 16 }}>
            {loading ? (
              <ActivityIndicator style={{ marginTop: 150 }} color={'#a9a9a9'} size='large' />
            ) : (
              <View style={{
                flexDirection: 'row',
                marginTop: 20,
              }}>
                {firebaseData.map((page) => {
                  if (page.id === 1 || page.id === 2) {
                    return (
                      <Component
                        key={page.id}
                        page={page}
                        source={{ uri: page.imageUrl }}
                        phoneNumber={getPhoneNumber(page.id)}
                        size={page.text}
                        location={page.text2}
                        navigate="Back"
                        margin={5}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </View>
            )}
            <View style={{
              flexDirection: 'row',
              marginBottom: 13
            }}>
              {firebaseData.map(page => {
                if (page.id === 3 || page.id === 4) { // Render Component for objects with id 3 and 4
                  return (
                    <Component
                      key={page.id}
                      page={page}
                      source={{ uri: page.imageUrl }}
                      size={page.text}
                      location={page.text2}
                      phoneNumber={getPhoneNumber(page.id)}
                      navigate='Back'
                      margin={5}
                    />
                  );
                } else {
                  return null; // Render nothing for other objects
                }
              })}
            </View>
            <View style={{
              flexDirection: 'row',
              marginBottom: 10
            }}>
              {firebaseData.map(page => {
                if (page.id === 5 || page.id === 6) { // Render Component for objects with id 3 and 4
                  return (
                    <Component
                      key={page.id}
                      page={page}
                      source={{ uri: page.imageUrl }}
                      phoneNumber={getPhoneNumber(page.id)}
                      size={page.text}
                      location={page.text2}
                      navigate='Back'
                      margin={5}
                    />
                  );
                } else {
                  return null; // Render nothing for other objects
                }
              })}
            </View>
            <View style={{
              flexDirection: 'row',
              marginBottom: 10
            }}>
              {firebaseData.map(page => {
                if (page.id === 7 || page.id === 8) { // Render Component for objects with id 3 and 4
                  return (
                    <Component
                      key={page.id}
                      page={page}
                      source={{ uri: page.imageUrl }}
                      phoneNumber={getPhoneNumber(page.id)}
                      size={page.text}
                      location={page.text2}
                      navigate='Back'
                      margin={5}
                    />
                  );
                } else {
                  return null; // Render nothing for other objects
                }
              })}
            </View>
            <View style={{
              flexDirection: 'row',
              marginBottom: 10
            }}>
              {firebaseData.map(page => {
                if (page.id === 9 || page.id === 10) { // Render Component for objects with id 3 and 4
                  return (
                    <Component
                      key={page.id}
                      page={page}
                      source={{ uri: page.imageUrl }}
                      phoneNumber={getPhoneNumber(page.id)}
                      size={page.text}
                      location={page.text2}
                      navigate='Back'
                      margin={5}
                    />
                  );
                } else {
                  return null; // Render nothing for other objects
                }
              })}
            </View>
          </View>
        </ScrollView >
      </ScrollView>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
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
});