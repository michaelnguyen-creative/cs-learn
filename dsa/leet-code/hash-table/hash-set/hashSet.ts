// Not done...
class MyHashSet {
  //     collision resolution algoritm?
  //     implement hash fn?
      private _buckets: number[]
      private _tableSize: number
  
      constructor() {
          this._buckets = new Array()
          // Choose 5 as table size b/c 5 is a prime number
          this._tableSize = 1013
      }
  
      add(key: number): void {
          let index = this.resolveCollision(key)
          this._buckets[index] = key
      }
  
      remove(key: number): void {
          let index = this.resolveCollision(key)
          this._buckets.splice(index, index + 1)
      }
  
      contains(key: number): boolean {
          let index = this.hash(key)
          return this._buckets[index] ? true : false
      }
  
      private resolveCollision(key: number, tableSize = this._tableSize): number {
          // Calculate the hash value of the key.
          const hashValue = this.hash(key)
  
          // Initialize the index to the hash value.
          let index = hashValue;
  
          // if position of the key value is already occupied
          if (this._buckets[index]) {
              // duplicated key values --> do nothing
              if (this._buckets[index] === key) {
                  return index
              }
              index = hashValue + (tableSize * hashValue)
              return index
          }
  
          // The bucket is empty, so we can store the key here.
          return index;
      }
  
      private hash(value: number, tableSize = this._tableSize) {
          /*
              implement the hash function with modulo method
          */
          let hashValue: number = value % tableSize
          
          return hashValue
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
  
  
