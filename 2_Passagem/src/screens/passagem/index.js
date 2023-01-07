import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Passagem({ navigation }) {
    const [isSelectedD, setSelectionD] = useState(false);
    const [isSelectedC, setSelectionC] = useState(false);
    const [isSelectedB, setSelectionB] = useState(false);
    const [isSelectedP, setSelectionP] = useState(false);
    return (
        <View style={styles.containerPassagem}>
            <Image style={styles.image} source={require("../passagem/logo.png")} />
            <br></br>
            <Text style={styles.text}>Destino</Text>
            <TextInput style={styles.input}
                placeholder='Ex: Bahia'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>Origem</Text>
            <TextInput style={styles.input}
                placeholder='Ex: São Paulo'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>Data da viagem</Text>
            <TextInput style={styles.input}
                placeholder='Ex: 27/05/2022'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>Horário do vôo</Text>
            <TextInput style={styles.input}
                placeholder='Ex: 14:30'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>Preço da passagem</Text>
            <TextInput style={styles.input}
                placeholder='R$:230,50'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text} >Selecione a forma de pagamento</Text>
            <View style={styles.check} >
                <CheckBox style={styles.checkbox}
                    value={isSelectedD}
                    onValueChange={setSelectionD}
                /><Text style={styles.label} >Débito</Text>
                <br />
                <CheckBox style={styles.checkbox}
                    value={isSelectedC}
                    onValueChange={setSelectionC}
                /><Text style={styles.label} >Crédito</Text>
                <br />
                <CheckBox style={styles.checkbox}
                    value={isSelectedP}
                    onValueChange={setSelectionP}
                /><Text style={styles.label} >Pix</Text>
                <br />
                <CheckBox style={styles.checkbox}
                    value={isSelectedB}
                    onValueChange={setSelectionB}
                /> <Text style={styles.label} >Boleto</Text>
            </View>

            <br />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Destinos')}>
                <Text style={styles.textButton} >Destinos</Text>
            </TouchableOpacity>
            <br />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton} >Home</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    containerPassagem: {
        backgroundColor: '#FFB6C1',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FF69B4',
        borderRadius: 10,
        width: '60%',
        alignItems: "center",
        textAlign: "center"
    },
    textButton: {
        fontSize: 25,
        fontWeight: 500,
        textAlign: 'center',
        alignItems: 'center'
    },
    input: {
        width: '85%',
        borderWidth: 0,
        borderBottomColor: '#FF69B4',
        borderBottomWidth: 4,
        borderRadius: 5
    },
    text: {
        fontSize: 20,
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
      image: {
        width: 250,
        height: 50,
        marginTop:'20%'
    },
})