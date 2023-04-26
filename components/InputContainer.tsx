import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useMessagesStore } from '../store/Store';
import { getCurrentTime } from '../Utility';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginBottom: 10
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 5,
    maxHeight: 100,
  },
  sendButtonContainer: {
    backgroundColor: '#0084ff',
    borderRadius: 25,
    padding: 10,
    marginLeft: 10,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

const InputContainer = () => {

  const [text,setText]=useState('')
  const sendMessage = useMessagesStore((state)=>state.addMessage)

  const onSubmit = () => {
    sendMessage(prepareMessage({rawText:text}))
    setText('')
  }


  return(
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        multiline={true}
        onChangeText={setText}
        value={text}
        />
      <Button title="Send" onPress={onSubmit} />
    </View>
  )
}

interface PrepareMessageProps {
  rawText:string
  fromAi?:boolean
}

const prepareMessage = ({rawText,fromAi}:PrepareMessageProps) => {
  const time = getCurrentTime();
  const messageId = uuidv4()
  return(
    {
      text: rawText,
      timeStamp: time,
      id: messageId,
      fromAi:fromAi
    }
  )
}

export default InputContainer