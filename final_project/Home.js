import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';


export default function Home() {
    return (
        <View style={styles.main}>
            <ImageBackground
                source={require('../assets/on.png')}
                style={{
                    width: 572, height: 609,
                }}>

                <View style={{
                    marginTop: 50, marginLeft: 30, width: 70,
                    height: 30, flexDirection: 'row'
                }}>
                    <TouchableOpacity>
                        <Feather name="chevron-left" size={30} color='blue' />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: 400, height: 900, marginTop: 100,
                    backgroundColor: 'white', borderTopRightRadius: 50,
                    borderTopLeftRadius: 50
                }}>
                    <View style={{
                        marginLeft: 20, marginTop: 18
                    }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                            Welcome!
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 8 }}>
                        <Text style={{ fontSize: 12, color: 'gray' }}>
                            We just need a little more information to
                            set up your account. Get
                        </Text>
                    </View>
                    <View style={{ marginLeft: 28 }}>
                        <Text style={{ fontSize: 12, color: 'gray' }}>
                            started on your 7-Days Trial now
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 15, marginTop: 10, marginLeft: 28,
                        fontWeight: 'bold'
                    }}>
                        Last name
                    </Text>
                    <View style={{
                        marginTop: 5, width: 330, height: 50,
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
                            placeholder="Enter Name"
                        />
                    </View>
                    <Text style={{
                        fontSize: 15, marginTop: 10, marginLeft: 28,
                        fontWeight: 'bold'
                    }}>
                        First name
                    </Text>
                    <View style={{
                        marginTop: 5, width: 330, height: 50,
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
                            placeholder="Enter Name"
                        />
                    </View>
                    <Text style={{
                        fontSize: 15, marginTop: 10, marginLeft: 28,
                        fontWeight: 'bold'
                    }}>
                        Username
                    </Text>
                    <View style={{
                        marginTop: 5, width: 330, height: 50,
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
                            placeholder="Enter Name"
                        />
                    </View>
                    <Text style={{
                        fontSize: 15, marginTop: 10, marginLeft: 28,
                        fontWeight: 'bold'
                    }}>
                        Password
                    </Text>
                    <View style={{
                        marginTop: 5, width: 330, height: 50,
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
                            placeholder="Enter passwword" secureTextEntry
                        />
                    </View>
                    <Text style={{
                        fontSize: 15, marginTop: 10, marginLeft: 28,
                        fontWeight: 'bold'
                    }}>
                        Confirm Password
                    </Text>
                    <View style={{
                        marginTop: 5, width: 330, height: 50,
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
                            placeholder="confirm password" secureTextEntry
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
})