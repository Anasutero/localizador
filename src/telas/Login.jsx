import { View ,StyleSheet, TextInput, TouchableOpacity ,Text} from "react-native";
import { Cabecalho } from "../componentes/Cabecalho";
import { Inicial } from "./Inicial";
import { useState } from "react"
 
export function Login () {
    const[login, setLogin] = useState('')
    const[senha, setSenha] = useState('')
    console.log(login, senha)


    return (
        <View style={estilos.container}>

    <Cabecalho titulo="Login">
    </Cabecalho>

            <TextInput 
           style={estilos.campo}
           placeholder="Login"
           placeholderTextColor='#000'
           keyboardType="default"
           onChangeText={setLogin}// altercao do input , acontece aqui
            value={login}//oq foi alterado , sera apresentado aqui

          
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
            <Text style={estilos.texto}>Entrar</Text>
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