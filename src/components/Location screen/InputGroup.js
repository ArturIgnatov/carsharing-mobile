import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Item, Icon, Input, Button, Text } from 'native-base'
import { THEEM } from '../../theem'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const InputGroup = ({ 
	setAutocomplete, 
	setCity, 
	setPoint,
	setCityState,
	setPointState, 
	city, 
	point,
	order, 
	setAutoType, 
}) => {

	// Handler change input
	const handlerCityInput = (e) => {
		setCity(e)
		setPoint('')
		setPointState(null)
		setAutoType('city')
		setAutocomplete(true)
	}
	const handlerPointInput = (e) => {
		setPoint(e)
		setAutoType('point')
		setAutocomplete(true)
	}
	// Clear input
	const clearCityInput = () => {
		setCity('')
		setPoint('')
		setCityState(null)
		setPointState(null)
		setAutocomplete(true)
		setAutoType('city')
	}
	const clearPointInput = () => {
		setPoint('')
		setPointState(null)
		setAutoType('point')
		setAutocomplete(true)
	}
	// handlerFocus Input
	const handlerFocusCityInput = () => {
		setAutoType('city')
		setAutocomplete(true)
	}
	const handlerFocusPointInput = () => {
		setAutoType('point')
		setAutocomplete(true)
	}
	return(
		<View>
			<Item style={styles.input}>
				{
					order.cityId.id
						? <Icon
							type="Feather"
							name="check"
							style={{ color: THEEM.GREEN_COLOR }}
						/>
						: <Icon
							type='Ionicons'
							name='search'
							style={{ color: THEEM.GRAY_COLOR }}
						/>
				}
				<Input 
					placeholder='Город' 
					value={city} 
					onChangeText={(e) => handlerCityInput(e)}
					onFocus={handlerFocusCityInput}
				/>
				<TouchableOpacity onPress={clearCityInput}>
					<Icon 
						active 
						name='ios-close-circle' 
						style={{color: THEEM.GRAY_COLOR}} 
					/>
				</TouchableOpacity>
			</Item>
			<Item style={styles.input}>
				{
					order.pointId?.id 
						? <Icon
								type="Feather"
								name="check"
								style={{ color: THEEM.GREEN_COLOR }}
							/>
						: <Icon
								type='Ionicons'
								name='search'
								style={{ color: THEEM.GRAY_COLOR }}
							/>
				}
				<Input 
					placeholder='Пункт выдачи'
					disabled={!order.cityId.id}
					value={point}
					onChangeText={(e) => handlerPointInput(e)}
					onFocus={handlerFocusPointInput} 
				/>
				<TouchableOpacity onPress={clearPointInput}>
					<Icon 
						active 
						name='ios-close-circle' 
						style={{ color: THEEM.GRAY_COLOR }} 
					/>
				</TouchableOpacity>
			</Item>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		elevation: THEEM.SHADOW_INPUT, 
		backgroundColor: '#fff', 
		paddingHorizontal: 10, 
		borderRadius: 10, 
		marginBottom: 10
	},
})