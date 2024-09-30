import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor:'#f0f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888',

    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8231',

    },
    // button que vai oculpar duas posicao
    buttonDouble:{
        width: (Dimensions.get('window').width /4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4 ) * 3,

    }
})

export default props =>{
    //  Array
    const stylesButton = [styles.button];
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.trile)  stylesButton.push(styles.buttonTriple)
    if (props.opeartion) stylesButton.push(styles.operationButton)   


        // chamar uma func 
   return (
     <TouchableHighlight onPress={() => props.onClick(props.label)}> 
        <Text style={stylesButton}>{props.label}</Text>
     </TouchableHighlight>
   );
}