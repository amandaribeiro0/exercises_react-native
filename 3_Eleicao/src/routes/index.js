import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from '../screens/home/';
import Votar from '../screens/votar/';
import Resultado from '../screens/resultado/'

const Rotas = {
    Home: {
        nome: 'Home',
        screen: Home
    },
    Votar:{
        nome: 'Votar',
        screen: Votar
    },
    Resultado:{
        nome: 'Resultado',
        screen: Resultado
    }
};


// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);