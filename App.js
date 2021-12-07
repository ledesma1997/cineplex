import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DatosPersonales from "./src/screen/DatosPersonales";
import Menu from "./src/screen/Menu";
import EjemploState from "./src/screen/EjemploState";
import EjemploHook from "./src/screen/EjemploHook";
import Componente from "./src/screen/Componente";
import EjemploFlatList from "./src/screen/EjemploFlatList";
import DetalleItem from "./src/screen/DetalleItem";
import Peliculas from "./src/screen/Peliculas";
import PeliculaItem from "./src/components/PeliculaItem";




export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="DatosPersonales" component={DatosPersonales}/>
        <Stack.Screen name="EjemploHook" component={EjemploHook}/>
        <Stack.Screen name="EjemploState" component={EjemploState}/>
        <Stack.Screen name="Componente" component={Componente}/>
        <Stack.Screen name="EjemploFlatList" component={EjemploFlatList}/>
        <Stack.Screen name="DetalleItem" component={DetalleItem}/>
        <Stack.Screen name="Peliculas" component={Peliculas}/>
        <Stack.Screen name="PeliculaItem" component={PeliculaItem}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};