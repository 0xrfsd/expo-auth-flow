import React from 'react';
import {View, Text, Pressable} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {LoginContext} from '../../utils/Context';


export default function Home() {
    
    const {isAuthenticated, setIsAuthenticated} = React.useContext(LoginContext)

    const navigation = useNavigation();

    return(
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#333' }}>
            <Text style={{ color: '#fff' }}>Home</Text>
            {isAuthenticated ? <Text>You're logged in</Text> : <Text>You're not logged in</Text>}
            <Pressable style={{ borderRadius: 10, justifyContent: 'center', alignItems: 'center', width: '90%', margin: '5%', height: 50, backgroundColor: '#fff' }} onPress={() => setIsAuthenticated(false)}>
            <Text style={{ color: '#333' }}>Sign Out</Text>
            </Pressable>
        </View>
    )
}