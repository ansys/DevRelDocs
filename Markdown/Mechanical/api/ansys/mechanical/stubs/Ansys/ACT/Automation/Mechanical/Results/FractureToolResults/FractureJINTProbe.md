# FractureJINTProbe

### *class* FractureJINTProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureJINTProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#FractureJINTProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FractureJINTProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#FractureJINTProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FractureJINTProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#FractureJINTProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#FractureJINTProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FractureJINTProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FractureJINTProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FractureJINTProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FractureJINTProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FractureJINTProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FractureJINTProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FractureJINTProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FractureJINTProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FractureJINTProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FractureJINTProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FractureJINTProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FractureJINTProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FractureJINTProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FractureJINTProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ResultProbeValue`](#FractureJINTProbe.ResultProbeValue)                                                                 | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#FractureJINTProbe.MaximumValueOverTime)                                                         | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#FractureJINTProbe.MinimumValueOverTime)                                                         | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#FractureJINTProbe.ActiveContour)                                                                       | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#FractureJINTProbe.CrackLengthPercentage)                                                       | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#FractureJINTProbe.SolverID)                                                                                 | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#FractureJINTProbe.Summation)                                                                               | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FractureJINTProbe.LocationMethod)                                                                     | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FractureJINTProbe.GeometryLocation)                                                                 | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FractureJINTProbe.CoordinateSystemSelection)                                               | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FractureJINTProbe.BoundaryConditionSelection)                                             | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FractureJINTProbe.ContactRegionSelection)                                                     | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FractureJINTProbe.RemotePointSelection)                                                         | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FractureJINTProbe.BeamSelection)                                                                       | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FractureJINTProbe.MeshConnectionSelection)                                                   | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FractureJINTProbe.SurfaceSelection)                                                                 | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FractureJINTProbe.SpringSelection)                                                                   | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FractureJINTProbe.IsSolved)                                                                                 | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FractureJINTProbe.Orientation)                                                                           | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FractureJINTProbe.IterationNumber)                                                                   | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FractureJINTProbe.LoadStep)                                                                                 | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FractureJINTProbe.LoadStepNumber)                                                                     | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FractureJINTProbe.Substep)                                                                                   | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FractureJINTProbe.DisplayTime)                                                                           | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FractureJINTProbe.MaximumTotal)                                                                         | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FractureJINTProbe.MaximumXAxis)                                                                         | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FractureJINTProbe.MaximumYAxis)                                                                         | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FractureJINTProbe.MaximumZAxis)                                                                         | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FractureJINTProbe.MinimumTotal)                                                                         | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FractureJINTProbe.MinimumXAxis)                                                                         | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FractureJINTProbe.MinimumYAxis)                                                                         | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FractureJINTProbe.MinimumZAxis)                                                                         | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FractureJINTProbe.Time)                                                                                         | Gets the Time.                                                                                                                                                             |
| [`Total`](#FractureJINTProbe.Total)                                                                                       | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FractureJINTProbe.XAxis)                                                                                       | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FractureJINTProbe.YAxis)                                                                                       | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FractureJINTProbe.ZAxis)                                                                                       | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FractureJINTProbe.ResultSelection)                                                                   | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FractureJINTProbe.SpatialResolution)                                                               | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FractureJINTProbe.Type)                                                                                         | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FractureJINTProbe.DpfEvaluation)                                                                       | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FractureJINTProbe.Suppressed)                                                                             | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FractureJINTProbe.Children)                                                                                 | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FractureJINTProbe.Comments)                                                                                 | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FractureJINTProbe.Figures)                                                                                   | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FractureJINTProbe.Images)                                                                                     | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FractureJINTProbe.Properties)                                                                             | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FractureJINTProbe.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureJINTProbe
```

## Property detail

### *property* FractureJINTProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FractureJINTProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FractureJINTProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FractureJINTProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
