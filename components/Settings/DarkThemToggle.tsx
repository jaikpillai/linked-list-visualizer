import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIconTrigger,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectValue,
  SelectViewport,
} from "../Select/Select";
import {
  LightningBoltIcon,
  CheckIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";

export const DarkThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div>
      <Select
        onValueChange={(e) => setTheme(e)}
        defaultValue={theme ? theme : ""}
      >
        <SelectIconTrigger className="bg-black/60">
          <SelectValue>
            {loaded && theme === "dark" && <MoonIcon color="white" />}
            {loaded && theme === "light" && <SunIcon color="white" />}
          </SelectValue>

          {/* <SelectIcon>
          <LightningBoltIcon />
        </SelectIcon> */}
        </SelectIconTrigger>

        <SelectContent>
          <SelectScrollUpButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </SelectScrollUpButton>

          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Theme</SelectLabel>
              <SelectItem value="light">
                <SelectItemText>Light</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              {/* <SelectSeparator /> */}

              <SelectItem value="dark">
                <SelectItemText>Dark</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>

          <SelectScrollDownButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </div>
  );
};
