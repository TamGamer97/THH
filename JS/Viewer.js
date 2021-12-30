import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, TouchableNativeFeedback, ScrollView } from 'react-native';

import {vw, vh} from 'react-native-expo-viewport-units'

import backIcon from '../Images/backIcon.png'

export default function App({route, navigation})
{
    // console.log(route)
    const {title, pageFrom} = route.params


    const Content = () => {
        
        const fileWebIDs = {
            // General Conditions/Points
            'Digestive System': '1Mysb21GNAZ02xA5I7ecmL_7cciix5FHI',
            'Abdominal Pain': '1OxHx8twRblcqaLFpg0t2cdCMLzSsruCp',
            'Angiospasm & Arteriosclerosis': '10IJb3EWURgWEOPwH6fgl9cjT6v6MK_GV',
            'Amenorrhea': '1xuRO54HY2Jx-M0-hetXoi388CJfdhu4y',
            'Anal Fistula': '1FisjvmRfPs3Os3FpmKqH-zgF4jCxeHYN',
            'Brownish Vaginal secretions': '1PQkgfFRi96VkAf1furSmLQCOsxzwRL_F',
            'Chronic coughs and lung diseases': '1zT72SYIxKVsl3ikULBs4nFe3ygS9gtoa',
            'Chronic constipation': '14TLcEmwn4o5fyWlBKhMDxh0kv3mF1XZk',
            'Chronic Kidney Disease': '14HPF8QoXaPB2Zrwur-0BVLbOoGBd5aSb',
            'Depression': '1_tiHbu0IRJNF1Ojvq3mz2t7zVqsyryIZ',
            'Diarrhoea': '1U4R2lF3ckPzqTEcgYaoFCPOzhP4GAQZd',
            'Diabetes': '1dwCnngj0AvmYw87yiwrEUBhgWke5PIJQ',
            'Diseases of the eyes': '1gs5RrYSXayMlpalxnrANZj1NFSjshmIi',
            'Elephantiasis': '1_yee4Zdo6GNZa02Xu_P17nmpbE6WMJaD',
            'Epilepsy': '1dwrePOd2nAxUhtJblvKe-GiTAnkGwK_Z',
            'Gastritis': '1FcwyIhOAyvs1OQWF1xu5TrSLygi5lIJM',
            'Gout': '1Cv19dutgq68eU4-IDGVULjXsNpSbmKz5',
            
            'Haemorrhoids': '1SS294zpcKNcFJK5H_Evo78c2wEfm1F5R',
            'Heart Diseases': '1U8QcnQ09JzIVJzqPVg57jfQYU2u7ST-H',
            'Hypertension': 'https://drive.google.com/file/d/18a1hVdGLevaY8kOy-bJFWQDu2QNXIfUT/view?usp=sharing',
            'Involuntary Urination': 'https://drive.google.com/file/d/1W_pF-YspEJT0tVB1Rt0zf7F50q0RpnUy/view?usp=sharing',
            'Irritable Bowel Syndrome': 'https://drive.google.com/file/d/1hPqp977ak9jvIlgcAkwcTHqR4Ms-cAka/view?usp=sharing',
            'Infertility': 'https://drive.google.com/file/d/19Yt53GqJCD7lqefYIswr6U0f0SmaH4uf/view?usp=sharing',
            'Liver & Gall Bladder disease': 'https://drive.google.com/file/d/1LLAUCnP9TPpuYS8xZuBY1mnEGE0T72hr/view?usp=sharing',
            'Migraines': ['1z9Y3UbW5cZqmjVojG8Y2ra-jeawa6wmV', '1W4j5hdobtVT7-9tFZ4TMem9DC7x5WvBg', '16VKHqbNMG0QjUSfmtTuYBfLlSjKcpHyc'], // the one with three
            'Overweight': 'https://drive.google.com/file/d/1fr4MazuK9rJgtp2wQsYHYXOM2uNa8OlM/view?usp=sharing',
            'Oxygen deficiency': 'https://drive.google.com/file/d/14Ufd8HAcbrx0Np0ZjXtbyre6GD0g2uTb/view?usp=sharing',
            'Ovary Stimulation': 'https://drive.google.com/file/d/14SgaloY0IpoF4kWDwH_5YoBB2JuqqmBL/view?usp=sharing',
            'Period Problems': 'https://drive.google.com/file/d/1fLaSFYDWQqAx_gjeFNGqWpQwJNLxTFZ0/view?usp=sharing',
            'Prostate & Erectile dysfunction': 'https://drive.google.com/file/d/12ksp7ecIUFX_zi5oxtCUmiPR7avjqAKC/view?usp=sharing',
            'Poor circulation': 'https://drive.google.com/file/d/1ZV0izGQxMSrOOEz2N1nR7mgAax2A2B8c/view?usp=sharing',
            'Rheumatism': 'https://drive.google.com/file/d/1ntQ-egltv7zfTNd1k14MHHfTpaIGZMXX/view?usp=sharing',
            'Sciatic Pain': 'https://drive.google.com/file/d/19Etjo8RTil1BUtsQEfwdeIMLVshgkTJV/view?usp=sharing',
            'Thyroid': 'https://drive.google.com/file/d/1mc9XkG_b0ctE4-eBOyDAs3woOGr23hEQ/view?usp=sharing',
            'Underweight': 'https://drive.google.com/file/d/1exB5AcC0YGkIJn-hZ8heQcvyQVQEWAU3/view?usp=sharing',
            'Uterine Issues': 'https://drive.google.com/file/d/1PGwgaIrn2L7DkxjGX1Q-ePXk4v_3OKem/view?usp=sharing',
            'Varicose veins': 'https://drive.google.com/file/d/1PLBdGFSVMKa8PGvdi5jkSf9naAhDuNT0/view?usp=sharing',
            'Vaginal Bleeding': 'https://drive.google.com/file/d/1NCu3L8MK0VyyN_xPCJcHBS1U2CsRuui-/view?usp=sharing',
            'Varicocele': 'https://drive.google.com/file/d/1q3-6jBoru7PAVCBbMkfPYnllACoInJHJ/view?usp=sharing',

            // Body Systems
            'Digestive system': '1Mysb21GNAZ02xA5I7ecmL_7cciix5FHI',
            'Endocrine system': '1i_eXh1Isw1qH_kCuTufiGo1BmH9L0IGw',
            'Reproductive system': '169TW_gP8O7TLuSS9_H-S1wlET5SvukjU',
            'Musculoskeletal system': '1e0lwJ5wIbLg6XNqIG6_b_Z4z7h_AbUkM',
            'Nervous system': '1O9FR3zk9KB0cYnpwoo21Aq6cG-0X0_FT',
            'Respiratory & Circulatory system': '1iQEi-wINyLM6O2DG3FUockM_rh-84xRZ',
        }
        
        let urlID = fileWebIDs[title]
        
        if(title == 'Migraines')
        {
            return <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ScrollView>
                        <Image source={ {uri: 'https://drive.google.com/uc?id=' + urlID[0]} } style={{width: vw(80), height: vh(80) , position: 'relative', top: 50,}} resizeMode='contain' />
                        <Image source={ {uri: 'https://drive.google.com/uc?id=' + urlID[1]} } style={{width: vw(80), height: vh(80) , position: 'relative', top: -80,}} resizeMode='contain' />
                        <Image source={ {uri: 'https://drive.google.com/uc?id=' + urlID[2]} } style={{width: vw(80), height: vh(80) , position: 'relative', top: -140,}} resizeMode='contain' />
                    </ScrollView>
                </View>
            </>
        }

        try{
            // https://drive.google.com/file/d/18a1hVdGLevaY8kOy-bJFWQDu2QNXIfUT/view?usp=sharing
            urlID = urlID.split('https://drive.google.com/file/d/')[1]
            urlID = urlID.split('/view?usp=sharing')[0]
        }catch {urlID = fileWebIDs[title]}


        const url = "https://drive.google.com/uc?id=" + urlID

        console.log(url)


        if(fileWebIDs[title])
        {
            return <>
                <View style={{justifyContent: 'center', alignItems: 'center', height: vh(100)}}>
                    <Image source={ {uri: url} } style={{width: vw(100), height: vh(100)}} resizeMode='contain' />
                </View>
            </>
        }else{
            console.log('Source Not Found')
            return <>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, textAlign: 'center', color: 'black', marginTop: 100}}  >Not Found</Text>
                </View>
            </>
        }
    }

    return(
        <View>

            <View style={{position: 'absolute', top: 0, backgroundColor :'#FAFAFA', width:vw(100), height: 80, zIndex: 5000 }}>
                <Text style={{textAlign: 'center', marginTop: 35, fontSize: 20, fontWeight: 'bold', color: '#424242'}} >{title} </Text>
                <TouchableNativeFeedback onPress={() => {navigation.navigate(pageFrom)}}><Image style={{width: 30, height: 30, marginLeft: 20, marginTop: -30}} source={backIcon} /></TouchableNativeFeedback>
            </View>

            <Content/>

        </View>
    )
}