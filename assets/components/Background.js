import React from 'react';
import { StyleSheet, StatusBar, View, Dimensions, Image} from 'react-native';

import Imagem from '../imagem/marcadorPonto.jpeg';

const width = Dimensions.get('screen').width;

export default function Background({cor}){
    return(
        <>
            <View style={[estilo.container, {backgroundColor: cor}]}>
                <View style={estilo.imagem}>
                    <Image source={Imagem} style={estilo.ponto} />
                    <StatusBar />
                </View>
            </View>
        </>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
    },
    imagem:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ponto: {
        width: '100%',
        height: 390 / 410 * width,
        
    },
})