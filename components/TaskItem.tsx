import { Text, Pressable, StyleSheet, View, Button } from "react-native";

type TaskItemProps = {
  text: string;
  done: boolean;
  onPress: () => void;
  onRemove: () => void;
};

export default function TaskItem({ text, done, onPress, onRemove }: TaskItemProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.item}>
        <Text style={[styles.text, done && styles.done]}>{text}</Text>
      </Pressable>
      <Button title="Delete" onPress={onRemove} color="#ff4444" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  item: {
    flex: 1,
    paddingVertical: 12,
  },
  text: {
    fontSize: 18,
  },
  done: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
