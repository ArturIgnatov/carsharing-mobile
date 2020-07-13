import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet, Image } from 'react-native'
import { THEEM } from '../../theem'
import { CONSTANTUS } from '../../constatus'
import { convertPrice, modelReplace, markReplace } from '../../utils/functions'

export const CarBox = ({name, priceMin, priceMax, img}) => {
	
	return(
		<View style={styles.wrapper}>
			<View style={styles.textBox}>
				<Text style={styles.name}>{markReplace(name)}</Text>
				<Text style={{ ...styles.name, marginBottom: 3 }}>{modelReplace(name)}</Text>
				<Text style={styles.price}>{convertPrice(priceMin)} - {convertPrice(priceMax)}  ₽</Text>
			</View>
			<Image style={styles.img} source={{ uri: CONSTANTUS.uri + img}}/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textBox: {

	},
	name: {
		fontSize: 17,
		color: THEEM.BLACK_COLOR,
		fontWeight: 'bold',
	},
	price: {
		fontSize: 14,
		color: THEEM.GRAY_COLOR
	},
	img: {
		width: 225,
		height: 100,
	}
})