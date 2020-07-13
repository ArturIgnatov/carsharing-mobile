import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { THEEM } from '../../theem'
import { CONSTANTUS } from '../../constatus'



export const AppSwiper = ({auto, type, slides, cars}) => {
	const PrewiewItem = ({slide}) => {
		return(
			<View style={styles.prewiew}>
				<View  style={styles.prewiewBlock}>
					<View style={styles.textGroup}>
						<Text style={styles.prewiewTitle}>{slide.title}</Text>
						<Text style={styles.prewiewText}>{slide.text}</Text>
					</View>
					<Image style={styles.prewiewImg} source={slide.img} />
				</View>
			</View>
		)
	}
	const CardItem = ({name, img, id}) => {		
		return(
			<View style={styles.card}>
				<Image style={styles.cardImg} source={{uri: CONSTANTUS.uri + img}}/>
				<Text style={styles.cardText}>{name}</Text>
			</View>
		)
	}	
	return (
		<Swiper 
			style={styles.wrapper} 
			// showsButtons
			key={cars ? cars.length : 3}
			removeClippedSubviews={false}
			autoplay={auto}
			loop={auto}
		>
			{
				type === 'prewiewItem' 
					? slides.map(el => <PrewiewItem key={el.id} slide={el} />)
					: cars.map(el => <CardItem key={el.id} id={el.id} name={el.name} img={el.thumbnail.path} />)
			}
		</Swiper>
	)
}


const styles = StyleSheet.create({
	wrapper: {
		
	},
	prewiew: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 30,
	},
	prewiewBlock : {
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 500
	},
	textGroup: {
		alignItems: 'center',
	},
	prewiewTitle: {
		color: THEEM.BLACK_COLOR,
		fontSize: 26,
		fontWeight: 'bold',
		marginBottom: 20
	},
	prewiewText : {
		color: THEEM.GRAY_COLOR,
		textAlign: 'center',
		fontSize: 18,
		fontFamily: 'roboto-light'
	},
	prewiewImg: {
		width: 300,
		height: 300
	},
	card: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	cardImg: {
		width: 250,
		height: 100
	},
	cardText:{
		color: THEEM.BLACK_COLOR,
		fontSize: 17,
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#000',
		fontSize: 30,
		fontWeight: 'bold'
	}
})