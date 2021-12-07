import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UsuarioItem = (props) => {
  return (
    <TouchableOpacity onPress = { ()=>{
      props.navigation.navigate("Peliculas")     
    }}>
    <View style={{ 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }}>
    <Image source={{
        uri: props.avatar
    }} style = {{width:100, 
                height:100}} />
      <Text>{props.nombre}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default UsuarioItem;
