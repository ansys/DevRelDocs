# `TemperatureProbe`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.TemperatureProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TemperatureProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#TemperatureProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#TemperatureProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#TemperatureProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#TemperatureProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#TemperatureProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#TemperatureProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#TemperatureProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#TemperatureProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#TemperatureProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#TemperatureProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#TemperatureProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#TemperatureProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TemperatureProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TemperatureProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TemperatureProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TemperatureProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TemperatureProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#TemperatureProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TemperatureProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TemperatureProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`XCoordinate`](#TemperatureProbe.XCoordinate)                               | Gets the XCoordinate.                                                                                                                                                      |
| [`YCoordinate`](#TemperatureProbe.YCoordinate)                               | Gets the YCoordinate.                                                                                                                                                      |
| [`ZCoordinate`](#TemperatureProbe.ZCoordinate)                               | Gets the ZCoordinate.                                                                                                                                                      |
| [`MaximumTemperature`](#TemperatureProbe.MaximumTemperature)                 | Gets the MaximumTemperature.                                                                                                                                               |
| [`MinimumTemperature`](#TemperatureProbe.MinimumTemperature)                 | Gets the MinimumTemperature.                                                                                                                                               |
| [`Temperature`](#TemperatureProbe.Temperature)                               | Gets the Temperature.                                                                                                                                                      |
| [`DataModelObjectCategory`](#TemperatureProbe.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`Summation`](#TemperatureProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#TemperatureProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#TemperatureProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#TemperatureProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#TemperatureProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSprings', please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`ContactRegionSelection`](#TemperatureProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#TemperatureProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#TemperatureProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#TemperatureProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#TemperatureProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#TemperatureProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#TemperatureProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#TemperatureProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#TemperatureProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#TemperatureProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#TemperatureProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#TemperatureProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#TemperatureProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#TemperatureProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#TemperatureProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#TemperatureProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#TemperatureProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#TemperatureProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#TemperatureProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#TemperatureProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#TemperatureProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#TemperatureProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#TemperatureProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#TemperatureProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#TemperatureProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#TemperatureProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#TemperatureProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#TemperatureProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#TemperatureProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#TemperatureProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#TemperatureProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#TemperatureProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#TemperatureProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#TemperatureProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#TemperatureProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#TemperatureProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#TemperatureProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="TemperatureProbe.InternalObject"></a>

### *property* TemperatureProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.XCoordinate"></a>

### *property* TemperatureProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.YCoordinate"></a>

### *property* TemperatureProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.ZCoordinate"></a>

### *property* TemperatureProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MaximumTemperature"></a>

### *property* TemperatureProbe.MaximumTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTemperature.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MinimumTemperature"></a>

### *property* TemperatureProbe.MinimumTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTemperature.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Temperature"></a>

### *property* TemperatureProbe.Temperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Temperature.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.DataModelObjectCategory"></a>

### *property* TemperatureProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Summation"></a>

### *property* TemperatureProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.LocationMethod"></a>

### *property* TemperatureProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.GeometryLocation"></a>

### *property* TemperatureProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.CoordinateSystemSelection"></a>

### *property* TemperatureProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.BoundaryConditionSelection"></a>

### *property* TemperatureProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSprings', please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.ContactRegionSelection"></a>

### *property* TemperatureProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.RemotePointSelection"></a>

### *property* TemperatureProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.BeamSelection"></a>

### *property* TemperatureProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MeshConnectionSelection"></a>

### *property* TemperatureProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.SurfaceSelection"></a>

### *property* TemperatureProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.SpringSelection"></a>

### *property* TemperatureProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.IsSolved"></a>

### *property* TemperatureProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Orientation"></a>

### *property* TemperatureProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.IterationNumber"></a>

### *property* TemperatureProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.LoadStep"></a>

### *property* TemperatureProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.LoadStepNumber"></a>

### *property* TemperatureProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Substep"></a>

### *property* TemperatureProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.DisplayTime"></a>

### *property* TemperatureProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MaximumTotal"></a>

### *property* TemperatureProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MaximumXAxis"></a>

### *property* TemperatureProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MaximumYAxis"></a>

### *property* TemperatureProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MaximumZAxis"></a>

### *property* TemperatureProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MinimumTotal"></a>

### *property* TemperatureProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MinimumXAxis"></a>

### *property* TemperatureProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MinimumYAxis"></a>

### *property* TemperatureProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.MinimumZAxis"></a>

### *property* TemperatureProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Time"></a>

### *property* TemperatureProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Total"></a>

### *property* TemperatureProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.XAxis"></a>

### *property* TemperatureProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.YAxis"></a>

### *property* TemperatureProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.ZAxis"></a>

### *property* TemperatureProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.ResultSelection"></a>

### *property* TemperatureProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.SpatialResolution"></a>

### *property* TemperatureProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Type"></a>

### *property* TemperatureProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.DpfEvaluation"></a>

### *property* TemperatureProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Suppressed"></a>

### *property* TemperatureProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Children"></a>

### *property* TemperatureProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Comments"></a>

### *property* TemperatureProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Figures"></a>

### *property* TemperatureProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Images"></a>

### *property* TemperatureProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TemperatureProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Properties"></a>

### *property* TemperatureProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.VisibleProperties"></a>

### *property* TemperatureProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TemperatureProbe.ExportAnimation"></a>

### TemperatureProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.ClearGeneratedData"></a>

### TemperatureProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.DuplicateWithoutResults"></a>

### TemperatureProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.EvaluateAllResults"></a>

### TemperatureProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.SnapToMeshNodes"></a>

### TemperatureProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.RenameBasedOnDefinition"></a>

### TemperatureProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Delete"></a>

### TemperatureProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.GetChildren"></a>

### TemperatureProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TemperatureProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.AddComment"></a>

### TemperatureProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.AddFigure"></a>

### TemperatureProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.AddImage"></a>

### TemperatureProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Activate"></a>

### TemperatureProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.CopyTo"></a>

### TemperatureProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.Duplicate"></a>

### TemperatureProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.GroupAllSimilarChildren"></a>

### TemperatureProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.GroupSimilarObjects"></a>

### TemperatureProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.PropertyByName"></a>

### TemperatureProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.PropertyByAPIName"></a>

### TemperatureProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.CreateParameter"></a>

### TemperatureProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.GetParameter"></a>

### TemperatureProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TemperatureProbe.RemoveParameter"></a>

### TemperatureProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

