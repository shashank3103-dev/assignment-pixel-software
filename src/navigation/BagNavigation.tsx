import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../resources'

const BegNavigation = () => {
  return (
 <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: COLORS.primary,
              textAlign: 'center',
              marginTop: 20,
            }}>
            BagNavigation
          </Text>
    </View>
  )
}

export default BegNavigation

const styles = StyleSheet.create({})