import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from "react-native";

import {ValidarCadastro} from './validarLogin';

import { useNavigation } from "@react-navigation/native";

import Background from "../../assets/components/Background";

const largura = Dimensions.get('screen').width;

export default function Login(){
    const navigation = useNavigation();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async () => {
        // Valida os dados do formulário
     try{
        const valido = await ValidarCadastro(usuario, senha);
      
        if (valido) {
            navigation.navigate('ponto')
        } else {
          alert('Os dados do formulário são inválidos.');
        }
     }catch(erro){
        console.log('Erro ao lidar com a promisse', erro);
     }
            
    }  
    
    return(
        <>
            <Background cor='#F2E8E8' />
            <View>
            <View style={estilo.container}>
                        <TextInput placeholder="Usuário" 
                        value={usuario}
                        onChangeText={(text) => setUsuario(text)}
                        style={estilo.input}/>

                        <TextInput placeholder="Senha" 
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                        style={estilo.input}
                        secureTextEntry={true}
                    />
                    <View style={estilo.containerBotao}>
                    <TouchableOpacity style={estilo.botao} onPress={handleSubmit}>
                        <Text style={estilo.texto}>Prosseguir</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            </>
    );
}

const estilo = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 100,
  
    },
    input:{
        width: largura * 0.98,
        height: 45,
        backgroundColor: '#FFF',
        paddingHorizontal: 5,
        margin: 5,
        borderRadius: 10
    },
    containerBotao:{
        top: 60
    },
    botao:{
        backgroundColor: '#790707',
        alignSelf: 'center',
        borderRadius: 12,  
        width: '80%',
        height: 60,
        paddingVertical: 16
    },
    texto:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: 26
    }
})