import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base';
import { MainCard } from '../components/Main screen/MainCard';
import { MainInfo } from '../components/Main screen/MainInfo';
import { connect } from 'react-redux';
import { loadingData, initialCity, changeNoGeoLocationCity } from '../store/reducer/data-action';
import { AppModal } from '../components/AppModal';
import { setCityState, confirmCity } from '../store/reducer/action-creators';
import * as Location from 'expo-location'


const MainScreen = ({ 
	navigation, 
	cars, 
	loadingData, 
	cities, 
	setCityState, 
	order, 
	locationCity, 
	initialCity, 
	confirmCity,
	locationLatLng,
	changeNoGeoLocationCity
}) => {

	const [isModalVisible, setModalVisible] = useState(false)	
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestPermissionsAsync()
			if (status !== 'granted') {
				console.log('Error setting location');
			}		
			let location = await Location.getCurrentPositionAsync({})
			let lat = location.coords.latitude
			let lng = location.coords.longitude
			initialCity(lat, lng)
			setModalVisible(true)
		})()
		loadingData()
	}, [])
	
	return(
		<View style={styles.wrapper}>
			<AppModal
				locationCity={locationCity}
				isModalVisible={isModalVisible}
				setModalVisible={setModalVisible}
				cities={cities}
				setCityState={setCityState}
				confirmCity={confirmCity}
				changeNoGeoLocationCity={changeNoGeoLocationCity}
			/>
			<MainInfo
				order={order}
				locationCity={locationCity}
				setModalVisible={setModalVisible}
			/>
			<MainCard
				locationCity={locationCity}
				navigate={navigation.navigate}
				cars={cars}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingHorizontal: 20,
	},
})

const mapStateToProps = (state) => ({
	cars: state.root.cars,
	cities: state.root.cities,
	order: state.root.order,
	locationCity: state.map.location.cityName,
	locationLatLng: state.map.location
})

export default connect(
	mapStateToProps, 
	{ 
		loadingData, 
		setCityState, 
		initialCity, 
		confirmCity, 
		changeNoGeoLocationCity 
	})(MainScreen)