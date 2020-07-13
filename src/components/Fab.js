import React, { useState } from 'react'
import { Text } from 'react-native'
import { View, Button, Icon, Fab, } from 'native-base';
import { YellowBox } from 'react-native'
import { THEEM } from '../theem';

YellowBox.ignoreWarnings([
	'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

export const FabApp = () => {
	const [active, setActive] = useState(false)
	return(
		<View style={{flex: 1}}>
			<Fab
				active={active}
				direction="up"
				containerStyle={{ width: 260, right: -90 }}
				style={{ backgroundColor: THEEM.GREEN_COLOR }}
				position="bottomRight"
				onPress={() => setActive(!active)}>
				<Icon type="MaterialIcons" name="filter-list" />
				<Button style={{ backgroundColor: THEEM.BLUE_COLOR, width: 150, }}>
					<Text style={{ color: 'white' }} >Подтвержденные</Text>
				</Button>
				<Button style={{ backgroundColor: THEEM.ORANGE_COLOR, width: 150, }}>
					<Text style={{ color: 'white' }} >Исполненные</Text>
				</Button>
				<Button style={{ backgroundColor: THEEM.GREEN_COLOR, width: 150, }}>
					<Text style={{ color: 'white' }} >Новые</Text>
				</Button>
				<Button style={{ backgroundColor: '#49A3E3', width: 150, }}>
					<Text style={{ color: 'white' }} >Все</Text>
				</Button>
			</Fab>
		</View>
	)
}