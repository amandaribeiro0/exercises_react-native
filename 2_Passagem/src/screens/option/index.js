import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, TouchableOpacity } from 'react-native';

function Option({ navigation }) {
    return (
        <View style={styles.containerOption} >
            <Image style={styles.image} source={require("../option/logo.png")} />
            <Text style={styles.text} >
                O que você deseja?
            </Text>
                <br/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textButton} >Cadastrar</Text>
            </TouchableOpacity>
                <br/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Passagem')}>
                <Text style={styles.textButton} >Comprar passagem</Text>
            </TouchableOpacity>
                <br/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Destinos')}>
                <Text style={styles.textButton} >Destinos nacionais</Text>
            </TouchableOpacity>
                <br/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton} >Home</Text>
            </TouchableOpacity>
        </View>

    );
};

export default Option;

const styles = StyleSheet.create({
    containerOption: {
        backgroundColor: '#FFB6C1',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        alignItems: 'center',  
    },
    button: {
        backgroundColor: '#FF69B4',
        borderRadius: 10,
        width: '70%',
        alignItems: "center",
        textAlign: "center"
    },
    textButton: {
        fontSize: 25,
        fontWeight: 500,
        textAlign: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize:30,
        marginTop:'45%',
        fontWeight:700
    },
    image: {
        width: 250,
        height: 50,
        marginTop:'20%'
    },
});