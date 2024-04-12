<a id="tree"></a>

# Tree

<a id="Tree"></a>

### *class* Tree

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Tree class.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`Refresh`](#Tree.Refresh)                                       | Refreshes the tree.                                                              |
| [`Suspend`](#Tree.Suspend)                                       | Prevents the tree from being updated.                                            |
| [`GetPathToFirstActiveObject`](#Tree.GetPathToFirstActiveObject) | Gets the full path that needs to be typed in order to go to the selected object. |
| [`Find`](#Tree.Find)                                             | Find method.                                                                     |
| [`Sort`](#Tree.Sort)                                             | Sorts the tree objects based on given parameters.                                |
| [`ClearSort`](#Tree.ClearSort)                                   | Clears the current sort.                                                         |
| [`Filter`](#Tree.Filter)                                         | Filters the tree objects based on given parameters.                              |
| [`ClearFilter`](#Tree.ClearFilter)                               | Clears the current filter.                                                       |
| [`Group`](#id0)                                                  | Groups a list of objects together.                                               |
| [`Group`](#id0)                                                  | Moves dataModelObject to new tree grouping folder.                               |
| [`Activate`](#id1)                                               | selects an object in the tree.                                                   |
| [`Activate`](#id1)                                               | Activate method.                                                                 |
| [`IsSorted`](#Tree.IsSorted)                                     | Checks if the tree is currently sorted alphabetically.                           |

### Properties

| Name | Summary |
|----------------------------------------------------------|-----------------------------------------------------------------------|
| [`FirstActiveObject`](#Tree.FirstActiveObject)           | Gets the first object selected in the tree.                           |
| [`ActiveObjects`](#Tree.ActiveObjects)                   | Gets a list of all selected objects.                                  |
| [`AllObjects`](#Tree.AllObjects)                         | Gets a list of all objects available in the tree.                     |
| [`GroupingFoldersVisible`](#Tree.GroupingFoldersVisible) | Controls whether or not group folders are visible.                    |
| [`CurrentFilter`](#Tree.CurrentFilter)                   | Gets the current filter applied on the tree.                          |
| [`CurrentSearchString`](#Tree.CurrentSearchString)       | Gets the current search string (name/tag/propertyName/propertyValue). |
| [`CurrentSearchState`](#Tree.CurrentSearchState)         | Gets the current search state.                                        |
| [`CurrentSearchGraphics`](#Tree.CurrentSearchGraphics)   | Gets the current visibility.                                          |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Tree
```

<a id="property-detail"></a>

## Property detail

<a id="Tree.FirstActiveObject"></a>

### *property* Tree.FirstActiveObject *: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the first object selected in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ActiveObjects"></a>

### *property* Tree.ActiveObjects *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of all selected objects.

<!-- !! processed by numpydoc !! -->

<a id="Tree.AllObjects"></a>

### *property* Tree.AllObjects *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of all objects available in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GroupingFoldersVisible"></a>

### *property* Tree.GroupingFoldersVisible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether or not group folders are visible.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentFilter"></a>

### *property* Tree.CurrentFilter *: Ansys.Common.Interop.DSObjectTypes.DSTreeSearchType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current filter applied on the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchString"></a>

### *property* Tree.CurrentSearchString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current search string (name/tag/propertyName/propertyValue).

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchState"></a>

### *property* Tree.CurrentSearchState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ObjectState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current search state.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchGraphics"></a>

### *property* Tree.CurrentSearchGraphics *: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#VisibilityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current visibility.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Tree.Refresh"></a>

### Tree.Refresh()

Refreshes the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Suspend"></a>

### Tree.Suspend()

Prevents the tree from being updated.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetPathToFirstActiveObject"></a>

### Tree.GetPathToFirstActiveObject()

Gets the full path that needs to be typed in order to go to the selected object.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Find"></a>

### Tree.Find(name: System.String, func: System.Func[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject, System.Boolean], tag: System.String, state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ObjectState))

Find method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Sort"></a>

### Tree.Sort(type: [Ansys.Mechanical.DataModel.Enums.SortingType](../../../Mechanical/DataModel/Enums/SortingType.md#SortingType), reverse: System.Boolean)

Sorts the tree objects based on given parameters.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ClearSort"></a>

### Tree.ClearSort()

Clears the current sort.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Filter"></a>

### Tree.Filter(name: System.String, tag: System.String, state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ObjectState), visibility: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#VisibilityType), type: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectClass](../../../Mechanical/DataModel/Enums/TreeFilterObjectClass.md#TreeFilterObjectClass), coordinateSystem: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem), model: System.String, environment: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis), scoping: [Ansys.Mechanical.DataModel.Enums.TreeFilterScopingType](../../../Mechanical/DataModel/Enums/TreeFilterScopingType.md#TreeFilterScopingType), filterState: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectState](../../../Mechanical/DataModel/Enums/TreeFilterObjectState.md#TreeFilterObjectState), propertyName: System.String, propertyValue: System.String)

Filters the tree objects based on given parameters.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ClearFilter"></a>

### Tree.ClearFilter()

Clears the current filter.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Group"></a>

### Tree.Group(dataModelObjects: System.Collections.IEnumerable)

Groups a list of objects together.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### Tree.Group(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Moves dataModelObject to new tree grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Activate"></a>

### Tree.Activate(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

selects an object in the tree.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Tree.Activate(dataModelObjects: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Activate method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.IsSorted"></a>

### Tree.IsSorted()

Checks if the tree is currently sorted alphabetically.

<!-- !! processed by numpydoc !! -->
