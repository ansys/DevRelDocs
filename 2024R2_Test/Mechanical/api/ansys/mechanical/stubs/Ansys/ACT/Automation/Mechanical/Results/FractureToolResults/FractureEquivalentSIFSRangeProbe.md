# FractureEquivalentSIFSRangeProbe

### *class* FractureEquivalentSIFSRangeProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureEquivalentSIFSRangeProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#FractureEquivalentSIFSRangeProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FractureEquivalentSIFSRangeProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#FractureEquivalentSIFSRangeProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FractureEquivalentSIFSRangeProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#FractureEquivalentSIFSRangeProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#FractureEquivalentSIFSRangeProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FractureEquivalentSIFSRangeProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FractureEquivalentSIFSRangeProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FractureEquivalentSIFSRangeProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FractureEquivalentSIFSRangeProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FractureEquivalentSIFSRangeProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FractureEquivalentSIFSRangeProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FractureEquivalentSIFSRangeProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FractureEquivalentSIFSRangeProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FractureEquivalentSIFSRangeProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FractureEquivalentSIFSRangeProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FractureEquivalentSIFSRangeProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FractureEquivalentSIFSRangeProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FractureEquivalentSIFSRangeProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FractureEquivalentSIFSRangeProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ResultProbeValue`](#FractureEquivalentSIFSRangeProbe.ResultProbeValue)                                                  | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#FractureEquivalentSIFSRangeProbe.MaximumValueOverTime)                                          | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#FractureEquivalentSIFSRangeProbe.MinimumValueOverTime)                                          | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#FractureEquivalentSIFSRangeProbe.ActiveContour)                                                        | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#FractureEquivalentSIFSRangeProbe.CrackLengthPercentage)                                        | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#FractureEquivalentSIFSRangeProbe.SolverID)                                                                  | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#FractureEquivalentSIFSRangeProbe.Summation)                                                                | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FractureEquivalentSIFSRangeProbe.LocationMethod)                                                      | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FractureEquivalentSIFSRangeProbe.GeometryLocation)                                                  | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FractureEquivalentSIFSRangeProbe.CoordinateSystemSelection)                                | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FractureEquivalentSIFSRangeProbe.BoundaryConditionSelection)                              | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FractureEquivalentSIFSRangeProbe.ContactRegionSelection)                                      | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FractureEquivalentSIFSRangeProbe.RemotePointSelection)                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FractureEquivalentSIFSRangeProbe.BeamSelection)                                                        | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FractureEquivalentSIFSRangeProbe.MeshConnectionSelection)                                    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FractureEquivalentSIFSRangeProbe.SurfaceSelection)                                                  | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FractureEquivalentSIFSRangeProbe.SpringSelection)                                                    | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FractureEquivalentSIFSRangeProbe.IsSolved)                                                                  | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FractureEquivalentSIFSRangeProbe.Orientation)                                                            | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FractureEquivalentSIFSRangeProbe.IterationNumber)                                                    | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FractureEquivalentSIFSRangeProbe.LoadStep)                                                                  | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FractureEquivalentSIFSRangeProbe.LoadStepNumber)                                                      | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FractureEquivalentSIFSRangeProbe.Substep)                                                                    | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FractureEquivalentSIFSRangeProbe.DisplayTime)                                                            | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FractureEquivalentSIFSRangeProbe.MaximumTotal)                                                          | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FractureEquivalentSIFSRangeProbe.MaximumXAxis)                                                          | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FractureEquivalentSIFSRangeProbe.MaximumYAxis)                                                          | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FractureEquivalentSIFSRangeProbe.MaximumZAxis)                                                          | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FractureEquivalentSIFSRangeProbe.MinimumTotal)                                                          | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FractureEquivalentSIFSRangeProbe.MinimumXAxis)                                                          | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FractureEquivalentSIFSRangeProbe.MinimumYAxis)                                                          | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FractureEquivalentSIFSRangeProbe.MinimumZAxis)                                                          | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FractureEquivalentSIFSRangeProbe.Time)                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#FractureEquivalentSIFSRangeProbe.Total)                                                                        | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FractureEquivalentSIFSRangeProbe.XAxis)                                                                        | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FractureEquivalentSIFSRangeProbe.YAxis)                                                                        | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FractureEquivalentSIFSRangeProbe.ZAxis)                                                                        | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FractureEquivalentSIFSRangeProbe.ResultSelection)                                                    | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FractureEquivalentSIFSRangeProbe.SpatialResolution)                                                | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FractureEquivalentSIFSRangeProbe.Type)                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FractureEquivalentSIFSRangeProbe.DpfEvaluation)                                                        | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FractureEquivalentSIFSRangeProbe.Suppressed)                                                              | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FractureEquivalentSIFSRangeProbe.Children)                                                                  | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FractureEquivalentSIFSRangeProbe.Comments)                                                                  | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FractureEquivalentSIFSRangeProbe.Figures)                                                                    | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FractureEquivalentSIFSRangeProbe.Images)                                                                      | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FractureEquivalentSIFSRangeProbe.Properties)                                                              | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FractureEquivalentSIFSRangeProbe.VisibleProperties)                                                | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureEquivalentSIFSRangeProbe
```

## Property detail

### *property* FractureEquivalentSIFSRangeProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FractureEquivalentSIFSRangeProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FractureEquivalentSIFSRangeProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FractureEquivalentSIFSRangeProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
