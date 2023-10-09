/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(array = null) {
    this.data = array;
    this.leftChild = null;
    this.rightChild = null;
  }
}

/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");


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
      const treeNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](array[mid]);
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
      const treeNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](key);
      root.leftChild = treeNode;
      return;
    } else if (
      key > root.data &&
      (root.rightChild === null || root.rightChild.data === null)
    ) {
      const treeNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](key);
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
      const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
        const newNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"]();
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ "./src/Tree.js");



const smallSortedArray = [1, 2, 3];
const smallTree = new _Tree__WEBPACK_IMPORTED_MODULE_1__["default"](smallSortedArray);
const sampleSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sampleTree = new _Tree__WEBPACK_IMPORTED_MODULE_1__["default"](sampleSortedArray);
const sampleNode = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](smallSortedArray);
const emptyArray = [null];
const emptyTree = new _Tree__WEBPACK_IMPORTED_MODULE_1__["default"](emptyArray);

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkNBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPLEVBQUUseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sRUFBRSx5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNBOztBQUUxQjtBQUNBLHNCQUFzQiw2Q0FBSTtBQUMxQjtBQUNBLHVCQUF1Qiw2Q0FBSTtBQUMzQix1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQSxzQkFBc0IsNkNBQUk7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxtQ0FBbUM7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy9Ob2RlLmpzIiwid2VicGFjazovL2JhbGFuY2VkYnN0Ly4vc3JjL1RyZWUuanMiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhbGFuY2VkYnN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmFsYW5jZWRic3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYWxhbmNlZGJzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoYXJyYXkgPSBudWxsKSB7XG4gICAgdGhpcy5kYXRhID0gYXJyYXk7XG4gICAgdGhpcy5sZWZ0Q2hpbGQgPSBudWxsO1xuICAgIHRoaXMucmlnaHRDaGlsZCA9IG51bGw7XG4gIH1cbn0iLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkVHJlZSgpO1xuICB9XG5cbiAgYnVpbGRUcmVlKGFycmF5ID0gdGhpcy5hcnJheSwgc3RhcnQsIGVuZCkge1xuICAgIHN0YXJ0ID0gMDtcbiAgICBlbmQgPSBhcnJheS5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG1pZCA9IE1hdGgucm91bmQoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGlmIChzdGFydCA+IGVuZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gbmV3IE5vZGUoYXJyYXlbbWlkXSk7XG4gICAgICB0cmVlTm9kZS5sZWZ0Q2hpbGQgPSB0aGlzLmJ1aWxkVHJlZShhcnJheS5zbGljZShzdGFydCwgbWlkKSk7XG4gICAgICB0cmVlTm9kZS5yaWdodENoaWxkID0gdGhpcy5idWlsZFRyZWUoYXJyYXkuc2xpY2UobWlkICsgMSwgYXJyYXkubGVuZ3RoKSk7XG4gICAgICByZXR1cm4gdHJlZU5vZGU7XG4gICAgfVxuICB9XG5cbiAgaW5zZXJ0KGtleSwgcm9vdCA9IHRoaXMucm9vdCkge1xuICAgIGlmIChyb290ID09PSBudWxsIHx8IGtleSA9PT0gcm9vdC5kYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkkgZ290IGhlcmUhXCIpO1xuICAgICAgLy8gICBjb25zdCBrZXlOb2RlID0gbmV3IE5vZGUoa2V5KTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coa2V5Tm9kZSk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgICAgLy8gICByb290ID0ga2V5Tm9kZTtcbiAgICAgIC8vICAgY29uc29sZS5sb2cocm9vdCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucm9vdCk7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAga2V5IDwgcm9vdC5kYXRhICYmXG4gICAgICAocm9vdC5sZWZ0Q2hpbGQgPT09IG51bGwgfHwgcm9vdC5sZWZ0Q2hpbGQuZGF0YSA9PT0gbnVsbClcbiAgICApIHtcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gbmV3IE5vZGUoa2V5KTtcbiAgICAgIHJvb3QubGVmdENoaWxkID0gdHJlZU5vZGU7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGtleSA+IHJvb3QuZGF0YSAmJlxuICAgICAgKHJvb3QucmlnaHRDaGlsZCA9PT0gbnVsbCB8fCByb290LnJpZ2h0Q2hpbGQuZGF0YSA9PT0gbnVsbClcbiAgICApIHtcbiAgICAgIGNvbnN0IHRyZWVOb2RlID0gbmV3IE5vZGUoa2V5KTtcbiAgICAgIHJvb3QucmlnaHRDaGlsZCA9IHRyZWVOb2RlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoa2V5IDwgcm9vdC5kYXRhKSB7XG4gICAgICB0aGlzLmluc2VydChrZXksIHJvb3QubGVmdENoaWxkKTtcbiAgICB9IGVsc2UgaWYgKGtleSA+IHJvb3QuZGF0YSkge1xuICAgICAgdGhpcy5pbnNlcnQoa2V5LCByb290LnJpZ2h0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZShub2RlLCByb290ID0gdGhpcy5yb290KSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwid2h5IGRpZCBJIGdldCBoZXJlP1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgbm9kZSA9PT0gcm9vdC5kYXRhICYmXG4gICAgICByb290LmxlZnRDaGlsZCA9PT0gbnVsbCAmJlxuICAgICAgcm9vdC5yaWdodENoaWxkID09PSBudWxsXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoKTtcbiAgICAgIHJvb3QgPSBuZXdOb2RlO1xuICAgICAgcmV0dXJuO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcIkkgZ290IHRvIHRoaXMgaW5zdGVhZFwiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2cocm9vdC5sZWZ0Q2hpbGQpO1xuICAgICAgLy8gICByb290LmxlZnRDaGlsZCA9IHRoaXMuZGVsZXRlKG5vZGUsIHJvb3QubGVmdENoaWxkKTtcbiAgICAgIC8vICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobm9kZSA8IHJvb3QuZGF0YSAmJiByb290LmxlZnRDaGlsZC5kYXRhID09PSBub2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSSdtIGV4cGVjdGVkIHRvIGdldCBoZXJlIVwiKTtcbiAgICAgICAgY29uc29sZS5sb2cocm9vdC5sZWZ0Q2hpbGQuZGF0YSk7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcbiAgICAgICAgcm9vdC5sZWZ0Q2hpbGQgPSBuZXdOb2RlO1xuICAgICAgICBjb25zb2xlLmxvZyhyb290LmxlZnRDaGlsZCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKG5vZGUgPCByb290LmRhdGEpIHtcbiAgICAgIHRoaXMuZGVsZXRlKG5vZGUsIHJvb3QubGVmdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBwcmV0dHlQcmludChub2RlID0gdGhpcy5yb290LCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHRDaGlsZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5wcmV0dHlQcmludChcbiAgICAgICAgbm9kZS5yaWdodENoaWxkLFxuICAgICAgICBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gICAgaWYgKG5vZGUubGVmdENoaWxkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXR0eVByaW50KFxuICAgICAgICBub2RlLmxlZnRDaGlsZCxcbiAgICAgICAgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCBUcmVlIGZyb20gXCIuL1RyZWVcIjtcblxuY29uc3Qgc21hbGxTb3J0ZWRBcnJheSA9IFsxLCAyLCAzXTtcbmNvbnN0IHNtYWxsVHJlZSA9IG5ldyBUcmVlKHNtYWxsU29ydGVkQXJyYXkpO1xuY29uc3Qgc2FtcGxlU29ydGVkQXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG5jb25zdCBzYW1wbGVUcmVlID0gbmV3IFRyZWUoc2FtcGxlU29ydGVkQXJyYXkpO1xuY29uc3Qgc2FtcGxlTm9kZSA9IG5ldyBOb2RlKHNtYWxsU29ydGVkQXJyYXkpO1xuY29uc3QgZW1wdHlBcnJheSA9IFtudWxsXTtcbmNvbnN0IGVtcHR5VHJlZSA9IG5ldyBUcmVlKGVtcHR5QXJyYXkpO1xuXG4vLyBlbXB0eVRyZWUuaW5zZXJ0KDApO1xuXG4vLyBjb25zb2xlLmxvZyhzbWFsbFRyZWUuaW5zZXJ0KTtcbi8vIGNvbnNvbGUubG9nKHNhbXBsZVRyZWUuaW5zZXJ0KDApKTtcbi8vIHNhbXBsZVRyZWUucHJldHR5UHJpbnQoKTtcbi8vIGNvbnNvbGUubG9nKHNtYWxsVHJlZS50ZXN0TGVmdENoaWxkKCkpO1xuXG4vLyBjb25zdCBleGFtcGxlQXJyYXkgPSBbMjAsIDMwLCAzMiwgMzQsIDM2LCA0MCwgNTAsIDYwLCA2NSwgNzAsIDc1LCA4MCwgODVdO1xuLy8gY29uc3QgZXhhbXBsZVRyZWUgPSBuZXcgVHJlZShleGFtcGxlQXJyYXkpO1xuLy8gZXhhbXBsZVRyZWUuaW5zZXJ0KDYwKTtcbi8vIGV4YW1wbGVUcmVlLnByZXR0eVByaW50KCk7XG5cbnNtYWxsVHJlZS5kZWxldGUoMSk7XG4vLyBzbWFsbFRyZWUucHJldHR5UHJpbnQoKTtcbi8vIGNvbnNvbGUubG9nKHNtYWxsVHJlZS5yb290KTtcbi8vIGNvbnNvbGUubG9nKGB0aGlzIGlzIHRoZSBsZWZ0IGNoaWxkICR7c21hbGxUcmVlLnJvb3QubGVmdENoaWxkLmxlZnRDaGlsZH1gKTtcbnNtYWxsVHJlZS5wcmV0dHlQcmludCgpO1xuY29uc29sZS5sb2coc21hbGxUcmVlLnJvb3QubGVmdENoaWxkKTtcbi8vIHNtYWxsVHJlZS5pbnNlcnQoNCk7XG4vLyBzbWFsbFRyZWUuaW5zZXJ0KDEpO1xuLy8gc21hbGxUcmVlLmluc2VydCgwKTtcbi8vIHNtYWxsVHJlZS5wcmV0dHlQcmludCgpO1xuLy8gc21hbGxUcmVlLmRlbGV0ZSgwKTtcbi8vIGNvbnNvbGUubG9nKHNtYWxsVHJlZS5yb290KTtcbi8vIHNtYWxsVHJlZS5kZWxldGUoMCk7XG4vLyBjb25zb2xlLmxvZyhzbWFsbFRyZWUucm9vdCk7XG4vLyBzbWFsbFRyZWUucHJldHR5UHJpbnQoKTtcbi8vIHNtYWxsVHJlZS5kZWxldGUoMSk7XG4vLyBzbWFsbFRyZWUucHJldHR5UHJpbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==