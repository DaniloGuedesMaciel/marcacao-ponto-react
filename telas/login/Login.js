import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Background from "../../assets/components/Background";

const largura = Dimensions.get('screen').width;

const FormularioValidado = () => {
  const navigation = useNavigation();
  const [dadosFormulario, setDadosFormulario] = useState({
    usuario: '',
    senha: '',
  });

  const [dadosRecebidos, setDadosRecebidos] = useState([
    {usuario: 'ja', senha: '123456'},
    {usuario: 'teste', senha: '123456'},
    {usuario: 'dan', senha: 'saulve'},
  ]);

  // Dicionário de regras de validação
  const regrasValidacao = {
    usuario: (valor) => valor.length > 0, // Exemplo: usuário deve ter pelo menos 1 caractere
    senha: (valor) => valor.length >= 6, // Exemplo: senha deve ter pelo menos 6 caracteres
  };

  const handleSubmit = () => {
    // Verificar as regras de validação
    for (const campo in dadosFormulario) {
      const valor = dadosFormulario[campo];
      const regraValidacao = regrasValidacao[campo];

      if (regraValidacao && !regraValidacao(valor)) {
        Alert.alert('Erro de validação', `Campos inválidos`);
        return; // Se um campo não atender à validação, interrompe imediatamente o processo
      }
    }

    // Se o loop terminar sem retornar, significa que todos os campos passaram na validação
    const encontrouCorrespondencia = dadosRecebidos.some(
      (dados) =>
        dados.usuario === dadosFormulario.usuario &&
        dados.senha === dadosFormulario.senha
    );

    if (encontrouCorrespondencia) {
      navigation.navigate('ponto');
    } else {
      Alert.alert('Erro', 'Os dados digitados são inválidos.');
    }
  };


  return (
    <>
      <Background cor='#F2E8E8' />
      <View>
        <View style={estilo.container}>
          <TextInput
            placeholder="Usuário"
            value={dadosFormulario.usuario}
            onChangeText={(text) => setDadosFormulario({ ...dadosFormulario, usuario: text })}
            style={estilo.input}
          />

          <TextInput
            placeholder="Senha"
            value={dadosFormulario.senha}
            onChangeText={(text) => setDadosFormulario({ ...dadosFormulario, senha: text })}
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

export default FormularioValidado;