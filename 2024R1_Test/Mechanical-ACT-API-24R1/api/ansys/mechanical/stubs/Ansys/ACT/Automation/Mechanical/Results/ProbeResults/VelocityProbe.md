# VelocityProbe

<a id="VelocityProbe"></a>

### *class* VelocityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a VelocityProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#VelocityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#VelocityProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#VelocityProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#VelocityProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#VelocityProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#VelocityProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#VelocityProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#VelocityProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#VelocityProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#VelocityProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#VelocityProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#VelocityProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#VelocityProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#VelocityProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#VelocityProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#VelocityProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#VelocityProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#VelocityProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#VelocityProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#VelocityProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#VelocityProbe.Summation)                                                                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#VelocityProbe.LocationMethod)                                                                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#VelocityProbe.GeometryLocation)                                                                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#VelocityProbe.CoordinateSystemSelection)                                                   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#VelocityProbe.BoundaryConditionSelection)                                                 | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#VelocityProbe.ContactRegionSelection)                                                         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#VelocityProbe.RemotePointSelection)                                                             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#VelocityProbe.BeamSelection)                                                                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#VelocityProbe.MeshConnectionSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#VelocityProbe.SurfaceSelection)                                                                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#VelocityProbe.SpringSelection)                                                                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#VelocityProbe.IsSolved)                                                                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#VelocityProbe.Orientation)                                                                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#VelocityProbe.IterationNumber)                                                                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#VelocityProbe.LoadStep)                                                                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#VelocityProbe.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#VelocityProbe.Substep)                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#VelocityProbe.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#VelocityProbe.MaximumTotal)                                                                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#VelocityProbe.MaximumXAxis)                                                                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#VelocityProbe.MaximumYAxis)                                                                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#VelocityProbe.MaximumZAxis)                                                                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#VelocityProbe.MinimumTotal)                                                                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#VelocityProbe.MinimumXAxis)                                                                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#VelocityProbe.MinimumYAxis)                                                                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#VelocityProbe.MinimumZAxis)                                                                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#VelocityProbe.Time)                                                                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#VelocityProbe.Total)                                                                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#VelocityProbe.XAxis)                                                                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#VelocityProbe.YAxis)                                                                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#VelocityProbe.ZAxis)                                                                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#VelocityProbe.ResultSelection)                                                                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#VelocityProbe.SpatialResolution)                                                                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#VelocityProbe.Type)                                                                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#VelocityProbe.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#VelocityProbe.Suppressed)                                                                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#VelocityProbe.Children)                                                                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#VelocityProbe.Comments)                                                                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#VelocityProbe.Figures)                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#VelocityProbe.Images)                                                                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#VelocityProbe.Properties)                                                                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#VelocityProbe.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import VelocityProbe
```

<a id="property-detail"></a>

## Property detail

<a id="VelocityProbe.InternalObject"></a>

### *property* VelocityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.DataModelObjectCategory"></a>

### *property* VelocityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Summation"></a>

### *property* VelocityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.LocationMethod"></a>

### *property* VelocityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.GeometryLocation"></a>

### *property* VelocityProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.CoordinateSystemSelection"></a>

### *property* VelocityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.BoundaryConditionSelection"></a>

### *property* VelocityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.ContactRegionSelection"></a>

### *property* VelocityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.RemotePointSelection"></a>

### *property* VelocityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.BeamSelection"></a>

### *property* VelocityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MeshConnectionSelection"></a>

### *property* VelocityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.SurfaceSelection"></a>

### *property* VelocityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.SpringSelection"></a>

### *property* VelocityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.IsSolved"></a>

### *property* VelocityProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Orientation"></a>

### *property* VelocityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.IterationNumber"></a>

### *property* VelocityProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.LoadStep"></a>

### *property* VelocityProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.LoadStepNumber"></a>

### *property* VelocityProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Substep"></a>

### *property* VelocityProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.DisplayTime"></a>

### *property* VelocityProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MaximumTotal"></a>

### *property* VelocityProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MaximumXAxis"></a>

### *property* VelocityProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MaximumYAxis"></a>

### *property* VelocityProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MaximumZAxis"></a>

### *property* VelocityProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MinimumTotal"></a>

### *property* VelocityProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MinimumXAxis"></a>

### *property* VelocityProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MinimumYAxis"></a>

### *property* VelocityProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.MinimumZAxis"></a>

### *property* VelocityProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Time"></a>

### *property* VelocityProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Total"></a>

### *property* VelocityProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.XAxis"></a>

### *property* VelocityProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.YAxis"></a>

### *property* VelocityProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.ZAxis"></a>

### *property* VelocityProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.ResultSelection"></a>

### *property* VelocityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.SpatialResolution"></a>

### *property* VelocityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Type"></a>

### *property* VelocityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.DpfEvaluation"></a>

### *property* VelocityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Suppressed"></a>

### *property* VelocityProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Children"></a>

### *property* VelocityProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Comments"></a>

### *property* VelocityProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Figures"></a>

### *property* VelocityProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Images"></a>

### *property* VelocityProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* VelocityProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Properties"></a>

### *property* VelocityProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.VisibleProperties"></a>

### *property* VelocityProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VelocityProbe.ExportAnimation"></a>

### VelocityProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.ClearGeneratedData"></a>

### VelocityProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.DuplicateWithoutResults"></a>

### VelocityProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.EvaluateAllResults"></a>

### VelocityProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.SnapToMeshNodes"></a>

### VelocityProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.RenameBasedOnDefinition"></a>

### VelocityProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Delete"></a>

### VelocityProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.GetChildren"></a>

### VelocityProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### VelocityProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.AddComment"></a>

### VelocityProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.AddFigure"></a>

### VelocityProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.AddImage"></a>

### VelocityProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Activate"></a>

### VelocityProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.CopyTo"></a>

### VelocityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.Duplicate"></a>

### VelocityProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.GroupAllSimilarChildren"></a>

### VelocityProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.GroupSimilarObjects"></a>

### VelocityProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.PropertyByName"></a>

### VelocityProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.PropertyByAPIName"></a>

### VelocityProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.CreateParameter"></a>

### VelocityProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.GetParameter"></a>

### VelocityProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VelocityProbe.RemoveParameter"></a>

### VelocityProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
