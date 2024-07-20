import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { reactQuestions } from '../config/question'
import tw from 'twrnc';
import * as Progress from 'react-native-progress';

const Questions = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectOption, setSelectOption] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [quizProgress, setQuizProgress] = useState(reactQuestions.length)

const progress = (currentQuestionIndex + 1) / quizProgress
  const handlenext = ()=> {
    if(currentQuestionIndex === reactQuestions.length - 1){
      navigation.navigate("Score", {score: score})
    }else{
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectOption(null)
      setIsCorrect(null)
    }
  }

  const handleOptionPress = (pressedOption)=> {
    // Alert.alert(pressedOption);
    setSelectOption(pressedOption)
    const isAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer === pressedOption
    setIsCorrect(isAnswerCorrect)
    
    if(isAnswerCorrect){
      setScore((prevScore)=> prevScore + 10)
    }
  }
   
  return (
    <View style={tw`mt-6 p-4`}>
      <View style={tw`flex-row`}>
        <View style={tw`flex-1`}>
          <Progress.Bar progress={progress} width={null} height={20} color={"rgb(168 85 247)"} />
        </View>
      </View>
      <Text style={tw`text-2xl mb-4`}>{reactQuestions[currentQuestionIndex].questio}</Text>
      {reactQuestions[currentQuestionIndex].option.map((option)=>(
        <Pressable 
        // disabled={selectOption}
        onPress={()=> handleOptionPress(option)}
        style={tw`border-2 border-purple-500 p-4 my-2 rounded-md ${
          selectOption === option
          ? isCorrect
          ? "bg-green-200 border-green-500"
          : "bg-red-200 border-red-500"
          : "border-purple-500"
        }`}

        >
          <Text style={tw`text-lg`}>{option}</Text>
        </Pressable>
      ))}
      <Pressable 
        onPress={handlenext}
        style={tw`bg-purple-500 p-4 rounded-md mt-6`}
      >
        <Text style={tw`text-white text-lg text-center font-bold`}>{currentQuestionIndex === reactQuestions.length - 1 ? "Finish" : "Next"}</Text>
      </Pressable>
    </View>

    
  )
}

export default Questions

const styles = StyleSheet.create({})