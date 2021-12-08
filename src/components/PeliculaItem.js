import React, {useEffect} from "react";

import {View, Text, StyleSheet, TouchableOpacity, Alert, Image} from 'react-native'


const PeliculaItem = (props) => {
    useEffect(() => {
        cargarPelicula();
    }, []);
    const {id} =  props.route.params;
    console.log(id)

    const [arreglo, setArreglo] = React.useState([]);

    const cargarPelicula = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=545fc94d35f8194b259e5a97845b5e67&language=es-MX`)
            .then((response) => response.json())
            .then((data) => {
                setArreglo(data)
                console.log(arreglo)
            })
            .catch(() => {
                Alert.alert('Error!!');
            });
    }

    return(
        <View >
            <View >
                <Text> {id} </Text>
                <Text> {arreglo.original_title} </Text>
                <Image source={{
                    uri: `https://image.tmdb.org/t/p/w500${arreglo.poster_path}`
                }} style = {{width:100,
                    height:100}} />
                <Text> {arreglo.tagline} </Text>
                <Text> {arreglo.overview} </Text>

            </View>
        </View>
    )
}


export default PeliculaItem;