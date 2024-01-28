import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

const Form = () => {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  const inputHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  const addGoal = () => {
    setGoals([...goals, goalText]);
    setGoalText('');
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Your goals'
          style={styles.textInput}
          value={goalText}
          onChangeText={inputHandler}
        ></TextInput>
        <Button title='Add goals' onPress={addGoal}></Button>
      </View>
      <View style={styles.listContainer}>
        <Text>List of goals...</Text>
        {goals.map((goal, index) => (
          <View style={styles.goal} key={index}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
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
