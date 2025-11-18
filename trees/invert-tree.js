
let tree = {
  value: 0,
  left: {
    value: 1,
    left: {
      value: 2
    },
    right: {
      value: 3.
    }
  },
  right: {
    value: 4,
    left: {
      value: 5
    },
    right: {
      value: 6
    }
  }
}
// tree = { "value": 0, "left": { "value": 4, "left": { "value": 6 }, "right": { "value": 5 } }, "right": { "value": 1, "left": { "value": 3 }, "right": { "value": 2 } } }
function invertTree(node) {
  if (node.left && node.right) {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    invertTree(node.left)
    invertTree(node.right)
  } else {
    return
  }
}


function invertDaTree(node) {

  if (!node) return;

  let temp = node.left
  node.left = node.right
  node.right = temp

  invertDaTree(node.left)
  invertDaTree(node.right)

}


invertDaTree(tree)

console.log(JSON.stringify(tree))