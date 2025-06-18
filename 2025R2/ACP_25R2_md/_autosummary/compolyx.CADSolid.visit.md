# visit

<a id="compolyx.CADSolid.visit"></a>

#### CADSolid.visit(visitor)

Walk through the tree and let the visitor perform action on every
descendant node.

* **Parameters:**

- visitor: A callable which accepts a TreeNode instance as parameter

Returns True if the visitor returned True for at least one descendant/linked node.
If this is the case, the tree traversal is pruned.
