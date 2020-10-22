// 栈：先进后出
class Stack {
  #items = []

  getItems() {
    return this.#items
  }

  getSize() {
    return this.#items.length
  }

  clear() {
    this.#items.length = 0
  }

  // 出栈
  pop() {
    return this.#items.pop()
  }

  // 入栈
  push(item) {
    return this.#items.push(item)
  }

  // 检查栈顶
  peek() {
    return this.#items[this.#items.length - 1]
  }
}

export default Stack