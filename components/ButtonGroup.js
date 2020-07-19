import React from "react";
import { StyleSheet,View, Text, TouchableOpacity,Dimensions } from "react-native";
import { CHOICES } from "../gameChoices";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


function ButtonGroup(props) {
	return CHOICES.map((item) => {
		return (
            <TouchableOpacity style={styles.btnItem} 
                            onPress={()=>props.onPressButton(item.name)}
                            key={item.name}>
				<Text style={styles.textBtn}>{item.name}</Text>
			</TouchableOpacity>
		);
	});
}
const styles = StyleSheet.create({
    btnItem:{
        paddingHorizontal:120,
        backgroundColor:'#218c74',
        marginVertical:15,
        paddingVertical:15,
        borderRadius:30,
        shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.38,
		shadowRadius: 6.84,

		elevation:11,
    },
    textBtn:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
       
    }
})
export default ButtonGroup;
