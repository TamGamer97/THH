import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, TouchableNativeFeedback, ScrollView } from 'react-native';
import {vw, vh} from 'react-native-expo-viewport-units'

import menuIcon from '../Images/hamburguricon.png'
import addicon from '../Images/addicon.png'

import ListItem from '../JS/ListItem'

export default function App({navigation})
{
    function goViewer(title)
    {
        // console.log(title)
        navigation.navigate('Viewer', {title: title, pageFrom: 'Body Systems'})
    }
    return(
        <View>
           <View style={{position: 'absolute', top: 0, backgroundColor :'#FFFFFF', width:vw(100), height: 80 }}>
                <Text style={{textAlign: 'center', marginTop: 35, fontSize: 20, fontWeight: 'bold', color: '#424242'}} >Body Systems</Text>
                {/* <TouchableNativeFeedback><Image style={{width: 30, height: 20, marginLeft: 20, marginTop: -20}} source={menuIcon} /></TouchableNativeFeedback> */}
                {/* <TouchableNativeFeedback><Image style={{width: 20, height: 20, left: 310, marginTop: -20}} source={addicon} /></TouchableNativeFeedback> */}
            </View>

            <View style={{position: 'relative', top: 100, justifyContent: 'center', alignItems:'center'}}>
                <ScrollView>
                    <ListItem title={'Digestive system'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Endocrine system'} subtitle={""} func={goViewer} />
                    <ListItem title={'Reproductive system'} subtitle={""} func={goViewer} />
                    <ListItem title={'Musculoskeletal system'} subtitle={""} func={goViewer} />
                    <ListItem title={'Nervous system'} subtitle={""} func={goViewer} />
                    <ListItem title={'Respiratory & Circulatory system'} subtitle={""} func={goViewer} />
                </ScrollView>
            </View>

        </View>
    )
}