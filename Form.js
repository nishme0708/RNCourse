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
import { StatusBar } from 'expo-status-bar';

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
  const [openModal, setOpenModal] = useState(false);

  const openModalView = () => {
    setOpenModal(true);
  };

  const closeModalView = () => {
    setOpenModal(false);
  };

  const addGoal = (goalText) => {
    setGoals([...goals, goalText]);
    closeModalView();
  };
  const deleteGoal = (goal) => {
    setGoals(goals.filter((g) => g != goal));
  };
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={openModalView}
        ></Button>
        {openModal && (
          <GoalInput
            addGoal={addGoal}
            visible={openModal}
            closeModal={closeModalView}
          ></GoalInput>
        )}
        <View style={styles.listContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => item + index}
            renderItem={(goalData) => {
              return (
                <GoalItem goal={goalData.item} handleDelete={deleteGoal} />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e085a',
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
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
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
