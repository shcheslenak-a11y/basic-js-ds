const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
function form(node){
  if(!node) return null
  return {value: node.value, next:form(node.next)}
}
class Queue {
  getUnderlyingList() {
    return form(this.first)
  }

  enqueue(value) {
    let node = this.first;
    if(!node) {this.first = new ListNode(value); return}
    while(node.next) node = node.next;
    node.next = new ListNode(value)
  }

  dequeue() {
    let first = this.first;
    if (first){
      let value = first.value;
      this.first = first.next;
      return value;
    }
  }
}

module.exports = {
  Queue
};
