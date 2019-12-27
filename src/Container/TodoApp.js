import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from '../containers/AddTodo';
import VisibleTodos from '../containers/VisibleTodos';

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />

        <View style={{margin: 25}}>
          <Text style={{textAlign: 'center', fontSize: 20, color: '#333'}}>
            Here are some of your tasks todo:
          </Text>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
