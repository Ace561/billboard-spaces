import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


export default function Brt() {
    return (
        <View style={styles.main}>
            <View style={{
                marginTop: 20
            }}>

                <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/SSSS.jpg?alt=media&token=0c508d05-6579-42af-8d82-da122dd2baac' }}
                    style={{
                        width: '100%',
                        height: 250,
                        // resizeMode:'contain'
                    }}
                />
            </View>
            <View style={styles.Total}>
                <Text style={{ marginLeft: 10, fontWeight: '300', fontSize: 23, marginTop: 15 }}>
                    48 Sheet
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 23, fontWeight: '300', marginTop: 6 }}>
                    Abak Road By State Secrtriat Roundabout Uyo, Akwa Ibom
                </Text>
                <View style={styles.buttons}>
                    <View style={styles.whatsapp}>
                        <TouchableOpacity onPress={() => (
                            Linking.openURL("whatsapp://send?phone=+234 8100652910&text=Hi good day i want to verify the 48 Sheet at Abak Road By State Secrtriat Round About Uyo")
                        )}>
                            <View style={styles.verify}>
                                <Text style={{ color: '#34B7F1' }}>Verify the site</Text>
                                <FontAwesome name="whatsapp" size={24} color="#34B7F1" style={{ marginLeft: 5 }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.telebutton}>
                        <TouchableOpacity onPress={() => (
                            Linking.openURL('tel:+234 8100652910')
                        )}>
                            <View style={styles.telephone}>
                                <Text style={{ color: 'white' }}>Mobile number</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
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
})