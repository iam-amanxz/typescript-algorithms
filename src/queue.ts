// A queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

// A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served. (i.e. First come first serve).

// Characteristics of Queue:
// Queue can handle multiple data.
// We can access both ends.
// They are fast and flexible.
// Queue Representation:
// Like stacks, Queues can also be represented in an array: In this representation, the Queue is implemented using the array. Variables used in this case are

// Queue: the name of the array storing queue elements.
// Front: the index where the first element is stored in the array representing the queue.
// Rear: the index where the last element is stored in an array representing the queue.

// A queue is an object (an abstract data structure - ADT) that allows the following operations:

// Enqueue: Add an element to the end of the queue
// Dequeue: Remove an element from the front of the queue
// IsEmpty: Check if the queue is empty
// IsFull: Check if the queue is full
// Peek: Get the value of the front of the queue without removing it

export class Queue<T> {
  private _front: number
  private _rear: number
  private _capacity: number
  private _queue: T[]

  constructor(capacity: number) {
    this._front = -1
    this._rear = -1
    this._capacity = capacity
    this._queue = [] as T[]
  }

  get queue() {
    return this._queue
  }

  isFull(): boolean {
    return this._front === 0 && this._rear === this._capacity - 1
  }

  isEmpty(): boolean {
    return this._front === -1
  }

  enqueue(item: T): boolean {
    if (this.isFull()) {
      console.log('Failed: Maximum capacity reached')
      return false
    }

    if (this._front === -1) {
      this._front = 0
    }
    this._rear++
    this._queue.push(item)
    return true
  }

  dequeue(): boolean {
    if (this.isEmpty()) {
      console.log('Failed: Queue is already empty')
      return false
    }
    this._queue.shift()
    if (this._front === this._rear) {
      this._front = -1
      this._rear = -1
    } else {
      this._rear--
    }
    return true
  }

  peek() {
    if (this.isEmpty()) {
      console.log('Failed: Queue is empty')
      return false
    }
    return this._queue[this._front]
  }
}

// top=0                  rear=4
// cat dog elephant tiger lion

// top=0              rear=3
// dog elephant tiger lion

// top=0          rear=2
// elephant tiger lion

// top=0 rear=0
// lion

// top=-1 rear=-1
//

// top=0 rear=0
// banana

// top=0 rear=1
// banana apple
