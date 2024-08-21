import { StyleSheet, Text, View, Button, FlatList} from 'react-native'
import React,{useState} from 'react'

export default function BoxScreen() {
  //useStateSnippet
  const [colors, setColors] = useState([])
  const randomColor = () => {
    const red = Math.floor(Math.random()*256) // 0 - 256 arası değer
    const green = Math.floor(Math.random()*256) // 0 - 256 arası değer
    const blue = Math.floor(Math.random()*256) // 0 - 256 arası değer
    return `rgb(${red},${green},${blue})`
  }
  return (
    <View>
      <Button 
        title='Kutu Ekle' 
        onPress={() => {
          setColors([...colors, randomColor()]) // üstüne eklemesi için özel yapı
      }}>
      </Button>

      <FlatList data={colors}
                renderItem={({item}) => {return (<View style={{height:150, width:150, backgroundColor : item, marginVertical:20}}></View>)}}>
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})