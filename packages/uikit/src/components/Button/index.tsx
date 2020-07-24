import React from "react";

import { IButton } from "@uikit/models/button.model";

import * as S from "./styles";

interface ButtonProps extends IButton {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => (
  <S.Touchable onPress={onPress}>
    <S.Text>{children}</S.Text>
  </S.Touchable>
);

export default Button;
