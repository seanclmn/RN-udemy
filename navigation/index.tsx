import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from '../screens/Home'
import Test from '../screens/Test'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomStackParamList, RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Navigation(){

  return(
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}

function RootNavigator(){
  return(
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator} 
      />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<BottomStackParamList>()
function BottomTabNavigator() {
  return(
     <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home} 

      />
      <BottomTab.Screen
        name="Test"
        component={Test}
      />

     </BottomTab.Navigator>

  )
}