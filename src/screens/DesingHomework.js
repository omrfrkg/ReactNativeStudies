import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesingHomework() {
  return (
    <View style={{width : '100%',height : '100%'}}>
      <View style={styles.div1}/>
      <View style={styles.div2}/>
      <View style={styles.div3}/>
      <View style={styles.div4}/>
    </View>
  )
}

const styles = StyleSheet.create({
    div1 : {
        backgroundColor : "red",
        width : 100,
        height : 50
    },
    div2 : {
        backgroundColor : "blue",
        width : 100,
        height : 50,
        position : 'absolute',
        top : 0,
        right : 0
       

    },
    div3 : {
        backgroundColor : "green",
        width : 100,
        height : 50,
        position : 'absolute',
        left : 0,
        bottom : 0
    },
    div4 : {
        backgroundColor : "yellow",
        width : 100,
        height : 50,
        position : 'absolute',
        right : 0,
        bottom : 0
    }
})