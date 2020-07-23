import React, { useState } from 'react'
import moment from 'moment'
import { Text, Button, Root } from 'native-base'
import { StyleSheet,  Vibration, Animated  } from 'react-native'
import { connect } from 'react-redux'
import { THEEM } from '../theem'
import { additionallyStore } from '../store/additionally'
import { SwitchRow } from '../components/Additionally screen/SwitchRow'
import { CardView } from '../components/Additionally screen/CardView'
import { ScrollView } from 'react-native-gesture-handler'
import { RadioGroup } from '../components/Additionally screen/RadioGroup'
import { transformColors, convertPrice } from '../utils/functions'
import { ColorGroup } from '../components/Additionally screen/ColorGroup'
import { CarBox } from '../components/Additionally screen/CarBox'
import { DateGroup } from '../components/Additionally screen/DateGroup'

const AdditionallyScreen = ({ route, navigation , rates}) => {
	const { id, name, thumbnail, colors, priceMin, priceMax, categoryId } = route.params	
	// Transform rates
	const array = rates.map(el => ({
		id: el.id,
		price: el.price,
		name: el.rateTypeId.name,
		unit: el.rateTypeId.unit,
		selected: el.rateTypeId.name === 'Поминутно' ? true : false
	}))
	// state	
	const [additionally, handlerAddytionaly] = useState([...additionallyStore])
	const [rate, handlerRate] = useState(array)
	const [color, handlerColor] = useState(transformColors(colors))
	const [dateFrom, setDateFrom] = useState(new Date())
	const [dateTo, setDateTo] = useState('')
	const [order, setOrder] = useState({
		orderId: { id: '5e26a191099b810b946c5d89' },
		carId: {id: id},
		rateId: { id: '5e26a0d2099b810b946c5d85'},
		isFullTank: false,
		isNeedChildChair: false,
		isRightWheel: false,
		dateFrom: new Date().getTime()
	})
	
	// Press radio button
	const pressRadio = (id) => {
		handlerRate(
			rate.map(el => el.id === id? {...el, selected: true} : {...el, selected: false})
		)
		setOrder({
			...order,
			rateId: { id: rate.find(el => el.id === id).id }
		})
	}
	// Press switch
	const pressSwitch = (id) => {
		const array = additionally.map(el => el.id === id ? { ...el, active: !el.active } : { ...el })
		handlerAddytionaly(
			array
		)
		let obj = {}
		array.forEach(el => obj[el.type] = el.active)
		setOrder({
			...order,
			...obj
		})
	}
	// Press color
	const pressColor = (name) => {
		const array = color.map(el => el.name === name ? { ...el, selected: true } : { ...el, selected: false })
		handlerColor(
			array
		)
		setOrder({
			...order,
			color: array.find(el => el.selected).name
		})
	}
	// Select valid date 
	const handlerDateFrom = (date) => {
		setOrder({
			...order,
			dateFrom: date
		})
	}
	// Select valid date 
	const handlerDateTo = (date) => {
		setOrder({
			...order,
			dateTo: date
		})
	}

	let validatePage = false
	if (order.color && order.dateFrom && order.dateTo) {
		validatePage = true
	}
	
	// Animation shake
	const colorsGroup = new Animated.Value(0)
	const dateGroup = new Animated.Value(0)
	const animationError = (group) => {
		Vibration.vibrate([30, 30, 100, 30])
		Animated.sequence([
			Animated.timing(group, { toValue: 10, duration: 50, useNativeDriver: true }),
			Animated.timing(group, { toValue: -10, duration: 50, useNativeDriver: true }),
			Animated.timing(group, { toValue: 10, duration: 50, useNativeDriver: true }),
			Animated.timing(group, { toValue: 0, duration: 50, useNativeDriver: true })
		]).start();
	}
	const pressButton = () => {
		const validColor = color.find(el => el.selected === true)
		let currentDate = new Date()
		if (!validColor && !dateTo) {
			animationError(colorsGroup)
			animationError(dateGroup)
		}
		else if (!validColor && dateTo) {
			animationError(colorsGroup)
		}
		else if (validColor && !dateTo) {
			animationError(dateGroup)
		}
		else {
			navigation.navigate('Confirmation', { 
				car: {
					path: route.params.thumbnail.path, 
					name: route.params.name
				}, 
				order: {...order, price: Math.ceil(price)},
				duration: {
					days: days,
					hours: hour,
					minutes: minutes
				}
			})
		}
	}

	// Duration dates
	var x = moment(dateFrom)
	var y = moment(dateTo)
	const days = moment.duration(y.diff(x)).days()
	const hour = moment.duration(y.diff(x)).hours()
	const minutes = moment.duration(y.diff(x)).minutes()
	console.log('Разница ' + days + 'д ' + hour + 'ч ' + minutes + 'мин')
	
	// Calculate price
	let price = 0
	let kof = categoryId.name === 'Премиум' ? 1.2 : 1
	let ratePrice = rate.find(el => el.selected).price 
	order.isRightWheel ? price += 1600 : 0
	order.isNeedChildChair ? price += 200 : 0
	order.isFullTank ? price += 500 : 0
	if (ratePrice === 7) {
		dateFrom && dateTo ? price += ((days * 24 * 60) + (hour * 60) + minutes) * 7 * kof + 7 : 0
	}
	else {
		if (dateFrom && dateTo) {
			if (!days && (hour || minutes)) {
				price += ratePrice * kof
			}
			else if (days && (!hour && !minutes)) {
				price += days * ratePrice * kof
			}
			else if(days && (hour >= 0 && minutes >= 0)) {
				price += (days * ratePrice + ratePrice) * kof
			}
			else if (!days && (!hour && ! minutes)){
				price += ratePrice * kof
			}
		}
	}
	const convertedPrice = convertPrice(Math.ceil(price))
	return(
		<Root>
		<ScrollView style={styles.wrapper}>
			<CardView>
				<CarBox
					name={name}
					priceMin={priceMin}
					priceMax={priceMax}
					img={thumbnail.path}
				/>
			</CardView>
			<Animated.View
				style={{ transform: [{ translateX: colorsGroup }] }}
			>
				<CardView>
					<ColorGroup
						colors={color}
						pressColor={pressColor}
					/>
				</CardView>
			</Animated.View>

			<CardView>
				<RadioGroup
					rate={rate}
					pressRadio={pressRadio}
				/>
			</CardView>
			<CardView>
				<Text style={styles.title}>Доп услуги</Text>
				{
					additionally.map(el => (
						<SwitchRow
							key={el.id}
							{...el}
							pressSwitch={pressSwitch}
						/>
					))
				}
			</CardView>
			<Animated.View
				style={{ transform: [{ translateX: dateGroup}]}}
			>
			<CardView>
				<DateGroup
					dateFrom={dateFrom}
					dateTo={dateTo}
					setDateFrom={setDateFrom}
					setDateTo={setDateTo}
					handlerDateFrom={handlerDateFrom}
					handlerDateTo={handlerDateTo}
				/>
			</CardView>
			</Animated.View>
			<Button
				full
				style={validatePage ? styles.button : { ...styles.button, ...styles.disabled }}
				onPress={pressButton}
			>
					<Text uppercase={false} >Итого {convertedPrice} ₽</Text>
			</Button>
		</ScrollView>
		</Root>
	)
}
const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingTop: 10
	},
	title: {
		fontSize: 16,
		color: THEEM.BLACK_COLOR,
		fontWeight: 'bold',
		marginBottom: 10
	},
	button: {
		borderRadius: 10,
		backgroundColor: THEEM.GREEN_COLOR,
		marginHorizontal: 10,
		marginBottom: 10
	},
	disabled: {
		backgroundColor: THEEM.GRAY_COLOR,
	}
})

const mapStateToProps = (state) =>({
	rates: state.root.rates
})
export default connect(mapStateToProps, null)(AdditionallyScreen)
