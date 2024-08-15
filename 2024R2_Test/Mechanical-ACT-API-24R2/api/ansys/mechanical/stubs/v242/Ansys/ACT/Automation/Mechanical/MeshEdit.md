# `MeshEdit`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshEdit

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshEdit.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------|-----------------------------------------------------------------------------------|
| `ClearGeneratedData`                 | Clear the generated data.                                                         |
| `AddNodeMerge`                       | Add a new NodeMerge.                                                              |
| `AddManualMeshConnection`            | Add a new ManualMeshConnection                                                    |
| `Generate`                           | Generate all mesh edits.                                                          |
| `SearchConnectionsForDuplicatePairs` | Run the SearchConnectionsForDuplicatePairs action.                                |
| `AddPullExtrude`                     | Creates a new MeshExtrude                                                         |
| `AddPullRevolve`                     | Creates a new MeshExtrude                                                         |
| `AddPullSurfaceCoating`              | Creates a new MeshExtrude                                                         |
| `AddContactMatchGroup`               | Creates a new ContactMatchGroup                                                   |
| `AddDirectMorph`                     | Creates a new DirectMorph                                                         |
| `AddMeshConnectionGroup`             | Creates a new MeshConnectionGroup                                                 |
| `AddNodeMergeGroup`                  | Creates a new NodeMergeGroup                                                      |
| `AddNodeMove`                        | Creates a new NodeMove                                                            |
| `CreateNamedSelectionForSharedNodes` | Run the CreateNamedSelectionForSharedNodes action.                                |
| `RenameBasedOnDefinition`            | Run the RenameBasedOnDefinition action.                                           |
| `GetChildren`                        | Gets the list of children, filtered by type.                                      |
| `GetChildren`                        | Gets the list of children, filtered by type.                                      |
| `AddComment`                         | Creates a new child Comment.                                                      |
| `AddFigure`                          | Creates a new child Figure.                                                       |
| `AddImage`                           | Creates a new child Image.                                                        |
| `Activate`                           | Activate the current object.                                                      |
| `CopyTo`                             | Copies all visible properties from this object to another.                        |
| `Duplicate`                          | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`            | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                     | Get a property by its unique name.                                                |
| `PropertyByAPIName`                  | Get a property by its API name.                                                   |
| `CreateParameter`                    | Creates a new parameter for a Property.                                           |
| `GetParameter`                       | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                    | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------|-----------------------------------------------------------------------|
| `InternalObject`                            | Gets the internal object. For advanced usage only.                    |
| `GenerateAutomaticMeshConnectionsOnRefresh` | Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.           |
| `AssociateToPullGeometry`                   | To Migrate Boundary Conditions from profile to resulting Pull bodies. |
| `TransparencyEnabled`                       | Gets or sets the TransparencyEnabled.                                 |
| `DataModelObjectCategory`                   | Gets the current DataModelObject's category.                          |
| `Children`                                  | Gets the list of children.                                            |
| `Comments`                                  | Gets the list of associated comments.                                 |
| `Figures`                                   | Gets the list of associated figures.                                  |
| `Images`                                    | Gets the list of associated images.                                   |
| `InternalObject`                            | Gets the internal object. For advanced usage only.                    |
| `Properties`                                | Gets the list of properties for this object.                          |
| `VisibleProperties`                         | Gets the list of properties that are visible for this object.         |

<a id="property-detail"></a>

## Property detail

### *property* MeshEdit.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionsParentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.AssociateToPullGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To Migrate Boundary Conditions from profile to resulting Pull bodies.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshEdit.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

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

### MeshEdit.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshEdit.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

