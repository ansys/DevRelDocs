# `EnergyProbe`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EnergyProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EnergyProbe.

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
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `InternalObject`                   | Gets the internal object. For advanced usage only.                                                                                                                         |
| `SetNumber`                        | Gets or sets the SetNumber.                                                                                                                                                |
| `ReportedFrequency`                | Gets the ReportedFrequency.                                                                                                                                                |
| `ContactEnergy`                    | Gets the ContactEnergy.                                                                                                                                                    |
| `DampingEnergy`                    | Gets the DampingEnergy.                                                                                                                                                    |
| `ExternalEnergy`                   | Gets the ExternalEnergy.                                                                                                                                                   |
| `Frequency`                        | Gets or sets the Frequency.                                                                                                                                                |
| `HourglassEnergy`                  | Gets the HourglassEnergy.                                                                                                                                                  |
| `InternalEnergy`                   | Gets the InternalEnergy.                                                                                                                                                   |
| `KineticEnergy`                    | Gets the KineticEnergy.                                                                                                                                                    |
| `MagnetostaticCoEnergy`            | Gets the MagnetostaticCoEnergy.                                                                                                                                            |
| `MaximumContactEnergy`             | Gets the MaximumContactEnergy.                                                                                                                                             |
| `MaximumDampingEnergy`             | Gets the MaximumDampingEnergy.                                                                                                                                             |
| `MaximumExternalEnergy`            | Gets the MaximumExternalEnergy.                                                                                                                                            |
| `MaximumHourglassEnergy`           | Gets the MaximumHourglassEnergy.                                                                                                                                           |
| `MaximumInternalEnergy`            | Gets the MaximumInternalEnergy.                                                                                                                                            |
| `MaximumKineticEnergy`             | Gets the MaximumKineticEnergy.                                                                                                                                             |
| `MaxMagnetostaticCoEnergyOverTime` | Gets the MaxMagnetostaticCoEnergyOverTime.                                                                                                                                 |
| `MaximumPlasticWork`               | Gets the MaximumPlasticWork.                                                                                                                                               |
| `MaximumPotentialEnergy`           | Gets the MaximumPotentialEnergy.                                                                                                                                           |
| `MaximumStrainEnergy`              | Gets the MaximumStrainEnergy.                                                                                                                                              |
| `MaximumTotalEnergy`               | Gets the MaximumTotalEnergy.                                                                                                                                               |
| `MinimumContactEnergy`             | Gets the MinimumContactEnergy.                                                                                                                                             |
| `MinimumDampingEnergy`             | Gets the MinimumDampingEnergy.                                                                                                                                             |
| `MinimumExternalEnergy`            | Gets the MinimumExternalEnergy.                                                                                                                                            |
| `MinimumHourglassEnergy`           | Gets the MinimumHourglassEnergy.                                                                                                                                           |
| `MinimumInternalEnergy`            | Gets the MinimumInternalEnergy.                                                                                                                                            |
| `MinimumKineticEnergy`             | Gets the MinimumKineticEnergy.                                                                                                                                             |
| `MinMagnetostaticCoEnergyOverTime` | Gets the MinMagnetostaticCoEnergyOverTime.                                                                                                                                 |
| `MinimumPlasticWork`               | Gets the MinimumPlasticWork.                                                                                                                                               |
| `MinimumPotentialEnergy`           | Gets the MinimumPotentialEnergy.                                                                                                                                           |
| `MinimumStrainEnergy`              | Gets the MinimumStrainEnergy.                                                                                                                                              |
| `MinimumTotalEnergy`               | Gets the MinimumTotalEnergy.                                                                                                                                               |
| `PlasticWork`                      | Gets the PlasticWork.                                                                                                                                                      |
| `PotentialEnergy`                  | Gets the PotentialEnergy.                                                                                                                                                  |
| `StrainEnergy`                     | Gets the StrainEnergy.                                                                                                                                                     |
| `TotalEnergy`                      | Gets the TotalEnergy.                                                                                                                                                      |
| `By`                               | Gets or sets the By.                                                                                                                                                       |
| `DataModelObjectCategory`          | Gets the current DataModelObject's category.                                                                                                                               |
| `Summation`                        | Gets or sets the Summation.                                                                                                                                                |
| `LocationMethod`                   | Gets or sets the LocationMethod.                                                                                                                                           |
| `GeometryLocation`                 | Gets or sets the GeometryLocation.                                                                                                                                         |
| `CoordinateSystemSelection`        | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| `BoundaryConditionSelection`       | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| `ContactRegionSelection`           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| `RemotePointSelection`             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| `BeamSelection`                    | Gets or sets the BeamSelection.                                                                                                                                            |
| `MeshConnectionSelection`          | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| `SurfaceSelection`                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| `SpringSelection`                  | Gets or sets the SpringSelection.                                                                                                                                          |
| `IsSolved`                         | Gets the IsSolved.                                                                                                                                                         |
| `Orientation`                      | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| `IterationNumber`                  | Gets the IterationNumber.                                                                                                                                                  |
| `LoadStep`                         | Gets the LoadStep.                                                                                                                                                         |
| `LoadStepNumber`                   | Gets or sets the LoadStepNumber.                                                                                                                                           |
| `Substep`                          | Gets the Substep.                                                                                                                                                          |
| `DisplayTime`                      | Gets or sets the DisplayTime.                                                                                                                                              |
| `MaximumTotal`                     | Gets the MaximumTotal.                                                                                                                                                     |
| `MaximumXAxis`                     | Gets the MaximumXAxis.                                                                                                                                                     |
| `MaximumYAxis`                     | Gets the MaximumYAxis.                                                                                                                                                     |
| `MaximumZAxis`                     | Gets the MaximumZAxis.                                                                                                                                                     |
| `MinimumTotal`                     | Gets the MinimumTotal.                                                                                                                                                     |
| `MinimumXAxis`                     | Gets the MinimumXAxis.                                                                                                                                                     |
| `MinimumYAxis`                     | Gets the MinimumYAxis.                                                                                                                                                     |
| `MinimumZAxis`                     | Gets the MinimumZAxis.                                                                                                                                                     |
| `Time`                             | Gets the Time.                                                                                                                                                             |
| `Total`                            | Gets the Total.                                                                                                                                                            |
| `XAxis`                            | Gets the XAxis.                                                                                                                                                            |
| `YAxis`                            | Gets the YAxis.                                                                                                                                                            |
| `ZAxis`                            | Gets the ZAxis.                                                                                                                                                            |
| `ResultSelection`                  | Gets or sets the ResultSelection.                                                                                                                                          |
| `SpatialResolution`                | Gets or sets the SpatialResolution.                                                                                                                                        |
| `Type`                             | Gets the Type.                                                                                                                                                             |
| `DpfEvaluation`                    | Gets or sets the DpfEvaluation.                                                                                                                                            |
| `Suppressed`                       | Gets or sets the Suppressed.                                                                                                                                               |
| `Children`                         | Gets the list of children.                                                                                                                                                 |
| `Comments`                         | Gets the list of associated comments.                                                                                                                                      |
| `Figures`                          | Gets the list of associated figures.                                                                                                                                       |
| `Images`                           | Gets the list of associated images.                                                                                                                                        |
| `InternalObject`                   | Gets the internal object. For advanced usage only.                                                                                                                         |
| `Properties`                       | Gets the list of properties for this object.                                                                                                                               |
| `VisibleProperties`                | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

### *property* EnergyProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.ContactEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.DampingEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.ExternalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ExternalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.HourglassEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HourglassEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.InternalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InternalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.KineticEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the KineticEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MagnetostaticCoEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnetostaticCoEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumContactEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumContactEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumDampingEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumDampingEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumExternalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumExternalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumHourglassEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumHourglassEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumInternalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumInternalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumKineticEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumKineticEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaxMagnetostaticCoEnergyOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaxMagnetostaticCoEnergyOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumPlasticWork *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPlasticWork.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumPotentialEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPotentialEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumStrainEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumStrainEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumTotalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumContactEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumContactEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumDampingEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDampingEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumExternalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumExternalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumHourglassEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumHourglassEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumInternalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumInternalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumKineticEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumKineticEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinMagnetostaticCoEnergyOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinMagnetostaticCoEnergyOverTime.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumPlasticWork *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPlasticWork.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumPotentialEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPotentialEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumStrainEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrainEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumTotalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.PlasticWork *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PlasticWork.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.PotentialEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PotentialEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.StrainEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StrainEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.TotalEnergy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalEnergy.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### EnergyProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### EnergyProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### EnergyProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

