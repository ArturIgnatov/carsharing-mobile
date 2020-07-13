import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const OrderScreen = ({ navigation }) => {
	return (
		<View style={styles.wrapper}>
			<Text>One order completed</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})