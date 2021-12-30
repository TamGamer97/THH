import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput,  } from 'react-native';

import {vw, vh} from 'react-native-expo-viewport-units'

export default function App({title, subtitle, func})
{
    if(subtitle)
    {
        return(
            <TouchableOpacity onPress={() => { func(title) }} style={{width: vw(90), height: 60, backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderBottomColor: 'black', marginTop: 10}}>
                <Text style={{fontSize: 20, marginLeft: 5}} >{title}</Text>
                <Text style={{fontSize: 17, opacity: 0.7, marginLeft: 5}} >{subtitle}</Text>
            </TouchableOpacity>
        )
    }else{
        return(
            <TouchableOpacity onPress={() => { func(title) }} style={{width: vw(90), height: 60, backgroundColor: 'white', borderWidth: 1, borderColor: 'white', borderBottomColor: 'black', marginTop: 10}}>
                <Text style={{fontSize: 20, marginTop: 10, marginLeft: 5}} >{title}</Text>
            </TouchableOpacity>
        )
    }
}