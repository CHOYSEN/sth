// 二叉搜索树
class Tree {
  #root = null

  static Node = class {
    constructor(value) {
      this.left = null
      this.right = null
      this.value = value
    }
  }

  getRoot() {
    return this.#root
  }

  insert(value) {
    const node = new Tree.Node(value)
    if (!this.#root) {
      this.#root = node
    } else {
      this.#insertNode(node, this.#root)
    }
  }

  #insertNode = function (newNode, needle) {
    if (newNode.value < needle.value) {
      if (!needle.left) {
        needle.left = newNode
      } else {
        this.#insertNode(newNode, needle.left)
      }
    }

    if (newNode.value > needle.value) {
      if (!needle.right) {
        needle.right = newNode
      } else {
        this.#insertNode(newNode, needle.right)
      }
    }
  }

  traverse(callback) {
    if (!this.#root) {
      return
    }

    this.#traverseNode(this.#root, callback)
  }

  #traverseNode = function (needle, callback) {
    if (!needle) {
      return
    }

    callback(needle.value)
    this.#traverseNode(needle.left, callback)
    this.#traverseNode(needle.right, callback)
  }

  getMin() {
    let needle = this.#root
    if (!needle) {
      return null
    }

    while (needle.left) {
      needle = needle.left
    }
    return needle.value
  }

  getMax() {
    let needle = this.#root
    if (!needle) {
      return null
    }

    while (needle.right) {
      needle = needle.right
    }
    return needle.value
  }

  #getMinNode = function (needle) {
    if (!needle) {
      return null
    }

    while (needle.left) {
      needle = needle.left
    }
    return needle
  }

  remove(value) {
    if (!this.#root) {
      return false
    }

    // 重新构建树
    this.#root = this.#removeNode(this.#root, value)
    return true
  }

  #removeNode = function (needle, value) {
    if (needle.value > value) {
      // 重新构建当前节点的左节点
      needle.left = this.#removeNode(needle.left, value)
      return needle
    }

    if (needle.value < value) {
      // 重新构建当前节点的右节点
      needle.right = this.#removeNode(needle.right, value)
      return needle
    }

    // value === node.value，开始删除
    // 没有子节点（叶节点）
    if (!needle.left && !needle.right) {
      return null
    }

    // 只有单侧子节点
    if ((needle.left && !needle.right) || (!needle.left && needle.right)) {
      return needle.left ? needle.left : needle.right
    }

    // 左右侧都有子节点，用右侧子节点中的最小节点来替换
    const minNode = this.#getMinNode(needle.right)
    needle.value = minNode.value
    needle.right = this.#removeNode(needle.right, minNode.value)
    return needle
  }
}

module.exports = Tree