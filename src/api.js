import Axios, * as axios  from 'axios'
import Geocode from 'react-geocode';

const APP_ID = '5e25c641099b810b946c5d5b'

const instance = axios.create({
	baseURL: 'http://api-factory.simbirsoft1.com/api',
	headers: {
		'X-Api-Factory-Application-Id': APP_ID
	}
})

export const mainAPI = {
	getCars () {
		return instance('/db/car')
	},
	getCities () {
		return instance('/db/city')
	},
	getPoints () {
		return instance('/db/point')
	},
	getCategories () {
		return instance('/db/category')
	},
	getRates () {
		return instance('/db/rate')
	}
}
export const orderAPI = {
	postOrder(order) {
		return instance.post('/db/order', order)
	},
	updateOrder(id, status) {
		return instance.put(`/db/order/${id}`, status)
	}
}
Geocode.setApiKey('AIzaSyBzbzAyOD0N9TQYwKwahgQXE_4awH2G3T8')
Geocode.setLanguage('ru')
Geocode.setRegion('ru')

export const geoAPI = {
	getCityFromLatLng(lat, lng) {
		return Geocode.fromLatLng(lat, lng)
	},
	getCity(city) {
		return Geocode.fromAddress(city)
	}
}
