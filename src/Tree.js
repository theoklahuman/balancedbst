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

  insert(key, root = this.root) {
    if (root === null || key === root.data) {
      console.log("I got here!");
      //   const keyNode = new Node(key);
      //   console.log(keyNode);
      //   console.log(root);
      //   root = keyNode;
      //   console.log(root);
      //   console.log(this.root);
      return root;
    } else if (
      key < root.data &&
      (root.leftChild === null || root.leftChild.data === null)
    ) {
      const treeNode = new Node(key);
      root.leftChild = treeNode;
      return;
    } else if (
      key > root.data &&
      (root.rightChild === null || root.rightChild.data === null)
    ) {
      const treeNode = new Node(key);
      root.rightChild = treeNode;
      return;
    } else if (key < root.data) {
      this.insert(key, root.leftChild);
    } else if (key > root.data) {
      this.insert(key, root.rightChild);
    }
  }

  delete(node, root = this.root) {
    if (node === root) {
      console.log("why did I get here?");
      return;
    } else if (
      node === root.data &&
      root.leftChild === null &&
      root.rightChild === null
    ) {
      const newNode = new Node();
      root = newNode;
      return;
      //   console.log("I got to this instead");
      //   console.log(root.leftChild);
      //   root.leftChild = this.delete(node, root.leftChild);
      //   return;
    } else if (node < root.data && root.leftChild.data === node) {
        console.log(root.data);
        console.log("I'm expected to get here!");
        console.log(root.leftChild.data);
        const newNode = new Node();
        console.log(newNode);
        root.leftChild = newNode;
        console.log(root.leftChild);
        return;
    } else if (node < root.data) {
      this.delete(node, root.leftChild);
    }
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.rightChild !== null) {
      this.prettyPrint(
        node.rightChild,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.leftChild !== null) {
      this.prettyPrint(
        node.leftChild,
        `${prefix}${isLeft ? "    " : "│   "}`,
        true
      );
    }
  }
}
