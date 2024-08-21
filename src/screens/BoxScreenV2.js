import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorChange from '../../components/ColorChange'
import { useReducer } from 'react'

const reducer = (state,action) => {
    switch(action.type){
        case 'ChangeRed' : 
            return (state.red + action.payload > 255 || action.red + action.payload < 0) ? state : {...state, red : state.red + action.payload} 
        case 'ChangeGreen' :
            return (state.green + action.payload > 255 || action.green + action.payload < 0) ? state : {...state, green : state.green + action.payload}
        case 'ChangeBlue' : 
            return (state.blue + action.payload > 255 || action.blue + action.payload < 0) ? state : {...state, blue : state.blue + action.payload}

    }
}

export default function BoxScreenV2() {
  const [state, dispatch] = useReducer(reducer,{ red : 0, green : 0, blue : 0}) 
  const {red, green, blue} = state 
  return (
    <View>
      <ColorChange color={"Kırmızı"} 
                   onIncrease={() => dispatch({type : 'ChangeRed', payload : 20})}
                   onDecrease={() => dispatch({type : 'ChangeRed', payload : -20})}></ColorChange>
      <ColorChange color={"Yeşil"}
                   onIncrease={() => dispatch({type : 'ChangeGreen', payload : 20})}
                   onDecrease={() => dispatch({type : 'ChangeGreen', payload : -20})}></ColorChange>
      <ColorChange color={"Mavi"} 
                   onIncrease={() => dispatch({type : 'ChangeBlue', payload : 20})}
                   onDecrease={() => dispatch({type : 'ChangeBlue', payload : -20})}></ColorChange>
      <View
        style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>
  )
}

const styles = StyleSheet.create({})