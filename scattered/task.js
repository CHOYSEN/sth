const delay = wait => new Promise(r => setTimeout(r, wait))

class Task {
  #tasks = []
  #isDoing = false

  async #run() {
    if (this.#isDoing) return

    this.#isDoing = true
    while (this.#tasks.length) {
      await this.#tasks.shift()()
    }

    this.#isDoing = false
  }

  lunch(str) {
    this.#tasks.push(() => console.log(str))
    this.#run()
    return this
  }

  sleep(wait) {
    this.#tasks.push(() => delay(wait))
    this.#run()
    return this
  }
}

new Task().lunch('start').sleep(3000).lunch('end')