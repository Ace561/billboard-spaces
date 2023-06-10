import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import Component from './Component'

const data = [
    { text: "48 sheet", text2: "Abak Road After Plaza Uyo, Akwa Ibom", id: 1, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/zzz.jpg?alt=media&token=271e5b1a-8779-4458-9851-434585085be6' },
    { text: "48 sheet", text2: "Abak Road By State Secrtriat Roundabout Uyo, Akwa Ibom", id: 2, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/SSSS.jpg?alt=media&token=0c508d05-6579-42af-8d82-da122dd2baac' },
    { text: "48 sheet", text2: "Aka Road By Aka Juction Uyo, Akwa Ibom", id: 3, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/akaRd.jpg?alt=media&token=a0281d39-a635-4803-ab86-0adc86f8762c' },
    { text: "48 sheet", text2: "Aka Road Uyo, Akwa Ibom", id: 4, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/sksEd.jpg?alt=media&token=648fdc74-4b9c-4491-9c2f-225bb9f88e18' },
    { text: "48 sheet", text2: "Atiku Abaubaka Way By State Secretariat Roundabout Uyo, Akwa Ibom", id: 5, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ggg.jpg?alt=media&token=30a4dd0d-b0c7-4408-b0c4-7f187be45cef' },
    { text: "48 sheet", text2: "Calabar Itu Highway After Itam Market- Calabar Road, Uyo, Akwa Ibom", id: 6, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/high.jpg?alt=media&token=357be990-d473-4614-b411-eaa6bf1e7d28' },
    { text: "48 sheet", text2: "Ikot Ekpene Road By After Itam Flyover Uyo, Akwa Ibom", id: 7, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/fly.jpg?alt=media&token=20f38ccc-d7e6-42d9-9df8-83b3d94ef7b4' },
    { text: "48 sheet", text2: "Ibb Oposite Ibom Hall Uyo, Akwa Ibom", id: 8, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/nnpc.jpg?alt=media&token=af0eeb5e-8d0f-4a49-8649-adb7dfb8c177' },
    { text: "48 sheet", text2: "Oron Road By Shelter Afrique Uyo, Akwa Ibom", id: 10, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ornRoad.jpg?alt=media&token=e4b3e7b1-834c-4f4b-9aba-14f4090c04d7' },
    { text: "48 sheet", text2: "Itu Road Junction Uyo, Akwa Ibom", id: 11, imageUrl: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ituRoad.jpg?alt=media&token=ecf0d7bc-ff5f-461c-a828-85882b20c8ea' },
];
export default function Sheet48({ navigation }) {
    return (
        <ScrollView>
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
                    marginTop: 20,
                    marginBottom: 13
                }}>
                    {data.map(page => {
                        if (page.id === 1 || page.id === 2) { // Render Component for objects with id 3 and 4
                            return (
                                <Component
                                    key={page.id}
                                    page={page}
                                    source={{ uri: page.imageUrl }}
                                    location={page.text2}
                                    navigate='Back'
                                    margin={5}
                                />
                            );
                        } else {
                            return null; // Render nothing for other objects
                        }
                    })}
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10
                }}>
                    {data.map(page => {
                        if (page.id === 3 || page.id === 4) { // Render Component for objects with id 3 and 4
                            return (
                                <Component
                                    key={page.id}
                                    page={page}
                                    source={{ uri: page.imageUrl }}
                                    location={page.text2}
                                    navigate='Back'
                                    margin={5}
                                />
                            );
                        } else {
                            return null; // Render nothing for other objects
                        }
                    })}
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10
                }}>
                    {data.map(page => {
                        if (page.id === 7 || page.id === 8) { // Render Component for objects with id 3 and 4
                            return (
                                <Component
                                    key={page.id}
                                    page={page}
                                    source={{ uri: page.imageUrl }}
                                    location={page.text2}
                                    navigate='Back'
                                    margin={5}
                                />
                            );
                        } else {
                            return null; // Render nothing for other objects
                        }
                    })}
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 27
                }}>
                    {data.map(page => {
                        if (page.id === 5 || page.id === 6) { // Render Component for objects with id 3 and 4
                            return (
                                <Component
                                    key={page.id}
                                    page={page}
                                    source={{ uri: page.imageUrl }}
                                    location={page.text2}
                                    navigate='Back'
                                    margin={5}
                                    width='100%'
                                />
                            );
                        } else {
                            return null; // Render nothing for other objects
                        }
                    })}
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10
                }}>
                    {data.map(page => {
                        if (page.id === 10 || page.id === 11) { // Render Component for objects with id 3 and 4
                            return (
                                <Component
                                    key={page.id}
                                    page={page}
                                    source={{ uri: page.imageUrl }}
                                    location={page.text2}
                                    navigate='Back'
                                    margin={5}
                                />
                            );
                        } else {
                            return null; // Render nothing for other objects
                        }
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})


