import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'native-base'
import Modal from 'react-native-modal';
import { THEEM } from '../theem';
import { CityList } from './CityList' 
import { DotIndicator } from 'react-native-indicators'


export const AppModal = ({ 
	isModalVisible, 
	setModalVisible, 
	cities, 
	setCityState, 
	locationCity, 
	confirmCity,
	changeNoGeoLocationCity 
}) => {
	const [choiceMode, setChoiseMode ] = useState(false)
	const [error, setError] = useState(null)
	const confirmButton = () => {
		const value = cities.find(el => el.name === locationCity)
		if (value) {
			setModalVisible(false)
			confirmCity(locationCity)	
		}
		else {
			setError('Извините, к сожаления в данном городе наш сервис не поддерживается. Попробуйте выбрать из списка.')
		}
	}
	return(
		<View>
			<Modal 
				isVisible={isModalVisible}
				statusBarTranslucent={true} 
				animationIn='fadeInUp'
				animationOut='slideOutLeft'
				hasBackdrop={true}
				animationInTiming={400}
				animationOutTiming={400}
				hideModalContentWhileAnimating={true}
				useNativeDriver={true}
			>
				<View style={styles.wrapper}>
					{	choiceMode
							? <CityList 
									cities={cities} 
									setCityState={setCityState}
									setModalVisible={setModalVisible}
									changeNoGeoLocationCity={changeNoGeoLocationCity}
								/>
							: (
							<View style={styles.modal}>
								<View style={styles.content}>
									<Text style={styles.title}>Подтверждение города</Text>
									{
										error
											? <Text style={styles.error}>{error}</Text>
											: locationCity ? <Text style={styles.question}>Ваш город <Text style={{ color: THEEM.BLACK_COLOR }}>{locationCity}</Text> ?</Text> : <DotIndicator style={styles.question} size={5} color={THEEM.BLUE_COLOR} />
									}
								</View>
								<View style={styles.groupButton}>
									<TouchableOpacity
										activeOpacity={0.7}
										style={styles.close}
										onPress={() => setChoiseMode(true)}
									>
										<Text style={styles.textRed} >Выбрать город</Text>
									</TouchableOpacity>
									<TouchableOpacity
										activeOpacity={0.7}
										style={styles.open}
										onPress={confirmButton}
									>
										<Text style={styles.textBlue} >Подтвердить</Text>
									</TouchableOpacity>

								</View>
							</View>
							)
					}
				</View>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	content: {
		padding: 10
	},
	title: {
		textAlign: 'center',
		color: THEEM.BLACK_COLOR,
		fontSize: 17,
		fontWeight: 'bold'
	},
	question: {
		paddingVertical: 15,
		textAlign: 'center',
		color: THEEM.GRAY_COLOR,
		fontSize: 15
	},
	modal: {
		width: '80%',
		borderRadius: 14,
		backgroundColor: '#fff',

	},
	groupButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	close: {
		width: '50%',
		color:  THEEM.RED_COLOR,
		borderTopColor: THEEM.LGRAY_COLOR,
		borderRightColor: THEEM.LGRAY_COLOR,
		borderRightWidth: 1,
		borderTopWidth: 1,
		textAlign: 'center',
		paddingVertical: 10
	},
	open: {
		width: '50%',
		borderTopColor: THEEM.LGRAY_COLOR,
		borderLeftColor: THEEM.LGRAY_COLOR,
		borderLeftWidth: 1,
		borderTopWidth: 1,
		textAlign: 'center',
		paddingVertical: 10
	},
	textRed: {
		textAlign: 'center',
		color: THEEM.RED_COLOR,
	},
	textBlue: {
		textAlign: 'center',
		color: THEEM.BLUE_COLOR,
	},
	error: {
		textAlign: 'center',
		paddingVertical: 15,
		color: THEEM.RED_COLOR
	}
})