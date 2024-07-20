import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import {useRoute} from '@react-navigation/native';

const Score = ({navigation}) => {

  const route = useRoute()
  const { score } = route.params;
  return (
    <View  style={tw.style(tw`flex-1 items-center`)}>
      <Image source={require("../../assets/win.png")} 
      style={tw.style(tw`h-3/6`, {aspectRatio: 1})} 
      />
      <Text>Congartulation!! your Scored {score}  points</Text>

      <Pressable
        onPress={()=> navigation.navigate("Splash")} 
        style={tw.style(tw`bg-purple-500 p-2 rounded- mt-4`)}
      >
        <Text style={tw.style(tw`text-white font-medium`)}>Play Again</Text>
      </Pressable>
    </View>
  )
}

export default Score

const styles = StyleSheet.create({})