import React, { useState } from 'react'
import { StyleSheet} from 'react-native'
import { View, Text, Button, Icon, Fab, } from 'native-base';
import { YellowBox } from 'react-native'
import { THEEM } from '../../theem';

export const CarFab = ({ category, filterContent, active,  setActive }) => {

	return (
		<View >
			<Fab
				active={active}
				direction="up"
				containerStyle={{ width: 260, right: -90 }}
				style={{ backgroundColor: THEEM.BLUE_COLOR }}
				position='bottomRight'
				onPress={() => setActive(!active)}>
				<Icon type='Octicons' name='settings' />
				{
					active &&
					category.map(el => (
						<Button 
							onPress={() => filterContent(el.id, el.name)} 
							key={el.id} 
							style={el.selected ? styles.itemCheck : styles.item}
						>
							<Text uppercase={false} style={{ color: 'white' }} >{el.name}</Text>
						</Button>
					)).reverse()
				}
			</Fab>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	item: {
		backgroundColor: THEEM.GREEN_COLOR, 
		width: 150,
	},
	itemCheck: {
		backgroundColor: THEEM.BLUE_COLOR,
		width: 150,
	}
})