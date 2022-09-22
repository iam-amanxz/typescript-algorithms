// Last In First Out

// Push: Add an element to the top of a stack
// Pop: Remove an element from the top of a stack
// IsEmpty: Check if the stack is empty
// IsFull: Check if the stack is full
// Peek: Get the value of the top element without removing it

// The operations work as follows:

// A pointer called TOP is used to keep track of the top element in the stack.
// When initializing the stack, we set its value to -1 so that we can check if the stack is empty by comparing TOP == -1.
// On pushing an element, we increase the value of TOP and place the new element in the position pointed to by TOP.
// On popping an element, we return the element pointed to by TOP and reduce its value.
// Before pushing, we check if the stack is already full
// Before popping, we check if the stack is already empty

export class Stack<T> {
  private _top: number
  private _capacity: number
  private _stack: T[]

  constructor(capacity: number) {
    this._top = -1
    this._capacity = capacity
    this._stack = [] as T[]
  }

  get stack() {
    return this._stack
  }

  isEmpty(): boolean {
    return this._top === -1
  }

  isFull(): boolean {
    return this._top === this._capacity - 1
  }

  peek(): T {
    return this._stack[0]
  }

  push(item: T) {
    if (this.isFull()) {
      console.log('Failed: Maximum capacity reached')
      return false
    }

    this._stack.push(item)
    this._top++
  }

  pop() {
    if (this.isEmpty()) {
      console.log('Failed: Stack is already empty')
      return false
    }

    this._stack.pop()
    this._top--
  }

  printStack() {
    this._stack.forEach((item, index) => {
      console.log(`Item at index ${index} => ${item}`)
    })
  }
}
