import React, {useEffect} from "react";
import {Alert, FlatList, TouchableOpacity, StyleSheet, Text, View} from "react-native";
import PeliculaItem from "../components/PeliculaItem";


const Peliculas = (props) => {
    useEffect(() => {
        cargarUsuarios();
    }, []);


    const [arreglo, setArreglo] = React.useState([]);
    const id = props.route.params.id;
    const nombre = props.route.params.nombre;

    const cargarUsuarios = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=545fc94d35f8194b259e5a97845b5e67&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`)
            .then((response) => response.json())
            .then((json) => {

                setArreglo(json.results);
            })
            .catch(() => {
                Alert.alert('Error!!');
            });
    };
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}> Peliculas {nombre} </Text>

                <View style={styles.items}>
                    {
                        arreglo.map((item, index) => {

                            return (
                                <TouchableOpacity key={index} onPress={() => {
                                    props.navigation.navigate("PeliculaItem", {
                                        id: item.id
                                    })
                                }}>
                                    <View>
                                        <Text> {item.original_title} </Text>
                                        <Text> {item.id} </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>


        </View>

    )
        ;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',

    },

    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});

export default Peliculas;
