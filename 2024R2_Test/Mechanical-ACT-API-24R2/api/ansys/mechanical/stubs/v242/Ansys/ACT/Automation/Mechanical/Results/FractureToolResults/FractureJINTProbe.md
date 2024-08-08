# `FractureJINTProbe`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureJINTProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FractureJINTProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#FractureJINTProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
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

| Name | Description |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                      | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](#FractureJINTProbe.ResultProbeValue)                     | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#FractureJINTProbe.MaximumValueOverTime)             | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#FractureJINTProbe.MinimumValueOverTime)             | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](#FractureJINTProbe.DataModelObjectCategory)       | Gets the current DataModelObjectâ€™s category.                                                                                                                               |
| [`ActiveContour`](#FractureJINTProbe.ActiveContour)                           | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#FractureJINTProbe.CrackLengthPercentage)           | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#FractureJINTProbe.SolverID)                                     | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#FractureJINTProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FractureJINTProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FractureJINTProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FractureJINTProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FractureJINTProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSpringsâ€™, please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSpringsâ€™. |
| [`ContactRegionSelection`](#FractureJINTProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FractureJINTProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FractureJINTProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FractureJINTProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FractureJINTProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FractureJINTProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FractureJINTProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FractureJINTProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FractureJINTProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FractureJINTProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FractureJINTProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FractureJINTProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FractureJINTProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FractureJINTProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FractureJINTProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FractureJINTProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FractureJINTProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FractureJINTProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FractureJINTProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FractureJINTProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FractureJINTProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FractureJINTProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#FractureJINTProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FractureJINTProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FractureJINTProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FractureJINTProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FractureJINTProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FractureJINTProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FractureJINTProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FractureJINTProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FractureJINTProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FractureJINTProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FractureJINTProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FractureJINTProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FractureJINTProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                      | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FractureJINTProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FractureJINTProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="FractureJINTProbe.InternalObject"></a>

### *property* FractureJINTProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.ResultProbeValue"></a>

### *property* FractureJINTProbe.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MaximumValueOverTime"></a>

### *property* FractureJINTProbe.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MinimumValueOverTime"></a>

### *property* FractureJINTProbe.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.DataModelObjectCategory"></a>

### *property* FractureJINTProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.ActiveContour"></a>

### *property* FractureJINTProbe.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.CrackLengthPercentage"></a>

### *property* FractureJINTProbe.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.SolverID"></a>

### *property* FractureJINTProbe.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Summation"></a>

### *property* FractureJINTProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.LocationMethod"></a>

### *property* FractureJINTProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.GeometryLocation"></a>

### *property* FractureJINTProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.CoordinateSystemSelection"></a>

### *property* FractureJINTProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.BoundaryConditionSelection"></a>

### *property* FractureJINTProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option â€˜WeakSpringsâ€™, please use the property â€˜LocationMethod = LocationDefinitionMethod.WeakSpringsâ€™.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.ContactRegionSelection"></a>

### *property* FractureJINTProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.RemotePointSelection"></a>

### *property* FractureJINTProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.BeamSelection"></a>

### *property* FractureJINTProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MeshConnectionSelection"></a>

### *property* FractureJINTProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.SurfaceSelection"></a>

### *property* FractureJINTProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.SpringSelection"></a>

### *property* FractureJINTProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.IsSolved"></a>

### *property* FractureJINTProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Orientation"></a>

### *property* FractureJINTProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.IterationNumber"></a>

### *property* FractureJINTProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.LoadStep"></a>

### *property* FractureJINTProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.LoadStepNumber"></a>

### *property* FractureJINTProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Substep"></a>

### *property* FractureJINTProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.DisplayTime"></a>

### *property* FractureJINTProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MaximumTotal"></a>

### *property* FractureJINTProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MaximumXAxis"></a>

### *property* FractureJINTProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MaximumYAxis"></a>

### *property* FractureJINTProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MaximumZAxis"></a>

### *property* FractureJINTProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MinimumTotal"></a>

### *property* FractureJINTProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MinimumXAxis"></a>

### *property* FractureJINTProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MinimumYAxis"></a>

### *property* FractureJINTProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.MinimumZAxis"></a>

### *property* FractureJINTProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Time"></a>

### *property* FractureJINTProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Total"></a>

### *property* FractureJINTProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.XAxis"></a>

### *property* FractureJINTProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.YAxis"></a>

### *property* FractureJINTProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.ZAxis"></a>

### *property* FractureJINTProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.ResultSelection"></a>

### *property* FractureJINTProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.SpatialResolution"></a>

### *property* FractureJINTProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Type"></a>

### *property* FractureJINTProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.DpfEvaluation"></a>

### *property* FractureJINTProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Suppressed"></a>

### *property* FractureJINTProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Children"></a>

### *property* FractureJINTProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Comments"></a>

### *property* FractureJINTProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Figures"></a>

### *property* FractureJINTProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Images"></a>

### *property* FractureJINTProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FractureJINTProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Properties"></a>

### *property* FractureJINTProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.VisibleProperties"></a>

### *property* FractureJINTProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureJINTProbe.ExportAnimation"></a>

### FractureJINTProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../../../v241/Ansys/Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.ClearGeneratedData"></a>

### FractureJINTProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.DuplicateWithoutResults"></a>

### FractureJINTProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.EvaluateAllResults"></a>

### FractureJINTProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.SnapToMeshNodes"></a>

### FractureJINTProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.RenameBasedOnDefinition"></a>

### FractureJINTProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Delete"></a>

### FractureJINTProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.GetChildren"></a>

### FractureJINTProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FractureJINTProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.AddComment"></a>

### FractureJINTProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.AddFigure"></a>

### FractureJINTProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.AddImage"></a>

### FractureJINTProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Activate"></a>

### FractureJINTProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.CopyTo"></a>

### FractureJINTProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.Duplicate"></a>

### FractureJINTProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.GroupAllSimilarChildren"></a>

### FractureJINTProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.GroupSimilarObjects"></a>

### FractureJINTProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.PropertyByName"></a>

### FractureJINTProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.PropertyByAPIName"></a>

### FractureJINTProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.CreateParameter"></a>

### FractureJINTProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.GetParameter"></a>

### FractureJINTProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureJINTProbe.RemoveParameter"></a>

### FractureJINTProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

