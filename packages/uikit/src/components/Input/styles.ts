import styled from "styled-components/native";

import { IInputWrapper } from "@uikit/models/input.model";

export const Wrapper = styled.View<IInputWrapper>`
  border-color: ${({ focused }) => (focused ? "#4a4a4a" : "#afafaf")};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  padding: 8px 16px;
`;

export const Label = styled.Text`
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 500;
`;

export const TextInput = styled.TextInput`
  color: #4a4a4a;
  font-size: 16px;
  margin-top: 8px;
`;
