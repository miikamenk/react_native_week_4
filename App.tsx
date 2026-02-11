import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import { useTodos } from "./hooks/useTodos";

export default function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <View style={styles.container}>
      <AddTask onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            text={item.text}
            done={item.done}
            onPress={() => toggleTodo(item.id)}
            onRemove={() => removeTodo(item.id)}
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
