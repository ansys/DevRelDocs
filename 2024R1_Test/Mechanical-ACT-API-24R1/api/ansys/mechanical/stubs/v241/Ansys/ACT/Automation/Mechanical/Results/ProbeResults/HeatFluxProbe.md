<!-- vale off -->

<a id="heatfluxprobe"></a>

# `HeatFluxProbe`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.HeatFluxProbe"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.HeatFluxProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HeatFluxProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#HeatFluxProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#HeatFluxProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#HeatFluxProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#HeatFluxProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#HeatFluxProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#HeatFluxProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#HeatFluxProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#HeatFluxProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#HeatFluxProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#HeatFluxProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#HeatFluxProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#HeatFluxProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#HeatFluxProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#HeatFluxProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HeatFluxProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#HeatFluxProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#HeatFluxProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#HeatFluxProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#HeatFluxProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#HeatFluxProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`TotalHeatFlux`](#HeatFluxProbe.TotalHeatFlux)                           | Gets the TotalHeatFlux.                                                                                                                                                    |
| [`XAxisHeatFlux`](#HeatFluxProbe.XAxisHeatFlux)                           | Gets the XAxisHeatFlux.                                                                                                                                                    |
| [`YAxisHeatFlux`](#HeatFluxProbe.YAxisHeatFlux)                           | Gets the YAxisHeatFlux.                                                                                                                                                    |
| [`ZAxisHeatFlux`](#HeatFluxProbe.ZAxisHeatFlux)                           | Gets the ZAxisHeatFlux.                                                                                                                                                    |
| [`XCoordinate`](#HeatFluxProbe.XCoordinate)                               | Gets the XCoordinate.                                                                                                                                                      |
| [`YCoordinate`](#HeatFluxProbe.YCoordinate)                               | Gets the YCoordinate.                                                                                                                                                      |
| [`ZCoordinate`](#HeatFluxProbe.ZCoordinate)                               | Gets the ZCoordinate.                                                                                                                                                      |
| [`MaximumTotalHeatFlux`](#HeatFluxProbe.MaximumTotalHeatFlux)             | Gets the MaximumTotalHeatFlux.                                                                                                                                             |
| [`MaximumXAxisHeatFlux`](#HeatFluxProbe.MaximumXAxisHeatFlux)             | Gets the MaximumXAxisHeatFlux.                                                                                                                                             |
| [`MaximumYAxisHeatFlux`](#HeatFluxProbe.MaximumYAxisHeatFlux)             | Gets the MaximumYAxisHeatFlux.                                                                                                                                             |
| [`MaximumZAxisHeatFlux`](#HeatFluxProbe.MaximumZAxisHeatFlux)             | Gets the MaximumZAxisHeatFlux.                                                                                                                                             |
| [`MinimumTotalHeatFlux`](#HeatFluxProbe.MinimumTotalHeatFlux)             | Gets the MinimumTotalHeatFlux.                                                                                                                                             |
| [`MinimumXAxisHeatFlux`](#HeatFluxProbe.MinimumXAxisHeatFlux)             | Gets the MinimumXAxisHeatFlux.                                                                                                                                             |
| [`MinimumYAxisHeatFlux`](#HeatFluxProbe.MinimumYAxisHeatFlux)             | Gets the MinimumYAxisHeatFlux.                                                                                                                                             |
| [`MinimumZAxisHeatFlux`](#HeatFluxProbe.MinimumZAxisHeatFlux)             | Gets the MinimumZAxisHeatFlux.                                                                                                                                             |
| [`DataModelObjectCategory`](#HeatFluxProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#HeatFluxProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#HeatFluxProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#HeatFluxProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#HeatFluxProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#HeatFluxProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#HeatFluxProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#HeatFluxProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#HeatFluxProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#HeatFluxProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#HeatFluxProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#HeatFluxProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#HeatFluxProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#HeatFluxProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#HeatFluxProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#HeatFluxProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#HeatFluxProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#HeatFluxProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#HeatFluxProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#HeatFluxProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#HeatFluxProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#HeatFluxProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#HeatFluxProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#HeatFluxProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#HeatFluxProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#HeatFluxProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#HeatFluxProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#HeatFluxProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#HeatFluxProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#HeatFluxProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#HeatFluxProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#HeatFluxProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#HeatFluxProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#HeatFluxProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#HeatFluxProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#HeatFluxProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#HeatFluxProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#HeatFluxProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#HeatFluxProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#HeatFluxProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#HeatFluxProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#HeatFluxProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#HeatFluxProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="HeatFluxProbe.InternalObject"></a>

### *property* HeatFluxProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.TotalHeatFlux"></a>

### *property* HeatFluxProbe.TotalHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.XAxisHeatFlux"></a>

### *property* HeatFluxProbe.XAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.YAxisHeatFlux"></a>

### *property* HeatFluxProbe.YAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ZAxisHeatFlux"></a>

### *property* HeatFluxProbe.ZAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.XCoordinate"></a>

### *property* HeatFluxProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.YCoordinate"></a>

### *property* HeatFluxProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ZCoordinate"></a>

### *property* HeatFluxProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumTotalHeatFlux"></a>

### *property* HeatFluxProbe.MaximumTotalHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumXAxisHeatFlux"></a>

### *property* HeatFluxProbe.MaximumXAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumYAxisHeatFlux"></a>

### *property* HeatFluxProbe.MaximumYAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumZAxisHeatFlux"></a>

### *property* HeatFluxProbe.MaximumZAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumTotalHeatFlux"></a>

### *property* HeatFluxProbe.MinimumTotalHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumXAxisHeatFlux"></a>

### *property* HeatFluxProbe.MinimumXAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumYAxisHeatFlux"></a>

### *property* HeatFluxProbe.MinimumYAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumZAxisHeatFlux"></a>

### *property* HeatFluxProbe.MinimumZAxisHeatFlux *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DataModelObjectCategory"></a>

### *property* HeatFluxProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Summation"></a>

### *property* HeatFluxProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.LocationMethod"></a>

### *property* HeatFluxProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GeometryLocation"></a>

### *property* HeatFluxProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.CoordinateSystemSelection"></a>

### *property* HeatFluxProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.BoundaryConditionSelection"></a>

### *property* HeatFluxProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ContactRegionSelection"></a>

### *property* HeatFluxProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RemotePointSelection"></a>

### *property* HeatFluxProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.BeamSelection"></a>

### *property* HeatFluxProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MeshConnectionSelection"></a>

### *property* HeatFluxProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SurfaceSelection"></a>

### *property* HeatFluxProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SpringSelection"></a>

### *property* HeatFluxProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.IsSolved"></a>

### *property* HeatFluxProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Orientation"></a>

### *property* HeatFluxProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.IterationNumber"></a>

### *property* HeatFluxProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.LoadStep"></a>

### *property* HeatFluxProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.LoadStepNumber"></a>

### *property* HeatFluxProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Substep"></a>

### *property* HeatFluxProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DisplayTime"></a>

### *property* HeatFluxProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumTotal"></a>

### *property* HeatFluxProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumXAxis"></a>

### *property* HeatFluxProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumYAxis"></a>

### *property* HeatFluxProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumZAxis"></a>

### *property* HeatFluxProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumTotal"></a>

### *property* HeatFluxProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumXAxis"></a>

### *property* HeatFluxProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumYAxis"></a>

### *property* HeatFluxProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumZAxis"></a>

### *property* HeatFluxProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Time"></a>

### *property* HeatFluxProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Total"></a>

### *property* HeatFluxProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.XAxis"></a>

### *property* HeatFluxProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.YAxis"></a>

### *property* HeatFluxProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ZAxis"></a>

### *property* HeatFluxProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ResultSelection"></a>

### *property* HeatFluxProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SpatialResolution"></a>

### *property* HeatFluxProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Type"></a>

### *property* HeatFluxProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DpfEvaluation"></a>

### *property* HeatFluxProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Suppressed"></a>

### *property* HeatFluxProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Children"></a>

### *property* HeatFluxProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Comments"></a>

### *property* HeatFluxProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Figures"></a>

### *property* HeatFluxProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Images"></a>

### *property* HeatFluxProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* HeatFluxProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Properties"></a>

### *property* HeatFluxProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.VisibleProperties"></a>

### *property* HeatFluxProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HeatFluxProbe.ExportAnimation"></a>

### HeatFluxProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ClearGeneratedData"></a>

### HeatFluxProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DuplicateWithoutResults"></a>

### HeatFluxProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.EvaluateAllResults"></a>

### HeatFluxProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SnapToMeshNodes"></a>

### HeatFluxProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RenameBasedOnDefinition"></a>

### HeatFluxProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Delete"></a>

### HeatFluxProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetChildren"></a>

### HeatFluxProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### HeatFluxProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.AddComment"></a>

### HeatFluxProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.AddFigure"></a>

### HeatFluxProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.AddImage"></a>

### HeatFluxProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Activate"></a>

### HeatFluxProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.CopyTo"></a>

### HeatFluxProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Duplicate"></a>

### HeatFluxProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GroupAllSimilarChildren"></a>

### HeatFluxProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GroupSimilarObjects"></a>

### HeatFluxProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.PropertyByName"></a>

### HeatFluxProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.PropertyByAPIName"></a>

### HeatFluxProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.CreateParameter"></a>

### HeatFluxProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetParameter"></a>

### HeatFluxProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RemoveParameter"></a>

### HeatFluxProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
