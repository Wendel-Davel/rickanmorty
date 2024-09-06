import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList, { StackTypes }  from '../../routes'

import {
 Container,
 ContBg,
 Logo,
 Button,
 TitleButton,
 ContView
} from './style';



export function Login(){
    const navigation = useNavigation<StackTypes>();
    return(
        <ContBg source={require('../../assets/background.png')}>
         <SafeAreaView  style={{flex:1}} >
          <Container>
            <ContView>
              <Logo  source={require('../../assets/logo.png')}/>
              <Button onPress={() => navigation.navigate('Home')}><TitleButton>Get Starterd</TitleButton></Button>
            </ContView>

          </Container>
         </SafeAreaView>
        </ContBg>


    )
}