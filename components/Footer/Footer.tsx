import { Text } from "../Text";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import general from "../../general";
import { Panel } from "../Canvas";

export const Footer = () => {
  return (
    <div className="border-t border-neutral-300 dark:border-neutral-800 gap-5 p-4 mt-10 flex items-center justify-center">
      <Text
        className="dark:text-neutral-400"
        varient="paragraph"
        text="Find me on"
      />
      <Text className="dark:text-neutral-400" varient="paragraph" text="|" />

      <Link href={general.links.github}>
        <a target={"_blank"}>
          <GitHubLogoIcon className="h-10 w-10 fill-neutral-600 text-neutral-700 hover:text-neutral-500" />
        </a>
      </Link>
      <Link href={general.links.linkedin}>
        <a target={"_blank"}>
          <LinkedInLogoIcon className="h-10 w-10 fill-neutral-600 text-neutral-700 hover:text-neutral-500" />
        </a>
      </Link>
    </div>
  );
};
