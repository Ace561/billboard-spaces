import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


export default function Iuu() {
    return (
        <View style={styles.main}>
            <View style={{
                marginTop: 20
            }}>

                <Image source={require('../assets/iuu.jpg')}
                    style={{
                        width: '100%',
                        height: 250,
                        // resizeMode:'contain'
                    }}
                />
            </View>
            <View style={{
                backgroundColor: '#ffffff',
                height: 300,
                marginTop: 20
            }}>
                <Text style={{ marginLeft: 10, fontWeight: '300', fontSize: 23, marginTop: 15 }}>
                    48 Sheet
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 23, fontWeight: '300', marginTop: 6 }}>
                    Ikot Ekpene Road After Plaza Uyo, Akwa Ibom
                </Text>
                <View style={{
                    // backgroundColor:'red',
                    width: 360,
                    height: 50,
                    marginTop: 40,
                    marginLeft: 10,
                    borderRadius: 20
                }}>
                    <TouchableOpacity onPress={() => (
                        Linking.openURL("whatsapp://send?phone=+234 9078257786&text=Hi good day, I saw your billboard in an application called Billboard Spaces. I'm intersted")
                    )}>
                        <View style={{
                            width: 360,
                            height: 50,
                            // backgroundColor:'#416FDF', 
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#34B7F1'
                        }}>
                            <Text style={{ color: '#34B7F1' }}>WhatsApp</Text>
                            <FontAwesome name="whatsapp" size={24} color="#34B7F1" style={{ marginLeft: 5 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    // backgroundColor:'red',
                    width: 360,
                    height: 50,
                    marginTop: 40,
                    marginLeft: 10,
                    borderRadius: 20,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => (
                        Linking.openURL('tel:+234 8037412340')
                    )}>
                        <View style={{
                            width: 360,
                            height: 50,
                            backgroundColor: '#34B7F1',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 20
                        }}>
                            <Text style={{ color: 'white' }}>Mobile number</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})