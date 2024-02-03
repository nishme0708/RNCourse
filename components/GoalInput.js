import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
const GoalInput = ({ addGoal }) => {
  const [goalText, setGoalText] = useState('');
  const inputHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Your goals'
        style={styles.textInput}
        value={goalText}
        onChangeText={inputHandler}
      ></TextInput>
      <Button
        title='Add goals'
        onPress={() => {
          addGoal(goalText);
          setGoalText('');
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
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
});

export default GoalInput;
