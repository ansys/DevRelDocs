# `ImpedanceProbe`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ImpedanceProbe"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ImpedanceProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImpedanceProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#ImpedanceProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#ImpedanceProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ImpedanceProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ImpedanceProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ImpedanceProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ImpedanceProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ImpedanceProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImpedanceProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImpedanceProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImpedanceProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ImpedanceProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ImpedanceProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImpedanceProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImpedanceProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImpedanceProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImpedanceProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImpedanceProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImpedanceProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImpedanceProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImpedanceProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`SetNumber`](#ImpedanceProbe.SetNumber)                                   | Gets or sets the SetNumber.                                                                                                                                                |
| [`ReportedFrequency`](#ImpedanceProbe.ReportedFrequency)                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`ImpedanceReal`](#ImpedanceProbe.ImpedanceReal)                           | Gets the ImpedanceReal.                                                                                                                                                    |
| [`Frequency`](#ImpedanceProbe.Frequency)                                   | Gets or sets the Frequency.                                                                                                                                                |
| [`ImpedanceImag`](#ImpedanceProbe.ImpedanceImag)                           | Gets the ImpedanceImag.                                                                                                                                                    |
| [`MaximumRealImpedance`](#ImpedanceProbe.MaximumRealImpedance)             | Gets the MaximumRealImpedance.                                                                                                                                             |
| [`MaximumImagImpedance`](#ImpedanceProbe.MaximumImagImpedance)             | Gets the MaximumImagImpedance.                                                                                                                                             |
| [`MinimumRealImpedance`](#ImpedanceProbe.MinimumRealImpedance)             | Gets the MinimumRealImpedance.                                                                                                                                             |
| [`MinimumImagImpedance`](#ImpedanceProbe.MinimumImagImpedance)             | Gets the MinimumImagImpedance.                                                                                                                                             |
| [`SweepingPhase`](#ImpedanceProbe.SweepingPhase)                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`By`](#ImpedanceProbe.By)                                                 | Gets or sets the By.                                                                                                                                                       |
| [`DataModelObjectCategory`](#ImpedanceProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ImpedanceProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ImpedanceProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ImpedanceProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ImpedanceProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ImpedanceProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ImpedanceProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ImpedanceProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ImpedanceProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ImpedanceProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ImpedanceProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ImpedanceProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ImpedanceProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ImpedanceProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ImpedanceProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ImpedanceProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ImpedanceProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ImpedanceProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ImpedanceProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ImpedanceProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ImpedanceProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ImpedanceProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ImpedanceProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ImpedanceProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ImpedanceProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ImpedanceProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ImpedanceProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ImpedanceProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ImpedanceProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ImpedanceProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ImpedanceProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ImpedanceProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ImpedanceProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ImpedanceProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ImpedanceProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ImpedanceProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ImpedanceProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ImpedanceProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ImpedanceProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ImpedanceProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ImpedanceProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ImpedanceProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ImpedanceProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="ImpedanceProbe.InternalObject"></a>

### *property* ImpedanceProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.SetNumber"></a>

### *property* ImpedanceProbe.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.ReportedFrequency"></a>

### *property* ImpedanceProbe.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.ImpedanceReal"></a>

### *property* ImpedanceProbe.ImpedanceReal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImpedanceReal.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Frequency"></a>

### *property* ImpedanceProbe.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.ImpedanceImag"></a>

### *property* ImpedanceProbe.ImpedanceImag *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImpedanceImag.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MaximumRealImpedance"></a>

### *property* ImpedanceProbe.MaximumRealImpedance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumRealImpedance.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MaximumImagImpedance"></a>

### *property* ImpedanceProbe.MaximumImagImpedance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumImagImpedance.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MinimumRealImpedance"></a>

### *property* ImpedanceProbe.MinimumRealImpedance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumRealImpedance.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MinimumImagImpedance"></a>

### *property* ImpedanceProbe.MinimumImagImpedance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumImagImpedance.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.SweepingPhase"></a>

### *property* ImpedanceProbe.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.By"></a>

### *property* ImpedanceProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.DataModelObjectCategory"></a>

### *property* ImpedanceProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Summation"></a>

### *property* ImpedanceProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.LocationMethod"></a>

### *property* ImpedanceProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.GeometryLocation"></a>

### *property* ImpedanceProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.CoordinateSystemSelection"></a>

### *property* ImpedanceProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.BoundaryConditionSelection"></a>

### *property* ImpedanceProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.ContactRegionSelection"></a>

### *property* ImpedanceProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.RemotePointSelection"></a>

### *property* ImpedanceProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.BeamSelection"></a>

### *property* ImpedanceProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MeshConnectionSelection"></a>

### *property* ImpedanceProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.SurfaceSelection"></a>

### *property* ImpedanceProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.SpringSelection"></a>

### *property* ImpedanceProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.IsSolved"></a>

### *property* ImpedanceProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Orientation"></a>

### *property* ImpedanceProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.IterationNumber"></a>

### *property* ImpedanceProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.LoadStep"></a>

### *property* ImpedanceProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.LoadStepNumber"></a>

### *property* ImpedanceProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Substep"></a>

### *property* ImpedanceProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.DisplayTime"></a>

### *property* ImpedanceProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MaximumTotal"></a>

### *property* ImpedanceProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MaximumXAxis"></a>

### *property* ImpedanceProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MaximumYAxis"></a>

### *property* ImpedanceProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MaximumZAxis"></a>

### *property* ImpedanceProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MinimumTotal"></a>

### *property* ImpedanceProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MinimumXAxis"></a>

### *property* ImpedanceProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MinimumYAxis"></a>

### *property* ImpedanceProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.MinimumZAxis"></a>

### *property* ImpedanceProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Time"></a>

### *property* ImpedanceProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Total"></a>

### *property* ImpedanceProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.XAxis"></a>

### *property* ImpedanceProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.YAxis"></a>

### *property* ImpedanceProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.ZAxis"></a>

### *property* ImpedanceProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.ResultSelection"></a>

### *property* ImpedanceProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.SpatialResolution"></a>

### *property* ImpedanceProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Type"></a>

### *property* ImpedanceProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.DpfEvaluation"></a>

### *property* ImpedanceProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Suppressed"></a>

### *property* ImpedanceProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Children"></a>

### *property* ImpedanceProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Comments"></a>

### *property* ImpedanceProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Figures"></a>

### *property* ImpedanceProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Images"></a>

### *property* ImpedanceProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImpedanceProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Properties"></a>

### *property* ImpedanceProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.VisibleProperties"></a>

### *property* ImpedanceProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImpedanceProbe.ExportAnimation"></a>

### ImpedanceProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.ClearGeneratedData"></a>

### ImpedanceProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.DuplicateWithoutResults"></a>

### ImpedanceProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.EvaluateAllResults"></a>

### ImpedanceProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.SnapToMeshNodes"></a>

### ImpedanceProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.RenameBasedOnDefinition"></a>

### ImpedanceProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Delete"></a>

### ImpedanceProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.GetChildren"></a>

### ImpedanceProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImpedanceProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.AddComment"></a>

### ImpedanceProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.AddFigure"></a>

### ImpedanceProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.AddImage"></a>

### ImpedanceProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Activate"></a>

### ImpedanceProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.CopyTo"></a>

### ImpedanceProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.Duplicate"></a>

### ImpedanceProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.GroupAllSimilarChildren"></a>

### ImpedanceProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.GroupSimilarObjects"></a>

### ImpedanceProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.PropertyByName"></a>

### ImpedanceProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.PropertyByAPIName"></a>

### ImpedanceProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.CreateParameter"></a>

### ImpedanceProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.GetParameter"></a>

### ImpedanceProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImpedanceProbe.RemoveParameter"></a>

### ImpedanceProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

