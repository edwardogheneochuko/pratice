
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';

const Task = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (indexToRemove) => {
    const newTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(newTasks);
  };

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <Text style={tw`text-2xl font-bold mb-4 text-center`}>To-Do List</Text>

      <View style={tw`flex-row mb-4`}>
        <TextInput
          style={tw`flex-1 border border-gray-400 rounded-md py-2 px-3 bg-white`}
          placeholder="Enter task"
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity
          style={tw`ml-2 bg-blue-500 px-4 py-2 rounded-md`}
          onPress={handleAddTask}
        >
          <Text style={tw`text-white font-semibold`}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={tw`flex-row justify-between items-center bg-white p-3 mb-2 rounded-md border border-gray-200`}>
            <Text style={tw`text-base flex-1`}>{index + 1}. {item}</Text>
            <TouchableOpacity
              style={tw`bg-red-500 px-3 py-1 rounded-md`}
              onPress={() => handleDeleteTask(index)}>
              <Text style={tw`text-white font-semibold`}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={tw`text-center text-gray-500`}>No tasks yet</Text>}
      />
    </View>
  );
};

export default Task;
