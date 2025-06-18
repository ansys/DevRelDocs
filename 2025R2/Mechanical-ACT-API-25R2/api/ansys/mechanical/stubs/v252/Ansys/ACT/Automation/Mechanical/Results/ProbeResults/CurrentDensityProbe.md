# `CurrentDensityProbe`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.CurrentDensityProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.CurrentDensityProbe

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CurrentDensityProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#CurrentDensityProbe.Activate)                               | Activate the current object.                                                                   |
| [`AddComment`](#CurrentDensityProbe.AddComment)                           | Creates a new child Comment.                                                                   |
| [`AddFigure`](#CurrentDensityProbe.AddFigure)                             | Creates a new child Figure.                                                                    |
| [`AddImage`](#CurrentDensityProbe.AddImage)                               | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#CurrentDensityProbe.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                             |
| [`CopyTo`](#CurrentDensityProbe.CopyTo)                                   | Copies all visible properties from this object to another.                                     |
| [`CreateParameter`](#CurrentDensityProbe.CreateParameter)                 | Creates a new parameter for a Property.                                                        |
| [`Delete`](#CurrentDensityProbe.Delete)                                   | Run the Delete action.                                                                         |
| [`Duplicate`](#CurrentDensityProbe.Duplicate)                             | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#CurrentDensityProbe.DuplicateWithoutResults) | Run the DuplicateWithoutResults action.                                                        |
| [`EvaluateAllResults`](#CurrentDensityProbe.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#CurrentDensityProbe.ExportAnimation)                 | Run the ExportAnimation action.                                                                |
| [`GetChildren`](#CurrentDensityProbe.GetChildren)                         | Gets the list of children, filtered by type.                                                   |
| [`GetParameter`](#CurrentDensityProbe.GetParameter)                       | Gets the parameter corresponding to the given property.                                        |
| [`GroupAllSimilarChildren`](#CurrentDensityProbe.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#CurrentDensityProbe.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                            |
| [`PropertyByAPIName`](#CurrentDensityProbe.PropertyByAPIName)             | Get a property by its API name.                                                                |
| [`PropertyByName`](#CurrentDensityProbe.PropertyByName)                   | Get a property by its unique name.                                                             |
| [`RemoveParameter`](#CurrentDensityProbe.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#CurrentDensityProbe.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#CurrentDensityProbe.RetrieveResult)                   | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#CurrentDensityProbe.SnapToMeshNodes)                 | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`BeamSelection`](#CurrentDensityProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#CurrentDensityProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’. |
| [`Children`](#CurrentDensityProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`Comments`](#CurrentDensityProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#CurrentDensityProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#CurrentDensityProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`CurrentDensityTotal`](#CurrentDensityProbe.CurrentDensityTotal)               | Gets the CurrentDensityTotal.                                                                                                                                              |
| [`DataModelObjectCategory`](#CurrentDensityProbe.DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                                                                                               |
| [`DisplayTime`](#CurrentDensityProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#CurrentDensityProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#CurrentDensityProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#CurrentDensityProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`Images`](#CurrentDensityProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#CurrentDensityProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#CurrentDensityProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#CurrentDensityProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#CurrentDensityProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#CurrentDensityProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#CurrentDensityProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#CurrentDensityProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#CurrentDensityProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#CurrentDensityProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#CurrentDensityProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#CurrentDensityProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#CurrentDensityProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#CurrentDensityProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#CurrentDensityProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#CurrentDensityProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Orientation`](#CurrentDensityProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Properties`](#CurrentDensityProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#CurrentDensityProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#CurrentDensityProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#CurrentDensityProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`SpatialResolution`](#CurrentDensityProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#CurrentDensityProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`Substep`](#CurrentDensityProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#CurrentDensityProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#CurrentDensityProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#CurrentDensityProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`Time`](#CurrentDensityProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#CurrentDensityProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#CurrentDensityProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#CurrentDensityProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#CurrentDensityProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`XAxisCurrentDensity`](#CurrentDensityProbe.XAxisCurrentDensity)               | Gets the XAxisCurrentDensity.                                                                                                                                              |
| [`YAxis`](#CurrentDensityProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`YAxisCurrentDensity`](#CurrentDensityProbe.YAxisCurrentDensity)               | Gets the YAxisCurrentDensity.                                                                                                                                              |
| [`ZAxis`](#CurrentDensityProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ZAxisCurrentDensity`](#CurrentDensityProbe.ZAxisCurrentDensity)               | Gets the ZAxisCurrentDensity.                                                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="CurrentDensityProbe.BeamSelection"></a>

### *property* CurrentDensityProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.BoundaryConditionSelection"></a>

### *property* CurrentDensityProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option ‘WeakSprings’, please use the property ‘LocationMethod = LocationDefinitionMethod.WeakSprings’.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Children"></a>

### *property* CurrentDensityProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Comments"></a>

### *property* CurrentDensityProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ContactRegionSelection"></a>

### *property* CurrentDensityProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CoordinateSystemSelection"></a>

### *property* CurrentDensityProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CurrentDensityTotal"></a>

### *property* CurrentDensityProbe.CurrentDensityTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CurrentDensityTotal.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DataModelObjectCategory"></a>

### *property* CurrentDensityProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DisplayTime"></a>

### *property* CurrentDensityProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DpfEvaluation"></a>

### *property* CurrentDensityProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Figures"></a>

### *property* CurrentDensityProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GeometryLocation"></a>

### *property* CurrentDensityProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Images"></a>

### *property* CurrentDensityProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.InternalObject"></a>

### *property* CurrentDensityProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.IsSolved"></a>

### *property* CurrentDensityProbe.IsSolved *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.IterationNumber"></a>

### *property* CurrentDensityProbe.IterationNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.LoadStep"></a>

### *property* CurrentDensityProbe.LoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.LoadStepNumber"></a>

### *property* CurrentDensityProbe.LoadStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.LocationMethod"></a>

### *property* CurrentDensityProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumTotal"></a>

### *property* CurrentDensityProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumXAxis"></a>

### *property* CurrentDensityProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumYAxis"></a>

### *property* CurrentDensityProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MaximumZAxis"></a>

### *property* CurrentDensityProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MeshConnectionSelection"></a>

### *property* CurrentDensityProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumTotal"></a>

### *property* CurrentDensityProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumXAxis"></a>

### *property* CurrentDensityProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumYAxis"></a>

### *property* CurrentDensityProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.MinimumZAxis"></a>

### *property* CurrentDensityProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Orientation"></a>

### *property* CurrentDensityProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Properties"></a>

### *property* CurrentDensityProbe.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RPMSelection"></a>

### *property* CurrentDensityProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RemotePointSelection"></a>

### *property* CurrentDensityProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ResultSelection"></a>

### *property* CurrentDensityProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SpatialResolution"></a>

### *property* CurrentDensityProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SpringSelection"></a>

### *property* CurrentDensityProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Substep"></a>

### *property* CurrentDensityProbe.Substep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Summation"></a>

### *property* CurrentDensityProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Suppressed"></a>

### *property* CurrentDensityProbe.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SurfaceSelection"></a>

### *property* CurrentDensityProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Time"></a>

### *property* CurrentDensityProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Total"></a>

### *property* CurrentDensityProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Type"></a>

### *property* CurrentDensityProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.VisibleProperties"></a>

### *property* CurrentDensityProbe.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.XAxis"></a>

### *property* CurrentDensityProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.XAxisCurrentDensity"></a>

### *property* CurrentDensityProbe.XAxisCurrentDensity *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XAxisCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.YAxis"></a>

### *property* CurrentDensityProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.YAxisCurrentDensity"></a>

### *property* CurrentDensityProbe.YAxisCurrentDensity *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YAxisCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ZAxis"></a>

### *property* CurrentDensityProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ZAxisCurrentDensity"></a>

### *property* CurrentDensityProbe.ZAxisCurrentDensity *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZAxisCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CurrentDensityProbe.Activate"></a>

### CurrentDensityProbe.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.AddComment"></a>

### CurrentDensityProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.AddFigure"></a>

### CurrentDensityProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.AddImage"></a>

### CurrentDensityProbe.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ClearGeneratedData"></a>

### CurrentDensityProbe.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CopyTo"></a>

### CurrentDensityProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.CreateParameter"></a>

### CurrentDensityProbe.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Delete"></a>

### CurrentDensityProbe.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.Duplicate"></a>

### CurrentDensityProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.DuplicateWithoutResults"></a>

### CurrentDensityProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.EvaluateAllResults"></a>

### CurrentDensityProbe.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.ExportAnimation"></a>

### CurrentDensityProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GetChildren"></a>

### CurrentDensityProbe.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GetParameter"></a>

### CurrentDensityProbe.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GroupAllSimilarChildren"></a>

### CurrentDensityProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.GroupSimilarObjects"></a>

### CurrentDensityProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.PropertyByAPIName"></a>

### CurrentDensityProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.PropertyByName"></a>

### CurrentDensityProbe.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RemoveParameter"></a>

### CurrentDensityProbe.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RenameBasedOnDefinition"></a>

### CurrentDensityProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.RetrieveResult"></a>

### CurrentDensityProbe.RetrieveResult() → [None](https://docs.python.org/3/library/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="CurrentDensityProbe.SnapToMeshNodes"></a>

### CurrentDensityProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/library/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

