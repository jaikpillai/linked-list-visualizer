import tw from "tailwind-styled-components";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

const StyledRadio = tw(RadioGroupPrimitive.Item)`
bg-primary-100 dark:bg-neutral-500
h-4
w-4
rounded-full
cursor-pointer
border
border-primary-200
dark:border-none
disabled:dark:bg-neutral-700
disabled:bg-neutral-100
[&[data-state="checked"]]:bg-primary-600
`;

const StyledIndicator = tw(RadioGroupPrimitive.Indicator)`
flex
items-center
justify-center
w-full h-full
relative
after:block
after:content-[""]
after:w-2
after:h-2
after:rounded-full
after:bg-primary-50
`;

// Exports
export const RadioGroup = RadioGroupPrimitive.Root;
export const RadioGroupRadio = StyledRadio;
export const RadioGroupIndicator = StyledIndicator;
