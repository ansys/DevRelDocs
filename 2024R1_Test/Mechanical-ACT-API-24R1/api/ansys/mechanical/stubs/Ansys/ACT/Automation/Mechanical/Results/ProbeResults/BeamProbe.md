# BeamProbe

<a id="BeamProbe"></a>

### *class* BeamProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BoltPretensionProbe.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#BeamProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
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

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import BeamProbe
```

<a id="property-detail"></a>

## Property detail

<a id="BeamProbe.InternalObject"></a>

### *property* BeamProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.AxialForce"></a>

### *property* BeamProbe.AxialForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AxialForce.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumAxialForce"></a>

### *property* BeamProbe.MaximumAxialForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumAxialForce.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumMomentAtI"></a>

### *property* BeamProbe.MaximumMomentAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMomentAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumMomentAtJ"></a>

### *property* BeamProbe.MaximumMomentAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumMomentAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumShearForceAtI"></a>

### *property* BeamProbe.MaximumShearForceAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumShearForceAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumShearForceAtJ"></a>

### *property* BeamProbe.MaximumShearForceAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumShearForceAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumTorque"></a>

### *property* BeamProbe.MaximumTorque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTorque.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumAxialForce"></a>

### *property* BeamProbe.MinimumAxialForce *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumAxialForce.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumMomentAtI"></a>

### *property* BeamProbe.MinimumMomentAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMomentAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumMomentAtJ"></a>

### *property* BeamProbe.MinimumMomentAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumMomentAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumShearForceAtI"></a>

### *property* BeamProbe.MinimumShearForceAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumShearForceAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumShearForceAtJ"></a>

### *property* BeamProbe.MinimumShearForceAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumShearForceAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumTorque"></a>

### *property* BeamProbe.MinimumTorque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTorque.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MomentAtI"></a>

### *property* BeamProbe.MomentAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MomentAtJ"></a>

### *property* BeamProbe.MomentAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MomentAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ShearForceAtI"></a>

### *property* BeamProbe.ShearForceAtI *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShearForceAtI.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ShearForceAtJ"></a>

### *property* BeamProbe.ShearForceAtJ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ShearForceAtJ.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Torque"></a>

### *property* BeamProbe.Torque *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Torque.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DataModelObjectCategory"></a>

### *property* BeamProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Summation"></a>

### *property* BeamProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.LocationMethod"></a>

### *property* BeamProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GeometryLocation"></a>

### *property* BeamProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.CoordinateSystemSelection"></a>

### *property* BeamProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.BoundaryConditionSelection"></a>

### *property* BeamProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ContactRegionSelection"></a>

### *property* BeamProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RemotePointSelection"></a>

### *property* BeamProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.BeamSelection"></a>

### *property* BeamProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MeshConnectionSelection"></a>

### *property* BeamProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SurfaceSelection"></a>

### *property* BeamProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SpringSelection"></a>

### *property* BeamProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.IsSolved"></a>

### *property* BeamProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Orientation"></a>

### *property* BeamProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.IterationNumber"></a>

### *property* BeamProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.LoadStep"></a>

### *property* BeamProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.LoadStepNumber"></a>

### *property* BeamProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Substep"></a>

### *property* BeamProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DisplayTime"></a>

### *property* BeamProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumTotal"></a>

### *property* BeamProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumXAxis"></a>

### *property* BeamProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumYAxis"></a>

### *property* BeamProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MaximumZAxis"></a>

### *property* BeamProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumTotal"></a>

### *property* BeamProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumXAxis"></a>

### *property* BeamProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumYAxis"></a>

### *property* BeamProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.MinimumZAxis"></a>

### *property* BeamProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Time"></a>

### *property* BeamProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Total"></a>

### *property* BeamProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.XAxis"></a>

### *property* BeamProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.YAxis"></a>

### *property* BeamProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ZAxis"></a>

### *property* BeamProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ResultSelection"></a>

### *property* BeamProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SpatialResolution"></a>

### *property* BeamProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Type"></a>

### *property* BeamProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DpfEvaluation"></a>

### *property* BeamProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Suppressed"></a>

### *property* BeamProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Children"></a>

### *property* BeamProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Comments"></a>

### *property* BeamProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Figures"></a>

### *property* BeamProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Images"></a>

### *property* BeamProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BeamProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Properties"></a>

### *property* BeamProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.VisibleProperties"></a>

### *property* BeamProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BeamProbe.ExportAnimation"></a>

### BeamProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.ClearGeneratedData"></a>

### BeamProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.DuplicateWithoutResults"></a>

### BeamProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.EvaluateAllResults"></a>

### BeamProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.SnapToMeshNodes"></a>

### BeamProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RenameBasedOnDefinition"></a>

### BeamProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Delete"></a>

### BeamProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GetChildren"></a>

### BeamProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BeamProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.AddComment"></a>

### BeamProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.AddFigure"></a>

### BeamProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.AddImage"></a>

### BeamProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Activate"></a>

### BeamProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.CopyTo"></a>

### BeamProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.Duplicate"></a>

### BeamProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GroupAllSimilarChildren"></a>

### BeamProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GroupSimilarObjects"></a>

### BeamProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.PropertyByName"></a>

### BeamProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.PropertyByAPIName"></a>

### BeamProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.CreateParameter"></a>

### BeamProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.GetParameter"></a>

### BeamProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BeamProbe.RemoveParameter"></a>

### BeamProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
