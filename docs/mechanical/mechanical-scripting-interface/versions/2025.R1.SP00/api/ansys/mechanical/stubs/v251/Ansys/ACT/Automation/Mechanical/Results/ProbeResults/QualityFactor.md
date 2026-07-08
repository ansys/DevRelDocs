# `QualityFactor`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.QualityFactor"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.QualityFactor

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a QualityFactor.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#QualityFactor.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#QualityFactor.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#QualityFactor.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#QualityFactor.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#QualityFactor.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#QualityFactor.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#QualityFactor.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#QualityFactor.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#QualityFactor.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`DuplicateWithoutResults`](#QualityFactor.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                           |
| [`EvaluateAllResults`](#QualityFactor.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`ExportAnimation`](#QualityFactor.ExportAnimation)                 | Run the ExportAnimation action.                                                   |
| [`GetChildren`](#QualityFactor.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#QualityFactor.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#QualityFactor.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#QualityFactor.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#QualityFactor.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#QualityFactor.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#QualityFactor.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#QualityFactor.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`SnapToMeshNodes`](#QualityFactor.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#QualityFactor.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#QualityFactor.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`By`](#QualityFactor.By)                                                 | Gets or sets the By.                                                                                                                                                       |
| [`Children`](#QualityFactor.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#QualityFactor.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#QualityFactor.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#QualityFactor.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#QualityFactor.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#QualityFactor.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#QualityFactor.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#QualityFactor.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Frequency`](#QualityFactor.Frequency)                                   | Gets or sets the Frequency.                                                                                                                                                |
| [`GeometryLocation`](#QualityFactor.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#QualityFactor.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#QualityFactor.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#QualityFactor.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#QualityFactor.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#QualityFactor.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#QualityFactor.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#QualityFactor.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumQualityFactor`](#QualityFactor.MaximumQualityFactor)             | Gets the MaximumQualityFactor.                                                                                                                                             |
| [`MaximumTotal`](#QualityFactor.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#QualityFactor.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#QualityFactor.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#QualityFactor.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#QualityFactor.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumQualityFactor`](#QualityFactor.MinimumQualityFactor)             | Gets the MinimumQualityFactor.                                                                                                                                             |
| [`MinimumTotal`](#QualityFactor.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#QualityFactor.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#QualityFactor.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#QualityFactor.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Orientation`](#QualityFactor.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Properties`](#QualityFactor.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`QualityFactorValue`](#QualityFactor.QualityFactorValue)                 | Gets the QualityFactorValue.                                                                                                                                               |
| [`RPMSelection`](#QualityFactor.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#QualityFactor.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ReportedFrequency`](#QualityFactor.ReportedFrequency)                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`ResultSelection`](#QualityFactor.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SetNumber`](#QualityFactor.SetNumber)                                   | Gets or sets the SetNumber.                                                                                                                                                |
| [`SpatialResolution`](#QualityFactor.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#QualityFactor.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Substep`](#QualityFactor.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#QualityFactor.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#QualityFactor.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#QualityFactor.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SweepingPhase`](#QualityFactor.SweepingPhase)                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`Time`](#QualityFactor.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#QualityFactor.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#QualityFactor.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#QualityFactor.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#QualityFactor.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#QualityFactor.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#QualityFactor.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="QualityFactor.BeamSelection"></a>

### *property* QualityFactor.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.BoundaryConditionSelection"></a>

### *property* QualityFactor.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.By"></a>

### *property* QualityFactor.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the By.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Children"></a>

### *property* QualityFactor.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Comments"></a>

### *property* QualityFactor.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ContactRegionSelection"></a>

### *property* QualityFactor.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.CoordinateSystemSelection"></a>

### *property* QualityFactor.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DataModelObjectCategory"></a>

### *property* QualityFactor.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DisplayTime"></a>

### *property* QualityFactor.DisplayTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DpfEvaluation"></a>

### *property* QualityFactor.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Figures"></a>

### *property* QualityFactor.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Frequency"></a>

### *property* QualityFactor.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GeometryLocation"></a>

### *property* QualityFactor.GeometryLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Images"></a>

### *property* QualityFactor.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.InternalObject"></a>

### *property* QualityFactor.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.IsSolved"></a>

### *property* QualityFactor.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.IterationNumber"></a>

### *property* QualityFactor.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.LoadStep"></a>

### *property* QualityFactor.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.LoadStepNumber"></a>

### *property* QualityFactor.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.LocationMethod"></a>

### *property* QualityFactor.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumQualityFactor"></a>

### *property* QualityFactor.MaximumQualityFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumQualityFactor.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumTotal"></a>

### *property* QualityFactor.MaximumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumXAxis"></a>

### *property* QualityFactor.MaximumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumYAxis"></a>

### *property* QualityFactor.MaximumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumZAxis"></a>

### *property* QualityFactor.MaximumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MeshConnectionSelection"></a>

### *property* QualityFactor.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumQualityFactor"></a>

### *property* QualityFactor.MinimumQualityFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumQualityFactor.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumTotal"></a>

### *property* QualityFactor.MinimumTotal *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumXAxis"></a>

### *property* QualityFactor.MinimumXAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumYAxis"></a>

### *property* QualityFactor.MinimumYAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumZAxis"></a>

### *property* QualityFactor.MinimumZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Orientation"></a>

### *property* QualityFactor.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Properties"></a>

### *property* QualityFactor.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.QualityFactorValue"></a>

### *property* QualityFactor.QualityFactorValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the QualityFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RPMSelection"></a>

### *property* QualityFactor.RPMSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RemotePointSelection"></a>

### *property* QualityFactor.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ReportedFrequency"></a>

### *property* QualityFactor.ReportedFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ResultSelection"></a>

### *property* QualityFactor.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SetNumber"></a>

### *property* QualityFactor.SetNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SpatialResolution"></a>

### *property* QualityFactor.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SpringSelection"></a>

### *property* QualityFactor.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Substep"></a>

### *property* QualityFactor.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Summation"></a>

### *property* QualityFactor.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Suppressed"></a>

### *property* QualityFactor.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SurfaceSelection"></a>

### *property* QualityFactor.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SweepingPhase"></a>

### *property* QualityFactor.SweepingPhase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Time"></a>

### *property* QualityFactor.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Total"></a>

### *property* QualityFactor.Total *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Type"></a>

### *property* QualityFactor.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.VisibleProperties"></a>

### *property* QualityFactor.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.XAxis"></a>

### *property* QualityFactor.XAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.YAxis"></a>

### *property* QualityFactor.YAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ZAxis"></a>

### *property* QualityFactor.ZAxis *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="QualityFactor.Activate"></a>

### QualityFactor.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.AddComment"></a>

### QualityFactor.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.AddFigure"></a>

### QualityFactor.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.AddImage"></a>

### QualityFactor.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ClearGeneratedData"></a>

### QualityFactor.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.CopyTo"></a>

### QualityFactor.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.CreateParameter"></a>

### QualityFactor.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Delete"></a>

### QualityFactor.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Duplicate"></a>

### QualityFactor.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DuplicateWithoutResults"></a>

### QualityFactor.DuplicateWithoutResults()

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.EvaluateAllResults"></a>

### QualityFactor.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ExportAnimation"></a>

### QualityFactor.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnimationExportSettings))

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetChildren"></a>

### QualityFactor.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetParameter"></a>

### QualityFactor.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GroupAllSimilarChildren"></a>

### QualityFactor.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GroupSimilarObjects"></a>

### QualityFactor.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.PropertyByAPIName"></a>

### QualityFactor.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.PropertyByName"></a>

### QualityFactor.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RemoveParameter"></a>

### QualityFactor.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RenameBasedOnDefinition"></a>

### QualityFactor.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SnapToMeshNodes"></a>

### QualityFactor.SnapToMeshNodes()

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

