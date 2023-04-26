import { useNavigation } from '@react-navigation/native'
import { View,Text, Button,StyleSheet } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomStackParamList } from '../navigation/types';
import { useEffect } from 'react';
import Message from '../components/Message';
import ChatContainer from '../components/ChatContainer';

export default function Home (){
  const {navigate} = useNavigation<NativeStackNavigationProp<BottomStackParamList>>()

  const styles = StyleSheet.create({
    homecontainer: {
      flex: 1

    }
  })
  return(
    <View style={styles.homecontainer}>
      <ChatContainer />
    </View>
  )
}