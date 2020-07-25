import React from 'react';
import {Login as LoginFeature} from '@native/features';
import {Actions} from 'react-native-router-flux';

import * as S from './styles';

const Login = () => {
  const onSubmit = () => Actions.home();

  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>
      <LoginFeature onSubmit={onSubmit} />
    </S.Wrapper>
  );
};

export default Login;
