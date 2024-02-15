# FractureTotalNumberOfCyclesProbe

### *class* FractureTotalNumberOfCyclesProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a FractureTotalNumberOfCyclesProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#FractureTotalNumberOfCyclesProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#FractureTotalNumberOfCyclesProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#FractureTotalNumberOfCyclesProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#FractureTotalNumberOfCyclesProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#FractureTotalNumberOfCyclesProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#FractureTotalNumberOfCyclesProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#FractureTotalNumberOfCyclesProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FractureTotalNumberOfCyclesProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FractureTotalNumberOfCyclesProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FractureTotalNumberOfCyclesProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FractureTotalNumberOfCyclesProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FractureTotalNumberOfCyclesProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FractureTotalNumberOfCyclesProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FractureTotalNumberOfCyclesProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FractureTotalNumberOfCyclesProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FractureTotalNumberOfCyclesProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FractureTotalNumberOfCyclesProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FractureTotalNumberOfCyclesProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FractureTotalNumberOfCyclesProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FractureTotalNumberOfCyclesProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ResultProbeValue`](#FractureTotalNumberOfCyclesProbe.ResultProbeValue)                                                  | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#FractureTotalNumberOfCyclesProbe.MaximumValueOverTime)                                          | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#FractureTotalNumberOfCyclesProbe.MinimumValueOverTime)                                          | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#FractureTotalNumberOfCyclesProbe.ActiveContour)                                                        | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#FractureTotalNumberOfCyclesProbe.CrackLengthPercentage)                                        | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#FractureTotalNumberOfCyclesProbe.SolverID)                                                                  | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#FractureTotalNumberOfCyclesProbe.Summation)                                                                | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FractureTotalNumberOfCyclesProbe.LocationMethod)                                                      | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FractureTotalNumberOfCyclesProbe.GeometryLocation)                                                  | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FractureTotalNumberOfCyclesProbe.CoordinateSystemSelection)                                | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FractureTotalNumberOfCyclesProbe.BoundaryConditionSelection)                              | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FractureTotalNumberOfCyclesProbe.ContactRegionSelection)                                      | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FractureTotalNumberOfCyclesProbe.RemotePointSelection)                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FractureTotalNumberOfCyclesProbe.BeamSelection)                                                        | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FractureTotalNumberOfCyclesProbe.MeshConnectionSelection)                                    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FractureTotalNumberOfCyclesProbe.SurfaceSelection)                                                  | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FractureTotalNumberOfCyclesProbe.SpringSelection)                                                    | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FractureTotalNumberOfCyclesProbe.IsSolved)                                                                  | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FractureTotalNumberOfCyclesProbe.Orientation)                                                            | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FractureTotalNumberOfCyclesProbe.IterationNumber)                                                    | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FractureTotalNumberOfCyclesProbe.LoadStep)                                                                  | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FractureTotalNumberOfCyclesProbe.LoadStepNumber)                                                      | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FractureTotalNumberOfCyclesProbe.Substep)                                                                    | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FractureTotalNumberOfCyclesProbe.DisplayTime)                                                            | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FractureTotalNumberOfCyclesProbe.MaximumTotal)                                                          | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FractureTotalNumberOfCyclesProbe.MaximumXAxis)                                                          | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FractureTotalNumberOfCyclesProbe.MaximumYAxis)                                                          | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FractureTotalNumberOfCyclesProbe.MaximumZAxis)                                                          | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FractureTotalNumberOfCyclesProbe.MinimumTotal)                                                          | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FractureTotalNumberOfCyclesProbe.MinimumXAxis)                                                          | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FractureTotalNumberOfCyclesProbe.MinimumYAxis)                                                          | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FractureTotalNumberOfCyclesProbe.MinimumZAxis)                                                          | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FractureTotalNumberOfCyclesProbe.Time)                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#FractureTotalNumberOfCyclesProbe.Total)                                                                        | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FractureTotalNumberOfCyclesProbe.XAxis)                                                                        | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FractureTotalNumberOfCyclesProbe.YAxis)                                                                        | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FractureTotalNumberOfCyclesProbe.ZAxis)                                                                        | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FractureTotalNumberOfCyclesProbe.ResultSelection)                                                    | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FractureTotalNumberOfCyclesProbe.SpatialResolution)                                                | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FractureTotalNumberOfCyclesProbe.Type)                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FractureTotalNumberOfCyclesProbe.DpfEvaluation)                                                        | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FractureTotalNumberOfCyclesProbe.Suppressed)                                                              | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FractureTotalNumberOfCyclesProbe.Children)                                                                  | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FractureTotalNumberOfCyclesProbe.Comments)                                                                  | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FractureTotalNumberOfCyclesProbe.Figures)                                                                    | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FractureTotalNumberOfCyclesProbe.Images)                                                                      | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FractureTotalNumberOfCyclesProbe.Properties)                                                              | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FractureTotalNumberOfCyclesProbe.VisibleProperties)                                                | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults import FractureTotalNumberOfCyclesProbe
```

## Property detail

### *property* FractureTotalNumberOfCyclesProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.ResultProbeValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MaximumValueOverTime *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MinimumValueOverTime *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FractureTotalNumberOfCyclesProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### FractureTotalNumberOfCyclesProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FractureTotalNumberOfCyclesProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
