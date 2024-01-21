import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, FlatList, CheckBox } from 'react-native';

export default class TaskManagerApp extends Component {
  state = {
    tasks: [
      { id: '1', text: 'Walk with dogs', completed: false },
      { id: '2', text: 'Take Trash out', completed: true },
      { id: '3', text: 'Clean the Kitchen', completed: true },
      { id: '4', text: 'React out to David to ask about homework', completed: true },
      // Add more tasks here
    ],
    newTaskText: '',
  };

  addTask = () => {
    if (this.state.newTaskText.trim() !== '') {
      const newTask = {
        id: (this.state.tasks.length + 1).toString(),
        text: this.state.newTaskText,
        completed: false,
      };

      this.setState({
        tasks: [...this.state.tasks, newTask],
        newTaskText: '',
      });
    }
  };

  toggleTaskCompletion = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    });
  };

  renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <CheckBox
        value={item.completed}
        onValueChange={() => this.toggleTaskCompletion(item.id)}
      />
      <Text
        style={[
          styles.taskText,
          { textDecorationLine: item.completed ? 'line-through' : 'none' },
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello Student</Text>
        </View>

        <View style={styles.newTaskContainer}>
          <TextInput
            style={styles.newTaskInput}
            placeholder="Add a new task"
            value={this.state.newTaskText}
            onChangeText={(text) => this.setState({ newTaskText: text })}
          />
          <TouchableOpacity style={styles.addTaskButton} onPress={this.addTask}>
            <Text style={styles.addTaskButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.taskList}
          data={this.state.tasks}
          renderItem={this.renderTaskItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0, // Adjust for iOS status bar
    backgroundColor: '#ecf0f1',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  newTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  newTaskInput: {
    flex: 1,
    marginRight: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 4,
  },
  addTaskButton: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 4,
  },
  addTaskButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  taskList: {
    flex: 1,
    padding: 16,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskText: {
    marginLeft: 8,
    fontSize: 16,
  },
});


