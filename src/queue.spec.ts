import { Queue } from './queue'

describe.only('test queue functionality', () => {
  it('should be empty when initialized', () => {
    const queue = new Queue(10)
    const isEmpty = queue.isEmpty()

    expect(isEmpty).toBe(true)
  })

  it('should be full when max capacity is reached', () => {
    const queue = new Queue<string>(2)
    queue.enqueue('🐅')
    queue.enqueue('🐐')
    const isFull = queue.isFull()

    expect(isFull).toBe(true)
  })

  it('should add items to the queue', () => {
    const queue = new Queue<number>(3)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.queue).toStrictEqual([2, 3])
  })

  it('should remove items from the queue', () => {
    const queue = new Queue<string>(5)
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    queue.enqueue('d')
    queue.enqueue('e')
    queue.dequeue()
    queue.dequeue()

    expect(queue.queue).toStrictEqual(['c', 'd', 'e'])
  })

  it('should not allow to add more item than the capacity', () => {
    const queue = new Queue<number>(1)
    queue.enqueue(2)
    const status = queue.enqueue(3)
    expect(status).toBe(false)
  })

  it('should not allow to remove item when the queue is empty', () => {
    const queue = new Queue<number>(1)
    const status = queue.dequeue()

    expect(status).toBe(false)
  })

  it('should return the first element', () => {
    const queue = new Queue<string>(3)
    queue.enqueue('hello')
    queue.enqueue('world')
    queue.enqueue('people')
    const firstElement = queue.peek()

    expect(firstElement).toBe('hello')
  })
})
