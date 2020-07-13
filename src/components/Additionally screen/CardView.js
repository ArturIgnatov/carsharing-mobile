import React from 'react'
import { View } from 'native-base'
import { StyleSheet } from 'react-native'

export const CardView = ({ children, style }) => {
	return <View style={{ ...styles.card, ...style}}>{children}</View>
}

const styles = StyleSheet.create({
	card: {
		paddingHorizontal: 10,
		paddingVertical: 9,
		elevation: 3,
		borderRadius: 5,
		backgroundColor: '#fff',
		marginHorizontal: 10,
		marginBottom: 10
	},
})