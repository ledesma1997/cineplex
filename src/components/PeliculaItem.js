import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PeliculaItem = (props) => {
  return (
    <TouchableOpacity>
    <View style={{ 
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }}>
    <Image source={{
        uri: props.back
    }} style = {{width:100, 
                height:100}} />
      <Text>{props.original}</Text>
      <Text>{props.vista}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default PeliculaItem;
