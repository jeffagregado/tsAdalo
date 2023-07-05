import React, { Suspense } from 'react'
import { Image, Text, View } from 'react-native'

import { cardStyle } from './styles/Card.styles'

const Card = (props) => {
	const { item, shadow, key, width } = props
	console.log('width', width)
	return (
		<View style={[cardStyle(width).container, shadow === 'true' && cardStyle().shadow]} key={key}>
			<Image source={{ uri: item?.image.imageSrc.uri }} style={[cardStyle().image]} />
			<View style={cardStyle().details}>
				<Text style={[cardStyle().row, item?.profile.styles.dataName]}>{item?.profile.dataName}</Text>
				<Text style={[cardStyle().row, item?.profile.styles.position]}>{item?.profile.position}</Text>
			</View>
		</View>
	)
}

export default Card
