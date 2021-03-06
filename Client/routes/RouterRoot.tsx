import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import Auth from './auth/Auth'
import NotAuth from './notAuth/NotAuth'

const Root = createNativeStackNavigator()

const RouterRoot = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="NotAuth"
      >
        <Root.Screen
          name="NotAuth"
          component={NotAuth}
          options={{ gestureEnabled: false }}
        />
        <Root.Screen
          name="Auth"
          component={Auth}
          options={{ gestureEnabled: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default RouterRoot

const styles = StyleSheet.create({})
