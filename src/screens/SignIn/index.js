import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useContext } from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';

import {LoginContext} from '../../utils/Context';

export default function SignIn() {

    const {isAuthenticated, setIsAuthenticated} = useContext(LoginContext)

    return(
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
            <View style={{ flexDirection: 'column', width: '100%', justifyContent: 'space-around' }}>
            <TextInput style={{ width: '90%', margin: '5%', borderBottomColor: '#333', borderRadius: 10, color: '#333' }} placeholder="Nome" /> 
            <TextInput secureTextEntry={true} style={{ width: '90%', margin: '5%', borderRadius: 10, color: '#333' }} placeholder="Senha" /> 
            <Pressable onPress={() => setIsAuthenticated(true)} style={{ justifyContent: 'center', alignItems: 'center', width: '90%', margin: '5%', borderRadius: 10, backgroundColor: '#333', height: 50 }}>
                <Text style={{ color: '#fff' }}>SignIn</Text>
            </Pressable>
            {isAuthenticated ? <Text style={{ textAlign: 'center' }}>You're logged in</Text> : <Text style={{ textAlign: 'center' }}>You're not logged in</Text>}
            </View>
        </View>
    )
}