# ResultProbe

<a id="ResultProbe"></a>

### *class* ResultProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ResultProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ResultProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ResultProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ResultProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ResultProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ResultProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ResultProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ResultProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ResultProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ResultProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ResultProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ResultProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ResultProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ResultProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ResultProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ResultProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ResultProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ResultProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ResultProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ResultProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ResultProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Summation`](#ResultProbe.Summation)                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ResultProbe.LocationMethod)                                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ResultProbe.GeometryLocation)                                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ResultProbe.CoordinateSystemSelection)                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ResultProbe.BoundaryConditionSelection)                                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ResultProbe.ContactRegionSelection)                                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ResultProbe.RemotePointSelection)                                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ResultProbe.BeamSelection)                                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ResultProbe.MeshConnectionSelection)                                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ResultProbe.SurfaceSelection)                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ResultProbe.SpringSelection)                                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ResultProbe.IsSolved)                                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ResultProbe.Orientation)                                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IterationNumber`](#ResultProbe.IterationNumber)                                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ResultProbe.LoadStep)                                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ResultProbe.LoadStepNumber)                                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ResultProbe.Substep)                                                                                         | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ResultProbe.DisplayTime)                                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ResultProbe.MaximumTotal)                                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ResultProbe.MaximumXAxis)                                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ResultProbe.MaximumYAxis)                                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ResultProbe.MaximumZAxis)                                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ResultProbe.MinimumTotal)                                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ResultProbe.MinimumXAxis)                                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ResultProbe.MinimumYAxis)                                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ResultProbe.MinimumZAxis)                                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ResultProbe.Time)                                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#ResultProbe.Total)                                                                                             | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ResultProbe.XAxis)                                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ResultProbe.YAxis)                                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ResultProbe.ZAxis)                                                                                             | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ResultProbe.ResultSelection)                                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ResultProbe.SpatialResolution)                                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ResultProbe.Type)                                                                                               | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ResultProbe.DpfEvaluation)                                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ResultProbe.Suppressed)                                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Children`](#ResultProbe.Children)                                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ResultProbe.Comments)                                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ResultProbe.Figures)                                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ResultProbe.Images)                                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ResultProbe.Properties)                                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ResultProbe.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ResultProbe
```

<a id="property-detail"></a>

## Property detail

<a id="ResultProbe.Summation"></a>

### *property* ResultProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.LocationMethod"></a>

### *property* ResultProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.GeometryLocation"></a>

### *property* ResultProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.CoordinateSystemSelection"></a>

### *property* ResultProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.BoundaryConditionSelection"></a>

### *property* ResultProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.ContactRegionSelection"></a>

### *property* ResultProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.RemotePointSelection"></a>

### *property* ResultProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.BeamSelection"></a>

### *property* ResultProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MeshConnectionSelection"></a>

### *property* ResultProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.SurfaceSelection"></a>

### *property* ResultProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.SpringSelection"></a>

### *property* ResultProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.IsSolved"></a>

### *property* ResultProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Orientation"></a>

### *property* ResultProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.InternalObject"></a>

### *property* ResultProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.IterationNumber"></a>

### *property* ResultProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.LoadStep"></a>

### *property* ResultProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.LoadStepNumber"></a>

### *property* ResultProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Substep"></a>

### *property* ResultProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.DisplayTime"></a>

### *property* ResultProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MaximumTotal"></a>

### *property* ResultProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MaximumXAxis"></a>

### *property* ResultProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MaximumYAxis"></a>

### *property* ResultProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MaximumZAxis"></a>

### *property* ResultProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MinimumTotal"></a>

### *property* ResultProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MinimumXAxis"></a>

### *property* ResultProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MinimumYAxis"></a>

### *property* ResultProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.MinimumZAxis"></a>

### *property* ResultProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Time"></a>

### *property* ResultProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Total"></a>

### *property* ResultProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.XAxis"></a>

### *property* ResultProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.YAxis"></a>

### *property* ResultProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.ZAxis"></a>

### *property* ResultProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.ResultSelection"></a>

### *property* ResultProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.SpatialResolution"></a>

### *property* ResultProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Type"></a>

### *property* ResultProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.DpfEvaluation"></a>

### *property* ResultProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Suppressed"></a>

### *property* ResultProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.DataModelObjectCategory"></a>

### *property* ResultProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Children"></a>

### *property* ResultProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Comments"></a>

### *property* ResultProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Figures"></a>

### *property* ResultProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Images"></a>

### *property* ResultProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ResultProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Properties"></a>

### *property* ResultProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.VisibleProperties"></a>

### *property* ResultProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResultProbe.ExportAnimation"></a>

### ResultProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.ClearGeneratedData"></a>

### ResultProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.DuplicateWithoutResults"></a>

### ResultProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.EvaluateAllResults"></a>

### ResultProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.SnapToMeshNodes"></a>

### ResultProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.RenameBasedOnDefinition"></a>

### ResultProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Delete"></a>

### ResultProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.GetChildren"></a>

### ResultProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ResultProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.AddComment"></a>

### ResultProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.AddFigure"></a>

### ResultProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.AddImage"></a>

### ResultProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Activate"></a>

### ResultProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.CopyTo"></a>

### ResultProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.Duplicate"></a>

### ResultProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.GroupAllSimilarChildren"></a>

### ResultProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.GroupSimilarObjects"></a>

### ResultProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.PropertyByName"></a>

### ResultProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.PropertyByAPIName"></a>

### ResultProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.CreateParameter"></a>

### ResultProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.GetParameter"></a>

### ResultProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResultProbe.RemoveParameter"></a>

### ResultProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
