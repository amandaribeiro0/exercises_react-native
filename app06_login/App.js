import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox } from 'react-native';

export default function App() {

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.tela} >
        <Text style={styles.titulo} > Login </Text>
            <br/>

        <View>
            <Text style={styles.text}>Seu e-mail</Text>
            <TextInput style={styles.input}
              placeholder='exemplo@email.com'
              keyboardType={'email-adress'}
            />
                <br/>
            <Text style={styles.text} >Sua senha</Text>
            <TextInput style={styles.input}
              placeholder='1234'
              keyboardType={'visible-password'}
            />
        </View>
          <br/>

        <View style={styles.check} >
          <CheckBox 
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          /> 
          <Text style={styles.label} >Manter-me logado</Text>
        </View>
          <br/>
        
        <Button style={styles.bt}
          title='Logar'
        />
          <br/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

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
    height:'37%',
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
});
