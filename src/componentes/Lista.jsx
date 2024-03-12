import { View,StyleSheet,Text, FlatList } from "react-native"
import { Usuario } from "./Usuario"


export function Lista({colecao , remover}){

    ()  =>{}

    return(
        <View >

          
          <FlatList
            data={colecao}//fonte de dados
            keyExtractor={item => item.codigo} //acessar os campos separadamente
            renderItem={({item}) => (
                //passar parametro dentro do component:props
                <Usuario
                    nome={item.nome}
                    email={item.email}
                    telefone={item.telefone}
                    remover={() =>remover(item.codigo)}
                />
            )}
            ListEmptyComponent={() => (
                <Text style={estilos.texto}>
                    Nenhum usuário cadastrado
                    </Text>
            )}
          />
        
    </View>
    )
}


// essa função e a estilização do componnte, e eles devem ficar no mesmo aeuivo
const estilos = StyleSheet.create({
    texto: {
        color:'#fff',
        paddingTop: 30,
        textAlign: 'center'
    },
   
})
