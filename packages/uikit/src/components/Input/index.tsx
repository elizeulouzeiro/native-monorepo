import React, { useState } from "react";

import { IInput } from "@uikit/models/input.model";

import * as S from "./styles";

interface InputProps extends IInput {}

const Input: React.FC<InputProps> = ({ value, label, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const actions = {
    onFocus: () => setIsFocused(true),
    onBlue: () => setIsFocused(false),
  };

  return (
    <S.Wrapper focused={isFocused}>
      <S.Label>{label}</S.Label>
      <S.TextInput onChangeText={onChange} value={value} {...actions} />
    </S.Wrapper>
  );
};

export default Input;
