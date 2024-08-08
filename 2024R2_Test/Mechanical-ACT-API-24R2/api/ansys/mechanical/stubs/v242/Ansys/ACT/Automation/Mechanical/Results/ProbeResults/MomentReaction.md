# `MomentReaction`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.MomentReaction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MomentReaction.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#MomentReaction.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`ClearGeneratedData`](#MomentReaction.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#MomentReaction.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#MomentReaction.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#MomentReaction.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#MomentReaction.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#MomentReaction.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MomentReaction.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MomentReaction.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MomentReaction.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MomentReaction.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MomentReaction.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MomentReaction.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MomentReaction.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MomentReaction.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MomentReaction.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MomentReaction.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MomentReaction.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MomentReaction.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MomentReaction.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Probability`](#MomentReaction.Probability)                               | Gets the Probability.                                                                                                                                                      |
| [`ScaleFactorValue`](#MomentReaction.ScaleFactorValue)                     | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| [`Mode`](#MomentReaction.Mode)                                             | Gets or sets the Mode.                                                                                                                                                     |
| [`SymmetryMultiplier`](#MomentReaction.SymmetryMultiplier)                 | Gets or sets the SymmetryMultiplier.                                                                                                                                       |
| [`ReportedFrequency`](#MomentReaction.ReportedFrequency)                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`Frequency`](#MomentReaction.Frequency)                                   | Gets or sets the Frequency.                                                                                                                                                |
| [`SweepingPhase`](#MomentReaction.SweepingPhase)                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`PhaseIncrement`](#MomentReaction.PhaseIncrement)                         | Gets or sets the PhaseIncrement.                                                                                                                                           |
| [`SurfaceArea`](#MomentReaction.SurfaceArea)                               | Gets the SurfaceArea.                                                                                                                                                      |
| [`ContactForce`](#MomentReaction.ContactForce)                             | Gets or sets the ContactForce.                                                                                                                                             |
| [`Extraction`](#MomentReaction.Extraction)                                 | Gets or sets the Extraction.                                                                                                                                               |
| [`Reference`](#MomentReaction.Reference)                                   | Gets the Reference.                                                                                                                                                        |
| [`ScaleFactor`](#MomentReaction.ScaleFactor)                               | Gets or sets the ScaleFactor.                                                                                                                                              |
| [`By`](#MomentReaction.By)                                                 | Gets or sets the By.                                                                                                                                                       |
| [`Beam`](#MomentReaction.Beam)                                             | Gets or sets the Beam.                                                                                                                                                     |
| [`RemotePoints`](#MomentReaction.RemotePoints)                             | Gets or sets the RemotePoints.                                                                                                                                             |
| [`DataModelObjectCategory`](#MomentReaction.DataModelObjectCategory)       | Gets the current DataModelObjectâ€™s category.                                                                                                                               |
| [`Summation`](#MomentReaction.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#MomentReaction.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#MomentReaction.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#MomentReaction.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#MomentReaction.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSpringsâ€™, please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSpringsâ€™. |
| [`ContactRegionSelection`](#MomentReaction.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#MomentReaction.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#MomentReaction.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#MomentReaction.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#MomentReaction.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#MomentReaction.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#MomentReaction.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#MomentReaction.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#MomentReaction.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#MomentReaction.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#MomentReaction.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#MomentReaction.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#MomentReaction.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#MomentReaction.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#MomentReaction.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#MomentReaction.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#MomentReaction.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#MomentReaction.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#MomentReaction.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#MomentReaction.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#MomentReaction.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#MomentReaction.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#MomentReaction.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#MomentReaction.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#MomentReaction.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#MomentReaction.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#MomentReaction.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#MomentReaction.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#MomentReaction.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#MomentReaction.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#MomentReaction.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#MomentReaction.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#MomentReaction.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#MomentReaction.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#MomentReaction.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#MomentReaction.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#MomentReaction.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="MomentReaction.InternalObject"></a>

### *property* MomentReaction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Probability"></a>

### *property* MomentReaction.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ScaleFactorValue"></a>

### *property* MomentReaction.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Mode"></a>

### *property* MomentReaction.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.SymmetryMultiplier"></a>

### *property* MomentReaction.SymmetryMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ReportedFrequency"></a>

### *property* MomentReaction.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Frequency"></a>

### *property* MomentReaction.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.SweepingPhase"></a>

### *property* MomentReaction.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.PhaseIncrement"></a>

### *property* MomentReaction.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.SurfaceArea"></a>

### *property* MomentReaction.SurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ContactForce"></a>

### *property* MomentReaction.ContactForce *: [Ansys.Mechanical.DataModel.Enums.ContactForceType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactForceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactForceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactForce.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Extraction"></a>

### *property* MomentReaction.Extraction *: [Ansys.Mechanical.DataModel.Enums.ProbeExtractionType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProbeExtractionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeExtractionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Extraction.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Reference"></a>

### *property* MomentReaction.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ScaleFactor"></a>

### *property* MomentReaction.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.By"></a>

### *property* MomentReaction.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Beam"></a>

### *property* MomentReaction.Beam *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Beam.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.RemotePoints"></a>

### *property* MomentReaction.RemotePoints *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.DataModelObjectCategory"></a>

### *property* MomentReaction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Summation"></a>

### *property* MomentReaction.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.LocationMethod"></a>

### *property* MomentReaction.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.GeometryLocation"></a>

### *property* MomentReaction.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.CoordinateSystemSelection"></a>

### *property* MomentReaction.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.BoundaryConditionSelection"></a>

### *property* MomentReaction.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSpringsâ€™, please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSpringsâ€™.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ContactRegionSelection"></a>

### *property* MomentReaction.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.RemotePointSelection"></a>

### *property* MomentReaction.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.BeamSelection"></a>

### *property* MomentReaction.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MeshConnectionSelection"></a>

### *property* MomentReaction.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.SurfaceSelection"></a>

### *property* MomentReaction.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.SpringSelection"></a>

### *property* MomentReaction.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.IsSolved"></a>

### *property* MomentReaction.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Orientation"></a>

### *property* MomentReaction.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.IterationNumber"></a>

### *property* MomentReaction.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.LoadStep"></a>

### *property* MomentReaction.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.LoadStepNumber"></a>

### *property* MomentReaction.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Substep"></a>

### *property* MomentReaction.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.DisplayTime"></a>

### *property* MomentReaction.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MaximumTotal"></a>

### *property* MomentReaction.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MaximumXAxis"></a>

### *property* MomentReaction.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MaximumYAxis"></a>

### *property* MomentReaction.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MaximumZAxis"></a>

### *property* MomentReaction.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MinimumTotal"></a>

### *property* MomentReaction.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MinimumXAxis"></a>

### *property* MomentReaction.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MinimumYAxis"></a>

### *property* MomentReaction.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.MinimumZAxis"></a>

### *property* MomentReaction.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Time"></a>

### *property* MomentReaction.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Total"></a>

### *property* MomentReaction.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.XAxis"></a>

### *property* MomentReaction.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.YAxis"></a>

### *property* MomentReaction.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ZAxis"></a>

### *property* MomentReaction.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ResultSelection"></a>

### *property* MomentReaction.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.SpatialResolution"></a>

### *property* MomentReaction.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Type"></a>

### *property* MomentReaction.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.DpfEvaluation"></a>

### *property* MomentReaction.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Suppressed"></a>

### *property* MomentReaction.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Children"></a>

### *property* MomentReaction.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Comments"></a>

### *property* MomentReaction.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Figures"></a>

### *property* MomentReaction.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Images"></a>

### *property* MomentReaction.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MomentReaction.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Properties"></a>

### *property* MomentReaction.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.VisibleProperties"></a>

### *property* MomentReaction.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MomentReaction.ExportAnimation"></a>

### MomentReaction.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.ClearGeneratedData"></a>

### MomentReaction.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.DuplicateWithoutResults"></a>

### MomentReaction.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.EvaluateAllResults"></a>

### MomentReaction.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.SnapToMeshNodes"></a>

### MomentReaction.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.RenameBasedOnDefinition"></a>

### MomentReaction.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Delete"></a>

### MomentReaction.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.GetChildren"></a>

### MomentReaction.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MomentReaction.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.AddComment"></a>

### MomentReaction.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.AddFigure"></a>

### MomentReaction.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.AddImage"></a>

### MomentReaction.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Activate"></a>

### MomentReaction.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.CopyTo"></a>

### MomentReaction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.Duplicate"></a>

### MomentReaction.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.GroupAllSimilarChildren"></a>

### MomentReaction.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.GroupSimilarObjects"></a>

### MomentReaction.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.PropertyByName"></a>

### MomentReaction.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.PropertyByAPIName"></a>

### MomentReaction.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.CreateParameter"></a>

### MomentReaction.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.GetParameter"></a>

### MomentReaction.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MomentReaction.RemoveParameter"></a>

### MomentReaction.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

