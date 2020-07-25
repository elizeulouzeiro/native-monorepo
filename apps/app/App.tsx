import React from 'react';
import {SafeAreaView} from 'react-native';
import {Login} from '@native/features';

const App = () => {
  const onSubmit = () => {
    console.log('submitted');
  };

  return (
    <SafeAreaView>
      <Login onSubmit={onSubmit} />
    </SafeAreaView>
  );
};

export default App;
