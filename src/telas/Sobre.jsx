import { View,StyleSheet, Text } from "react-native";
 
export function Sobre () {
    return (

        
        <View  style={estilos.conteiner}>
            <Text style={estilos.texto}>Sobre</Text>
        </View>
    )
}

//ESTILIZAÇÃO
//string , deve contem aspas 
const estilos = StyleSheet.create({
    conteiner:{
        backgroundColor: '#000',
        alignItems: 'center',
        paddingVertical: 12

    },
    texto:{
        color: '#fff',
        fontSize: 24,
        fontWeight:'300',
        textAlign:'center;'
    }
})