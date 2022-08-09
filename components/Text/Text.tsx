import { IText } from ".";
import tw from "tailwind-styled-components";

const TexCustom: React.FunctionComponent<IText> = ({
  varient = "paragraph",
  ...props
}) => {
  if (varient === "heading") return <h1 {...props}>{props.text}</h1>;
  if (varient === "subheading") return <h2 {...props}>{props.text}</h2>;
  return <p {...props}>{props.text}</p>;
};

const headingStyles = `font-bold text-4xl dark:text-neutral-100`;
const subHeadingStyles = `font-bold text-xl dark:text-neutral-100`;
const defaultStyles = `text-sm`;

const StyledText = tw(TexCustom)<IText>`
dark:text-neutral-300

${(p: IText) => {
  switch (p.varient) {
    case "heading":
      return headingStyles;

    case "subheading":
      return subHeadingStyles;

    case "paragraph":
      return defaultStyles;
  }
}}

${(p: IText) => {
  switch (p.uppercase) {
    case true:
      return "uppercase";
    default:
      return "normal-case";
  }
}}

`;

export const Text: React.ForwardRefExoticComponent<IText> = StyledText;
