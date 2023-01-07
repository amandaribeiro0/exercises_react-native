import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, TouchableOpacity } from 'react-native';

function Cadastro({ navigation }) {
    return (
        <View style={styles.containerCad}>
            <Text style={styles.head}> </Text>
            <Text style={styles.text}>Nome completo</Text>
            <TextInput style={styles.input}
                placeholder='Amanda Ribeiro'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>Data de nascimento</Text>
            <TextInput style={styles.input}
                placeholder='17/09/2004'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>CPF</Text>
            <TextInput style={styles.input}
                placeholder='000.000.000-00'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>Endereço</Text>
            <TextInput style={styles.input}
                placeholder='Rua XXXXX'
                keyboardType={'text'}
            />
            <br />
            <Text style={styles.text}>Cidade</Text>
            <TextInput style={styles.input}
                placeholder='São Paulo'
                keyboardType={'text'}
            />
            <br />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Passagem')}>
                <Text style={styles.textButton} >Passagem</Text>
            </TouchableOpacity>
            <br />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton} >Home</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Cadastro;

const styles = StyleSheet.create({
    containerCad: {
        backgroundColor: '#FFB6C1',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        alignItems: 'center',
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
    head: {
        marginTop: '45%'
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
});