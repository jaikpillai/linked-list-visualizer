import { defaultEquals, EqualsFunction } from "../utils/generic";

export class SinglyLinkedListNode<T> {
  data: T;
  next: SinglyLinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export interface SLL<T> {
  head: SinglyLinkedListNode<T>;
  tail: SinglyLinkedListNode<T>;
  size: number;
}

export class SinglyLinkedList<T> {
  private list: SLL<T> | undefined;
  private animationDelay = 0;

  setAniamtionDelay(delay: number) {
    this.animationDelay = delay;
  }

  getAnimationDelay() {
    return this.animationDelay;
  }

  size() {
    if (this.list) return this.list.size;
    return 0;
  }

  clear(): void {
    this.list = undefined;
  }

  private outOfBounds(index: number): boolean {
    return index < 0 || index >= this.size() || !this.list;
  }

  isEmpty() {
    //TODO
    return this.size() <= 0;
  }

  insertFront(value: T) {
    const newNode = new SinglyLinkedListNode(value);
    if (this.list) {
      newNode.next = this.list.head;
      this.list.head = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
    return this.list.size;
  }

  insertBack(value: T): number {
    const newNode = new SinglyLinkedListNode(value);
    if (this.list) {
      this.list.tail.next = newNode;
      this.list.tail = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
    return this.list.size;
  }

  async insertAt(
    at: number,
    value: T,
    callback?: (data: any, index: number) => void
  ) {
    if (at == 0) {
      this.insertFront(value);
      return callback && callback(true, at);
    }

    if (at == this.size()) {
      this.insertBack(value);
      return callback && callback(true, at);
    }

    if (this.outOfBounds(at)) {
      throw new Error("Index out of bounds");
    }

    let cur = this.list!.head;

    for (var i = 0; i < at - 1; i++) {
      callback && callback(cur.data, i);
      cur = cur.next!;
      if (this.animationDelay > 0) {
        await sleep(this.animationDelay);
      }
    }
    callback && callback(cur.data, i);
    await sleep(this.animationDelay);

    const newNode = new SinglyLinkedListNode(value);
    newNode.next = cur.next;
    newNode.data = value;
    cur.next = newNode;
    this.list!.size += 1;
    callback && callback(true, i);
  }

  get(index: number) {
    if (index < 0 || index >= this.size() || !this.list) {
      throw new Error("Index out of bounds");
    }

    let cur = this.list.head;
    let j = 0;
    while (j < index) {
      cur = cur.next!;
      j++;
    }

    return cur.data;
  }

  map<U>(
    callback: (value: T, index: number) => U,
    thisArgs?: any
  ): U[] | undefined {
    if (!this.list) {
      return undefined;
    }
    let arr = [];

    let i = 0;
    while (i < this.list.size) {
      arr.push(callback(this.get(i), i));
      i++;
    }
    return arr;
  }

  removeFront() {
    if (!this.list || this.list.size <= 0) {
      throw new Error("Index out of bounds");
    }

    let cur = this.list.head;

    if (cur.next) {
      this.list.head = cur.next;
      this.list.size = this.list.size - 1;
      // cur.next = cur;
    } else {
      this.list = undefined;
    }
  }

  async removeBack(callback?: (data: any) => void) {
    if (!this.list || this.list.size <= 0) {
      throw new Error("Index out of bounds");
    }

    if (this.list.size == 1) {
      return this.removeFront();
    }

    let cur = this.list.head;
    let prevToTail = this.list.head;

    while (cur.next) {
      prevToTail = cur;
      cur = cur.next;
      callback && callback(cur.data);
      if (this.animationDelay > 0) {
        await sleep(this.animationDelay);
      }
    }

    prevToTail.next = null;
    this.list.tail = prevToTail;
    this.list.size = this.list.size - 1;
  }

  async remove<U>(
    callback: (data: any, index: number) => U,
    elem: T,
    equalsFunction?: EqualsFunction<T>
  ) {
    if (!this.list) {
      throw new Error("Index out of bounds");
    }

    const equalsF = equalsFunction || defaultEquals;
    let j = 0;
    let cur = this.list.head;
    let next = cur.next;

    while (j < this.list.size) {
      callback(cur.data, j);
      if (equalsF(this.list.head.data, elem)) {
        return this.removeFront();
      }

      if (next && equalsF(next.data, elem)) {
        if (next === this.list.tail) {
          this.list.tail = cur;
        }

        if (this.animationDelay > 0) {
          await sleep(this.animationDelay);
        }
        callback(cur.data, j + 1);
        var temp = next;
        next = next.next;
        cur.next = next;
        this.list.size -= 1;

        temp = null!;
        return callback("-3", j + 1);
      }
      if (this.animationDelay > 0) {
        await sleep(this.animationDelay);
      }

      j++;
      cur = cur.next!;
      next = next?.next!;
    }

    return callback(-1, j + 1);
  }

  async removeAt<U>(index: number, callback: (data: any, index: number) => U) {
    if (!this.list) {
      throw new Error("Index out of bounds");
    }

    if (index > this.list.size - 1) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      return this.removeFront();
    }
    if (index === this.list.size - 1) {
      return this.removeBack();
    }

    let j = 0;
    let cur = this.list.head;
    let prevToDelete = this.list.head;

    while (j < index) {
      callback(cur.data, index);
      prevToDelete = cur;
      cur = cur.next!;
      j++;
      if (this.animationDelay > 0) {
        await sleep(this.animationDelay);
      }
    }

    prevToDelete.next = cur.next;
    this.list.size -= 1;
  }

  peekFront(): any {
    if (!this.list) {
      return null;
    }

    return this.list.head.data;
  }

  peekBack() {
    if (!this.list) {
      throw new Error("Index out of bounds");
    }

    return this.list.tail.data;
  }

  async reverse(callback?: (data: any) => void) {
    if (!this.list || this.list.size <= 0) {
      return undefined;
    }

    let cur = this.list.head;
    let tempTail = this.list.head;
    let prev = null;
    while (cur != null) {
      callback && callback(cur?.data || "");

      var next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next!;

      await sleep(this.animationDelay);
    }

    this.list.head = prev!;
    this.list.tail = tempTail;
    callback && callback("");
  }

  flat(): Array<any> {
    if (!this.list) {
      return [];
    }
    let arr: any = [];
    let cur = this.list.head;

    while (cur != null) {
      arr.push(cur.data);
      cur = cur.next!;
    }
    return arr;
  }

  async updateData(
    at: number,
    data: any,
    callback?: (data: any, index: number) => void
  ) {
    if (at < 0 || at >= this.size() || !this.list) {
      throw new Error("Index out of bounds");
    }

    let cur = this.list.head;

    if (at == 0) {
      cur.data = { ...cur.data, ...data };
      callback && callback(true, at);
    }

    if (this.outOfBounds(at)) {
      throw new Error("Index out of bounds");
    }

    for (var i = 0; i < at; i++) {
      callback && callback(cur.data, i);
      cur = cur.next!;
      if (this.animationDelay > 0) {
        await sleep(this.animationDelay);
      }
    }
    callback && callback(cur.data, i);
    cur.data = { ...cur.data, ...data };
    await sleep(this.animationDelay);

    callback && callback(true, i);
  }
}

const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
