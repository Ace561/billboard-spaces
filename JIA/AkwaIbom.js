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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/111.jpg?alt=media&token=52f24aed-0a4c-4cf8-b559-8dd68b32191e'}} style={{
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
             <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/2222.jpg?alt=media&token=1e6dbe4f-c170-4f75-a6cc-2e2c72f522ab'}} style={{
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
            <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/6666.jpg?alt=media&token=bc0f416b-371e-4c97-9594-d838d743acfb'}} style={{
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