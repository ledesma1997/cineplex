import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const Menu = (props) => {
  return (
    <ScrollView>
      
      <Button title="Bienvenido a CinePlex" onPress={()=>{
        props.navigation.navigate("EjemploFlatList");
      }}/> 
    </ScrollView>
  );
};

export default Menu;
