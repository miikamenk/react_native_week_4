import { Text, Pressable, StyleSheet } from "react-native";

type TaskItemProps = {
  text: string;
  done: boolean;
  onPress: () => void;
};

export default function TaskItem({ text, done, onPress }: TaskItemProps) {
  return (
    <Pressable onPress={onPress} style={styles.item}>
      <Text style={[styles.text, done && styles.done]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
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
