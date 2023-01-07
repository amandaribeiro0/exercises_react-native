import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import contador from '../../contador'

export default function Votar({ navigation }) {
    const [checked, setChecked] = useState('');
    const [bloq, setBloq] = useState(false)
    const [alerta, setAlerta] = useState('')

    function checkAtivo(valor) {
        if (valor === 1) {
            setChecked('um')
        }
        if (valor === 2) {
            setChecked('dois')
        }
        if (valor === 3) {
            setChecked('tres')
        }
        if (valor === 4) {
            setChecked('quatro')
        }
    }

    function Contador() {
        if (checked == 'um') {
            contador[0].voto += 1
            console.log(contador)
        }
        else if (checked == 'dois') {
            contador[1].voto += 1
        }
        else if (checked == 'tres') {
            contador[2].voto += 1
        }
        else if (checked == 'quatro') {
            contador[3].voto += 1
        }

        setBloq(true)

        if (bloq === false) {
            setAlerta('Só é permitido um voto por vez')
        }
    }

   

    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require("../votar/vote.png")} />
            <Text style={styles.title} >ESCOLHA O CANDIDATO</Text>
            <br />
            <View style={styles.option} >
                <RadioButton
                    value="um"
                    status={checked === 'um' ? 'checked' : 'unchecked'}
                    onPress={() => checkAtivo(1)}
                    color='red'
                />
                <Text style={styles.text} >Lula 1</Text>
            </View>
            <br />
            <View style={styles.option} >
                <RadioButton
                  value="dois"
                  status={checked === 'dois' ? 'checked' : 'unchecked'}
                  onPress={() => checkAtivo(2)}               
                    color='red'
                />
                <Text style={styles.text}>Lula 2</Text>
            </View>
            <br />
            <View style={styles.option} >
                <RadioButton
                 value="tres"
                 status={checked === 'tres' ? 'checked' : 'unchecked'}
                 onPress={() => checkAtivo(3)}
                 color='red'
                />
                <Text style={styles.text}>Lula 3</Text>
            </View>
            <br />
            <View style={styles.option} >
                <RadioButton
                     value="quatro"
                     status={checked === 'quatro' ? 'checked' : 'unchecked'}
                     onPress={() => checkAtivo(4)}
                     color='red'
                />
                <Text style={styles.text} >Em branco</Text>
            </View>

            <br/>
                <Text style={styles.text}>{alerta}</Text>
            <br />

            <TouchableOpacity style={styles.button}  onPress={() => Contador()}>
                <Text style={styles.textButton} > Confirmar </Text>
            </TouchableOpacity>

            <br/>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Resultado')}>
                <Text style={styles.textButton}  > Resultado </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F08080',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#DC143C',
        borderRadius: 15,
        width: '45%',
        alignItems: "center",
        textAlign: "center",
    },
    textButton: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        alignItems: 'center',
        color: 'white'
    },
    option: {
        flexDirection: "row",
    },
    text: {
        fontSize: 15,
        marginTop: 8,
        fontWeight: 650
    },
    title: {
        fontSize: 30,
        fontWeight: 900
    },
    image: {
        width: 360,
        height: 260,
        borderRadius: '10%'
    },
});