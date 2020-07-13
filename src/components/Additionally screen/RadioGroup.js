import React from 'react'
import { View, Radio, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import {THEEM} from '../../theem'

export const RadioGroup = ({ rate, pressRadio}) => {
	const Row = ({ id, price, name, unit, selected }) => {
		return (
			<View style={styles.row}>
				<Radio
					style={styles.radio}
					color={THEEM.GRAY_COLOR}
					selectedColor={THEEM.GREEN_COLOR}
					selected={selected}
					onPress={() => pressRadio(id)}
				/>
				<Text
					onPress={() => pressRadio(id)} 
					style={selected ? styles.activeText : styles.text}
				>
					{name}, {price} ₽/{unit}
				</Text>
			</View>
		)
	}
	return(
		<View style={styles.wrapper}>
			<Text style={styles.title}>Тариф</Text>
			{
				rate.map(el => <Row key={el.id} {...el}/> )
			}
		</View>
	)
}


const styles = StyleSheet.create({
	wrapper:{

	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	title: {
		fontSize: 16,
		color: THEEM.BLACK_COLOR,
		fontWeight: 'bold',
		marginBottom: 10
	},
	text:{
		fontSize: 17,
		marginLeft: 10,
		color: THEEM.GRAY_COLOR
	},
	activeText: {
		fontSize: 17,
		marginLeft: 10,
		color: THEEM.BLACK_COLOR
	},
	radio: {
		transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
	},
})