# FluxDensityProbe

### *class* FluxDensityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluxDensityProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#FluxDensityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FluxDensityProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#FluxDensityProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FluxDensityProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#FluxDensityProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#FluxDensityProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FluxDensityProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluxDensityProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluxDensityProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluxDensityProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluxDensityProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluxDensityProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluxDensityProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluxDensityProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluxDensityProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluxDensityProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluxDensityProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FluxDensityProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FluxDensityProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluxDensityProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Probability`](#FluxDensityProbe.Probability)                                                                            | Gets the Probability.                                                                                                                                                      |
| [`TotalFluxDensity`](#FluxDensityProbe.TotalFluxDensity)                                                                  | Gets the TotalFluxDensity.                                                                                                                                                 |
| [`XAxisFluxDensity`](#FluxDensityProbe.XAxisFluxDensity)                                                                  | Gets the XAxisFluxDensity.                                                                                                                                                 |
| [`YAxisFluxDensity`](#FluxDensityProbe.YAxisFluxDensity)                                                                  | Gets the YAxisFluxDensity.                                                                                                                                                 |
| [`ZAxisFluxDensity`](#FluxDensityProbe.ZAxisFluxDensity)                                                                  | Gets the ZAxisFluxDensity.                                                                                                                                                 |
| [`XCoordinate`](#FluxDensityProbe.XCoordinate)                                                                            | Gets the XCoordinate.                                                                                                                                                      |
| [`YCoordinate`](#FluxDensityProbe.YCoordinate)                                                                            | Gets the YCoordinate.                                                                                                                                                      |
| [`ZCoordinate`](#FluxDensityProbe.ZCoordinate)                                                                            | Gets the ZCoordinate.                                                                                                                                                      |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#FluxDensityProbe.Summation)                                                                                | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FluxDensityProbe.LocationMethod)                                                                      | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FluxDensityProbe.GeometryLocation)                                                                  | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FluxDensityProbe.CoordinateSystemSelection)                                                | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FluxDensityProbe.BoundaryConditionSelection)                                              | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FluxDensityProbe.ContactRegionSelection)                                                      | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FluxDensityProbe.RemotePointSelection)                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FluxDensityProbe.BeamSelection)                                                                        | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FluxDensityProbe.MeshConnectionSelection)                                                    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FluxDensityProbe.SurfaceSelection)                                                                  | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FluxDensityProbe.SpringSelection)                                                                    | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FluxDensityProbe.IsSolved)                                                                                  | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FluxDensityProbe.Orientation)                                                                            | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FluxDensityProbe.IterationNumber)                                                                    | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FluxDensityProbe.LoadStep)                                                                                  | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FluxDensityProbe.LoadStepNumber)                                                                      | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FluxDensityProbe.Substep)                                                                                    | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FluxDensityProbe.DisplayTime)                                                                            | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FluxDensityProbe.MaximumTotal)                                                                          | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FluxDensityProbe.MaximumXAxis)                                                                          | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FluxDensityProbe.MaximumYAxis)                                                                          | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FluxDensityProbe.MaximumZAxis)                                                                          | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FluxDensityProbe.MinimumTotal)                                                                          | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FluxDensityProbe.MinimumXAxis)                                                                          | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FluxDensityProbe.MinimumYAxis)                                                                          | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FluxDensityProbe.MinimumZAxis)                                                                          | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FluxDensityProbe.Time)                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#FluxDensityProbe.Total)                                                                                        | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FluxDensityProbe.XAxis)                                                                                        | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FluxDensityProbe.YAxis)                                                                                        | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FluxDensityProbe.ZAxis)                                                                                        | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FluxDensityProbe.ResultSelection)                                                                    | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FluxDensityProbe.SpatialResolution)                                                                | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FluxDensityProbe.Type)                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FluxDensityProbe.DpfEvaluation)                                                                        | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FluxDensityProbe.Suppressed)                                                                              | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FluxDensityProbe.Children)                                                                                  | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FluxDensityProbe.Comments)                                                                                  | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FluxDensityProbe.Figures)                                                                                    | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FluxDensityProbe.Images)                                                                                      | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FluxDensityProbe.Properties)                                                                              | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FluxDensityProbe.VisibleProperties)                                                                | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import FluxDensityProbe
```

## Property detail

### *property* FluxDensityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.TotalFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalFluxDensity.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.XAxisFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisFluxDensity.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.YAxisFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisFluxDensity.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.ZAxisFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisFluxDensity.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FluxDensityProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FluxDensityProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FluxDensityProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
