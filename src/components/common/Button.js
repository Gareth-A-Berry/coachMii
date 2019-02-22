import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  const { button, text, buttonFilled, textFilled } = styles
  const { filled } = props
  return (
      <TouchableOpacity
          style={[filled ? buttonFilled : button, props.style]}
          onPress={props.onPress}
      >
        <Text style={[filled ? textFilled : text, props.style]}>
          {props.children}
        </Text>
      </TouchableOpacity>
  )
}

const styles = {
  button: {
    alignSelf: 'stretch',
  },
  buttonFilled: {
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    marginRight: 5,
    marginLeft: 5,
  },
  textFilled: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
}

export { Button }