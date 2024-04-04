# EnergyProbe

### *class* EnergyProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a EnergyProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#EnergyProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#EnergyProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#EnergyProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#EnergyProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#EnergyProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#EnergyProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#EnergyProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#EnergyProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EnergyProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EnergyProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#EnergyProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#EnergyProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#EnergyProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#EnergyProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EnergyProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#EnergyProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#EnergyProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#EnergyProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#EnergyProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#EnergyProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`SetNumber`](#EnergyProbe.SetNumber)                                                                                     | Gets or sets the SetNumber.                                                                                                                                                |
| [`ReportedFrequency`](#EnergyProbe.ReportedFrequency)                                                                     | Gets the ReportedFrequency.                                                                                                                                                |
| [`ContactEnergy`](#EnergyProbe.ContactEnergy)                                                                             | Gets the ContactEnergy.                                                                                                                                                    |
| [`DampingEnergy`](#EnergyProbe.DampingEnergy)                                                                             | Gets the DampingEnergy.                                                                                                                                                    |
| [`ExternalEnergy`](#EnergyProbe.ExternalEnergy)                                                                           | Gets the ExternalEnergy.                                                                                                                                                   |
| [`Frequency`](#EnergyProbe.Frequency)                                                                                     | Gets or sets the Frequency.                                                                                                                                                |
| [`HourglassEnergy`](#EnergyProbe.HourglassEnergy)                                                                         | Gets the HourglassEnergy.                                                                                                                                                  |
| [`InternalEnergy`](#EnergyProbe.InternalEnergy)                                                                           | Gets the InternalEnergy.                                                                                                                                                   |
| [`KineticEnergy`](#EnergyProbe.KineticEnergy)                                                                             | Gets the KineticEnergy.                                                                                                                                                    |
| [`MagnetostaticCoEnergy`](#EnergyProbe.MagnetostaticCoEnergy)                                                             | Gets the MagnetostaticCoEnergy.                                                                                                                                            |
| [`MaximumContactEnergy`](#EnergyProbe.MaximumContactEnergy)                                                               | Gets the MaximumContactEnergy.                                                                                                                                             |
| [`MaximumDampingEnergy`](#EnergyProbe.MaximumDampingEnergy)                                                               | Gets the MaximumDampingEnergy.                                                                                                                                             |
| [`MaximumExternalEnergy`](#EnergyProbe.MaximumExternalEnergy)                                                             | Gets the MaximumExternalEnergy.                                                                                                                                            |
| [`MaximumHourglassEnergy`](#EnergyProbe.MaximumHourglassEnergy)                                                           | Gets the MaximumHourglassEnergy.                                                                                                                                           |
| [`MaximumInternalEnergy`](#EnergyProbe.MaximumInternalEnergy)                                                             | Gets the MaximumInternalEnergy.                                                                                                                                            |
| [`MaximumKineticEnergy`](#EnergyProbe.MaximumKineticEnergy)                                                               | Gets the MaximumKineticEnergy.                                                                                                                                             |
| [`MaxMagnetostaticCoEnergyOverTime`](#EnergyProbe.MaxMagnetostaticCoEnergyOverTime)                                       | Gets the MaxMagnetostaticCoEnergyOverTime.                                                                                                                                 |
| [`MaximumPlasticWork`](#EnergyProbe.MaximumPlasticWork)                                                                   | Gets the MaximumPlasticWork.                                                                                                                                               |
| [`MaximumPotentialEnergy`](#EnergyProbe.MaximumPotentialEnergy)                                                           | Gets the MaximumPotentialEnergy.                                                                                                                                           |
| [`MaximumStrainEnergy`](#EnergyProbe.MaximumStrainEnergy)                                                                 | Gets the MaximumStrainEnergy.                                                                                                                                              |
| [`MaximumTotalEnergy`](#EnergyProbe.MaximumTotalEnergy)                                                                   | Gets the MaximumTotalEnergy.                                                                                                                                               |
| [`MinimumContactEnergy`](#EnergyProbe.MinimumContactEnergy)                                                               | Gets the MinimumContactEnergy.                                                                                                                                             |
| [`MinimumDampingEnergy`](#EnergyProbe.MinimumDampingEnergy)                                                               | Gets the MinimumDampingEnergy.                                                                                                                                             |
| [`MinimumExternalEnergy`](#EnergyProbe.MinimumExternalEnergy)                                                             | Gets the MinimumExternalEnergy.                                                                                                                                            |
| [`MinimumHourglassEnergy`](#EnergyProbe.MinimumHourglassEnergy)                                                           | Gets the MinimumHourglassEnergy.                                                                                                                                           |
| [`MinimumInternalEnergy`](#EnergyProbe.MinimumInternalEnergy)                                                             | Gets the MinimumInternalEnergy.                                                                                                                                            |
| [`MinimumKineticEnergy`](#EnergyProbe.MinimumKineticEnergy)                                                               | Gets the MinimumKineticEnergy.                                                                                                                                             |
| [`MinMagnetostaticCoEnergyOverTime`](#EnergyProbe.MinMagnetostaticCoEnergyOverTime)                                       | Gets the MinMagnetostaticCoEnergyOverTime.                                                                                                                                 |
| [`MinimumPlasticWork`](#EnergyProbe.MinimumPlasticWork)                                                                   | Gets the MinimumPlasticWork.                                                                                                                                               |
| [`MinimumPotentialEnergy`](#EnergyProbe.MinimumPotentialEnergy)                                                           | Gets the MinimumPotentialEnergy.                                                                                                                                           |
| [`MinimumStrainEnergy`](#EnergyProbe.MinimumStrainEnergy)                                                                 | Gets the MinimumStrainEnergy.                                                                                                                                              |
| [`MinimumTotalEnergy`](#EnergyProbe.MinimumTotalEnergy)                                                                   | Gets the MinimumTotalEnergy.                                                                                                                                               |
| [`PlasticWork`](#EnergyProbe.PlasticWork)                                                                                 | Gets the PlasticWork.                                                                                                                                                      |
| [`PotentialEnergy`](#EnergyProbe.PotentialEnergy)                                                                         | Gets the PotentialEnergy.                                                                                                                                                  |
| [`StrainEnergy`](#EnergyProbe.StrainEnergy)                                                                               | Gets the StrainEnergy.                                                                                                                                                     |
| [`TotalEnergy`](#EnergyProbe.TotalEnergy)                                                                                 | Gets the TotalEnergy.                                                                                                                                                      |
| [`By`](#EnergyProbe.By)                                                                                                   | Gets or sets the By.                                                                                                                                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#EnergyProbe.Summation)                                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#EnergyProbe.LocationMethod)                                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#EnergyProbe.GeometryLocation)                                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#EnergyProbe.CoordinateSystemSelection)                                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#EnergyProbe.BoundaryConditionSelection)                                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#EnergyProbe.ContactRegionSelection)                                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#EnergyProbe.RemotePointSelection)                                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#EnergyProbe.BeamSelection)                                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#EnergyProbe.MeshConnectionSelection)                                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#EnergyProbe.SurfaceSelection)                                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#EnergyProbe.SpringSelection)                                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#EnergyProbe.IsSolved)                                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#EnergyProbe.Orientation)                                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#EnergyProbe.IterationNumber)                                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#EnergyProbe.LoadStep)                                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#EnergyProbe.LoadStepNumber)                                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#EnergyProbe.Substep)                                                                                         | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#EnergyProbe.DisplayTime)                                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#EnergyProbe.MaximumTotal)                                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#EnergyProbe.MaximumXAxis)                                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#EnergyProbe.MaximumYAxis)                                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#EnergyProbe.MaximumZAxis)                                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#EnergyProbe.MinimumTotal)                                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#EnergyProbe.MinimumXAxis)                                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#EnergyProbe.MinimumYAxis)                                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#EnergyProbe.MinimumZAxis)                                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#EnergyProbe.Time)                                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#EnergyProbe.Total)                                                                                             | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#EnergyProbe.XAxis)                                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#EnergyProbe.YAxis)                                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#EnergyProbe.ZAxis)                                                                                             | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#EnergyProbe.ResultSelection)                                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#EnergyProbe.SpatialResolution)                                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#EnergyProbe.Type)                                                                                               | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#EnergyProbe.DpfEvaluation)                                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#EnergyProbe.Suppressed)                                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#EnergyProbe.Children)                                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#EnergyProbe.Comments)                                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#EnergyProbe.Figures)                                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#EnergyProbe.Images)                                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#EnergyProbe.Properties)                                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#EnergyProbe.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import EnergyProbe
```

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

### *property* EnergyProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* EnergyProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EnergyProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

## Method detail

### EnergyProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

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

### EnergyProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EnergyProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
