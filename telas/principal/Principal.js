import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


import Background from "../../assets/components/Background";

export default function Principal(){
    const navigation = useNavigation();
    
    return(
    <>
    <Background cor='#F2E8E8' />
    <View style={estilo.container}>
        <TouchableOpacity style={estilo.botao} onPress={() => {
            navigation.navigate('login')
        }}>
            <Text style={estilo.texto}>Entrar</Text>
        </TouchableOpacity>
    </View>
    </>
    );
}

const estilo = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 700,
        bottom: 0,
        left: 40,
        right: 0,
        width: '80%'
    },
    texto:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 'bold'
    },
    botao:{
        backgroundColor: '#790707',
        borderRadius: 12,
        height: 60,
        paddingVertical: 16    
    },
})