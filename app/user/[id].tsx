import { Stack, useGlobalSearchParams } from 'expo-router';
import React from 'react'
import { Text, View } from 'react-native'

export default function screen() {  
  const params = useGlobalSearchParams();
  const id = params.id;
    return (
    <View>
      <Stack.Screen
        options={{ title: `User Page ID: ${id}` }}
      />
      <Text>User Page ID:{id}</Text>
    </View>
  )

}
