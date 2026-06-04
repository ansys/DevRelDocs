# `Tree`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Tree"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Tree

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`Activate`](#Tree.Activate)                                     | selects an object in the tree.                                                   |
| [`ClearFilter`](#Tree.ClearFilter)                               | Clears the current filter.                                                       |
| [`ClearSort`](#Tree.ClearSort)                                   | Clears the current sort.                                                         |
| [`Filter`](#Tree.Filter)                                         | Filter method.                                                                   |
| [`Find`](#Tree.Find)                                             | Find method.                                                                     |
| [`GetPathToFirstActiveObject`](#Tree.GetPathToFirstActiveObject) | Gets the full path that needs to be typed in order to go to the selected object. |
| [`Group`](#Tree.Group)                                           | Groups a list of objects together.                                               |
| [`IsSorted`](#Tree.IsSorted)                                     | Checks if the tree is currently sorted alphabetically.                           |
| [`Refresh`](#Tree.Refresh)                                       | Refreshes the tree.                                                              |
| [`Sort`](#Tree.Sort)                                             | Sorts the tree objects based on given parameters.                                |
| [`Suspend`](#Tree.Suspend)                                       | Prevents the tree from being updated.                                            |
| [`Ungroup`](#Tree.Ungroup)                                       | Removes groupingFolder from the tree.                                            |

### Properties

| Name | Description |
|----------------------------------------------------------|-----------------------------------------------------------------------|
| [`ActiveObjects`](#Tree.ActiveObjects)                   | Gets a list of all selected objects.                                  |
| [`AllObjects`](#Tree.AllObjects)                         | Gets a list of all objects available in the tree.                     |
| [`CurrentFilter`](#Tree.CurrentFilter)                   | Gets the current filter applied on the tree.                          |
| [`CurrentSearchGraphics`](#Tree.CurrentSearchGraphics)   | Gets the current visibility.                                          |
| [`CurrentSearchState`](#Tree.CurrentSearchState)         | Gets the current search state.                                        |
| [`CurrentSearchString`](#Tree.CurrentSearchString)       | Gets the current search string (name/tag/propertyName/propertyValue). |
| [`FirstActiveObject`](#Tree.FirstActiveObject)           | Gets the first object selected in the tree.                           |
| [`GroupingFoldersVisible`](#Tree.GroupingFoldersVisible) | Controls whether or not group folders are visible.                    |

<a id="property-detail"></a>

## Property detail

<a id="Tree.ActiveObjects"></a>

### *property* Tree.ActiveObjects *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of all selected objects.

<!-- !! processed by numpydoc !! -->

<a id="Tree.AllObjects"></a>

### *property* Tree.AllObjects *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of all objects available in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentFilter"></a>

### *property* Tree.CurrentFilter *: Ansys.Common.Interop.DSObjectTypes.DSTreeSearchType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current filter applied on the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchGraphics"></a>

### *property* Tree.CurrentSearchGraphics *: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.VisibilityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current visibility.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchState"></a>

### *property* Tree.CurrentSearchState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current search state.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchString"></a>

### *property* Tree.CurrentSearchString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current search string (name/tag/propertyName/propertyValue).

<!-- !! processed by numpydoc !! -->

<a id="Tree.FirstActiveObject"></a>

### *property* Tree.FirstActiveObject *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the first object selected in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GroupingFoldersVisible"></a>

### *property* Tree.GroupingFoldersVisible *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether or not group folders are visible.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Tree.Activate"></a>

### Tree.Activate(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [None](https://docs.python.org/3/library/constants.html#None)

selects an object in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ClearFilter"></a>

### Tree.ClearFilter() → [None](https://docs.python.org/3/library/constants.html#None)

Clears the current filter.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ClearSort"></a>

### Tree.ClearSort() → [None](https://docs.python.org/3/library/constants.html#None)

Clears the current sort.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Filter"></a>

### Tree.Filter(name: [str](https://docs.python.org/3/library/stdtypes.html#str), tag: [str](https://docs.python.org/3/library/stdtypes.html#str), state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ObjectState), visibility: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.VisibilityType), type: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectClass](../../../Mechanical/DataModel/Enums/TreeFilterObjectClass.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TreeFilterObjectClass), coordinateSystem: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem), model: [str](https://docs.python.org/3/library/stdtypes.html#str), environment: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis), scoping: [Ansys.Mechanical.DataModel.Enums.TreeFilterScopingType](../../../Mechanical/DataModel/Enums/TreeFilterScopingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TreeFilterScopingType), filterState: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectState](../../../Mechanical/DataModel/Enums/TreeFilterObjectState.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TreeFilterObjectState), propertyName: [str](https://docs.python.org/3/library/stdtypes.html#str), propertyValue: [str](https://docs.python.org/3/library/stdtypes.html#str), invertSearchResults: System.Nullable[[bool](https://docs.python.org/3/library/functions.html#bool)]) → [None](https://docs.python.org/3/library/constants.html#None)

Filter method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Find"></a>

### Tree.Find(name: [str](https://docs.python.org/3/library/stdtypes.html#str), func: System.Func[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), [bool](https://docs.python.org/3/library/functions.html#bool)], tag: [str](https://docs.python.org/3/library/stdtypes.html#str), state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ObjectState)) → Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Find method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetPathToFirstActiveObject"></a>

### Tree.GetPathToFirstActiveObject() → [str](https://docs.python.org/3/library/stdtypes.html#str)

Gets the full path that needs to be typed in order to go to the selected object.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Group"></a>

### Tree.Group(dataModelObjects: Iterable) → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Groups a list of objects together.

<!-- !! processed by numpydoc !! -->

<a id="Tree.IsSorted"></a>

### Tree.IsSorted() → [bool](https://docs.python.org/3/library/functions.html#bool)

Checks if the tree is currently sorted alphabetically.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Refresh"></a>

### Tree.Refresh(recomputeStates: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Refreshes the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Sort"></a>

### Tree.Sort(type: [Ansys.Mechanical.DataModel.Enums.SortingType](../../../Mechanical/DataModel/Enums/SortingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SortingType), reverse: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sorts the tree objects based on given parameters.
type
reverse
```

<!-- !! processed by numpydoc !! -->

<a id="Tree.Suspend"></a>

### Tree.Suspend() → System.IDisposable

Prevents the tree from being updated.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Ungroup"></a>

### Tree.Ungroup(groupingFolder: [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes groupingFolder from the tree.

<!-- !! processed by numpydoc !! -->

