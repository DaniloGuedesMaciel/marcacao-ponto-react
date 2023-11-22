import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList, Alert } from "react-native";

import { format } from "date-fns";

const largura = Dimensions.get('screen').width;

export default function AtualizarHora(){

    const [pontoAtual, setPontoAtual] = useState([]);
    const [hora, setHora] = useState('');
    const [limparTimeoutId, setLimparTimeoutId] = useState(null);

    horaAtualizada = () =>{
        const dataAtual = new Date();
        const horaFormat = format(dataAtual, 'HH:mm:ss');
        setHora(horaFormat);
    }


    const registrarPonto = () => {
        const novoRegistro = {id: Date.now(), hora: hora};
        setPontoAtual((prevRegistro) => [novoRegistro, ...prevRegistro]);

        if (limparTimeoutId) {
            clearTimeout(limparTimeoutId);
          }
    
          const novoTimeoutId = setTimeout(() => {
            limparRegistros();
          }, 5000);

          setLimparTimeoutId(novoTimeoutId);

          Alert.alert('Ponto registrado com sucesso!', null, [{ text: 'OK' }]);
      };

      const limparRegistros = () => {
        setPontoAtual([]);
      };

    useEffect(() =>{
        horaAtualizada();
        const intervalo = setInterval(() =>{
            horaAtualizada();
        }, 1000);

        return () => {
            clearInterval(intervalo);
            
            if (limparTimeoutId) {
                clearTimeout(limparTimeoutId);
              }
        };
        
    }, []);


    return(
        <>
            <View style={estilo.container}>
                <Text style={estilo.textoHora}>{hora}</Text>
            </View>

            <View style={estilo.conBotaobotao}>
                <TouchableOpacity style={estilo.botao} onPress={registrarPonto}>
                    <Text style={estilo.texto}>Registrar ponto</Text>
                </TouchableOpacity>

                </View>
                
                <View style={estilo.listaContainer}>
        <FlatList
          data={pontoAtual}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={estilo.itemLista}>
              <Text style={estilo.hora}>{item.hora}</Text>
            </View>
          )}
        />
      </View>
        </>
    );
}

const estilo = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor: 'black',
        borderRadius: 90,
        width: 180,
        height: 180,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#F2E8E8',
    },
    textoHora:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold'
    },
    conBotao:{
        marginTop:10,
        width: largura * 0.4,
        
    },botao:{
        height: 40,
        width: largura * 0.5,
        backgroundColor: '#790707',
        borderRadius: 6,
        marginTop: 50
    },
    texto:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 35
    },
    hora:{
        fontSize: 22,
        fontWeight: "500"
    },
    listaContainer:{
        position: 'absolute',
        top: 350,
        alignSelf: 'center'
    },
    itemLista: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
})