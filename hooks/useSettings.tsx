import { useContext } from "react";
import { SettigsContext } from "../contexts/SettingsContext";

export const useSettings = () => {
  const settings = useContext(SettigsContext);
  return settings;
};
