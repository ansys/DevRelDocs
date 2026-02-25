# copy_interface_layer

<a id="compolyx.ModelingGroup.copy_interface_layer"></a>

## ModelingGroup.copy_interface_layer(source, global_ply_nr=None, sort=True)

Copy an interface layer.

### Parameters
  - source: Source object to copy.
  - global_ply_nr: Global ply number to use. If 0, then the ply is added at the top.
  - sort: Whether to sort all plies of interface layer group after copy.
    : If multiple plies are copied at once it can be useful to sort only once at the end of the copy operation.
### Returns
  New instance of interface layer.
