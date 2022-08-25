import { Canvas, Panel } from "../Canvas";
import { AnimatePresence, motion } from "framer-motion";
import { HeadPointer, Node, NullPointer } from "../Primitives";
import { LinkedListContext } from "../../contexts/LinkedListContext";
import { useContext, useEffect, useState } from "react";
import { Text } from "../Text";
import appInfo from "../../general";
import { Button } from "../Button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const LandingPage: React.FunctionComponent = () => {
  const { list } = useContext(LinkedListContext);
  const router = useRouter();
  const [showEmpty, setShowEmpty] = useState(false);

  const addInitalElements = async () => {
    for (let i = 0; i < 6; i++) {
      await sleep(500);
      list?.insertBack(i + 1);
    }

    await sleep(800);
    list?.removeAt(3);
  };

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    // Insert inital elements to Linked List
    list?.insertBack(0);

    addInitalElements();

    return () => {
      list?.clear();
    };
  }, []);

  useEffect(() => {
    setShowEmpty(list?.isEmpty() || false);
  }, [list?.items()]);

  return (
    <div className=" min-h-screen  items-center lg:items-start lg:justify-start px-2 py-20 lg:px-40 lg:py-40 flex flex-col gap-10 header">
      <div className="flex  items-center justify-between w-full">
        <div className="relative flex flex-col gap-4  w-full h-80 header__image">
          {/* List visualization canvas */}
          <Panel className="flex flex-col gap-10  items-center justify-center">
            {/* Linked List */}

            <div className="flex items-ceter justify-center">
              <motion.div
                layoutScroll
                className="flex flex-wrap items-center justify-center h-60  w-full "
                style={{ overflowY: "auto", overflowX: "hidden" }}
              >
                <>
                  <HeadPointer arrowStroke="stroke-white/50" />
                  <AnimatePresence
                    onExitComplete={() => {
                      list?.setBlockUI(false);
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
                                className="h-6 w-6 stroke-white/50"
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
                    className="absolute bottom-20 bg-black/70 rounded-full pt-2 pb-2 pl-4 pr-4 flex "
                  >
                    <div className="text-xs text-white flex items-center justify-between w-full  gap-4">
                      {/* <p>Explore more opearions</p>| */}
                      <span
                        onClick={() => router.push("/app")}
                        className="cursor-pointer hover:text-primary-400"
                      >
                        Enter App to explore more
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </Panel>

          <br />

          {/* Heading text */}
          <div className="relative flex flex-col items-center lg:items-start justify-center  gap-2">
            <Text varient="heading" text={appInfo.app_name} />
            <Text
              className="text-sm lg:text-lg lg:text-left text-center"
              varient="paragraph"
              text={appInfo.tagline}
            />
          </div>

          <div className="relative flex  items-center justify-center  lg:justify-start gap-2">
            <Button onClick={() => router.push("/app")} label="Enter App" />
            <Link href={appInfo.links.project_github}>
              <a target={"_blank"}>
                <Button varient="secondary" label="Source Code">
                  <GitHubLogoIcon />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
