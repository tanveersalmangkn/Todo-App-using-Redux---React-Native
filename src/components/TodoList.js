import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoList = ({todos, toggleTodo}) => (
  <View>
    {todos.map(todo => (
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 20,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
          }}>
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default TodoList;
