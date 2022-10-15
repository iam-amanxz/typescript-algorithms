import { Stack } from './stack'

describe('test stack functionality', () => {
  it('should be empty when initialized', () => {
    const stack = new Stack(10)
    const isEmpty = stack.isEmpty()
    
    expect(isEmpty).toBe(true)
  })

  it('should be full when max capacity is reached', () => {
    const stack = new Stack<string>(2)
    stack.push('🐅')
    stack.push('🐐')
    const isFull = stack.isFull()
    
    expect(isFull).toBe(true)
  })

  it('should add items to the stack', () => {
    const stack = new Stack<number>(3)
    stack.push(2)
    stack.push(3)
    
    expect(stack.stack).toStrictEqual([2, 3])
  })

  it('should remove items from the stack', () => {
    const stack = new Stack<string>(5)
    stack.push('a')
    stack.push('b')
    stack.push('c')
    stack.push('d')
    stack.push('e')
    stack.pop()
    stack.pop()

    expect(stack.stack).toStrictEqual(['a', 'b', 'c'])
  })

  it('should not allow to add more item than the capacity', () => {
    const stack = new Stack<number>(1)
    stack.push(2)
    const status = stack.push(3)
    
    expect(status).toBe(false)
  })

  it('should not allow to remove item when the stack is empty', () => {
    const stack = new Stack<number>(1)
    const status = stack.pop()
    
    expect(status).toBe(false)
  })

  it('should return the first element', () => {
    const stack = new Stack<string>(3)
    stack.push('hello')
    stack.push('world')
    stack.push('people')
    const firstElement = stack.peek()
    
    expect(firstElement).toBe('hello')
  })
})
