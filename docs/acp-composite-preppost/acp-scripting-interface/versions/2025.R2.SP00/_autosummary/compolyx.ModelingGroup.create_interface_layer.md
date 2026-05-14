# create_interface_layer

<a id="compolyx.ModelingGroup.create_interface_layer"></a>

#### ModelingGroup.create_interface_layer(name=None, id=None, global_ply_nr=None, oriented_selection_sets=None, open_area_sets=None, active=True)

Create an iterface layer.

* **Parameters:**
  - name: Name of the new iterface layer.
  - id: Optional ID of the new iterface layer.
  - global_ply_nr: Ply number for stacking sequence.
  - oriented_selection_sets: Oriented selection set for the expansion of the iterface layer.
  - open_area_sets: Defines the initial crack of a VCCT layer (optional).
  - active: Iterface layer active (default: `True`).
* **Returns:**
  The created iterface layer.
* **Example:**
  ```pycon
  >>> oes_1 = model.oriented_selection_sets['OrientedSelectionSet.1']
  >>> mpg = model.modeling_groups['PlyGroup.1']
  >>> mp_1 = mpg.create_interface_layer( name='InterfaceLayer.1',
                                    global_ply_nr=0,
                                    oriented_selection_sets=(oes_1,),
                                    active=True)
  ```
