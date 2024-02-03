import { StyleSheet, Text, View, Pressable } from 'react-native';
const GoalItem = ({ goal, handleDelete }) => {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={() => handleDelete(goal)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default GoalItem;
