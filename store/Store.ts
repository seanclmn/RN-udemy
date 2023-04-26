import { create } from 'zustand'
import { Message } from '../types/Messages'

interface AppState {
  messages: Message[]
  addMessage: (newMessage:Message)=>void
}
export const useMessagesStore = create<AppState>((set)=>({
  messages: [],
  addMessage: (newMessage:Message) =>{
    set((state)=>({messages: [...state.messages,newMessage] }))
  }
}))