import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ScrollView } from 'react-native';
import {vw, vh} from 'react-native-expo-viewport-units'



export default function App()
{
    const URLS = [
        'https://drive.google.com/uc?id=1v4qfIQj2EnV3oFRmIlPC_I31qj4_4KI1', // copyright
        'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/56a89b0e27a53e26b160c4f026f6140b-1640723952878/Cupping%20Points.png?__cld_token__=exp=1640745736~hmac=86d01f8a721e206c93f5b5b0d73a851930e08c345699a2a03b70a1e3f5bcd0e3', // about me
    ]
    return(
        <View style={{backgroundColor: '#f2f2f2'}}>

            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView>
                    <Image source={require('../Images/aboutMe.png')} style={{width: vw(100), height: vh(100) , position: 'relative', top: -40,}} resizeMode='contain' />
                    <Image source={ {uri: URLS[0]} } style={{width: vw(100), height: vh(100) , position: 'relative', top: -200,}} resizeMode='contain' />

                </ScrollView>
            </View>

        </View>
    )
}