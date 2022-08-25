import { AnimatePresence, motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "../../Select/Select";
import { Button } from "../../";
import { Text } from "./../../";
import { useContext, useEffect, useRef, useState } from "react";
import { Canvas, Panel } from "../../Canvas";
import { Input } from "../../Input/index";
import { RadioGroup } from "../../RadioGroup";
import { Label } from "../../Label";
import { Radio } from "../../";
import { LinkedListOperations, LinkedListSubOperations } from "./index";
import { LinkedListContext } from "../../../contexts/LinkedListContext";

import { Node } from "../../Primitives/Node";
import { HeadPointer, NullPointer } from "../../Primitives";
import { CheckIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { AnimationSpeedDropDown } from "../../Settings";
import { DarkThemeToggle } from "../../Settings/DarkThemToggle";
import general from "../../../general";
import Link from "next/link";

export const LinkedListView = () => {
  const { list, operation, setOperation, subOperation } =
    useContext(LinkedListContext);
  const [showEmpty, setShowEmpty] = useState(true);

  const addInitalElements = async () => {
    await sleep(500);
    list?.insertBack("A");
    await sleep(500);
    list?.insertBack("B");
  };

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    // Insert inital elements to Linked List
    // addInitalElements();
  }, []);

  useEffect(() => {
    if (!list?.isEmpty()) {
      setShowEmpty(false);
    }
  }, [list?.isEmpty()]);

  return (
    <div className="flex flex-col items-start py-10 gap-4 mx-6 md:mx-20 lg:mx-40">
      <div className="flex flex-col items-center justify-center  gap-3 w-full">
        <div className="flex relative items-center justify-center w-full ">
          <Text
            className="text-center"
            varient="heading"
            text={general.app_name}
          />
          <Link href={general.links.project_github}>
            <a target={"_blank"} title="Clone this project">
              <GitHubLogoIcon className="absolute inset-y-0 right-0 w-8 h-8 md:w-8 md:h-8 lg:h-10 lg:w-10  text-neutral-500 hover:text-neutral-400" />
            </a>
          </Link>
        </div>

        <Text
          className="max-w-2xl dark:text-neutral-400 text-left lg:text-center rounded-full "
          varient="paragraph"
          text="Visualize different Singly Linked List operations in action."
        />
      </div>
      <br />

      {/* List visualization canvas */}
      <div className="w-full">
        <Canvas className="rounded-b-none mb-0 shadow-none ">
          <div className="flex  flex-wrap w-full items-center justify-center h-full ">
            {/* Linked List */}

            <motion.div
              layoutScroll
              className="flex flex-wrap items-center justify-center h-80  w-full "
              style={{ overflowY: "auto", overflowX: "hidden" }}
            >
              <>
                <HeadPointer />
                <AnimatePresence
                  onExitComplete={() => {
                    list?.setBlockUI(false);
                    if (list?.isEmpty()) {
                      setShowEmpty(true);
                    }
                  }}
                >
                  {list?.items()?.map((ele: any, i: number) => {
                    return (
                      <div key={ele.id} className="flex items-center">
                        <Node
                          key={ele.id}
                          data={ele}
                          highlight={list.hightlightNodeId}
                          index={i}
                          update={list.updateData}
                          remove={list.removeAt}
                          blockUI={list.blockUI}
                        />
                        <div>
                          <div>
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
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </AnimatePresence>
                <NullPointer />
              </>
              {showEmpty == true && (
                <motion.div
                  initial={{ y: -2 }}
                  animate={{ y: 0 }}
                  className="absolute bottom-12 bg-black/70 rounded-full pt-2 pb-2 pl-4 pr-4 flex "
                >
                  <div className="text-xs text-white flex items-center justify-between w-full  gap-4">
                    <p>List is empty </p>|
                    <span
                      onClick={() => list?.insertBack("A")}
                      className="cursor-pointer hover:text-primary-400"
                    >
                      Create first node
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </Canvas>
        {/* Theme toggle and Animation control */}
        <Panel className="rounded-t-none rounded-b-md flex gap-2 items-center justify-center pr-8 pl-8 pt-2 pb-2 ">
          <DarkThemeToggle />
          <AnimationSpeedDropDown />
        </Panel>
      </div>

      {/* Operation Panels */}
      <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
        {/* Operation Panel */}
        <Panel className="w-full lg:w-1/5 flex flex-col gap-4 order-1 md:-order-2">
          {/* <Text varient="subheading" text="Linked List Method" /> */}
          <div className="flex flex-col w-full">
            <Text
              text={"Operation"}
              varient="paragraph"
              className=" font-medium peer-focus:text-primary-800 dark:peer-focus:text-primary-300"
            />
            <Select
              onValueChange={(e) => setOperation(e)}
              defaultValue={"insertion"}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select Operation" />

                <SelectIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SelectIcon>
              </SelectTrigger>

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
                    <SelectLabel>Select Operation</SelectLabel>
                    <SelectItem value="insertion">
                      <SelectItemText>Insert</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>

                    {/* <SelectSeparator /> */}

                    <SelectItem value="deletion">
                      <SelectItemText>Delete</SelectItemText>
                      <SelectItemIndicator>
                        <CheckIcon />
                      </SelectItemIndicator>
                    </SelectItem>

                    {/* <SelectSeparator /> */}
                    <SelectItem value="utilities">
                      <SelectItemText>Utilities</SelectItemText>
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
          </div>{" "}
          <SubOperations listOps={LinkedListSubOperations[operation]} />
        </Panel>

        <DataPanel />

        {/* Information Panel */}
        <Panel className="w-full lg:w-2/5 flex flex-col h-64 gap-1 md:-order-1 order-3 overflow-y-auto">
          <Label>Information</Label>

          <pre className="whitespace-pre-line">
            <Label className="mt-2 font-bold">{`${subOperation}()`}</Label>
            <Text
              varient="paragraph"
              text={
                LinkedListSubOperations[operation].filter(
                  (ele) => ele.name === subOperation
                )[0]?.description || ""
              }
            ></Text>
          </pre>
        </Panel>
      </div>

      <SelectSeparator className="bg-neutral-7  00" />
      <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
        <Panel className="bg-white/50 dark:bg-black/20 w-full md:w-4/5">
          <Label>List Items</Label>
          <code>
            <Text
              className=""
              text={JSON.stringify(
                list?.items().reduce((list, ele) => {
                  list.push(ele?.data);
                  return list;
                }, []),
                null,
                2
              )}
            />
          </code>
        </Panel>

        <Panel className="bg-white/50 dark:bg-black/20  w-full md:w-1/5">
          <Label>Size</Label>
          <code>
            <Text text={`${list?.size()}`} />
          </code>
        </Panel>
      </div>
    </div>
  );
};

interface ISubOps {
  listOps: any[];
}
const SubOperations: React.FunctionComponent<ISubOps> = ({ listOps }) => {
  const { setSubOperation } = useContext(LinkedListContext);
  const [defaultV, setDefaultV] = useState(listOps[0].name);

  useEffect(() => {
    setDefaultV(listOps[0].name);
    setSubOperation(listOps[0].name);
  }, [listOps]);

  return (
    listOps && (
      <RadioGroup
        value={defaultV}
        onValueChange={(e: LinkedListOperations) => {
          setSubOperation(e);
          setDefaultV(e);
        }}
      >
        <Label className="">Sub operation</Label>
        <div className="flex flex-col gap-2 mt-1">
          {listOps.map((ele) => {
            return (
              <Radio
                key={ele.name}
                label={ele.name}
                value={ele.name}
                id={ele.name}
              ></Radio>
            );
          })}
        </div>
      </RadioGroup>
    )
  );
};

const DataPanel = () => {
  const { list, subOperation, operation } = useContext(LinkedListContext);
  const [data, setData] = useState("ABC");
  const [index, setIndex] = useState(0);

  const [allowed, setAllowed] = useState([""]);

  useEffect(() => {
    const allowedOp = LinkedListSubOperations[operation].filter(
      (ele) => ele.name === subOperation
    );
    setAllowed(allowedOp[0].allowed);
  }, [subOperation]);

  const handleExecution = () => {
    switch (subOperation) {
      case "insertFront":
        return list?.insertFront(data);
      case "insertBack":
        return list?.insertBack(data);
      case "insertAt":
        return list?.insertAt(index, data);

      case "remove":
        return list?.remove(data);
      case "removeAt":
        return list?.removeAt(index);
      case "removeFront":
        return list?.removeFront();
      case "removeBack":
        return list?.removeBack();

      case "reverse":
        return list?.reverse();
      case "updateData":
        return list?.updateData(index, data);
      case "replace":
        return list?.replace(index, data);
      case "clear":
        return list?.clear();
    }
  };

  return (
    <Panel className="w-full lg:w-2/5 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleExecution();
        }}
        className="flex  flex-col items-center gap-4"
      >
        <Input
          disabled={!allowed.includes("data")}
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Node Data"
          label="Data"
        />
        <Input
          disabled={!allowed.includes("index")}
          value={index}
          onChange={(e) =>
            setIndex(Math.abs(Math.floor(Number(e.target.value))))
          }
          className=""
          type={"number"}
          placeholder="0 to size - 1"
          label="Index (0 based)"
        />

        <Button
          type="submit"
          disabled={list?.blockUI}
          className="w-full mb-0"
          label="EXECUTE"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </form>
    </Panel>
  );
};
