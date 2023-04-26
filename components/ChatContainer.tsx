import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import InputContainer from './InputContainer'
import Message from './Message'
import { Message as MessageType} from '../types/Messages'
import { useMessagesStore } from '../store/Store'

const ChatContainer = () => {

  const messages =[
    {
      text:"henlohenlohenlohenlohenlohenlohenlohenlohenlohenlohenlohenlo",
      timeStamp:'5:45PM',
      fromAi: true,
      id: "1123456789"
    },
    {
      text:"henlohenlohenlohenlohenlohenlohenlohenlohenlohenlohenlohenlo",
      timeStamp:'5:45PM',
      id: "11234567893"
    },
  ]
  const styles = StyleSheet.create({
    chatroomcontainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  })

  const store = useMessagesStore((state)=>state)



  return(
    <View style={styles.chatroomcontainer}>
      <ScrollView>
        {store.messages.map((props:MessageType)=><Message {...props} key={props.id}/>)}
      </ScrollView>
      <InputContainer/>
    </View>
    )
}

export default ChatContainer