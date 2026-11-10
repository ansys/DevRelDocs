# `ResponsePSD`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ResponsePSD"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ResponsePSD(internalObject: Any)

<a id="ResponsePSD"></a>

### *class* ResponsePSD(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ResponsePSD.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ResponsePSD.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#ResponsePSD.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ResponsePSD.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#ResponsePSD.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#ResponsePSD.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#ResponsePSD.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#ResponsePSD.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#ResponsePSD.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#ResponsePSD.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#ResponsePSD.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#ResponsePSD.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#ResponsePSD.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#ResponsePSD.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#ResponsePSD.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#ResponsePSD.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#ResponsePSD.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#ResponsePSD.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#ResponsePSD.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#ResponsePSD.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#ResponsePSD.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#ResponsePSD.GetEnumName)                             | Enum name bound to value                                                                       |
| [`GetHashCode`](#ResponsePSD.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#ResponsePSD.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#ResponsePSD.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#ResponsePSD.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#ResponsePSD.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#ResponsePSD.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#ResponsePSD.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#ResponsePSD.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#ResponsePSD.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#ResponsePSD.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#ResponsePSD.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ResponsePSD.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#ResponsePSD.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#ResponsePSD.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#ResponsePSD.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#ResponsePSD.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#ResponsePSD.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#ResponsePSD.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#ResponsePSD.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#ResponsePSD.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#ResponsePSD.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#ResponsePSD.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#ResponsePSD.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#ResponsePSD.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AccelerationInG`](#ResponsePSD.AccelerationInG)                       | Gets or sets the AccelerationInG.                                                                                                                                          |
| [`AttachedRefs`](#ResponsePSD.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#ResponsePSD.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#ResponsePSD.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#ResponsePSD.By)                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#ResponsePSD.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#ResponsePSD.ClsId)                                           | ClsId property.                                                                                                                                                            |
| [`Comments`](#ResponsePSD.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#ResponsePSD.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#ResponsePSD.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#ResponsePSD.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#ResponsePSD.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#ResponsePSD.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`ExpectedFrequency`](#ResponsePSD.ExpectedFrequency)                   | Gets the ExpectedFrequency.                                                                                                                                                |
| [`Figures`](#ResponsePSD.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#ResponsePSD.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#ResponsePSD.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                   |
| [`IconName`](#ResponsePSD.IconName)                                     | IconName property.                                                                                                                                                         |
| [`Images`](#ResponsePSD.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#ResponsePSD.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#ResponsePSD.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#ResponsePSD.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ResponsePSD.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ResponsePSD.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#ResponsePSD.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#ResponsePSD.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ResponsePSD.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ResponsePSD.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ResponsePSD.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#ResponsePSD.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#ResponsePSD.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ResponsePSD.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ResponsePSD.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ResponsePSD.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Name`](#ResponsePSD.Name)                                             | Name property.                                                                                                                                                             |
| [`ObjectId`](#ResponsePSD.ObjectId)                                     | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#ResponsePSD.ObjectState)                               | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#ResponsePSD.ObjectTags)                                 | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#ResponsePSD.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#ResponsePSD.Parent)                                         | Parent property.                                                                                                                                                           |
| [`Probability`](#ResponsePSD.Probability)                               | Gets the Probability.                                                                                                                                                      |
| [`Properties`](#ResponsePSD.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RMSPercentage`](#ResponsePSD.RMSPercentage)                           | Gets the RMSPercentage.                                                                                                                                                    |
| [`RMSValue`](#ResponsePSD.RMSValue)                                     | Gets the RMSValue.                                                                                                                                                         |
| [`RPMSelection`](#ResponsePSD.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RangeMaximum`](#ResponsePSD.RangeMaximum)                             | Gets or sets the RangeMaximum.                                                                                                                                             |
| [`RangeMinimum`](#ResponsePSD.RangeMinimum)                             | Gets or sets the RangeMinimum.                                                                                                                                             |
| [`Reference`](#ResponsePSD.Reference)                                   | Gets or sets the Reference.                                                                                                                                                |
| [`RemotePointSelection`](#ResponsePSD.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#ResponsePSD.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`ResultType`](#ResponsePSD.ResultType)                                 | Gets or sets the ResultType.                                                                                                                                               |
| [`RpmSetNumber`](#ResponsePSD.RpmSetNumber)                             | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SelectedFrequencyRange`](#ResponsePSD.SelectedFrequencyRange)         | Gets or sets the SelectedFrequencyRange.                                                                                                                                   |
| [`SpatialResolution`](#ResponsePSD.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#ResponsePSD.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#ResponsePSD.State)                                           | State property.                                                                                                                                                            |
| [`Substep`](#ResponsePSD.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#ResponsePSD.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#ResponsePSD.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#ResponsePSD.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`TabularData`](#ResponsePSD.TabularData)                               | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#ResponsePSD.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ResponsePSD.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#ResponsePSD.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#ResponsePSD.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#ResponsePSD.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ResponsePSD.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ResponsePSD.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="ResponsePSD.AccelerationInG"></a>

### *property* ResponsePSD.AccelerationInG *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AccelerationInG.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.AttachedRefs"></a>

### *property* ResponsePSD.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.BeamSelection"></a>

### *property* ResponsePSD.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.BoundaryConditionSelection"></a>

### *property* ResponsePSD.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.By"></a>

### *property* ResponsePSD.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Children"></a>

### *property* ResponsePSD.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ClsId"></a>

### *property* ResponsePSD.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Comments"></a>

### *property* ResponsePSD.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ContactRegionSelection"></a>

### *property* ResponsePSD.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.CoordinateSystemSelection"></a>

### *property* ResponsePSD.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.DataModelObjectCategory"></a>

### *property* ResponsePSD.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.DisplayTime"></a>

### *property* ResponsePSD.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.DpfEvaluation"></a>

### *property* ResponsePSD.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ExpectedFrequency"></a>

### *property* ResponsePSD.ExpectedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ExpectedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Figures"></a>

### *property* ResponsePSD.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GeometryLocation"></a>

### *property* ResponsePSD.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GroupingFolder"></a>

### *property* ResponsePSD.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.IconName"></a>

### *property* ResponsePSD.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Images"></a>

### *property* ResponsePSD.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.InternalObject"></a>

### *property* ResponsePSD.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.IsSolved"></a>

### *property* ResponsePSD.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.IterationNumber"></a>

### *property* ResponsePSD.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.LoadStep"></a>

### *property* ResponsePSD.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.LoadStepNumber"></a>

### *property* ResponsePSD.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.LocationMethod"></a>

### *property* ResponsePSD.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MaximumTotal"></a>

### *property* ResponsePSD.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MaximumXAxis"></a>

### *property* ResponsePSD.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MaximumYAxis"></a>

### *property* ResponsePSD.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MaximumZAxis"></a>

### *property* ResponsePSD.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MeshConnectionSelection"></a>

### *property* ResponsePSD.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MinimumTotal"></a>

### *property* ResponsePSD.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MinimumXAxis"></a>

### *property* ResponsePSD.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MinimumYAxis"></a>

### *property* ResponsePSD.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.MinimumZAxis"></a>

### *property* ResponsePSD.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Name"></a>

### *property* ResponsePSD.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ObjectId"></a>

### *property* ResponsePSD.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ObjectState"></a>

### *property* ResponsePSD.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ObjectTags"></a>

### *property* ResponsePSD.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Orientation"></a>

### *property* ResponsePSD.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Parent"></a>

### *property* ResponsePSD.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Probability"></a>

### *property* ResponsePSD.Probability *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Probability.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Properties"></a>

### *property* ResponsePSD.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RMSPercentage"></a>

### *property* ResponsePSD.RMSPercentage *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RMSPercentage.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RMSValue"></a>

### *property* ResponsePSD.RMSValue *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the RMSValue.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RPMSelection"></a>

### *property* ResponsePSD.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RangeMaximum"></a>

### *property* ResponsePSD.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RangeMinimum"></a>

### *property* ResponsePSD.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Reference"></a>

### *property* ResponsePSD.Reference *: [Ansys.Mechanical.DataModel.Enums.ResultRelativityType](../../../../../Mechanical/DataModel/Enums/ResultRelativityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ResultRelativityType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Reference.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RemotePointSelection"></a>

### *property* ResponsePSD.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ResultSelection"></a>

### *property* ResponsePSD.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ResultType"></a>

### *property* ResponsePSD.ResultType *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RpmSetNumber"></a>

### *property* ResponsePSD.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.SelectedFrequencyRange"></a>

### *property* ResponsePSD.SelectedFrequencyRange *: [Ansys.Mechanical.DataModel.Enums.FrequencyRangeType](../../../../../Mechanical/DataModel/Enums/FrequencyRangeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FrequencyRangeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SelectedFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.SpatialResolution"></a>

### *property* ResponsePSD.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.SpringSelection"></a>

### *property* ResponsePSD.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.State"></a>

### *property* ResponsePSD.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Substep"></a>

### *property* ResponsePSD.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Summation"></a>

### *property* ResponsePSD.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Suppressed"></a>

### *property* ResponsePSD.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.SurfaceSelection"></a>

### *property* ResponsePSD.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.TabularData"></a>

### *property* ResponsePSD.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Time"></a>

### *property* ResponsePSD.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Total"></a>

### *property* ResponsePSD.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Type"></a>

### *property* ResponsePSD.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.VisibleProperties"></a>

### *property* ResponsePSD.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.XAxis"></a>

### *property* ResponsePSD.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.YAxis"></a>

### *property* ResponsePSD.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ZAxis"></a>

### *property* ResponsePSD.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResponsePSD.Activate"></a>

### ResponsePSD.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.AddComment"></a>

### ResponsePSD.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.AddFigure"></a>

### ResponsePSD.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.AddImage"></a>

### ResponsePSD.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ClearGeneratedData"></a>

### ResponsePSD.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Copy"></a>

### ResponsePSD.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.CopyTo"></a>

### ResponsePSD.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.CreateObjRef"></a>

### ResponsePSD.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.CreateParameter"></a>

### ResponsePSD.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Cut"></a>

### ResponsePSD.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Delete"></a>

### ResponsePSD.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Duplicate"></a>

### ResponsePSD.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.DuplicateWithoutResults"></a>

### ResponsePSD.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Equals"></a>

### ResponsePSD.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.EvaluateAllResults"></a>

### ResponsePSD.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.ExportAnimation"></a>

### ResponsePSD.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetAPIName"></a>

### ResponsePSD.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetAllProperties"></a>

### ResponsePSD.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetChildren"></a>

### ResponsePSD.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ResponsePSD.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetDetailsView"></a>

### ResponsePSD.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetEnumName"></a>

### ResponsePSD.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetHashCode"></a>

### ResponsePSD.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetIconFile"></a>

### ResponsePSD.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetLifetimeService"></a>

### ResponsePSD.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetObjectData"></a>

### ResponsePSD.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetParameter"></a>

### ResponsePSD.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetPath"></a>

### ResponsePSD.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetPropertyName"></a>

### ResponsePSD.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetPropertyValue"></a>

### ResponsePSD.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetVisibleProperties"></a>

### ResponsePSD.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GetVisiblePropertyNames"></a>

### ResponsePSD.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GroupAllSimilarChildren"></a>

### ResponsePSD.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.GroupSimilarObjects"></a>

### ResponsePSD.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.InitializeLifetimeService"></a>

### ResponsePSD.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.IsPropertyEditable"></a>

### ResponsePSD.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResponsePSD.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.IsPropertyVisible"></a>

### ResponsePSD.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ResponsePSD.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.Paste"></a>

### ResponsePSD.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.PropertyByAPIName"></a>

### ResponsePSD.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.PropertyById"></a>

### ResponsePSD.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.PropertyByName"></a>

### ResponsePSD.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RemoveFromGroup"></a>

### ResponsePSD.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RemoveParameter"></a>

### ResponsePSD.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RenameBasedOnDefinition"></a>

### ResponsePSD.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.RetrieveResult"></a>

### ResponsePSD.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="ResponsePSD.SnapToMeshNodes"></a>

### ResponsePSD.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

