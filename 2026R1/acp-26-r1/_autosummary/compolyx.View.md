# View

<a id="compolyx.View"></a>

### *class* compolyx.View(name, position=(0.0, 0.0, 0.0), orientation=(0.0, 0.0, 0.0), rotation_point=(0.0, 0.0, 0.0), parallel_scale=1.0, projection='perspective', locked=False, parent=None)

ComPoLyX class to capture view properties.

Access:

```pycon
>>> import compolyx
>>> db = compolyx.DB()
>>> view1 = db.create_view(name='View.1', position=[1.5, 5.75, 7.], orientation=[-0.4, -0.4, 0.8], rotation_point=[-6.0, 0.6, 0.75], projection='perspective')
```

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`View.is_dict_item`](compolyx.View.is_dict_item.md#compolyx.View.is_dict_item)       | Specifies wether the object is an item of a dict                   |
| [`View.is_list_item`](compolyx.View.is_list_item.md#compolyx.View.is_list_item)       | Specifies wether the object is an item of a list                   |
| [`View.link_path`](compolyx.View.link_path.md#compolyx.View.link_path)                | Root path of the current node in the tree for links to this object |
| [`View.locked`](compolyx.View.locked.md#compolyx.View.locked)                         | A View which is imported from an other source can not be modified. |
| [`View.name`](compolyx.View.name.md#compolyx.View.name)                               | Name of object                                                     |
| [`View.orientation`](compolyx.View.orientation.md#compolyx.View.orientation)          | Get/set the view orientation                                       |
| [`View.parallel_scale`](compolyx.View.parallel_scale.md#compolyx.View.parallel_scale) | Get/set the view parallel perspective scale factor.                |
| [`View.parent`](compolyx.View.parent.md#compolyx.View.parent)                         | Parent object in tree                                              |
| [`View.position`](compolyx.View.position.md#compolyx.View.position)                   | Get/set the view position                                          |
| [`View.projection`](compolyx.View.projection.md#compolyx.View.projection)             | Get/set the projection method parallel or perspective              |
| [`View.root_path`](compolyx.View.root_path.md#compolyx.View.root_path)                | Root path of the current node in the tree                          |
| [`View.rotation_point`](compolyx.View.rotation_point.md#compolyx.View.rotation_point) | Get/set the view rotation point.                                   |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`View.find_parent`](compolyx.View.find_parent.md#compolyx.View.find_parent)(type)   | Function steps up the tree and returns the first parent with given type.           |
| [`View.serialize`](compolyx.View.serialize.md#compolyx.View.serialize)()             | Serialize to Python string.                                                        |
| [`View.visit`](compolyx.View.visit.md#compolyx.View.visit)(visitor)                  | Walk through the tree and let the visitor perform action on every descendant node. |
