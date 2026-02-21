# PlyBook

<a id="compolyx.PlyBook"></a>

### *class* compolyx.PlyBook(name='PlyBook', parent=None, reST_ply='', reST_chapter='', reST_title_page='', scene=None)

Class to represent a ply book.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`PlyBook.chapters`](compolyx.PlyBook.chapters.md#compolyx.PlyBook.chapters)                      | Dictionary with all chapters defined.                              |
| [`PlyBook.is_dict_item`](compolyx.PlyBook.is_dict_item.md#compolyx.PlyBook.is_dict_item)          | Specifies wether the object is an item of a dict                   |
| [`PlyBook.is_list_item`](compolyx.PlyBook.is_list_item.md#compolyx.PlyBook.is_list_item)          | Specifies wether the object is an item of a list                   |
| [`PlyBook.link_path`](compolyx.PlyBook.link_path.md#compolyx.PlyBook.link_path)                   | Root path of the current node in the tree for links to this object |
| [`PlyBook.name`](compolyx.PlyBook.name.md#compolyx.PlyBook.name)                                  | Name of object                                                     |
| [`PlyBook.parent`](compolyx.PlyBook.parent.md#compolyx.PlyBook.parent)                            | Parent object in tree                                              |
| [`PlyBook.reST_chapter`](compolyx.PlyBook.reST_chapter.md#compolyx.PlyBook.reST_chapter)          | reST chapter template                                              |
| [`PlyBook.reST_ply`](compolyx.PlyBook.reST_ply.md#compolyx.PlyBook.reST_ply)                      | reST ply template                                                  |
| [`PlyBook.reST_title_page`](compolyx.PlyBook.reST_title_page.md#compolyx.PlyBook.reST_title_page) | reST title page template                                           |
| [`PlyBook.root_path`](compolyx.PlyBook.root_path.md#compolyx.PlyBook.root_path)                   | Root path of the current node in the tree                          |
| [`PlyBook.scene`](compolyx.PlyBook.scene.md#compolyx.PlyBook.scene)                               |                                                                    |

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`PlyBook.automatic_setup`](compolyx.PlyBook.automatic_setup.md#compolyx.PlyBook.automatic_setup)()                    |                                                                                    |
| [`PlyBook.create_chapter`](compolyx.PlyBook.create_chapter.md#compolyx.PlyBook.create_chapter)(name[, view, ...])      | Add a chapter to the ply book.                                                     |
| [`PlyBook.find_parent`](compolyx.PlyBook.find_parent.md#compolyx.PlyBook.find_parent)(type)                            | Function steps up the tree and returns the first parent with given type.           |
| [`PlyBook.generate`](compolyx.PlyBook.generate.md#compolyx.PlyBook.generate)(filename[, format])                       | Generate the complete plybook.                                                     |
| [`PlyBook.initialize_plybook`](compolyx.PlyBook.initialize_plybook.md#compolyx.PlyBook.initialize_plybook)(\*\*kwargs) |                                                                                    |
| [`PlyBook.serialize`](compolyx.PlyBook.serialize.md#compolyx.PlyBook.serialize)()                                      |                                                                                    |
| [`PlyBook.update`](compolyx.PlyBook.update.md#compolyx.PlyBook.update)()                                               |                                                                                    |
| [`PlyBook.visit`](compolyx.PlyBook.visit.md#compolyx.PlyBook.visit)(visitor)                                           | Walk through the tree and let the visitor perform action on every descendant node. |
