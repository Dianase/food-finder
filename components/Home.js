
import React, {useEffect, useContext} from "react";
import { View, Text, ScrollView} from 'react-native'
import { Fab, QuestionIcon } from 'native-base'
import styles from "./styles";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../App";

export default function Home({ navigation }) {
  const {restaurant, setRestaurant} = useContext(RestaurantContext)  
  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
     .then(response => response.json())
     .then(setRestaurant)
     .catch(alert)
  }, [restaurant])
  return (
    <View style={styles.container}>
      {!restaurant
        ? <Text> "Loading..." </Text>
        : <ScrollView> 
          { restaurant.map(rest => <RestaurantCard key={rest.id} rest={rest}/>)}
          </ScrollView>
      }
      <Fab onPress={() => navigation.navigate('Random')} icon={<QuestionIcon/>} colorScheme="pink"/>
    </View>
  );
}

