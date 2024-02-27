import { StyleSheet,TouchableOpacity ,Text} from "react-native"
import {useState } from 'react'

// props e utilizado quando eu quero recupera propriedades, assim  e possivel passar informaçoes dentro do componente e reutiliza-las.Passagem de parametros.({})-isso e props do jeito simples.
export const Botao = ({texto}) =>{

// funcao de leitura e funcao de alteração
// sempre usar state quando eu quiser mecher com dados e apresentar dados dentro do componente
    const [cliques, setCliques] = useState(0)

    const contarCliques = () =>{
       setCliques (cliques + 1)
    }


    return(
        <TouchableOpacity 
            style={estilos.conteiner}
            onPress={contarCliques}
        >
            <Text style={estilos.texto}>{texto} {cliques}</Text>
        </TouchableOpacity>
    )
}

//ESTILIZAÇÃO
//string , deve contem aspas 
const estilos = StyleSheet.create({
    conteiner:{
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 150,
        marginTop: 24,
        marginStart:24,
        borderRadius:12,
        borderColor: '#000',
        borderLeftWidth:1

    },
    texto:{
        color: '#fff',
        fontSize:20
    }
})