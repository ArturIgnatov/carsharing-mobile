import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Animated } from 'react-native'
import { View, Text, Button } from 'native-base'
import { connect } from 'react-redux'
import { CONSTANTUS } from '../constatus'
import { THEEM } from '../theem'
import moment, { duration } from 'moment'
import { generateNumber, convertPrice } from '../utils/functions'
import { ConfirmOrder } from '../components/Сonfirmation screen/ConfirmOrder'

export const СonfirmationScreen = ({ route, navigation, order}) => {
	const { path, name} = route.params.car
	const { dateFrom, isFullTank, isNeedChildChair, isRightWheel, price, color } = route.params.order
	const { days, hours , minutes } = route.params.duration
	
	
	const validate = (number, unit) => {
		return number ? number + unit : ''
	}
	const duration = validate(days, 'д ') + validate(hours, 'ч ') + validate(minutes, 'мин ')	
	const date = moment(dateFrom).format('DD.MM.YYYY') + ' ' + moment(dateFrom).format('HH:mm')
	const number = generateNumber(order.cityId.name)
	const shake = new Animated.Value(0)
	const runAnimation = () => {
		Animated.sequence([
			Animated.timing(shake, { toValue: 10, duration: 50, useNativeDriver: true }),
			Animated.timing(shake, { toValue: -10, duration: 50, useNativeDriver: true }),
			Animated.timing(shake, { toValue: 10, duration: 50, useNativeDriver: true }),
			Animated.timing(shake, { toValue: 0, duration: 50, useNativeDriver: true }),
			Animated.timing(shake, { toValue: 0, duration: 3000, useNativeDriver: true })
		]).start(() => runAnimation());
	}

	const [isModalVisible, setIsModalVisible] = useState(false)
	const confirmOrder = () => {
		console.log({ ...order, ...route.params.order})
		setIsModalVisible(false)
	}
	useEffect(() => {
		runAnimation()
	})
	const Row = ({title, text}) => {
		return (
			<View style={styles.textRow}>
				<Text style={styles.title}>{title} </Text>
				<Text style={styles.text}>{text} </Text>
			</View>
		)
	}
	return(
		<View style={styles.wrapper}>
			<Animated.View
				style={{ transform: [{ translateX: shake }] }}
			>
				<View style={styles.warning}>
					<Text style={{...styles.textWarning, fontWeight: 'bold'}}>Внимание!</Text>
					<Text style={styles.textWarning}>Перед заказом обязательно проверьте свой заказ на корректность!</Text>
				</View>
			</Animated.View>
			<View style={styles.card}>
				<Text style={styles.name}>{name}</Text>
				<View style={styles.number}>
					<Text style={styles.textNumber}>{number}</Text>
				</View>
				<Row title={'Цвет'} text={color} />
				{
					isFullTank
						? <Row title={'Топливо'} text={'100%'} />
						: null
				}
				{
					isNeedChildChair
						? <Row title={'Детское кресло'} text={'да'} />
						: null
				}
				{
					isRightWheel
						? <Row title={'Правый руль'} text={'да'} />
						: null
				}
				<Row title={'Длительность аренды'} text={duration} />
				<Row title={'Доступна с'} text={date} />
				<Image style={styles.img} source={{uri: CONSTANTUS.uri + path}} />
				<Text style={styles.price}>Цена: {convertPrice(price)} ₽</Text>
			</View>
			<Button
				full
				style={styles.button}
				onPress={() => setIsModalVisible(true)}
			>
				<Text uppercase={false} >Заказать</Text>
			</Button>
			<ConfirmOrder
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				confirmOrder={confirmOrder}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	warning: {
		width: '100%',
		elevation: 2,
		marginBottom: 20,
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		borderRadius: 10,
	},
	textWarning: {
		color: THEEM.ORANGE_COLOR,
		textAlign: 'center'
	},
	card: {
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 30,
		backgroundColor: '#fff',
		borderRadius: 10,
		elevation: 2,
		marginBottom: '20%',
		borderTopColor: THEEM.GRAY_COLOR,
		borderTopWidth: 9,
		// borderBottomColor: THEEM.GRAY_COLOR,
		// borderBottomWidth: 9
	},
	status: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: THEEM.GREEN_COLOR
	},
	name: {
		color: THEEM.BLACK_COLOR,
		fontSize: 36,
		marginBottom: 20
	},
	number: {
		width: 95,
		borderRadius: 6,
		padding: 2,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: THEEM.GRAY_COLOR,
		marginBottom: 10
	},
	textNumber: {
		color: THEEM.BLACK_COLOR,
		fontSize: 14,
	},
	textRow: {
		flexDirection: 'row',
		marginBottom: 5
	},
	title: {
		color: THEEM.BLACK_COLOR,
		fontSize: 14,
		fontWeight: 'bold'
	},
	text: {
		color: THEEM.BLACK_COLOR,
		fontSize: 14,
		fontFamily: 'roboto-light'
	},
	img: {
		marginTop: 20,
		width: 250,
		height: 100,
		alignSelf: 'flex-end',
		right: -15
	},
	price: {
		fontSize: 20,
		color: THEEM.BLACK_COLOR,
		fontWeight: 'bold',
		paddingTop: 30
	},
	button: {
		width: '100%',
		borderRadius: 10,
		backgroundColor: THEEM.GREEN_COLOR,
		marginHorizontal: 20,
		position: 'absolute',
		bottom: 15
	},
})


const mapStateToProps = (state) => ({
	order: state.root.order
})

export default connect(mapStateToProps, null)(СonfirmationScreen)