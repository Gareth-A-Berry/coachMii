import React from 'react'
import { View, Text, TextInput } from 'react-native'


const Input = ({ label, value, onChangeText, autoCorrect, placeholder, secureText, style }) => {
  return (
        <TextInput
            secureTextEntry={secureText}
            placeholder={placeholder}
            autocorrect={autoCorrect}
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
            underlineColorAndroid={'transparent'}
        />
  )
}

const styles = {
  input: {
    // Makes the text input full width
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#000',
    borderBottomColor: '#a6a6a6',
    borderBottomWidth: 1,
  },
}

export { Input }