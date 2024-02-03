import { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from 'react-native';
const GoalInput = ({ addGoal, visible, closeModal }) => {
  const [goalText, setGoalText] = useState('');
  const inputHandler = (enteredText) => {
    setGoalText(enteredText);
  };
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        ></Image>
        <TextInput
          placeholder='Your goals'
          style={styles.textInput}
          value={goalText}
          onChangeText={inputHandler}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Add goals'
              onPress={() => {
                addGoal(goalText);
                setGoalText('');
              }}
              color='#b180f0'
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={closeModal}
              color='#f31282'
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    marginRight: 8,
    padding: 16,
    color: '#120438',
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
