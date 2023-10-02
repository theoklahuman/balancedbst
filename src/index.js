class Node {
  constructor(array = null) {
    this.data = array;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class Tree {
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
}

// const prettyPrint = (node, prefix = "", isLeft = true) => {
//   if (node === null) {
//     return;
//   }
//   if (node.right !== null) {
//     prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   }
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//   if (node.left !== null) {
//     prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//   }
// };

const smallSortedArray = [1, 2, 3];
const smallTree = new Tree(smallSortedArray);
const sampleSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sampleTree = new Tree(sampleSortedArray);
const sampleNode = new Node(smallSortedArray);

console.log(sampleTree.root);
