import React from "react";
import { StyleSheet, View, Text} from "react-native";


import AtualizarHora from "./horaAtualizada";
import AtualizarData from "./dataAtualizada";


export default function Ponto(){


    return(
        <>

            <View style={estilo.container}>
                <View style={estilo.title}>
                    <Text style={estilo.titulo}>Registre seu ponto!</Text>
                </View>

                <View>
                    <AtualizarHora/>
                    <AtualizarData />
                </View>

                <View style={estilo.registro}>
                    <Text style={estilo.titulo}>Ultimos Registros</Text>
                </View>
            </View>
        </>
    );
}

const estilo = StyleSheet.create({
    container:{
       flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center'
    },
    titulo:{
        fontSize: 20,
        fontWeight:'bold'
    },
    title:{
        bottom: 100
    },
    registro:{
        top: 40
    }
    
})