import { SinglyLinkedList } from "../../../ds/linked_list";

export interface LinkedList {
  blockUI: boolean;
  setBlockUI: (val: boolean) => void;
  items: () => any[];
  raw: () => SinglyLinkedList<unknown>;
  hightlightNodeId: string;
  insertBack: (data: any) => void;
  insertFront: (data: any) => void;
  insertAt: (index: number, data: any) => Promise<void>;
  removeFront: () => void;
  removeBack: () => void;
  remove: (val: any) => Promise<void>;
  get: (val: any) => void;
  updateData: (at: number, data: any) => Promise<void>;
  reverse: () => void;
  clear: () => void;
  isEmpty: () => boolean;
  replace: (at: number, data: any) => void;
  removeAt: (index: number) => Promise<void>;
  setDelay: (delay: number) => void;
  size: () => number;
}

export type LinkedListOperations =
  | "insertBack"
  | "insertFront"
  | "insertAt"
  | "removeFront"
  | "removeBack"
  | "removeAt"
  | "remove"
  | "get"
  | "updateData"
  | "reverse"
  | "clear"
  | "replace"
  | "updateData";

interface ISuboperations {
  [operation: string]: {
    name: LinkedListOperations;
    allowed: string[];
    description?: string;
  }[];
}

export const LinkedListSubOperations: ISuboperations = {
  insertion: [
    {
      name: "insertBack",
      allowed: ["data"],
      description: `Also referred to as push(), this operation inserts a new node at the end of the Linked List. Usually takes O(n) time, but since we have a separate pointer for the tail, it executes in just O(1) time.
        `,
    },
    {
      name: "insertFront",
      allowed: ["data"],
      description: `Also referred to as unshift(), this operation has an O(1) time complexity, and it inserts the node at the very beginning of the Linked List. The Head pointer points to this newly inserted node. `,
    },
    {
      name: "insertAt",
      allowed: ["index", "data"],
      description: `This method inserts a new node at a specific index. It takes O(n) time to complete the operation.\n0 ≤ index ≤ n-1 (where n is the size of the list)`,
    },
  ],

  deletion: [
    {
      name: "remove",
      allowed: ["data"],
      description: `Removes the first node, which contains data equal to input data passed to the method. It takes O(n) time to complete the operation.`,
    },
    {
      name: "removeAt",
      allowed: ["index"],
      description: `This method removes the node at a specific index and takes O(n) time to complete the operation.\n0 ≤ index ≤ n-1 (where n is the size of the list)`,
    },
    {
      name: "removeFront",
      allowed: [""],
      description: `Also referred to as unshift(), this operation removes the first node from the linked list within O(1) time.`,
    },
    {
      name: "removeBack",
      allowed: [""],
      description: `Also referred to as pop(), this operation removes the last node from the linked list and has a time complexity of O(n).`,
    },
  ],
  utilities: [
    {
      name: "reverse",
      allowed: [""],
      description: `This method reverses the Linked list by interchanging the reference to each node and adjusting the head pointer.`,
    },
    {
      name: "updateData",
      allowed: ["data", "index"],
      description: `Also referred to as set(), this operation edits the data of the node at a specific index and has a time complexity of O(n).\n0 ≤ index ≤ n-1 (where n is the size of the list)`,
    },
    {
      name: "replace",
      allowed: ["data", "index"],
      description: `It is similar to the updateData() operation, but instead of replacing the data at the specified index, it deletes the old node and creates a new node with input data at the specified index. It also takes O(n) time to complete the operation.\n0 ≤ index ≤ n-1 (where n is the size of the list)`,
    },
    {
      name: "clear",
      allowed: [""],
      description: `This operation removes all nodes by setting the linked list as undefined. It takes O(1) time to complete execution.`,
    },
  ],
};

export { LinkedListView } from "./LinkedList";
