/** https://leetcode.com/problems/create-binary-tree-from-descriptions/description/?envType=daily-question&envId=2026-06-07

You are given a 2D integer array descriptions where

descriptions[i] = [parenti, childi, isLefti]

indicates that parenti is the parent of childi in a binary tree of unique values.

Furthermore,

If isLefti == 1, then childi is the left child of parenti.
If isLefti == 0, then childi is the right child of parenti.
Construct the binary tree described by descriptions and return its root.

The test cases will be generated such that the binary tree is valid.

Example 1:
Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
Output: [50,20,80,15,17,19]
Explanation: The root node is the node with value 50 since it has no parent.
The resulting binary tree is shown in the diagram.

Example 2:
Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
Output: [1,2,null,null,3,4]
Explanation: The root node is the node with value 1 since it has no parent.
The resulting binary tree is shown in the diagram.
 

Constraints:

1 <= descriptions.length <= 104
descriptions[i].length == 3
1 <= parenti, childi <= 105
0 <= isLefti <= 1
The binary tree described by descriptions is valid.
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodes = new Map<number, TreeNode>();
  const childValues = new Set();

  // Construct the tree
  descriptions.forEach(([parent, child, isLeft]) => {
    childValues.add(child);

    const parentNodeExists = nodes.has(parent);
    const parentNode = (parentNodeExists ? nodes.get(parent) : new TreeNode(parent)) as TreeNode;
    if (!parentNodeExists) nodes.set(parent, parentNode);

    const childNodeExists = nodes.has(child);
    const childNode = (childNodeExists ? nodes.get(child) : new TreeNode(child)) as TreeNode;
    if (!childNodeExists) nodes.set(child, childNode);

    if (isLeft === 1) parentNode.left = childNode;
    else parentNode.right = childNode;
  })

  // Find the root
  const rootDescription = descriptions.find(([parent]) => !childValues.has(parent));
  if (!rootDescription) return null

  const rootParent = rootDescription[0];
  if (!rootParent) return null;

  return nodes.get(rootParent) || null;
};
