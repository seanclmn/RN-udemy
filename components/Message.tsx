import React from 'react'
import {View,Text} from 'react-native'
import { StyleSheet } from 'react-native'
import { Message as MessageType} from '../types/Messages'
import { LinearGradient } from 'expo-linear-gradient';

const Styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  incomingMessageContainer: {
    flexDirection: 'row'
  },
  messageBubble: {
    backgroundColor: '#d8d8d8',
    padding: 6,
    borderRadius: 10,
    maxWidth: '80%',
    minWidth: '20%'
  },
  incomingMessageBubble: {
    backgroundColor: '#912fc2',
  },
  messageBubbleLeft: {
    borderTopLeftRadius: 0,
    marginLeft: 5,
  },
  messageBubbleRight: {
    borderTopRightRadius: 0,
    marginRight: 5,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    color: '#333',
    marginBottom: 0
  },
  incomingMessageText: {
    color: '#ffffff',
  },
  messageTime: {
    fontSize: 10,
    color: '#999',
    marginTop: 5,
    marginLeft: 'auto',
  },
  incomingMessageTime: {
    color: '#fdfdfd',
  }
})

const Message = (Message:MessageType) => {
  const {text,fromAi,timeStamp,id} = Message
  return(
    <View 
      style={[Styles.messageContainer,fromAi && Styles.incomingMessageContainer]}
      >
      <LinearGradient 
        colors={fromAi ? ['#8a48e0', '#9b00d4'] : []}
        start={{ x: 0.1, y: 0.2 }}
        style={Styles.messageBubble}>
        <Text style={[Styles.messageText,fromAi && Styles.incomingMessageText]}>{text}</Text>
        <Text style={[Styles.messageTime,fromAi && Styles.incomingMessageTime]}>{timeStamp}</Text>
      </LinearGradient >
    </View>
  )
}
export default Message