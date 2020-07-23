import React, { useState } from 'react'
import { View, Text, Icon, Toast } from 'native-base'
import { StyleSheet } from 'react-native'
import { THEEM } from '../../theem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'

export const DateGroup = ({ dateFrom, dateTo, setDateFrom, setDateTo, handlerDateFrom, handlerDateTo }) => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
	const [dateMode, setDateMode] = useState(0)
	

	// Current date active
	let currentDate = new Date()
	if (dateMode === 1) {
		currentDate = dateFrom || new Date()
	}
	if (dateMode === 2 && dateTo) {
		currentDate = dateTo
	}
	const showToast = (text) => {
		Toast.show({
			text: text,
			type: "danger",
			position: "center",
			duration: 2500
		})
	}	
	const handlerPressOnDate = (date) => {
		if (dateMode === 1) {
			const curDate = new Date()
			if (date < curDate ) {
				setDatePickerVisibility(false)
				const time = moment(curDate).format('HH:mm')
				showToast("Некорректное время! Сейчас: " + time)
			}
			else {
				setDatePickerVisibility(false)
				setDateFrom(date)
				handlerDateFrom(new Date(date).getTime())
				setDateTo('')
			}	
		}
		else if (dateMode === 2) {
			if (dateFrom >= date) {
				setDatePickerVisibility(false)
				setDateTo('')
				showToast("Введеное время меньше времени заказа")
			}
			else {
				setDatePickerVisibility(false)
				setDateTo(date)
				handlerDateTo(new Date(date).getTime())	
			}
		}
	}
	const pressDateFrom = () => {
		setDatePickerVisibility(true)
		setDateMode(1)
	}
	const pressDateTo = () => {
		setDatePickerVisibility(true)
		setDateMode(2)
	}
	const pressClearDateFrom = () => {
		setDateFrom('')
		setDateTo('')
		handlerDateTo('')
	}
	const pressClearDateTo =() => {
		setDateTo('')
		handlerDateTo('')
	}

	return(
		<View>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={pressDateFrom}
					style={styles.toch}
				>
					<View style={styles.date}>
						<Icon
							fontSize={'55'}
							type='MaterialCommunityIcons'
							name='calendar-month-outline'
							style={{ color: THEEM.RED_COLOR }}
						/>
						{
							dateFrom
								? <Text style={styles.textActive}>{moment(dateFrom).format('DD.MM.YYYY')}</Text>
								: <Text style={styles.text}>Дата c</Text>
						}
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
						{
							dateFrom
								? <Text style={styles.textActive}>{moment(dateFrom).format('HH:mm')}</Text>
								: <Text style={styles.text}>Время</Text>
						}
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={pressClearDateFrom}
				>
					<Icon
						active
						name='ios-close-circle'
						style={{ color: THEEM.GRAY_COLOR }}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.row}>
				<TouchableOpacity
					disabled={dateFrom ? false : true}
					onPress={pressDateTo}
					style={styles.toch}
				>
					<View style={styles.date}>
						<Icon
							type='MaterialCommunityIcons'
							name='calendar-month-outline'
							style={{ color: THEEM.RED_COLOR }}
						/>
						<Text style={styles.text}>
							{
								dateTo
									? <Text style={styles.textActive}>{moment(dateTo).format('DD.MM.YYYY')}</Text>
									: <Text style={styles.text}>Дата по</Text>
							}
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
						{
							dateTo
								? <Text style={styles.textActive}>{moment(dateTo).format('HH:mm')}</Text>
								: <Text style={styles.text}>Время</Text>
						}
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={pressClearDateTo}
				>
					<Icon
						active
						name='ios-close-circle'
						style={{ color: THEEM.GRAY_COLOR }}
					/>
				</TouchableOpacity>
			</View>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				date={currentDate}
				mode={'datetime'}
				onConfirm={handlerPressOnDate}
				onCancel={() => setDatePickerVisibility(false)}
				minimumDate={dateMode === 1 ? new Date() : dateFrom}
			/>
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
		width: 130
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