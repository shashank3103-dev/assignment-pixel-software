import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../resources'

const SettingNavigation = () => {
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
                SettingNavigation
                </Text>
        </View>
  )
}

export default SettingNavigation

const styles = StyleSheet.create({})