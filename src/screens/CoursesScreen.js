import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'



export default function CoursesScreen() {
    const courses = [
        {name : 'Angular',id : 1},
        {name : 'React Js',id : 2},
        {name : 'C#',id : 3},
        {name : 'C Programlama',id : 4},
        {name : 'Bootstrap',id : 5},
        {name : 'Kotlin',id : 6}]
  return (
    <FlatList 
    //horizontal -> yatay hizalamak için
    //showsHorizontalScrollIndicator={false} -> Scroll bar gizlemek için
    data = {courses} 
    keyExtractor={(item) => item.id} 
    renderItem={({item}) => {return <Text style={styles.content}>{item.name}</Text>;}}></FlatList>
  )
}

const styles = StyleSheet.create({
    content : {
        fontSize : 20,
        backgroundColor : 'yellow',
        marginVertical : 10,
        padding : 20,
      },
})