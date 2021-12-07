import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const DetalleItem = (props) => {
  return (
    <View style={{ 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }}
    >
        <Image source={{
        uri: props.route.params.avatar
    }} style = {{width:100, 
                height:100}} />
      <Text>{props.route.params.nombre}</Text>
      <Text>{props.route.params.apellido}</Text>
    </View>
  );
};

export default DetalleItem;
