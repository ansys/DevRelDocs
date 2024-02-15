# QualityFactor

### *class* QualityFactor

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a QualityFactor.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#QualityFactor.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#QualityFactor.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#QualityFactor.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#QualityFactor.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#QualityFactor.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#QualityFactor.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#QualityFactor.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#QualityFactor.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#QualityFactor.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#QualityFactor.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#QualityFactor.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#QualityFactor.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#QualityFactor.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#QualityFactor.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#QualityFactor.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#QualityFactor.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#QualityFactor.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#QualityFactor.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#QualityFactor.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#QualityFactor.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`MaximumQualityFactor`](#QualityFactor.MaximumQualityFactor)                                                             | Gets the MaximumQualityFactor.                                                                                                                                             |
| [`MinimumQualityFactor`](#QualityFactor.MinimumQualityFactor)                                                             | Gets the MinimumQualityFactor.                                                                                                                                             |
| [`QualityFactorValue`](#QualityFactor.QualityFactorValue)                                                                 | Gets the QualityFactorValue.                                                                                                                                               |
| [`SetNumber`](#QualityFactor.SetNumber)                                                                                   | Gets or sets the SetNumber.                                                                                                                                                |
| [`ReportedFrequency`](#QualityFactor.ReportedFrequency)                                                                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`Frequency`](#QualityFactor.Frequency)                                                                                   | Gets or sets the Frequency.                                                                                                                                                |
| [`SweepingPhase`](#QualityFactor.SweepingPhase)                                                                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`By`](#QualityFactor.By)                                                                                                 | Gets or sets the By.                                                                                                                                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#QualityFactor.Summation)                                                                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#QualityFactor.LocationMethod)                                                                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#QualityFactor.GeometryLocation)                                                                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#QualityFactor.CoordinateSystemSelection)                                                   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#QualityFactor.BoundaryConditionSelection)                                                 | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#QualityFactor.ContactRegionSelection)                                                         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#QualityFactor.RemotePointSelection)                                                             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#QualityFactor.BeamSelection)                                                                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#QualityFactor.MeshConnectionSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#QualityFactor.SurfaceSelection)                                                                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#QualityFactor.SpringSelection)                                                                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#QualityFactor.IsSolved)                                                                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#QualityFactor.Orientation)                                                                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#QualityFactor.IterationNumber)                                                                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#QualityFactor.LoadStep)                                                                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#QualityFactor.LoadStepNumber)                                                                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#QualityFactor.Substep)                                                                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#QualityFactor.DisplayTime)                                                                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#QualityFactor.MaximumTotal)                                                                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#QualityFactor.MaximumXAxis)                                                                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#QualityFactor.MaximumYAxis)                                                                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#QualityFactor.MaximumZAxis)                                                                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#QualityFactor.MinimumTotal)                                                                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#QualityFactor.MinimumXAxis)                                                                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#QualityFactor.MinimumYAxis)                                                                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#QualityFactor.MinimumZAxis)                                                                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#QualityFactor.Time)                                                                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#QualityFactor.Total)                                                                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#QualityFactor.XAxis)                                                                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#QualityFactor.YAxis)                                                                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#QualityFactor.ZAxis)                                                                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#QualityFactor.ResultSelection)                                                                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#QualityFactor.SpatialResolution)                                                                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#QualityFactor.Type)                                                                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#QualityFactor.DpfEvaluation)                                                                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#QualityFactor.Suppressed)                                                                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#QualityFactor.Children)                                                                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#QualityFactor.Comments)                                                                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#QualityFactor.Figures)                                                                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#QualityFactor.Images)                                                                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#QualityFactor.Properties)                                                                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#QualityFactor.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import QualityFactor
```

## Property detail

### *property* QualityFactor.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MaximumQualityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumQualityFactor.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MinimumQualityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumQualityFactor.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.QualityFactorValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the QualityFactorValue.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* QualityFactor.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### QualityFactor.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### QualityFactor.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### QualityFactor.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### QualityFactor.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### QualityFactor.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### QualityFactor.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### QualityFactor.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### QualityFactor.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### QualityFactor.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### QualityFactor.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### QualityFactor.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### QualityFactor.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### QualityFactor.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### QualityFactor.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### QualityFactor.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
