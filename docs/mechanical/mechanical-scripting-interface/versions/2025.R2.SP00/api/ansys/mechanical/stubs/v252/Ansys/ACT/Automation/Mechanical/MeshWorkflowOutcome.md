# `MeshWorkflowOutcome`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelOutcome.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowOutcome.Activate)                               | Activate the current object.                                                      |
| [`AddFigure`](#MeshWorkflowOutcome.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowOutcome.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshWorkflowOutcome.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshWorkflowOutcome.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshWorkflowOutcome.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshWorkflowOutcome.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MeshWorkflowOutcome.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshWorkflowOutcome.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowOutcome.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowOutcome.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshWorkflowOutcome.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshWorkflowOutcome.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshWorkflowOutcome.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [`BoundingBoxDimensions`](#MeshWorkflowOutcome.BoundingBoxDimensions)                               | Gets the bounding box extents of the input aligned along the direction of stacking.                                                         |
| [`Children`](#MeshWorkflowOutcome.Children)                                                         | Gets the list of children.                                                                                                                  |
| [`DataModelObjectCategory`](#MeshWorkflowOutcome.DataModelObjectCategory)                           | Gets the current DataModelObject’s category.                                                                                                |
| [`FailureMessage`](#MeshWorkflowOutcome.FailureMessage)                                             | Gets the failure message.                                                                                                                   |
| [`Figures`](#MeshWorkflowOutcome.Figures)                                                           | Gets the list of associated figures.                                                                                                        |
| [`Images`](#MeshWorkflowOutcome.Images)                                                             | Gets the list of associated images.                                                                                                         |
| [`InternalObject`](#MeshWorkflowOutcome.InternalObject)                                             | Gets the internal object. For advanced usage only.                                                                                          |
| [`MultiZoneDefeaturedEdges`](#MeshWorkflowOutcome.MultiZoneDefeaturedEdges)                         | Gets the number of edges for which MultiZone Meshing output no mesh elements.                                                               |
| [`MultiZoneDefeaturedEdgesScopeMethod`](#MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopeMethod)   | Gets the scope method for the MultiZone Defeatured Edges scope outcome.                                                                     |
| [`MultiZoneDefeaturedEdgesScopePattern`](#MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopePattern) | Gets the scope pattern for the MultiZone Defeatured Edges scope outcome.                                                                    |
| [`MultiZoneDefeaturedFaces`](#MeshWorkflowOutcome.MultiZoneDefeaturedFaces)                         | Gets the number of faces for which MultiZone Meshing output no mesh elements.                                                               |
| [`MultiZoneDefeaturedFacesScopeMethod`](#MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopeMethod)   | Gets the scope method for the MultiZone Defeatured Faces scope outcome.                                                                     |
| [`MultiZoneDefeaturedFacesScopePattern`](#MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopePattern) | Gets the scope pattern for the MultiZone Defeatured Faces scope outcome.                                                                    |
| [`MultiZoneFailedBlocking`](#MeshWorkflowOutcome.MultiZoneFailedBlocking)                           | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed.                                         |
| [`MultiZoneFailedBlockingScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedBlockingScopeMethod)     | Gets the scope method for the MultiZone Failed Blocking scope outcome.                                                                      |
| [`MultiZoneFailedBlockingScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedBlockingScopePattern)   | Gets the scope pattern for the MultiZone Failed Blocking scope outcome.                                                                     |
| [`MultiZoneFailedInflation`](#MeshWorkflowOutcome.MultiZoneFailedInflation)                         | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Inflation failed.                                        |
| [`MultiZoneFailedInflationScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedInflationScopeMethod)   | Gets the scope method for the MultiZone Failed Inflation scope outcome.                                                                     |
| [`MultiZoneFailedInflationScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedInflationScopePattern) | Gets the scope pattern for the MultiZone Failed Inflation scope outcome.                                                                    |
| [`MultiZoneFailedInputMesh`](#MeshWorkflowOutcome.MultiZoneFailedInputMesh)                         | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to conformally connect to the input mesh. |
| [`MultiZoneFailedInputScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedInputScopeMethod)           | Gets the scope method for the MultiZone Failed Input Mesh Connection scope outcome.                                                         |
| [`MultiZoneFailedInputScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedInputScopePattern)         | Gets the scope pattern for the MultiZone Failed Input Mesh Connection scope outcome.                                                        |
| [`MultiZoneFailedMesh`](#MeshWorkflowOutcome.MultiZoneFailedMesh)                                   | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to create a mesh.                         |
| [`MultiZoneFailedMeshCheck`](#MeshWorkflowOutcome.MultiZoneFailedMeshCheck)                         | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing created inverted or invalid elements.            |
| [`MultiZoneFailedMeshCheckScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopeMethod)   | Gets the scope method for the MultiZone Failed Mesh Check scope outcome.                                                                    |
| [`MultiZoneFailedMeshCheckScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopePattern) | Gets the scope pattern for the MultiZone Failed Mesh Check scope outcome.                                                                   |
| [`MultiZoneFailedMeshScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedMeshScopeMethod)             | Gets the scope method for the MultiZone Failed Mesh scope outcome.                                                                          |
| [`MultiZoneFailedMeshScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedMeshScopePattern)           | Gets the scope pattern for the MultiZone Failed Mesh scope outcome.                                                                         |
| [`MultiZoneFreeMesh`](#MeshWorkflowOutcome.MultiZoneFreeMesh)                                       | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed to create a swept or mapped block.       |
| [`MultiZoneFreeMeshScopeMethod`](#MeshWorkflowOutcome.MultiZoneFreeMeshScopeMethod)                 | Gets the scope method for the MultiZone Free Mesh scope outcome.                                                                            |
| [`MultiZoneFreeMeshScopePattern`](#MeshWorkflowOutcome.MultiZoneFreeMeshScopePattern)               | Gets the scope pattern for the MultiZone Free Mesh scope outcome.                                                                           |
| [`OutcomeType`](#MeshWorkflowOutcome.OutcomeType)                                                   | Returns the type of the control.                                                                                                            |
| [`Properties`](#MeshWorkflowOutcome.Properties)                                                     | Gets the list of properties for this object.                                                                                                |
| [`ScopeDefinition`](#MeshWorkflowOutcome.ScopeDefinition)                                           | Gets or sets the type of scope definition for the control scoping. Default: Value.                                                          |
| [`ScopeMethod`](#MeshWorkflowOutcome.ScopeMethod)                                                   | Gets or sets the scoping method for the control scoping.                                                                                    |
| [`ScopeOutcome`](#MeshWorkflowOutcome.ScopeOutcome)                                                 | Gets or sets the scope outcome for the scoping scoping from a previous operation. Applicable only if scope is defined by outcome.           |
| [`ScopePattern`](#MeshWorkflowOutcome.ScopePattern)                                                 | Gets or sets the pattern that defines the scope of the control. Applicable only if scope is defined by value.                               |
| [`SizeFieldName`](#MeshWorkflowOutcome.SizeFieldName)                                               |                                                                                                                                             |
| [`SmallestLateralEdgeLength`](#MeshWorkflowOutcome.SmallestLateralEdgeLength)                       | Gets the smallest edge length along the lateral direction of stacking.                                                                      |
| [`SmallestStackingEdgeLength`](#MeshWorkflowOutcome.SmallestStackingEdgeLength)                     | Gets the smallest edge length along the stacking direction.                                                                                 |
| [`VisibleProperties`](#MeshWorkflowOutcome.VisibleProperties)                                       | Gets the list of properties that are visible for this object.                                                                               |
| [`WarningMessage`](#MeshWorkflowOutcome.WarningMessage)                                             | Gets the warning message.                                                                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowOutcome.BoundingBoxDimensions"></a>

### *property* MeshWorkflowOutcome.BoundingBoxDimensions *: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.Point) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the bounding box extents of the input aligned along the direction of stacking.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Children"></a>

### *property* MeshWorkflowOutcome.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DataModelObjectCategory"></a>

### *property* MeshWorkflowOutcome.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FailureMessage"></a>

### *property* MeshWorkflowOutcome.FailureMessage *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the failure message.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Figures"></a>

### *property* MeshWorkflowOutcome.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Images"></a>

### *property* MeshWorkflowOutcome.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InternalObject"></a>

### *property* MeshWorkflowOutcome.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelOutcomeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedEdges"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedEdges *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of edges for which MultiZone Meshing output no mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Defeatured Edges scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Defeatured Edges scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedFaces"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedFaces *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of faces for which MultiZone Meshing output no mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Defeatured Faces scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Defeatured Faces scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedBlocking"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedBlocking *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedBlockingScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedBlockingScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Failed Blocking scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedBlockingScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedBlockingScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Blocking scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInflation"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInflation *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Inflation failed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInflationScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInflationScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Failed Inflation scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInflationScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInflationScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Inflation scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInputMesh"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInputMesh *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to conformally connect to the input mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInputScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInputScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Failed Input Mesh Connection scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInputScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInputScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Input Mesh Connection scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMesh"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMesh *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to create a mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshCheck"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshCheck *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing created inverted or invalid elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Failed Mesh Check scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Mesh Check scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Failed Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFreeMesh"></a>

### *property* MeshWorkflowOutcome.MultiZoneFreeMesh *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed to create a swept or mapped block.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFreeMeshScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFreeMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope method for the MultiZone Free Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFreeMeshScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFreeMeshScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the scope pattern for the MultiZone Free Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OutcomeType"></a>

### *property* MeshWorkflowOutcome.OutcomeType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Properties"></a>

### *property* MeshWorkflowOutcome.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopeDefinition"></a>

### *property* MeshWorkflowOutcome.ScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the control scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopeMethod"></a>

### *property* MeshWorkflowOutcome.ScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the control scoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopeOutcome"></a>

### *property* MeshWorkflowOutcome.ScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome for the scoping scoping from a previous operation. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopePattern"></a>

### *property* MeshWorkflowOutcome.ScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the pattern that defines the scope of the control. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SizeFieldName"></a>

### *property* MeshWorkflowOutcome.SizeFieldName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="MeshWorkflowOutcome.SmallestLateralEdgeLength"></a>

### *property* MeshWorkflowOutcome.SmallestLateralEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the smallest edge length along the lateral direction of stacking.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SmallestStackingEdgeLength"></a>

### *property* MeshWorkflowOutcome.SmallestStackingEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the smallest edge length along the stacking direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.VisibleProperties"></a>

### *property* MeshWorkflowOutcome.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.WarningMessage"></a>

### *property* MeshWorkflowOutcome.WarningMessage *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the warning message.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowOutcome.Activate"></a>

### MeshWorkflowOutcome.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AddFigure"></a>

### MeshWorkflowOutcome.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AddImage"></a>

### MeshWorkflowOutcome.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CopyTo"></a>

### MeshWorkflowOutcome.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CreateParameter"></a>

### MeshWorkflowOutcome.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Delete"></a>

### MeshWorkflowOutcome.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Duplicate"></a>

### MeshWorkflowOutcome.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetChildren"></a>

### MeshWorkflowOutcome.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetParameter"></a>

### MeshWorkflowOutcome.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GroupAllSimilarChildren"></a>

### MeshWorkflowOutcome.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GroupSimilarObjects"></a>

### MeshWorkflowOutcome.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyByAPIName"></a>

### MeshWorkflowOutcome.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyByName"></a>

### MeshWorkflowOutcome.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.RemoveParameter"></a>

### MeshWorkflowOutcome.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

