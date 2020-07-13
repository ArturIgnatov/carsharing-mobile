import React from 'react';
import { StyleSheet, Linking, ActivityIndicator } from 'react-native'
import { View, Text, Left } from 'native-base';
import { THEEM } from '../../theem';
import { DotIndicator } from 'react-native-indicators'

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MainInfo = ({ setModalVisible, locationCity, order }) => {
	return(
		<View style={styles.wrapper}>
			<View style={styles.geo}>
				<TouchableOpacity 
					style={styles.touchable} 
					activeOpacity={0.7}
					onPress={() => setModalVisible(true)}
				>
					<FontAwesome5 name="map-marker-alt" size={35} color={THEEM.RED_COLOR} />
					<View style={{ marginLeft: 10 }}>
						<Text style={styles.title}>Ваш город</Text>
						{
							order.cityId 
								? <Text style={styles.phone}>{order.cityId.name ? order.cityId.name : locationCity}</Text>
								: <DotIndicator size={5} color={THEEM.BLUE_COLOR} />
						}
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.contact}>
				<TouchableOpacity 
					style={styles.touchable} 
					activeOpacity={0.7}
					onPress={() => Linking.openURL('tel:+7 998 360 36 36')} 
				>
					<FontAwesome name="phone" size={35} color={THEEM.BLUE_COLOR} />
					<View style={{ marginLeft: 10 }}>
						<Text style={styles.title}>Телефон для связи</Text>
						<Text style={styles.phone}>+7 998 360 36 36</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 15,
		borderRadius: 7,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#fff',
		elevation: THEEM.SHADOW,
		width: '100%',
		height: 80,
		elevation: 3
	},
	touchable: {
		flexDirection: 'row',
		alignItems: 'center',
		// justifyContent: 'space-evenly'
	},
	indicator: {
		// position: 'absolute',
		// left: '40%'
	},
	geo: {
		width: '50%',
		height: 60,
		justifyContent: 'center',
		borderRightColor: THEEM.LGRAY_COLOR,
		borderRightWidth: 1
	},
	contact: {
		width: '50%',
		height: 60,
		justifyContent: 'center',
		marginLeft: 10
	},
	loacation: {
		fontSize: 18,
		color: THEEM.BLACK_COLOR
	},
	title: {
		fontSize: 12,
		color: THEEM.BLACK_COLOR
	},
	phone: {
		fontSize: 14,
		color: THEEM.GRAY_COLOR
	}
})