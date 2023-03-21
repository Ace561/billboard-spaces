import { StyleSheet, Text, View, TouchableOpacity,ScrollView,Image } from 'react-native'
import React from 'react'

export default function AkwaIbom() {
  return (
    <View>
     <View style={{flexDirection:'row',
        marginTop:20      
      }}>
          <View style={{
         width:200,
         height:220,
         // backgroundColor:'red',
         
        }}>
          <TouchableOpacity>
            <Image source={require('../assets/111.jpg')} style={{
           resizeMode:'cover',
           width:190,
           height:150,
           marginLeft:5
          
          }}/>
          <Text>
          Portrait
        </Text>
          </TouchableOpacity>
          
        </View>       
          <View style={{
          width:200,
          height:220,
          // backgroundColor:'red',
          marginLeft:10
        }}>
          <TouchableOpacity>
             <Image source={require('../assets/2222.jpg')} style={{
            resizeMode:'stretch',
            width:200,
            height:150
          
          }}/>
          <Text>
          uku
        </Text>
           
          </TouchableOpacity>
         </View>
        </View>
        <View style={{flexDirection:'row',
        // marginTop:20
      
      }}>
          <View style={{
         width:200,
         height:220,
        //  backgroundColor:'red',
         
        }}>
          <TouchableOpacity>
            <Image source={require('../assets/6666.jpg')} style={{
           resizeMode:'contain',
           width:190,
           height:150
          
          }}/>
          <Text>
          uku
        </Text>
          </TouchableOpacity>
          
        </View> 
        </View>      
    </View>
  )
}

const styles = StyleSheet.create({})