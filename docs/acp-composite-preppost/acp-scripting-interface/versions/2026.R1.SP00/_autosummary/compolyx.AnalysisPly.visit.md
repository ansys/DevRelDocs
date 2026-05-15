# visit

<a id="compolyx.AnalysisPly.visit"></a>

## AnalysisPly.visit(visitor)

Walk through the tree and applies the visitor to every descendant node.

### Parameters

- visitor: A callable which accepts a TreeNode instance as parameter

Returns True if the visitor returned True for at least one descendant/linked node.
If this is the case, the tree traversal is pruned.
