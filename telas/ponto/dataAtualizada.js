import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const largura = Dimensions.get('screen').width;

export default function AtualizarData(){

    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');

    const atualizarData = () =>{
        const data = new Date();
        const dia = format(data, 'dd');
        const mes = format(data, 'MMMM');
        const ano = format(data, 'yyyy');
        setDia(dia);
        setMes(mes);
        setAno(ano);
    } 

    useEffect(() =>{
        atualizarData();

        const intervalo = setInterval(() => {
            atualizarData();
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return( 
        <View style={estilo.container}>
            <Text style={estilo.texto}> {dia} de {mes} de {ano}</Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 140,
        borderWidth: 2,
        borderColor: 'black',
        width: largura * 0.7,
        alignSelf: 'center',
        backgroundColor: '#F2E8E8',
        height: 40
    },
    texto:{
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 35,
        fontWeight: 'bold'
    }
})