import { SET_LOADED_CARS, SET_LOADING, SET_ERROR, SET_LOADED_POINTS, SET_LOADED_CITIES, SET_LOADED_RATES, SET_LOADED_CATEGORIES, CHANGE_CITY, CHANGE_POINT, SET_LOCATION, SET_CONFIRM_CITY, SET_CHOOSE_CAR } from "./types";


let initialState = {
	cars: [],
	cities: [],
	points: [],
	categories: [],
	services: [],
	rates: [],
	orders: [],
	order: {
		price: 0
	},
	currentLocation: null,
	isLoading: false,
	error: null,
}

export const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADED_CARS:
			return {
				...state,
				cars: action.payload,
				isLoading: false
			}
		case SET_LOADED_CITIES:
			return {
				...state,
				cities: action.payload
			}
		case SET_LOADED_POINTS:
			return {
				...state,
				points: action.payload
			}
		case SET_LOADED_RATES: 
			return {
				...state,
				rates: action.payload
			}
		case SET_LOADED_CATEGORIES:
			return {
				...state,
				categories: action.payload
			}
		case SET_LOADING:
			return {
				...state,
				isLoading: action.value
			}
		case CHANGE_CITY:
			return {
				...state,
				order: {...state.order, cityId: {id: action.value, name: action.name}}
			}
		case SET_CONFIRM_CITY:
			const city = state.cities.find(el => el.name === action.city)
			return {
				...state,
				order: { ...state.order, cityId: { id: city.id, name: action.city}}
			}
		case CHANGE_POINT: 
			return {
				...state,
				order: {...state.order, pointId: { id: action.value, name: action.name}}
			}
		case SET_CHOOSE_CAR:
			return {
				...state,
				order: {...state.order, carId: {id: action.value }}
			}
		case SET_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		default:
			return state
	}
}
