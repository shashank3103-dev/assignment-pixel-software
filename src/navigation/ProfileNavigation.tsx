import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../resources'

const ProfileNavigation = () => {
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
            ProfileNavigation
          </Text>
     </View>
  )
}

export default ProfileNavigation

const styles = StyleSheet.create({})