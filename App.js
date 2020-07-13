
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store'
import { AppNavigation } from './src/navigation/AppNavigation';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Prewiew } from './src/components/Prewiew'
import * as Location from 'expo-location'

async function loadApplication () {
	await Font.loadAsync({
		Roboto: require('native-base/Fonts/Roboto.ttf'),
		Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
	})
}

export default function App () {
	const [isReady, setIsReady] = useState(false)
	const [preview, setPrewiew] = useState(false)
	
	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onError={() => console.log('error')}
				onFinish={()=> setIsReady(true)}
			/>
		)
	}
	else if (isReady && preview) {
		return (
			<Prewiew setPrewiew={setPrewiew}/>
		)
	}
	return (
		<Provider store={store}>
			<AppNavigation>
			</AppNavigation>
		</Provider>
	)
}
