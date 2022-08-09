import { BaseHTMLAttributes, HTMLAttributes } from "react";

export interface IText
  extends React.DetailedHTMLProps<
      BaseHTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    React.AriaAttributes {
  text: string;
  varient?: "heading" | "subheading" | "paragraph";
  uppercase?: boolean;
}

export { Text } from "./Text";
