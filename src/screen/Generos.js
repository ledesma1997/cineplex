import React, { useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import GeneroItem from "../components/GeneroItem";

const Generos = (props) => {
useEffect(()=>{
    cargarGeneros();
},[]);

const [arreglo,setArreglo] = React.useState([]);

const cargarGeneros = () =>{
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=545fc94d35f8194b259e5a97845b5e67&language=es-MX')
    .then((response) => response.json())
    .then((json) => {
        setArreglo(json.genres);
    })
    .catch(() => {
        Alert.alert('Error!!');
    });
};
  return (
    <FlatList
        data = {arreglo}
        renderItem = {(item) => <GeneroItem
                            nombre = {item.item.name}
                            id = {item.item.id}
                            navigation = {props.navigation}
                            />}
        keyExtractor = {(item,index) => `e${item.id}`}
    />
  );
};

export default Generos;
