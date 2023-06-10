import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Component from './Component'

export default function LargeFormat({ navigation }) {
    const data = [
        { text: "Large format", text2: "Airport Road Uyo, Akwa Ibom", id: 1, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/2222.jpg?alt=media&token=1e6dbe4f-c170-4f75-a6cc-2e2c72f522ab' }
    ]
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                marginTop: 10
            }}>
                <Text style={{
                    fontSize: 24,
                    color: '#000000',
                    marginLeft: 20,
                    fontWeight: '600'
                }}>
                    Location
                </Text>
            </View>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false} style={{
                }}>
                <View style={{
                    marginTop: 14, width: 90, height: 30,
                    marginLeft: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: '#F5F5F5',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontWeight: '500' }}>Akwa Ibom</Text>
                </View>
            </ScrollView>
            <View style={{ marginRight: 16 }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    {data.map(page => {
                        if (page.id ==1)
                        return(
                            <Component
                            key={page.id}
                            page={page}
                            source={{uri : page.imageUrl}}
                            location={page.text2}
                            navigate='Back'
                            margin={5}
                            
                            />
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})