import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { AuthContext } from '../context/authContext';



export default function Sign_up({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    // const { register } = useContext(AuthContext)
    const { register } = useContext(AuthContext)
    // todo use this function on the signup button
    function logged() {
        console.log();
        console.log("im here");
    }
    const handleRegister = () => {
        setIsLoading(true);
        register(username, email, password)
            .then(() => {
                setIsLoading(false);
                navigation.navigate('Add');
            })
            .catch(error => {
                console.log(error.response.data);
                setIsLoading(false);
                alert('Wrong email or password');
            });
    };
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
                    marginTop: 30,
                    width: '80%',
                    height: '8%',
                    marginLeft: 30,
                    borderRadius: 17, justifyContent: 'center',
                    backgroundColor: '#F5F5F5', borderWidth: 1,
                    borderColor: 'gray'
                }}>
                    <TextInput
                        style={{
                            marginLeft: 20,
                        }}
                        placeholder="Enter Full Name"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View style={{
                    marginTop: 20,
                    width: '80%',
                    height: '8%',
                    marginLeft: 30,
                    borderRadius: 17, justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    borderWidth: 1,
                    borderColor: 'gray'
                }}>
                    <TextInput
                        style={{
                            marginLeft: 20,

                        }}
                        placeholder="Enter Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={{
                    marginTop: 20,
                    width: '80%',
                    height: '8%',
                    marginLeft: 30,
                    borderRadius: 17, justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    borderWidth: 1,
                    borderColor: 'gray'
                }}>
                    <TextInput
                        style={{
                            marginLeft: 20,
                        }}
                        placeholder="Enter password"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.passwordToggle}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Feather
                            name={showPassword ? 'eye' : 'eye-off'}
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    paddingTop: '4%'
                }}>
                    <TouchableOpacity onPress={
                        handleRegister
                    }>
                        <View style={{
                            width: '80%',
                            height: 60,
                            marginLeft: 30,
                            borderRadius: 17, justifyContent: 'center',
                            backgroundColor: '#416FDF',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: 'gray'
                        }}>
                            {isLoading ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text style={{ color: 'white' }}>
                                    Sign Up
                                </Text>
                            )}
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{
                    flexDirection: 'row', paddingTop: '4%',
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
    },
    passwordToggle: {
        position: 'absolute',
        right: 15,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
})