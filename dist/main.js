/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsT0FBTyxFQUFFLHlCQUF5QjtBQUNwRTtBQUNBLG9CQUFvQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNsRTtBQUNBLGlDQUFpQyxPQUFPLEVBQUUseUJBQXlCO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGFuY2VkYnN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihhcnJheSA9IG51bGwpIHtcbiAgICB0aGlzLmRhdGEgPSBhcnJheTtcbiAgICB0aGlzLmxlZnRDaGlsZCA9IG51bGw7XG4gICAgdGhpcy5yaWdodENoaWxkID0gbnVsbDtcbiAgfVxufVxuXG5jbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gICAgdGhpcy5yb290ID0gdGhpcy5idWlsZFRyZWUoKTtcbiAgfVxuXG4gIGJ1aWxkVHJlZShhcnJheSA9IHRoaXMuYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgICBzdGFydCA9IDA7XG4gICAgZW5kID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBtaWQgPSBNYXRoLnJvdW5kKChzdGFydCArIGVuZCkgLyAyKTtcbiAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0cmVlTm9kZSA9IG5ldyBOb2RlKGFycmF5W21pZF0pO1xuICAgICAgdHJlZU5vZGUubGVmdENoaWxkID0gdGhpcy5idWlsZFRyZWUoYXJyYXkuc2xpY2Uoc3RhcnQsIG1pZCkpO1xuICAgICAgdHJlZU5vZGUucmlnaHRDaGlsZCA9IHRoaXMuYnVpbGRUcmVlKGFycmF5LnNsaWNlKG1pZCArIDEsIGFycmF5Lmxlbmd0aCkpO1xuICAgICAgcmV0dXJuIHRyZWVOb2RlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4vLyAgIGlmIChub2RlID09PSBudWxsKSB7XG4vLyAgICAgcmV0dXJuO1xuLy8gICB9XG4vLyAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4vLyAgICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuLy8gICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4vLyAgICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4vLyAgIH1cbi8vIH07XG5cbmNvbnN0IHNtYWxsU29ydGVkQXJyYXkgPSBbMSwgMiwgM107XG5jb25zdCBzbWFsbFRyZWUgPSBuZXcgVHJlZShzbWFsbFNvcnRlZEFycmF5KTtcbmNvbnN0IHNhbXBsZVNvcnRlZEFycmF5ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuY29uc3Qgc2FtcGxlVHJlZSA9IG5ldyBUcmVlKHNhbXBsZVNvcnRlZEFycmF5KTtcbmNvbnN0IHNhbXBsZU5vZGUgPSBuZXcgTm9kZShzbWFsbFNvcnRlZEFycmF5KTtcblxuY29uc29sZS5sb2coc2FtcGxlVHJlZS5yb290KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==