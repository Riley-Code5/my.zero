import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Account from './screens/Account';

const styles = StyleSheet.create({
  container: {
    flex: 1, // Important to fill the screen
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Account />
    </SafeAreaView>
  );
};

export default App;
