import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TodoApp from './src/Container/TodoApp';
import store from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
