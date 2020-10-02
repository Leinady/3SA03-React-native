import React from 'react';
import { View, Text, Button, StyleSheet,ImageBackground } from 'react-native';

export default function Aboutme(){
     return(
        <View style = {style.atext}>
                <ImageBackground source = {require('../assets/ER.jpg')} style = {style.pic}> 
            <Text style = {style.btext}> Thirapat Pathan </Text>
                </ImageBackground>
        </View>
    );
}

const style = StyleSheet.create ({
    atext :{
       
        alignItems : 'center',
    },
    btext :{
        fontSize : 50, 
        marginTop : 50,
        flexDirection : 'column',
        alignItems : 'center',
    },
    pic :{
        width : '100%',
        height : '100%',
    },
});