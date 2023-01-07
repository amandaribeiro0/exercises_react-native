import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
    const [juros, setJuros] = useState('');
    const [capital, setCapital] = useState('');
    const [taxa, setTaxa] = useState('');
    const [tempo, setTempo] = useState('');

    function calculaJuros(){
      const percentual = taxa/100
      setTaxa(percentual)

      const Resultado = (capital*percentual*tempo)
      setJuros(Resultado)
    }

  return (
    <View style={styles.container}>

    <Image style={styles.image} source={require("./assets/juros.png")} />
      
      <Text style={styles.titulo} >Digite os valores para calcular os juros</Text>

      <br/>
      <TextInput style={styles.input}
        placeholder='Digite o capital'
        keyboardType={'numeric'}
        onChangeText={capital => setCapital(capital)}
      />

      <br/>

      <TextInput style={styles.input}
        placeholder='Digite os meses'
        keyboardType={'numeric'}
        onChangeText={tempo => setTempo(tempo)}
      />

      <br/>

      <TextInput style={styles.input}
        placeholder='Digite o percentual'
        keyboardType={'numeric'}
        onChangeText={taxa => setTaxa(taxa)}
      />

      <br/>
      <Button style={styles.botao}
          title='Calcular'
          onPress={calculaJuros}
      />

      <br/>

     <Text style={styles.resultado} > {juros ? `Resultado: ${juros}`:''}</Text>
     
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontSize:20,
    color:'black',
    borderWidth:0,
    borderBottomColor: 'purple',
    borderBottomWidth: 2,
    borderRadius:4,
    textAlign:'center',
    width:'50%',
    height:'5%'
  },
  titulo:{
    fontSize:30,
    fontWeight:'700',
    textAlign:'center',
  },
  botao:{
    width:'50%',
    backgroundColor:'purple'
  },
  resultado:{
    fontSize:30,
    fontWeight:'500',
    borderBottomColor: 'purple',
    borderBottomWidth: 2,
    borderRadius:7,
  },
  image:{
    width:250,
    height:250,
    marginTop:'-15%'
  },
});
