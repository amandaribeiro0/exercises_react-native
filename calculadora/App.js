import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {

  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")

  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const operator = splitNumbers[1]
    console.log(splitNumbers)

    if(operator === '*'){
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
    }
    
    if(operator === '/'){
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
    }

    if(operator === '+'){
      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
    }

    if(operator === '-'){
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
    }
  }


  function handleInput(buttonPressed){
    if(buttonPressed ==='*' | buttonPressed === '/' | buttonPressed === '+' | buttonPressed === '-'){
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ')
      return
    }
    if(buttonPressed === 'DEL'){
      console.log(currentNumber)
      setCurrentNumber(currentNumber.substring(0,(currentNumber.length - 1)))
      return
    }

    if(buttonPressed === '.'){
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }

    if(buttonPressed === '+/-'){
      return
    }

    if(buttonPressed == 'AC'){
      setLastNumber('')
      setCurrentNumber('')
      return
    }

    if(buttonPressed === '='){
      setLastNumber(currentNumber + ' = ')
      calculator()
      return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>

      <View style={styles.buttons} >
        {buttons.map((button) =>
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={styles.button}> <Text style={styles.textButton}>{button} </Text></TouchableOpacity>
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 320,
    backgroundColor:'black',
  },
  buttons: {
    backgroundColor:'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    minHeight: 90,
    minWidth: 90,
  },
  textButton: {
    fontWeight:700,
    color: 'black',
    fontSize: 25,

  },
  resultText:{
    color:'white',
    fontWeight:'100',
    fontSize:80,
    margin:10,
    alignSelf:'flex-end',
  },
  historyText:{
    color:'white',
    fontSize:22,
    marginBottom:0,
    marginRight:10,
    alignSelf:'flex-end'
  }
});
