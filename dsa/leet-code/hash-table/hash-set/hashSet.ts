// Not done...
class MyHashSet {
  //     collision resolution algoritm?
  //     implement hash fn?
  private _buckets: number[][]
  private _tableSize: number

  constructor() {
    this._buckets = new Array()
    // tableSize = 1013 --> arbitrary choice
    // (plus it's a prime number)
    this._tableSize = 1013
    for (let i = 0; i < this._tableSize; i++) {
      this._buckets.push([])
    }
  }

  add(key: number): void {
    const index = this.hash(key)
    if (this.contains(key)) {
      this._buckets[index].push(key)
    }
  }

  remove(key: number): void {
    const index = this.hash(key)
    const bucket = this._buckets[index]
    const keyIndex = bucket.indexOf(key)
    if (keyIndex > -1) {
      bucket.splice(keyIndex, 1)
    }
  }

  contains(key: number): boolean {
    const index = this.hash(key)
    const bucket = this._buckets[index]
    return bucket.includes(key) ? true : false
  }

  private hash(value: number) {
    return value % this._tableSize
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

var obj = new MyHashSet()
//  obj.add(6)
//  obj.remove(2)
//  console.log('obj', obj)
// var param_3 = obj.contains(1)
//  console.log('param_3', param_3)
