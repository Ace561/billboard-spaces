import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'

export default function Recovery() {
    const [email, setEmail] = useState('')

    function logged() {
        console.log("im here");
    }
    return (
        <View style={styles.main}>
            <View style={styles.forgotScreen}>
                <Text style={styles.forgot}>Forgot password?</Text>
            </View>
            <View style={styles.imageMove}>
                <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/8063764_63457__2_-removebg-preview.png?alt=media&token=8ad713c9-b0d1-4526-94d6-756b8f460ac2' }}
                    style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'contain',
                    }}>

                </Image>
            </View>
            <View style={styles.text1}>
                <Text style={styles.forgot}>Enter the email address</Text>
            </View>
            <Text style={styles.forgot}>associated with your account.</Text>

            <View style={styles.textSize}>
                <Text style={styles.text2}>We will email you a link to reset</Text>
            </View>
            <Text style={styles.text2}>your password.</Text>
            {/* <View> */}
            <View style={{
                marginTop: 20,
                width: '80%',
                height: '8%',
                borderRadius: 17,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5F5F5',
                borderBottomWidth: 1,
                borderColor: 'gray',
            }}>
                <TextInput
                    placeholder="Enter Email Address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholderTextColor={'gray'}
                />
            </View>
            <TouchableOpacity onPress={logged} style={{
                width:'45%',
                height:47,
                marginTop:20,
                
            }}>
                 <View style={{
                borderRadius: 27,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'gray',
                backgroundColor: '#5f9ea0',
                flex:1
            }} >
                        <Text >
                            send
                        </Text>

            </View>
            </TouchableOpacity>
           
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    forgot: {
        fontWeight: '600',
        fontSize: 18,
    },
    forgotScreen: {
        paddingTop: '4%'
    },
    image: {
        resizeMode: 'contain'
    },
    imageMove: {
        width: '90%',
        paddingTop: '12%'
        // backgroundColor: 'red',

    },
    text1: {
        paddingTop: '4%'
    },
    textSize: {
        paddingTop: '9%'
    },
    text2: {
        color: 'gray',
        fontWeight: '500'
    }
})
