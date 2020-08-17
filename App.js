/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from './Task';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, {text: value, key: Date.now(), checked: false}]);
      setValue('');
    }
  };
  handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true;
      }),
    );
  };
  handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      }),
    );
  };
  return (
    <View style={styles.container}>
      <Text style={{marginTop: '5%', fontSize: 16, color: 'black'}}>Today</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder={'Do it now!'}
          placeholderTextColor="black"
          onChangeText={(value) => setValue(value)}
          value={value}
        />
        <TouchableOpacity style={{marginTop:10,}} onPress={() => handleAddTodo()}>
          <Icon name="plus" size={30} color="black" style={{}} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%'}}>
        {todos.map((task) => (
          <Task
            text={task.text}
            key={task.key}
            checked={task.checked} // toggle the checked icon
            setChecked={() => handleChecked(task.key)}
            delete={() => handleDeleteTodo(task.key)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    width: '87%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft:10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 0.3,
    paddingRight: 10,
    paddingBottom: 5,
  },
});
export default App;
