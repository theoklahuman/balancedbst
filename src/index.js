class Node {
  constructor(array = null) {
    this.node = array;
    this.root = null;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  buildTree(array, start, end) {
    console.log(array);
    start = 0;
    end = array.length - 1;
    const mid = Math.round((start + end) / 2);
    if (start > end) {
      return null;
    } else {
      const treeNode = new Node(array);
      treeNode.root = array[mid];
      console.log(treeNode.root);
      treeNode.left = this.buildTree(array.slice(start, mid));
      treeNode.right = this.buildTree(array.slice(mid + 1, array.length));
      return treeNode.root;
    // }

    // const root = treeNode.data;
    
    
    // console.log(`${root} is the root`);
    // console.log(`${treeNode.left} is the left subtree`);
    // console.log(`${treeNode.right} is the right subtree`);
    // console.log(typeof treeNode.left);
  }
}
}

const smallSortedArray = [1, 2, 3];
const smallTree = new Tree(smallSortedArray);
const sampleSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sampleNode = new Node(4);
sampleNode.left = 5;

smallTree.buildTree(sampleSortedArray);
