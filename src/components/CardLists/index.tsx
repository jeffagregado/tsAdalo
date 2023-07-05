import React, { Suspense, useEffect, useState } from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, View } from 'react-native'

import {cardListStyles} from './styles/ListContainer.styles'
import Card from './Card'

let isTablet = false
let isMobile = false
let isWidth = 0
console.log('isTablet', isTablet)

const itemWidth = 250
const numColumns = Math.floor(isWidth / itemWidth)

const ListCards = (props) => {
	const { color, listItems, styles } = props

	const { width } = Dimensions.get('window')
	// console.log('listItems', listItems)

	const cardWidth = width < 500 ? '100%' : 250

	useEffect(() => {
		isTablet = width <= 768
		isMobile = width <= 500
		isWidth = width
	}, [width])

	return (
		<View style={[cardListStyles(numColumns).container, isTablet && cardListStyles().mobileContainer]}>
			<Suspense fallback={<Text>Loading...</Text>}>
				{listItems &&
					listItems.map((item: any, i: number) => (
						<Card item={item} key={i} shadow={props.card.shadow} width={cardWidth} />
					))}
			</Suspense>
		</View>
	)
}

export default ListCards
