import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from '../screens/home/';
import Option from '../screens/option';
import Cadastro from '../screens/cadastro';
import Passagem from '../screens/passagem';
import Destinos from '../screens/destinos'

const Rotas = {
    Destinos: {
        nome: "Destinos",
        screen: Destinos
    },
    Home: {
        nome: "Home",
        screen: Home
    },
    Option: {
        nome: "Option",
        screen: Option
    },
    Cadastro: {
        nome: "Cadastro",
        screen: Cadastro
    },
    Passagem: {
        nome: "Passagem",
        screen: Passagem
    },

};



// Criar as Rotas
const Navegacao = createSwitchNavigator(Rotas);
// Passar para o App
export default createAppContainer(Navegacao);