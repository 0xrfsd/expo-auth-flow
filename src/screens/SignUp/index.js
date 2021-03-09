import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';

export default function SignUp() {
    return(
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
            <View style={{ flexDirection: 'column', width: '100%', justifyContent: 'space-around' }}>
            <TextInput style={{ width: '90%', margin: '5%', borderBottomColor: '#333', borderRadius: 10, color: '#333' }} placeholder="Nome" /> 
            <TextInput secureTextEntry={true} style={{ width: '90%', margin: '5%', borderRadius: 10, color: '#333' }} placeholder="Senha" /> 
            <Pressable style={{ justifyContent: 'center', alignItems: 'center', width: '90%', margin: '5%', borderRadius: 10, backgroundColor: '#333', height: 50 }}>
                <Text style={{ color: '#fff' }}>SignUp</Text>
            </Pressable>
            </View>
        </View>
    )
}