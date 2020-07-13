import React from 'react'
import { List, ListItem, Text, Left, Right, Icon, View } from 'native-base';
import { StyleSheet, Keyboard } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { THEEM } from '../../theem';

export const Autocomplete = ({ 
		city, 
		cities, 
		points,
		changeCity,
		changePoint, 
		type,
	}) => {

	const Item = ({ text, id}) => {
		return(
			<TouchableOpacity
				onPress={() => type === 'city' ? changeCity(id, text) : changePoint(id, text)}
			>
				<ListItem>
					<Left>
						{
							type === 'point' 
							? <Text style={styles.ul}>ул. </Text>
							: null
						}
						<Text>{text}</Text>
					</Left>
					<Right>
						<Icon name="arrow-forward" />
					</Right>
				</ListItem>
			</TouchableOpacity>
		)
	}

	const filterPoint = points.filter(el => el.cityId.name === city)
	
	if (type === 'city' ? !cities.length : !filterPoint.length) {
		return (
			<View style={styles.nodata}>
				<Text style={styles.text}>По данному запросу ничего не найдено</Text>
			</View>
		)
	}
	// else if (filterCity.length & !filterPoint.length) {
	// 	return (
	// 		<View style={styles.nodata}>
	// 			<Text style={styles.text}>В данном городе нет пунктов выдачи</Text>
	// 		</View>
	// 	)
	// }
	return(
		<ScrollView style={styles.wrapper}>
			<List>
				{
					type === 'city'
						? cities.map(el => (
							<Item 
								key={el.id} 
								text={el.name} 
								id={el.id} 
							/>
						))
						: filterPoint.map(el => (
							<Item 
								key={el.id} 
								text={el.address} 
								id={el.id} 
							/>
						))
				}
			</List>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff', 
		marginBottom: 10, 
		borderRadius: 10,
		maxHeight: 210,
		elevation: THEEM.SHADOW_INPUT
	},
	nodata: {
		backgroundColor: '#fff',
		marginBottom: 10,
		borderRadius: 10,
		maxHeight: 210,
		elevation: THEEM.SHADOW_INPUT,
		padding: 15,
	},
	text: {
		color: THEEM.RED_COLOR
	},
	ul: {
		fontSize: 14,
		color: THEEM.GRAY_COLOR
	}
})