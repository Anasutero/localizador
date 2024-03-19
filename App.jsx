import { StyleSheet, StatusBar, View } from 'react-native';
import { Inicial } from './src/telas/Inicial';
import { Usuarios } from './src/telas/Usuarios';
import { Login } from './src/telas/Login';
import { Sobre } from './src/telas/Sobre';
import { Cadastro } from './src/telas/Cadastro';

//ele starta a aplicaçõ
export default function App() {
  return (
    // tudo esta dentro do componente viiew//
    //para fazr o css , voce cria ai voce declara o css e depois em baixo faz o css.
    <View style={styles.container}>
      <StatusBar barStylestyle="light-content" />
      <Inicial/>
      
    </View>
  );
}
//estilização , css no js//
const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    backgroundColor: '#fb6f92'
  },
});