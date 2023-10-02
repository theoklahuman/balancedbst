import Node from "./Node";
import Tree from "./Tree";

const smallSortedArray = [1, 2, 3];
const smallTree = new Tree(smallSortedArray);
const sampleSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sampleTree = new Tree(sampleSortedArray);
const sampleNode = new Node(smallSortedArray);

sampleTree.prettyPrint();
console.log(smallTree.root);