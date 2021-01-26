// 双向图：邻接表实现
class Graph {
  #vertexesMap = new Map()

  add(vertex1, vertex2) {
    const vertexesSet1 = this.#vertexesMap.get(vertex1) ?? new Set()
    const vertexesSet2 = this.#vertexesMap.get(vertex2) ?? new Set()

    vertexesSet1.add(vertex2)
    vertexesSet2.add(vertex1)

    this.#vertexesMap.set(vertex1, vertexesSet1)
    this.#vertexesMap.set(vertex2, vertexesSet2)
  }

  print() {
    for (let vertex in this.#vertexesMap) {
      const routes = Array.from(this.#vertexesMap[vertex])
      console.log(`${vertex} => ${routes}`)
    }
  }

  // 深度优先遍历
  dfs(start, callback) {
    if (!this.#vertexesMap.has(start)) {
      return
    }

    const complete = []
    this.#dfsVisite(start, complete, callback)
  }

  #dfsVisite(vertex, complete, callback) {
    if (complete.includes(vertex)) {
      return
    }

    complete.push(vertex)
    this.#vertexesMap.get(vertex).forEach(v => this.#dfsVisite(v, complete, callback))
    callback(vertex)
  }

  // 广度优先遍历
  bfs(start, callback) {
    if (!this.#vertexesMap.has(start)) {
      return
    }

    const complete = []
    const incomplete = [start]

    while (incomplete.length) {
      const vertex = incomplete.shift()
      callback(vertex)

      this.#vertexesMap.get(vertex).forEach(v => !incomplete.includes(v) && !complete.includes(v) && incomplete.push(v))
      complete.push(vertex)
    }
  }

  minDistance(start, end) {
    if (!this.#vertexesMap.has(start) || !this.#vertexesMap.has(end)) {
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

      const routes = Array.from(this.#vertexesMap.get(vertex))
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

export default Graph