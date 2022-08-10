import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover/index";
import { Text } from "../Text";
import { Input } from "../Input";
import { Button } from "../Button";
import { LinkedListContext } from "../../contexts/LinkedListContext";

interface INode {
  data: any;
  color?: any;
  index: number;
  children?: React.ReactNode;
  highlight?: string;
  update?: (at: number, val: any) => void;
  remove?: (val: any) => void;
  blockUI?: boolean;
}

export const Node: React.FunctionComponent<INode> = (props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <motion.div
          key={props.data.id}
          layout
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 100,

            background:
              props.highlight !== props.data.id
                ? "linear-gradient(0deg, rgba(209,209,209,1) 0%, rgba(255,255,255,1) 100%)"
                : "linear-gradient(165deg, rgba(255,220,41,1) 0%, rgba(221,196,0,1) 99%)",
            y: 0,
          }}
          exit={{
            background:
              "linear-gradient(0deg, rgba(179,25,25,1) 0%, rgba(226,64,56,1) 100%)",
            color: "white",
            y: -5,
            opacity: 0.3,
          }}
          transition={{
            opacity: { ease: "easeOut", duration: 0.6 },
            background: { ease: "easeOut", duration: 0.1 },
            y: { ease: "easeOut", duration: 0.2 },
            layout: { ease: "easeOut", duration: 0.2 },
          }}
          className={`  ${
            props.highlight === props.data.id ? "text-black" : "w-12"
          } flex items-center justify-center w-32  h-14 rounded-md m-px cursor-pointer text-black relative`}
        >
          <div className="w-3/5 border-r h-full flex items-center">
            <pre className="truncate px-2 font-primary text-xs">
              {props.data.data}
            </pre>
          </div>
          <div className="w-2/5  h-full flex items-center">
            <pre className="truncate px-2 font-primary text-xs">NEXT</pre>
          </div>
        </motion.div>
      </PopoverTrigger>

      <PopoverContent>
        <NodePopoverContent {...props} />
      </PopoverContent>
    </Popover>
  );
};

const NodePopoverContent: React.FunctionComponent<INode> = (props) => {
  const [nodeData, setNodeData] = useState(props.data.data);
  const { list } = useContext(LinkedListContext);

  return (
    <div className="inline-flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <Text className="font-bold" text={`Node ${props.index}`} />
        <Button
          disabled={props.blockUI}
          onClick={() => list?.removeAt(props.index)}
          className="p-1 m-0"
          varient="secondary"
          label=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </Button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          list?.updateData(props.index, nodeData);
        }}
        className="flex flex-col gap-2"
      >
        <Input
          autoFocus
          label="Data"
          className=""
          onChange={(e) => setNodeData(e.target.value)}
          value={nodeData}
        />

        <Button
          type="submit"
          disabled={props.blockUI}
          className="m-0"
          varient="primary"
          label="Update Data"
        />
      </form>
    </div>
  );
};
