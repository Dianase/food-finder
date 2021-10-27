import { StatusBar } from "expo-status-bar";
import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Home from "./components/Home";
import RandomRestaurant from "./components/RandomRestaurant";
import Details from "./components/Details";


const Stack = createNativeStackNavigator();
export const RestaurantContext = createContext();

export default function App() {
  const [restaurant, setRestaurant] = useState()
  const [selectedRest, setSelectedRest] = useState()
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RestaurantContext.Provider value={{restaurant, setRestaurant, selectedRest, setSelectedRest }}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Random" component={RandomRestaurant} options={{title: 'Random Restaurant'}}/>
            <Stack.Screen name="Details" component={Details} options={{title: 'Restaurant Details'}}/>
          </Stack.Navigator>
        </RestaurantContext.Provider>
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


