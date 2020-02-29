import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Clipboard} from 'react-native';

export default function TodoItem({ item, pressHandler, setShowSnackBar }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)} onLongPress={() => {Clipboard.setString(item.text); setShowSnackBar(true); setTimeout( () => setShowSnackBar(false), 2000)} }>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  }
});
