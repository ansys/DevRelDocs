# `ElectromechanicalCouplingCoefficient`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectromechanicalCouplingCoefficient"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectromechanicalCouplingCoefficient

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ElectromechanicalCouplingCoefficient.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#ElectromechanicalCouplingCoefficient.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ElectromechanicalCouplingCoefficient.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#ElectromechanicalCouplingCoefficient.AddImage)                               | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#ElectromechanicalCouplingCoefficient.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#ElectromechanicalCouplingCoefficient.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#ElectromechanicalCouplingCoefficient.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#ElectromechanicalCouplingCoefficient.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#ElectromechanicalCouplingCoefficient.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#ElectromechanicalCouplingCoefficient.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                        |
| [`EvaluateAllResults`](#ElectromechanicalCouplingCoefficient.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#ElectromechanicalCouplingCoefficient.ExportAnimation)                 | Run the ExportAnimation action.                                                                |
| [`GetChildren`](#ElectromechanicalCouplingCoefficient.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#ElectromechanicalCouplingCoefficient.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ElectromechanicalCouplingCoefficient.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`PropertyByAPIName`](#ElectromechanicalCouplingCoefficient.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#ElectromechanicalCouplingCoefficient.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`RemoveParameter`](#ElectromechanicalCouplingCoefficient.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#ElectromechanicalCouplingCoefficient.RetrieveResult)                   | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#ElectromechanicalCouplingCoefficient.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#ElectromechanicalCouplingCoefficient.BeamSelection)                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#ElectromechanicalCouplingCoefficient.BoundaryConditionSelection)                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`By`](#ElectromechanicalCouplingCoefficient.By)                                                                                   | Gets or sets the By.                                                                                                                                                       |
| [`Children`](#ElectromechanicalCouplingCoefficient.Children)                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ElectromechanicalCouplingCoefficient.Comments)                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#ElectromechanicalCouplingCoefficient.ContactRegionSelection)                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#ElectromechanicalCouplingCoefficient.CoordinateSystemSelection)                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#ElectromechanicalCouplingCoefficient.DataModelObjectCategory)                                         | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#ElectromechanicalCouplingCoefficient.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#ElectromechanicalCouplingCoefficient.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`ElectromechanicalCouplingCoefficientValue`](#ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue)     | Gets the ElectromechanicalCouplingCoefficientValue.                                                                                                                        |
| [`Figures`](#ElectromechanicalCouplingCoefficient.Figures)                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Frequency`](#ElectromechanicalCouplingCoefficient.Frequency)                                                                     | Gets or sets the Frequency.                                                                                                                                                |
| [`GeometryLocation`](#ElectromechanicalCouplingCoefficient.GeometryLocation)                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#ElectromechanicalCouplingCoefficient.Images)                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#ElectromechanicalCouplingCoefficient.InternalObject)                                                           | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#ElectromechanicalCouplingCoefficient.IsSolved)                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#ElectromechanicalCouplingCoefficient.IterationNumber)                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ElectromechanicalCouplingCoefficient.LoadStep)                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ElectromechanicalCouplingCoefficient.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#ElectromechanicalCouplingCoefficient.LocationMethod)                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumElectromechanicalCouplingCoefficient`](#ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient) | Gets the MaximumElectromechanicalCouplingCoefficient.                                                                                                                      |
| [`MaximumTotal`](#ElectromechanicalCouplingCoefficient.MaximumTotal)                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ElectromechanicalCouplingCoefficient.MaximumXAxis)                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ElectromechanicalCouplingCoefficient.MaximumYAxis)                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ElectromechanicalCouplingCoefficient.MaximumZAxis)                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#ElectromechanicalCouplingCoefficient.MeshConnectionSelection)                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumElectromechanicalCouplingCoefficient`](#ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient) | Gets the MinimumElectromechanicalCouplingCoefficient.                                                                                                                      |
| [`MinimumTotal`](#ElectromechanicalCouplingCoefficient.MinimumTotal)                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ElectromechanicalCouplingCoefficient.MinimumXAxis)                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ElectromechanicalCouplingCoefficient.MinimumYAxis)                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ElectromechanicalCouplingCoefficient.MinimumZAxis)                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Orientation`](#ElectromechanicalCouplingCoefficient.Orientation)                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Properties`](#ElectromechanicalCouplingCoefficient.Properties)                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#ElectromechanicalCouplingCoefficient.RPMSelection)                                                               | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#ElectromechanicalCouplingCoefficient.RemotePointSelection)                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ReportedFrequency`](#ElectromechanicalCouplingCoefficient.ReportedFrequency)                                                     | Gets the ReportedFrequency.                                                                                                                                                |
| [`ResultSelection`](#ElectromechanicalCouplingCoefficient.ResultSelection)                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SetNumber`](#ElectromechanicalCouplingCoefficient.SetNumber)                                                                     | Gets or sets the SetNumber.                                                                                                                                                |
| [`SpatialResolution`](#ElectromechanicalCouplingCoefficient.SpatialResolution)                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#ElectromechanicalCouplingCoefficient.SpringSelection)                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Substep`](#ElectromechanicalCouplingCoefficient.Substep)                                                                         | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#ElectromechanicalCouplingCoefficient.Summation)                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#ElectromechanicalCouplingCoefficient.Suppressed)                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#ElectromechanicalCouplingCoefficient.SurfaceSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SweepingPhase`](#ElectromechanicalCouplingCoefficient.SweepingPhase)                                                             | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`Time`](#ElectromechanicalCouplingCoefficient.Time)                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#ElectromechanicalCouplingCoefficient.Total)                                                                             | Gets the Total.                                                                                                                                                            |
| [`Type`](#ElectromechanicalCouplingCoefficient.Type)                                                                               | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#ElectromechanicalCouplingCoefficient.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#ElectromechanicalCouplingCoefficient.XAxis)                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ElectromechanicalCouplingCoefficient.YAxis)                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ElectromechanicalCouplingCoefficient.ZAxis)                                                                             | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="ElectromechanicalCouplingCoefficient.BeamSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.BoundaryConditionSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.By"></a>

### *property* ElectromechanicalCouplingCoefficient.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Children"></a>

### *property* ElectromechanicalCouplingCoefficient.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Comments"></a>

### *property* ElectromechanicalCouplingCoefficient.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ContactRegionSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.CoordinateSystemSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DataModelObjectCategory"></a>

### *property* ElectromechanicalCouplingCoefficient.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DisplayTime"></a>

### *property* ElectromechanicalCouplingCoefficient.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DpfEvaluation"></a>

### *property* ElectromechanicalCouplingCoefficient.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue"></a>

### *property* ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElectromechanicalCouplingCoefficientValue.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Figures"></a>

### *property* ElectromechanicalCouplingCoefficient.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Frequency"></a>

### *property* ElectromechanicalCouplingCoefficient.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GeometryLocation"></a>

### *property* ElectromechanicalCouplingCoefficient.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Images"></a>

### *property* ElectromechanicalCouplingCoefficient.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.InternalObject"></a>

### *property* ElectromechanicalCouplingCoefficient.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.IsSolved"></a>

### *property* ElectromechanicalCouplingCoefficient.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.IterationNumber"></a>

### *property* ElectromechanicalCouplingCoefficient.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.LoadStep"></a>

### *property* ElectromechanicalCouplingCoefficient.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.LoadStepNumber"></a>

### *property* ElectromechanicalCouplingCoefficient.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.LocationMethod"></a>

### *property* ElectromechanicalCouplingCoefficient.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumTotal"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumXAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumYAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumZAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MeshConnectionSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumTotal"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumXAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumYAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumZAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Orientation"></a>

### *property* ElectromechanicalCouplingCoefficient.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Properties"></a>

### *property* ElectromechanicalCouplingCoefficient.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RPMSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RemotePointSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ReportedFrequency"></a>

### *property* ElectromechanicalCouplingCoefficient.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ResultSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SetNumber"></a>

### *property* ElectromechanicalCouplingCoefficient.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SpatialResolution"></a>

### *property* ElectromechanicalCouplingCoefficient.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SpringSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Substep"></a>

### *property* ElectromechanicalCouplingCoefficient.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Summation"></a>

### *property* ElectromechanicalCouplingCoefficient.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Suppressed"></a>

### *property* ElectromechanicalCouplingCoefficient.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SurfaceSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SweepingPhase"></a>

### *property* ElectromechanicalCouplingCoefficient.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Time"></a>

### *property* ElectromechanicalCouplingCoefficient.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Total"></a>

### *property* ElectromechanicalCouplingCoefficient.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Type"></a>

### *property* ElectromechanicalCouplingCoefficient.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.VisibleProperties"></a>

### *property* ElectromechanicalCouplingCoefficient.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.XAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.YAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ZAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectromechanicalCouplingCoefficient.Activate"></a>

### ElectromechanicalCouplingCoefficient.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.AddComment"></a>

### ElectromechanicalCouplingCoefficient.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.AddFigure"></a>

### ElectromechanicalCouplingCoefficient.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.AddImage"></a>

### ElectromechanicalCouplingCoefficient.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ClearGeneratedData"></a>

### ElectromechanicalCouplingCoefficient.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.CopyTo"></a>

### ElectromechanicalCouplingCoefficient.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.CreateParameter"></a>

### ElectromechanicalCouplingCoefficient.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Delete"></a>

### ElectromechanicalCouplingCoefficient.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Duplicate"></a>

### ElectromechanicalCouplingCoefficient.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DuplicateWithoutResults"></a>

### ElectromechanicalCouplingCoefficient.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.EvaluateAllResults"></a>

### ElectromechanicalCouplingCoefficient.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ExportAnimation"></a>

### ElectromechanicalCouplingCoefficient.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GetChildren"></a>

### ElectromechanicalCouplingCoefficient.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GetParameter"></a>

### ElectromechanicalCouplingCoefficient.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren"></a>

### ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GroupSimilarObjects"></a>

### ElectromechanicalCouplingCoefficient.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.PropertyByAPIName"></a>

### ElectromechanicalCouplingCoefficient.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.PropertyByName"></a>

### ElectromechanicalCouplingCoefficient.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RemoveParameter"></a>

### ElectromechanicalCouplingCoefficient.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition"></a>

### ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RetrieveResult"></a>

### ElectromechanicalCouplingCoefficient.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SnapToMeshNodes"></a>

### ElectromechanicalCouplingCoefficient.SnapToMeshNodes() → [None](https://docs.python.org/3/library/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

