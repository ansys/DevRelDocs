<!-- vale off -->

<a id="fractureequivalentsifsrangeprobe"></a>

# `FractureEquivalentSIFSRangeProbe`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureEquivalentSIFSRangeProbe"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureEquivalentSIFSRangeProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FractureEquivalentSIFSRangeProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportAnimation`](#FractureEquivalentSIFSRangeProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
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

| Name | Description |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                     | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`ResultProbeValue`](#FractureEquivalentSIFSRangeProbe.ResultProbeValue)                     | Gets the ResultProbeValue.                                                                                                                                                 |
| [`MaximumValueOverTime`](#FractureEquivalentSIFSRangeProbe.MaximumValueOverTime)             | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MinimumValueOverTime`](#FractureEquivalentSIFSRangeProbe.MinimumValueOverTime)             | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`DataModelObjectCategory`](#FractureEquivalentSIFSRangeProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`ActiveContour`](#FractureEquivalentSIFSRangeProbe.ActiveContour)                           | Gets or sets the ActiveContour.                                                                                                                                            |
| [`CrackLengthPercentage`](#FractureEquivalentSIFSRangeProbe.CrackLengthPercentage)           | Gets or sets the CrackLengthPercentage.                                                                                                                                    |
| [`SolverID`](#FractureEquivalentSIFSRangeProbe.SolverID)                                     | Gets or sets the SolverID.                                                                                                                                                 |
| [`Summation`](#FractureEquivalentSIFSRangeProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`LocationMethod`](#FractureEquivalentSIFSRangeProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`GeometryLocation`](#FractureEquivalentSIFSRangeProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`CoordinateSystemSelection`](#FractureEquivalentSIFSRangeProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`BoundaryConditionSelection`](#FractureEquivalentSIFSRangeProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`ContactRegionSelection`](#FractureEquivalentSIFSRangeProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`RemotePointSelection`](#FractureEquivalentSIFSRangeProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`BeamSelection`](#FractureEquivalentSIFSRangeProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`MeshConnectionSelection`](#FractureEquivalentSIFSRangeProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SurfaceSelection`](#FractureEquivalentSIFSRangeProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SpringSelection`](#FractureEquivalentSIFSRangeProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`IsSolved`](#FractureEquivalentSIFSRangeProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`Orientation`](#FractureEquivalentSIFSRangeProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`IterationNumber`](#FractureEquivalentSIFSRangeProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#FractureEquivalentSIFSRangeProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#FractureEquivalentSIFSRangeProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`Substep`](#FractureEquivalentSIFSRangeProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`DisplayTime`](#FractureEquivalentSIFSRangeProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`MaximumTotal`](#FractureEquivalentSIFSRangeProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#FractureEquivalentSIFSRangeProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#FractureEquivalentSIFSRangeProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#FractureEquivalentSIFSRangeProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MinimumTotal`](#FractureEquivalentSIFSRangeProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#FractureEquivalentSIFSRangeProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#FractureEquivalentSIFSRangeProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#FractureEquivalentSIFSRangeProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Time`](#FractureEquivalentSIFSRangeProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#FractureEquivalentSIFSRangeProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`XAxis`](#FractureEquivalentSIFSRangeProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#FractureEquivalentSIFSRangeProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#FractureEquivalentSIFSRangeProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ResultSelection`](#FractureEquivalentSIFSRangeProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#FractureEquivalentSIFSRangeProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`Type`](#FractureEquivalentSIFSRangeProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`DpfEvaluation`](#FractureEquivalentSIFSRangeProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Suppressed`](#FractureEquivalentSIFSRangeProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`Children`](#FractureEquivalentSIFSRangeProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#FractureEquivalentSIFSRangeProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`Figures`](#FractureEquivalentSIFSRangeProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Images`](#FractureEquivalentSIFSRangeProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#id0)                                                                     | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`Properties`](#FractureEquivalentSIFSRangeProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`VisibleProperties`](#FractureEquivalentSIFSRangeProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="FractureEquivalentSIFSRangeProbe.InternalObject"></a>

### *property* FractureEquivalentSIFSRangeProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.ResultProbeValue"></a>

### *property* FractureEquivalentSIFSRangeProbe.ResultProbeValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultProbeValue.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MaximumValueOverTime"></a>

### *property* FractureEquivalentSIFSRangeProbe.MaximumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MinimumValueOverTime"></a>

### *property* FractureEquivalentSIFSRangeProbe.MinimumValueOverTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.DataModelObjectCategory"></a>

### *property* FractureEquivalentSIFSRangeProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.ActiveContour"></a>

### *property* FractureEquivalentSIFSRangeProbe.ActiveContour *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActiveContour.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.CrackLengthPercentage"></a>

### *property* FractureEquivalentSIFSRangeProbe.CrackLengthPercentage *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CrackLengthPercentage.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.SolverID"></a>

### *property* FractureEquivalentSIFSRangeProbe.SolverID *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverID.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Summation"></a>

### *property* FractureEquivalentSIFSRangeProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.LocationMethod"></a>

### *property* FractureEquivalentSIFSRangeProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.GeometryLocation"></a>

### *property* FractureEquivalentSIFSRangeProbe.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.CoordinateSystemSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.BoundaryConditionSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.ContactRegionSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.RemotePointSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.BeamSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MeshConnectionSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.SurfaceSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.SpringSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.IsSolved"></a>

### *property* FractureEquivalentSIFSRangeProbe.IsSolved *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Orientation"></a>

### *property* FractureEquivalentSIFSRangeProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.IterationNumber"></a>

### *property* FractureEquivalentSIFSRangeProbe.IterationNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.LoadStep"></a>

### *property* FractureEquivalentSIFSRangeProbe.LoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.LoadStepNumber"></a>

### *property* FractureEquivalentSIFSRangeProbe.LoadStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Substep"></a>

### *property* FractureEquivalentSIFSRangeProbe.Substep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.DisplayTime"></a>

### *property* FractureEquivalentSIFSRangeProbe.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MaximumTotal"></a>

### *property* FractureEquivalentSIFSRangeProbe.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MaximumXAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MaximumYAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MaximumZAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MinimumTotal"></a>

### *property* FractureEquivalentSIFSRangeProbe.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MinimumXAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MinimumYAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.MinimumZAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Time"></a>

### *property* FractureEquivalentSIFSRangeProbe.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Total"></a>

### *property* FractureEquivalentSIFSRangeProbe.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.XAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.YAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.ZAxis"></a>

### *property* FractureEquivalentSIFSRangeProbe.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.ResultSelection"></a>

### *property* FractureEquivalentSIFSRangeProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.SpatialResolution"></a>

### *property* FractureEquivalentSIFSRangeProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Type"></a>

### *property* FractureEquivalentSIFSRangeProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.DpfEvaluation"></a>

### *property* FractureEquivalentSIFSRangeProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Suppressed"></a>

### *property* FractureEquivalentSIFSRangeProbe.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Children"></a>

### *property* FractureEquivalentSIFSRangeProbe.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Comments"></a>

### *property* FractureEquivalentSIFSRangeProbe.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Figures"></a>

### *property* FractureEquivalentSIFSRangeProbe.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Images"></a>

### *property* FractureEquivalentSIFSRangeProbe.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FractureEquivalentSIFSRangeProbe.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Properties"></a>

### *property* FractureEquivalentSIFSRangeProbe.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.VisibleProperties"></a>

### *property* FractureEquivalentSIFSRangeProbe.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FractureEquivalentSIFSRangeProbe.ExportAnimation"></a>

### FractureEquivalentSIFSRangeProbe.ExportAnimation(filePath: System.String, format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.ClearGeneratedData"></a>

### FractureEquivalentSIFSRangeProbe.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.DuplicateWithoutResults"></a>

### FractureEquivalentSIFSRangeProbe.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.EvaluateAllResults"></a>

### FractureEquivalentSIFSRangeProbe.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.SnapToMeshNodes"></a>

### FractureEquivalentSIFSRangeProbe.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.RenameBasedOnDefinition"></a>

### FractureEquivalentSIFSRangeProbe.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Delete"></a>

### FractureEquivalentSIFSRangeProbe.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.GetChildren"></a>

### FractureEquivalentSIFSRangeProbe.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FractureEquivalentSIFSRangeProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.AddComment"></a>

### FractureEquivalentSIFSRangeProbe.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.AddFigure"></a>

### FractureEquivalentSIFSRangeProbe.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.AddImage"></a>

### FractureEquivalentSIFSRangeProbe.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Activate"></a>

### FractureEquivalentSIFSRangeProbe.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.CopyTo"></a>

### FractureEquivalentSIFSRangeProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.Duplicate"></a>

### FractureEquivalentSIFSRangeProbe.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.GroupAllSimilarChildren"></a>

### FractureEquivalentSIFSRangeProbe.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.GroupSimilarObjects"></a>

### FractureEquivalentSIFSRangeProbe.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.PropertyByName"></a>

### FractureEquivalentSIFSRangeProbe.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.PropertyByAPIName"></a>

### FractureEquivalentSIFSRangeProbe.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.CreateParameter"></a>

### FractureEquivalentSIFSRangeProbe.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.GetParameter"></a>

### FractureEquivalentSIFSRangeProbe.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FractureEquivalentSIFSRangeProbe.RemoveParameter"></a>

### FractureEquivalentSIFSRangeProbe.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
