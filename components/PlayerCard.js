import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,Image
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


function PlayerCard(props) {
	return (
		<View style={styles.cardColumn}>
			<Text style={styles.textCard}>{props.playerName}</Text>
			<Image
				source={props.choice.image }
				resizeMode="contain"
				style={styles.choiceImage}
			/>
			<Text style={styles.textCard}>{props.choice.name}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	cardColumn: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	choiceImage: {
		width: windowWidth-200,
		height: windowWidth-180,
	},
	textCard:{
		fontSize:20
	}
});
export default PlayerCard;
