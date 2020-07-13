import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet, Switch } from 'react-native'
import { THEEM } from '../../theem'

export const SwitchRow = ({ id, text, active, pressSwitch , price}) => {
	return(
		<View style={styles.wrapper}>
			<Switch
				style={styles.switch}
				trackColor={{ false: '#767577', true: '#0FA453' }}
				thumbColor={active ? THEEM.GREEN_COLOR : '#f4f3f4'}
				ios_backgroundColor="#3e3e3e"
				onValueChange={() => pressSwitch(id)}
				value={active}
			/>
			<Text
				style={active ? styles.activeText : styles.text} 
				onPress={() => pressSwitch(id, price)}
			>
				{text}, {price}р 
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	text:{
		marginLeft: 10,
		color: THEEM.GRAY_COLOR,
		fontSize: 17
	},
	activeText: {
		color: THEEM.BLACK_COLOR,
		marginLeft: 10,
		fontSize: 17
	},
	switch: {
		transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
	},
})