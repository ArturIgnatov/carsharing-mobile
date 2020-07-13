import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps'

export const Map = ({ 
	pointMap, 
	location, 
	setPointState, 
	setPoint, 
	setCity, 
	setCityState,
	setAutocomplete 
}) => {
	const points = pointMap.filter(el => el.city === location.cityName )
	useEffect(() => {
		setLatLng({
			latitude: location.latitude,
			longitude: location.longitude,
			latitudeDelta: 0.4,
			longitudeDelta: 0.4
		})
	}, [location])
	const [latLng, setLatLng] = useState({
		latitude: location.latitude,
		longitude: location.longitude,
		latitudeDelta: 0.4,
		longitudeDelta: 0.4
	})
	const pressMarker= (e, id, point, idCity, city) => {
		setPoint(point)
		setPointState(id, point)
		setCity(city)
		setCityState(idCity, city)
		setLatLng({
			latitude: e.nativeEvent.coordinate.latitude,
			longitude: e.nativeEvent.coordinate.longitude,
			latitudeDelta: 0.09,
			longitudeDelta: 0.09
		})
		setAutocomplete(false)
	}	
	return (
		<MapView
			style={{ width: '100%', height: '100%' }}
			region={{
				...latLng
			}}		
		>
			{
				points.map(el => (
					<Marker	
						key={el.pointId}
						coordinate={{
							latitude: el.latitude,
							longitude: el.longitude,
						}}
						
						title={el.surname}
						image={require('../../../assets/marker.png')}
						// onSelect={() => changePoint(el.pointId, el.point)}
						onPress={(e) => pressMarker(e, el.pointId, el.point, el.cityId, el.city)}
					/>
				))
			}
		</MapView>
	)
}
