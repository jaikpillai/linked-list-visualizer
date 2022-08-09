import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Label } from "../Label";
import { RadioGroupIndicator, RadioGroupRadio } from "./RadioGroup";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

interface IRadio
  extends RadioGroupPrimitive.RadioGroupItemProps,
    RefAttributes<HTMLButtonElement> {
  label: string;
  value: any;
}

export const Radio: React.FunctionComponent<IRadio> = (props) => {
  return (
    <div className="flex items-center gap-2">
      <RadioGroupRadio id={props.id} {...props}>
        <RadioGroupIndicator />
      </RadioGroupRadio>
      <Label
        className={`select-none font-normal ${
          props.disabled === true
            ? "dark:text-neutral-500 text-neutral-400"
            : "dark:text-white text-black"
        }`}
        htmlFor={props.id}
      >
        {props.label}
      </Label>
    </div>
  );
};
