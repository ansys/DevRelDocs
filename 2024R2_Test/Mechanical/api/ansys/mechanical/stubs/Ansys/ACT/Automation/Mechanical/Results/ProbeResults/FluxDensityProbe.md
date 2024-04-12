<a id="fluxdensityprobe"></a>

# FluxDensityProbe

<a id="FluxDensityProbe"></a>

### *class* FluxDensityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FluxDensityProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#FluxDensityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
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

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import FluxDensityProbe
```

<a id="property-detail"></a>

## Property detail

<a id="FluxDensityProbe.InternalObject"></a>

### *property* FluxDensityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Probability"></a>

### *property* FluxDensityProbe.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.TotalFluxDensity"></a>

### *property* FluxDensityProbe.TotalFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.XAxisFluxDensity"></a>

### *property* FluxDensityProbe.XAxisFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.YAxisFluxDensity"></a>

### *property* FluxDensityProbe.YAxisFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.ZAxisFluxDensity"></a>

### *property* FluxDensityProbe.ZAxisFluxDensity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.XCoordinate"></a>

### *property* FluxDensityProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.YCoordinate"></a>

### *property* FluxDensityProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.ZCoordinate"></a>

### *property* FluxDensityProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.DataModelObjectCategory"></a>

### *property* FluxDensityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Summation"></a>

### *property* FluxDensityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.LocationMethod"></a>

### *property* FluxDensityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.GeometryLocation"></a>

### *property* FluxDensityProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.CoordinateSystemSelection"></a>

### *property* FluxDensityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.BoundaryConditionSelection"></a>

### *property* FluxDensityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.ContactRegionSelection"></a>

### *property* FluxDensityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.RemotePointSelection"></a>

### *property* FluxDensityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.BeamSelection"></a>

### *property* FluxDensityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MeshConnectionSelection"></a>

### *property* FluxDensityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.SurfaceSelection"></a>

### *property* FluxDensityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.SpringSelection"></a>

### *property* FluxDensityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.IsSolved"></a>

### *property* FluxDensityProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Orientation"></a>

### *property* FluxDensityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.IterationNumber"></a>

### *property* FluxDensityProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.LoadStep"></a>

### *property* FluxDensityProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.LoadStepNumber"></a>

### *property* FluxDensityProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Substep"></a>

### *property* FluxDensityProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.DisplayTime"></a>

### *property* FluxDensityProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MaximumTotal"></a>

### *property* FluxDensityProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MaximumXAxis"></a>

### *property* FluxDensityProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MaximumYAxis"></a>

### *property* FluxDensityProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MaximumZAxis"></a>

### *property* FluxDensityProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MinimumTotal"></a>

### *property* FluxDensityProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MinimumXAxis"></a>

### *property* FluxDensityProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MinimumYAxis"></a>

### *property* FluxDensityProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.MinimumZAxis"></a>

### *property* FluxDensityProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Time"></a>

### *property* FluxDensityProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Total"></a>

### *property* FluxDensityProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.XAxis"></a>

### *property* FluxDensityProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.YAxis"></a>

### *property* FluxDensityProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.ZAxis"></a>

### *property* FluxDensityProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.ResultSelection"></a>

### *property* FluxDensityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.SpatialResolution"></a>

### *property* FluxDensityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Type"></a>

### *property* FluxDensityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.DpfEvaluation"></a>

### *property* FluxDensityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Suppressed"></a>

### *property* FluxDensityProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Children"></a>

### *property* FluxDensityProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Comments"></a>

### *property* FluxDensityProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Figures"></a>

### *property* FluxDensityProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Images"></a>

### *property* FluxDensityProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FluxDensityProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Properties"></a>

### *property* FluxDensityProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.VisibleProperties"></a>

### *property* FluxDensityProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluxDensityProbe.ExportAnimation"></a>

### FluxDensityProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.ClearGeneratedData"></a>

### FluxDensityProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.DuplicateWithoutResults"></a>

### FluxDensityProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.EvaluateAllResults"></a>

### FluxDensityProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.SnapToMeshNodes"></a>

### FluxDensityProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.RenameBasedOnDefinition"></a>

### FluxDensityProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Delete"></a>

### FluxDensityProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.GetChildren"></a>

### FluxDensityProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FluxDensityProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.AddComment"></a>

### FluxDensityProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.AddFigure"></a>

### FluxDensityProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.AddImage"></a>

### FluxDensityProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Activate"></a>

### FluxDensityProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.CopyTo"></a>

### FluxDensityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.Duplicate"></a>

### FluxDensityProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.GroupAllSimilarChildren"></a>

### FluxDensityProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.GroupSimilarObjects"></a>

### FluxDensityProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.PropertyByName"></a>

### FluxDensityProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.PropertyByAPIName"></a>

### FluxDensityProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.CreateParameter"></a>

### FluxDensityProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.GetParameter"></a>

### FluxDensityProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluxDensityProbe.RemoveParameter"></a>

### FluxDensityProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
