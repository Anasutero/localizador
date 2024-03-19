import { View ,StyleSheet, TextInput, TouchableOpacity ,Text} from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";
import { useState } from "react"

export function Cadastro () {
    const[nome, setNome] = useState('')
    const[usuario, setUsuario] = useState('')
    const[senha, setSenha] = useState('')
    console.log(nome ,usuario,senha)

    return (

        <View style={estilos.container}>
           <Cabecalho titulo="Cadastro">

           </Cabecalho>
        <TextInput 
              style={estilos.campo}
            placeholder="Nome"
            placeholderTextColor='#000'
            keyboardType="usuario"
            onChangeText={setNome}// altercao do input , acontece aqui
            value={nome}//oq foi alterado , sera apresentado aqui
           />
           
            <TextInput 
           style={estilos.campo}
           placeholder="Usuario"
           placeholderTextColor='#000'
           keyboardType="default"
           onChangeText={setUsuario}// altercao do input , acontece aqui
           value={usuario}//oq foi alterado , sera apresentado aqui
          
           />

           
            <TextInput 
              style={estilos.campo}
            placeholder="Senha"
            placeholderTextColor='#000'
            keyboardType="senha"
            onChangeText={setSenha}// altercao do input , acontece aqui
            value={senha}//oq foi alterado , sera apresentado aqui
           />


         
        <TouchableOpacity  
             style={estilos.botao}>
             <Text style={estilos.texto}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
      
      
    )
}

// essa função e a estilização do componnte, e eles devem ficar no mesmo aeuivo
//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar
const estilos = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#fb6f92'
        
    },
    containerCampo:{
        flex: 1
    },
    campo: {
        height: 50,
        backgroundColor: '#ffe5ec',
        color: '#000',
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#000',
        marginVertical: 5,
        padding: 1,
        borderRadius: 5,
        
    },
    texto: {
        color: '#fff',
        fontSize: 15
    }
 
  
 
});

