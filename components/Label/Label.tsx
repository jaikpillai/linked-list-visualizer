import React, { LabelHTMLAttributes } from "react";

interface ILabel
  extends React.DetailedHTMLProps<
      LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >,
    React.AriaAttributes {
  children: string;
}

export const Label: React.FunctionComponent<ILabel> = ({
  children,
  htmlFor,
  ...props
}) => {
  return (
    <label
      {...props}
      className={`text-sm dark:text-neutral-300 font-medium ${props.className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
