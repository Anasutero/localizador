import { View,StyleSheet, TouchableOpacity,Text } from "react-native"

export function Usuario({nome , email,telefone}){
    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerDados}>
                <Text style={estilos.texto}>{nome}</Text>
                <Text style={estilos.texto}>{email}</Text>
                <Text style={estilos.texto}>{telefone}</Text>
            </View>

            <TouchableOpacity style={estilos.botao}>
                <Text style={estilos.textoBotao}>-</Text>
            </TouchableOpacity>

    </View>
    )
}

// essa função e a estilização do componnte, e eles devem ficar no mesmo aeuivo
const estilos = StyleSheet.create({
    conteiner: {
        flexDirection:'row',
        margin:5 
    },
    conteinerDados:{
        flex:1,
        backgroundColor:'#ffe5ec',
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:5
    },
    botao:{
        width: 60,
        height:65,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc2d1',
        marginStart: 10,
        borderRadius: 5,
    },
    texto:{
        color:'#000',
        fontSize:13

    },
    textoBotao:{
        fontSize:26,
        color:'#000'
    }
  
})