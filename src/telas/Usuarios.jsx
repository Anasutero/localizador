import { View,StyleSheet } from "react-native"
import { Cabecalho } from "../componentes/Cabecalho"
import { Formulario } from "../componentes/Formulario"
import { Lista } from "../componentes/Lista"
import { useState } from "react"
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'

export function Usuarios(){

    //criação do array, o use  state e onde eu armazeno as informaçoes , para interagir com a tela
    //isso [] faz com que ele entenda que vai armazenar uma colleção de dados 
    const[listaUsuarios , setListaUsuarios]= useState([]);

    
    //funcao para funcionar o botao
    //pasagem de parametro para funcionar a função
    function adicionarUsuario(nome, email,telefone){

        let novoUsuario ={
            codigo: uuid() ,//autoinclemnte do id, ou seja com isso va gerar o id automatico
            nome: nome,
            email: email,
            telefone: telefone
        }
        //junta informaçoes e espalha informações, nesse caso ele vai pegar os lementos do vetor e vai abrir eles , ou  seja espalaha
        //setlista e usadao para alterar e para ler o lista usuario, ou seja get e set(update)
        //set e a funcionalidade , ele faz alterações no state , por isso e utilizado
        //passagem de funções, referencias
       setListaUsuarios ([...listaUsuarios, novoUsuario])

    }
    
    const removerUsuario = codigo =>{
        setListaUsuarios(
            listaUsuarios.filter(usuario => usuario.codigo !== codigo)
        )
     
    }

  

    //passar função por meio de outra funcao
    return(
        <View style={estilos.conteiner}>
        <Cabecalho  titulo="Usuarios"/>
        <Formulario adicionar={adicionarUsuario}/>
        <Lista
        colecao={listaUsuarios} 
        remover={removerUsuario}
        />
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