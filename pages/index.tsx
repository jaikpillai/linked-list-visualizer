import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Node } from "../components/Primitives";
import { SinglyLinkedList } from "../ds/linked_list";
import { AnimatePresence, motion } from "framer-motion";
import { LinkedListView } from "../components/views/LinkedList";
import { Button, Input, Text } from "../components";
import { useLinkedList } from "../hooks/useLinkedList";
import { Canvas } from "../components/Canvas";
import { LinkedListProvider } from "../contexts/LinkedListContext";

const Home: NextPage = () => {
  const [SL, setSL] = useState(new SinglyLinkedList());
  const inp = useRef<HTMLInputElement>(null);
  const inp2 = useRef<HTMLInputElement>(null);

  const list = useLinkedList();

  useEffect(() => {
    list.insertFront("A");
    list.insertFront("B");
  }, []);

  function createNode(val: any) {
    return {
      data: val,
      id: Math.random().toString(36).substring(1),
    };
  }

  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 min-h-screen">
      <LinkedListProvider>
        <LinkedListView />
      </LinkedListProvider>
    </div>
  );
};

export default Home;
