import React from 'react';
import {Login as LoginFeature} from '@native/features';

import * as S from './styles';

const Login = () => {
  const onSubmit = () => console.log('submited');

  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>
      <LoginFeature onSubmit={onSubmit} />
    </S.Wrapper>
  );
};

export default Login;
