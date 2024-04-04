# ElectromechanicalCouplingCoefficient

### *class* ElectromechanicalCouplingCoefficient

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElectromechanicalCouplingCoefficient.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ExportAnimation`](#ElectromechanicalCouplingCoefficient.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
|--------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#ElectromechanicalCouplingCoefficient.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`DuplicateWithoutResults`](#ElectromechanicalCouplingCoefficient.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#ElectromechanicalCouplingCoefficient.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`SnapToMeshNodes`](#ElectromechanicalCouplingCoefficient.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |
| [`RenameBasedOnDefinition`](#ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ElectromechanicalCouplingCoefficient.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElectromechanicalCouplingCoefficient.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElectromechanicalCouplingCoefficient.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElectromechanicalCouplingCoefficient.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElectromechanicalCouplingCoefficient.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElectromechanicalCouplingCoefficient.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElectromechanicalCouplingCoefficient.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElectromechanicalCouplingCoefficient.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElectromechanicalCouplingCoefficient.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElectromechanicalCouplingCoefficient.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElectromechanicalCouplingCoefficient.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElectromechanicalCouplingCoefficient.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElectromechanicalCouplingCoefficient.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ElectromechanicalCouplingCoefficientValue`](#ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue)     | Gets the ElectromechanicalCouplingCoefficientValue.                                                                                                                        |
| [`MaximumElectromechanicalCouplingCoefficient`](#ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient) | Gets the MaximumElectromechanicalCouplingCoefficient.                                                                                                                      |
| [`MinimumElectromechanicalCouplingCoefficient`](#ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient) | Gets the MinimumElectromechanicalCouplingCoefficient.                                                                                                                      |
| [`SetNumber`](#ElectromechanicalCouplingCoefficient.SetNumber)                                                                     | Gets or sets the SetNumber.                                                                                                                                                |
| [`ReportedFrequency`](#ElectromechanicalCouplingCoefficient.ReportedFrequency)                                                     | Gets the ReportedFrequency.                                                                                                                                                |
| [`Frequency`](#ElectromechanicalCouplingCoefficient.Frequency)                                                                     | Gets or sets the Frequency.                                                                                                                                                |
| [`SweepingPhase`](#ElectromechanicalCouplingCoefficient.SweepingPhase)                                                             | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`By`](#ElectromechanicalCouplingCoefficient.By)                                                                                   | Gets or sets the By.                                                                                                                                                       |
| [`DataModelObjectCategory`](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)          | Gets the current DataModelObject’s category.                                                                                                                               |
| [`Summation`](#ElectromechanicalCouplingCoefficient.Summation)                                                                     | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#ElectromechanicalCouplingCoefficient.LocationMethod)                                                           | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#ElectromechanicalCouplingCoefficient.GeometryLocation)                                                       | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#ElectromechanicalCouplingCoefficient.CoordinateSystemSelection)                                     | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#ElectromechanicalCouplingCoefficient.BoundaryConditionSelection)                                   | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#ElectromechanicalCouplingCoefficient.ContactRegionSelection)                                           | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#ElectromechanicalCouplingCoefficient.RemotePointSelection)                                               | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#ElectromechanicalCouplingCoefficient.BeamSelection)                                                             | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#ElectromechanicalCouplingCoefficient.MeshConnectionSelection)                                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#ElectromechanicalCouplingCoefficient.SurfaceSelection)                                                       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#ElectromechanicalCouplingCoefficient.SpringSelection)                                                         | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#ElectromechanicalCouplingCoefficient.IsSolved)                                                                       | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#ElectromechanicalCouplingCoefficient.Orientation)                                                                 | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#ElectromechanicalCouplingCoefficient.IterationNumber)                                                         | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ElectromechanicalCouplingCoefficient.LoadStep)                                                                       | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ElectromechanicalCouplingCoefficient.LoadStepNumber)                                                           | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#ElectromechanicalCouplingCoefficient.Substep)                                                                         | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#ElectromechanicalCouplingCoefficient.DisplayTime)                                                                 | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#ElectromechanicalCouplingCoefficient.MaximumTotal)                                                               | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ElectromechanicalCouplingCoefficient.MaximumXAxis)                                                               | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ElectromechanicalCouplingCoefficient.MaximumYAxis)                                                               | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ElectromechanicalCouplingCoefficient.MaximumZAxis)                                                               | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#ElectromechanicalCouplingCoefficient.MinimumTotal)                                                               | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ElectromechanicalCouplingCoefficient.MinimumXAxis)                                                               | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ElectromechanicalCouplingCoefficient.MinimumYAxis)                                                               | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ElectromechanicalCouplingCoefficient.MinimumZAxis)                                                               | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#ElectromechanicalCouplingCoefficient.Time)                                                                               | Gets the Time.                                                                                                                                                             |
| [`Total`](#ElectromechanicalCouplingCoefficient.Total)                                                                             | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#ElectromechanicalCouplingCoefficient.XAxis)                                                                             | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ElectromechanicalCouplingCoefficient.YAxis)                                                                             | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ElectromechanicalCouplingCoefficient.ZAxis)                                                                             | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#ElectromechanicalCouplingCoefficient.ResultSelection)                                                         | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#ElectromechanicalCouplingCoefficient.SpatialResolution)                                                     | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#ElectromechanicalCouplingCoefficient.Type)                                                                               | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#ElectromechanicalCouplingCoefficient.DpfEvaluation)                                                             | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#ElectromechanicalCouplingCoefficient.Suppressed)                                                                   | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#ElectromechanicalCouplingCoefficient.Children)                                                                       | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#ElectromechanicalCouplingCoefficient.Comments)                                                                       | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#ElectromechanicalCouplingCoefficient.Figures)                                                                         | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#ElectromechanicalCouplingCoefficient.Images)                                                                           | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                                                           | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#ElectromechanicalCouplingCoefficient.Properties)                                                                   | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#ElectromechanicalCouplingCoefficient.VisibleProperties)                                                     | Gets the list of properties that are visible for this object.                                                                                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Results.ProbeResults import ElectromechanicalCouplingCoefficient
```

## Property detail

### *property* ElectromechanicalCouplingCoefficient.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.ElectromechanicalCouplingCoefficientValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ElectromechanicalCouplingCoefficientValue.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MaximumElectromechanicalCouplingCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MinimumElectromechanicalCouplingCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumElectromechanicalCouplingCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.SetNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ElectromechanicalCouplingCoefficient.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ElectromechanicalCouplingCoefficient.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ElectromechanicalCouplingCoefficient.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
