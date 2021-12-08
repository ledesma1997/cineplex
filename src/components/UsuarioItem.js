import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const UsuarioItem = (props) => {
  return (
    <TouchableOpacity onPress = { ()=>{
      props.navigation.navigate("Peliculas", {
          id : props.id,
          nombre : props.name,
          navigation : props.navigation
      })
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
        <Text>{props.id}</Text>

    </View>
    </TouchableOpacity>
  );
};

export default UsuarioItem;
