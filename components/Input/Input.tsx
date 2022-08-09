import React from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { IInput } from ".";
import { Label } from "../Label";
import { Text } from "../Text";

const InputCustom = React.forwardRef<HTMLInputElement, IInput>(
  ({ varient = "outlined", ...props }, ref) => {
    return (
      <div className="flex flex-col-reverse gap-1 w-full group">
        <input ref={ref} {...props} />
        {props.label && (
          <Label className=" font-medium peer-focus:text-primary-800 dark:peer-focus:text-primary-300">
            {props.label}
          </Label>
        )}
      </div>
    );
  }
);

InputCustom.displayName = "Input";

const filledStyle = `bg-primary-50 dark:bg-neutral-600 focus:outline-primary-800 dark:focus:outline dark:focus:outline-2 dark:focus:outline-primary-300`;
const outlinedStyle = `bg-transparent outline outline-1 outline-neutral-300 
dark:outline-0 dark:bg-neutral-600 dark:outline-neutral-500 focus:outline-primary-800 
dark:focus:outline-2 dark:focus:outline-primary-300 focus:outline-2 
disabled:text-neutral-400 disabled:dark:text-neutral-500 disabled:cursor-not-allowed
disabled:bg-neutral-200
disabled:dark:bg-neutral-700
`;

const StyledInput = tw(InputCustom)`
pl-2
pr-2
pt-2
pb-2
peer
rounded-md


text-sm
dark:text-neutral-50

${(p: IInput) => {
  switch (p.varient) {
    case "filled":
      return filledStyle;
    default:
      return outlinedStyle;
  }
}}
`;

export const Input: React.ForwardRefExoticComponent<IInput> = StyledInput;
