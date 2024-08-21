import { StyleSheet, Text, View, Button } from 'react-native'
import React, { act, useReducer } from 'react'

const reducer = (state,action) => {
    switch(action.type){
        case 'increment' :
            return {...state, count : state.count + action.payload}
        case 'decrement' :
            return {...state, count : state.count - action.payload}
        default :
            return state
    }
}

//state == {count : 0}
//action == {type : 'increment' || type : 'decrement' , payload}

export default function CounterScreenV2() {
    const [state, dispatch] = useReducer(reducer,{count : 0})
  return (
    <View>
      <Button
      title='Arttır'
      onPress={() => {
        dispatch({type : 'increment', payload : 1})
      }}></Button>
      <Button
      title='Azalt'
      onPress={() => {
        dispatch({type : "decrement" , payload : 1})
      }}
      />
      <Text>Sayı : {state.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})