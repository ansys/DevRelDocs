# Chapter

<a id="compolyx.Chapter"></a>

### *class* compolyx.Chapter(name, parent, view=None, ply_entities=(), id=0, show_rosettes=True)

Represents plybook chapter.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`Chapter.is_dict_item`](compolyx.Chapter.is_dict_item.md#compolyx.Chapter.is_dict_item)    | Indicates whether the object is an item in a dictionary.                   |
| [`Chapter.is_list_item`](compolyx.Chapter.is_list_item.md#compolyx.Chapter.is_list_item)    | Indicates whether the object is an item of a list.                   |
| [`Chapter.link_path`](compolyx.Chapter.link_path.md#compolyx.Chapter.link_path)             | Root path of the current node in the tree for links to this object. |
| [`Chapter.name`](compolyx.Chapter.name.md#compolyx.Chapter.name)                            | Name of the object.                                                     |
| [`Chapter.parent`](compolyx.Chapter.parent.md#compolyx.Chapter.parent)                      | Parent object in the tree.                                              |
| [`Chapter.ply_entities`](compolyx.Chapter.ply_entities.md#compolyx.Chapter.ply_entities)    | Plies/PlyGroups for the chapter.                                    |
| [`Chapter.root_path`](compolyx.Chapter.root_path.md#compolyx.Chapter.root_path)             | Root path of the current node in the tree.                          |
| [`Chapter.show_rosettes`](compolyx.Chapter.show_rosettes.md#compolyx.Chapter.show_rosettes) | Show the rosettes linked to a ply in snapshots.                     |
| [`Chapter.view`](compolyx.Chapter.view.md#compolyx.Chapter.view)                            |                                                                    |

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Chapter.find_parent`](compolyx.Chapter.find_parent.md#compolyx.Chapter.find_parent)(type)                             | Steps up the tree and returns the first parent with given type.           |
| [`Chapter.generate_reST`](compolyx.Chapter.generate_reST.md#compolyx.Chapter.generate_reST)(reST_chapter_template, ...) | Returns the interpolated reST string for the chapter.                                  |
| [`Chapter.get_production_plies`](compolyx.Chapter.get_production_plies.md#compolyx.Chapter.get_production_plies)()      | Return a list of production plies which are associated with this chapter.          |
| [`Chapter.serialize`](compolyx.Chapter.serialize.md#compolyx.Chapter.serialize)()                                       |                                                                                    |
| [`Chapter.update`](compolyx.Chapter.update.md#compolyx.Chapter.update)()                                                |                                                                                    |
| [`Chapter.visit`](compolyx.Chapter.visit.md#compolyx.Chapter.visit)(visitor)                                            | Walk through the tree and let the visitor perform action on every descendant node. |
