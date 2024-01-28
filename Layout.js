import { StyleSheet, View, Text, Button } from 'react-native';

const Layout = () => {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ ...styles.boxContainer, backgroundColor: 'red' }}>
        <Text>1</Text>
      </View>
      <View style={{ ...styles.boxContainer, backgroundColor: 'green' }}>
        <Text>2</Text>
      </View>
      <View style={{ ...styles.boxContainer, backgroundColor: 'blue' }}>
        <Text>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Layout;
