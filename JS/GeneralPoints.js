import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, TouchableNativeFeedback, ScrollView  } from 'react-native';
import {vw, vh} from 'react-native-expo-viewport-units'

import menuIcon from '../Images/hamburguricon.png'
import addicon from '../Images/addicon.png'

import ListItem from '../JS/ListItem'

export default function App({navigation})
{
    function goViewer(title)
    {
        // console.log(title)
        navigation.navigate('Viewer', {title:title, pageFrom: 'General Points'})
    }
    return(
        <View>
            <View style={{position: 'absolute', top: 0, backgroundColor :'#FFFFFF', width:vw(100), height: 80 }}>
                <Text style={{textAlign: 'center', marginTop: 35, fontSize: 20, fontWeight: 'bold', color: '#424242'}} >General Points</Text>
                {/* <TouchableNativeFeedback><Image style={{width: 30, height: 20, marginLeft: 20, marginTop: -20}} source={menuIcon} /></TouchableNativeFeedback> */}
                {/* <TouchableNativeFeedback><Image style={{width: 20, height: 20, left: 310, marginTop: -20}} source={addicon} /></TouchableNativeFeedback> */}
            </View>

            <View style={{position: 'relative', top: 100, justifyContent: 'center', alignItems:'center'}}>
                <ScrollView>
                    {/* <ListItem title={'Respiratory System'} subtitle={"Lovely in the Spring."} func={ goViewer } />
                    <ListItem title={'About Me'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Reporductive System'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Endocrine System'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Digestive System'} subtitle={""} func={ goViewer } /> */}

                    <ListItem title={'Abdominal Pain'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Angiospasm & Arteriosclerosis'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Amenorrhea'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Anal Fistula'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Brownish Vaginal secretions'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Chronic coughs and lung diseases'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Chronic constipation'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Chronic Kidney Disease'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Depression'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Diarrhoea'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Diabetes'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Diseases of the eyes'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Elephantiasis'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Epilepsy'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Gastritis'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Gout'} subtitle={""} func={ goViewer } />

                    <ListItem title={'Haemorrhoids'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Heart Diseases'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Hypertension'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Involuntary Urination'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Irritable Bowel Syndrome'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Infertility'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Liver & Gall Bladder disease'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Migraines'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Overweight'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Oxygen deficiency'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Ovary Stimulation'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Period Problems'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Prostate & Erectile dysfunction'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Poor circulation'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Rheumatism'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Sciatic Pain'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Thyroid'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Underweight'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Uterine Issues'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Varicose veins'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Vaginal Bleeding'} subtitle={""} func={ goViewer } />
                    <ListItem title={'Varicocele'} subtitle={""} func={ goViewer } />

                    <ListItem title={''} subtitle={""} func={ goViewer } />
                    <ListItem title={''} subtitle={""} func={ goViewer } />
                    

                </ScrollView>
            </View>

        </View>
    )
}