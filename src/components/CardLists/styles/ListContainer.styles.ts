import { StyleSheet, Platform, DimensionValue } from 'react-native'

interface CardListStylesProps {
  columns?: number
}

interface CardListStyles {
  container: {
    [key: string]: any
  }
  mobileContainer: {
    [key: string]: any
  }
}

type CardListStylesType = (columns?: number) => CardListStyles


const cardListStyles: CardListStylesType = (columns = 1) => StyleSheet.create({
	container: {
		...Platform.select({
			web: {
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, 250px)',
				gridGap: 20,
				padding: 20,
			},
			ios: {
				display: 'flex',
				flexBasis: `${100 / columns}%`,
				flex: 1,
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'flex-start',
				padding: 20,
			},
		}),
	},
	mobileContainer: {
		...Platform.select({
			web: {
				gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
				justifyItems: 'center',
			},
			ios: {
				justifyContent: 'center',
			},
		}),
	},
})

export {cardListStyles}