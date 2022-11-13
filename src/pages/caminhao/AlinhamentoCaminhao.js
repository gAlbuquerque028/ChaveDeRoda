import {useState} from 'react'
import {View, Button, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export const AlinhamentoCaminhao = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const create = () => {
    console.log(date)
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