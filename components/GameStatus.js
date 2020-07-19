import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function GameStatus(props){
    if(props.result === 'Victory!'){
        return <Text style={styles.textWin}>{props.result}</Text>
    }
    else if(props.result === 'Defeat!'){
        return <Text style={styles.textDefeat}>{props.result}</Text>
    }
    return <Text style={styles.textTie}>{props.result}</Text>;
   // return <Text style={props.result === 'Victory!'? styles.textWin : styles.textDefeat }>{props.result}</Text>
}
 const styles=StyleSheet.create({
    
     textWin:{
         color:'#0652DD',
         fontSize:35,
         fontWeight:'bold', 
     },
     textDefeat:{
        color:'#EA2027',
        fontSize:35,
        fontWeight:'bold', 
    },
    textTie:{
        color:'#FFC312',
        fontSize:35,
        fontWeight:'bold', 
    }
 })
export default GameStatus;