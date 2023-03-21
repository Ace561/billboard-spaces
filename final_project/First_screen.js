import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function () {
    return (
        <View style={styles.main}>
            <View style={{
                width: '100%'
                , height: 60,
                // backgroundColor: 'white',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 35
            }}>
                <View style={{
                    // backgroundColor: 'red',
                    height: 30,
                    width: 30,
                    marginLeft: 20
                }}>
                    <TouchableOpacity>
                        <Feather name="menu" size={26} color="black"
                            style={{}}
                        />
                    </TouchableOpacity>

                </View>
                <Image
                    source={require('../assets/konga.png')}
                    style={{
                        width: 120,
                        height: 100,
                        resizeMode: 'contain',
                        marginLeft: 40
                    }}
                />
                <View style={{
                    // backgroundColor: 'red',
                    height: 30,
                    width: 30,
                    marginLeft: 90
                }}>
                    <TouchableOpacity>
                        <AntDesign name="shoppingcart" size={26} color="black"
                            style={{
                                // marginLeft: 90,
                            }}
                        />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity>
                    <FontAwesome5 name="user-alt" size={24} color="black"
                        style={{ marginLeft: 28 }}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 14
                }}>
                    What are you looking for today?
                </Text>
                <View style={{
                    marginTop: 10, width: 360, height: 46,
                    // borderRadius: 17,
                    justifyContent: 'center',
                    backgroundColor: '#F5F5F5', borderWidth: 1,
                    borderColor: 'gray',
                }}>
                    <TextInput
                        style={{
                            marginLeft: 20, width: 200,
                            fontStyle: 'italic'
                        }}
                        placeholder="Search for product and brands"
                    />
                </View>
            </View>
            <Image source={require('../assets/ads2.jpg')}
                style={{
                    width: '100%', height: 140, marginTop: 20,
                }}
            />
            <View style={{
                alignItems: 'center',

            }}>
                <Image source={require('../assets/ads3.png')}
                    style={{
                        width: 130,
                        resizeMode: 'center',
                        marginTop: 10
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: 50,
                // backgroundColor: 'red',
                marginTop: 40,

            }}>
                <View style={{
                    width: 70,
                    // backgroundColor:'red',
                    // marginLeft: 57,
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/travle.jpg')}
                            style={{
                                width: 80,
                                resizeMode: 'contain',
                                marginLeft: 28
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: 70,
                    // backgroundColor:'red',
                    marginLeft: 90,
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/pay.jpg')}
                            style={{
                                width: 70,
                                resizeMode: 'contain',
                                // marginLeft:57,

                            }}
                        />
                    </TouchableOpacity>

                </View>

                <View style={{
                    width: 70,
                    // backgroundColor:'red',
                    marginLeft: 57,
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/kxpress.jpg')}
                            style={{
                                width: 70,
                                resizeMode: 'contain',
                                // marginLeft:57
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                marginTop: 47,
                // backgroundColor: 'red',
                width: '100%',
                height: 40,
            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#ff1493',
                    marginLeft: 20,
                    // marginTop: 9
                }}>Popular Categories</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                // backgroundColor: 'yellow',
                width: '100%',
                height: 110,
                alignItems: 'center'
            }}>
                <TouchableOpacity>
                    <Image source={require('../assets/phone.jpg')} style={{
                        width: 60,
                        resizeMode: 'contain',
                        marginLeft: 19
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/computer.jpg')} style={{
                        width: 76,
                        resizeMode: 'contain',
                        marginLeft: 24
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/men.jpg')} style={{
                        width: 60,
                        resizeMode: 'contain',
                        marginLeft: 24
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/woman.jpg')} style={{
                        width: 60,
                        resizeMode: 'contain',
                        marginLeft: 30
                    }} />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                // backgroundColor: 'yellow',
                width: '100%',
                height: 110,
                alignItems: 'center'
            }}>
                <TouchableOpacity>
                    <Image source={require('../assets/beauty.jpg')} style={{
                        width: 60,
                        resizeMode: 'contain',
                        marginLeft: 19
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/games.jpg')} style={{
                        width: 60,
                        resizeMode: 'contain',
                        marginLeft: 32
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/home.jpg')} style={{
                        width: 60,
                        resizeMode: 'contain',
                        marginLeft: 32
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/allCategories.jpg')} style={{
                        width: 100,
                        resizeMode: 'contain',
                        marginLeft: 14
                    }} />
                </TouchableOpacity>
            </View>
            <View style={{
                // backgroundColor: 'green',
                width: '100%',
                height: 30,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 20
                }}>
                    Trending Items
                </Text>
                <View style={{
                    width: 90,
                    height: 20,
                    // backgroundColor:'red'
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: '#ff1493',

                        }}>
                            See all items
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'black',
                marginTop: 15
            }}>

            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/gass.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/mifi.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/mtnMifi.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/chickenCubes.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'green',
                width: '100%',
                height: 30,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 20
                }}>
                    Mobile Phone
                </Text>
                <View style={{
                    width: 90,
                    height: 20,
                    // backgroundColor:'red'
                    marginLeft: 40
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: '#ff1493',

                        }}>
                            See all items
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'black',
                marginTop: 15
            }}>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/mobile1.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/mobile2.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/mobile3.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/mobile3.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'green',
                width: '100%',
                height: 30,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 20
                }}>
                    Konga Fashion
                </Text>
                <View style={{
                    width: 90,
                    height: 20,
                    // backgroundColor:'red'
                    marginLeft: 40
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: '#ff1493',

                        }}>
                            See all items
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'black',
                marginTop: 15
            }}>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/fashion1.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/fashion2.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/fashion3.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/fashion4.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'green',
                width: '100%',
                height: 30,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 20
                }}>
                    Computer and Asccessories</Text>
                <View style={{
                    width: 90,
                    height: 20,
                    // backgroundColor:'red'
                    marginLeft: 30
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: '#ff1493',

                        }}>
                            See all items
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'black',
                marginTop: 15
            }}>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/computer1.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/computer2.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/computer3.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/computer4.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'green',
                width: '100%',
                height: 30,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    marginLeft: 20
                }}>
                    Home and Kitchen
                </Text>
                <View style={{
                    width: 90,
                    height: 20,
                    // backgroundColor:'red'
                    marginLeft: 40
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: '#ff1493',

                        }}>
                            See all items
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'black',
                marginTop: 15
            }}>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/kitchen1.jpg')} style={{
                            resizeMode: 'contain',
                            width: 150,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/kitchen2.jpg')} style={{
                            resizeMode: 'contain',
                            width: 150,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/kitchen3.jpg')} style={{
                            resizeMode: 'contain',
                            width: 165,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/kitchen4.jpg')} style={{
                            resizeMode: 'contain',
                            width: 160,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                // backgroundColor: 'green',
                width: '100%',
                height: 30,
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 20
            }}>
                <Text style={{
                    fontSize: 17,
                    marginLeft: 20
                }}>
                    Auotomotive Tool & Accessories
                </Text>
                <View style={{
                    width: 90,
                    height: 20,
                    // backgroundColor:'red'
                    marginLeft: 30
                }}>
                    <TouchableOpacity>
                        <Text style={{
                            color: '#ff1493',

                        }}>
                            See all items
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                width: '100%',
                height: 1,
                backgroundColor: 'black',
                marginTop: 15
            }}>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/cars1.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/cars2.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20
            }}>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 40

                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/car3.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>

                </View>
                <View style={{
                    width: 120,
                    height: 200,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    marginLeft: 59
                }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/mobile3.jpg')} style={{
                            resizeMode: 'contain',
                            width: 200,
                            height: 200
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            
        
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    }
})