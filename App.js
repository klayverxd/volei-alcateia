import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'

export default function App() {
	const [team, setTeam] = useState(
		'- Mauri\n- Lora\n- SamuBalao\n- Frederico\n- Samarao\n- Smalls\n- Manda\n- Kéké'
	)

	const [firstTeam, setFirstTeam] = useState([])

	const handleOnPress = quantidade => {
		console.log('Sorteando.....')
		const teams = team.split('\n')

		while (quantidade > 0) {
			const randomNumber = Math.floor(Math.random() * teams.length)

			const newTeam = firstTeam
			newTeam.push(teams[randomNumber])
			setFirstTeam(newTeam)

			teams.splice(randomNumber, 1)

			quantidade--
		}

		setTimeout(() => {
			console.log(firstTeam)
			setFirstTeam([])
		}, 1200)
	}

	// useEffect(() => {
	// 	console.log({ firstTeam })
	// }, [firstTeam])

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.containerInput}
				onChangeText={setTeam}
				value={team}
			/>
			<TouchableOpacity
				style={styles.containerButton}
				onPress={() => handleOnPress(3)}
			>
				<Text>aqui</Text>
			</TouchableOpacity>
			<Text>sdasdasd</Text>
			{/* <TouchableOpacity
				style={styles.containerButton}
				onPress={() => {
					console.log(firstTeam)
					setFirstTeam([])
				}}
			>
				<Text>aqui2</Text>
			</TouchableOpacity> */}
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerInput: {
		backgroundColor: '#faf',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerButton: {
		backgroundColor: '#faa',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
