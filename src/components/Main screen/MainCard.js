import React from 'react';
import { StyleSheet, Image, } from 'react-native'
import { View, Text, Button } from 'native-base';
import { THEEM } from '../../theem';
import { AppSwiper } from './AppSwiper';

export const MainCard = ({ navigate, cars, locationCity }) => {
	return(
		<View style={styles.wrapper}>
			<View style={styles.swiper}>
				<Text style={styles.textswiper}>Автомобили:</Text>
				<AppSwiper
					auto={true}
					type={'cardItem'}
					cars={cars}
				/>
			</View>
			<View>
				<Text style={styles.title}>Need for drive</Text>
				<Text style={styles.subTitle}>Поминутная аренда авто твоего города</Text>
				<Button 
					full
					disabled={locationCity ? false : true} 
					style={locationCity? styles.button : {...styles.button, ...styles.disabled}}
					onPress={() => navigate('Location')}
				>
					<Text uppercase={false} >Сделать заказ</Text>
				</Button>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 40,
		borderRadius: 7,
		alignItems: 'center',
		backgroundColor: '#fff',
		elevation: THEEM.SHADOW
	},
	button:{
		borderRadius: 10,
		backgroundColor: THEEM.GREEN_COLOR
	},
	disabled:{
		backgroundColor: THEEM.GRAY_COLOR
	},
	swiper: {
		height: 250,
		borderBottomColor: THEEM.LGRAY_COLOR,
		paddingBottom: 0,
		borderBottomWidth: 1,

	},
	textswiper : {
		marginBottom: 10,
		color: THEEM.GRAY_COLOR
	},	
	img: {
		width: 230,
		height: 230
	},
	title: {
		fontSize: 48,
		marginVertical: 20,
		color: THEEM.GREEN_COLOR,
		fontWeight: 'bold'
	},
	subTitle: {
		textAlign: 'center',
		color: THEEM.GRAY_COLOR,
		fontSize: 26,
		marginBottom: 40,
		fontFamily: 'roboto-light'
	}
})