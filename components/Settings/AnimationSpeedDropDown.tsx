import { DesiredAnimationSpeed } from "../../contexts/SettingsContext";
import { useSettings } from "../../hooks/useSettings";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectIconTrigger,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "../Select/Select";
import { LightningBoltIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "../Button";

export const AnimationSpeedDropDown = () => {
  const { animationSpeed, setAnimationSpeed } = useSettings();
  return (
    <div>
      <Select
        onValueChange={(e) =>
          setAnimationSpeed(Number(e) as DesiredAnimationSpeed)
        }
        defaultValue={String(animationSpeed)}
      >
        <SelectIconTrigger className="bg-black/60">
          <SelectValue>
            <LightningBoltIcon color="white" />
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
              <SelectLabel>Animation</SelectLabel>
              <SelectItem value="0">
                <SelectItemText>Off</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              {/* <SelectSeparator /> */}

              <SelectItem value="250">
                <SelectItemText>Fast</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              {/* <SelectSeparator /> */}
              <SelectItem value="500">
                <SelectItemText>Slow</SelectItemText>
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
