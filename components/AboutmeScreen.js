import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Aboutme from './Aboutme'

export default function WeatherScreen() {    
    return (
        <View>
            <Aboutme />
            <StatusBar style="auto" />
        </View>
    );
}