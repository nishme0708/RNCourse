import { StyleSheet, Text, View } from 'react-native';
const GoalItem = ({ goal }) => {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalText: {
    color: 'white',
  },
});

export default GoalItem;
