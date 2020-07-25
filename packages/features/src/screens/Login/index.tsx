import React, { useState } from "react";
import { Input, Button } from "@native/uikit";

import { ILogin } from "@features/models/login.model";

import * as S from "./styles";

interface LoginProps extends ILogin {}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <S.Title>Login</S.Title>
      <S.Form>
        <Input
          label="E-mail"
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          label="Senha"
          value={password}
          onChange={(text) => setPassword(text)}
        />
      </S.Form>
      <Button onPress={onSubmit}>Entrar</Button>
    </>
  );
};

export default Login;
