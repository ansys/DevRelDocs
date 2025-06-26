# copy_modeling_ply

<a id="compolyx.ModelingGroup.copy_modeling_ply"></a>

#### ModelingGroup.copy_modeling_ply(source, global_ply_nr=None, sort=True)

Copy a modeling ply.

* **Parameters:**
  - source: Source object to copy.
  - global_ply_nr: Global ply number to use. If 0, then the ply is added at the top.
  - sort: Whether to sort all plies of modeling group after copy.
     If multiple plies are copied at once it can be useful to sort only once at the end of the copy operation.
* **Returns:**
  New instance of modeling ply.
