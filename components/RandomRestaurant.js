import React, {useContext, useState, useEffect} from "react";
import { View, Text, Button } from 'react-native';
import {RestaurantContext} from '../App';
import RestaurantCard from "./RestaurantCard";


export default function RandomRestaurant(){
  const {restaurant} = useContext(RestaurantContext)
  const [randomIndex, setRandomIndex] = useState(0)
  const getRandom = () => {
    const _randomIndex =  Math.floor(Math.random() * restaurant.length)
    setRandomIndex(_randomIndex)
  }
  useEffect(()=>{
    getRandom()
  }, [])
  return(
    <View>
      <Button title="Pick Again" onPress={getRandom}/>
      <RestaurantCard rest={restaurant[randomIndex]} />
    </View>
  )
}
