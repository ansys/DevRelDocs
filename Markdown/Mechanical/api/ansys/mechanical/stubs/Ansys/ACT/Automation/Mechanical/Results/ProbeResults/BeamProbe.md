# BeamProbe

### *class* BeamProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltPretensionProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#BeamProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#BeamProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#BeamProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#BeamProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#BeamProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#BeamProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#BeamProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BeamProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BeamProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BeamProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BeamProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BeamProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BeamProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BeamProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BeamProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BeamProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BeamProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#BeamProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BeamProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BeamProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AxialForce`](#BeamProbe.AxialForce)                                                                                     | Gets the AxialForce.                                                                                                                                                       |
| [`MaximumAxialForce`](#BeamProbe.MaximumAxialForce)                                                                       | Gets the MaximumAxialForce.                                                                                                                                                |
| [`MaximumMomentAtI`](#BeamProbe.MaximumMomentAtI)                                                                         | Gets the MaximumMomentAtI.                                                                                                                                                 |
| [`MaximumMomentAtJ`](#BeamProbe.MaximumMomentAtJ)                                                                         | Gets the MaximumMomentAtJ.                                                                                                                                                 |
| [`MaximumShearForceAtI`](#BeamProbe.MaximumShearForceAtI)                                                                 | Gets the MaximumShearForceAtI.                                                                                                                                             |
| [`MaximumShearForceAtJ`](#BeamProbe.MaximumShearForceAtJ)                                                                 | Gets the MaximumShearForceAtJ.                                                                                                                                             |
| [`MaximumTorque`](#BeamProbe.MaximumTorque)                                                                               | Gets the MaximumTorque.                                                                                                                                                    |
| [`MinimumAxialForce`](#BeamProbe.MinimumAxialForce)                                                                       | Gets the MinimumAxialForce.                                                                                                                                                |
| [`MinimumMomentAtI`](#BeamProbe.MinimumMomentAtI)                                                                         | Gets the MinimumMomentAtI.                                                                                                                                                 |
| [`MinimumMomentAtJ`](#BeamProbe.MinimumMomentAtJ)                                                                         | Gets the MinimumMomentAtJ.                                                                                                                                                 |
| [`MinimumShearForceAtI`](#BeamProbe.MinimumShearForceAtI)                                                                 | Gets the MinimumShearForceAtI.                                                                                                                                             |
| [`MinimumShearForceAtJ`](#BeamProbe.MinimumShearForceAtJ)                                                                 | Gets the MinimumShearForceAtJ.                                                                                                                                             |
| [`MinimumTorque`](#BeamProbe.MinimumTorque)                                                                               | Gets the MinimumTorque.                                                                                                                                                    |
| [`MomentAtI`](#BeamProbe.MomentAtI)                                                                                       | Gets the MomentAtI.                                                                                                                                                        |
| [`MomentAtJ`](#BeamProbe.MomentAtJ)                                                                                       | Gets the MomentAtJ.                                                                                                                                                        |
| [`ShearForceAtI`](#BeamProbe.ShearForceAtI)                                                                               | Gets the ShearForceAtI.                                                                                                                                                    |
| [`ShearForceAtJ`](#BeamProbe.ShearForceAtJ)                                                                               | Gets the ShearForceAtJ.                                                                                                                                                    |
| [`Torque`](#BeamProbe.Torque)                                                                                             | Gets the Torque.                                                                                                                                                           |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#BeamProbe.Summation)                                                                                       | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#BeamProbe.LocationMethod)                                                                             | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#BeamProbe.GeometryLocation)                                                                         | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#BeamProbe.CoordinateSystemSelection)                                                       | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#BeamProbe.BoundaryConditionSelection)                                                     | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#BeamProbe.ContactRegionSelection)                                                             | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#BeamProbe.RemotePointSelection)                                                                 | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#BeamProbe.BeamSelection)                                                                               | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#BeamProbe.MeshConnectionSelection)                                                           | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#BeamProbe.SurfaceSelection)                                                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#BeamProbe.SpringSelection)                                                                           | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#BeamProbe.IsSolved)                                                                                         | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#BeamProbe.Orientation)                                                                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#BeamProbe.IterationNumber)                                                                           | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#BeamProbe.LoadStep)                                                                                         | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#BeamProbe.LoadStepNumber)                                                                             | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#BeamProbe.Substep)                                                                                           | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#BeamProbe.DisplayTime)                                                                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#BeamProbe.MaximumTotal)                                                                                 | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#BeamProbe.MaximumXAxis)                                                                                 | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#BeamProbe.MaximumYAxis)                                                                                 | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#BeamProbe.MaximumZAxis)                                                                                 | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#BeamProbe.MinimumTotal)                                                                                 | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#BeamProbe.MinimumXAxis)                                                                                 | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#BeamProbe.MinimumYAxis)                                                                                 | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#BeamProbe.MinimumZAxis)                                                                                 | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#BeamProbe.Time)                                                                                                 | Gets the Time.                                                                                                                                                             |
| [`Total`](#BeamProbe.Total)                                                                                               | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#BeamProbe.XAxis)                                                                                               | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#BeamProbe.YAxis)                                                                                               | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#BeamProbe.ZAxis)                                                                                               | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#BeamProbe.ResultSelection)                                                                           | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#BeamProbe.SpatialResolution)                                                                       | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#BeamProbe.Type)                                                                                                 | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#BeamProbe.DpfEvaluation)                                                                               | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#BeamProbe.Suppressed)                                                                                     | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#BeamProbe.Children)                                                                                         | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#BeamProbe.Comments)                                                                                         | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#BeamProbe.Figures)                                                                                           | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#BeamProbe.Images)                                                                                             | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#BeamProbe.Properties)                                                                                     | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#BeamProbe.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import BeamProbe
```

## Property detail

### *property* BeamProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.AxialForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxialForce.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumAxialForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAxialForce.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumMomentAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMomentAtI.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumMomentAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMomentAtJ.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumShearForceAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumShearForceAtI.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumShearForceAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumShearForceAtJ.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumTorque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTorque.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumAxialForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumAxialForce.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumMomentAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMomentAtI.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumMomentAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMomentAtJ.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumShearForceAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumShearForceAtI.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumShearForceAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumShearForceAtJ.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumTorque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTorque.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MomentAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentAtI.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MomentAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentAtJ.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.ShearForceAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShearForceAtI.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.ShearForceAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShearForceAtJ.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Torque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Torque.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BeamProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BeamProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### BeamProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BeamProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BeamProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BeamProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BeamProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BeamProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BeamProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BeamProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BeamProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BeamProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BeamProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BeamProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BeamProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BeamProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
