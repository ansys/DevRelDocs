# `ReactionProbe`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ReactionProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ReactionProbe(internalObject: Any)

<a id="ReactionProbe"></a>

### *class* ReactionProbe(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ReactionProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#ReactionProbe.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#ReactionProbe.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#ReactionProbe.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#ReactionProbe.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#ReactionProbe.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#ReactionProbe.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#ReactionProbe.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#ReactionProbe.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#ReactionProbe.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#ReactionProbe.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#ReactionProbe.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#ReactionProbe.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#ReactionProbe.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#ReactionProbe.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#ReactionProbe.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#ReactionProbe.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#ReactionProbe.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#ReactionProbe.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#ReactionProbe.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#ReactionProbe.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#ReactionProbe.GetEnumName)                             | GetEnumName method.                                                                            |
| [`GetHashCode`](#ReactionProbe.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#ReactionProbe.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#ReactionProbe.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#ReactionProbe.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#ReactionProbe.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#ReactionProbe.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#ReactionProbe.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#ReactionProbe.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#ReactionProbe.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#ReactionProbe.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#ReactionProbe.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#ReactionProbe.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#ReactionProbe.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#ReactionProbe.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#ReactionProbe.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#ReactionProbe.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#ReactionProbe.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#ReactionProbe.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#ReactionProbe.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#ReactionProbe.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#ReactionProbe.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#ReactionProbe.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#ReactionProbe.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#ReactionProbe.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ReactionProbe.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#ReactionProbe.BeamSelection)                           | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#ReactionProbe.BoundaryConditionSelection) | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#ReactionProbe.By)                                                 | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#ReactionProbe.Children)                                     | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#ReactionProbe.ClsId)                                           | ClsId property.                                                                                                                                                            |
| [`Comments`](#ReactionProbe.Comments)                                     | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#ReactionProbe.ContactRegionSelection)         | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#ReactionProbe.CoordinateSystemSelection)   | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#ReactionProbe.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#ReactionProbe.DisplayTime)                               | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#ReactionProbe.DpfEvaluation)                           | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Extraction`](#ReactionProbe.Extraction)                                 | Gets or sets the Extraction.                                                                                                                                               |
| [`Figures`](#ReactionProbe.Figures)                                       | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#ReactionProbe.GeometryLocation)                     | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#ReactionProbe.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                   |
| [`Heat`](#ReactionProbe.Heat)                                             | Gets the Heat.                                                                                                                                                             |
| [`IconName`](#ReactionProbe.IconName)                                     | IconName property.                                                                                                                                                         |
| [`Images`](#ReactionProbe.Images)                                         | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#ReactionProbe.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#ReactionProbe.IsSolved)                                     | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#ReactionProbe.IterationNumber)                       | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#ReactionProbe.LoadStep)                                     | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#ReactionProbe.LoadStepNumber)                         | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#ReactionProbe.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumHeat`](#ReactionProbe.MaximumHeat)                               | Gets the MaximumHeat.                                                                                                                                                      |
| [`MaximumTotal`](#ReactionProbe.MaximumTotal)                             | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumXAxis`](#ReactionProbe.MaximumXAxis)                             | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumYAxis`](#ReactionProbe.MaximumYAxis)                             | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumZAxis`](#ReactionProbe.MaximumZAxis)                             | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MeshConnectionSelection`](#ReactionProbe.MeshConnectionSelection)       | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumHeat`](#ReactionProbe.MinimumHeat)                               | Gets the MinimumHeat.                                                                                                                                                      |
| [`MinimumTotal`](#ReactionProbe.MinimumTotal)                             | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumXAxis`](#ReactionProbe.MinimumXAxis)                             | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumYAxis`](#ReactionProbe.MinimumYAxis)                             | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumZAxis`](#ReactionProbe.MinimumZAxis)                             | Gets the MinimumZAxis.                                                                                                                                                     |
| [`Name`](#ReactionProbe.Name)                                             | Name property.                                                                                                                                                             |
| [`ObjectId`](#ReactionProbe.ObjectId)                                     | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#ReactionProbe.ObjectState)                               | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#ReactionProbe.ObjectTags)                                 | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#ReactionProbe.Orientation)                               | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#ReactionProbe.Parent)                                         | Parent property.                                                                                                                                                           |
| [`Properties`](#ReactionProbe.Properties)                                 | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#ReactionProbe.RPMSelection)                             | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#ReactionProbe.RemotePointSelection)             | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#ReactionProbe.ResultSelection)                       | Gets or sets the ResultSelection.                                                                                                                                          |
| [`RpmSetNumber`](#ReactionProbe.RpmSetNumber)                             | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SpatialResolution`](#ReactionProbe.SpatialResolution)                   | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#ReactionProbe.SpringSelection)                       | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#ReactionProbe.State)                                           | State property.                                                                                                                                                            |
| [`Substep`](#ReactionProbe.Substep)                                       | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#ReactionProbe.Summation)                                   | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#ReactionProbe.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#ReactionProbe.SurfaceSelection)                     | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`TabularData`](#ReactionProbe.TabularData)                               | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#ReactionProbe.Time)                                             | Gets the Time.                                                                                                                                                             |
| [`Total`](#ReactionProbe.Total)                                           | Gets the Total.                                                                                                                                                            |
| [`Type`](#ReactionProbe.Type)                                             | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#ReactionProbe.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#ReactionProbe.XAxis)                                           | Gets the XAxis.                                                                                                                                                            |
| [`YAxis`](#ReactionProbe.YAxis)                                           | Gets the YAxis.                                                                                                                                                            |
| [`ZAxis`](#ReactionProbe.ZAxis)                                           | Gets the ZAxis.                                                                                                                                                            |

<a id="property-detail"></a>

## Property detail

<a id="ReactionProbe.AttachedRefs"></a>

### *property* ReactionProbe.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.BeamSelection"></a>

### *property* ReactionProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.BoundaryConditionSelection"></a>

### *property* ReactionProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.By"></a>

### *property* ReactionProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Children"></a>

### *property* ReactionProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ClsId"></a>

### *property* ReactionProbe.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Comments"></a>

### *property* ReactionProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ContactRegionSelection"></a>

### *property* ReactionProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.CoordinateSystemSelection"></a>

### *property* ReactionProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.DataModelObjectCategory"></a>

### *property* ReactionProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.DisplayTime"></a>

### *property* ReactionProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.DpfEvaluation"></a>

### *property* ReactionProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Extraction"></a>

### *property* ReactionProbe.Extraction *: [Ansys.Mechanical.DataModel.Enums.ProbeExtractionType](../../../../../Mechanical/DataModel/Enums/ProbeExtractionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeExtractionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Extraction.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Figures"></a>

### *property* ReactionProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GeometryLocation"></a>

### *property* ReactionProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GroupingFolder"></a>

### *property* ReactionProbe.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Heat"></a>

### *property* ReactionProbe.Heat *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Heat.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.IconName"></a>

### *property* ReactionProbe.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Images"></a>

### *property* ReactionProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.InternalObject"></a>

### *property* ReactionProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.IsSolved"></a>

### *property* ReactionProbe.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.IterationNumber"></a>

### *property* ReactionProbe.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.LoadStep"></a>

### *property* ReactionProbe.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.LoadStepNumber"></a>

### *property* ReactionProbe.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.LocationMethod"></a>

### *property* ReactionProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MaximumHeat"></a>

### *property* ReactionProbe.MaximumHeat *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumHeat.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MaximumTotal"></a>

### *property* ReactionProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MaximumXAxis"></a>

### *property* ReactionProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MaximumYAxis"></a>

### *property* ReactionProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MaximumZAxis"></a>

### *property* ReactionProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MeshConnectionSelection"></a>

### *property* ReactionProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MinimumHeat"></a>

### *property* ReactionProbe.MinimumHeat *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumHeat.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MinimumTotal"></a>

### *property* ReactionProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MinimumXAxis"></a>

### *property* ReactionProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MinimumYAxis"></a>

### *property* ReactionProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.MinimumZAxis"></a>

### *property* ReactionProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Name"></a>

### *property* ReactionProbe.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ObjectId"></a>

### *property* ReactionProbe.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ObjectState"></a>

### *property* ReactionProbe.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ObjectTags"></a>

### *property* ReactionProbe.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Orientation"></a>

### *property* ReactionProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Parent"></a>

### *property* ReactionProbe.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Properties"></a>

### *property* ReactionProbe.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.RPMSelection"></a>

### *property* ReactionProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.RemotePointSelection"></a>

### *property* ReactionProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ResultSelection"></a>

### *property* ReactionProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.RpmSetNumber"></a>

### *property* ReactionProbe.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.SpatialResolution"></a>

### *property* ReactionProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.SpringSelection"></a>

### *property* ReactionProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.State"></a>

### *property* ReactionProbe.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Substep"></a>

### *property* ReactionProbe.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Summation"></a>

### *property* ReactionProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Suppressed"></a>

### *property* ReactionProbe.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.SurfaceSelection"></a>

### *property* ReactionProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.TabularData"></a>

### *property* ReactionProbe.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Time"></a>

### *property* ReactionProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Total"></a>

### *property* ReactionProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Type"></a>

### *property* ReactionProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.VisibleProperties"></a>

### *property* ReactionProbe.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.XAxis"></a>

### *property* ReactionProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.YAxis"></a>

### *property* ReactionProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ZAxis"></a>

### *property* ReactionProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ReactionProbe.Activate"></a>

### ReactionProbe.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.AddComment"></a>

### ReactionProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.AddFigure"></a>

### ReactionProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.AddImage"></a>

### ReactionProbe.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ClearGeneratedData"></a>

### ReactionProbe.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Copy"></a>

### ReactionProbe.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.CopyTo"></a>

### ReactionProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.CreateObjRef"></a>

### ReactionProbe.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.CreateParameter"></a>

### ReactionProbe.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Cut"></a>

### ReactionProbe.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Delete"></a>

### ReactionProbe.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Duplicate"></a>

### ReactionProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.DuplicateWithoutResults"></a>

### ReactionProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Equals"></a>

### ReactionProbe.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.EvaluateAllResults"></a>

### ReactionProbe.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.ExportAnimation"></a>

### ReactionProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetAPIName"></a>

### ReactionProbe.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetAllProperties"></a>

### ReactionProbe.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetChildren"></a>

### ReactionProbe.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ReactionProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetDetailsView"></a>

### ReactionProbe.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetEnumName"></a>

### ReactionProbe.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetEnumName method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetHashCode"></a>

### ReactionProbe.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetIconFile"></a>

### ReactionProbe.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetLifetimeService"></a>

### ReactionProbe.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetObjectData"></a>

### ReactionProbe.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetParameter"></a>

### ReactionProbe.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetPath"></a>

### ReactionProbe.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetPropertyName"></a>

### ReactionProbe.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetPropertyValue"></a>

### ReactionProbe.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetVisibleProperties"></a>

### ReactionProbe.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GetVisiblePropertyNames"></a>

### ReactionProbe.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GroupAllSimilarChildren"></a>

### ReactionProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.GroupSimilarObjects"></a>

### ReactionProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.InitializeLifetimeService"></a>

### ReactionProbe.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.IsPropertyEditable"></a>

### ReactionProbe.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ReactionProbe.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.IsPropertyVisible"></a>

### ReactionProbe.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ReactionProbe.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.Paste"></a>

### ReactionProbe.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.PropertyByAPIName"></a>

### ReactionProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.PropertyById"></a>

### ReactionProbe.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.PropertyByName"></a>

### ReactionProbe.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.RemoveFromGroup"></a>

### ReactionProbe.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.RemoveParameter"></a>

### ReactionProbe.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.RenameBasedOnDefinition"></a>

### ReactionProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.RetrieveResult"></a>

### ReactionProbe.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="ReactionProbe.SnapToMeshNodes"></a>

### ReactionProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

