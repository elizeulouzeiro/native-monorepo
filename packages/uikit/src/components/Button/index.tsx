import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { IButton } from "../../models/button.model";

interface ButtonProps extends IButton {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <TouchableOpacity>
    <Text>{children}</Text>
  </TouchableOpacity>
);

export default Button;
