# copy_butt_joint_sequence

<a id="compolyx.ModelingGroup.copy_butt_joint_sequence"></a>

## ModelingGroup.copy_butt_joint_sequence(source, global_ply_nr=None, sort=True)

Makes a copy of a butt-joint sequence.

### Parameters
  - source: Source object to copy.
  - global_ply_nr: Global ply number to use. If 0, then the ply is added at the top.
  - sort: Whether to sort all plies of modeling group after copy.
    : If multiple plies are copied at once it can be useful to sort only once at the end of the copy operation.
### Returns
  New instance of modeling ply.
