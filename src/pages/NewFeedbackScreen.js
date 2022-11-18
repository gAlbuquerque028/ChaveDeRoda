import React from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity, TextInput, Alert} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config'
import { useNavigation } from '@react-navigation/native';
import { getFirestore, addDoc, collection, getDocs} from 'firebase/firestore'
import { useState } from 'react';

const uri = 'data:image/jpeg;base64,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'

export default function NewFeedbackScreen() {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)    
    const auth = getAuth(app);

    const newFeedback = () => {
        addDoc(collection(db, "feedbacks"), {
            userId: auth.currentUser.displayName,
            feedback: text
          }).then(() => {
            console.log('data submitted');
            Alert.alert('Agradecemos o seu feedback.')
            navigation.navigate('Dashboard')
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
      <View style={styles.container}>
        <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />

        <View style={styles.login}>
              <View>
                <TextInput onChangeText={(text) => setText(text)} style={styles.input} placeholder="Deixe seu feedback..." />
              </View>
              <TouchableOpacity onPress={newFeedback} style={[styles.button, {backgroundColor: '#fff'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Enviar Feedback</Text>
              </TouchableOpacity>
            </View>
      </View>
    );
  }

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: 350,
    height: 600,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
});