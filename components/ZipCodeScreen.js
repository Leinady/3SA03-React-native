import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList,TouchableHighlight,StyleSheet, ImageBackground ,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style = {style.background}>
            <Text style = {style.boxplace}>{place}</Text>
            <Text style = {style.boxcode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source = {require('../assets/sky.jpg')} style = {style.pic}>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            <Button
        title = 'Click here !'
        color="#f194ff"
        onPress = {() => navigation.navigate('Aboutme')}/>
            </ImageBackground>
        </View>
    );

}

const style = StyleSheet.create ({
    boxplace : {
       // alignItems : 'flex-start',
        fontSize : 40,
        color :'white'
    },
    boxcode : {
        flexDirection: 'column',
        //alignItems : 'flex-end',
        fontSize : 20,
        color :'white'
    },
    background : {
        flex : 1,
        margin : 20,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    pic :{
        width : '100%',
        height : '100%',
    },
});
