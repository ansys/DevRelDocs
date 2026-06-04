# Script

<a id="compolyx.Script"></a>

### *class* compolyx.Script(name, \*, parent=None, source=None, active=True, uptodate=False, update_mode=ScriptUpdateMode.ON_TRIGGERS)

Class to represent user-defined scripts operating on the input parameters.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`Script.active`](compolyx.Script.active.md#compolyx.Script.active)                         | Whether the script should run or not                                         |
| [`Script.enabled`](compolyx.Script.enabled.md#compolyx.Script.enabled)                      | Whether this object is currently enabled or not                              |
| [`Script.is_dict_item`](compolyx.Script.is_dict_item.md#compolyx.Script.is_dict_item)       | Specifies whether the object is an item of a dict                              |
| [`Script.is_list_item`](compolyx.Script.is_list_item.md#compolyx.Script.is_list_item)       | Specifies whether the object is an item of a list                              |
| [`Script.link_path`](compolyx.Script.link_path.md#compolyx.Script.link_path)                | Root path of the current node in the tree for links to this object            |
| [`Script.name`](compolyx.Script.name.md#compolyx.Script.name)                               | Name of object                                                                |
| [`Script.parent`](compolyx.Script.parent.md#compolyx.Script.parent)                         | Parent object in tree                                                         |
| [`Script.root_path`](compolyx.Script.root_path.md#compolyx.Script.root_path)                | Root path of the current node in the tree                                     |
| [`Script.source`](compolyx.Script.source.md#compolyx.Script.source)                         | Source code of the user-defined script                                       |
| [`Script.status`](compolyx.Script.status.md#compolyx.Script.status)                         | String status indicating if the object is up-to-date                         |
| [`Script.status_changed`](compolyx.Script.status_changed.md#compolyx.Script.status_changed) | Specifies if the object has changed, for the purposes of notifying the Workbench application. |
| [`Script.update_mode`](compolyx.Script.update_mode.md#compolyx.Script.update_mode)          | Defines which changes cause the script to become out-of-date                 |
| [`Script.uptodate`](compolyx.Script.uptodate.md#compolyx.Script.uptodate)                   | Whether the script execution is up to date                                   |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Script.find_parent`](compolyx.Script.find_parent.md#compolyx.Script.find_parent)(type)      | Function steps up the tree and returns the first parent with given type           |
| [`Script.run`](compolyx.Script.run.md#compolyx.Script.run)()                                  |                                                                                    |
| [`Script.serialize`](compolyx.Script.serialize.md#compolyx.Script.serialize)()                | Serialize to Python string                                                         |
| [`Script.source_default`](compolyx.Script.source_default.md#compolyx.Script.source_default)() |                                                                                    |
| [`Script.update`](compolyx.Script.update.md#compolyx.Script.update)()                         |                                                                                    |
| [`Script.visit`](compolyx.Script.visit.md#compolyx.Script.visit)(visitor)                     | Walk through the tree and let the visitor perform action on every descendant node |
