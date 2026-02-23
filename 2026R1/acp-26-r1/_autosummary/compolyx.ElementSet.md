# ElementSet

<a id="compolyx.ElementSet"></a>

### *class* compolyx.ElementSet(graph, obj=None, parent=None)

Element set class.

* **Exemplary usage:**
  ```pycon
  >>> m=db.models.values()[-1]
  >>> eset=m.element_sets['DECK']
  >>> eset.modify(op='none')
  >>> eset.modify(op='new', element_labels=[1,2,3,4])
  >>> eset.modify(op='add', element_sets=[ m.element_sets['Deck_layup-1'] ])
  >>> eset.modify(op='intersect', x=[-6.5,-5.5])
  ```

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ElementSet.active`](compolyx.ElementSet.active.md#compolyx.ElementSet.active)                         | Active status of the object                                                            |
| [`ElementSet.boundaries`](compolyx.ElementSet.boundaries.md#compolyx.ElementSet.boundaries)             | Returns the boundaries of the Element Set                                              |
| [`ElementSet.element_labels`](compolyx.ElementSet.element_labels.md#compolyx.ElementSet.element_labels) |                                                                                    |
| [`ElementSet.enabled`](compolyx.ElementSet.enabled.md#compolyx.ElementSet.enabled)                      | Indicates whether the object is enabled.                                   |
| [`ElementSet.id`](compolyx.ElementSet.id.md#compolyx.ElementSet.id)                                     | ID of the object                                                                       |
| [`ElementSet.is_dict_item`](compolyx.ElementSet.is_dict_item.md#compolyx.ElementSet.is_dict_item)       | Indicates whether the object is an item in a dictionary                                   |
| [`ElementSet.is_list_item`](compolyx.ElementSet.is_list_item.md#compolyx.ElementSet.is_list_item)       | Indicates whether the object is an item of a list                                   |
| [`ElementSet.link_path`](compolyx.ElementSet.link_path.md#compolyx.ElementSet.link_path)                | Root path of the current node in the tree for links to this object                 |
| [`ElementSet.locked`](compolyx.ElementSet.locked.md#compolyx.ElementSet.locked)                         | Element Set is imported and cannot be changed.                                     |
| [`ElementSet.middle_offset`](compolyx.ElementSet.middle_offset.md#compolyx.ElementSet.middle_offset)    | Middle offset flag                                                                 |
| [`ElementSet.name`](compolyx.ElementSet.name.md#compolyx.ElementSet.name)                               | Name of the object                                                                     |
| [`ElementSet.normals`](compolyx.ElementSet.normals.md#compolyx.ElementSet.normals)                      | Returns the Normals of the Element Set                                                 |
| [`ElementSet.orientable`](compolyx.ElementSet.orientable.md#compolyx.ElementSet.orientable)             | True if the Element Set has an orientable topology                                 |
| [`ElementSet.parent`](compolyx.ElementSet.parent.md#compolyx.ElementSet.parent)                         | Parent object in the tree                                                              |
| [`ElementSet.planar`](compolyx.ElementSet.planar.md#compolyx.ElementSet.planar)                         | True if the Element Set has a planar topology                                      |
| [`ElementSet.root_path`](compolyx.ElementSet.root_path.md#compolyx.ElementSet.root_path)                | Root path of the current node in the tree                                          |
| [`ElementSet.size`](compolyx.ElementSet.size.md#compolyx.ElementSet.size)                               | Number of entities                                                                 |
| [`ElementSet.status`](compolyx.ElementSet.status.md#compolyx.ElementSet.status)                         | Status of the object                                                               |
| [`ElementSet.status_changed`](compolyx.ElementSet.status_changed.md#compolyx.ElementSet.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`ElementSet.uid`](compolyx.ElementSet.uid.md#compolyx.ElementSet.uid)                                  | UID of the object                                                                      |
| [`ElementSet.vertex`](compolyx.ElementSet.vertex.md#compolyx.ElementSet.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ElementSet.add`](compolyx.ElementSet.add.md#compolyx.ElementSet.add)(entity)                                                    | Add entity to the set.                                                                                                       |
| [`ElementSet.clear`](compolyx.ElementSet.clear.md#compolyx.ElementSet.clear)()                                                    |                                                                                                                              |
| [`ElementSet.find_parent`](compolyx.ElementSet.find_parent.md#compolyx.ElementSet.find_parent)(type)                              | Steps up the tree and returns the first parent with given type.                                                     |
| [`ElementSet.get_short_description`](compolyx.ElementSet.get_short_description.md#compolyx.ElementSet.get_short_description)()    |                                                                                                                              |
| [`ElementSet.modify`](compolyx.ElementSet.modify.md#compolyx.ElementSet.modify)([op, element_labels, ...])                        | General method to modify the elements in an element set.                                                                     |
| [`ElementSet.obj_exists`](compolyx.ElementSet.obj_exists.md#compolyx.ElementSet.obj_exists)()                                     | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`ElementSet.partition`](compolyx.ElementSet.partition.md#compolyx.ElementSet.partition)()                                        | Partitions this ElementSet into new ElementSets with an orientable topology.                                                 |
| [`ElementSet.remove`](compolyx.ElementSet.remove.md#compolyx.ElementSet.remove)(entity)                                           | Remove entity from the set.                                                                                                  |
| [`ElementSet.serialize`](compolyx.ElementSet.serialize.md#compolyx.ElementSet.serialize)()                                        | Serialize to Python string.                                                                                                  |
| [`ElementSet.serialize_name_and_id`](compolyx.ElementSet.serialize_name_and_id.md#compolyx.ElementSet.serialize_name_and_id)()    | Serializes the name and ID.                                                                                    |
| [`ElementSet.update`](compolyx.ElementSet.update.md#compolyx.ElementSet.update)()                                                 |                                                                                                                              |
| [`ElementSet.visit`](compolyx.ElementSet.visit.md#compolyx.ElementSet.visit)(visitor)                                             | Walk through the tree and let the visitor perform action on every descendant node.                                           |
| [`ElementSet.write_boundaries`](compolyx.ElementSet.write_boundaries.md#compolyx.ElementSet.write_boundaries)(filename[, format]) | Write boundaries in .iges/.step format.                                                                                      |
