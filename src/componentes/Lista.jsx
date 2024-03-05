import { View,StyleSheet,Text, FlatList } from "react-native"
import { Usuario } from "./Usuario"


export function Lista(){

    const listaUsuarios = [
       {
            codigo:'1',
            nome: "João",
            email: "joao@gmail.com",
            telefone: '(19)9989-6991'
        },

        {
            codigo:'2',
            nome: "Maria",
            email: "maria@gmail.com",
            telefone: '(19)9653-6932'
        },

        {
            codigo:'3',
            nome: "Ana",
            email: "Ana@gmail.com",
            telefone: '(19)9123-9898'
        },
        {
            codigo:'4',
            nome: "Sarah",
            email: "sarah@gmail.com",
            telefone: '(19)9989-6991'
        },

        {
            codigo:'5',
            nome: "Bruna",
            email: "bruna@gmail.com",
            telefone: '(19)9653-6932'
        },

        {
            codigo:'6',
            nome: "Stella",
            email: "stella@gmail.com",
            telefone: '(19)9123-9898'
        },
    
    
        
    ]

    return(
        <View >
          
          <FlatList
            data={listaUsuarios}
            keyExtractor={(item) => {item.codigo}} //acessar os campos separadamente
            renderItem={({item}) => (
                //passar parametro denro do component:props
                <Usuario
                    nome={item.nome}
                    email={item.email}
                    telefone={item.telefone}
                />
            )}
          />
        
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
