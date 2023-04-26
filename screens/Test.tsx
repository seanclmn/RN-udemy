import React, { useEffect } from 'react'
import {View, Text} from 'react-native'

export default function Test() {
  useEffect(()=>{
    console.log("mounting")
    return ()=>console.log("unmounting")
  },[])
  return(
    <View>

      <Text>Test</Text>
    </View>
  )
}