import React, { useState } from 'react'
import { View, Text, Icon, Item, DatePicker } from 'native-base'
import { StyleSheet } from 'react-native'
import { THEEM } from '../../theem'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const DateGroup = () => {
	const [date, setDate] = useState('')
	return(
		<View>
			<View style={styles.row}>
				<TouchableOpacity
					style={styles.toch}
				>
					<View style={styles.date}>
						<Icon
							fontSize={'55'}
							type='MaterialCommunityIcons'
							name='calendar-month-outline'
							style={{ color: THEEM.RED_COLOR }}
						/>
						<Text style={styles.textActive}>
							12.08.2020
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.tochClock}
				>
					<View style={styles.date}>
						<Icon
							type='EvilIcons'
							name='clock'
							style={{ color: THEEM.BLUE_COLOR }}
						/>
						<Text style={styles.textActive}>
							13:45
						</Text>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.row}>
				<TouchableOpacity
					style={styles.toch}
				>
					<View style={styles.date}>
						<Icon
							type='MaterialCommunityIcons'
							name='calendar-month-outline'
							style={{ color: THEEM.RED_COLOR }}
						/>
						<Text style={styles.text}>
							Дата с
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.tochClock}
				>
					<View style={styles.date}>
						<Icon
							type='EvilIcons'
							name='clock'
							style={{ color: THEEM.BLUE_COLOR }}
						/>
						<Text style={styles.text}>
							Время
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		marginTop: 10,
	},
	toch: {
		borderRightColor: THEEM.LGRAY_COLOR,
		borderRightWidth: 1,
		width: 170,
		marginRight: 10
	},
	tochClock: {
		width: 170
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderBottomColor: THEEM.BLUE_COLOR,
		borderBottomWidth: 1,
		marginBottom: 5
	},
	date: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		color: THEEM.GRAY_COLOR,
		marginLeft: 10 
	},	
	textActive: {
		color: THEEM.BLACK_COLOR,
		marginLeft: 10 
	},
})