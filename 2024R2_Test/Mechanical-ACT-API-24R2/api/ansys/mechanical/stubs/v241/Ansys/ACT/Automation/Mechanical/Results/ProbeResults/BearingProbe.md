# `BearingProbe`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BearingProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BoltPretensionProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `ExportAnimation`         | Run the ExportAnimation action.                                                   |
| `ClearGeneratedData`      | Run the ClearGeneratedData action.                                                |
| `DuplicateWithoutResults` | Run the DuplicateWithoutResults action.                                           |
| `EvaluateAllResults`      | Run the EvaluateAllResults action.                                                |
| `SnapToMeshNodes`         | Snap the coordinates of probe result to the mesh nodes.                           |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `InternalObject`             | Gets the internal object. For advanced usage only.                                                                                                                         |
| `ScaleFactorValue`           | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| `ReportedFrequency`          | Gets the ReportedFrequency.                                                                                                                                                |
| `DampingForce1`              | Gets the DampingForce1.                                                                                                                                                    |
| `DampingForce2`              | Gets the DampingForce2.                                                                                                                                                    |
| `Elongation1`                | Gets the Elongation1.                                                                                                                                                      |
| `Elongation2`                | Gets the Elongation2.                                                                                                                                                      |
| `ElasticForce1`              | Gets the ElasticForce1.                                                                                                                                                    |
| `ElasticForce2`              | Gets the ElasticForce2.                                                                                                                                                    |
| `Velocity1`                  | Gets the Velocity1.                                                                                                                                                        |
| `Velocity2`                  | Gets the Velocity2.                                                                                                                                                        |
| `MaximumDampingForce1`       | Gets the MaximumDampingForce1.                                                                                                                                             |
| `MaximumDampingForce2`       | Gets the MaximumDampingForce2.                                                                                                                                             |
| `MaximumElongation1`         | Gets the MaximumElongation1.                                                                                                                                               |
| `MaximumElongation2`         | Gets the MaximumElongation2.                                                                                                                                               |
| `MaximumElasticForce1`       | Gets the MaximumElasticForce1.                                                                                                                                             |
| `MaximumElasticForce2`       | Gets the MaximumElasticForce2.                                                                                                                                             |
| `MaximumVelocity1`           | Gets the MaximumVelocity1.                                                                                                                                                 |
| `MaximumVelocity2`           | Gets the MaximumVelocity2.                                                                                                                                                 |
| `MinimumDampingForce1`       | Gets the MinimumDampingForce1.                                                                                                                                             |
| `MinimumDampingForce2`       | Gets the MinimumDampingForce2.                                                                                                                                             |
| `MinimumElongation1`         | Gets the MinimumElongation1.                                                                                                                                               |
| `MinimumElongation2`         | Gets the MinimumElongation2.                                                                                                                                               |
| `MinimumElasticForce1`       | Gets the MinimumElasticForce1.                                                                                                                                             |
| `MinimumElasticForce2`       | Gets the MinimumElasticForce2.                                                                                                                                             |
| `MinimumVelocity1`           | Gets the MinimumVelocity1.                                                                                                                                                 |
| `MinimumVelocity2`           | Gets the MinimumVelocity2.                                                                                                                                                 |
| `SweepingPhase`              | Gets or sets the SweepingPhase.                                                                                                                                            |
| `PhaseIncrement`             | Gets or sets the PhaseIncrement.                                                                                                                                           |
| `ScaleFactor`                | Gets or sets the ScaleFactor.                                                                                                                                              |
| `By`                         | Gets or sets the By.                                                                                                                                                       |
| `DataModelObjectCategory`    | Gets the current DataModelObject's category.                                                                                                                               |
| `Summation`                  | Gets or sets the Summation.                                                                                                                                                |
| `LocationMethod`             | Gets or sets the LocationMethod.                                                                                                                                           |
| `GeometryLocation`           | Gets or sets the GeometryLocation.                                                                                                                                         |
| `CoordinateSystemSelection`  | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| `BoundaryConditionSelection` | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| `ContactRegionSelection`     | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| `RemotePointSelection`       | Gets or sets the RemotePointSelection.                                                                                                                                     |
| `BeamSelection`              | Gets or sets the BeamSelection.                                                                                                                                            |
| `MeshConnectionSelection`    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| `SurfaceSelection`           | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| `SpringSelection`            | Gets or sets the SpringSelection.                                                                                                                                          |
| `IsSolved`                   | Gets the IsSolved.                                                                                                                                                         |
| `Orientation`                | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| `IterationNumber`            | Gets the IterationNumber.                                                                                                                                                  |
| `LoadStep`                   | Gets the LoadStep.                                                                                                                                                         |
| `LoadStepNumber`             | Gets or sets the LoadStepNumber.                                                                                                                                           |
| `Substep`                    | Gets the Substep.                                                                                                                                                          |
| `DisplayTime`                | Gets or sets the DisplayTime.                                                                                                                                              |
| `MaximumTotal`               | Gets the MaximumTotal.                                                                                                                                                     |
| `MaximumXAxis`               | Gets the MaximumXAxis.                                                                                                                                                     |
| `MaximumYAxis`               | Gets the MaximumYAxis.                                                                                                                                                     |
| `MaximumZAxis`               | Gets the MaximumZAxis.                                                                                                                                                     |
| `MinimumTotal`               | Gets the MinimumTotal.                                                                                                                                                     |
| `MinimumXAxis`               | Gets the MinimumXAxis.                                                                                                                                                     |
| `MinimumYAxis`               | Gets the MinimumYAxis.                                                                                                                                                     |
| `MinimumZAxis`               | Gets the MinimumZAxis.                                                                                                                                                     |
| `Time`                       | Gets the Time.                                                                                                                                                             |
| `Total`                      | Gets the Total.                                                                                                                                                            |
| `XAxis`                      | Gets the XAxis.                                                                                                                                                            |
| `YAxis`                      | Gets the YAxis.                                                                                                                                                            |
| `ZAxis`                      | Gets the ZAxis.                                                                                                                                                            |
| `ResultSelection`            | Gets or sets the ResultSelection.                                                                                                                                          |
| `SpatialResolution`          | Gets or sets the SpatialResolution.                                                                                                                                        |
| `Type`                       | Gets the Type.                                                                                                                                                             |
| `DpfEvaluation`              | Gets or sets the DpfEvaluation.                                                                                                                                            |
| `Suppressed`                 | Gets or sets the Suppressed.                                                                                                                                               |
| `Children`                   | Gets the list of children.                                                                                                                                                 |
| `Comments`                   | Gets the list of associated comments.                                                                                                                                      |
| `Figures`                    | Gets the list of associated figures.                                                                                                                                       |
| `Images`                     | Gets the list of associated images.                                                                                                                                        |
| `InternalObject`             | Gets the internal object. For advanced usage only.                                                                                                                         |
| `Properties`                 | Gets the list of properties for this object.                                                                                                                               |
| `VisibleProperties`          | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

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

### *property* BearingProbe.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* BearingProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BearingProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### BearingProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

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

### BearingProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BearingProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BearingProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BearingProbe.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

