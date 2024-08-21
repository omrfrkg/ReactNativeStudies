import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Nav Lib
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Page Import

import HomeScreen from '../FirstReactProject/src/screens/HomeScreen';
import CoursesScreen from '../FirstReactProject/src/screens/CoursesScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import CounterScreenV2 from './src/screens/CounterScreenV2';
import BoxScreenV2 from './src/screens/BoxScreenV2';
import PasswordScreen from './src/screens/PasswordScreen';
import DesingScreen from './src/screens/DesingScreen';
import DesingHomework from './src/screens/DesingHomework';


const Stack = createNativeStackNavigator();
export default function App() {
  //const message = 'Javascript';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Ana Sayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarım" component={CoursesScreen} />
        <Stack.Screen name="Kurs Bilgilerim" component={CoursesInformationScreen} />
        <Stack.Screen name="Sayaç Uygulaması" component={CounterScreen} />
        <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />
        <Stack.Screen name="Sayaç Uygulamasıv2" component={CounterScreenV2} />
        <Stack.Screen name="Kutu Uygulamasıv2" component={BoxScreenV2} />
        <Stack.Screen name="Şifre Ekranı" component={PasswordScreen} />
        <Stack.Screen name="Tasarım Ekranı" component={DesingScreen} />
        <Stack.Screen name="Tasarım Ödevi" component={DesingHomework} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
