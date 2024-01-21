// BigButton.android.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const BigButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BigButton;
