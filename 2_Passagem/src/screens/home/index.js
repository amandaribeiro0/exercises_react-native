import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Image, TouchableOpacity } from 'react-native';

function Home({ navigation }) {

    return (
        <View style={styles.containerBemVindo}>
            <Image style={styles.image} source={require("../home/home.jpg")} />
            <Text style={styles.bemVindo} >Bem vinde</Text>
            <Text style={styles.aoApp} >ao app Buser.</Text>
                <br/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Option')}>
                <Text style={styles.textButton} > Continuar</Text>
            </TouchableOpacity>
            <br />

        </View>

    );
};

export default Home;

const styles = StyleSheet.create({
    containerBemVindo: {
        backgroundColor: '#FFB6C1',
        width: '100%',
        height: '100vh',
        textAlign: "center",
        alignItems: 'center',  
    },
    bemVindo: {
        marginTop: '35%',
        fontSize: 55,
        fontWeight: 700
    },
    aoApp: {
        fontSize: 40,
        fontWeight: 600
    },
    image: {
        width: 400,
        height: 250,
    },
    button: {
        backgroundColor: '#FF69B4',
        borderRadius: 15,
        width: '55%',
        alignItems: "center",
        textAlign: "center"
    },
    textButton:{
        fontSize: 25,
        fontWeight: 500,
        textAlign:'center',
        alignItems:'center'
    }
});