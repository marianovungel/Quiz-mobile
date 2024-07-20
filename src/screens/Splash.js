import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const Splash = ({ navigation }) => {
  return (
    <View style={tw`flex-1 justify-around items-center`}>
      <Image source={require("../../assets/imgp.png")} 
      style={tw.style(tw`h-3/6`, {aspectRatio: 1})} 
      />
 
      <Text style={tw`text-2xl text-center mb-10`}>Instructions</Text>

      <View style={tw`bg-purple-500 p-2 rounded h-30 w-90 items-center justify-center`}>
        <Text style={tw`text-white text-lg`}>Each Quiz Has Four Options Quiz {" "}</Text>
        <Text style={tw`text-white text-lg`}>Progress Will be Show At Top {" "}</Text>
        <Text style={tw`text-white text-lg`}>Scoro Would Be Shown At The End</Text>
      </View>

      <Pressable 
        onPress={()=> navigation.navigate("Questions")}
        style={tw`bg-purple-500 mt-5 px-6 py-1 rounded`}
      >
        <Text style={tw`text-white text-lg`}>Start</Text>
      </Pressable>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    text:{
        fontSize:30
    },
})