//todo componente deve começar com letra maiscula
import {StyleSheet, View , Text} from "react-native"

//criaçõ de um arrow funciton para a criação do componente 
export const Cabecalho =({titulo,subtitulo}) => {
    return(
        //aplicacao do css no componente
        <View style={estilos.conteiner}>
            <Text style={estilos.texto} >{titulo}</Text>
            <Text style={estilos.texto}>{subtitulo}</Text>
        </View>
    )
}

//ESTILIZAÇÃO
//string , deve contem aspas 
const estilos = StyleSheet.create({
    conteiner:{
    
        alignItems: 'center',
        paddingVertical: 12

    },
    texto:{
        color: '#000',
        fontSize: 24,
        fontWeight:'300'
    }
})