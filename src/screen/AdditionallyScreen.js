import React, { useState } from 'react'
import { View, Text, Button, Radio } from 'native-base'
import { StyleSheet, Switch } from 'react-native'
import { connect } from 'react-redux'
import { THEEM } from '../theem'
import { additionallyStore } from '../store/additionally'
import { SwitchRow } from '../components/Additionally screen/SwitchRow'
import { CardView } from '../components/Additionally screen/CardView'
import { ScrollView } from 'react-native-gesture-handler'
import { RadioGroup } from '../components/Additionally screen/RadioGroup'
import { SwitchGroup } from '../components/Additionally screen/SwitchGroup'
import { transformColors } from '../utils/functions'
import { ColorGroup } from '../components/Additionally screen/ColorGroup'
import { CarBox } from '../components/Additionally screen/CarBox'
import { DateGroupe } from '../components/Additionally screen/DateGroup'

const AdditionallyScreen = ({ route, navigation , rates}) => {
	const { id, name, thumbnail, colors, priceMin, priceMax } = route.params	
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
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	// Press radio button
	const pressRadio = (id) => {
		handlerRate(
			rate.map(el => el.id === id? {...el, selected: true} : {...el, selected: false})
		)
	}
	// Press switch
	const pressSwitch = (id) => {
		handlerAddytionaly(
			additionally.map(el => el.id === id ? {...el, active: !el.active} : {...el})
		)
	}
	// Press color
	const pressColor = (name) => {
		handlerColor(
			color.map(el => el.name === name ? { ...el, selected: true } : { ...el, selected: false })
		)
	}
	// test
	const invert = (array) => {
		let obj = {}
		array.forEach(el => obj[el.type] = el.active)
		return obj
	}

	
	const order = {
		orderId: { id: '5e26a191099b810b946c5d89' },
		carId: {id: id},
		rateId: { id: rate.find(el => el.selected === true).id },
		...invert(additionally),
		color: color.find(el => el.selected === true)?.name
	}
	
	return(
		<ScrollView style={styles.wrapper}>
			<CardView>
				<CarBox
					name={name}
					priceMin={priceMin}
					priceMax={priceMax}
					img={thumbnail.path}
				/>
			</CardView>
			<CardView>
				<ColorGroup
					colors={color}
					pressColor={pressColor}
				/>
			</CardView>
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
				{/* <SwitchGroup
					additionally={additionally}
					pressSwitch={pressSwitch}
				/> */}
			</CardView>
			<CardView>
				<DateGroupe/>
			</CardView>
			<Button
				full
				// disabled={locationCity ? false : true}
				// style={locationCity ? styles.button : { ...styles.button, ...styles.disabled }}
				style={styles.button}
				// onPress={() => navigate('Location')}
			>
				<Text uppercase={false} >Итого</Text>
			</Button>
		</ScrollView>
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
})

const mapStateToProps = (state) =>({
	rates: state.root.rates
})
export default connect(mapStateToProps, null)(AdditionallyScreen)
