import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native'

import { THEEM } from '../theem'

import { OrdersScreen } from '../screen/OrdersScreen'
import { OrderScreen } from '../screen/OrderScreen'
import CarsScreen  from '../screen/CarsScreen'
import MainScreen from '../screen/MainScreen'
import LocationScreen from '../screen/LocationScreen'
import AdditionallyScreen from '../screen/AdditionallyScreen'
import СonfirmationScreen from '../screen/СonfirmationScreen'



const HomeStack = createStackNavigator()
const BottomStack = createStackNavigator()
const Tab = createBottomTabNavigator()
const BottomStackScreen = () => {
	return (
		<BottomStack.Navigator>
			<BottomStack.Screen name='Orders' component={OrdersScreen} options={{ headerTitle: 'Мои заказы'}}/>
			<BottomStack.Screen name='Order' component={OrderScreen} />
		</BottomStack.Navigator>
	)
}
const HomeStackScreen = () => {
	return(
		<HomeStack.Navigator>
			<HomeStack.Screen name='Main' component={MainScreen} options={{ headerTitle : () => <Logo/>}} />
			<HomeStack.Screen name='Location' component={LocationScreen} options={{ headerTitle: '', headerTransparent: true }}/>
			<HomeStack.Screen name='Cars' component={CarsScreen} options={{ headerTitle: 'Выбор автомобиля'}} />
			<HomeStack.Screen name='Additionally' component={AdditionallyScreen} options={{ headerTitle: 'Дополнительно', }}/>
			<HomeStack.Screen name='Confirmation' component={СonfirmationScreen} options={{ headerTitle: 'Подтверждение заказа' }} />
		</HomeStack.Navigator>
	)
}
const Logo = () => {
	return <Image style={{width:150, height: 23}} source={require('../../assets/logo.png')}/>
}

export const AppNavigation = () => {
	return(
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Home'
				tabBarOptions={{
					activeTintColor: THEEM.BLUE_COLOR,
				}}
			>
				<Tab.Screen 
					name='Home' 
					component={HomeStackScreen}
					options={{
						tabBarLabel: 'Главная',
						tabBarIcon: ({color, size}) => (
							<AntDesign name="home" color={color} size={size} />
						),
					}}
				/>
			<Tab.Screen
					name='Orders'
					component={BottomStackScreen}
					options={{
						tabBarLabel: 'Мои заказы',
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="ios-list" color={color} size={size} />
						)
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

