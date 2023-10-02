import Node from "./Node";

export default class Tree {
    constructor(array) {
      this.array = array;
      this.root = this.buildTree();
    }
  
    buildTree(array = this.array, start, end) {
      start = 0;
      end = array.length - 1;
      const mid = Math.round((start + end) / 2);
      if (start > end) {
        return null;
      } else {
        const treeNode = new Node(array[mid]);
        treeNode.leftChild = this.buildTree(array.slice(start, mid));
        treeNode.rightChild = this.buildTree(array.slice(mid + 1, array.length));
        return treeNode;
      }
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.rightChild !== null) {
          this.prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.leftChild !== null) {
          this.prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      }
    
  }
