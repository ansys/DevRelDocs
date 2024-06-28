<!-- vale off -->

<a id="electromechanicalcouplingcoefficient"></a>

# `ElectromechanicalCouplingCoefficient`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectromechanicalCouplingCoefficient"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectromechanicalCouplingCoefficient

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ElectromechanicalCouplingCoefficient.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ElectromechanicalCouplingCoefficient.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ElectromechanicalCouplingCoefficient.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElectromechanicalCouplingCoefficient.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ElectromechanicalCouplingCoefficient.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElectromechanicalCouplingCoefficient.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectromechanicalCouplingCoefficient.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectromechanicalCouplingCoefficient.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectromechanicalCouplingCoefficient.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElectromechanicalCouplingCoefficient.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElectromechanicalCouplingCoefficient.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectromechanicalCouplingCoefficient.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectromechanicalCouplingCoefficient.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectromechanicalCouplingCoefficient.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectromechanicalCouplingCoefficient.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElectromechanicalCouplingCoefficient.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElectromechanicalCouplingCoefficient.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectromechanicalCouplingCoefficient.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ElectromechanicalCouplingCoefficientValue`](#ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue)     | Gets the ElectromechanicalCouplingCoefficientValue.                                                                                                                        |
| [`MaximumElectromechanicalCouplingCoefficient`](#ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient) | Gets the MaximumElectromechanicalCouplingCoefficient.                                                                                                                      |
| [`MinimumElectromechanicalCouplingCoefficient`](#ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient) | Gets the MinimumElectromechanicalCouplingCoefficient.                                                                                                                      |
| [`SetNumber`](#ElectromechanicalCouplingCoefficient.SetNumber)                                                                     | Gets or sets the SetNumber.                                                                                                                                                |
| [`ReportedFrequency`](#ElectromechanicalCouplingCoefficient.ReportedFrequency)                                                     | Gets the ReportedFrequency.                                                                                                                                                |
| [`Frequency`](#ElectromechanicalCouplingCoefficient.Frequency)                                                                     | Gets or sets the Frequency.                                                                                                                                                |
| [`SweepingPhase`](#ElectromechanicalCouplingCoefficient.SweepingPhase)                                                             | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`By`](#ElectromechanicalCouplingCoefficient.By)                                                                                   | Gets or sets the By.                                                                                                                                                       |
| [`DataModelObjectCategory`](#ElectromechanicalCouplingCoefficient.DataModelObjectCategory)                                         | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ElectromechanicalCouplingCoefficient.Summation)                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ElectromechanicalCouplingCoefficient.LocationMethod)                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ElectromechanicalCouplingCoefficient.GeometryLocation)                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ElectromechanicalCouplingCoefficient.CoordinateSystemSelection)                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ElectromechanicalCouplingCoefficient.BoundaryConditionSelection)                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ElectromechanicalCouplingCoefficient.ContactRegionSelection)                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ElectromechanicalCouplingCoefficient.RemotePointSelection)                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ElectromechanicalCouplingCoefficient.BeamSelection)                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ElectromechanicalCouplingCoefficient.MeshConnectionSelection)                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ElectromechanicalCouplingCoefficient.SurfaceSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ElectromechanicalCouplingCoefficient.SpringSelection)                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ElectromechanicalCouplingCoefficient.IsSolved)                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ElectromechanicalCouplingCoefficient.Orientation)                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ElectromechanicalCouplingCoefficient.IterationNumber)                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ElectromechanicalCouplingCoefficient.LoadStep)                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ElectromechanicalCouplingCoefficient.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ElectromechanicalCouplingCoefficient.Substep)                                                                         | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ElectromechanicalCouplingCoefficient.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ElectromechanicalCouplingCoefficient.MaximumTotal)                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ElectromechanicalCouplingCoefficient.MaximumXAxis)                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ElectromechanicalCouplingCoefficient.MaximumYAxis)                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ElectromechanicalCouplingCoefficient.MaximumZAxis)                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ElectromechanicalCouplingCoefficient.MinimumTotal)                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ElectromechanicalCouplingCoefficient.MinimumXAxis)                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ElectromechanicalCouplingCoefficient.MinimumYAxis)                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ElectromechanicalCouplingCoefficient.MinimumZAxis)                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ElectromechanicalCouplingCoefficient.Time)                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#ElectromechanicalCouplingCoefficient.Total)                                                                             | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ElectromechanicalCouplingCoefficient.XAxis)                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ElectromechanicalCouplingCoefficient.YAxis)                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ElectromechanicalCouplingCoefficient.ZAxis)                                                                             | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ElectromechanicalCouplingCoefficient.ResultSelection)                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ElectromechanicalCouplingCoefficient.SpatialResolution)                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ElectromechanicalCouplingCoefficient.Type)                                                                               | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ElectromechanicalCouplingCoefficient.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ElectromechanicalCouplingCoefficient.Suppressed)                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ElectromechanicalCouplingCoefficient.Children)                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ElectromechanicalCouplingCoefficient.Comments)                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ElectromechanicalCouplingCoefficient.Figures)                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ElectromechanicalCouplingCoefficient.Images)                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ElectromechanicalCouplingCoefficient.Properties)                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ElectromechanicalCouplingCoefficient.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="ElectromechanicalCouplingCoefficient.InternalObject"></a>

### *property* ElectromechanicalCouplingCoefficient.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue"></a>

### *property* ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElectromechanicalCouplingCoefficientValue.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SetNumber"></a>

### *property* ElectromechanicalCouplingCoefficient.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ReportedFrequency"></a>

### *property* ElectromechanicalCouplingCoefficient.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Frequency"></a>

### *property* ElectromechanicalCouplingCoefficient.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SweepingPhase"></a>

### *property* ElectromechanicalCouplingCoefficient.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.By"></a>

### *property* ElectromechanicalCouplingCoefficient.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DataModelObjectCategory"></a>

### *property* ElectromechanicalCouplingCoefficient.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Summation"></a>

### *property* ElectromechanicalCouplingCoefficient.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.LocationMethod"></a>

### *property* ElectromechanicalCouplingCoefficient.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GeometryLocation"></a>

### *property* ElectromechanicalCouplingCoefficient.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.CoordinateSystemSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.BoundaryConditionSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ContactRegionSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RemotePointSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.BeamSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MeshConnectionSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SurfaceSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SpringSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.IsSolved"></a>

### *property* ElectromechanicalCouplingCoefficient.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Orientation"></a>

### *property* ElectromechanicalCouplingCoefficient.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.IterationNumber"></a>

### *property* ElectromechanicalCouplingCoefficient.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.LoadStep"></a>

### *property* ElectromechanicalCouplingCoefficient.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.LoadStepNumber"></a>

### *property* ElectromechanicalCouplingCoefficient.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Substep"></a>

### *property* ElectromechanicalCouplingCoefficient.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DisplayTime"></a>

### *property* ElectromechanicalCouplingCoefficient.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumTotal"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumXAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumYAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MaximumZAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumTotal"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumXAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumYAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.MinimumZAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Time"></a>

### *property* ElectromechanicalCouplingCoefficient.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Total"></a>

### *property* ElectromechanicalCouplingCoefficient.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.XAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.YAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ZAxis"></a>

### *property* ElectromechanicalCouplingCoefficient.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ResultSelection"></a>

### *property* ElectromechanicalCouplingCoefficient.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SpatialResolution"></a>

### *property* ElectromechanicalCouplingCoefficient.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Type"></a>

### *property* ElectromechanicalCouplingCoefficient.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DpfEvaluation"></a>

### *property* ElectromechanicalCouplingCoefficient.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Suppressed"></a>

### *property* ElectromechanicalCouplingCoefficient.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Children"></a>

### *property* ElectromechanicalCouplingCoefficient.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Comments"></a>

### *property* ElectromechanicalCouplingCoefficient.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Figures"></a>

### *property* ElectromechanicalCouplingCoefficient.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Images"></a>

### *property* ElectromechanicalCouplingCoefficient.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElectromechanicalCouplingCoefficient.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Properties"></a>

### *property* ElectromechanicalCouplingCoefficient.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.VisibleProperties"></a>

### *property* ElectromechanicalCouplingCoefficient.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectromechanicalCouplingCoefficient.ExportAnimation"></a>

### ElectromechanicalCouplingCoefficient.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.ClearGeneratedData"></a>

### ElectromechanicalCouplingCoefficient.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.DuplicateWithoutResults"></a>

### ElectromechanicalCouplingCoefficient.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.EvaluateAllResults"></a>

### ElectromechanicalCouplingCoefficient.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.SnapToMeshNodes"></a>

### ElectromechanicalCouplingCoefficient.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition"></a>

### ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Delete"></a>

### ElectromechanicalCouplingCoefficient.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GetChildren"></a>

### ElectromechanicalCouplingCoefficient.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElectromechanicalCouplingCoefficient.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.AddComment"></a>

### ElectromechanicalCouplingCoefficient.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.AddFigure"></a>

### ElectromechanicalCouplingCoefficient.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.AddImage"></a>

### ElectromechanicalCouplingCoefficient.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Activate"></a>

### ElectromechanicalCouplingCoefficient.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.CopyTo"></a>

### ElectromechanicalCouplingCoefficient.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.Duplicate"></a>

### ElectromechanicalCouplingCoefficient.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren"></a>

### ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GroupSimilarObjects"></a>

### ElectromechanicalCouplingCoefficient.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.PropertyByName"></a>

### ElectromechanicalCouplingCoefficient.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.PropertyByAPIName"></a>

### ElectromechanicalCouplingCoefficient.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.CreateParameter"></a>

### ElectromechanicalCouplingCoefficient.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.GetParameter"></a>

### ElectromechanicalCouplingCoefficient.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectromechanicalCouplingCoefficient.RemoveParameter"></a>

### ElectromechanicalCouplingCoefficient.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
