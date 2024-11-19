

# RAModulePropertyList

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAModulePropertyList"></a>

### *class* RAModulePropertyList

Rocky PrePost Scripting wrapper for a Module property that is a list of other Modules properties.

The wrapper corresponds to a table of module properties inside the editor of an individual
Module or a simulation entity. Such a list can be obtained via the PrePost Scripting wrapper for the object
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

<a id="generated.RAModulePropertyList.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RAModulePropertyList.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RAModulePropertyList.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
