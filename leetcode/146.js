/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1
  }
  const value = this.map.get(key)
  // 删除再添加，让获取项成为 map 的最新项
  this.map.delete(key)
  this.map.set(key, value)
  return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 删除再添加，让获取项成为 map 的最新项
  if (this.map.has(key)) {
    this.map.delete(key)
  }
  this.map.set(key, value)
  // 删除最早的一项
  if (this.map.size > this.capacity) {
    // Map.prototype.keys() 会返回按照添加顺序的、键集合的类数组
    //const oldest = Array.from(this.map.keys())[0]
    const oldest = this.map.keys().next().value
    this.map.delete(oldest)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */