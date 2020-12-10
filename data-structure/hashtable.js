// 哈希表：容易产生哈希冲突
class HashTable {
  #table = []

  static loseLoseHashCode(key) {
    let hash = 0
    key.toString().split('').forEach(item => hash += item.charCodeAt())
    return hash % 37
  }

  put(key, value) {
    this.#table[HashTable.loseLoseHashCode(key)] = value
  }

  get(key) {
    return this.#table[HashTable.loseLoseHashCode(key)]
  }

  remove(key) {
    this.#table[HashTable.loseLoseHashCode(key)] = undefined
  }
}

// 分离链接法：使用链表
import LinkedList from "./linkedList.js"
class HashTable_l extends HashTable {
  static Node = class {
    constructor(key, value) {
      this.key = key
      this.value = value
    }
  }

  put(key, value) {
    const hash = HashTable.loseLoseHashCode(key)
    if (!this.#table[hash]) {
      this.#table[hash] = new LinkedList()
    }
    this.#table[hash].append(new HashTable_l.Node(key, value))
  }

  get(key) {
    const linkedList = this.#table[HashTable.loseLoseHashCode(key)]
    if (!linkedList) {
      return null
    }
    let needle = linkedList.getHead()
    while (needle.next) {
      if (needle.content.key === key) {
        return needle.content.value
      }
      needle = needle.next
    }
    return null
  }

  remove(key) {
    const linkedList = this.#table[HashTable.loseLoseHashCode(key)]
    if (!linkedList) {
      return false
    }
    let needle = linkedList.getHead()
    while (needle) {
      if (needle.content.key) {
        linkedList.remove(needle.content)
        linkedList.getLength() === 0 && (this.#table[HashTable.loseLoseHashCode(key)] = undefined)
        return true
      }
      needle = needle.next
    }
    return false
  }
}

// 线性探查法：位置被占用向后存
class HashTable_x extends HashTable {
  static Node = class {
    constructor(key, value) {
      this.key = key
      this.value = value
    }
  }

  put(key, value) {
    let hash = HashTable.loseLoseHashCode(key)
    while (this.#table[hash] && this.#table[hash] !== "<LAZY DELETE>") {
      hash++
    }
    this.#table[hash] = new HashTable_x.Node(key, value)
  }

  get(key) {
    let hash = HashTable.loseLoseHashCode(key)
    while (this.#table[hash]) {
      if (this.#table[hash].key === key) {
        return this.#table[hash].value
      }
      hash++
    }
    return null
  }

  remove(key) {
    let hash = HashTable.loseLoseHashCode(key)
    while (this.#table[hash]) {
      if (!needle) {
        return false
      }
      if (this.#table[hash].key === key) {
        // lazy delete
        // 如果直接删除会导致查找链断裂
        this.#table[hash] = "<LAZY DELETE>"
        return true
      }
      hash++
    }
    return false
  }
}

// 更好的哈希函数
function djb2HashCode(key) {
  let hash = 5381
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key[i].charCodeAt()
  }
  return hash % 1013
}

export default {
  HashTable,
  HashTable_l,
  HashTable_x
}