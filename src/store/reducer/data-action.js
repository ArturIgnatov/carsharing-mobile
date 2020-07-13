import { mainAPI, geoAPI } from "../../api"
import { SET_LOADED_CARS, SET_ERROR, SET_LOADED_CITIES, SET_LOADED_POINTS, SET_LOCATION, SET_LOADED_CATEGORIES, SET_LOADED_RATES } from "./types"

export const loadingData = () => dispatch => {
	mainAPI.getCars()
	.then(response => {
		dispatch({ type: SET_LOADED_CARS, payload: response.data.data })
	})
	.catch(error => dispatch({ type: SET_ERROR, error: error.data }))

	mainAPI.getCities()
	.then(response => {
		dispatch({ type: SET_LOADED_CITIES, payload: response.data.data })
	})
	.catch(error => dispatch({ type: SET_ERROR, error: error.data }))

	mainAPI.getPoints()
	.then(response => {
		dispatch({ type: SET_LOADED_POINTS, payload: response.data.data })
	})
	.catch(error => dispatch({ type: SET_ERROR, error: error.data }))

	mainAPI.getCategories()
	.then(response => {
		dispatch({ type: SET_LOADED_CATEGORIES, payload: response.data.data })
	})
	.catch(error => dispatch({ type: SET_ERROR, error: error.data }))

	mainAPI.getRates()
	.then(response => {
		dispatch({type: SET_LOADED_RATES, payload: response.data.data})
	})
	.catch(error => dispatch({ type: SET_ERROR, error: error.data }))
}

export const initialCity = (lat, lng) => dispatch => {
	geoAPI.getCityFromLatLng(lat, lng)
	.then(response => {
		const city = response.results[0].address_components.find(el => el.types[0] === 'administrative_area_level_2').long_name.replace(/город /g, '')
		dispatch({ 
			type: SET_LOCATION,  
			payload: {
				cityName: city,
				latitude: lat, 
				longitude: lng 
			},
		})
	})
}
export const changeNoGeoLocationCity = (city) => dispatch => {
	geoAPI.getCity(city)
	.then(response => {
		const { lat, lng } = response.results[0].geometry.location
		dispatch({
			type: SET_LOCATION,
			payload: {
				cityName: city,
				latitude: lat,
				longitude: lng,
			}
		})
	})
}