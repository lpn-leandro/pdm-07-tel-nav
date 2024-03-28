import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function Screen() {
  return (
    <View>
      <Stack.Screen
        options={{ title: 'About Page' }}
      />
      <Text>This is the about page</Text>
    </View>
  )
}
