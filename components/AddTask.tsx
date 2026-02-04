import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

type AddTaskProps = {
  onAdd: (text: string) => void;
};

export default function AddTask({ onAdd }: AddTaskProps) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Enter task"
        style={styles.input}
      />
      <Button title="Save" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
  },
  input: {
    flex: 1,
  },
});
