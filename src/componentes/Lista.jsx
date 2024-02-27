import { View,StyleSheet,Text } from "react-native"


export function Lista(){
    return(
        <View >
            <Text style={estilos.texto}>Lista</Text>
        
    </View>
    )
}


// essa função e a estilização do componnte, e eles devem ficar no mesmo aeuivo
const estilos = StyleSheet.create({
    texto: {
        color:'#fff',
        paddingTop: 24
    },
  
})
