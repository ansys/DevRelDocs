# `EnergyProbe`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EnergyProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EnergyProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EnergyProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#EnergyProbe.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#EnergyProbe.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#EnergyProbe.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#EnergyProbe.AddImage)                               | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#EnergyProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#EnergyProbe.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#EnergyProbe.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#EnergyProbe.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#EnergyProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#EnergyProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                        |
| [`EvaluateAllResults`](#EnergyProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#EnergyProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                                |
| [`GetChildren`](#EnergyProbe.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#EnergyProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#EnergyProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#EnergyProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`PropertyByAPIName`](#EnergyProbe.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#EnergyProbe.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`RemoveParameter`](#EnergyProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#EnergyProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#EnergyProbe.RetrieveResult)                   | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#EnergyProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#EnergyProbe.BeamSelection)                                       | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#EnergyProbe.BoundaryConditionSelection)             | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`By`](#EnergyProbe.By)                                                             | Gets or sets the By.                                                                                                                                                       |
| [`Children`](#EnergyProbe.Children)                                                 | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#EnergyProbe.Comments)                                                 | Gets the list of associated comments.                                                                                                                                      |
| [`ContactEnergy`](#EnergyProbe.ContactEnergy)                                       | Gets the ContactEnergy.                                                                                                                                                    |
| [`ContactRegionSelection`](#EnergyProbe.ContactRegionSelection)                     | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#EnergyProbe.CoordinateSystemSelection)               | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DampingEnergy`](#EnergyProbe.DampingEnergy)                                       | Gets the DampingEnergy.                                                                                                                                                    |
| [`DataModelObjectCategory`](#EnergyProbe.DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#EnergyProbe.DisplayTime)                                           | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#EnergyProbe.DpfEvaluation)                                       | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`ExternalEnergy`](#EnergyProbe.ExternalEnergy)                                     | Gets the ExternalEnergy.                                                                                                                                                   |
| [`Figures`](#EnergyProbe.Figures)                                                   | Gets the list of associated figures.                                                                                                                                       |
| [`Frequency`](#EnergyProbe.Frequency)                                               | Gets or sets the Frequency.                                                                                                                                                |
| [`GeometryLocation`](#EnergyProbe.GeometryLocation)                                 | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`HourglassEnergy`](#EnergyProbe.HourglassEnergy)                                   | Gets the HourglassEnergy.                                                                                                                                                  |
| [`Images`](#EnergyProbe.Images)                                                     | Gets the list of associated images.                                                                                                                                        |
| [`InternalEnergy`](#EnergyProbe.InternalEnergy)                                     | Gets the InternalEnergy.                                                                                                                                                   |
| [`InternalObject`](#EnergyProbe.InternalObject)                                     | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#EnergyProbe.IsSolved)                                                 | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#EnergyProbe.IterationNumber)                                   | Gets the IterationNumber.                                                                                                                                                  |
| [`KineticEnergy`](#EnergyProbe.KineticEnergy)                                       | Gets the KineticEnergy.                                                                                                                                                    |
| [`LoadStep`](#EnergyProbe.LoadStep)                                                 | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#EnergyProbe.LoadStepNumber)                                     | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#EnergyProbe.LocationMethod)                                     | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MagnetostaticCoEnergy`](#EnergyProbe.MagnetostaticCoEnergy)                       | Gets the MagnetostaticCoEnergy.                                                                                                                                            |
| [`MaxMagnetostaticCoEnergyOverTime`](#EnergyProbe.MaxMagnetostaticCoEnergyOverTime) | Gets the MaxMagnetostaticCoEnergyOverTime.                                                                                                                                 |
| [`MaximumContactEnergy`](#EnergyProbe.MaximumContactEnergy)                         | Gets the MaximumContactEnergy.                                                                                                                                             |
| [`MaximumDampingEnergy`](#EnergyProbe.MaximumDampingEnergy)                         | Gets the MaximumDampingEnergy.                                                                                                                                             |
| [`MaximumExternalEnergy`](#EnergyProbe.MaximumExternalEnergy)                       | Gets the MaximumExternalEnergy.                                                                                                                                            |
| [`MaximumHourglassEnergy`](#EnergyProbe.MaximumHourglassEnergy)                     | Gets the MaximumHourglassEnergy.                                                                                                                                           |
| [`MaximumInternalEnergy`](#EnergyProbe.MaximumInternalEnergy)                       | Gets the MaximumInternalEnergy.                                                                                                                                            |
| [`MaximumKineticEnergy`](#EnergyProbe.MaximumKineticEnergy)                         | Gets the MaximumKineticEnergy.                                                                                                                                             |
| [`MaximumPlasticWork`](#EnergyProbe.MaximumPlasticWork)                             | Gets the MaximumPlasticWork.                                                                                                                                               |
| [`MaximumPotentialEnergy`](#EnergyProbe.MaximumPotentialEnergy)                     | Gets the MaximumPotentialEnergy.                                                                                                                                           |
| [`MaximumStrainEnergy`](#EnergyProbe.MaximumStrainEnergy)                           | Gets the MaximumStrainEnergy.                                                                                                                                              |
| [`MaximumTotal`](#EnergyProbe.MaximumTotal)                                         | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumTotalEnergy`](#EnergyProbe.MaximumTotalEnergy)                             | Gets the MaximumTotalEnergy.                                                                                                                                               |
| [`MaximumXAxis`](#EnergyProbe.MaximumXAxis)                                         | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#EnergyProbe.MaximumYAxis)                                         | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#EnergyProbe.MaximumZAxis)                                         | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#EnergyProbe.MeshConnectionSelection)                   | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinMagnetostaticCoEnergyOverTime`](#EnergyProbe.MinMagnetostaticCoEnergyOverTime) | Gets the MinMagnetostaticCoEnergyOverTime.                                                                                                                                 |
| [`MinimumContactEnergy`](#EnergyProbe.MinimumContactEnergy)                         | Gets the MinimumContactEnergy.                                                                                                                                             |
| [`MinimumDampingEnergy`](#EnergyProbe.MinimumDampingEnergy)                         | Gets the MinimumDampingEnergy.                                                                                                                                             |
| [`MinimumExternalEnergy`](#EnergyProbe.MinimumExternalEnergy)                       | Gets the MinimumExternalEnergy.                                                                                                                                            |
| [`MinimumHourglassEnergy`](#EnergyProbe.MinimumHourglassEnergy)                     | Gets the MinimumHourglassEnergy.                                                                                                                                           |
| [`MinimumInternalEnergy`](#EnergyProbe.MinimumInternalEnergy)                       | Gets the MinimumInternalEnergy.                                                                                                                                            |
| [`MinimumKineticEnergy`](#EnergyProbe.MinimumKineticEnergy)                         | Gets the MinimumKineticEnergy.                                                                                                                                             |
| [`MinimumPlasticWork`](#EnergyProbe.MinimumPlasticWork)                             | Gets the MinimumPlasticWork.                                                                                                                                               |
| [`MinimumPotentialEnergy`](#EnergyProbe.MinimumPotentialEnergy)                     | Gets the MinimumPotentialEnergy.                                                                                                                                           |
| [`MinimumStrainEnergy`](#EnergyProbe.MinimumStrainEnergy)                           | Gets the MinimumStrainEnergy.                                                                                                                                              |
| [`MinimumTotal`](#EnergyProbe.MinimumTotal)                                         | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumTotalEnergy`](#EnergyProbe.MinimumTotalEnergy)                             | Gets the MinimumTotalEnergy.                                                                                                                                               |
| [`MinimumXAxis`](#EnergyProbe.MinimumXAxis)                                         | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#EnergyProbe.MinimumYAxis)                                         | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#EnergyProbe.MinimumZAxis)                                         | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Orientation`](#EnergyProbe.Orientation)                                           | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`PlasticWork`](#EnergyProbe.PlasticWork)                                           | Gets the PlasticWork.                                                                                                                                                      |
| [`PotentialEnergy`](#EnergyProbe.PotentialEnergy)                                   | Gets the PotentialEnergy.                                                                                                                                                  |
| [`Properties`](#EnergyProbe.Properties)                                             | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#EnergyProbe.RPMSelection)                                         | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#EnergyProbe.RemotePointSelection)                         | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ReportedFrequency`](#EnergyProbe.ReportedFrequency)                               | Gets the ReportedFrequency.                                                                                                                                                |
| [`ResultSelection`](#EnergyProbe.ResultSelection)                                   | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SetNumber`](#EnergyProbe.SetNumber)                                               | Gets or sets the SetNumber.                                                                                                                                                |
| [`SpatialResolution`](#EnergyProbe.SpatialResolution)                               | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#EnergyProbe.SpringSelection)                                   | Gets or sets the SpringSelection.                                                                                                                                          |
| [`StrainEnergy`](#EnergyProbe.StrainEnergy)                                         | Gets the StrainEnergy.                                                                                                                                                     |
| [`Substep`](#EnergyProbe.Substep)                                                   | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#EnergyProbe.Summation)                                               | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#EnergyProbe.Suppressed)                                             | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#EnergyProbe.SurfaceSelection)                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`Time`](#EnergyProbe.Time)                                                         | Gets the Time.                                                                                                                                                             |
| [`Total`](#EnergyProbe.Total)                                                       | Gets the Total.                                                                                                                                                            |
| [`TotalEnergy`](#EnergyProbe.TotalEnergy)                                           | Gets the TotalEnergy.                                                                                                                                                      |
| [`Type`](#EnergyProbe.Type)                                                         | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#EnergyProbe.VisibleProperties)                               | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#EnergyProbe.XAxis)                                                       | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#EnergyProbe.YAxis)                                                       | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#EnergyProbe.ZAxis)                                                       | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="EnergyProbe.BeamSelection"></a>

### *property* EnergyProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.BoundaryConditionSelection"></a>

### *property* EnergyProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.By"></a>

### *property* EnergyProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Children"></a>

### *property* EnergyProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Comments"></a>

### *property* EnergyProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ContactEnergy"></a>

### *property* EnergyProbe.ContactEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ContactEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ContactRegionSelection"></a>

### *property* EnergyProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.CoordinateSystemSelection"></a>

### *property* EnergyProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.DampingEnergy"></a>

### *property* EnergyProbe.DampingEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DampingEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.DataModelObjectCategory"></a>

### *property* EnergyProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.DisplayTime"></a>

### *property* EnergyProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.DpfEvaluation"></a>

### *property* EnergyProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ExternalEnergy"></a>

### *property* EnergyProbe.ExternalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ExternalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Figures"></a>

### *property* EnergyProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Frequency"></a>

### *property* EnergyProbe.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.GeometryLocation"></a>

### *property* EnergyProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.HourglassEnergy"></a>

### *property* EnergyProbe.HourglassEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HourglassEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Images"></a>

### *property* EnergyProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.InternalEnergy"></a>

### *property* EnergyProbe.InternalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InternalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.InternalObject"></a>

### *property* EnergyProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.IsSolved"></a>

### *property* EnergyProbe.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.IterationNumber"></a>

### *property* EnergyProbe.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.KineticEnergy"></a>

### *property* EnergyProbe.KineticEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the KineticEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.LoadStep"></a>

### *property* EnergyProbe.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.LoadStepNumber"></a>

### *property* EnergyProbe.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.LocationMethod"></a>

### *property* EnergyProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MagnetostaticCoEnergy"></a>

### *property* EnergyProbe.MagnetostaticCoEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnetostaticCoEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaxMagnetostaticCoEnergyOverTime"></a>

### *property* EnergyProbe.MaxMagnetostaticCoEnergyOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaxMagnetostaticCoEnergyOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumContactEnergy"></a>

### *property* EnergyProbe.MaximumContactEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumContactEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumDampingEnergy"></a>

### *property* EnergyProbe.MaximumDampingEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumDampingEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumExternalEnergy"></a>

### *property* EnergyProbe.MaximumExternalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumExternalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumHourglassEnergy"></a>

### *property* EnergyProbe.MaximumHourglassEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumHourglassEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumInternalEnergy"></a>

### *property* EnergyProbe.MaximumInternalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumInternalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumKineticEnergy"></a>

### *property* EnergyProbe.MaximumKineticEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumKineticEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumPlasticWork"></a>

### *property* EnergyProbe.MaximumPlasticWork *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPlasticWork.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumPotentialEnergy"></a>

### *property* EnergyProbe.MaximumPotentialEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumPotentialEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumStrainEnergy"></a>

### *property* EnergyProbe.MaximumStrainEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumStrainEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumTotal"></a>

### *property* EnergyProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumTotalEnergy"></a>

### *property* EnergyProbe.MaximumTotalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumXAxis"></a>

### *property* EnergyProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumYAxis"></a>

### *property* EnergyProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MaximumZAxis"></a>

### *property* EnergyProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MeshConnectionSelection"></a>

### *property* EnergyProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinMagnetostaticCoEnergyOverTime"></a>

### *property* EnergyProbe.MinMagnetostaticCoEnergyOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinMagnetostaticCoEnergyOverTime.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumContactEnergy"></a>

### *property* EnergyProbe.MinimumContactEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumContactEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumDampingEnergy"></a>

### *property* EnergyProbe.MinimumDampingEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumDampingEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumExternalEnergy"></a>

### *property* EnergyProbe.MinimumExternalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumExternalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumHourglassEnergy"></a>

### *property* EnergyProbe.MinimumHourglassEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumHourglassEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumInternalEnergy"></a>

### *property* EnergyProbe.MinimumInternalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumInternalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumKineticEnergy"></a>

### *property* EnergyProbe.MinimumKineticEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumKineticEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumPlasticWork"></a>

### *property* EnergyProbe.MinimumPlasticWork *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPlasticWork.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumPotentialEnergy"></a>

### *property* EnergyProbe.MinimumPotentialEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumPotentialEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumStrainEnergy"></a>

### *property* EnergyProbe.MinimumStrainEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumStrainEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumTotal"></a>

### *property* EnergyProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumTotalEnergy"></a>

### *property* EnergyProbe.MinimumTotalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumXAxis"></a>

### *property* EnergyProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumYAxis"></a>

### *property* EnergyProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.MinimumZAxis"></a>

### *property* EnergyProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Orientation"></a>

### *property* EnergyProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.PlasticWork"></a>

### *property* EnergyProbe.PlasticWork *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PlasticWork.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.PotentialEnergy"></a>

### *property* EnergyProbe.PotentialEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PotentialEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Properties"></a>

### *property* EnergyProbe.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.RPMSelection"></a>

### *property* EnergyProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.RemotePointSelection"></a>

### *property* EnergyProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ReportedFrequency"></a>

### *property* EnergyProbe.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ResultSelection"></a>

### *property* EnergyProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.SetNumber"></a>

### *property* EnergyProbe.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.SpatialResolution"></a>

### *property* EnergyProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.SpringSelection"></a>

### *property* EnergyProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.StrainEnergy"></a>

### *property* EnergyProbe.StrainEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the StrainEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Substep"></a>

### *property* EnergyProbe.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Summation"></a>

### *property* EnergyProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Suppressed"></a>

### *property* EnergyProbe.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.SurfaceSelection"></a>

### *property* EnergyProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Time"></a>

### *property* EnergyProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Total"></a>

### *property* EnergyProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.TotalEnergy"></a>

### *property* EnergyProbe.TotalEnergy *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalEnergy.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Type"></a>

### *property* EnergyProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.VisibleProperties"></a>

### *property* EnergyProbe.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.XAxis"></a>

### *property* EnergyProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.YAxis"></a>

### *property* EnergyProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ZAxis"></a>

### *property* EnergyProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EnergyProbe.Activate"></a>

### EnergyProbe.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.AddComment"></a>

### EnergyProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.AddFigure"></a>

### EnergyProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.AddImage"></a>

### EnergyProbe.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ClearGeneratedData"></a>

### EnergyProbe.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.CopyTo"></a>

### EnergyProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.CreateParameter"></a>

### EnergyProbe.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Delete"></a>

### EnergyProbe.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.Duplicate"></a>

### EnergyProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.DuplicateWithoutResults"></a>

### EnergyProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.EvaluateAllResults"></a>

### EnergyProbe.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.ExportAnimation"></a>

### EnergyProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.GetChildren"></a>

### EnergyProbe.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.GetParameter"></a>

### EnergyProbe.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.GroupAllSimilarChildren"></a>

### EnergyProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.GroupSimilarObjects"></a>

### EnergyProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.PropertyByAPIName"></a>

### EnergyProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.PropertyByName"></a>

### EnergyProbe.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.RemoveParameter"></a>

### EnergyProbe.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.RenameBasedOnDefinition"></a>

### EnergyProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.RetrieveResult"></a>

### EnergyProbe.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="EnergyProbe.SnapToMeshNodes"></a>

### EnergyProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/library/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

