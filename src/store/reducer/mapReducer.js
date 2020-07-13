import { LATLNG } from '../cordinatesPoint'
import { SET_LOADED_POINTS, SET_LOCATION } from './types'
import { geoAPI } from '../../api'

let initialState = {
	location: {
		cityName: null
	},
	points: LATLNG
}

export const mapReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADED_POINTS:
			return {
				...state,
				points: action.payload.map(el => ({ pointId: el.id, city: el.cityId.name, cityId: el.cityId.id, surname: el.name.trim(), ...LATLNG.find(obj => obj.point === el.address )}))
			}
		case SET_LOCATION:
			return {
				...state,
				location: action.payload,
			}
		default:
			return state
	}
}
