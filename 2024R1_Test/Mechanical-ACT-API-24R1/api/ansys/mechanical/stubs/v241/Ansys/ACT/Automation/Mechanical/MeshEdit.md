<!-- vale off -->

<a id="meshedit"></a>

# `MeshEdit`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshEdit"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshEdit

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshEdit.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MeshEdit.ClearGeneratedData)                                 | Clear the generated data.                                                         |
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

| Name | Description |
|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                    |
| [`GenerateAutomaticMeshConnectionsOnRefresh`](#MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh) | Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.           |
| [`AssociateToPullGeometry`](#MeshEdit.AssociateToPullGeometry)                                     | To Migrate Boundary Conditions from profile to resulting Pull bodies. |
| [`TransparencyEnabled`](#MeshEdit.TransparencyEnabled)                                             | Gets or sets the TransparencyEnabled.                                 |
| [`DataModelObjectCategory`](#MeshEdit.DataModelObjectCategory)                                     | Gets the current DataModelObject’s category.                          |
| [`Children`](#MeshEdit.Children)                                                                   | Gets the list of children.                                            |
| [`Comments`](#MeshEdit.Comments)                                                                   | Gets the list of associated comments.                                 |
| [`Figures`](#MeshEdit.Figures)                                                                     | Gets the list of associated figures.                                  |
| [`Images`](#MeshEdit.Images)                                                                       | Gets the list of associated images.                                   |
| [`InternalObject`](#id0)                                                                           | Gets the internal object. For advanced usage only.                    |
| [`Properties`](#MeshEdit.Properties)                                                               | Gets the list of properties for this object.                          |
| [`VisibleProperties`](#MeshEdit.VisibleProperties)                                                 | Gets the list of properties that are visible for this object.         |

<a id="property-detail"></a>

## Property detail

<a id="MeshEdit.InternalObject"></a>

### *property* MeshEdit.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionsParentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh"></a>

### *property* MeshEdit.GenerateAutomaticMeshConnectionsOnRefresh *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateAutomaticMeshConnectionsOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AssociateToPullGeometry"></a>

### *property* MeshEdit.AssociateToPullGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To Migrate Boundary Conditions from profile to resulting Pull bodies.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.TransparencyEnabled"></a>

### *property* MeshEdit.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.DataModelObjectCategory"></a>

### *property* MeshEdit.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Children"></a>

### *property* MeshEdit.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Comments"></a>

### *property* MeshEdit.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Figures"></a>

### *property* MeshEdit.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Images"></a>

### *property* MeshEdit.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshEdit.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Properties"></a>

### *property* MeshEdit.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.VisibleProperties"></a>

### *property* MeshEdit.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshEdit.ClearGeneratedData"></a>

### MeshEdit.ClearGeneratedData()

Clear the generated data.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddNodeMerge"></a>

### MeshEdit.AddNodeMerge()

Add a new NodeMerge.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddManualMeshConnection"></a>

### MeshEdit.AddManualMeshConnection()

Add a new ManualMeshConnection

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Generate"></a>

### MeshEdit.Generate()

Generate all mesh edits.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.SearchConnectionsForDuplicatePairs"></a>

### MeshEdit.SearchConnectionsForDuplicatePairs()

Run the SearchConnectionsForDuplicatePairs action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddPullExtrude"></a>

### MeshEdit.AddPullExtrude()

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddPullRevolve"></a>

### MeshEdit.AddPullRevolve()

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddPullSurfaceCoating"></a>

### MeshEdit.AddPullSurfaceCoating()

Creates a new MeshExtrude

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddContactMatchGroup"></a>

### MeshEdit.AddContactMatchGroup()

Creates a new ContactMatchGroup

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddDirectMorph"></a>

### MeshEdit.AddDirectMorph()

Creates a new DirectMorph

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddMeshConnectionGroup"></a>

### MeshEdit.AddMeshConnectionGroup()

Creates a new MeshConnectionGroup

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddNodeMergeGroup"></a>

### MeshEdit.AddNodeMergeGroup()

Creates a new NodeMergeGroup

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddNodeMove"></a>

### MeshEdit.AddNodeMove()

Creates a new NodeMove

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.CreateNamedSelectionForSharedNodes"></a>

### MeshEdit.CreateNamedSelectionForSharedNodes()

Run the CreateNamedSelectionForSharedNodes action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.RenameBasedOnDefinition"></a>

### MeshEdit.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetChildren"></a>

### MeshEdit.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshEdit.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddComment"></a>

### MeshEdit.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddFigure"></a>

### MeshEdit.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.AddImage"></a>

### MeshEdit.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Activate"></a>

### MeshEdit.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.CopyTo"></a>

### MeshEdit.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.Duplicate"></a>

### MeshEdit.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GroupAllSimilarChildren"></a>

### MeshEdit.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GroupSimilarObjects"></a>

### MeshEdit.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.PropertyByName"></a>

### MeshEdit.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.PropertyByAPIName"></a>

### MeshEdit.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.CreateParameter"></a>

### MeshEdit.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.GetParameter"></a>

### MeshEdit.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshEdit.RemoveParameter"></a>

### MeshEdit.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
