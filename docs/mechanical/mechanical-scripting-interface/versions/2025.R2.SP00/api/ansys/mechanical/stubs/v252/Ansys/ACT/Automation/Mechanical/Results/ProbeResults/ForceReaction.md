# `ForceReaction`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ForceReaction"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ForceReaction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ForceReaction.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ForceReaction.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#ForceReaction.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ForceReaction.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#ForceReaction.AddImage)                               | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#ForceReaction.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#ForceReaction.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#ForceReaction.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#ForceReaction.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#ForceReaction.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#ForceReaction.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                        |
| [`EvaluateAllResults`](#ForceReaction.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#ForceReaction.ExportAnimation)                 | Run the ExportAnimation action.                                                                |
| [`GetChildren`](#ForceReaction.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#ForceReaction.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#ForceReaction.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ForceReaction.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`PropertyByAPIName`](#ForceReaction.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#ForceReaction.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`RemoveParameter`](#ForceReaction.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#ForceReaction.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#ForceReaction.RetrieveResult)                   | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#ForceReaction.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Beam`](#ForceReaction.Beam)                                             | Gets or sets the Beam.                                                                                                                                                     |
| [`BeamSelection`](#ForceReaction.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#ForceReaction.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`By`](#ForceReaction.By)                                                 | Gets or sets the By.                                                                                                                                                       |
| [`Children`](#ForceReaction.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ForceReaction.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactForce`](#ForceReaction.ContactForce)                             | Gets or sets the ContactForce.                                                                                                                                             |
| [`ContactRegionSelection`](#ForceReaction.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#ForceReaction.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#ForceReaction.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#ForceReaction.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#ForceReaction.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Extraction`](#ForceReaction.Extraction)                                 | Gets or sets the Extraction.                                                                                                                                               |
| [`Figures`](#ForceReaction.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Frequency`](#ForceReaction.Frequency)                                   | Gets or sets the Frequency.                                                                                                                                                |
| [`GeometryLocation`](#ForceReaction.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#ForceReaction.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#ForceReaction.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#ForceReaction.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#ForceReaction.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ForceReaction.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ForceReaction.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#ForceReaction.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#ForceReaction.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ForceReaction.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ForceReaction.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ForceReaction.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#ForceReaction.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#ForceReaction.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ForceReaction.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ForceReaction.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ForceReaction.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Mode`](#ForceReaction.Mode)                                             | Gets or sets the Mode.                                                                                                                                                     |
| [`Orientation`](#ForceReaction.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`PhaseIncrement`](#ForceReaction.PhaseIncrement)                         | Gets or sets the PhaseIncrement.                                                                                                                                           |
| [`Probability`](#ForceReaction.Probability)                               | Gets the Probability.                                                                                                                                                      |
| [`Properties`](#ForceReaction.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#ForceReaction.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`Reference`](#ForceReaction.Reference)                                   | Gets the Reference.                                                                                                                                                        |
| [`RemotePointSelection`](#ForceReaction.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`RemotePoints`](#ForceReaction.RemotePoints)                             | Gets or sets the RemotePoints.                                                                                                                                             |
| [`ReportedFrequency`](#ForceReaction.ReportedFrequency)                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`ResultSelection`](#ForceReaction.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`ScaleFactor`](#ForceReaction.ScaleFactor)                               | Gets or sets the ScaleFactor.                                                                                                                                              |
| [`ScaleFactorValue`](#ForceReaction.ScaleFactorValue)                     | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| [`SpatialResolution`](#ForceReaction.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Spring`](#ForceReaction.Spring)                                         | Gets or sets the Spring.                                                                                                                                                   |
| [`SpringSelection`](#ForceReaction.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Substep`](#ForceReaction.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#ForceReaction.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#ForceReaction.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceArea`](#ForceReaction.SurfaceArea)                               | Gets the SurfaceArea.                                                                                                                                                      |
| [`SurfaceSelection`](#ForceReaction.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SweepingPhase`](#ForceReaction.SweepingPhase)                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`SymmetryMultiplier`](#ForceReaction.SymmetryMultiplier)                 | Gets or sets the SymmetryMultiplier.                                                                                                                                       |
| [`Time`](#ForceReaction.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ForceReaction.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#ForceReaction.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#ForceReaction.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#ForceReaction.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ForceReaction.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ForceReaction.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="ForceReaction.Beam"></a>

### *property* ForceReaction.Beam *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Beam.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.BeamSelection"></a>

### *property* ForceReaction.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.BoundaryConditionSelection"></a>

### *property* ForceReaction.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.By"></a>

### *property* ForceReaction.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Children"></a>

### *property* ForceReaction.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Comments"></a>

### *property* ForceReaction.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ContactForce"></a>

### *property* ForceReaction.ContactForce *: [Ansys.Mechanical.DataModel.Enums.ContactForceType](../../../../../Mechanical/DataModel/Enums/ContactForceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactForceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactForce.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ContactRegionSelection"></a>

### *property* ForceReaction.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.CoordinateSystemSelection"></a>

### *property* ForceReaction.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.DataModelObjectCategory"></a>

### *property* ForceReaction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.DisplayTime"></a>

### *property* ForceReaction.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.DpfEvaluation"></a>

### *property* ForceReaction.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Extraction"></a>

### *property* ForceReaction.Extraction *: [Ansys.Mechanical.DataModel.Enums.ProbeExtractionType](../../../../../Mechanical/DataModel/Enums/ProbeExtractionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeExtractionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Extraction.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Figures"></a>

### *property* ForceReaction.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Frequency"></a>

### *property* ForceReaction.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.GeometryLocation"></a>

### *property* ForceReaction.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Images"></a>

### *property* ForceReaction.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.InternalObject"></a>

### *property* ForceReaction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.IsSolved"></a>

### *property* ForceReaction.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.IterationNumber"></a>

### *property* ForceReaction.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.LoadStep"></a>

### *property* ForceReaction.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.LoadStepNumber"></a>

### *property* ForceReaction.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.LocationMethod"></a>

### *property* ForceReaction.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MaximumTotal"></a>

### *property* ForceReaction.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MaximumXAxis"></a>

### *property* ForceReaction.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MaximumYAxis"></a>

### *property* ForceReaction.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MaximumZAxis"></a>

### *property* ForceReaction.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MeshConnectionSelection"></a>

### *property* ForceReaction.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MinimumTotal"></a>

### *property* ForceReaction.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MinimumXAxis"></a>

### *property* ForceReaction.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MinimumYAxis"></a>

### *property* ForceReaction.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.MinimumZAxis"></a>

### *property* ForceReaction.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Mode"></a>

### *property* ForceReaction.Mode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Orientation"></a>

### *property* ForceReaction.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.PhaseIncrement"></a>

### *property* ForceReaction.PhaseIncrement *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Probability"></a>

### *property* ForceReaction.Probability *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Properties"></a>

### *property* ForceReaction.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.RPMSelection"></a>

### *property* ForceReaction.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Reference"></a>

### *property* ForceReaction.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.RemotePointSelection"></a>

### *property* ForceReaction.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.RemotePoints"></a>

### *property* ForceReaction.RemotePoints *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePoints.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ReportedFrequency"></a>

### *property* ForceReaction.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ResultSelection"></a>

### *property* ForceReaction.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ScaleFactor"></a>

### *property* ForceReaction.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ScaleFactorValue"></a>

### *property* ForceReaction.ScaleFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.SpatialResolution"></a>

### *property* ForceReaction.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Spring"></a>

### *property* ForceReaction.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.SpringSelection"></a>

### *property* ForceReaction.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Substep"></a>

### *property* ForceReaction.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Summation"></a>

### *property* ForceReaction.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Suppressed"></a>

### *property* ForceReaction.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.SurfaceArea"></a>

### *property* ForceReaction.SurfaceArea *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.SurfaceSelection"></a>

### *property* ForceReaction.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.SweepingPhase"></a>

### *property* ForceReaction.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.SymmetryMultiplier"></a>

### *property* ForceReaction.SymmetryMultiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Time"></a>

### *property* ForceReaction.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Total"></a>

### *property* ForceReaction.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Type"></a>

### *property* ForceReaction.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.VisibleProperties"></a>

### *property* ForceReaction.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.XAxis"></a>

### *property* ForceReaction.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.YAxis"></a>

### *property* ForceReaction.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ZAxis"></a>

### *property* ForceReaction.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ForceReaction.Activate"></a>

### ForceReaction.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.AddComment"></a>

### ForceReaction.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.AddFigure"></a>

### ForceReaction.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.AddImage"></a>

### ForceReaction.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ClearGeneratedData"></a>

### ForceReaction.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.CopyTo"></a>

### ForceReaction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.CreateParameter"></a>

### ForceReaction.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Delete"></a>

### ForceReaction.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.Duplicate"></a>

### ForceReaction.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.DuplicateWithoutResults"></a>

### ForceReaction.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.EvaluateAllResults"></a>

### ForceReaction.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.ExportAnimation"></a>

### ForceReaction.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.GetChildren"></a>

### ForceReaction.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.GetParameter"></a>

### ForceReaction.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.GroupAllSimilarChildren"></a>

### ForceReaction.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.GroupSimilarObjects"></a>

### ForceReaction.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.PropertyByAPIName"></a>

### ForceReaction.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.PropertyByName"></a>

### ForceReaction.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.RemoveParameter"></a>

### ForceReaction.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.RenameBasedOnDefinition"></a>

### ForceReaction.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.RetrieveResult"></a>

### ForceReaction.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="ForceReaction.SnapToMeshNodes"></a>

### ForceReaction.SnapToMeshNodes() → [None](https://docs.python.org/3/library/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

