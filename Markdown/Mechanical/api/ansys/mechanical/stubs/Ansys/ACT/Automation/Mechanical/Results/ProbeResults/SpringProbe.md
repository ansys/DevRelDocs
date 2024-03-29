# SpringProbe

### *class* SpringProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltPretensionProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#SpringProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#SpringProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#SpringProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#SpringProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#SpringProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#SpringProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#SpringProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SpringProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SpringProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SpringProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#SpringProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#SpringProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SpringProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SpringProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SpringProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SpringProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SpringProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#SpringProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SpringProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SpringProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ScaleFactorValue`](#SpringProbe.ScaleFactorValue)                                                                       | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| [`Frequency`](#SpringProbe.Frequency)                                                                                     | Gets or sets the Frequency.                                                                                                                                                |
| [`MaximumDampingForce`](#SpringProbe.MaximumDampingForce)                                                                 | Gets the MaximumDampingForce.                                                                                                                                              |
| [`MaximumElongation`](#SpringProbe.MaximumElongation)                                                                     | Gets the MaximumElongation.                                                                                                                                                |
| [`MaximumElasticForce`](#SpringProbe.MaximumElasticForce)                                                                 | Gets the MaximumElasticForce.                                                                                                                                              |
| [`MaximumVelocity`](#SpringProbe.MaximumVelocity)                                                                         | Gets the MaximumVelocity.                                                                                                                                                  |
| [`MinimumDampingForce`](#SpringProbe.MinimumDampingForce)                                                                 | Gets the MinimumDampingForce.                                                                                                                                              |
| [`MinimumElongation`](#SpringProbe.MinimumElongation)                                                                     | Gets the MinimumElongation.                                                                                                                                                |
| [`MinimumElasticForce`](#SpringProbe.MinimumElasticForce)                                                                 | Gets the MinimumElasticForce.                                                                                                                                              |
| [`MinimumVelocity`](#SpringProbe.MinimumVelocity)                                                                         | Gets the MinimumVelocity.                                                                                                                                                  |
| [`SweepingPhase`](#SpringProbe.SweepingPhase)                                                                             | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`DampingForce`](#SpringProbe.DampingForce)                                                                               | Gets the DampingForce.                                                                                                                                                     |
| [`Elongation`](#SpringProbe.Elongation)                                                                                   | Gets the Elongation.                                                                                                                                                       |
| [`ElasticForce`](#SpringProbe.ElasticForce)                                                                               | Gets the ElasticForce.                                                                                                                                                     |
| [`Velocity`](../../BoundaryConditions/Velocity.md#Velocity)                                                               | Gets the Velocity.                                                                                                                                                         |
| [`ScaleFactor`](#SpringProbe.ScaleFactor)                                                                                 | Gets or sets the ScaleFactor.                                                                                                                                              |
| [`By`](#SpringProbe.By)                                                                                                   | Gets or sets the By.                                                                                                                                                       |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                                                                                                   |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#SpringProbe.Summation)                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#SpringProbe.LocationMethod)                                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#SpringProbe.GeometryLocation)                                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#SpringProbe.CoordinateSystemSelection)                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#SpringProbe.BoundaryConditionSelection)                                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#SpringProbe.ContactRegionSelection)                                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#SpringProbe.RemotePointSelection)                                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#SpringProbe.BeamSelection)                                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#SpringProbe.MeshConnectionSelection)                                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#SpringProbe.SurfaceSelection)                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#SpringProbe.SpringSelection)                                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#SpringProbe.IsSolved)                                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#SpringProbe.Orientation)                                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#SpringProbe.IterationNumber)                                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#SpringProbe.LoadStep)                                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#SpringProbe.LoadStepNumber)                                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#SpringProbe.Substep)                                                                                         | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#SpringProbe.DisplayTime)                                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#SpringProbe.MaximumTotal)                                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#SpringProbe.MaximumXAxis)                                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#SpringProbe.MaximumYAxis)                                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#SpringProbe.MaximumZAxis)                                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#SpringProbe.MinimumTotal)                                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#SpringProbe.MinimumXAxis)                                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#SpringProbe.MinimumYAxis)                                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#SpringProbe.MinimumZAxis)                                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#SpringProbe.Time)                                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#SpringProbe.Total)                                                                                             | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#SpringProbe.XAxis)                                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#SpringProbe.YAxis)                                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#SpringProbe.ZAxis)                                                                                             | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#SpringProbe.ResultSelection)                                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#SpringProbe.SpatialResolution)                                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#SpringProbe.Type)                                                                                               | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#SpringProbe.DpfEvaluation)                                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#SpringProbe.Suppressed)                                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#SpringProbe.Children)                                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#SpringProbe.Comments)                                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#SpringProbe.Figures)                                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#SpringProbe.Images)                                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#SpringProbe.Properties)                                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#SpringProbe.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import SpringProbe
```

## Property detail

### *property* SpringProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumDampingForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumDampingForce.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumElongation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElongation.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumElasticForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElasticForce.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumVelocity.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumDampingForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDampingForce.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumElongation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElongation.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumElasticForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElasticForce.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumVelocity.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.DampingForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingForce.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Elongation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Elongation.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.ElasticForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElasticForce.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Velocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Velocity.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SpringProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### SpringProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### SpringProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpringProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SpringProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SpringProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SpringProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### SpringProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SpringProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SpringProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SpringProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SpringProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SpringProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### SpringProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SpringProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SpringProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
