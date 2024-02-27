import{StyleSheet ,View, } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'
import { Botao } from '../componentes/Botao'

//VIEW E O CONTAINER.
//TODO COMPONENTE QUE FOR TILIZAR DEVE SER IMPORTADO.
//o retorn vai gerar um container que envolve todo o resto
//view e referente a div no html.
//ele e o componnte
export function Inicial(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho 
            titulo="SENAI ROBERTO MANGE"
            subtitulo="2DS"
            />

            <Botao texto="Usuário"/>
            <Botao texto="Sensores"/>
            <Botao texto="Sobre"/>
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