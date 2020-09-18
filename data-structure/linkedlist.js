// 单向链表：一环扣一环
class LinkedList {
  #head = null
  #length = 0

  static Node = class {
    constructor(content) {
      this.next = null
      this.content = content
    }
  }

  getHead() {
    return this.#head
  }

  getLength() {
    return this.#length
  }

  // 向链表尾添加节点
  append(content) {
    const node = new LinkedList.Node(content)

    if (!this.#head) {
      this.#head = node
    } else {
      let needle = this.#head
      while (needle.next) {
        needle = needle.next
      }
      needle.next = node
    }
    this.#length++
  }

  // 向链表指定位置插入节点
  insert(position, content) {
    if (position < 0 || position > this.#length) {
      throw "Out of place"
    }

    const node = new LinkedList.Node(content)
    if (position === 0) {
      node.next = this.#head
      this.#head = node
    } else {
      let needle = this.#head
      for (let i = 0; i < position - 1; i++) {
        needle = needle.next
      }
      node.next = needle.next
      needle.next = node
    }
    this.#length++
  }

  // 在链表指定位置删除节点
  removeAt(position) {
    if (position < 0 || position > this.#length - 1) {
      throw "Out of place"
    }
    if (position === 0) {
      this.#head = this.#head.next
    } else {
      let needle = this.#head
      for (let i = 0; i < position - 1; i++) {
        needle = needle.next
      }
      needle.next = needle.next.next
    }
    this.#length--
  }

  // 根据内容查找位置
  indexOf(content) {
    let needle = this.#head
    for (let i = 0; i < this.#length; i++) {
      if (needle.content === content) {
        return i
      }
      needle = needle.next
    }
    return -1
  }

  remove(content) {
    this.removeAt(this.indexOf(content))
  }
}

module.exports = LinkedList