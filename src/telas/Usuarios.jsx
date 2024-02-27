import { View,StyleSheet } from "react-native"
import { Cabecalho } from "../componentes/Cabecalho"
import { Formulario } from "../componentes/Formulario"
import { Lista } from "../componentes/Lista"

export function Usuarios(){
    return(
        <View style={estilos.conteiner}>

        <Cabecalho  titulo="Usuarios"/>
        <Formulario />
        <Lista />
    </View>
    )
}

// essa função e a estilização do componnte, e eles devem ficar no mesmo aeuivo
const estilos = StyleSheet.create({
    conteiner: {
        flex:1,
        backgroundColor: '#fb6f92'
    },
  
})