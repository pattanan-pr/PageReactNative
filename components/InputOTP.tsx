import {
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import React, {createContext, useRef} from 'react';

const InputOTP = ({length, disable, value, onChange}) => {
  const onChangeValue = (text, index) => {
    // console.log(text)
    const valueInput = value.map((item, valueIndex) => {
      //   console.log(valueIndex, index);
      if (valueIndex === index) {
        return text;
      }
      return item;
    });
    onChange(valueInput);
  };
  const inputRef = useRef([]);
  const handleChanged = (text: string, index: number) => {
    onChangeValue(text, index);
    // console.log(text);
    if (text.length !== 0) {
      return inputRef?.current[index + 1]?.focus();
    }
    return inputRef?.current[index - 1]?.focus();
  };
  const handleBackspace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index,
  ) => {
    const {nativeEvent} = event;
    if (nativeEvent.key === 'Backspace') {
      handleChanged('', index);
    }
  };
  return (
    <View style={styles.container}>
      {[...new Array(length)].map((item, index) => (
        <TextInput
          ref={ref => {
            if (ref && !inputRef.current.includes(ref)) {
              inputRef.current = [...inputRef.current, ref];
            }
          }}
          key={index}
          style={styles.textinput}
          maxLength={1}
          contextMenuHidden
          placeholder="0"
          selectTextOnFocus
          editable={!disable}
          placeholderTextColor={'#ADADAD'}
          keyboardType="decimal-pad"
          testID={`OTPInput-${index}`}
          onChangeText={text => handleChanged(text, index)}
          onKeyPress={event => handleBackspace(event, index)}
        />
      ))}
    </View>
  );
};

export default InputOTP;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textinput: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '600',
    width: 48,
    color: '#000',
    height: 64,
    borderRadius: 8,
    borderColor: '#ADADAD',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#D6D6D6',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
