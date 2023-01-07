import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >ELEIÇÕES 2022</Text>
            <Image style={styles.image} source={require("../home/vote.png")} />
            <br></br>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Votar')}>
                <Text style={styles.textButton}> VOTAR </Text>
            </TouchableOpacity>
            <br />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Resultado')}>
                <Text style={styles.textButton}> RESULTADO </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F08080',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        textAlign:'center'
    },
    image: {
        width: 350,
        height: 350,
        borderRadius:'10%'
    },
    title:{
        fontSize:30,
        fontWeight:900
    },
    button:{
        backgroundColor:'#DC143C',
        borderRadius: 15,
        width: '45%',
        alignItems: "center",
        textAlign: "center",
    },
    textButton:{
        fontSize: 20,
        fontWeight: 700,
        textAlign:'center',
        alignItems:'center',
        color:'white'
    }
});
