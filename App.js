/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import Tts from 'react-native-tts';

import Basic from './src/containers/Basic';

const App = () => {
  const [color, setColor] = useState(null);

  return (
    <Basic
      style={{
        backgroundColor: color || 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.text}>{color || 'Select a color'}</Text>

      <View>
        <Button
          title="Blue"
          onPress={() => {
            setColor('blue');
            Tts.speak('Here is color blue.');
          }}
        />
        <Button
          title="Red"
          onPress={() => {
            setColor('red');
            Tts.speak('Here is color red.');
          }}
        />
      </View>
    </Basic>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;
