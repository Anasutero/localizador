import { useState } from "react"
import { View,StyleSheet, TextInput, TouchableOpacity ,Text} from "react-native"


export function Formulario({adicionar}){
//onde eu armazeno dados , para tratar no meu componente e para isso que serve o state
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[telefone, setTelefone] = useState('')


    return(
        <View style={estilos.container} >


        <View style={estilos.containerCampo}>
           <TextInput 
           style={estilos.campo}
           placeholder="Nome"
           placeholderTextColor='#000'
           keyboardType="default"
            onChangeText={setNome}// altercao do input , acontece aqui
            value={nome}//oq foi alterado , sera apresentado aqui
           />

            <TextInput 
              style={estilos.campo}
            placeholder="Email"
            placeholderTextColor='#000'
            keyboardType="email-address"
            onChangeText={setEmail}// altercao do input , acontece aqui
            value={email}//oq foi alterado , sera apresentado aqui
           />

            <TextInput 
            style={estilos.campo}
            placeholder="Telefone"
            placeholderTextColor='#000'
            keyboardType="phone-pad"
            onChangeText={setTelefone}// altercao do input , acontece aqui
            value={telefone}//oq foi alterado , sera apresentado aqui
            />
        </View>

        <TouchableOpacity  
            style={estilos.botao}
            onPress={() => adicionar(nome, email,telefone)}
        >
            <Text style={estilos.texto} >+</Text>
        </TouchableOpacity>
        
    </View>
    )
}


// essa função e a estilização do componnte, e eles devem ficar no mesmo aeuivo
//Área de Estilização
// O export permita que esse objeto estilos seja importado em qlqr lugar
const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical:10,
        marginVertical:10,
        color: "#000"
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
        fontSize: 16
    },
    botao: {
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        height: 170,
        backgroundColor: '#ffc2d1',
        marginStart: 10,
        borderRadius: 5,
        marginVertical: 5
    },
    texto: {
        color: '#000',
        fontSize: 25
    }
 
});