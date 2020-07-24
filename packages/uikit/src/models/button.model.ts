import { GestureResponderEvent } from "react-native";

export interface IButton {
  type?: "filled" | "outlined";
  onPress: (event: GestureResponderEvent) => void;
}
