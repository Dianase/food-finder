import React, {useContext} from "react";
import {Image, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { RestaurantContext } from "../App";
import styles from "./styles";

export default function RestaurantCard({rest}){
  const navigation = useNavigation()
  const {setSelectedRest} = useContext(RestaurantContext)
  const handlePress = () => {
    setSelectedRest(rest.id)
    navigation.navigate('Details')
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card} >
        <Image style={styles.cardImage} source={{ uri: rest.photoUrl}} />
        <Text style={styles.cardTitle}>{rest.name}</Text>
        <Text style={styles.cardSubtitles} > {rest.address}</Text>
        <Text>{rest.rating}</Text>
      </View>
    </TouchableOpacity>
  )
}