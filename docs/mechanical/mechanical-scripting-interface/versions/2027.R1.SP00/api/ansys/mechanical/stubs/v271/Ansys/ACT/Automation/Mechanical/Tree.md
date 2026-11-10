# `Tree`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Tree"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Tree

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|----------------------------------------------------------------------|--------------------------------------|
| [`GetTreeHandler`](#Tree.GetTreeHandler)                             | GetTreeHandler method.               |
| [`IsObjInTreeView`](#Tree.IsObjInTreeView)                           | IsObjInTreeView method.              |
| [`OnActiveObjectChangedFwd`](#Tree.OnActiveObjectChangedFwd)         | OnActiveObjectChangedFwd method.     |
| [`add_OnActiveObjectChanged`](#Tree.add_OnActiveObjectChanged)       | add_OnActiveObjectChanged method.    |
| [`remove_OnActiveObjectChanged`](#Tree.remove_OnActiveObjectChanged) | remove_OnActiveObjectChanged method. |

### Methods

| Name | Description |
|------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`Activate`](#Tree.Activate)                                     | selects an object in the tree.                                                   |
| [`CanAddTreeGroupingFolder`](#Tree.CanAddTreeGroupingFolder)     | CanAddTreeGroupingFolder method.                                                 |
| [`ClearFilter`](#Tree.ClearFilter)                               | Clears the current filter.                                                       |
| [`ClearSort`](#Tree.ClearSort)                                   | Clears the current sort.                                                         |
| [`Click`](#Tree.Click)                                           | Click method.                                                                    |
| [`CreateObjRef`](#Tree.CreateObjRef)                             | CreateObjRef method.                                                             |
| [`ExpandBranch`](#Tree.ExpandBranch)                             | ExpandBranch method.                                                             |
| [`Filter`](#Tree.Filter)                                         | Filter method.                                                                   |
| [`Find`](#Tree.Find)                                             | Find method.                                                                     |
| [`GetDataModelChanges`](#Tree.GetDataModelChanges)               | GetDataModelChanges method.                                                      |
| [`GetEnumerator`](#Tree.GetEnumerator)                           | GetEnumerator method.                                                            |
| [`GetLifetimeService`](#Tree.GetLifetimeService)                 | GetLifetimeService method.                                                       |
| [`GetObjectsByName`](#Tree.GetObjectsByName)                     | Gets a list of all objects with the specified name.                              |
| [`GetObjectsByType`](#Tree.GetObjectsByType)                     | Gets a list of all objects with the specified type.                              |
| [`GetPathToFirstActiveObject`](#Tree.GetPathToFirstActiveObject) | Gets the full path that needs to be typed in order to go to the selected object. |
| [`GetPathToObjectById`](#Tree.GetPathToObjectById)               | GetPathToObjectById method.                                                      |
| [`Group`](#Tree.Group)                                           | Groups a list of objects together.                                               |
| [`InitializeLifetimeService`](#Tree.InitializeLifetimeService)   | InitializeLifetimeService method.                                                |
| [`IsSorted`](#Tree.IsSorted)                                     | Checks if the tree is currently sorted alphabetically.                           |
| [`Refresh`](#Tree.Refresh)                                       | Refreshes the tree.                                                              |
| [`Sort`](#Tree.Sort)                                             | Sorts the tree objects based on given parameters.                                |
| [`StartListening`](#Tree.StartListening)                         | StartListening method.                                                           |
| [`StopListening`](#Tree.StopListening)                           | StopListening method.                                                            |
| [`Suspend`](#Tree.Suspend)                                       | Prevents the tree from being updated.                                            |
| [`TryGetFolder`](#Tree.TryGetFolder)                             | TryGetFolder method.                                                             |
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

### *property* Tree.ActiveObjects *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a list of all selected objects.

<!-- !! processed by numpydoc !! -->

<a id="Tree.AllObjects"></a>

### *property* Tree.AllObjects *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets a list of all objects available in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentFilter"></a>

### *property* Tree.CurrentFilter *: Ansys.Common.Interop.DSObjectTypes.DSTreeSearchType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current filter applied on the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchGraphics"></a>

### *property* Tree.CurrentSearchGraphics *: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.VisibilityType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current visibility.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchState"></a>

### *property* Tree.CurrentSearchState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current search state.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CurrentSearchString"></a>

### *property* Tree.CurrentSearchString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current search string (name/tag/propertyName/propertyValue).

<!-- !! processed by numpydoc !! -->

<a id="Tree.FirstActiveObject"></a>

### *property* Tree.FirstActiveObject *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the first object selected in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GroupingFoldersVisible"></a>

### *property* Tree.GroupingFoldersVisible *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls whether or not group folders are visible.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Tree.Activate"></a>

### Tree.Activate(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### Tree.Activate(dataModelObjects: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

selects an object in the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CanAddTreeGroupingFolder"></a>

### Tree.CanAddTreeGroupingFolder(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanAddTreeGroupingFolder method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ClearFilter"></a>

### Tree.ClearFilter() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the current filter.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ClearSort"></a>

### Tree.ClearSort() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the current sort.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Click"></a>

### Tree.Click() → [None](https://docs.python.org/3/builtins/constants.html#None)

Click method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.CreateObjRef"></a>

### Tree.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.ExpandBranch"></a>

### Tree.ExpandBranch(objectId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExpandBranch method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Filter"></a>

### Tree.Filter(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), tag: [str](https://docs.python.org/3/builtins/stdtypes.html#str), state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState), visibility: [Ansys.Mechanical.DataModel.Enums.VisibilityType](../../../Mechanical/DataModel/Enums/VisibilityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.VisibilityType), type: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectClass](../../../Mechanical/DataModel/Enums/TreeFilterObjectClass.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TreeFilterObjectClass), coordinateSystem: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem), model: [str](https://docs.python.org/3/builtins/stdtypes.html#str), environment: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis), scoping: [Ansys.Mechanical.DataModel.Enums.TreeFilterScopingType](../../../Mechanical/DataModel/Enums/TreeFilterScopingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TreeFilterScopingType), filterState: [Ansys.Mechanical.DataModel.Enums.TreeFilterObjectState](../../../Mechanical/DataModel/Enums/TreeFilterObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TreeFilterObjectState), propertyName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), propertyValue: [str](https://docs.python.org/3/builtins/stdtypes.html#str), invertSearchResults: System.Nullable[[bool](https://docs.python.org/3/builtins/functions.html#bool)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

Filter method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Find"></a>

### Tree.Find(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), func: Callable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject), [bool](https://docs.python.org/3/builtins/functions.html#bool)], tag: [str](https://docs.python.org/3/builtins/stdtypes.html#str), state: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState)) → Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Find method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetDataModelChanges"></a>

### Tree.GetDataModelChanges(added: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)], modified: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)], removed: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetDataModelChanges method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetEnumerator"></a>

### Tree.GetEnumerator() → Ansys.ACT.Automation.Mechanical.TreeObjects

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetLifetimeService"></a>

### Tree.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetObjectsByName"></a>

### Tree.GetObjectsByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets a list of all objects with the specified name.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetObjectsByType"></a>

### Tree.GetObjectsByType(type: Tree.GetObjectsByType.type) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

### Tree.GetObjectsByType(dataModelObjectCategory: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory)) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets a list of all objects with the specified type.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetPathToFirstActiveObject"></a>

### Tree.GetPathToFirstActiveObject() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets the full path that needs to be typed in order to go to the selected object.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetPathToObjectById"></a>

### Tree.GetPathToObjectById(objectId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPathToObjectById method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.GetTreeHandler"></a>

### *classmethod* Tree.GetTreeHandler() → Ansys.Common.Interop.SimulationUIHandlers.ISimulationTreeHandler

GetTreeHandler method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Group"></a>

### Tree.Group(dataModelObjects: Iterable) → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

### Tree.Group(dataModelObject: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Groups a list of objects together.

<!-- !! processed by numpydoc !! -->

<a id="Tree.InitializeLifetimeService"></a>

### Tree.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.IsObjInTreeView"></a>

### *classmethod* Tree.IsObjInTreeView(dataModelObj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsObjInTreeView method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.IsSorted"></a>

### Tree.IsSorted() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if the tree is currently sorted alphabetically.

<!-- !! processed by numpydoc !! -->

<a id="Tree.OnActiveObjectChangedFwd"></a>

### *classmethod* Tree.OnActiveObjectChangedFwd(sender: Any, args: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

OnActiveObjectChangedFwd method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Refresh"></a>

### Tree.Refresh(recomputeStates: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Refreshes the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Sort"></a>

### Tree.Sort(type: [Ansys.Mechanical.DataModel.Enums.SortingType](../../../Mechanical/DataModel/Enums/SortingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SortingType), reverse: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Sorts the tree objects based on given parameters.
Type of sorting to apply.
Wheter to sort in reverse order.

Note that all parameters of Sort are optional.
type: Defaults to alphabetical
reverse: Defaults to false

sorting in reverse order is currently not supported

 Usage example - sort alphabetically
ExtAPI.DataModel.Tree.Sort()

 Usage example - sort alphabetically
ExtAPI.DataModel.Tree.Sort(type=SortingType.Alphabetical, reverse=False)
```

<!-- !! processed by numpydoc !! -->

<a id="Tree.StartListening"></a>

### Tree.StartListening() → [None](https://docs.python.org/3/builtins/constants.html#None)

StartListening method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.StopListening"></a>

### Tree.StopListening() → [None](https://docs.python.org/3/builtins/constants.html#None)

StopListening method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Suspend"></a>

### Tree.Suspend() → System.IDisposable

Prevents the tree from being updated.

<!-- !! processed by numpydoc !! -->

<a id="Tree.TryGetFolder"></a>

### Tree.TryGetFolder(obj: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

TryGetFolder method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.Ungroup"></a>

### Tree.Ungroup(groupingFolder: [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes groupingFolder from the tree.

<!-- !! processed by numpydoc !! -->

<a id="Tree.add_OnActiveObjectChanged"></a>

### *classmethod* Tree.add_OnActiveObjectChanged(value: System.EventHandler[Ansys.ACT.Automation.Mechanical.ActiveObjectChangedEventArgs]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnActiveObjectChanged method.

<!-- !! processed by numpydoc !! -->

<a id="Tree.remove_OnActiveObjectChanged"></a>

### *classmethod* Tree.remove_OnActiveObjectChanged(value: System.EventHandler[Ansys.ACT.Automation.Mechanical.ActiveObjectChangedEventArgs]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnActiveObjectChanged method.

<!-- !! processed by numpydoc !! -->

