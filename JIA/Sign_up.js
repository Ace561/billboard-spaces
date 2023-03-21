import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';



export default function Sign_up({ navigation }) {  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.main}>
            <View style={{
                width: '100%', height: '100%', backgroundColor: 'white',
                marginTop: 100, borderTopRightRadius: 50,
                borderTopLeftRadius: 50
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 30, marginTop: 100, color: '#416FDF',
                        fontWeight: 'bold'
                    }}>
                        Get Started
                    </Text>
                </View>

                <View style={{
                    marginTop: 30, width: 330, height: 50,
                    marginLeft: 30,
                    borderRadius: 17, justifyContent: 'center',
                    backgroundColor: '#F5F5F5', borderWidth: 1,
                    borderColor: 'gray'
                }}>
                    <TextInput
                        style={{
                            marginLeft: 20, width: 200
                        }}
                        placeholder="Enter Full Name"
                    />
                </View>
                <View style={{
                    marginTop: 20, width: 330, height: 50,
                    marginLeft: 30,
                    borderRadius: 17, justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    borderWidth: 1,
                    borderColor: 'gray'
                }}>
                    <TextInput
                        style={{
                            marginLeft: 20, width: 200,

                        }}
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={{
                    marginTop: 20, width: 330, height: 50,
                    marginLeft: 30,
                    borderRadius: 17, justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    borderWidth: 1,
                    borderColor: 'gray'
                }}>
                    <TextInput
                        style={{
                            marginLeft: 20, width: 200,
                        }}
                        placeholder="Enter password"
                        secureTextEntry
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Add')
                }>
                    <View style={{
                        marginTop: 40, width: 330, height: 50,
                        marginLeft: 30,
                        borderRadius: 17, justifyContent: 'center',
                        backgroundColor: '#416FDF',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'gray'
                    }}>
                        <Text style={{ color: 'white' }}>
                            Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* <View style={{
                    alignItems: 'center', marginTop: 40
                }}>
                    <Text>
                        Sign Up with
                    </Text>
                </View> */}
                {/* <View style={{
                    marginTop: 40,
                    flexDirection: 'row', justifyContent: 'center'

                }}>
                    <TouchableOpacity>
                        <AntDesign name="google" size={30} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="twitter" size={30} color="#6EAEE7" style={{
                            marginLeft: 30
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="facebook-with-circle" size={30} color="#416FDF" style={{
                            marginLeft: 30
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="apple1" size={30} color="black" style={{
                            marginLeft: 30
                        }} />
                    </TouchableOpacity>

                </View> */}
                <View style={{
                    flexDirection: 'row', marginTop: 30,
                    justifyContent: 'center'
                }}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('Log_in')
                    }>
                        <Text style={{ color: '#416FDF' }}> Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#6EAEE7'
    }
})