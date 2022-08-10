import React, { FunctionComponent, HTMLAttributes } from "react";

interface IPanel
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: React.ReactNode;
}
export const Panel: FunctionComponent<IPanel> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`p-4 rounded-lg bg-white shadow-sm border-neutral-300 dark:bg-neutral-800 border dark:border-neutral-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
