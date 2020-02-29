import React from 'react';
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default function AddToDo({ item, pressHandler, submitHandler }) {

  const [text, setText] = React.useState('')

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
        multiline
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={() => submitHandler(text, setText)}
        title='Add Todo'
        color='coral'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
});
