import { KeyboardAvoidingViewBase, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function DesingScreen() {
  return (
    <View>
      <View style={styles.mainView}>
            <Text style={styles.newMain}>1</Text>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.mainTextOne}>1</Text>
        <Text style={styles.mainTextTwo}>2</Text>
        <Text style={styles.mainTextThree}>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainView : {
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 20,
        margin : 10,
        //alignItems : 'flex-start' başa alt alta hizala
        //alignItems : 'center' orta alt alta hizala
        //alignItems : 'flex-end', alt alta sona hizalar
        //alignItems : 'center', ortaya hizalar
        //alignItems : 'flex-start',
        //flexDirection : 'row', satır şeklinde hizalar
        //flexDirection : 'row',
        //justifyContent : 'flex-end', en sona çekerek hizalar
        //justifyContent : 'flex-start',
        height : 400
    },
    mainTextOne : {
        borderWidth : 1,
        borderColor : 'red',
        margin : 30,
        padding : 20,
        borderRadius : 20,
        //paddingHorizontal : 20
        //paddingVertical : 20
        //marginVertical : 30
        //marginHorizontal : 30
        //flex : 3
        alignSelf :'flex-end' // sadece verilen elemanı hizalar

    },
    mainTextTwo : {

        borderWidth : 1,
        borderColor : 'red',
        margin : 30,
        padding : 20,
        borderRadius : 20,
        //paddingHorizontal : 20
        //paddingVertical : 20
        //marginVertical : 30
        //marginHorizontal : 30
        //flex : 5
        top : 10,//bottom
        left : 10,//right
        

    },
    mainTextThree : {

        borderWidth : 1,
        borderColor : 'red',
        margin : 30,
        padding : 20,
        borderRadius : 20,
        //paddingHorizontal : 20
        //paddingVertical : 20
        //marginVertical : 30
        //marginHorizontal : 30
        //flex : 2
    


    },

    newMain : {

        borderWidth : 1,
        borderColor : 'red',
        margin : 30,
        padding : 20,
        borderRadius : 20,
        //paddingHorizontal : 20
        //paddingVertical : 20
        //marginVertical : 30
        //marginHorizontal : 30
        //flex : 3
        //alignSelf :'flex-end' // sadece verilen elemanı hizalar
        position : 'absolute',
        top : 0,
        left : 0,
        right : 0,
        bottom : 0,

    }
})