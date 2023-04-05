import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Oil() {
    return (
        <View style={styles.main}>
            <View style={styles.first}>
                <TouchableOpacity>
                    <Ionicons name="md-arrow-back-circle-outline" size={33} color="black" />
                </TouchableOpacity>
                <View style={styles.love}>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={30} color="black" />
                    </TouchableOpacity>
                    <View style={styles.share}>
                        <TouchableOpacity>
                            <Ionicons name="share-outline" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.second}>
                <View style={styles.cosmetic}>
                    <Text style={styles.textCosmetic}>Cosmetic Oil</Text>
                    <View style={styles.favourite}>
                        <EvilIcons name="star" size={24} color="black" />
                        <Text>4.5</Text>
                    </View>
                </View>
                <View style={styles.favouriteRate}>
                    <Text style={styles.reviews}>(2,000 reviews)</Text>
                </View>
                <View style={styles.lorem1}>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing
                    </Text>
                </View>
                <View>
                    <Text>
                        Lorem ipsum dolor sit amet, consetetur sadipscing
                    </Text>
                </View>
                <View style={styles.moveWalk}>
                    <View style={styles.Walk}>
                    <Entypo name="shop" size={24} color="green" />
                    <Text  style={{paddingLeft:'4%'}}>
                        Walk-In Stores Contact Information
                    </Text>
                    <Ionicons name="arrow-forward" size={24} color="green"style={{paddingLeft:'6%'}} />
                    </View>
                </View>
                <View style={styles.select}>
                    <Text style={styles.greenText}>
                        Select size
                    </Text>
                </View>
                <View style={styles.moveSize}>
                    <View style={{
                        width: 75,
                        height: 50,
                        borderRadius: 17,
                        backgroundColor: 'lightgray',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text>
                            30ml
                        </Text>
                    </View>
                    <View style={{ paddingLeft: '3%' }}>
                        <View style={{
                            width: 75,
                            height: 50,
                            borderRadius: 17,
                            backgroundColor: 'lightgray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // borderWidth: 1,
                            // borderColor: 'white',
                        }}>
                            <Text>
                                40ml
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingLeft: '3%' }}>
                        <View style={{
                            width: 75,
                            height: 50,
                            borderRadius: 17,
                            backgroundColor: 'lightgray',
                            alignItems: 'center',
                            justifyContent: 'center'
                            // borderWidth: 1,
                            // borderColor: 'white',
                        }}>
                            <Text>
                                50ml
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.fin}>
                    <Text style={styles.price}>
                        $10.00
                    </Text>
                    <View style={{ paddingLeft: '5%' }}>
                        <View style={{
                            width: 110,
                            height: 50,
                            borderRadius: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 0.1,
                            borderColor: 'gray',
                            flexDirection: 'row'
                        }}>
                            <MaterialCommunityIcons name="minus" size={24} color="lightgray" />
                            <Text style={{ paddingLeft: '19%', fontWeight: 'bold' }}>
                                1
                            </Text>
                            <TouchableOpacity>
                                <MaterialIcons name="add-box" size={30} color="black" style={{ paddingLeft: '4%' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingLeft: '3%' }}>
                        <View style={{
                            width: 140,
                            height: 50,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 0.1,
                            backgroundColor:'green',
                            borderColor: 'gray',
                            flexDirection:'row'
                        }}>
                           <MaterialCommunityIcons name="shopping" size={20} color="white" />
                           <Text style={{paddingLeft:'17%', color:'white'}}>
                            Add to cart
                           </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    first: {
        marginTop: '14%',
        marginLeft: '5%',
        flexDirection: 'row',
        flex: 1
    },
    love: {
        flexDirection: 'row',
        paddingLeft: '65%',
        flex: 1
    },
    share: {
        paddingLeft: '20%',
        flex: 1
    },
    second: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems: 'center',
    },
    cosmetic: {
        flexDirection: 'row',
        marginTop: '4%'
    },
    favourite: {
        paddingLeft: '42%',
        flexDirection: 'row'
    },
    textCosmetic: {
        fontSize: 20,
        color: 'green'

    },
    favouriteRate: {
        paddingLeft: '69%'
    },
    reviews: {
        fontSize: 12,
        color: 'gray'
    },
    lorem1: {
        paddingTop: '3%'
    },
    Walk: {
        width: 330,
        height: 50,
        borderRadius: 17,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
        alignItems:'center',
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection:'row'
    },
    moveWalk: {
        paddingTop: '4%',
        paddingLeft: '3%'
    },
    select: {
        paddingRight: '69%',
        paddingTop: '3%'
    },
    moveSize: {
        flexDirection: 'row',
        paddingRight: '20%'

    },
    greenText: {
        color: 'green'
    },
    fin: {
        flexDirection: 'row',
        paddingTop: '5%',
        alignItems: 'center',
        paddingRight:'4%'
    },
    price: {
        color: 'green',
        fontSize: 17
    }
})