import React, { useState, useEffect } from 'react'
import { StyleSheet, Keyboard} from 'react-native'
import { View, Button, Text } from 'native-base';
import { Map } from '../components/Location screen/Map'
import { InputGroup } from '../components/Location screen/InputGroup';
import { THEEM } from '../theem'
import { Autocomplete } from '../components/Location screen/Autocomplete';
import { connect } from 'react-redux';
import { setCityState, setPointState } from '../store/reducer/action-creators';
import { changeNoGeoLocationCity } from '../store/reducer/data-action';

const LocationScreen = ({ 
	navigation, 
	order, 
	cities, 
	points, 
	setCityState, 
	setPointState, 
	pointMap,
	location,
	changeNoGeoLocationCity 
}) => {			

	const [autocomplete, setAutocomplete ] = useState(false)
	const [autoType, setAutoType] = useState('city')
	const [city, setCity] = useState( order.cityId.name || '')
	const [point, setPoint] = useState(order.pointId?.name || '')
	
	// if needed autocompleet this points next screen, !comment

	// useEffect(() => {
	// 	if (order.cityId.name) {
	// 		setAutocomplete(true)
	// 		setAutoType('point')
	// 	}
	// }, [])

	// Select
	const changeCity = (id, city) => {
		setCity(city)
		changeNoGeoLocationCity(city)
		setCityState(id, city)
		setAutoType('point')
		setAutocomplete(false)
		Keyboard.dismiss()
	}
	const changePoint = (id, point) => {
		setPoint(point)
		setPointState(id, point)
		setAutocomplete(false)
		Keyboard.dismiss()
	}
	// Autocomplete
	const filteredCities = cities.filter(el => (
		el.name.toUpperCase().indexOf(city.toUpperCase()) !== -1
	))
	const filteredPoint = points.filter(el => (
		el.address.toUpperCase().indexOf(point.toUpperCase()) !== -1
	))
	
	return (
		<View style={styles.wrapper}>
			<Map 
				location={location}
				pointMap={pointMap}
				setAutocomplete={setAutocomplete}
				setCity={setCity}
				setCityState={setCityState}
				setPoint={setPoint}
				setPointState={setPointState}
				filteredPoint={filteredPoint}
			/>
			<View style={styles.content}>
				{
					autocomplete 
						? <Autocomplete 
								cities={filteredCities} 
								points={filteredPoint}
								type={autoType}
								city={city}
								changeCity={changeCity}
								changePoint={changePoint}
							/>
						: null
				}
				<InputGroup
					city={city}
					order={order}
					point={point}
					setCity={setCity}
					setPoint={setPoint}
					setCityState={setCityState}
					setPointState={setPointState}
					setAutoType={setAutoType} 
					setAutocomplete={setAutocomplete}
					// locationName={locationName}
				/>
				<Button 
					full
					disabled={!order.cityId?.id || !order.pointId?.id } 
					style={!order.cityId?.id || !order.pointId?.id ? { ...styles.button, ...styles.disabled } : { ...styles.button }} 
					onPress={() => navigation.navigate('Cars')}
				>
					<Text>Выбрать модель</Text>
				</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	content: {
		padding: 20,
		flex: 1,
		width: '100%',
		justifyContent: 'space-evenly',
		position: 'absolute',
		bottom: 0
	},
	disabled: {
		backgroundColor: THEEM.GRAY_COLOR
	},
	button : {
		borderRadius: 10,
		backgroundColor: THEEM.GREEN_COLOR
	}
})

const mapStateToProps = (state) => ({
	cities: state.root.cities,
	points: state.root.points,
	order: state.root.order,
	pointMap: state.map.points,
	location: state.map.location,
	locationName: state.map.location
})

export default connect(mapStateToProps, { 
	setCityState, 
	setPointState, 
	changeNoGeoLocationCity 
})(LocationScreen)