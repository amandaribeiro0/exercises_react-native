import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image  } from 'react-native';

export default function App() {
  const [sIMC, setSIMC] = useState('');
  const [IMC, setIMC] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function calcularIMC(){
    const sAltura = altura*altura
    setAltura(sAltura)

    const calculoIMC = (peso/sAltura)
    setIMC(calculoIMC)


    if (calculoIMC <= 18.4){
      setSIMC('Abaixo do peso')
    }
    if (calculoIMC >= 18.5 && calculoIMC <= 24.49){
      setSIMC('Normal')
    }
    if (calculoIMC >= 25 && calculoIMC <= 29.9){
      setSIMC('Acima do peso')
    }
    if (calculoIMC >= 30 && calculoIMC <= 39.9){
      setSIMC('Obeso')
    }
    if (calculoIMC >40) {
      setSIMC('Obesidade grave')
    }
  }

  return (
    <View style={styles.container}>
      
      <Image style={styles.image} source={require("./assets/imc.png")} />
      <Text style={styles.titulo}>Calcule seu IMC</Text> 
          <br/>

      <TextInput style={styles.input}
        placeholder='Digite seu peso (ex:65)' 
        keyboardType={'numeric'}
        onChangeText={ peso => setPeso(peso)}
      />
        <br/>
      
      <TextInput style={styles.input}
        placeholder='Digite sua altura (ex:1.75)'
        keyboardType={'numeric'}
        onChangeText={altura => setAltura(altura)}
      />
        <br/>
      
      <Button 
        title='Calcular'
        onPress={calcularIMC}
      />
        <br/>
      
      <Text style={styles.resultado}> 
        {IMC ? `Resultado: ${IMC}`: ''} 
      </Text>

      <Text style={styles.resultado} >
        {sIMC ? ` ${sIMC}`:''}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontSize:20,
    color:'black',
    borderWidth:0,
    borderBottomColor: '#4682B4',
    borderBottomWidth: 3,
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
  resultado:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'500',
    borderBottomColor: '#4682B4',
    borderBottomWidth: 2,
  },
  image:{
    width:200,
    height:200,
    marginTop:'-25%',
    marginBottom:'15%'
  },
});
