import { InputHTMLAttributes } from "react";

export interface IInput
  extends React.DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes {
  varient?: "filled" | "outlined";
  label?: string;
}
export { Input } from "./Input";
