# `ContactDistanceProbe`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ContactDistanceProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ContactDistanceProbe(internalObject: Any)

<a id="ContactDistanceProbe"></a>

### *class* ContactDistanceProbe(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ContactDistanceProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ContactDistanceProbe.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#ContactDistanceProbe.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ContactDistanceProbe.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#ContactDistanceProbe.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#ContactDistanceProbe.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#ContactDistanceProbe.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#ContactDistanceProbe.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#ContactDistanceProbe.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#ContactDistanceProbe.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#ContactDistanceProbe.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#ContactDistanceProbe.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#ContactDistanceProbe.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#ContactDistanceProbe.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#ContactDistanceProbe.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#ContactDistanceProbe.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#ContactDistanceProbe.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#ContactDistanceProbe.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#ContactDistanceProbe.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#ContactDistanceProbe.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#ContactDistanceProbe.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#ContactDistanceProbe.GetEnumName)                             | Enum name bound to value                                                                       |
| [`GetHashCode`](#ContactDistanceProbe.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#ContactDistanceProbe.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#ContactDistanceProbe.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#ContactDistanceProbe.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#ContactDistanceProbe.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#ContactDistanceProbe.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#ContactDistanceProbe.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#ContactDistanceProbe.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#ContactDistanceProbe.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#ContactDistanceProbe.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#ContactDistanceProbe.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ContactDistanceProbe.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#ContactDistanceProbe.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#ContactDistanceProbe.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#ContactDistanceProbe.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#ContactDistanceProbe.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#ContactDistanceProbe.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#ContactDistanceProbe.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#ContactDistanceProbe.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#ContactDistanceProbe.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#ContactDistanceProbe.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#ContactDistanceProbe.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#ContactDistanceProbe.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#ContactDistanceProbe.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ContactDistanceProbe.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#ContactDistanceProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#ContactDistanceProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#ContactDistanceProbe.By)                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#ContactDistanceProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#ContactDistanceProbe.ClsId)                                           | ClsId property.                                                                                                                                                            |
| [`Comments`](#ContactDistanceProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#ContactDistanceProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#ContactDistanceProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#ContactDistanceProbe.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#ContactDistanceProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#ContactDistanceProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#ContactDistanceProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#ContactDistanceProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#ContactDistanceProbe.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                   |
| [`IconName`](#ContactDistanceProbe.IconName)                                     | IconName property.                                                                                                                                                         |
| [`Images`](#ContactDistanceProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#ContactDistanceProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#ContactDistanceProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#ContactDistanceProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ContactDistanceProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ContactDistanceProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#ContactDistanceProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#ContactDistanceProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumValueOverTime`](#ContactDistanceProbe.MaximumValueOverTime)             | Gets the MaximumValueOverTime.                                                                                                                                             |
| [`MaximumXAxis`](#ContactDistanceProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ContactDistanceProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ContactDistanceProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#ContactDistanceProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#ContactDistanceProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumValueOverTime`](#ContactDistanceProbe.MinimumValueOverTime)             | Gets the MinimumValueOverTime.                                                                                                                                             |
| [`MinimumXAxis`](#ContactDistanceProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ContactDistanceProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ContactDistanceProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Name`](#ContactDistanceProbe.Name)                                             | Name property.                                                                                                                                                             |
| [`ObjectId`](#ContactDistanceProbe.ObjectId)                                     | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#ContactDistanceProbe.ObjectState)                               | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#ContactDistanceProbe.ObjectTags)                                 | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#ContactDistanceProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#ContactDistanceProbe.Parent)                                         | Parent property.                                                                                                                                                           |
| [`Properties`](#ContactDistanceProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#ContactDistanceProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#ContactDistanceProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#ContactDistanceProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`Results`](#ContactDistanceProbe.Results)                                       | Gets the Results.                                                                                                                                                          |
| [`RpmSetNumber`](#ContactDistanceProbe.RpmSetNumber)                             | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SpatialResolution`](#ContactDistanceProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#ContactDistanceProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#ContactDistanceProbe.State)                                           | State property.                                                                                                                                                            |
| [`Substep`](#ContactDistanceProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#ContactDistanceProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#ContactDistanceProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#ContactDistanceProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`TabularData`](#ContactDistanceProbe.TabularData)                               | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#ContactDistanceProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ContactDistanceProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#ContactDistanceProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#ContactDistanceProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#ContactDistanceProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ContactDistanceProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ContactDistanceProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="ContactDistanceProbe.AttachedRefs"></a>

### *property* ContactDistanceProbe.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.BeamSelection"></a>

### *property* ContactDistanceProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.BoundaryConditionSelection"></a>

### *property* ContactDistanceProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.By"></a>

### *property* ContactDistanceProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Children"></a>

### *property* ContactDistanceProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ClsId"></a>

### *property* ContactDistanceProbe.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Comments"></a>

### *property* ContactDistanceProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ContactRegionSelection"></a>

### *property* ContactDistanceProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.CoordinateSystemSelection"></a>

### *property* ContactDistanceProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DataModelObjectCategory"></a>

### *property* ContactDistanceProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DisplayTime"></a>

### *property* ContactDistanceProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DpfEvaluation"></a>

### *property* ContactDistanceProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Figures"></a>

### *property* ContactDistanceProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GeometryLocation"></a>

### *property* ContactDistanceProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GroupingFolder"></a>

### *property* ContactDistanceProbe.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.IconName"></a>

### *property* ContactDistanceProbe.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Images"></a>

### *property* ContactDistanceProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.InternalObject"></a>

### *property* ContactDistanceProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.IsSolved"></a>

### *property* ContactDistanceProbe.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.IterationNumber"></a>

### *property* ContactDistanceProbe.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.LoadStep"></a>

### *property* ContactDistanceProbe.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.LoadStepNumber"></a>

### *property* ContactDistanceProbe.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.LocationMethod"></a>

### *property* ContactDistanceProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumTotal"></a>

### *property* ContactDistanceProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumValueOverTime"></a>

### *property* ContactDistanceProbe.MaximumValueOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumXAxis"></a>

### *property* ContactDistanceProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumYAxis"></a>

### *property* ContactDistanceProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MaximumZAxis"></a>

### *property* ContactDistanceProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MeshConnectionSelection"></a>

### *property* ContactDistanceProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumTotal"></a>

### *property* ContactDistanceProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumValueOverTime"></a>

### *property* ContactDistanceProbe.MinimumValueOverTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumValueOverTime.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumXAxis"></a>

### *property* ContactDistanceProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumYAxis"></a>

### *property* ContactDistanceProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.MinimumZAxis"></a>

### *property* ContactDistanceProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Name"></a>

### *property* ContactDistanceProbe.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ObjectId"></a>

### *property* ContactDistanceProbe.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ObjectState"></a>

### *property* ContactDistanceProbe.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ObjectTags"></a>

### *property* ContactDistanceProbe.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Orientation"></a>

### *property* ContactDistanceProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Parent"></a>

### *property* ContactDistanceProbe.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Properties"></a>

### *property* ContactDistanceProbe.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RPMSelection"></a>

### *property* ContactDistanceProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RemotePointSelection"></a>

### *property* ContactDistanceProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ResultSelection"></a>

### *property* ContactDistanceProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Results"></a>

### *property* ContactDistanceProbe.Results *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Results.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RpmSetNumber"></a>

### *property* ContactDistanceProbe.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SpatialResolution"></a>

### *property* ContactDistanceProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SpringSelection"></a>

### *property* ContactDistanceProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.State"></a>

### *property* ContactDistanceProbe.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Substep"></a>

### *property* ContactDistanceProbe.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Summation"></a>

### *property* ContactDistanceProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Suppressed"></a>

### *property* ContactDistanceProbe.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SurfaceSelection"></a>

### *property* ContactDistanceProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.TabularData"></a>

### *property* ContactDistanceProbe.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Time"></a>

### *property* ContactDistanceProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Total"></a>

### *property* ContactDistanceProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Type"></a>

### *property* ContactDistanceProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.VisibleProperties"></a>

### *property* ContactDistanceProbe.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.XAxis"></a>

### *property* ContactDistanceProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.YAxis"></a>

### *property* ContactDistanceProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ZAxis"></a>

### *property* ContactDistanceProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDistanceProbe.Activate"></a>

### ContactDistanceProbe.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.AddComment"></a>

### ContactDistanceProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.AddFigure"></a>

### ContactDistanceProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.AddImage"></a>

### ContactDistanceProbe.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ClearGeneratedData"></a>

### ContactDistanceProbe.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Copy"></a>

### ContactDistanceProbe.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.CopyTo"></a>

### ContactDistanceProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.CreateObjRef"></a>

### ContactDistanceProbe.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.CreateParameter"></a>

### ContactDistanceProbe.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Cut"></a>

### ContactDistanceProbe.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Delete"></a>

### ContactDistanceProbe.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Duplicate"></a>

### ContactDistanceProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.DuplicateWithoutResults"></a>

### ContactDistanceProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Equals"></a>

### ContactDistanceProbe.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.EvaluateAllResults"></a>

### ContactDistanceProbe.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.ExportAnimation"></a>

### ContactDistanceProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetAPIName"></a>

### ContactDistanceProbe.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetAllProperties"></a>

### ContactDistanceProbe.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetChildren"></a>

### ContactDistanceProbe.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ContactDistanceProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetDetailsView"></a>

### ContactDistanceProbe.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetEnumName"></a>

### ContactDistanceProbe.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetHashCode"></a>

### ContactDistanceProbe.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetIconFile"></a>

### ContactDistanceProbe.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetLifetimeService"></a>

### ContactDistanceProbe.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetObjectData"></a>

### ContactDistanceProbe.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetParameter"></a>

### ContactDistanceProbe.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetPath"></a>

### ContactDistanceProbe.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetPropertyName"></a>

### ContactDistanceProbe.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetPropertyValue"></a>

### ContactDistanceProbe.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetVisibleProperties"></a>

### ContactDistanceProbe.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GetVisiblePropertyNames"></a>

### ContactDistanceProbe.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GroupAllSimilarChildren"></a>

### ContactDistanceProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.GroupSimilarObjects"></a>

### ContactDistanceProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.InitializeLifetimeService"></a>

### ContactDistanceProbe.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.IsPropertyEditable"></a>

### ContactDistanceProbe.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDistanceProbe.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.IsPropertyVisible"></a>

### ContactDistanceProbe.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ContactDistanceProbe.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.Paste"></a>

### ContactDistanceProbe.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.PropertyByAPIName"></a>

### ContactDistanceProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.PropertyById"></a>

### ContactDistanceProbe.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.PropertyByName"></a>

### ContactDistanceProbe.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RemoveFromGroup"></a>

### ContactDistanceProbe.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RemoveParameter"></a>

### ContactDistanceProbe.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RenameBasedOnDefinition"></a>

### ContactDistanceProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.RetrieveResult"></a>

### ContactDistanceProbe.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="ContactDistanceProbe.SnapToMeshNodes"></a>

### ContactDistanceProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

