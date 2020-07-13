import React from 'react'
import { View, Text, Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import { THEEM } from '../../theem'
import { color } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'


export const ColorGroup = ({ colors, pressColor}) => {
	const Color = ({ rgb, name, selected }) => {
		return (
			<TouchableOpacity
				onPress={() => pressColor(name)}
				activeOpacity={0.7}
			>
				<View style={{ ...styles.color, backgroundColor: rgb }}>
					{selected && 
					<Icon
						type="Feather"
						name="check"
						style={{ color: rgb === '#EBE5E5' && '#C2C2C2' ? '#000' : '#fff'}}
					/>}
				</View>
			</TouchableOpacity>
		)
	}
	return (
		<View>
			<Text style={styles.title}>Цвета</Text>
			<View style={styles.colors}>
				{
					colors.map(el => (
						<Color
							key={el.rgb} 
							rgb={el.rgb}
							name={el.name}
							selected={el.selected}
						/>
					))
				}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	colors: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	color: {
		borderRadius: 100,
		width: 45,
		height: 45,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 16,
		color: THEEM.BLACK_COLOR,
		fontWeight: 'bold',
		marginBottom: 10
	}
})