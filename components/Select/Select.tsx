import * as SelectPrimitive from "@radix-ui/react-select";
import React from "react";
import tw from "tailwind-styled-components";

const StyledTrigger = tw(SelectPrimitive.Trigger)`

inline-flex
items-center
justify-between

pt-2
pb-2
pl-2
pr-2


gap-2 
outline
outline-1

dark:outline-0
outline-neutral-300

dark:text-primary-50
dark:hover:bg-neutral-700
dark:bg-neutral-600

rounded-md
hover:bg-neutral-100
leading-3

max-h-10
text-left
text-sm
text-neutral-900


${(
  p: SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>
) => p.className}

`;

const StyledIconTrigger = tw(SelectPrimitive.Trigger)`
flex
items-center

rounded-md

p-2
`;

const StyledIcon = tw(SelectPrimitive.SelectIcon)`
`;

const StyledValue = tw(SelectPrimitive.SelectValue)`

`;

const StyledContent = tw(SelectPrimitive.Content)`
overflow-hidden
bg-white
z-50
shadow-md
rounded-md

`;

function Content({ children, ...props }: { children: React.ReactNode }) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

const StyledViewport = tw(SelectPrimitive.Viewport)`
p-1
min-w-[150px]
`;

const StyledItem = tw(SelectPrimitive.Item)<SelectPrimitive.SelectItemProps>`
clear-both
pl-10
pr-2
pt-2
pb-2
text-sm
leading-normal
cursor-default
flex
rounded-md
items-center

${(p: SelectPrimitive.SelectItemProps) =>
  p.disabled
    ? "text-neutral-200 select-none bg-none"
    : "hover:bg-primary-800 hover:text-white"}

[&[data-highlighted]]:bg-primary-800
[&[data-highlighted]]:text-white

  `;

const StyledLabel = tw(SelectPrimitive.Label)`
text-sm
text-neutral-600
pl-2
pr-2
pt-1
pb-1
cursor-default
`;

const StyledSeparator = tw(SelectPrimitive.SelectSeparator)`
h-px
bg-neutral-200
ml-px
mr-px
mt-1
mb-1
`;

const StyledItemIndicator = tw(SelectPrimitive.ItemIndicator)`
absolute
left-0
w-12
inline-flex
items-center
justify-center
`;

const StyledScrollUpButton = tw(SelectPrimitive.ScrollUpButton)`items-center
flex
justify-center
h-2
bg-neutral-900`;

const StyledScrollDownButton = tw(SelectPrimitive.ScrollDownButton)`items-center
flex
justify-center
h-2
bg-neutral-900`;

// Exports
export const Select = SelectPrimitive.Root;
export const SelectTrigger: React.ForwardRefExoticComponent<
  SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>
> = StyledTrigger;
export const SelectIconTrigger: React.ForwardRefExoticComponent<
  SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>
> = StyledIconTrigger;
export const SelectValue = StyledValue;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem: React.ForwardRefExoticComponent<
  SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>
> = StyledItem;
export const SelectLabel = StyledLabel;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectSeparator = StyledSeparator;
export const SelectItemIndicator = StyledItemIndicator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;
