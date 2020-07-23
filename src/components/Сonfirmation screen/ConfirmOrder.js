import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'native-base'
import { THEEM } from '../../theem';

export const ConfirmOrder = ({ isModalVisible, setIsModalVisible, confirmOrder }) => {
	
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
					<View style={styles.modal}>
						<View style={styles.content}>
							<Text style={styles.title}>Подтверждение заказа</Text>
							<Text style={styles.question}>После подтверждения, заказ уйдет в обработку</Text>
						</View>
						<View style={styles.groupButton}>
							<TouchableOpacity
								activeOpacity={0.7}
								style={styles.close}
								onPress={() => setIsModalVisible(false)}
							>
								<Text style={styles.textRed} >Отмена</Text>
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.7}
								style={styles.open}
								onPress={confirmOrder}
							>
								<Text style={styles.textBlue} >Подтвердить</Text>
							</TouchableOpacity>

						</View>
					</View>
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
		paddingVertical: 10,
		paddingHorizontal: 25
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
		color: THEEM.RED_COLOR,
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