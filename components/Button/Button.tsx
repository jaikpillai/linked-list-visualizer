import React from "react";
import tw from "tailwind-styled-components";

type ButtonVariants = "primary" | "secondary";

export interface IButton
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  label: string;
  varient?: ButtonVariants;
}

const ButtonCustom: React.FunctionComponent<IButton> = ({
  children,
  varient = "primary",
  ...props
}) => {
  return (
    <button {...props}>
      {props.label !== "" && <p className="text-left"> {props.label}</p>}

      {children && <div className="">{children}</div>}
    </button>
  );
};

const StyledButton = tw(ButtonCustom)<IButton>`
pl-6
pr-6
pt-4
pb-4
gap-4
m-2
uppercase

inline-flex
items-center
justify-center
text-xs
font-medium
rounded-md
focus:ring

box-border
disabled:select-none disabled:cursor-not-allowed


${(p: IButton) =>
  p.varient === "secondary"
    ? "bg-transparent dark:text-primary-200 text-primary-900 shadow-none border-2 dark:border-primary-200 hover:bg-primary-100 dark:hover:bg-primary-200 dark:hover:text-primary-900 disabled:hover:bg-transparent disabled:hover:text-neutral-400 disabled:text-neutral-400 disabled:border-neutral-400 dark:disabled:text-neutral-500 dark:disabled:outline-neutral-500 dark:disabled:hover:bg-transparent"
    : "bg-primary-800 text-primary-50 hover:bg-primary-900 disabled:bg-neutral-500"}
    `;

export const Button: React.ForwardRefExoticComponent<IButton> = StyledButton;
