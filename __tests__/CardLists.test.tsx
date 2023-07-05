import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import ListCards from '../src/components/CardLists'

it('renders correctly', () => {
  const tree = renderer.create(<ListCards />).toJSON()
  expect(tree).toMatchSnapshot()
})