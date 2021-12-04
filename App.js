import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AppStyles as styles } from './styles';
import AddTodo from './src/components/add-todo';
import TodoList from './src/components/todo-list';
const App = () => {
  const [todos, setTodos] = useState([])

  const handleAddTodo = (todo) => {
    setTodos([todo, ...todos])
  }
  return (
    <View style={{ height: '100%' }}>
      <Text style={styles.header}>TodoListApp [{todos.length}] of [{todos.length}]</Text>
      <AddTodo onTodoAdd={handleAddTodo} />
      <TodoList todos={todos} />
    </View>)
}

export default App;