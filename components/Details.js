import React, {useContext, useEffect, useState} from "react";
import {Image, Text, View, Button} from "react-native"
import { RestaurantContext } from "../App";
import styles from "./styles";

export default function Details(){
  const [thisRest, setThisRest] = useState()
  const {selectedRest, restaurant, setRestaurant} = useContext(RestaurantContext)
  useEffect(()=>{
    if(restaurant && selectedRest){
    const _thisRest = restaurant.find(r => r.id === selectedRest)
    setThisRest(_thisRest)}
  },[selectedRest, restaurant])

  if(!thisRest){
    return (
      <View style={styles.container}><Text>Loading...</Text></View>
    )
  }
  const addRating = (myRating) => {
    fetch('https://bocacode-intranet-api.web.app/restaurants/' + selectedRest, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({rating: myRating})
    })
    .then(response => response.json())
    .then(setRestaurant)
    .catch(alert)
  }
  return (
    <View>
      <Image source={{ uri: thisRest.photoUrl }} style={styles.detailsImage} />
      <Text style={styles.cardTitle}>{!thisRest ? 'Loading...' : thisRest.name}</Text>
      <Text style={styles.cardSubtitles}>{thisRest.address}</Text>
      <Text style={styles.cardSubtitles}>Rating: {thisRest.rating}</Text>
      <View>
      <Text>My Rating:</Text>
      <View style={{flexDirection: "row"}}>
        <Button title="1" onPress={()=> addRating(1)} ></Button>
        <Button title="2" onPress={()=> addRating(2)} ></Button>
        <Button title="3" onPress={()=> addRating(3)} ></Button>
        <Button title="4" onPress={()=> addRating(4)} ></Button>
        <Button title="5" onPress={()=> addRating(5)} ></Button>
      </View>
      </View>
    </View>
    
  )
}