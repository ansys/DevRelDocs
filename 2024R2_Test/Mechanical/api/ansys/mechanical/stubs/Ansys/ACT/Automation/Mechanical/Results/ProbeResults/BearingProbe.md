# BearingProbe

### *class* BearingProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltPretensionProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#BearingProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#BearingProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#BearingProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#BearingProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#BearingProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#BearingProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BearingProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BearingProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BearingProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BearingProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BearingProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BearingProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BearingProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BearingProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BearingProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BearingProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BearingProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#BearingProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BearingProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BearingProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ScaleFactorValue`](#BearingProbe.ScaleFactorValue)                                                                      | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| [`ReportedFrequency`](#BearingProbe.ReportedFrequency)                                                                    | Gets the ReportedFrequency.                                                                                                                                                |
| [`DampingForce1`](#BearingProbe.DampingForce1)                                                                            | Gets the DampingForce1.                                                                                                                                                    |
| [`DampingForce2`](#BearingProbe.DampingForce2)                                                                            | Gets the DampingForce2.                                                                                                                                                    |
| [`Elongation1`](#BearingProbe.Elongation1)                                                                                | Gets the Elongation1.                                                                                                                                                      |
| [`Elongation2`](#BearingProbe.Elongation2)                                                                                | Gets the Elongation2.                                                                                                                                                      |
| [`ElasticForce1`](#BearingProbe.ElasticForce1)                                                                            | Gets the ElasticForce1.                                                                                                                                                    |
| [`ElasticForce2`](#BearingProbe.ElasticForce2)                                                                            | Gets the ElasticForce2.                                                                                                                                                    |
| [`Velocity1`](#BearingProbe.Velocity1)                                                                                    | Gets the Velocity1.                                                                                                                                                        |
| [`Velocity2`](#BearingProbe.Velocity2)                                                                                    | Gets the Velocity2.                                                                                                                                                        |
| [`MaximumDampingForce1`](#BearingProbe.MaximumDampingForce1)                                                              | Gets the MaximumDampingForce1.                                                                                                                                             |
| [`MaximumDampingForce2`](#BearingProbe.MaximumDampingForce2)                                                              | Gets the MaximumDampingForce2.                                                                                                                                             |
| [`MaximumElongation1`](#BearingProbe.MaximumElongation1)                                                                  | Gets the MaximumElongation1.                                                                                                                                               |
| [`MaximumElongation2`](#BearingProbe.MaximumElongation2)                                                                  | Gets the MaximumElongation2.                                                                                                                                               |
| [`MaximumElasticForce1`](#BearingProbe.MaximumElasticForce1)                                                              | Gets the MaximumElasticForce1.                                                                                                                                             |
| [`MaximumElasticForce2`](#BearingProbe.MaximumElasticForce2)                                                              | Gets the MaximumElasticForce2.                                                                                                                                             |
| [`MaximumVelocity1`](#BearingProbe.MaximumVelocity1)                                                                      | Gets the MaximumVelocity1.                                                                                                                                                 |
| [`MaximumVelocity2`](#BearingProbe.MaximumVelocity2)                                                                      | Gets the MaximumVelocity2.                                                                                                                                                 |
| [`MinimumDampingForce1`](#BearingProbe.MinimumDampingForce1)                                                              | Gets the MinimumDampingForce1.                                                                                                                                             |
| [`MinimumDampingForce2`](#BearingProbe.MinimumDampingForce2)                                                              | Gets the MinimumDampingForce2.                                                                                                                                             |
| [`MinimumElongation1`](#BearingProbe.MinimumElongation1)                                                                  | Gets the MinimumElongation1.                                                                                                                                               |
| [`MinimumElongation2`](#BearingProbe.MinimumElongation2)                                                                  | Gets the MinimumElongation2.                                                                                                                                               |
| [`MinimumElasticForce1`](#BearingProbe.MinimumElasticForce1)                                                              | Gets the MinimumElasticForce1.                                                                                                                                             |
| [`MinimumElasticForce2`](#BearingProbe.MinimumElasticForce2)                                                              | Gets the MinimumElasticForce2.                                                                                                                                             |
| [`MinimumVelocity1`](#BearingProbe.MinimumVelocity1)                                                                      | Gets the MinimumVelocity1.                                                                                                                                                 |
| [`MinimumVelocity2`](#BearingProbe.MinimumVelocity2)                                                                      | Gets the MinimumVelocity2.                                                                                                                                                 |
| [`SweepingPhase`](#BearingProbe.SweepingPhase)                                                                            | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`PhaseIncrement`](#BearingProbe.PhaseIncrement)                                                                          | Gets or sets the PhaseIncrement.                                                                                                                                           |
| [`ScaleFactor`](#BearingProbe.ScaleFactor)                                                                                | Gets or sets the ScaleFactor.                                                                                                                                              |
| [`By`](#BearingProbe.By)                                                                                                  | Gets or sets the By.                                                                                                                                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#BearingProbe.Summation)                                                                                    | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#BearingProbe.LocationMethod)                                                                          | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#BearingProbe.GeometryLocation)                                                                      | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#BearingProbe.CoordinateSystemSelection)                                                    | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#BearingProbe.BoundaryConditionSelection)                                                  | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#BearingProbe.ContactRegionSelection)                                                          | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#BearingProbe.RemotePointSelection)                                                              | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#BearingProbe.BeamSelection)                                                                            | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#BearingProbe.MeshConnectionSelection)                                                        | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#BearingProbe.SurfaceSelection)                                                                      | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#BearingProbe.SpringSelection)                                                                        | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#BearingProbe.IsSolved)                                                                                      | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#BearingProbe.Orientation)                                                                                | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#BearingProbe.IterationNumber)                                                                        | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#BearingProbe.LoadStep)                                                                                      | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#BearingProbe.LoadStepNumber)                                                                          | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#BearingProbe.Substep)                                                                                        | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#BearingProbe.DisplayTime)                                                                                | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#BearingProbe.MaximumTotal)                                                                              | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#BearingProbe.MaximumXAxis)                                                                              | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#BearingProbe.MaximumYAxis)                                                                              | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#BearingProbe.MaximumZAxis)                                                                              | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#BearingProbe.MinimumTotal)                                                                              | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#BearingProbe.MinimumXAxis)                                                                              | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#BearingProbe.MinimumYAxis)                                                                              | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#BearingProbe.MinimumZAxis)                                                                              | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#BearingProbe.Time)                                                                                              | Gets the Time.                                                                                                                                                             |
| [`Total`](#BearingProbe.Total)                                                                                            | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#BearingProbe.XAxis)                                                                                            | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#BearingProbe.YAxis)                                                                                            | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#BearingProbe.ZAxis)                                                                                            | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#BearingProbe.ResultSelection)                                                                        | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#BearingProbe.SpatialResolution)                                                                    | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#BearingProbe.Type)                                                                                              | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#BearingProbe.DpfEvaluation)                                                                            | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#BearingProbe.Suppressed)                                                                                  | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#BearingProbe.Children)                                                                                      | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#BearingProbe.Comments)                                                                                      | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#BearingProbe.Figures)                                                                                        | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#BearingProbe.Images)                                                                                          | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#BearingProbe.Properties)                                                                                  | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#BearingProbe.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import BearingProbe
```

## Property detail

### *property* BearingProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.DampingForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingForce1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.DampingForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingForce2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Elongation1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elongation1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Elongation2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elongation2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ElasticForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElasticForce1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ElasticForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElasticForce2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Velocity1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Velocity1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Velocity2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Velocity2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumDampingForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumDampingForce1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumDampingForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumDampingForce2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumElongation1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElongation1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumElongation2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElongation2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumElasticForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElasticForce1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumElasticForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElasticForce2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumVelocity1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumVelocity1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumVelocity2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumVelocity2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumDampingForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDampingForce1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumDampingForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDampingForce2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumElongation1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElongation1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumElongation2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElongation2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumElasticForce1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElasticForce1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumElasticForce2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElasticForce2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumVelocity1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumVelocity1.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumVelocity2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumVelocity2.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BearingProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### BearingProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BearingProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BearingProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BearingProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BearingProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BearingProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BearingProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BearingProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BearingProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BearingProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BearingProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BearingProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BearingProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BearingProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
