import React from 'react';
import { Text, View, Button, Image } from 'react-native';

import javascriptImg from '../assets/javascript.png'
import estilo from './estilo';

export default function TelaJavaScript (x) {
  return (
    <View style={estilo.fundoJS}>
      <View style={estilo.container}>
        <Image source={javascriptImg} style={estilo.logo}/>

        <Text style={estilo.titulo}>
          JavaScript
        </Text>

        <Text style={estilo.texto}>
          Veja 2 tecnologias para se tornar um programador fullstack web JavaScript.
        </Text>

        <View style = { estilo.boxBotoes }>
          <Button 
            color={"#000000"}
            title="Front-end" 
            onPress = { ()=>x.navigation.navigate('React') } 
          />
          
          <Button 
           color={"#000000"}
            title="Back-end" 
            onPress = { ()=>x.navigation.navigate('Node') } 
          />
        </View>
      </View>
    </View>
  );
}