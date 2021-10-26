import React from "react";
import {Image, Text, View } from 'react-native'
import styles from "./styles";

export default function RestaurantCard({rest}){
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: rest.photoUrl}} />
      <Text style={styles.cardTitle}>{rest.name}</Text>
      <Text style={styles.cardSubtitles} > {rest.address}</Text>
      <Text>{rest.rating}</Text>
    </View>
  )
}