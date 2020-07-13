import React from 'react';
import { StyleSheet, Image } from 'react-native'
import { View, Text, Button } from 'native-base';
import { AppSwiper } from './Main screen/AppSwiper';
import { THEEM } from '../theem';


export const Prewiew = ({ setPrewiew }) => {

	const slides = [
		{ 
			id: '1', 
			title: 'Бесплатная парковка', 
			text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах', 
			img: require('../../assets/slider/slide1.png'), 
		},
		{ 
			id: '2', 
			title: 'Страховка', 
			text: 'Полная страховка арендованного транспорта от всех случаем ДТП', 
			img: require('../../assets/slider/slide2.png')
		},
		{
			id: '3',
			title: 'Бензин',
			text: 'Полный бак на любой заправке города за наш счет',
			img: require('../../assets/slider/slide3.png')
		},
	]

	return (
		<View style={{flex: 1}}>
			<AppSwiper
				auto={false}
				type={'prewiewItem'}
				slides={slides}
			/>
			<Button full style={styles.button} onPress={() => setPrewiew(false)}>
				<Text uppercase={false}>Приступить</Text>
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: THEEM.GREEN_COLOR,
		marginBottom: 20,
		marginHorizontal: 20,
		borderRadius: 10
	}
})