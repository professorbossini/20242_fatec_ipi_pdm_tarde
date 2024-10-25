import { useState } from 'react'
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'

interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  //guardar o que o usuário digita numa variável de estado, usando o hook useState, chame essa variável de lembrete e a função associada de setLembrete
  //exibir o lembrete logo abaixo do TextInput usando um Text
  //resultado esperado: a cada letra digitada, a aplicação exibe o novo texto logo abaixo do campo em que o usuário digita
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState<Lembrete[]> ([])

  const adicionar = () => {
    if (lembrete.length >= 1){
      //construir um lembrete com id igual à data atual do sistema e texto igual ao valor existente na variável de estado
      const novoLembrete: Lembrete = {
        id: Date.now().toString(),
        texto: lembrete
      }
      // utilizar o hook associado à lista de lembretes para adicionar o novo lembrete no final da lista
      setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual]) //spread
      //limpar o campo em que o usuário digita o lembrete atualizando a variável de estado corrrespondente
      setLembrete('')
    }
    else{
      Alert.alert('É preciso digitar um lembrete')
    }

  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite um lembrete...'
        onChangeText={(lembreteDigitado) => setLembrete(lembreteDigitado)}
        value={lembrete}/>
      <Pressable
        style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={adicionar}>
          Salvar lembrete
        </Text>
      </Pressable>
      <FlatList
        keyExtractor={item => item.id}
        style={styles.list} 
        data={lembretes}
        renderItem={l => (
          <View
            style={styles.listItem}>
            <Text
              style={styles.listItemText}>
              {l.item.texto}
            </Text>
            <View
              style={styles.listItemButtons}>
              <Pressable>
                <AntDesign 
                  name='delete'
                  size={24}/>
              </Pressable>
              <Pressable>
                <AntDesign 
                  name='edit'
                  size={24}
                />
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    textAlign: 'center',
    borderRadius: 4
  },
  button: {
    width: '80%',
    //material design blue 500
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4  
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  list: {
    marginTop: 12,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 4
  },
  listItem: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    textAlign: 'center',
    width: '70%'
  },
  listItemButtons: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-evenly'
  }
});
