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
                        <Image source={require('../assets/aaa.jpg')} style={{
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
                        <Image source={require('../assets/point.jpg')} style={{
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
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Qua')}>
                        <Image source={require('../assets/akw.jpg')} style={{
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
                        <Image source={require('../assets/uuth.jpg')} style={{
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
                    <TouchableOpacity onPress={() => navigation.navigate('Zrt')}>
                        <Image source={require('../assets/zzz.jpg')} style={{
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
                        <Image source={require('../assets/SSSS.jpg')} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />

                        <Text>
                            Abak Road By State Secrtriat Round About Uyo
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
                    <TouchableOpacity onPress={() => navigation.navigate('hhh')}>
                        <Image source={require('../assets/hhh.jpg')} style={{
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
                        <Image source={require('../assets/jun.jpg')} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Aka Junction Uyo
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
                    <TouchableOpacity onPress={() => navigation.navigate('akaRd')}>
                        <Image source={require('../assets/akaRd.jpg')} style={{
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
                        <Image source={require('../assets/sksEd.jpg')} style={{
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
                        <Image source={require('../assets/ggg.jpg')} style={{
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
                        <Image source={require('../assets/high.jpg')} style={{
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
                        <Image source={require('../assets/fly.jpg')} style={{
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
                        <Image source={require('../assets/nnpc.jpg')} style={{
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
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Plaza')}>
                        <Image source={require('../assets/oando.jpg')} style={{
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
                        <Image source={require('../assets/iter.jpg')} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Ikot Ekpene By Itam Flyover Uyo
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
          flexDirection: 'row',
          // marginTop:20

        }}>
          <View style={{
            width: 200,
            height: 220,
            // backgroundColor:'red',

          }}>
            <TouchableOpacity onPress={()=> navigation.navigate('Oran')}>
              <Image source={require('../assets/ornRoad.jpg')} style={{
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
            <TouchableOpacity onPress={()=> navigation.navigate('Itu')}>
              <Image source={require('../assets/ituRoad.jpg')} style={{
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
            <View style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
                <View style={{
                    width: 200,
                    height: 220,
                    // backgroundColor:'red',

                }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Uba')}>
                        <Image source={require('../assets/uba.jpg')} style={{
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
                    <TouchableOpacity onPress={()=> navigation.navigate('Uni')}>
                        <Image source={require('../assets/uniuyo.jpg')} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Ikpa Road by Uniuyo Main Campus Uyo, Akwa Ibom
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
            //  backgroundColor:'red',

          }}>
            <TouchableOpacity onPress={()=> navigation.navigate('Aka')}>
              <Image source={require('../assets/aka.jpg')} style={{
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
                    <TouchableOpacity onPress={()=> navigation.navigate('Ipa')}>
                        <Image source={require('../assets/ipa.jpg')} style={{
                            resizeMode: 'cover',
                            width: 200,
                            height: 150,

                        }} />
                        <Text>
                            Plaza Roundabout Uyo, Akwa Ibom
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})