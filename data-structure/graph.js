// 双向图：邻接表实现
class Graph {
  #vertexes = {}

  add(vertex1, vertex2) {
    this.#vertexes[vertex1] = this.#vertexes[vertex1] || new Set()
    this.#vertexes[vertex2] = this.#vertexes[vertex2] || new Set()

    this.#vertexes[vertex1].add(vertex2)
    this.#vertexes[vertex2].add(vertex1)
  }

  print() {
    for (let vertex in this.#vertexes) {
      const routes = Array.from(this.#vertexes[vertex])
      console.log(`${vertex} => ${routes}`)
    }
  }

  // 深度优先遍历
  dfs(start, callback) {
    if (!this.#vertexes[start]) {
      return
    }

    const complete = []
    this.#dfsVisite(start, complete, callback)
  }

  #dfsVisite = function (start, complete, callback) {
    if (complete.includes(start)) {
      return
    }

    complete.push(start)
    this.#vertexes[start].forEach(v => this.#dfsVisite(v, complete, callback))
    callback(start)
  }

  // 广度优先遍历
  bfs(start, callback) {
    if (!this.#vertexes[start]) {
      return
    }

    const complete = []
    const incomplete = [start]

    while (incomplete.length > 0) {
      const vertex = incomplete.shift()
      callback(vertex)

      this.#vertexes[vertex].forEach(v => !incomplete.includes(v) && !complete.includes(v) && incomplete.push(v))
      complete.push(vertex)
    }
  }

  minDistance(start, end) {
    if (!this.#vertexes[start] || !this.#vertexes[end]) {
      throw `Vertex ${start} or ${end} does not exist`
    }

    // 已经遍历的点
    const complete = []
    // 需要遍历的点
    const incomplete = [start]
    // 每个点的回溯点
    const traceback = {}

    while (incomplete.length > 0) {
      const vertex = incomplete.shift()

      const routes = Array.from(this.#vertexes[vertex])
      for (let i = 0; i < routes.length; i++) {
        const next = routes[i]
        if (incomplete.includes(next) || complete.includes(next)) {
          continue
        }

        traceback[next] = vertex

        if (next === end) {
          const path = [end]
          while (path[path.length - 1] !== start) {
            const current = path[path.length - 1]
            path.push(traceback[current])
          }
          return path.reverse()
        }

        incomplete.push(next)
      }
      complete.push(vertex)
    }
  }
}

module.exports = Graph