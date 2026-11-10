# `HeatFluxProbe`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.HeatFluxProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.HeatFluxProbe(internalObject: Any)

<a id="HeatFluxProbe"></a>

### *class* HeatFluxProbe(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a HeatFluxProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#HeatFluxProbe.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#HeatFluxProbe.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#HeatFluxProbe.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#HeatFluxProbe.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#HeatFluxProbe.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#HeatFluxProbe.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#HeatFluxProbe.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#HeatFluxProbe.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#HeatFluxProbe.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#HeatFluxProbe.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#HeatFluxProbe.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#HeatFluxProbe.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#HeatFluxProbe.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#HeatFluxProbe.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#HeatFluxProbe.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#HeatFluxProbe.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#HeatFluxProbe.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#HeatFluxProbe.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#HeatFluxProbe.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#HeatFluxProbe.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#HeatFluxProbe.GetEnumName)                             | Enum name bound to value                                                                       |
| [`GetHashCode`](#HeatFluxProbe.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#HeatFluxProbe.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#HeatFluxProbe.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#HeatFluxProbe.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#HeatFluxProbe.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#HeatFluxProbe.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#HeatFluxProbe.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#HeatFluxProbe.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#HeatFluxProbe.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#HeatFluxProbe.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#HeatFluxProbe.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#HeatFluxProbe.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#HeatFluxProbe.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#HeatFluxProbe.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#HeatFluxProbe.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#HeatFluxProbe.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#HeatFluxProbe.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#HeatFluxProbe.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#HeatFluxProbe.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#HeatFluxProbe.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#HeatFluxProbe.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#HeatFluxProbe.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#HeatFluxProbe.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#HeatFluxProbe.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#HeatFluxProbe.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#HeatFluxProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#HeatFluxProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#HeatFluxProbe.By)                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#HeatFluxProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#HeatFluxProbe.ClsId)                                           | ClsId property.                                                                                                                                                            |
| [`Comments`](#HeatFluxProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#HeatFluxProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#HeatFluxProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#HeatFluxProbe.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#HeatFluxProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#HeatFluxProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#HeatFluxProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#HeatFluxProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#HeatFluxProbe.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                   |
| [`IconName`](#HeatFluxProbe.IconName)                                     | IconName property.                                                                                                                                                         |
| [`Images`](#HeatFluxProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#HeatFluxProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#HeatFluxProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#HeatFluxProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#HeatFluxProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#HeatFluxProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#HeatFluxProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#HeatFluxProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumTotalHeatFlux`](#HeatFluxProbe.MaximumTotalHeatFlux)             | Gets the MaximumTotalHeatFlux.                                                                                                                                             |
| [`MaximumXAxis`](#HeatFluxProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumXAxisHeatFlux`](#HeatFluxProbe.MaximumXAxisHeatFlux)             | Gets the MaximumXAxisHeatFlux.                                                                                                                                             |
| [`MaximumYAxis`](#HeatFluxProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumYAxisHeatFlux`](#HeatFluxProbe.MaximumYAxisHeatFlux)             | Gets the MaximumYAxisHeatFlux.                                                                                                                                             |
| [`MaximumZAxis`](#HeatFluxProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MaximumZAxisHeatFlux`](#HeatFluxProbe.MaximumZAxisHeatFlux)             | Gets the MaximumZAxisHeatFlux.                                                                                                                                             |
| [`MeshConnectionSelection`](#HeatFluxProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#HeatFluxProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumTotalHeatFlux`](#HeatFluxProbe.MinimumTotalHeatFlux)             | Gets the MinimumTotalHeatFlux.                                                                                                                                             |
| [`MinimumXAxis`](#HeatFluxProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumXAxisHeatFlux`](#HeatFluxProbe.MinimumXAxisHeatFlux)             | Gets the MinimumXAxisHeatFlux.                                                                                                                                             |
| [`MinimumYAxis`](#HeatFluxProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumYAxisHeatFlux`](#HeatFluxProbe.MinimumYAxisHeatFlux)             | Gets the MinimumYAxisHeatFlux.                                                                                                                                             |
| [`MinimumZAxis`](#HeatFluxProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`MinimumZAxisHeatFlux`](#HeatFluxProbe.MinimumZAxisHeatFlux)             | Gets the MinimumZAxisHeatFlux.                                                                                                                                             |
| [`Name`](#HeatFluxProbe.Name)                                             | Name property.                                                                                                                                                             |
| [`ObjectId`](#HeatFluxProbe.ObjectId)                                     | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#HeatFluxProbe.ObjectState)                               | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#HeatFluxProbe.ObjectTags)                                 | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#HeatFluxProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#HeatFluxProbe.Parent)                                         | Parent property.                                                                                                                                                           |
| [`Properties`](#HeatFluxProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#HeatFluxProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#HeatFluxProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#HeatFluxProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`RpmSetNumber`](#HeatFluxProbe.RpmSetNumber)                             | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SpatialResolution`](#HeatFluxProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#HeatFluxProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#HeatFluxProbe.State)                                           | State property.                                                                                                                                                            |
| [`Substep`](#HeatFluxProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#HeatFluxProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#HeatFluxProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#HeatFluxProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`TabularData`](#HeatFluxProbe.TabularData)                               | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#HeatFluxProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#HeatFluxProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`TotalHeatFlux`](#TotalHeatFlux)       | Gets the TotalHeatFlux.                                                                                                                                                    |
| [`Type`](#HeatFluxProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#HeatFluxProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#HeatFluxProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`XAxisHeatFlux`](#HeatFluxProbe.XAxisHeatFlux)                           | Gets the XAxisHeatFlux.                                                                                                                                                    |
| [`XCoordinate`](#HeatFluxProbe.XCoordinate)                               | Gets the XCoordinate.                                                                                                                                                      |
| [`YAxis`](#HeatFluxProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`YAxisHeatFlux`](#HeatFluxProbe.YAxisHeatFlux)                           | Gets the YAxisHeatFlux.                                                                                                                                                    |
| [`YCoordinate`](#HeatFluxProbe.YCoordinate)                               | Gets the YCoordinate.                                                                                                                                                      |
| [`ZAxis`](#HeatFluxProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |
| [`ZAxisHeatFlux`](#HeatFluxProbe.ZAxisHeatFlux)                           | Gets the ZAxisHeatFlux.                                                                                                                                                    |
| [`ZCoordinate`](#HeatFluxProbe.ZCoordinate)                               | Gets the ZCoordinate.                                                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="HeatFluxProbe.AttachedRefs"></a>

### *property* HeatFluxProbe.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.BeamSelection"></a>

### *property* HeatFluxProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.BoundaryConditionSelection"></a>

### *property* HeatFluxProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.By"></a>

### *property* HeatFluxProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Children"></a>

### *property* HeatFluxProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ClsId"></a>

### *property* HeatFluxProbe.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Comments"></a>

### *property* HeatFluxProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ContactRegionSelection"></a>

### *property* HeatFluxProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.CoordinateSystemSelection"></a>

### *property* HeatFluxProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DataModelObjectCategory"></a>

### *property* HeatFluxProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DisplayTime"></a>

### *property* HeatFluxProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DpfEvaluation"></a>

### *property* HeatFluxProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Figures"></a>

### *property* HeatFluxProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GeometryLocation"></a>

### *property* HeatFluxProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GroupingFolder"></a>

### *property* HeatFluxProbe.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.IconName"></a>

### *property* HeatFluxProbe.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Images"></a>

### *property* HeatFluxProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.InternalObject"></a>

### *property* HeatFluxProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.IsSolved"></a>

### *property* HeatFluxProbe.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.IterationNumber"></a>

### *property* HeatFluxProbe.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.LoadStep"></a>

### *property* HeatFluxProbe.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.LoadStepNumber"></a>

### *property* HeatFluxProbe.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.LocationMethod"></a>

### *property* HeatFluxProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumTotal"></a>

### *property* HeatFluxProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumTotalHeatFlux"></a>

### *property* HeatFluxProbe.MaximumTotalHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumXAxis"></a>

### *property* HeatFluxProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumXAxisHeatFlux"></a>

### *property* HeatFluxProbe.MaximumXAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumYAxis"></a>

### *property* HeatFluxProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumYAxisHeatFlux"></a>

### *property* HeatFluxProbe.MaximumYAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumZAxis"></a>

### *property* HeatFluxProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MaximumZAxisHeatFlux"></a>

### *property* HeatFluxProbe.MaximumZAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MeshConnectionSelection"></a>

### *property* HeatFluxProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumTotal"></a>

### *property* HeatFluxProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumTotalHeatFlux"></a>

### *property* HeatFluxProbe.MinimumTotalHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumXAxis"></a>

### *property* HeatFluxProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumXAxisHeatFlux"></a>

### *property* HeatFluxProbe.MinimumXAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumYAxis"></a>

### *property* HeatFluxProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumYAxisHeatFlux"></a>

### *property* HeatFluxProbe.MinimumYAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumZAxis"></a>

### *property* HeatFluxProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.MinimumZAxisHeatFlux"></a>

### *property* HeatFluxProbe.MinimumZAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Name"></a>

### *property* HeatFluxProbe.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ObjectId"></a>

### *property* HeatFluxProbe.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ObjectState"></a>

### *property* HeatFluxProbe.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ObjectTags"></a>

### *property* HeatFluxProbe.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Orientation"></a>

### *property* HeatFluxProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Parent"></a>

### *property* HeatFluxProbe.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Properties"></a>

### *property* HeatFluxProbe.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RPMSelection"></a>

### *property* HeatFluxProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RemotePointSelection"></a>

### *property* HeatFluxProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ResultSelection"></a>

### *property* HeatFluxProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RpmSetNumber"></a>

### *property* HeatFluxProbe.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SpatialResolution"></a>

### *property* HeatFluxProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SpringSelection"></a>

### *property* HeatFluxProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.State"></a>

### *property* HeatFluxProbe.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Substep"></a>

### *property* HeatFluxProbe.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Summation"></a>

### *property* HeatFluxProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Suppressed"></a>

### *property* HeatFluxProbe.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SurfaceSelection"></a>

### *property* HeatFluxProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.TabularData"></a>

### *property* HeatFluxProbe.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Time"></a>

### *property* HeatFluxProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Total"></a>

### *property* HeatFluxProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.TotalHeatFlux"></a>

### *property* HeatFluxProbe.TotalHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Type"></a>

### *property* HeatFluxProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.VisibleProperties"></a>

### *property* HeatFluxProbe.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.XAxis"></a>

### *property* HeatFluxProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.XAxisHeatFlux"></a>

### *property* HeatFluxProbe.XAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.XCoordinate"></a>

### *property* HeatFluxProbe.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.YAxis"></a>

### *property* HeatFluxProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.YAxisHeatFlux"></a>

### *property* HeatFluxProbe.YAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.YCoordinate"></a>

### *property* HeatFluxProbe.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ZAxis"></a>

### *property* HeatFluxProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ZAxisHeatFlux"></a>

### *property* HeatFluxProbe.ZAxisHeatFlux *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxisHeatFlux.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ZCoordinate"></a>

### *property* HeatFluxProbe.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HeatFluxProbe.Activate"></a>

### HeatFluxProbe.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.AddComment"></a>

### HeatFluxProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.AddFigure"></a>

### HeatFluxProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.AddImage"></a>

### HeatFluxProbe.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ClearGeneratedData"></a>

### HeatFluxProbe.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Copy"></a>

### HeatFluxProbe.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.CopyTo"></a>

### HeatFluxProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.CreateObjRef"></a>

### HeatFluxProbe.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.CreateParameter"></a>

### HeatFluxProbe.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Cut"></a>

### HeatFluxProbe.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Delete"></a>

### HeatFluxProbe.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Duplicate"></a>

### HeatFluxProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.DuplicateWithoutResults"></a>

### HeatFluxProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Equals"></a>

### HeatFluxProbe.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.EvaluateAllResults"></a>

### HeatFluxProbe.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.ExportAnimation"></a>

### HeatFluxProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetAPIName"></a>

### HeatFluxProbe.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetAllProperties"></a>

### HeatFluxProbe.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetChildren"></a>

### HeatFluxProbe.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### HeatFluxProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetDetailsView"></a>

### HeatFluxProbe.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetEnumName"></a>

### HeatFluxProbe.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetHashCode"></a>

### HeatFluxProbe.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetIconFile"></a>

### HeatFluxProbe.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetLifetimeService"></a>

### HeatFluxProbe.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetObjectData"></a>

### HeatFluxProbe.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetParameter"></a>

### HeatFluxProbe.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetPath"></a>

### HeatFluxProbe.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetPropertyName"></a>

### HeatFluxProbe.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetPropertyValue"></a>

### HeatFluxProbe.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetVisibleProperties"></a>

### HeatFluxProbe.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GetVisiblePropertyNames"></a>

### HeatFluxProbe.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GroupAllSimilarChildren"></a>

### HeatFluxProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.GroupSimilarObjects"></a>

### HeatFluxProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.InitializeLifetimeService"></a>

### HeatFluxProbe.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.IsPropertyEditable"></a>

### HeatFluxProbe.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HeatFluxProbe.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.IsPropertyVisible"></a>

### HeatFluxProbe.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HeatFluxProbe.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.Paste"></a>

### HeatFluxProbe.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.PropertyByAPIName"></a>

### HeatFluxProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.PropertyById"></a>

### HeatFluxProbe.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.PropertyByName"></a>

### HeatFluxProbe.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RemoveFromGroup"></a>

### HeatFluxProbe.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RemoveParameter"></a>

### HeatFluxProbe.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RenameBasedOnDefinition"></a>

### HeatFluxProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.RetrieveResult"></a>

### HeatFluxProbe.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="HeatFluxProbe.SnapToMeshNodes"></a>

### HeatFluxProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

