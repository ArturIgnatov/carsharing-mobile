import React, { useState } from 'react'
import { View,  } from 'native-base'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {CarItem} from '../components/Cars screen/CarItem'
import { ScrollView } from 'react-native-gesture-handler'
import { CarFab } from '../components/Cars screen/CarFab'

const CarsScreen = ({ navigation, cars, categories, order }) => {
	const array = categories.map(el => ({
		id: el.id,
		name: el.name,
		selected: false
	}))
	
	array.unshift({ id: '123wqdsa', name: 'Все', selected: true })
	const [active, setActive] = useState(false)
	const [category, setCategory] = useState(array)
	const [activeCategory, setActiveCategory] = useState('Все')

	// Press fab button
	const filterContent = (id, category) => {
		setActive(false)
		setCategory(
			array.map(el => el.id === id ? { ...el, selected: true } : { ...el, selected: false })
		)
		setActiveCategory(category)
	}
	// Filter cars
	const filteredCars = cars.filter(el => activeCategory === 'Все' ? el : el.categoryId.name === activeCategory)
	return (
		<View>
			<ScrollView style={styles.wrapper}>
				{
					filteredCars.map(el => (
						<CarItem 
							key={el.id} 
							car={el} 
							navigate={navigation.navigate}
						/>
					))
				}
			</ScrollView>
			<CarFab
				active={active}
				setActive={setActive} 
				category={category} 
				filterContent={filterContent}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		// paddingTop: 60
	},
})

const mapStateToProps = (state) => ({
	cars: state.root.cars,
	categories: state.root.categories,
	order: state.root.order
})

export default connect(mapStateToProps, null)(CarsScreen)