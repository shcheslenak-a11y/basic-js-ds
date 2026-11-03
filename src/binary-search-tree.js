const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  root() {
    return this.rootNode || null;
  }

  add(data) {
    if(!this.rootNode){ this.rootNode = new Node(data); return;}
    let currentNode = this.root();
    while(true){
      let next = currentNode.data > data ? 'left': 'right';
      if (!currentNode[next]){
        currentNode[next] = new Node(data);
        currentNode[next].parent = currentNode;
        break
      }
      currentNode = currentNode[next];
    }
  }

  find(data) {
    let currentNode = this.root();
    while(currentNode){
      if(currentNode.data === data) break;
      currentNode = currentNode[currentNode.data > data ? 'left': 'right'];
    }
    return currentNode
  }

  has(data) {
    return this.find(data) != null
  }

  findNode(node, dir){
    let currentNode = node;
    while(currentNode){
      if(!currentNode[dir]) return currentNode;
      currentNode = currentNode[dir];
    }
  }

  remove(data) {
    let currentNode = this.root();
    let node = this.find(data);
    if (node){
        let right = node.right;
        if (right){
          let f = this.findNode(right, 'left')
          f.left = node.left
        } else right = node.left
        let parent = node.parent;
        if(parent) parent[parent.data > node.data ? 'left': 'right'] = right;
        else this.rootNode = right;
      }
  }

  min() {
    return this.findNode(this.root(), 'left').data;
  }

  max() {
    return this.findNode(this.root(), 'right').data;
  }
}

module.exports = {
  BinarySearchTree
};