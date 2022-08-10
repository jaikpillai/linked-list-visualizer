import * as PopoverPrimitive from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import tw from "tailwind-styled-components";

const StyledContent: React.ForwardRefExoticComponent<
  PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>
> = tw(PopoverPrimitive.Content)`
bg-neutral-50
dark:bg-neutral-700
border

border-neutral-200
dark:border-none
p-4
animate-slide-down
shadow-lg
rounded-md
z-50

`;
const StyledArrow = tw(PopoverPrimitive.Arrow)`
fill-neutral-50
dark:fill-neutral-700


dark:stroke-none

`;

function Content({ children, ...props }: { children: React.ReactNode }) {
  return (
    <PopoverPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </PopoverPrimitive.Portal>
  );
}

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = Content;
