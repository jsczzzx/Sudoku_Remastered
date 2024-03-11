import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, withTheme } from 'react-native-paper'
import Axios from 'axios';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import url from '../api/ServerApi'

const HomeScreen = ({ theme, navigation }) => {

  return (
    <Background>
      <View style={{flex:1, alignItems:'center', justifyContent:'flex-end'}}>
        <Logo/>
        <Header style={{fontSize: 25}}>Super Sudoku!</Header>
      </View>
      <View style={{flex:1, justifyContent:'space-around'}}>
        <Button 
          style={{backgroundColor: 'darkseagreen'}}
          mode="contained" 
          onPress={()=>navigation.navigate('Game', { mode: 'easy' })}
        >
          Easy Mode
        </Button>
        <Button 
          style={{backgroundColor: 'orangered'}}
          mode="contained" 
          onPress={()=> navigation.navigate('Game', { mode: 'hard' })}
        >
          Hard Mode
        </Button>
        <Button 
          mode="contained" 
          onPress={() => navigation.navigate('Start')}
        >
          Log out
        </Button>
      </View>
      <View style={{flex:0.2}}></View>
    </Background>
  )
}

export default withTheme(HomeScreen);