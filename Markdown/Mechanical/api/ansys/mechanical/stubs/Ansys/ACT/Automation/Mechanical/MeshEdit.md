# MeshEdit

### *class* MeshEdit

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshEdit.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ClearGeneratedData`](#MeshEdit.ClearGeneratedData)                                 | Clear the generated data.                                                         |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddNodeMerge`](#MeshEdit.AddNodeMerge)                                             | Add a new NodeMerge.                                                              |
| [`AddManualMeshConnection`](#MeshEdit.AddManualMeshConnection)                       | Add a new ManualMeshConnection                                                    |
| [`Generate`](#MeshEdit.Generate)                                                     | Generate all mesh edits.                                                          |
| [`SearchConnectionsForDuplicatePairs`](#MeshEdit.SearchConnectionsForDuplicatePairs) | Run the SearchConnectionsForDuplicatePairs action.                                |
| [`AddPullExtrude`](#MeshEdit.AddPullExtrude)                                         | Creates a new MeshExtrude                                                         |
| [`AddPullRevolve`](#MeshEdit.AddPullRevolve)                                         | Creates a new MeshExtrude                                                         |
| [`AddPullSurfaceCoating`](#MeshEdit.AddPullSurfaceCoating)                           | Creates a new MeshExtrude                                                         |
| [`AddContactMatchGroup`](#MeshEdit.AddContactMatchGroup)                             | Creates a new ContactMatchGroup                                                   |
| [`AddDirectMorph`](#MeshEdit.AddDirectMorph)                                         | Creates a new DirectMorph                                                         |
| [`AddMeshConnectionGroup`](#MeshEdit.AddMeshConnectionGroup)                         | Creates a new MeshConnectionGroup                                                 |
| [`AddNodeMergeGroup`](#MeshEdit.AddNodeMergeGroup)                                   | Creates a new NodeMergeGroup                                                      |
| [`AddNodeMove`](#MeshEdit.AddNodeMove)                                               | Creates a new NodeMove                                                            |
| [`CreateNamedSelectionForSharedNodes`](#MeshEdit.CreateNamedSelectionForSharedNodes) | Run the CreateNamedSelectionForSharedNodes action.                                |
| [`RenameBasedOnDefinition`](#MeshEdit.RenameBasedOnDefinition)                       | Run the RenameBasedOnDefinition action.                                           |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MeshEdit.AddComment)                                                 | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshEdit.AddFigure)                                                   | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshEdit.AddImage)                                                     | Creates a new child Image.                                                        |
| [`Activate`](#MeshEdit.Activate)                                                     | Activate the current object.                                                      |
| [`CopyTo`](#MeshEdit.CopyTo)                                                         | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshEdit.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshEdit.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshEdit.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshEdit.PropertyByName)                                         | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshEdit.PropertyByAPIName)                                   | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshEdit.CreateParameter)                                       | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshEdit.GetParameter)                                             | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshEdit.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                    |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`GenerateAutomaticMeshConnectionsOnRefresh`](#MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh)                  | Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.           |
| [`AssociateToPullGeometry`](#MeshEdit.AssociateToPullGeometry)                                                      | To Migrate Boundary Conditions from profile to resulting Pull bodies. |
| [`TransparencyEnabled`](#MeshEdit.TransparencyEnabled)                                                              | Gets or sets the TransparencyEnabled.                                 |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                          |
| [`Children`](#MeshEdit.Children)                                                                                    | Gets the list of children.                                            |
| [`Comments`](#MeshEdit.Comments)                                                                                    | Gets the list of associated comments.                                 |
| [`Figures`](#MeshEdit.Figures)                                                                                      | Gets the list of associated figures.                                  |
| [`Images`](#MeshEdit.Images)                                                                                        | Gets the list of associated images.                                   |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                    |
| [`Properties`](#MeshEdit.Properties)                                                                                | Gets the list of properties for this object.                          |
| [`VisibleProperties`](#MeshEdit.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.         |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshEdit
```

## Property detail

### *property* MeshEdit.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionsParentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.AssociateToPullGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To Migrate Boundary Conditions from profile to resulting Pull bodies.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshEdit.ClearGeneratedData()

Clear the generated data.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddNodeMerge()

Add a new NodeMerge.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddManualMeshConnection()

Add a new ManualMeshConnection

<!-- !! processed by numpydoc !! -->

### MeshEdit.Generate()

Generate all mesh edits.

<!-- !! processed by numpydoc !! -->

### MeshEdit.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddPullExtrude()

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddPullRevolve()

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddPullSurfaceCoating()

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddContactMatchGroup()

Creates a new ContactMatchGroup

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddDirectMorph()

Creates a new DirectMorph

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddMeshConnectionGroup()

Creates a new MeshConnectionGroup

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddNodeMergeGroup()

Creates a new NodeMergeGroup

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddNodeMove()

Creates a new NodeMove

<!-- !! processed by numpydoc !! -->

### MeshEdit.CreateNamedSelectionForSharedNodes()

Run the CreateNamedSelectionForSharedNodes action.

<!-- !! processed by numpydoc !! -->

### MeshEdit.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### MeshEdit.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshEdit.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshEdit.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshEdit.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshEdit.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshEdit.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshEdit.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshEdit.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshEdit.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshEdit.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshEdit.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshEdit.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
