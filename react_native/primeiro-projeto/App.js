import { useState } from 'react' // hook
import {
  Button,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  //sempre chame seus hooks dentro da função que define o componente
  const [contador, setContador] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      {/* defina um botão que atualiza a variável contador */}
      {/* faça o teste, clique e veja que o valor é atualizado na tela */}
      {/* encontre o componente certo no site oficial */}
      <Button 
        title='Incrementar'
        onPress={() => setContador(contador + 1)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
