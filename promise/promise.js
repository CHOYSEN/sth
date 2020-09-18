class FakePromise {
  // 回调函数
  #callbacks = []
  // resolve 的值
  #value = undefined
  // reject 的原因
  #reason = undefined
  // promise 当前的状态
  #status = FakePromise.PENDING

  static PENDING = "pending"
  static REJECTED = "rejected"
  static FULFILLED = "fulfilled"

  get status() {
    return this.#status
  }

  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError(`Promise resolver ${executor} is not a function`)
    }

    const resolve = value => {
      if (this.#status === FakePromise.PENDING) {
        // 将成功值保存待用
        this.#value = value
        // 更新状态为 FULFILLED
        this.#status = FakePromise.FULFILLED

        // 异步调用所有成功回调函数
        setTimeout(() => this.#callbacks.forEach(fn => fn.onFulfilled()))
      }
    }

    const reject = reason => {
      // 仅状态为 PENDING 时可调用
      if (this.#status === FakePromise.PENDING) {
        // 将失败原因保存待用
        this.#reason = reason
        // 更新状态为 REJECTED
        this.#status = FakePromise.REJECTED

        // 异步调用所有失败回调函数
        setTimeout(() => this.#callbacks.forEach(fn => fn.onRejected()))
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      // 执行中有任何报错直接进入 reject
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    // 如果不是函数，将 value 返回顺延到下一个 then
    typeof onFulfilled !== "function" && (onFulfilled = value => value)
    // 如果不是函数，则默认失败时抛出异常
    typeof onRejected !== "function" && (onRejected = reason => { throw reason })

    const handleRejected = (resolve, reject) => {
      try {
        const result = onRejected(this.#reason)
        if (result instanceof FakePromise) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }

    const handleFulfilled = (resolve, reject) => {
      try {
        const result = onFulfilled(this.#value)
        if (result instanceof FakePromise) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
      }
    }

    return new FakePromise((resolve, reject) => {
      // PENDING
      // 放进 callback，等待 resolve 或者 reject 再执行（订阅模式）
      this.#status === FakePromise.PENDING
        &&
        this.#callbacks.push({
          onFulfilled: () => handleFulfilled(resolve, reject),
          onRejected: () => handleRejected(resolve, reject)
        })

      // REJECTED OR FULFILLED
      // 异步执行成功或失败的回调函数
      this.#status === FakePromise.REJECTED && setTimeout(() => handleRejected(resolve, reject));
      this.#status === FakePromise.FULFILLED && setTimeout(() => handleFulfilled(resolve, reject));
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(onFinally) {
    return this.then(onFinally, onFinally)
  }

  static resolve(value) {
    return value instanceof FakePromise ? value : new FakePromise(resolve => resolve(value))
  }

  static reject(reason) {
    return reason instanceof FakePromise ? reason : new FakePromise((resolve, reject) => reject(reason))
  }

  static all(iterable) {
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代对象示例
    if (!(typeof iterable === "string" || Array.isArray(iterable) || iterable instanceof Map || iterable instanceof Set)) {
      throw new TypeError(`TypeError: ${typeof iterable} ${iterable} is not iterable`)
    }

    return new FakePromise((resolve, reject) => {
      const promises = Array.from(iterable)
      promises.length === 0 && resolve([])

      let result = []
      let finished = 0
      for (let i = 0; i < promises.length; i++) {
        FakePromise.resolve(promises[i]).then(
          value => {
            result[i] = value
            finished++
            finished === promises.length && resolve(result)
          },
          reject
        )
      }
    })
  }

  static allSettled(iterable) {
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代对象示例
    if (!(typeof iterable === "string" || Array.isArray(iterable) || iterable instanceof Map || iterable instanceof Set)) {
      throw new TypeError(`TypeError: ${typeof iterable} ${iterable} is not iterable`)
    }

    return new FakePromise(resolve => {
      const promises = Array.from(iterable)
      promises.length === 0 && resolve([])

      let result = []
      let finished = 0
      for (let i = 0; i < promises.length; i++) {
        FakePromise.resolve(promises[i]).then(
          value => result[i] = {
            value,
            status: FakePromise.FULFILLED
          },
          reason => result[i] = {
            reason,
            status: FakePromise.REJECTED
          }
        ).then(() => {
          finished++
          finished === promises.length && resolve(result)
        })
      }
    })
  }

  static race(iterable) {
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代对象示例
    if (!(typeof iterable === "string" || Array.isArray(iterable) || iterable instanceof Map || iterable instanceof Set)) {
      throw new TypeError(`TypeError: ${typeof iterable} ${iterable} is not iterable`)
    }

    return new FakePromise((resolve, reject) => {
      const promises = Array.from(iterable)
      promises.forEach(item => FakePromise.resolve(item).then(resolve, reject))
    })
  }
}

module.exports = FakePromise