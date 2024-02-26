# RAModulePropertyList

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAModulePropertyList

Rocky API wrapper for a Module property that is a list of other Modules properties.

The wrapper corresponds to a table of module properties inside the editor of an individual
Module or a simulation entity. Such a list can be obtained via the API wrapper for the object
that contains it (that is, a Module or simulation entity), via:

```python
my_module = study.GetElement('My Module')
module_list = my_module.GetModuleProperty('List of Items')
```

The RAModulePropertyList supports iteration like regular lists and item manipulation via
[`New()`](#generated.RAModulePropertyList.New), [`Remove()`](#generated.RAModulePropertyList.Remove) and [`Clear()`](#generated.RAModulePropertyList.Clear). It contains items of type
[`RAModulePropertyListItem`](RAModulePropertyListItem.md#generated.RAModulePropertyListItem).

**Methods:**

| [`Clear`](#generated.RAModulePropertyList.Clear)()       | Remove all items from the list.   |
|----------------------------------------------------------|-----------------------------------|
| [`New`](#generated.RAModulePropertyList.New)()           | Add a new item.                   |
| [`Remove`](#generated.RAModulePropertyList.Remove)(item) | Remove an item from the list.     |

#### Clear()

Remove all items from the list.

#### New()

Add a new item. Returns the newly created item.

#### Remove(item: T)

Remove an item from the list.
