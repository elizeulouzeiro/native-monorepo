import React from 'react';
import {SafeAreaView} from 'react-native';
import {Login} from '@native/features';

const App = () => {
  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Login onSubmit={onSubmit} />
    </SafeAreaView>
  );
};

export default App;
