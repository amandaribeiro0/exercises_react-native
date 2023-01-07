import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import contador from '../../contador'

export default function Resultado({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.candidatos} >
                <Text style={styles.text} > Lula 1    {contador[0].voto}</Text>
                <br />
                <Text style={styles.text}> Lula 2    {contador[1].voto}</Text>
                <br />
                <Text style={styles.text}> Lula 3    {contador[2].voto}</Text>
                <br />
                <Text style={styles.text}> Em branco   {contador[3].voto}</Text>
                <br />
            </View>
            <br />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textButton}> Home </Text>
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
    candidatos: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 25,
        borderBottomColor: '#DC143C',
        borderBottomWidth: 3,
        borderRadius: 5,
    }
})