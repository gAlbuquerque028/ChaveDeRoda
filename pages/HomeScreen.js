import React, {useEffect} from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native';

import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

    const SignOut = () => {
      auth.signOut().then(() => {
        navigation.navigate('Chave De Roda')
      })
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <TouchableOpacity onPress={SignOut} style={[styles.button, {backgroundColor: '#fff'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      width: 250,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      borderColor: '#000',
      borderWidth: 1,
    }
  });