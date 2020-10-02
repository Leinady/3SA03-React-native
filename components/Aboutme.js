import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet ,ImageBackground ,View, Text } from "react-native";

const supportedURL = "https://github.com/Leinady/3SA03-React-native";
const supported01URL = "https://www.youtube.com/watch?v=dRaT2Je0NOE";

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
       
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };


const App = () => {
    return (
      <View style={style.container}>
        <ImageBackground source = {require('../assets/ER.jpg')} style = {style.pic}> 
        <Text style = {style.btext}> Thirapat Pathan </Text>
            <OpenURLButton url={supportedURL}>Open Git URL</OpenURLButton>
            <OpenURLButton url={supported01URL}>Open youtube URL</OpenURLButton>
        </ImageBackground>
      </View>
    );
  };

export default App;
   
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
    container: {  
        justifyContent: "center", 
        alignItems: "center" },
});