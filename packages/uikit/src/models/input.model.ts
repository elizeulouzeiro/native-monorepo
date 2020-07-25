export interface IInput {
  onChange: (text: string) => void;
  label: string;
  value: string;
}

export type IInputWrapper = {
  focused?: boolean;
};
