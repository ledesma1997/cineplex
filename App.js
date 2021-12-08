import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./src/screen/Menu";
import Generos from "./src/screen/Generos";
import Peliculas from "./src/screen/Peliculas";
import PeliculaItem from "./src/components/PeliculaItem";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Generos" component={Generos}/>
        <Stack.Screen name="Peliculas" component={Peliculas}/>
        <Stack.Screen name="PeliculaItem" component={PeliculaItem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};