# JouleHeatProbe

### *class* JouleHeatProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a JouleHeatProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#JouleHeatProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#JouleHeatProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#JouleHeatProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#JouleHeatProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#JouleHeatProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#JouleHeatProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#JouleHeatProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#JouleHeatProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#JouleHeatProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#JouleHeatProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#JouleHeatProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#JouleHeatProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#JouleHeatProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#JouleHeatProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#JouleHeatProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#JouleHeatProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#JouleHeatProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#JouleHeatProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#JouleHeatProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#JouleHeatProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`SetNumber`](#JouleHeatProbe.SetNumber)                                                                                  | Gets or sets the SetNumber.                                                                                                                                                |
| [`ReportedFrequency`](#JouleHeatProbe.ReportedFrequency)                                                                  | Gets the ReportedFrequency.                                                                                                                                                |
| [`Frequency`](#JouleHeatProbe.Frequency)                                                                                  | Gets or sets the Frequency.                                                                                                                                                |
| [`JouleHeat`](../ElectricResults/JouleHeat.md#JouleHeat)                                                                  | Gets the JouleHeat.                                                                                                                                                        |
| [`MaximumJouleHeat`](#JouleHeatProbe.MaximumJouleHeat)                                                                    | Gets the MaximumJouleHeat.                                                                                                                                                 |
| [`MinimumJouleHeat`](#JouleHeatProbe.MinimumJouleHeat)                                                                    | Gets the MinimumJouleHeat.                                                                                                                                                 |
| [`SweepingPhase`](#JouleHeatProbe.SweepingPhase)                                                                          | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`By`](#JouleHeatProbe.By)                                                                                                | Gets or sets the By.                                                                                                                                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#JouleHeatProbe.Summation)                                                                                  | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#JouleHeatProbe.LocationMethod)                                                                        | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#JouleHeatProbe.GeometryLocation)                                                                    | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#JouleHeatProbe.CoordinateSystemSelection)                                                  | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#JouleHeatProbe.BoundaryConditionSelection)                                                | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#JouleHeatProbe.ContactRegionSelection)                                                        | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#JouleHeatProbe.RemotePointSelection)                                                            | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#JouleHeatProbe.BeamSelection)                                                                          | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#JouleHeatProbe.MeshConnectionSelection)                                                      | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#JouleHeatProbe.SurfaceSelection)                                                                    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#JouleHeatProbe.SpringSelection)                                                                      | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#JouleHeatProbe.IsSolved)                                                                                    | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#JouleHeatProbe.Orientation)                                                                              | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#JouleHeatProbe.IterationNumber)                                                                      | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#JouleHeatProbe.LoadStep)                                                                                    | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#JouleHeatProbe.LoadStepNumber)                                                                        | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#JouleHeatProbe.Substep)                                                                                      | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#JouleHeatProbe.DisplayTime)                                                                              | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#JouleHeatProbe.MaximumTotal)                                                                            | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#JouleHeatProbe.MaximumXAxis)                                                                            | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#JouleHeatProbe.MaximumYAxis)                                                                            | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#JouleHeatProbe.MaximumZAxis)                                                                            | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#JouleHeatProbe.MinimumTotal)                                                                            | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#JouleHeatProbe.MinimumXAxis)                                                                            | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#JouleHeatProbe.MinimumYAxis)                                                                            | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#JouleHeatProbe.MinimumZAxis)                                                                            | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#JouleHeatProbe.Time)                                                                                            | Gets the Time.                                                                                                                                                             |
| [`Total`](#JouleHeatProbe.Total)                                                                                          | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#JouleHeatProbe.XAxis)                                                                                          | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#JouleHeatProbe.YAxis)                                                                                          | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#JouleHeatProbe.ZAxis)                                                                                          | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#JouleHeatProbe.ResultSelection)                                                                      | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#JouleHeatProbe.SpatialResolution)                                                                  | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#JouleHeatProbe.Type)                                                                                            | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#JouleHeatProbe.DpfEvaluation)                                                                          | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#JouleHeatProbe.Suppressed)                                                                                | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#JouleHeatProbe.Children)                                                                                    | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#JouleHeatProbe.Comments)                                                                                    | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#JouleHeatProbe.Figures)                                                                                      | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#JouleHeatProbe.Images)                                                                                        | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#JouleHeatProbe.Properties)                                                                                | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#JouleHeatProbe.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import JouleHeatProbe
```

## Property detail

### *property* JouleHeatProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.JouleHeat *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the JouleHeat.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MaximumJouleHeat *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumJouleHeat.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MinimumJouleHeat *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumJouleHeat.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* JouleHeatProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### JouleHeatProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### JouleHeatProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
