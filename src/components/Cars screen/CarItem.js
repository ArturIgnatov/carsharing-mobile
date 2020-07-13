import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet, Image } from 'react-native'
import {THEEM} from '../../theem'
import { CONSTANTUS} from '../../constatus'
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler'
import { markReplace, modelReplace, convertPrice } from '../../utils/functions'

export const CarItem = ({ car, navigate}) => {
	const { name, priceMin, priceMax } = car
	const { path } = car.thumbnail
	const setAuto = (car) => {
		navigate('Additionally', {...car})
	}
	return(
			<View style={styles.wrapper}>
				<TouchableOpacity
					onPress={() => setAuto(car)}
					activeOpacity={0.6}
				>
					<View style={styles.item}>
						<View style={styles.textBox}>
						<Text style={styles.name}>{markReplace(name)}</Text>
						<Text style={{ ...styles.name, marginBottom: 3}}>{modelReplace(name)}</Text>
						<Text style={styles.price}>{convertPrice(priceMin)} - {convertPrice(priceMax)}  ₽</Text>
						</View>
						<Image style={styles.img} source={{ uri: CONSTANTUS.uri + path }}/>
					</View>
				</TouchableOpacity>
			</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		elevation: 3,
		marginVertical: 5,
		borderRadius: 10,
		marginHorizontal: 10,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		paddingVertical: 20,
		paddingLeft: 15,
		paddingRight: 5,
		// elevation: 3,
		borderRadius: 10
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