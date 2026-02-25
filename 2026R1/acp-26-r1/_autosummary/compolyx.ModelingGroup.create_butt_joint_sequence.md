# create_butt_joint_sequence

<a id="compolyx.ModelingGroup.create_butt_joint_sequence"></a>

#### ModelingGroup.create_butt_joint_sequence(name=None, id=None, global_ply_nr=None, primary_plies=None, secondary_plies=None, active=True)

Creates a new butt-joint sequences and adds it to this modeling group.

### Parameters:
  -name: Name of the butt-joint.
  -id: ID of the name.
  -global_ply_nr: Global ply number which orders the ply sequences.
  -primary_plies: List of tuples (modeling ply, level). Define the source of the thickness between plies.
  -secondary_plies: Single or list of modeling plies. Secondary plies inherit the thickness from the primary plies.
  -active: Boolean for whether the butt-joint sequence is active.
### Return:
  New butt-joint sequence.
