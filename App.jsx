import { StyleSheet, StatusBar, View } from 'react-native';
import { Inicial } from './src/telas/Inicial';
import { Usuarios } from './src/telas/Usuarios';

//ele starta a aplicaçõ
export default function App() {
  return (
    // tudo esta dentro do componente viiew//
    //para fazr o css , voce cria ai voce declara o css e depois em baixo faz o css.
    <View style={styles.container}>
      <StatusBar barStylestyle="light-content" />
      <Usuarios/>
    </View>
  );
}
//estilização , css no js//
const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
  },
});