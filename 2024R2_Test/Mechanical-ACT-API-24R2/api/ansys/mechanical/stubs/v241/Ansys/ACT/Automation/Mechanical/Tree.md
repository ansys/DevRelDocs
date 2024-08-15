# `Tree`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Tree

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Tree class.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------|----------------------------------------------------------------------------------|
| `Refresh`                    | Refreshes the tree.                                                              |
| `Suspend`                    | Prevents the tree from being updated.                                            |
| `GetPathToFirstActiveObject` | Gets the full path that needs to be typed in order to go to the selected object. |
| `Find`                       | Find method.                                                                     |
| `Sort`                       | Sorts the tree objects based on given parameters.                                |
| `ClearSort`                  | Clears the current sort.                                                         |
| `Filter`                     | Filters the tree objects based on given parameters.                              |
| `ClearFilter`                | Clears the current filter.                                                       |
| `Group`                      | Groups a list of objects together.                                               |
| `Group`                      | Moves dataModelObject to new tree grouping folder.                               |
| `Activate`                   | selects an object in the tree.                                                   |
| `Activate`                   | Activate method.                                                                 |
| `IsSorted`                   | Checks if the tree is currently sorted alphabetically.                           |

### Properties

| Name | Description |
|--------------------------|-----------------------------------------------------------------------|
| `FirstActiveObject`      | Gets the first object selected in the tree.                           |
| `ActiveObjects`          | Gets a list of all selected objects.                                  |
| `AllObjects`             | Gets a list of all objects available in the tree.                     |
| `GroupingFoldersVisible` | Controls whether or not group folders are visible.                    |
| `CurrentFilter`          | Gets the current filter applied on the tree.                          |
| `CurrentSearchString`    | Gets the current search string (name/tag/propertyName/propertyValue). |
| `CurrentSearchState`     | Gets the current search state.                                        |
| `CurrentSearchGraphics`  | Gets the current visibility.                                          |

<a id="property-detail"></a>

## Property detail

### *property* Tree.FirstActiveObject *: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the first object selected in the tree.

<!-- !! processed by numpydoc !! -->

### *property* Tree.ActiveObjects *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of all selected objects.

<!-- !! processed by numpydoc !! -->

### *property* Tree.AllObjects *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a list of all objects available in the tree.

<!-- !! processed by numpydoc !! -->

### *property* Tree.GroupingFoldersVisible *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether or not group folders are visible.

<!-- !! processed by numpydoc !! -->

### *property* Tree.CurrentFilter *: Ansys.Common.Interop.DSObjectTypes.DSTreeSearchType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current filter applied on the tree.

<!-- !! processed by numpydoc !! -->

### *property* Tree.CurrentSearchString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current search string (name/tag/propertyName/propertyValue).

<!-- !! processed by numpydoc !! -->

### *property* Tree.CurrentSearchState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current search state.

<!-- !! processed by numpydoc !! -->

### *property* Tree.CurrentSearchGraphics *: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VisibilityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current visibility.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Tree.Refresh()

Refreshes the tree.

<!-- !! processed by numpydoc !! -->

### Tree.Suspend()

Prevents the tree from being updated.

<!-- !! processed by numpydoc !! -->

### Tree.GetPathToFirstActiveObject()

Gets the full path that needs to be typed in order to go to the selected object.

<!-- !! processed by numpydoc !! -->

### Tree.Find(name: System.String, func: System.Func[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject, System.Boolean], tag: System.String, state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ObjectState))

Find method.

<!-- !! processed by numpydoc !! -->

### Tree.Sort(type: [Ansys.Mechanical.DataModel.Enums.SortingType](../../../Mechanical/DataModel/Enums/SortingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SortingType), reverse: System.Boolean)

```text
Sorts the tree objects based on given parameters.
type
reverse
```

<!-- !! processed by numpydoc !! -->

### Tree.ClearSort()

Clears the current sort.

<!-- !! processed by numpydoc !! -->

### Tree.Filter(name: System.String, tag: System.String, state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ObjectState), visibility: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VisibilityType), type: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectClass](../../../Mechanical/DataModel/Enums/TreeFilterObjectClass.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TreeFilterObjectClass), coordinateSystem: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem), model: System.String, environment: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis), scoping: [Ansys.Mechanical.DataModel.Enums.TreeFilterScopingType](../../../Mechanical/DataModel/Enums/TreeFilterScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TreeFilterScopingType), filterState: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectState](../../../Mechanical/DataModel/Enums/TreeFilterObjectState.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TreeFilterObjectState), propertyName: System.String, propertyValue: System.String)

Filters the tree objects based on given parameters.

<!-- !! processed by numpydoc !! -->

### Tree.ClearFilter()

Clears the current filter.

<!-- !! processed by numpydoc !! -->

### Tree.Group(dataModelObjects: System.Collections.IEnumerable)

Groups a list of objects together.

<!-- !! processed by numpydoc !! -->

### Tree.Group(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Moves dataModelObject to new tree grouping folder.

<!-- !! processed by numpydoc !! -->

### Tree.Activate(dataModelObject: Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

selects an object in the tree.

<!-- !! processed by numpydoc !! -->

### Tree.Activate(dataModelObjects: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Activate method.

<!-- !! processed by numpydoc !! -->

### Tree.IsSorted()

Checks if the tree is currently sorted alphabetically.

<!-- !! processed by numpydoc !! -->

