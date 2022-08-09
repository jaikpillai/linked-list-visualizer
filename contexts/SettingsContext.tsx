import { createContext, useState } from "react";

export const AnimationSpeed = {
  off: 0,
  fast: 250,
  slow: 500,
} as const;

export type DesiredAnimationSpeed =
  typeof AnimationSpeed[keyof typeof AnimationSpeed];

interface SettingsContextProps {
  animationSpeed: DesiredAnimationSpeed;
  setAnimationSpeed: (val: DesiredAnimationSpeed) => void;
}

interface ISettings {
  children: React.ReactNode;
}
export const SettigsContext = createContext<SettingsContextProps>({
  animationSpeed: AnimationSpeed.off,
  setAnimationSpeed: () => {},
});

export const SettingsProvider: React.FunctionComponent<ISettings> = (props) => {
  const [animationSpeed, setAnimationSpeed] = useState<DesiredAnimationSpeed>(
    AnimationSpeed.fast
  );

  return (
    <SettigsContext.Provider value={{ animationSpeed, setAnimationSpeed }}>
      {props.children}
    </SettigsContext.Provider>
  );
};
