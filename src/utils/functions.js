export const transformColors = (array) => {
	const colorsRGB = array.map(el => {
		if (el === 'синий') {
			return { rgb: '#123FDF', selected: false , name: el }
		}
		else if (el === 'серый') {
			return { rgb: '#828282', selected: false, name: el }
		}
		else if (el === 'голубой') {
			return { rgb: '#2D9CDB', selected: false, name: el }
		}
		else if (el === 'черный') {
			return { rgb: '#333333', selected: false, name: el}
		}
		else if (el === 'белый') {
			return { rgb: '#EBE5E5', selected: false, name: el }
		}
		else if (el === 'красный') {
			return { rgb: '#EB5757', selected: false, name: el }
		}
		else if (el === 'оранжевый') {
			return { rgb: '#F2994A', selected: false, name: el }
		}
		else if (el === 'зеленый') {
			return { rgb: '#0EC261', selected: false, name: el }
		}
		else if (el === 'серебро') {
			return { rgb: '#C2C2C2', selected: false, name: el }
		}
		else if (el === 'желтый') {
			return { rgb: '#E1E450', selected: false, name: el}
		}
	})
	return colorsRGB
}

export const convertPrice = (price) => {
	return String(price).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}
export const modelReplace = (car) => {
	return car.match(/\s.*/g)[0].trim()
}
export const markReplace = (car) => {
	return car.match(/^\w+/g)
}

const arr_RU = ['А', 'В', 'Е', 'К', 'М', 'Н', 'О', 'Р', 'С', 'Т', 'У', 'Х']
const numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8','9']
const cities = [
	{ name: 'Саранск', regionNumber: '13' },
	{ name: 'Ульяновск', regionNumber: '73' },
	{ name: 'Самара', regionNumber: '63' },
	{ name: 'Казань', regionNumber: '16' },
	{ name: 'Саратов', regionNumber: '64' },
	{ name: 'Волгоград', regionNumber: '34' },
	{ name: 'Воронеж', regionNumber: '36' },
	{ name: 'Уфа', regionNumber: '02' },
]
const randomArray = (array) => {
	return	Math.floor(Math.random() * array.length)
}
export const generateNumber = (region) => {
	let city = 'Саранск'
	let result = ''
	return result = arr_RU[randomArray(arr_RU)] + ' ' + randomArray(numbers) + randomArray(numbers) + randomArray(numbers) + ' ' + arr_RU[randomArray(arr_RU)] + arr_RU[randomArray(arr_RU)] + ' ' + cities.find(el => el.name === region).regionNumber
}

export const newTestFunction = () => {
	return res = 1 + 2
}