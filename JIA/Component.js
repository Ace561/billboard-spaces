import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Component(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={{
        width: '50%',
        height: 220,
        marginLeft: props.margin
      }}>
        <Image source={props.source} style={{
          resizeMode: 'cover',
          width: '100%',
          height: 150,
          marginLeft: 5
        }} />
        <TouchableOpacity onPress={() => navigation.navigate(props.navigate)} style={{
          width: props.width
        }}>
          <Text style={{ marginLeft: 10 }}>
            {props.size}
          </Text>
          <Text style={{ marginLeft: 10, width: props.width }}>
            {props.location}
          </Text>
        </TouchableOpacity>

      </View>
    </>
  )
}