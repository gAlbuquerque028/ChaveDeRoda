import {useState} from 'react'
import {View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity, Alert} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { firebaseConfig } from '../../../firebase-config'

export const AlinhamentoMoto = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app)

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(true);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const create = () => {
    let saveDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    let saveTime = `${date.getHours()}:${date.getMinutes()}`
    
    addDoc(collection(db, "agendamentos"), {
      userId: auth.currentUser.uid,
      Categoria: "Moto",
      Servico: "Alinhamento",
      Data: saveDate,
      Hora: saveTime
    }).then(() => {
      console.log('data submitted');
      Alert.alert('Agendamento realizado com sucesso!')
    }).catch((error) => {
      console.log(error)
    });
  }

  const Form = () => {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker} style={styles.button}><Text style={styles.textButton}>Escolha uma data</Text></TouchableOpacity>
      <TouchableOpacity onPress={showTimepicker} style={styles.button}><Text style={styles.textButton}>Escolha um horário</Text></TouchableOpacity>
      <TouchableOpacity onPress={create} style={styles.button}><Text style={styles.textButton}>Realizar Agendamento</Text></TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Form />
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'cyan',
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})