# MaterialData

<a id="compolyx.MaterialData"></a>

### *class* compolyx.MaterialData(graph, parent=None)

MaterialData manages all composite material data

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`MaterialData.enabled`](compolyx.MaterialData.enabled.md#compolyx.MaterialData.enabled)                                  | Whether MaterialData is currently enabled or not.                                  |
| [`MaterialData.fabrics`](compolyx.MaterialData.fabrics.md#compolyx.MaterialData.fabrics)                                  | Dictionary with all fabrics defined.                                               |
| [`MaterialData.is_dict_item`](compolyx.MaterialData.is_dict_item.md#compolyx.MaterialData.is_dict_item)                   | Indicates whether the object is an item in a dictionary.                                   |
| [`MaterialData.is_list_item`](compolyx.MaterialData.is_list_item.md#compolyx.MaterialData.is_list_item)                   | Indicates whether the object is an item of a list.                                   |
| [`MaterialData.link_path`](compolyx.MaterialData.link_path.md#compolyx.MaterialData.link_path)                            | Root path of the current node in the tree for links to this object.                 |
| [`MaterialData.material_apdl_path`](compolyx.MaterialData.material_apdl_path.md#compolyx.MaterialData.material_apdl_path) | Optional path to file with APDL material definitions to be used in the CDB export. |
| [`MaterialData.materials`](compolyx.MaterialData.materials.md#compolyx.MaterialData.materials)                            | Dictionary with all materials defined.                                             |
| [`MaterialData.matml_path`](compolyx.MaterialData.matml_path.md#compolyx.MaterialData.matml_path)                         | Path to MatML file as provided by Workbench EngineeringData.                        |
| [`MaterialData.name`](compolyx.MaterialData.name.md#compolyx.MaterialData.name)                                           | Currently a name is needed for every object in the db tree.                        |
| [`MaterialData.parent`](compolyx.MaterialData.parent.md#compolyx.MaterialData.parent)                                     | Parent object in the tree.                                                              |
| [`MaterialData.root_path`](compolyx.MaterialData.root_path.md#compolyx.MaterialData.root_path)                            | Root path of the current node in the tree.                                          |
| [`MaterialData.stackups`](compolyx.MaterialData.stackups.md#compolyx.MaterialData.stackups)                               | Dictionary with all stack ups defined.                                             |
| [`MaterialData.sub_laminates`](compolyx.MaterialData.sub_laminates.md#compolyx.MaterialData.sub_laminates)                | Dictionary with all sub laminates defined.                                         |
| [`MaterialData.unit_system`](compolyx.MaterialData.unit_system.md#compolyx.MaterialData.unit_system)                      | Unit system of material data, propagated from model.                                |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`MaterialData.copy`](compolyx.MaterialData.copy.md#compolyx.MaterialData.copy)(source[, on_duplicate_name])                                  | Copy a list of material data source.                                               |
| [`MaterialData.copy_fabric`](compolyx.MaterialData.copy_fabric.md#compolyx.MaterialData.copy_fabric)(source[, ...])                           | Copy a fabric.                                                                      |
| [`MaterialData.copy_material`](compolyx.MaterialData.copy_material.md#compolyx.MaterialData.copy_material)(source[, ...])                     | Copy a material.                                                                    |
| [`MaterialData.copy_stackup`](compolyx.MaterialData.copy_stackup.md#compolyx.MaterialData.copy_stackup)(source[, ...])                        | Copy a stackup.                                                                     |
| [`MaterialData.copy_sub_laminate`](compolyx.MaterialData.copy_sub_laminate.md#compolyx.MaterialData.copy_sub_laminate)(source[, ...])         | Copy a sublaminate.                                                                 |
| [`MaterialData.create_fabric`](compolyx.MaterialData.create_fabric.md#compolyx.MaterialData.create_fabric)(name[, id, ...])                   | Create a new fabric.                                                                |
| [`MaterialData.create_material`](compolyx.MaterialData.create_material.md#compolyx.MaterialData.create_material)(name[, id, ...])             | Create a constant material.                                                         |
| [`MaterialData.create_stackup`](compolyx.MaterialData.create_stackup.md#compolyx.MaterialData.create_stackup)(name[, id, ...])                | Create a new stackup.                                                               |
| [`MaterialData.create_sub_laminate`](compolyx.MaterialData.create_sub_laminate.md#compolyx.MaterialData.create_sub_laminate)(name[, id, ...]) | Create a new sublaminate.                                                           |
| [`MaterialData.export_matml`](compolyx.MaterialData.export_matml.md#compolyx.MaterialData.export_matml)(path[, unit_system])                  | Export materials to ANSYS Engineering Data MatML format.                            |
| [`MaterialData.find_materials`](compolyx.MaterialData.find_materials.md#compolyx.MaterialData.find_materials)(\*\*properties)                 | Find materials with the given properties or property ranges.                       |
| [`MaterialData.find_parent`](compolyx.MaterialData.find_parent.md#compolyx.MaterialData.find_parent)(type)                                    | Steps up the tree and returns the first parent with given type.           |
| [`MaterialData.import_matml`](compolyx.MaterialData.import_matml.md#compolyx.MaterialData.import_matml)(path[, ...])                          | Import material data from MatML file as provided by Workbench Engineering Data.     |
| [`MaterialData.serialize`](compolyx.MaterialData.serialize.md#compolyx.MaterialData.serialize)()                                              | Serialize to Python string.                                                         |
| [`MaterialData.visit`](compolyx.MaterialData.visit.md#compolyx.MaterialData.visit)(visitor)                                                   | Walk through the tree and let the visitor perform action on every descendant node. |
