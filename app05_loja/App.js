import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [preco, setPreco] = useState('');
  const [desconto, setDesconto] = useState('');
  const [precoFinal, setPrecoFinal] = useState('');

  function calcularDesconto(){
    const sDesconto = 100 - desconto
    const percentual = sDesconto/100
    setDesconto(percentual)

    const calculo = preco*percentual

    setPrecoFinal(calculo)
  }

  function Clear(){
    setPreco('');
    setDesconto('');
    setPrecoFinal('');
  }

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require("./assets/desconto.png")} />
      <Text style={styles.titulo} > Calcule o desconto </Text>

      <TextInput style={styles.input}
        placeholder='Digite o preço do produto'
        keyboardType={'numeric'}
        onChangeText={ preco => setPreco(preco)}
        value={preco}
      />

            <br/>
      <TextInput style={styles.input}
        placeholder='Digite o desconto'
        keyboardType={'numeric'}
        onChangeText={ desconto => setDesconto(desconto)}
        value={desconto}
      />
            <br/>
      <Button
          title='Calcular'
          onPress={calcularDesconto}
      />
            <br/>

      <Button
        title='Clear'
        onPress={Clear}
      /> 
          <br/>
      <Text style={styles.resultado} >
        {precoFinal ? `O preço final é: R$${precoFinal}`:''}
      </Text>

      <Text style={styles.footer} >
          loja@loja.com | (11)4002-8922
      </Text>
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
    borderBottomColor: '#483D8B',
    borderBottomWidth: 3,
    borderRadius:4,
    textAlign:'center',
    width:'65%',
    height:'5%',
  },
  titulo:{
    fontSize:30,
    fontWeight:'700',
    textAlign:'center',
  },
  resultado:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'500',
    borderBottomColor: '#483D8B',
    borderBottomWidth: 2,
  },
  image:{
    width:200,
    height:200,
    marginTop:'30%',
    marginBottom:'15%'
  },
  footer:{
    width:'100%',
    height:'5%',
    color:'white',
    fontSize:20,
    textAlign:'center',
    fontWeight:'500',
    marginTop:'50%',
    backgroundColor:'#483D8B',
  }
});
