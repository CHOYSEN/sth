// 队列：先进先出
class Queue {
  #items = []

  // 入列
  enqueue(item) {
    this.#items.push(item)
  }

  // 出列
  dequeue() {
    return this.#items.shift()
  }

  clear() {
    this.#items.length = 0
  }

  getItems() {
    return this.#items
  }

  getLength() {
    return this.#items.length
  }
}

// 优先队列
class PriorityQueue extends Queue {
  static PriorityItem = class {
    constructor(name, priority) {
      this.name = name
      this.priority = priority
    }
  }

  enqueue(name, priority) {
    const priorityItem = new PriorityQueue.PriorityItem(name, priority)

    const length = this.#items.length
    for (let i = 0; i < length; i++) {
      if (priorityItem.priority > this.#items[i].priority) {
        this.#items.splice(i, 0, priorityItem)
        break
      }
    }

    // 优先级不比任何人高
    this.#items.length === length && this.#items.push(priorityItem)
  }
}

export default {
  Queue,
  PriorityQueue
}