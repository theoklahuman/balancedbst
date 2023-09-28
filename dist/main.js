/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QixzQkFBc0IsZUFBZTtBQUNyQyxzQkFBc0IsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoYXJyYXkgPSBudWxsKSB7XG4gICAgdGhpcy5ub2RlID0gYXJyYXk7XG4gICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIFRyZWUge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnJvb3QgPSBudWxsO1xuICB9XG5cbiAgYnVpbGRUcmVlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gICAgY29uc29sZS5sb2coYXJyYXkpO1xuICAgIHN0YXJ0ID0gMDtcbiAgICBlbmQgPSBhcnJheS5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG1pZCA9IE1hdGgucm91bmQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gbmV3IE5vZGUoYXJyYXkpO1xuICAgICAgdHJlZU5vZGUucm9vdCA9IGFycmF5W21pZF07XG4gICAgICBjb25zb2xlLmxvZyh0cmVlTm9kZS5yb290KTtcbiAgICAgIHRyZWVOb2RlLmxlZnQgPSB0aGlzLmJ1aWxkVHJlZShhcnJheS5zbGljZShzdGFydCwgbWlkKSk7XG4gICAgICB0cmVlTm9kZS5yaWdodCA9IHRoaXMuYnVpbGRUcmVlKGFycmF5LnNsaWNlKG1pZCArIDEsIGFycmF5Lmxlbmd0aCkpO1xuICAgICAgcmV0dXJuIHRyZWVOb2RlLnJvb3Q7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3Qgcm9vdCA9IHRyZWVOb2RlLmRhdGE7XG4gICAgXG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coYCR7cm9vdH0gaXMgdGhlIHJvb3RgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0cmVlTm9kZS5sZWZ0fSBpcyB0aGUgbGVmdCBzdWJ0cmVlYCk7XG4gICAgLy8gY29uc29sZS5sb2coYCR7dHJlZU5vZGUucmlnaHR9IGlzIHRoZSByaWdodCBzdWJ0cmVlYCk7XG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHRyZWVOb2RlLmxlZnQpO1xuICB9XG59XG59XG5cbmNvbnN0IHNtYWxsU29ydGVkQXJyYXkgPSBbMSwgMiwgM107XG5jb25zdCBzbWFsbFRyZWUgPSBuZXcgVHJlZShzbWFsbFNvcnRlZEFycmF5KTtcbmNvbnN0IHNhbXBsZVNvcnRlZEFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuY29uc3Qgc2FtcGxlTm9kZSA9IG5ldyBOb2RlKDQpO1xuc2FtcGxlTm9kZS5sZWZ0ID0gNTtcblxuc21hbGxUcmVlLmJ1aWxkVHJlZShzYW1wbGVTb3J0ZWRBcnJheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=