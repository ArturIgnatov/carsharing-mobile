import React from 'react'
import { StyleSheet, TouchableHighlight, Image } from 'react-native'
import { View, Text,  } from 'native-base'
import { FabApp } from '../components/Fab'
import { THEEM } from '../theem'
import { ScrollView } from 'react-native-gesture-handler'

export const OrdersScreen = ({ navigation }) => {
	const array = new Array(5).fill('a')
	const Item = () => {
		return (
			<View style={styles.item} >
				<View style={styles.header}>
					<Text style={styles.carName}>Hyndai, i30 N</Text>
					<Text style={styles.price}>16 000 ₽</Text>
				</View>
				<View style={styles.content}>
					<View style={styles.info}>
						<View style={styles.number}>
							<Text style={styles.textNumber}>K 761 HA 73</Text>
						</View>
						<Text style={styles.dateTitle}>с</Text>
						<Text style={styles.date}>12.06.2019 12:00</Text>
						<Text style={styles.dateTitle}>по</Text>
						<Text style={styles.date}>12.06.2019 12:00</Text>
					</View>
					<Image style={styles.img} source={require('../../assets/test.png')} />
				</View>
			</View>
		)
	}
	return (
		<View style={styles.wrapper}>
			<ScrollView>
				{
					array.map((el, i) => <Item key={i} />)
				}
			</ScrollView>
			<FabApp/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		marginTop: 10,
	},
	item : {
		width: '95%',
		alignSelf: 'center',
		height: 150,
		marginBottom: 10,
		padding: 15,
		borderRadius: 10,
		backgroundColor: '#fff',
		elevation: THEEM.SHADOW,
		position: 'relative',
		borderLeftColor: THEEM.BLUE_COLOR,
		borderLeftWidth: 20
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	content: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		position: 'relative'
	},
	carName:{
		color: THEEM.BLACK_COLOR,
		fontSize: 22
	},
	price: {
		color: THEEM.BLUE_COLOR,
		fontSize: 16
	},
	info:{

	},
	number:{
		borderRadius: 6,
		padding: 2,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: THEEM.GRAY_COLOR
	},
	textNumber:{
		color: THEEM.BLACK_COLOR,
		fontSize: 14,
	},
	dateTitle:{
		color: THEEM.BLACK_COLOR,
		fontSize: 12,
		fontWeight: 'bold'
	},
	date:{
		fontSize: 12,
		color: THEEM.GRAY_COLOR
	},
	img: {
		width: 200,
		height: 80,
		right: -5,
		bottom: 0,
		position: 'absolute'
	},
})