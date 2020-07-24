import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from '@native/uikit';

const App = () => {
  return (
    <SafeAreaView>
      <Button onPress={() => console.log('clicou')}>Botão</Button>
    </SafeAreaView>
  );
};

export default App;
