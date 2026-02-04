import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

const STORAGE_KEY = "todos";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const loadTodos = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) setTodos(JSON.parse(data));
  };

  const addTask = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text, done: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <AddTask onAdd={addTask} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            text={item.text}
            done={item.done}
            onPress={() => toggleTodo(item.id)}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingLeft: 10,
  },
});
