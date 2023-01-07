import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [senha, setSenha] = useState('');
  const [login, setLogin] = useState('');
  
  var sSenha = '12345'
  var sLogin = 'amanda'

  function logar(){
     if (senha === sSenha && login === sLogin){
       navigation.navigate('Bem vinde!')
     };  
  };

  return (
    <View style={styles.container} >
      <View style={styles.tela}>
          <Text style={styles.titulo}>Login</Text>
              <br/>
          <View>
            <Text style={styles.text}>Seu e-mail</Text>
            <TextInput style={styles.input}
              placeholder='exemplo@email.com'
              keyboardType={'email-adress'}
              onChangeText={login => setLogin(login)}
            />
                <br />
            <Text style={styles.text}>Sua senha</Text>
            <TextInput style={styles.input}
              placeholder='1234'
              keyboardType={'visible-password'}
              onChangeText={senha => setSenha(senha) }
            />
          </View>
              <br />
          <View style={styles.check} >
            <CheckBox style={styles.checkbox}
              value={isSelected}
              onValueChange={setSelection}
            />
            <Text style={styles.label} >Manter-me logado</Text>
          </View>
              <br />

          <Button
            title="Logar"
            onPress={logar}
          />
            
      </View>
    </View>

  );
}

function DetailsScreen() {
  return (
    <View style={styles.containerBemVindo}>
      <Image style={styles.image} source={require("./assets/bemVinde.jpg")} />

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Bem vinde!" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  check:{
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
    marginLeft:8
  },
  label:{
    marginLeft:5,
    fontSize:15
  }, 
  titulo:{
    borderBottomColor: '#4682B4',
    borderBottomWidth: 3,
    width:'80%',
    textAlign:'center',
    fontSize:35,
    fontWeight:700,
    color:'#4682B4',
    alignSelf: "center",
  },
  tela:{
    borderWidth:2,
    borderColor:'gray',
    width:'85%',
    height:'40%',
    backgroundColor:'#DCDCDC',
    borderRadius:'5%'
  },
  input:{
    width:'95%',
    height:'50%',
    marginLeft:8,
    borderWidth:2,
    borderWidth:0,
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
    borderRadius:5
  },
  text:{
    fontSize:20,
    marginLeft:7,
  },
  image:{
    width:300,
    height:300,
  },
  containerBemVindo:{
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
})