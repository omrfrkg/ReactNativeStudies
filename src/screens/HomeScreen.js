import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kurslarım"
        onPress={() => navigation.navigate('Kurslarım')}
      />
      <Button
      title='Kurs Bilgilerim'
      onPress={() => navigation.navigate('Kurs Bilgilerim')}></Button>
      <Button
      title='Sayaç Uygulaması'
      onPress={() => navigation.navigate('Sayaç Uygulaması')}></Button>
      <Button
      title='Kutu Uygulaması'
      onPress={() => navigation.navigate('Kutu Uygulaması')}></Button>
      <Button
      title='Sayaç Uygulamasıv2'
      onPress={() => navigation.navigate('Sayaç Uygulamasıv2')}></Button>
      <Button
      title='Kutu Uygulamasıv2'
      onPress={() => navigation.navigate('Kutu Uygulamasıv2')}></Button>
      <Button
      title='Şifre Ekranı'
      onPress={() => navigation.navigate('Şifre Ekranı')}></Button>
      <Button
      title='Tasarım Ekranı'
      onPress={() => navigation.navigate('Tasarım Ekranı')}></Button>
      <Button
      title='Tasarım Ödevi'
      onPress={() => navigation.navigate('Tasarım Ödevi')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})