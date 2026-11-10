# `QualityFactor`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.QualityFactor"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.QualityFactor(internalObject: Any)

<a id="QualityFactor"></a>

### *class* QualityFactor(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a QualityFactor.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#QualityFactor.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#QualityFactor.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#QualityFactor.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#QualityFactor.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#QualityFactor.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#QualityFactor.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#QualityFactor.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#QualityFactor.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#QualityFactor.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#QualityFactor.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#QualityFactor.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#QualityFactor.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#QualityFactor.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#QualityFactor.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#QualityFactor.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#QualityFactor.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#QualityFactor.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#QualityFactor.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#QualityFactor.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#QualityFactor.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#QualityFactor.GetEnumName)                             | Enum name bound to value                                                                       |
| [`GetHashCode`](#QualityFactor.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#QualityFactor.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#QualityFactor.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#QualityFactor.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#QualityFactor.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#QualityFactor.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#QualityFactor.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#QualityFactor.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#QualityFactor.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#QualityFactor.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#QualityFactor.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#QualityFactor.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#QualityFactor.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#QualityFactor.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#QualityFactor.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#QualityFactor.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#QualityFactor.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#QualityFactor.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#QualityFactor.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#QualityFactor.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#QualityFactor.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#QualityFactor.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#QualityFactor.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#QualityFactor.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#QualityFactor.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#QualityFactor.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#QualityFactor.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#QualityFactor.By)                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#QualityFactor.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#QualityFactor.ClsId)                                           | ClsId property.                                                                                                                                                            |
| [`Comments`](#QualityFactor.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#QualityFactor.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#QualityFactor.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#QualityFactor.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#QualityFactor.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#QualityFactor.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#QualityFactor.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`Frequency`](#QualityFactor.Frequency)                                   | Gets or sets the Frequency.                                                                                                                                                |
| [`GeometryLocation`](#QualityFactor.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#QualityFactor.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                   |
| [`IconName`](#QualityFactor.IconName)                                     | IconName property.                                                                                                                                                         |
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
| [`Name`](#QualityFactor.Name)                                             | Name property.                                                                                                                                                             |
| [`ObjectId`](#QualityFactor.ObjectId)                                     | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#QualityFactor.ObjectState)                               | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#QualityFactor.ObjectTags)                                 | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#QualityFactor.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#QualityFactor.Parent)                                         | Parent property.                                                                                                                                                           |
| [`Properties`](#QualityFactor.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`QualityFactorValue`](#QualityFactor.QualityFactorValue)                 | Gets the QualityFactorValue.                                                                                                                                               |
| [`RPMSelection`](#QualityFactor.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#QualityFactor.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ReportedFrequency`](#QualityFactor.ReportedFrequency)                   | Gets the ReportedFrequency.                                                                                                                                                |
| [`ResultSelection`](#QualityFactor.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`RpmSetNumber`](#QualityFactor.RpmSetNumber)                             | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SetNumber`](#QualityFactor.SetNumber)                                   | Gets or sets the SetNumber.                                                                                                                                                |
| [`SpatialResolution`](#QualityFactor.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#QualityFactor.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#QualityFactor.State)                                           | State property.                                                                                                                                                            |
| [`Substep`](#QualityFactor.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#QualityFactor.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#QualityFactor.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#QualityFactor.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`SweepingPhase`](#QualityFactor.SweepingPhase)                           | Gets or sets the SweepingPhase.                                                                                                                                            |
| [`TabularData`](#QualityFactor.TabularData)                               | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#QualityFactor.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#QualityFactor.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#QualityFactor.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#QualityFactor.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#QualityFactor.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#QualityFactor.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#QualityFactor.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="QualityFactor.AttachedRefs"></a>

### *property* QualityFactor.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.BeamSelection"></a>

### *property* QualityFactor.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.BoundaryConditionSelection"></a>

### *property* QualityFactor.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.By"></a>

### *property* QualityFactor.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Children"></a>

### *property* QualityFactor.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ClsId"></a>

### *property* QualityFactor.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Comments"></a>

### *property* QualityFactor.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ContactRegionSelection"></a>

### *property* QualityFactor.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.CoordinateSystemSelection"></a>

### *property* QualityFactor.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DataModelObjectCategory"></a>

### *property* QualityFactor.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DisplayTime"></a>

### *property* QualityFactor.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DpfEvaluation"></a>

### *property* QualityFactor.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Figures"></a>

### *property* QualityFactor.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Frequency"></a>

### *property* QualityFactor.Frequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GeometryLocation"></a>

### *property* QualityFactor.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GroupingFolder"></a>

### *property* QualityFactor.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.IconName"></a>

### *property* QualityFactor.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Images"></a>

### *property* QualityFactor.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.InternalObject"></a>

### *property* QualityFactor.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.IsSolved"></a>

### *property* QualityFactor.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.IterationNumber"></a>

### *property* QualityFactor.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.LoadStep"></a>

### *property* QualityFactor.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.LoadStepNumber"></a>

### *property* QualityFactor.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.LocationMethod"></a>

### *property* QualityFactor.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumQualityFactor"></a>

### *property* QualityFactor.MaximumQualityFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumQualityFactor.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumTotal"></a>

### *property* QualityFactor.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumXAxis"></a>

### *property* QualityFactor.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumYAxis"></a>

### *property* QualityFactor.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MaximumZAxis"></a>

### *property* QualityFactor.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MeshConnectionSelection"></a>

### *property* QualityFactor.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumQualityFactor"></a>

### *property* QualityFactor.MinimumQualityFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumQualityFactor.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumTotal"></a>

### *property* QualityFactor.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumXAxis"></a>

### *property* QualityFactor.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumYAxis"></a>

### *property* QualityFactor.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.MinimumZAxis"></a>

### *property* QualityFactor.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Name"></a>

### *property* QualityFactor.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ObjectId"></a>

### *property* QualityFactor.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ObjectState"></a>

### *property* QualityFactor.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ObjectTags"></a>

### *property* QualityFactor.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Orientation"></a>

### *property* QualityFactor.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Parent"></a>

### *property* QualityFactor.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Properties"></a>

### *property* QualityFactor.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.QualityFactorValue"></a>

### *property* QualityFactor.QualityFactorValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the QualityFactorValue.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RPMSelection"></a>

### *property* QualityFactor.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RemotePointSelection"></a>

### *property* QualityFactor.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ReportedFrequency"></a>

### *property* QualityFactor.ReportedFrequency *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ReportedFrequency.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ResultSelection"></a>

### *property* QualityFactor.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RpmSetNumber"></a>

### *property* QualityFactor.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SetNumber"></a>

### *property* QualityFactor.SetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SetNumber.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SpatialResolution"></a>

### *property* QualityFactor.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SpringSelection"></a>

### *property* QualityFactor.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.State"></a>

### *property* QualityFactor.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Substep"></a>

### *property* QualityFactor.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Summation"></a>

### *property* QualityFactor.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Suppressed"></a>

### *property* QualityFactor.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SurfaceSelection"></a>

### *property* QualityFactor.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SweepingPhase"></a>

### *property* QualityFactor.SweepingPhase *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SweepingPhase.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.TabularData"></a>

### *property* QualityFactor.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Time"></a>

### *property* QualityFactor.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Total"></a>

### *property* QualityFactor.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Type"></a>

### *property* QualityFactor.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.VisibleProperties"></a>

### *property* QualityFactor.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.XAxis"></a>

### *property* QualityFactor.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.YAxis"></a>

### *property* QualityFactor.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ZAxis"></a>

### *property* QualityFactor.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="QualityFactor.Activate"></a>

### QualityFactor.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.AddComment"></a>

### QualityFactor.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.AddFigure"></a>

### QualityFactor.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.AddImage"></a>

### QualityFactor.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ClearGeneratedData"></a>

### QualityFactor.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Copy"></a>

### QualityFactor.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.CopyTo"></a>

### QualityFactor.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.CreateObjRef"></a>

### QualityFactor.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.CreateParameter"></a>

### QualityFactor.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Cut"></a>

### QualityFactor.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Delete"></a>

### QualityFactor.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Duplicate"></a>

### QualityFactor.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.DuplicateWithoutResults"></a>

### QualityFactor.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Equals"></a>

### QualityFactor.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.EvaluateAllResults"></a>

### QualityFactor.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.ExportAnimation"></a>

### QualityFactor.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetAPIName"></a>

### QualityFactor.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetAllProperties"></a>

### QualityFactor.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetChildren"></a>

### QualityFactor.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### QualityFactor.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetDetailsView"></a>

### QualityFactor.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetEnumName"></a>

### QualityFactor.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetHashCode"></a>

### QualityFactor.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetIconFile"></a>

### QualityFactor.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetLifetimeService"></a>

### QualityFactor.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetObjectData"></a>

### QualityFactor.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetParameter"></a>

### QualityFactor.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetPath"></a>

### QualityFactor.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetPropertyName"></a>

### QualityFactor.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetPropertyValue"></a>

### QualityFactor.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetVisibleProperties"></a>

### QualityFactor.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GetVisiblePropertyNames"></a>

### QualityFactor.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GroupAllSimilarChildren"></a>

### QualityFactor.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.GroupSimilarObjects"></a>

### QualityFactor.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.InitializeLifetimeService"></a>

### QualityFactor.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.IsPropertyEditable"></a>

### QualityFactor.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### QualityFactor.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.IsPropertyVisible"></a>

### QualityFactor.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### QualityFactor.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.Paste"></a>

### QualityFactor.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.PropertyByAPIName"></a>

### QualityFactor.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.PropertyById"></a>

### QualityFactor.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.PropertyByName"></a>

### QualityFactor.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RemoveFromGroup"></a>

### QualityFactor.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RemoveParameter"></a>

### QualityFactor.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RenameBasedOnDefinition"></a>

### QualityFactor.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.RetrieveResult"></a>

### QualityFactor.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="QualityFactor.SnapToMeshNodes"></a>

### QualityFactor.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

