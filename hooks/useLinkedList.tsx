import { useEffect, useRef } from "react";
import { useState } from "react";
import { LinkedList } from "../components/views/LinkedList";
import { SinglyLinkedList } from "../ds/linked_list";
import { useSettings } from "./useSettings";

export const useLinkedList = () => {
  const singlyLinkedList = useRef(new SinglyLinkedList());
  const [blockUI, setBlockUI] = useState(false);
  const [list, setList] = useState<any[]>([]);
  const [hightlightNodeId, setHighlightNodeId] = useState("-1");

  const { animationSpeed } = useSettings();

  useEffect(() => {
    setDelay(animationSpeed);
  }, [animationSpeed]);

  // useEffect(() => {
  //   console.log("list changed");
  //   console.log(items());
  // }, [list]);

  function myEqal(a: any, b: any): boolean {
    return a.data === b;
  }

  //   UTILITIES
  const isEmpty = () => {
    return singlyLinkedList.current.isEmpty();
  };
  const reverse = async () => {
    await singlyLinkedList.current.reverse(async (data) => {
      setHighlightNodeId(data.id);
    });
    setList(singlyLinkedList.current.flat());
  };
  const clear = () => {
    singlyLinkedList.current.clear();
    setList(singlyLinkedList.current.flat());
  };
  const setDelay = (delay: number) => {
    singlyLinkedList.current.setAniamtionDelay(delay);
    setList(singlyLinkedList.current.flat());
  };
  const size = () => {
    return singlyLinkedList.current.size();
  };

  //   INSERTION
  const insertFront = (val: any) => {
    singlyLinkedList.current.insertFront(createNode(val));
    setList(singlyLinkedList.current.flat());
  };
  const insertBack = (val: any) => {
    singlyLinkedList.current.insertBack(createNode(val));
    setList(singlyLinkedList.current.flat());
  };
  const insertAt = async (index: number, data: any) => {
    try {
      setBlockUI(true);
      await singlyLinkedList.current.insertAt(
        index,
        createNode(data),
        (callbackData, index) => {
          if (callbackData === true) {
            setHighlightNodeId("");
            setBlockUI(false);
          } else {
            setHighlightNodeId(callbackData.id);
          }
        }
      );
      setList(singlyLinkedList.current.flat());
    } catch (err) {
      setBlockUI(false);
    }
  };

  //   DELETION
  const removeFront = () => {
    setBlockUI(true);
    try {
      singlyLinkedList.current.removeFront();
      setList(singlyLinkedList.current.flat());
    } catch (err) {
      setBlockUI(false);
    }
  };
  const removeBack = () => {
    setBlockUI(true);
    try {
      singlyLinkedList.current.removeBack();
      setList(singlyLinkedList.current.flat());
    } catch (err) {
      setBlockUI(false);
    }
  };
  const remove = async (val: any) => {
    setBlockUI(true);
    try {
      await singlyLinkedList.current.remove(
        (data) => {
          if (data == -1) {
            setHighlightNodeId("");
            setBlockUI(false);
          } else {
            setHighlightNodeId(data.id);
          }
        },
        val,
        myEqal
      );
      setList(singlyLinkedList.current.flat());
    } catch (err) {
      setBlockUI(false);
    }
  };

  const removeAt = async (index: number) => {
    setBlockUI(true);
    try {
      await singlyLinkedList.current.removeAt(index, (data, i) => {
        setHighlightNodeId(data.id);
      });
      setHighlightNodeId("");
      setBlockUI(false);
      setList(singlyLinkedList.current.flat());
    } catch (err) {
      setBlockUI(false);
      setHighlightNodeId("");
    }
  };

  //   SEARCHING
  const get = (val: any) => {
    singlyLinkedList.current.get(val);
    setList(singlyLinkedList.current.flat());
  };
  const raw = () => {
    return singlyLinkedList.current;
  };

  const updateData = async (at: number, data: any) => {
    try {
      setBlockUI(true);
      await singlyLinkedList.current.updateData(
        at,
        { data: data },
        (data, index) => {
          if (data === true) {
            setBlockUI(false);
            setHighlightNodeId("");
          }
          setHighlightNodeId(data.id);
        }
      );
      setList(singlyLinkedList.current.flat());
    } catch (err) {
      setBlockUI(false);
    }
  };

  const replace = async (at: number, data: any) => {
    try {
      setBlockUI(true);
      await singlyLinkedList.current.updateData(
        at,
        createNode(data),
        (data, index) => {
          if (data === true) {
            // setBlockUI(false);
            setHighlightNodeId("");
          }
          setHighlightNodeId(data.id);
        }
      );
      setList(singlyLinkedList.current.flat());
    } catch (err) {
      setBlockUI(false);
    }
  };

  const items = () => {
    return list;
  };

  return {
    blockUI,
    setBlockUI,
    items,
    raw,
    hightlightNodeId,
    insertBack,
    insertFront,
    insertAt,
    removeFront,
    removeBack,
    remove,
    get,
    updateData,
    reverse,
    clear,
    isEmpty,
    replace,
    removeAt,
    setDelay,
    size,
  };
};

function createNode(val: any) {
  return {
    data: val,
    id: Math.random().toString(36).substring(1),
  };
}

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
