import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import {GameStatus, PlayerCard,ButtonGroup} from "./components/index"
import {CHOICES} from "./gameChoices";
import {randomComputerChoice,getRoundOutcome} from './group'

import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;
 

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerChoice: {},
			computerChoice: {},
			result:"",
		};
	}
	onPressButton = (playerChoice) => {
		//alert(data);
		const foundChoice = CHOICES.find(
			(choice) => choice.name === playerChoice
		);
		const computerChoice = randomComputerChoice();
		const result= getRoundOutcome(foundChoice.name,computerChoice.name);
		this.setState({
			playerChoice: foundChoice,
			computerChoice: computerChoice,
			result
		});
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.statusWrapper}>
					<GameStatus result={this.state.result}/>
				</View>
				<View style={styles.playerWrapper}>
					<PlayerCard
						playerName="Player"
						choice={this.state.playerChoice}
					/>
					<Text style={{ fontSize: 20 }}>vs</Text>
					<PlayerCard
						playerName="Computer"
						choice={this.state.computerChoice}
					/>
				</View>
				<View style={styles.buttonWrapper}>
					<ButtonGroup onPressButton={this.onPressButton} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: statusBarHeight,
	},
	statusWrapper: {
		flex: 2,
		backgroundColor: "#33d9b2",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.38,
		shadowRadius: 6.84,

		elevation: 11,
	},
	playerWrapper: {
		flex: 8,
		backgroundColor: "#f1f2f6",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonWrapper: {
		flex: 8,

		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#dfe4ea",
	},
});
