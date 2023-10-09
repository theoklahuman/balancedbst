import Node from "./Node";
import Tree from "./Tree";

const smallSortedArray = [1, 2, 3];
const smallTree = new Tree(smallSortedArray);
const sampleSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sampleTree = new Tree(sampleSortedArray);
const sampleNode = new Node(smallSortedArray);
const emptyArray = [null];
const emptyTree = new Tree(emptyArray);

// emptyTree.insert(0);

// console.log(smallTree.insert);
// console.log(sampleTree.insert(0));
// sampleTree.prettyPrint();
// console.log(smallTree.testLeftChild());

// const exampleArray = [20, 30, 32, 34, 36, 40, 50, 60, 65, 70, 75, 80, 85];
// const exampleTree = new Tree(exampleArray);
// exampleTree.insert(60);
// exampleTree.prettyPrint();

smallTree.delete(1);
// smallTree.prettyPrint();
// console.log(smallTree.root);
// console.log(`this is the left child ${smallTree.root.leftChild.leftChild}`);
smallTree.prettyPrint();
console.log(smallTree.root.leftChild);
// smallTree.insert(4);
// smallTree.insert(1);
// smallTree.insert(0);
// smallTree.prettyPrint();
// smallTree.delete(0);
// console.log(smallTree.root);
// smallTree.delete(0);
// console.log(smallTree.root);
// smallTree.prettyPrint();
// smallTree.delete(1);
// smallTree.prettyPrint();
