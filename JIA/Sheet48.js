import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

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
                    // flexDirection:'row',
                    //   backgroundColor:'red'
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
                    {/* <TouchableOpacity> */}
                    <Text style={{ fontWeight: '500' }}>Akwa Ibom</Text>
                    {/* </TouchableOpacity> */}

                </View>
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Aqu')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/aaa.jpg?alt=media&token=8967708a-1c6b-4ac7-b32c-a7b9c0cc3a7f' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Abak Road After Federal Secreteriat Uyo
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 180,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Point")}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/point.jpg?alt=media&token=74297a7d-ffe7-45a2-baaa-5b973a7e9b1c' }} style={{
                            resizeMode: 'stretch',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Abak Road By 4 Point After Ikot Ekpene Plaza
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Qua')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/akw.jpg?alt=media&token=6c53f28b-9f74-4f8a-b59f-f104cb2aa0ba' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Abak Road By Qua Ibo Church Uyo
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 180,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('uuth')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/uuth.jpg?alt=media&token=07f522e5-9504-43a9-8a5c-163766d3d911' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Abak Road By UUTH After Ekot Iman
                            Junction Phort Harcourt Road
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Zrt')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/zzz.jpg?alt=media&token=271e5b1a-8779-4458-9851-434585085be6' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Abak Road After Plaza Uyo
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 190,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Brt')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/SSSS.jpg?alt=media&token=0c508d05-6579-42af-8d82-da122dd2baac' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />

                        <Text>
                            Abak Road By State Secrtriat Roundabout Uyo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('hhh')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/hhh.jpg?alt=media&token=d683f02b-1475-4595-8256-3fbe185ed766' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Aka Obot Idem  After Nung Udo Ibesikpo Asutan, Eket Road
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('jun')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/jun.jpg?alt=media&token=bd122de5-f2e3-47b3-9de8-aac645339dc2' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Aka Junction Uyo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('akaRd')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/akaRd.jpg?alt=media&token=a0281d39-a635-4803-ab86-0adc86f8762c' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Aka Road By Aka Juction Uyo
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('sksEd')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/sksEd.jpg?alt=media&token=648fdc74-4b9c-4491-9c2f-225bb9f88e18' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />

                        <Text>
                            Aka Road After To Eket
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ggg')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ggg.jpg?alt=media&token=30a4dd0d-b0c7-4408-b0c4-7f187be45cef' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Atiku Abaubaka
                            Way By State Secretariat Roundabout
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 180,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('high')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/high.jpg?alt=media&token=357be990-d473-4614-b411-eaa6bf1e7d28' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Calabar Itu Highway After Itam Market- Calabar Road
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('fly')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/fly.jpg?alt=media&token=20f38ccc-d7e6-42d9-9df8-83b3d94ef7b4' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Ikot Ekpene Road By After Itam Flyover
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ibb')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/nnpc.jpg?alt=media&token=af0eeb5e-8d0f-4a49-8649-adb7dfb8c177' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,

                        }} />
                        <Text>
                            Ibb Oposite Ibom Hall Uyo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Plaza')}>
                        <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/oando.jpg?alt=media&token=0919350a-de0b-40b5-a4d2-c27848f291d9'}} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Ibom Plaza By Oando Station Oron Road Uyo
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Iter')}>
                        <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/iter.jpg?alt=media&token=81534543-75ea-4c24-bcc2-c45aafb7e7c5'}} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Ikot Ekpene By Itam Flyover Uyo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            <View style={{
                flexDirection: 'row',
                // marginTop:20

            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Oran')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ornRoad.jpg?alt=media&token=e4b3e7b1-834c-4f4b-9aba-14f4090c04d7' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            48 Sheet
                        </Text>
                        <Text style={{ marginLeft: 10 }}>
                            Oron Road By Shelter Afrique Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 180,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Itu')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ituRoad.jpg?alt=media&token=ecf0d7bc-ff5f-461c-a828-85882b20c8ea' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150

                        }} />
                        <Text>
                            48 sheet
                        </Text>
                        <Text>
                            Itu Road Junction Uyo, Akwa Ibom
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Uba')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/uba.jpg?alt=media&token=452cd3f1-053c-446f-b884-949f5af1af9f' }} style={{
                            resizeMode: 'cover',
                            width: 190,
                            height: 150,
                            marginLeft: 5

                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            Ikot Ekpene Uyo Road By Uba Pimary School
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Uni')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/uniuyo.jpg?alt=media&token=dc14dd27-83fe-453c-9b11-fc88198337ea' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Ikpa Road by Uniuyo Main Campus Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
            {/* <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    //  backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Aka')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/aka.jpg?alt=media&token=ebfe604b-c7e0-43af-a09c-a2d1d6f3c57a' }} style={{
                            resizeMode: 'contain',
                            width: 190,
                            height: 150,
                            marginLeft: 5
                        }} />
                        <Text style={{ marginLeft: 10 }}>
                            48 sheet
                        </Text>
                        <Text style={{ marginLeft: 10 }}>
                            Aka Road before Aka Junction Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 180,
                    height: 220,
                    // backgroundColor:'red',
                    marginLeft: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Ipa')}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ipa.jpg?alt=media&token=f0009be8-2f09-40bd-8920-14b9c113bf82' }} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Plaza Roundabout Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({})