import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DatosPersonales = (props) =>{
    return ( 
      <View style={styles.container}>
      <Text>Proyecto de Desarrollo para Dispositivos Inteligentes</Text>

      <MiComponente />
      <DatoPersonales /> 
      </View>
    );
};

export default DatosPersonales;

function MiComponente() {
    return <Text>Datos Personales</Text>
      
    }
  
    function DatoPersonales() {
      return  <View>
        <Text>Jesús Daniel</Text>
        <Text>Ledesma Arámburo</Text>
        <Text>23 años</Text>
      </View>
    }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
