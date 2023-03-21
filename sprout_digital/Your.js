import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Your({ navigation }) {
    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row',marginTop:48 }}>
                <Ionicons name="chevron-back-circle-sharp" size={45} color="#ff1493" style={{
                    marginLeft:25
                }} onPress={()=> navigation.navigate('Log_in')}/>
                <Text style={{
                    color:'#ff1493',
                    marginLeft:6,
                    fontWeight:'bold',
                    fontSize:25,
                    marginTop:6
                }}>Your Profile</Text>
            </View>
            <Image source={require('../assets/Screenshot_2023-02-08-13-04-44-394_cn.wps.moffice_eng~2.jpg')} style={{
                width:200,
                height:200,
                resizeMode:'center',
                marginLeft:10
            }}/>
            {/* <View style={{ 
                // flexDirection: 'row',
            marginTop:48 }}>
                <View style={{
                    backgroundColor:'red',
                    width:39,
                    height:39,
                    borderRadius:200,
                    alignItems:'center',
                    justifyContent:'center',
                    marginLeft:25
                }}>
                    <Text style={{
                        fontSize:20
                    }}>
                        S
                    </Text>
                </View>
                
                
            </View>
            <Text style={{
                    color:'#ff1493',
                    marginLeft:6,
                    fontWeight:'bold',
                    fontSize:20,
                    marginLeft:72,
                    // marginBottom:
                }}>Sprout Digital</Text>
            <Text style={{
                marginLeft:73,
                fontSize:12,
                // marginTop:''
            }}>info@sproutdigital.xyz</Text> */}

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,

    }
})