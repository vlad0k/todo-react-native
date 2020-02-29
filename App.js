import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, StatusBar, Clipboard} from 'react-native';

import Header from './components/header';
import ToDoItem from './components/toDoItem';
import AddToDo from './components/addToDo';

export default function App() {

  const [todos, setTodos] = React.useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the ps4', key: '3'},
  ]);

  const [showSnackBar, setShowSnackBar] = useState(false);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text, setText) => {

    if (text.length > 3){
      setText('');
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be more tan 3 charts long', [
        {text: 'Understood'}
      ])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <View style={styles.container}>
        {showSnackBar && <View style={styles.snackBar}><Text style={styles.snackBarText}>Text wast copied to Clipboard</Text></View>}
        <Header />
        <View style={styles.content}>
          <AddToDo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} setShowSnackBar={setShowSnackBar}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    height: '100%',
    flex: 1
  },
  snackBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
    padding: 4,
  },
  snackBarText: {
    color: 'white',
  }
});
