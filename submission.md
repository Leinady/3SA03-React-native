# 3SA03-React-native

ติดตั้ง Node.js, Yarn และ Git ได้ผ่าน Chocolatey ผ่าน Command Prompt

>> choco install nodejs
>> choco install yarn
>> choco install git

สร้างโครงร่างโปรเจ็คสำหรับการพัฒนา React Native ด้วย expo (ให้เลือก template เป็น blank)

>> expo init wt-app
>> cd wt-app

ทำการรันโปรแกรมโปรแกรมขึ้นมา

>> yarn start

ติดตั้ง Library ผ่าน Command Prompt ด้วยคำสั่ง

>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>> yarn add @react-navigation/stack @react-navigation/native

ทำการ import ทุกครั้งที่ใช้งาน Navigation

>> import { NavigationContainer } from '@react-navigation/native';
>> import { createStackNavigator } from '@react-navigation/stack';
