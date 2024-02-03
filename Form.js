import { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const Form = () => {
  const currentGoals = [
    'Goal 1',
    'Goal 2',
    'Goal 3',
    'Goal 4',
    'Goal 5',
    'Goal 6',
    'Goal 7',
    'Goal 8',
    'Goal 9',
    'Goal 10',
    'Goal 11',
    'Goal 12',
    'Goal 13',
    'Goal 14',
    'Goal 15',
    'Goal 16',
  ];
  const [goals, setGoals] = useState(currentGoals);

  const addGoal = (goalText) => {
    setGoals([...goals, goalText]);
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoal}></GoalInput>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => item + index}
          renderItem={(goalData) => {
            return <GoalItem goal={goalData.item} />;
          }}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 16,
    borderWidth: 2,
    borderColor: '#343322',
    padding: 16,
  },
  appContainer: {
    padding: 50,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 5,
  },
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

export default Form;
