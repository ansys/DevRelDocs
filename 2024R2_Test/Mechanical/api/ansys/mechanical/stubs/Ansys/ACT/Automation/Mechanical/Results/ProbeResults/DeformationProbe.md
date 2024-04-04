# DeformationProbe

### *class* DeformationProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DeformationProbe.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#DeformationProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#DeformationProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#DeformationProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#DeformationProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#DeformationProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#DeformationProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DeformationProbe.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DeformationProbe.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DeformationProbe.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DeformationProbe.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DeformationProbe.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DeformationProbe.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DeformationProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DeformationProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DeformationProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DeformationProbe.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DeformationProbe.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DeformationProbe.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DeformationProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DeformationProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`XAxisDeformation`](#DeformationProbe.XAxisDeformation)                                                                  | Gets the XAxisDeformation.                                                                                                                                                 |
| [`YAxisDeformation`](#DeformationProbe.YAxisDeformation)                                                                  | Gets the YAxisDeformation.                                                                                                                                                 |
| [`ZAxisDeformation`](#DeformationProbe.ZAxisDeformation)                                                                  | Gets the ZAxisDeformation.                                                                                                                                                 |
| [`XCoordinate`](#DeformationProbe.XCoordinate)                                                                            | Gets the XCoordinate.                                                                                                                                                      |
| [`YCoordinate`](#DeformationProbe.YCoordinate)                                                                            | Gets the YCoordinate.                                                                                                                                                      |
| [`ZCoordinate`](#DeformationProbe.ZCoordinate)                                                                            | Gets the ZCoordinate.                                                                                                                                                      |
| [`MaximumTotalDeformation`](#DeformationProbe.MaximumTotalDeformation)                                                    | Gets the MaximumTotalDeformation.                                                                                                                                          |
| [`MaximumXAxisDeformation`](#DeformationProbe.MaximumXAxisDeformation)                                                    | Gets the MaximumXAxisDeformation.                                                                                                                                          |
| [`MaximumYAxisDeformation`](#DeformationProbe.MaximumYAxisDeformation)                                                    | Gets the MaximumYAxisDeformation.                                                                                                                                          |
| [`MaximumZAxisDeformation`](#DeformationProbe.MaximumZAxisDeformation)                                                    | Gets the MaximumZAxisDeformation.                                                                                                                                          |
| [`MinimumTotalDeformation`](#DeformationProbe.MinimumTotalDeformation)                                                    | Gets the MinimumTotalDeformation.                                                                                                                                          |
| [`MinimumXAxisDeformation`](#DeformationProbe.MinimumXAxisDeformation)                                                    | Gets the MinimumXAxisDeformation.                                                                                                                                          |
| [`MinimumYAxisDeformation`](#DeformationProbe.MinimumYAxisDeformation)                                                    | Gets the MinimumYAxisDeformation.                                                                                                                                          |
| [`MinimumZAxisDeformation`](#DeformationProbe.MinimumZAxisDeformation)                                                    | Gets the MinimumZAxisDeformation.                                                                                                                                          |
| [`TotalDeformation`](../DeformationResults/TotalDeformation.md#TotalDeformation)                                          | Gets the TotalDeformation.                                                                                                                                                 |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#DeformationProbe.Summation)                                                                                | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#DeformationProbe.LocationMethod)                                                                      | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#DeformationProbe.GeometryLocation)                                                                  | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#DeformationProbe.CoordinateSystemSelection)                                                | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#DeformationProbe.BoundaryConditionSelection)                                              | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#DeformationProbe.ContactRegionSelection)                                                      | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#DeformationProbe.RemotePointSelection)                                                          | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#DeformationProbe.BeamSelection)                                                                        | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#DeformationProbe.MeshConnectionSelection)                                                    | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#DeformationProbe.SurfaceSelection)                                                                  | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#DeformationProbe.SpringSelection)                                                                    | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#DeformationProbe.IsSolved)                                                                                  | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#DeformationProbe.Orientation)                                                                            | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#DeformationProbe.IterationNumber)                                                                    | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#DeformationProbe.LoadStep)                                                                                  | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#DeformationProbe.LoadStepNumber)                                                                      | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#DeformationProbe.Substep)                                                                                    | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#DeformationProbe.DisplayTime)                                                                            | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#DeformationProbe.MaximumTotal)                                                                          | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#DeformationProbe.MaximumXAxis)                                                                          | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#DeformationProbe.MaximumYAxis)                                                                          | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#DeformationProbe.MaximumZAxis)                                                                          | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#DeformationProbe.MinimumTotal)                                                                          | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#DeformationProbe.MinimumXAxis)                                                                          | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#DeformationProbe.MinimumYAxis)                                                                          | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#DeformationProbe.MinimumZAxis)                                                                          | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#DeformationProbe.Time)                                                                                          | Gets the Time.                                                                                                                                                             |
| [`Total`](#DeformationProbe.Total)                                                                                        | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#DeformationProbe.XAxis)                                                                                        | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#DeformationProbe.YAxis)                                                                                        | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#DeformationProbe.ZAxis)                                                                                        | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#DeformationProbe.ResultSelection)                                                                    | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#DeformationProbe.SpatialResolution)                                                                | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#DeformationProbe.Type)                                                                                          | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#DeformationProbe.DpfEvaluation)                                                                        | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#DeformationProbe.Suppressed)                                                                              | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#DeformationProbe.Children)                                                                                  | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#DeformationProbe.Comments)                                                                                  | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#DeformationProbe.Figures)                                                                                    | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#DeformationProbe.Images)                                                                                      | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                  | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#DeformationProbe.Properties)                                                                              | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#DeformationProbe.VisibleProperties)                                                                | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import DeformationProbe
```

## Property detail

### *property* DeformationProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.XAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.YAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.ZAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumTotalDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotalDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumXAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumYAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumZAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumTotalDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotalDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumXAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumYAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumZAxisDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxisDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.TotalDeformation *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TotalDeformation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DeformationProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DeformationProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DeformationProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
