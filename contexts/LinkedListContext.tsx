import { createContext, useState } from "react";
import {
  LinkedList,
  LinkedListOperations,
} from "../components/views/LinkedList";
import { useLinkedList } from "../hooks/useLinkedList";

interface Props {
  list: LinkedList | undefined;
  operation: string;
  subOperation: LinkedListOperations;
  setSubOperation: (str: LinkedListOperations) => void;
  setOperation: (str: string) => void;
}

export const LinkedListContext = createContext<Props>({
  list: undefined,
  operation: "insertion",
  subOperation: "insertBack",
  setSubOperation: () => {},
  setOperation: () => {},
});

interface LL {
  children: React.ReactNode;
}

export const LinkedListProvider: React.FunctionComponent<LL> = ({
  children,
}) => {
  const list = useLinkedList();
  const [subOperation, setSubOperation] =
    useState<LinkedListOperations>("insertBack");
  const [operation, setOperation] = useState("insertion");

  return (
    <LinkedListContext.Provider
      value={{
        list,
        operation,
        subOperation,
        setOperation,
        setSubOperation,
      }}
    >
      {children}
    </LinkedListContext.Provider>
  );
};
