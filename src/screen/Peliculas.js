import React, { useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import PeliculaItem from "../components/PeliculaItem";


const Peliculas = (props) => {
useEffect(()=>{
    cargarUsuarios();
},[]);

const [arreglo,setArreglo] = React.useState([]);

const cargarUsuarios = () =>{
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=545fc94d35f8194b259e5a97845b5e67&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate')
    .then((response) => response.json())
    .then((json) => {
        console.log(json.results);
        setArreglo(json.results);
    })
    .catch(() => {
        Alert.alert('Error!!');
    });
};
  return (
    <FlatList
        results = {arreglo}
        renderItem = {(item) => <PeliculaItem
                            back = {item.item.backdrop_path}
                            lenguaje = {item.item.original_language}
                            original = {item.item.original_title}
                            vista = {item.item.overview}
                            popu = {item.item.popularity}
                            poster = {item.item.poster_path}
                            date = {item.item.release_date}
                            titulo = {item.item.title}
                            votea = {item.item.vote_average}
                            votec = {item.item.vote_count}
                            navigation = {props.navigation}
                            />}
        keyExtractor = {(item,index) => `e${item.id}`}
    />
  );
};

export default Peliculas;
