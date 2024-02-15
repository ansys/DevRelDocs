# ForceReaction

### *class* ForceReaction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ForceReaction.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ForceReaction.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ForceReaction.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ForceReaction.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ForceReaction.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ForceReaction.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ForceReaction.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ForceReaction.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ForceReaction.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ForceReaction.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ForceReaction.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ForceReaction.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ForceReaction.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ForceReaction.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ForceReaction.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ForceReaction.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ForceReaction.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ForceReaction.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ForceReaction.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ForceReaction.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ForceReaction.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Probability`](#ForceReaction.Probability)                                                                               | Gets the Probability.                                                                                                                                                      |
| [`ScaleFactorValue`](#ForceReaction.ScaleFactorValue)                                                                     | Gets or sets the ScaleFactorValue.                                                                                                                                         |
| [`Mode`](#ForceReaction.Mode)                                                                                             | Gets or sets the Mode.                                                                                                                                                     |
| [`SymmetryMultiplier`](#ForceReaction.SymmetryMultiplier)                                                                 | Gets or sets the SymmetryMultiplier.                                                                                                                                       |
| [`ReportedFrequency`](#ForceReaction.ReportedFrequency)                                                                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`Frequency`](#ForceReaction.Frequency)                                                                                   | Gets or sets the Frequency.                                                                                                                                                |
| [`SweepingPhase`](#ForceReaction.SweepingPhase)                                                                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`PhaseIncrement`](#ForceReaction.PhaseIncrement)                                                                         | Gets or sets the PhaseIncrement.                                                                                                                                           |
| [`SurfaceArea`](#ForceReaction.SurfaceArea)                                                                               | Gets the SurfaceArea.                                                                                                                                                      |
| [`ContactForce`](#ForceReaction.ContactForce)                                                                             | Gets or sets the ContactForce.                                                                                                                                             |
| [`Extraction`](#ForceReaction.Extraction)                                                                                 | Gets or sets the Extraction.                                                                                                                                               |
| [`Reference`](#ForceReaction.Reference)                                                                                   | Gets the Reference.                                                                                                                                                        |
| [`ScaleFactor`](#ForceReaction.ScaleFactor)                                                                               | Gets or sets the ScaleFactor.                                                                                                                                              |
| [`By`](#ForceReaction.By)                                                                                                 | Gets or sets the By.                                                                                                                                                       |
| [`Beam`](../../Connections/Beam.md#Beam)                                                                                  | Gets or sets the Beam.                                                                                                                                                     |
| [`RemotePoints`](../../RemotePoints.md#RemotePoints)                                                                      | Gets or sets the RemotePoints.                                                                                                                                             |
| [`Spring`](../../Connections/Spring.md#Spring)                                                                            | Gets or sets the Spring.                                                                                                                                                   |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ForceReaction.Summation)                                                                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ForceReaction.LocationMethod)                                                                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ForceReaction.GeometryLocation)                                                                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ForceReaction.CoordinateSystemSelection)                                                   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ForceReaction.BoundaryConditionSelection)                                                 | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ForceReaction.ContactRegionSelection)                                                         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ForceReaction.RemotePointSelection)                                                             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ForceReaction.BeamSelection)                                                                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ForceReaction.MeshConnectionSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ForceReaction.SurfaceSelection)                                                                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ForceReaction.SpringSelection)                                                                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ForceReaction.IsSolved)                                                                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ForceReaction.Orientation)                                                                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ForceReaction.IterationNumber)                                                                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ForceReaction.LoadStep)                                                                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ForceReaction.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ForceReaction.Substep)                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ForceReaction.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ForceReaction.MaximumTotal)                                                                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ForceReaction.MaximumXAxis)                                                                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ForceReaction.MaximumYAxis)                                                                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ForceReaction.MaximumZAxis)                                                                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ForceReaction.MinimumTotal)                                                                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ForceReaction.MinimumXAxis)                                                                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ForceReaction.MinimumYAxis)                                                                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ForceReaction.MinimumZAxis)                                                                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ForceReaction.Time)                                                                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ForceReaction.Total)                                                                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ForceReaction.XAxis)                                                                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ForceReaction.YAxis)                                                                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ForceReaction.ZAxis)                                                                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ForceReaction.ResultSelection)                                                                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ForceReaction.SpatialResolution)                                                                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ForceReaction.Type)                                                                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ForceReaction.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ForceReaction.Suppressed)                                                                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ForceReaction.Children)                                                                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ForceReaction.Comments)                                                                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ForceReaction.Figures)                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ForceReaction.Images)                                                                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ForceReaction.Properties)                                                                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ForceReaction.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ForceReaction
```

## Property detail

### *property* ForceReaction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Probability *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.ScaleFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Mode *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.SymmetryMultiplier *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SymmetryMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.PhaseIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseIncrement.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.SurfaceArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SurfaceArea.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.ContactForce *: [Ansys.Mechanical.DataModel.Enums.ContactForceType](../../../../../Mechanical/DataModel/Enums/ContactForceType.md#ContactForceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactForce.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Extraction *: [Ansys.Mechanical.DataModel.Enums.ProbeExtractionType](../../../../../Mechanical/DataModel/Enums/ProbeExtractionType.md#ProbeExtractionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Extraction.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ResultRelativityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Reference.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.ScaleFactor *: [Ansys.Mechanical.DataModel.Enums.ScaleFactorType](../../../../../Mechanical/DataModel/Enums/ScaleFactorType.md#ScaleFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Beam *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Beam.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.RemotePoints *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePoints.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Spring *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Spring.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ForceReaction.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ForceReaction.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### ForceReaction.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ForceReaction.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ForceReaction.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ForceReaction.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ForceReaction.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ForceReaction.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ForceReaction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ForceReaction.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ForceReaction.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ForceReaction.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ForceReaction.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ForceReaction.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ForceReaction.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ForceReaction.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
