import React from 'react'
import { List, ListItem, Text, Left, Right, Icon, View } from 'native-base';
import { StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export const CityList = ({ cities, setCityState, setModalVisible, changeNoGeoLocationCity}) => {
	const Item = ({ name, id }) => {
		const setCity = ( id, name) => {
			setCityState(id, name)
			changeNoGeoLocationCity(name)
			setModalVisible(false)
		}
		
		return (
			<TouchableOpacity>
				<ListItem onPress={() => setCity(id, name)}>
				<Left>
					<Text>{name}</Text>
				</Left>
				<Right>
					<Icon name="arrow-forward" />
				</Right>
			</ListItem>
			</TouchableOpacity>
		)
	}
	return(
			<ScrollView style={styles.wrapper}>
				<List>
					{
						cities.map(el => <Item key={el.id} name={el.name} id={el.id} />)
					}
				</List>
			</ScrollView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		width: '80%',
		backgroundColor: '#fff',
		marginBottom: 10,
		borderRadius: 10,
		maxHeight: 350,
		elevation: 10
	},
	container: {
		alignItems: 'center'
	}
})