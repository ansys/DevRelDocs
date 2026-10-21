# `DeformationProbe`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.DeformationProbe"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ProbeResults.DeformationProbe(internalObject: Any)

<a id="DeformationProbe"></a>

### *class* DeformationProbe(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DeformationProbe.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`Activate`](#DeformationProbe.Activate)                                   | Activate the current object.                                                                   |
| [`AddComment`](#DeformationProbe.AddComment)                               | Creates a new child Comment.                                                                   |
| [`AddFigure`](#DeformationProbe.AddFigure)                                 | Creates a new child Figure.                                                                    |
| [`AddImage`](#DeformationProbe.AddImage)                                   | Creates a new child Image.                                                                     |
| [`ClearGeneratedData`](#DeformationProbe.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                             |
| [`Copy`](#DeformationProbe.Copy)                                           | Copies the current DataModelObject.                                                            |
| [`CopyTo`](#DeformationProbe.CopyTo)                                       | Copies all visible properties from this object to another.                                     |
| [`CreateObjRef`](#DeformationProbe.CreateObjRef)                           | CreateObjRef method.                                                                           |
| [`CreateParameter`](#DeformationProbe.CreateParameter)                     | Creates a new parameter for a Property.                                                        |
| [`Cut`](#DeformationProbe.Cut)                                             | Cuts the current DataModelObject.                                                              |
| [`Delete`](#DeformationProbe.Delete)                                       | Run the Delete action.                                                                         |
| [`Duplicate`](#DeformationProbe.Duplicate)                                 | Creates a copy of the current DataModelObject.                                                 |
| [`DuplicateWithoutResults`](#DeformationProbe.DuplicateWithoutResults)     | Run the DuplicateWithoutResults action.                                                        |
| [`Equals`](#DeformationProbe.Equals)                                       | Equals method.                                                                                 |
| [`EvaluateAllResults`](#DeformationProbe.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                             |
| [`ExportAnimation`](#DeformationProbe.ExportAnimation)                     | Run the ExportAnimation action.                                                                |
| [`GetAPIName`](#DeformationProbe.GetAPIName)                               | GetAPIName method.                                                                             |
| [`GetAllProperties`](#DeformationProbe.GetAllProperties)                   | GetAllProperties method.                                                                       |
| [`GetChildren`](#DeformationProbe.GetChildren)                             | Gets the list of children, filtered by type.                                                   |
| [`GetDetailsView`](#DeformationProbe.GetDetailsView)                       | GetDetailsView method.                                                                         |
| [`GetEnumName`](#DeformationProbe.GetEnumName)                             | Enum name bound to value                                                                       |
| [`GetHashCode`](#DeformationProbe.GetHashCode)                             | GetHashCode method.                                                                            |
| [`GetIconFile`](#DeformationProbe.GetIconFile)                             | GetIconFile method.                                                                            |
| [`GetLifetimeService`](#DeformationProbe.GetLifetimeService)               | GetLifetimeService method.                                                                     |
| [`GetObjectData`](#DeformationProbe.GetObjectData)                         | GetObjectData method.                                                                          |
| [`GetParameter`](#DeformationProbe.GetParameter)                           | Gets the parameter corresponding to the given property.                                        |
| [`GetPath`](#DeformationProbe.GetPath)                                     | GetPath method.                                                                                |
| [`GetPropertyName`](#DeformationProbe.GetPropertyName)                     | GetPropertyName method.                                                                        |
| [`GetPropertyValue`](#DeformationProbe.GetPropertyValue)                   | GetPropertyValue method.                                                                       |
| [`GetVisibleProperties`](#DeformationProbe.GetVisibleProperties)           | GetVisibleProperties method.                                                                   |
| [`GetVisiblePropertyNames`](#DeformationProbe.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                                |
| [`GroupAllSimilarChildren`](#DeformationProbe.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                        |
| [`GroupSimilarObjects`](#DeformationProbe.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                            |
| [`InitializeLifetimeService`](#DeformationProbe.InitializeLifetimeService) | InitializeLifetimeService method.                                                              |
| [`IsPropertyEditable`](#DeformationProbe.IsPropertyEditable)               | IsPropertyEditable method.                                                                     |
| [`IsPropertyVisible`](#DeformationProbe.IsPropertyVisible)                 | IsPropertyVisible method.                                                                      |
| [`Paste`](#DeformationProbe.Paste)                                         | Pastes to the current DataModelObject context.                                                 |
| [`PropertyByAPIName`](#DeformationProbe.PropertyByAPIName)                 | Get a property by its API name.                                                                |
| [`PropertyById`](#DeformationProbe.PropertyById)                           | PropertyById method.                                                                           |
| [`PropertyByName`](#DeformationProbe.PropertyByName)                       | Get a property by its unique name.                                                             |
| [`RemoveFromGroup`](#DeformationProbe.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.    |
| [`RemoveParameter`](#DeformationProbe.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.              |
| [`RenameBasedOnDefinition`](#DeformationProbe.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                        |
| [`RetrieveResult`](#DeformationProbe.RetrieveResult)                       | Evaluates the individual probe result without evaluating all the results in the same solution. |
| [`SnapToMeshNodes`](#DeformationProbe.SnapToMeshNodes)                     | Snap the coordinates of probe result to the mesh nodes.                                        |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#DeformationProbe.AttachedRefs)                                 | AttachedRefs property.                                                                                                                                                     |
| [`BeamSelection`](#DeformationProbe.BeamSelection)                               | Gets or sets the BeamSelection.                                                                                                                                            |
| [`BoundaryConditionSelection`](#DeformationProbe.BoundaryConditionSelection)     | Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'. |
| [`By`](#DeformationProbe.By)                                                     | Gets or sets the By property options to specify how to review result contours from multiple result sets.                                                                   |
| [`Children`](#DeformationProbe.Children)                                         | Gets the list of children.                                                                                                                                                 |
| [`ClsId`](#DeformationProbe.ClsId)                                               | ClsId property.                                                                                                                                                            |
| [`Comments`](#DeformationProbe.Comments)                                         | Gets the list of associated comments.                                                                                                                                      |
| [`ContactRegionSelection`](#DeformationProbe.ContactRegionSelection)             | Gets or sets the ContactRegionSelection.                                                                                                                                   |
| [`CoordinateSystemSelection`](#DeformationProbe.CoordinateSystemSelection)       | Gets or sets the CoordinateSystemSelection.                                                                                                                                |
| [`DataModelObjectCategory`](#DeformationProbe.DataModelObjectCategory)           | Gets the current DataModelObject's category.                                                                                                                               |
| [`DisplayTime`](#DeformationProbe.DisplayTime)                                   | Gets or sets the DisplayTime.                                                                                                                                              |
| [`DpfEvaluation`](#DeformationProbe.DpfEvaluation)                               | Gets or sets the DpfEvaluation.                                                                                                                                            |
| [`Figures`](#DeformationProbe.Figures)                                           | Gets the list of associated figures.                                                                                                                                       |
| [`GeometryLocation`](#DeformationProbe.GeometryLocation)                         | Gets or sets the GeometryLocation.                                                                                                                                         |
| [`GroupingFolder`](#DeformationProbe.GroupingFolder)                             | GroupingFolder property.                                                                                                                                                   |
| [`IconName`](#DeformationProbe.IconName)                                         | IconName property.                                                                                                                                                         |
| [`Images`](#DeformationProbe.Images)                                             | Gets the list of associated images.                                                                                                                                        |
| [`InternalObject`](#DeformationProbe.InternalObject)                             | Gets the internal object. For advanced usage only.                                                                                                                         |
| [`IsSolved`](#DeformationProbe.IsSolved)                                         | Gets the IsSolved.                                                                                                                                                         |
| [`IterationNumber`](#DeformationProbe.IterationNumber)                           | Gets the IterationNumber.                                                                                                                                                  |
| [`LoadStep`](#DeformationProbe.LoadStep)                                         | Gets the LoadStep.                                                                                                                                                         |
| [`LoadStepNumber`](#DeformationProbe.LoadStepNumber)                             | Gets or sets the LoadStepNumber.                                                                                                                                           |
| [`LocationMethod`](#DeformationProbe.LocationMethod)                             | Gets or sets the LocationMethod.                                                                                                                                           |
| [`MaximumTotal`](#DeformationProbe.MaximumTotal)                                 | Gets the MaximumTotal.                                                                                                                                                     |
| [`MaximumTotalDeformation`](#DeformationProbe.MaximumTotalDeformation)           | Gets the MaximumTotalDeformation.                                                                                                                                          |
| [`MaximumXAxis`](#DeformationProbe.MaximumXAxis)                                 | Gets the MaximumXAxis.                                                                                                                                                     |
| [`MaximumXAxisDeformation`](#DeformationProbe.MaximumXAxisDeformation)           | Gets the MaximumXAxisDeformation.                                                                                                                                          |
| [`MaximumYAxis`](#DeformationProbe.MaximumYAxis)                                 | Gets the MaximumYAxis.                                                                                                                                                     |
| [`MaximumYAxisDeformation`](#DeformationProbe.MaximumYAxisDeformation)           | Gets the MaximumYAxisDeformation.                                                                                                                                          |
| [`MaximumZAxis`](#DeformationProbe.MaximumZAxis)                                 | Gets the MaximumZAxis.                                                                                                                                                     |
| [`MaximumZAxisDeformation`](#DeformationProbe.MaximumZAxisDeformation)           | Gets the MaximumZAxisDeformation.                                                                                                                                          |
| [`MeshConnectionSelection`](#DeformationProbe.MeshConnectionSelection)           | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`MinimumTotal`](#DeformationProbe.MinimumTotal)                                 | Gets the MinimumTotal.                                                                                                                                                     |
| [`MinimumTotalDeformation`](#DeformationProbe.MinimumTotalDeformation)           | Gets the MinimumTotalDeformation.                                                                                                                                          |
| [`MinimumXAxis`](#DeformationProbe.MinimumXAxis)                                 | Gets the MinimumXAxis.                                                                                                                                                     |
| [`MinimumXAxisDeformation`](#DeformationProbe.MinimumXAxisDeformation)           | Gets the MinimumXAxisDeformation.                                                                                                                                          |
| [`MinimumYAxis`](#DeformationProbe.MinimumYAxis)                                 | Gets the MinimumYAxis.                                                                                                                                                     |
| [`MinimumYAxisDeformation`](#DeformationProbe.MinimumYAxisDeformation)           | Gets the MinimumYAxisDeformation.                                                                                                                                          |
| [`MinimumZAxis`](#DeformationProbe.MinimumZAxis)                                 | Gets the MinimumZAxis.                                                                                                                                                     |
| [`MinimumZAxisDeformation`](#DeformationProbe.MinimumZAxisDeformation)           | Gets the MinimumZAxisDeformation.                                                                                                                                          |
| [`Name`](#DeformationProbe.Name)                                                 | Name property.                                                                                                                                                             |
| [`ObjectId`](#DeformationProbe.ObjectId)                                         | ObjectId property.                                                                                                                                                         |
| [`ObjectState`](#DeformationProbe.ObjectState)                                   | ObjectState property.                                                                                                                                                      |
| [`ObjectTags`](#DeformationProbe.ObjectTags)                                     | ObjectTags property.                                                                                                                                                       |
| [`Orientation`](#DeformationProbe.Orientation)                                   | Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.                                                                                |
| [`Parent`](#DeformationProbe.Parent)                                             | Parent property.                                                                                                                                                           |
| [`Properties`](#DeformationProbe.Properties)                                     | Gets the list of properties for this object.                                                                                                                               |
| [`RPMSelection`](#DeformationProbe.RPMSelection)                                 | Gets or sets the RPM Selection value at which the results are evaluated.                                                                                                   |
| [`RemotePointSelection`](#DeformationProbe.RemotePointSelection)                 | Gets or sets the RemotePointSelection.                                                                                                                                     |
| [`ResultSelection`](#DeformationProbe.ResultSelection)                           | Gets or sets the ResultSelection.                                                                                                                                          |
| [`RpmSetNumber`](#DeformationProbe.RpmSetNumber)                                 | Gets or sets the RpmSetNumber.                                                                                                                                             |
| [`SpatialResolution`](#DeformationProbe.SpatialResolution)                       | Gets or sets the SpatialResolution.                                                                                                                                        |
| [`SpringSelection`](#DeformationProbe.SpringSelection)                           | Gets or sets the SpringSelection.                                                                                                                                          |
| [`State`](#DeformationProbe.State)                                               | State property.                                                                                                                                                            |
| [`Substep`](#DeformationProbe.Substep)                                           | Gets the Substep.                                                                                                                                                          |
| [`Summation`](#DeformationProbe.Summation)                                       | Gets or sets the Summation.                                                                                                                                                |
| [`Suppressed`](#DeformationProbe.Suppressed)                                     | Gets or sets the Suppressed.                                                                                                                                               |
| [`SurfaceSelection`](#DeformationProbe.SurfaceSelection)                         | Gets or sets the MeshConnectionSelection.                                                                                                                                  |
| [`TabularData`](#DeformationProbe.TabularData)                                   | Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.                                                                          |
| [`Time`](#DeformationProbe.Time)                                                 | Gets the Time.                                                                                                                                                             |
| [`Total`](#DeformationProbe.Total)                                               | Gets the Total.                                                                                                                                                            |
| [`TotalDeformation`](#TotalDeformation) | Gets the TotalDeformation.                                                                                                                                                 |
| [`Type`](#DeformationProbe.Type)                                                 | Gets the Type.                                                                                                                                                             |
| [`VisibleProperties`](#DeformationProbe.VisibleProperties)                       | Gets the list of properties that are visible for this object.                                                                                                              |
| [`XAxis`](#DeformationProbe.XAxis)                                               | Gets the XAxis.                                                                                                                                                            |
| [`XAxisDeformation`](#DeformationProbe.XAxisDeformation)                         | Gets the XAxisDeformation.                                                                                                                                                 |
| [`XCoordinate`](#DeformationProbe.XCoordinate)                                   | Gets the XCoordinate.                                                                                                                                                      |
| [`YAxis`](#DeformationProbe.YAxis)                                               | Gets the YAxis.                                                                                                                                                            |
| [`YAxisDeformation`](#DeformationProbe.YAxisDeformation)                         | Gets the YAxisDeformation.                                                                                                                                                 |
| [`YCoordinate`](#DeformationProbe.YCoordinate)                                   | Gets the YCoordinate.                                                                                                                                                      |
| [`ZAxis`](#DeformationProbe.ZAxis)                                               | Gets the ZAxis.                                                                                                                                                            |
| [`ZAxisDeformation`](#DeformationProbe.ZAxisDeformation)                         | Gets the ZAxisDeformation.                                                                                                                                                 |
| [`ZCoordinate`](#DeformationProbe.ZCoordinate)                                   | Gets the ZCoordinate.                                                                                                                                                      |

<a id="property-detail"></a>

## Property detail

<a id="DeformationProbe.AttachedRefs"></a>

### *property* DeformationProbe.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.BeamSelection"></a>

### *property* DeformationProbe.BeamSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Beam](../../Connections/Beam.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Beam) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BeamSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.BoundaryConditionSelection"></a>

### *property* DeformationProbe.BoundaryConditionSelection *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryConditionSelection. In order to select the option 'WeakSprings', please use the property 'LocationMethod = LocationDefinitionMethod.WeakSprings'.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.By"></a>

### *property* DeformationProbe.By *: [Ansys.Mechanical.DataModel.Enums.SetDriverStyle](../../../../../Mechanical/DataModel/Enums/SetDriverStyle.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SetDriverStyle) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the By property options to specify how to review result contours from multiple result sets.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Children"></a>

### *property* DeformationProbe.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ClsId"></a>

### *property* DeformationProbe.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Comments"></a>

### *property* DeformationProbe.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ContactRegionSelection"></a>

### *property* DeformationProbe.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../Connections/ContactRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactRegionSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.CoordinateSystemSelection"></a>

### *property* DeformationProbe.CoordinateSystemSelection *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystemSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.DataModelObjectCategory"></a>

### *property* DeformationProbe.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.DisplayTime"></a>

### *property* DeformationProbe.DisplayTime *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DisplayTime.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.DpfEvaluation"></a>

### *property* DeformationProbe.DpfEvaluation *: [Ansys.Mechanical.DataModel.Enums.DpfEvaluationType](../../../../../Mechanical/DataModel/Enums/DpfEvaluationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DpfEvaluationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DpfEvaluation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Figures"></a>

### *property* DeformationProbe.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GeometryLocation"></a>

### *property* DeformationProbe.GeometryLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryLocation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GroupingFolder"></a>

### *property* DeformationProbe.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.IconName"></a>

### *property* DeformationProbe.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Images"></a>

### *property* DeformationProbe.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.InternalObject"></a>

### *property* DeformationProbe.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSProbeResultAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.IsSolved"></a>

### *property* DeformationProbe.IsSolved *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IsSolved.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.IterationNumber"></a>

### *property* DeformationProbe.IterationNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IterationNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.LoadStep"></a>

### *property* DeformationProbe.LoadStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LoadStep.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.LoadStepNumber"></a>

### *property* DeformationProbe.LoadStepNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.LocationMethod"></a>

### *property* DeformationProbe.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod](../../../../../Mechanical/DataModel/Enums/LocationDefinitionMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LocationDefinitionMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumTotal"></a>

### *property* DeformationProbe.MaximumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotal.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumTotalDeformation"></a>

### *property* DeformationProbe.MaximumTotalDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumTotalDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumXAxis"></a>

### *property* DeformationProbe.MaximumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumXAxisDeformation"></a>

### *property* DeformationProbe.MaximumXAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumXAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumYAxis"></a>

### *property* DeformationProbe.MaximumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumYAxisDeformation"></a>

### *property* DeformationProbe.MaximumYAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumYAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumZAxis"></a>

### *property* DeformationProbe.MaximumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MaximumZAxisDeformation"></a>

### *property* DeformationProbe.MaximumZAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaximumZAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MeshConnectionSelection"></a>

### *property* DeformationProbe.MeshConnectionSelection *: [Ansys.ACT.Automation.Mechanical.MeshConnection](../../MeshConnection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshConnection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumTotal"></a>

### *property* DeformationProbe.MinimumTotal *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotal.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumTotalDeformation"></a>

### *property* DeformationProbe.MinimumTotalDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumTotalDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumXAxis"></a>

### *property* DeformationProbe.MinimumXAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumXAxisDeformation"></a>

### *property* DeformationProbe.MinimumXAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumXAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumYAxis"></a>

### *property* DeformationProbe.MinimumYAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumYAxisDeformation"></a>

### *property* DeformationProbe.MinimumYAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumYAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumZAxis"></a>

### *property* DeformationProbe.MinimumZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.MinimumZAxisDeformation"></a>

### *property* DeformationProbe.MinimumZAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MinimumZAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Name"></a>

### *property* DeformationProbe.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ObjectId"></a>

### *property* DeformationProbe.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ObjectState"></a>

### *property* DeformationProbe.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ObjectTags"></a>

### *property* DeformationProbe.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Orientation"></a>

### *property* DeformationProbe.Orientation *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Orientation. Accepts/Returns None if it is the Solution Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Parent"></a>

### *property* DeformationProbe.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Properties"></a>

### *property* DeformationProbe.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.RPMSelection"></a>

### *property* DeformationProbe.RPMSelection *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RPM Selection value at which the results are evaluated.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.RemotePointSelection"></a>

### *property* DeformationProbe.RemotePointSelection *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../../RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePointSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ResultSelection"></a>

### *property* DeformationProbe.ResultSelection *: [Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter](../../../../../Mechanical/DataModel/Enums/ProbeDisplayFilter.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeDisplayFilter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ResultSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.RpmSetNumber"></a>

### *property* DeformationProbe.RpmSetNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RpmSetNumber.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.SpatialResolution"></a>

### *property* DeformationProbe.SpatialResolution *: [Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum](../../../../../Mechanical/DataModel/Enums/MinimumOrMaximum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MinimumOrMaximum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialResolution.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.SpringSelection"></a>

### *property* DeformationProbe.SpringSelection *: [Ansys.ACT.Automation.Mechanical.Connections.Spring](../../Connections/Spring.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Connections.Spring) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpringSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.State"></a>

### *property* DeformationProbe.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Substep"></a>

### *property* DeformationProbe.Substep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Substep.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Summation"></a>

### *property* DeformationProbe.Summation *: [Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType](../../../../../Mechanical/DataModel/Enums/MomentsAtSummationPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.MomentsAtSummationPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Summation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Suppressed"></a>

### *property* DeformationProbe.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.SurfaceSelection"></a>

### *property* DeformationProbe.SurfaceSelection *: [Ansys.ACT.Automation.Mechanical.Surface](../../Surface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Surface) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshConnectionSelection.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.TabularData"></a>

### *property* DeformationProbe.TabularData *: [Ansys.Mechanical.Interfaces.ITable](../../../../../Mechanical/Interfaces/ITable.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Interfaces.ITable) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the tabular data of the result probe. Use a to get index to each column of the tabular data.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Time"></a>

### *property* DeformationProbe.Time *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Time.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Total"></a>

### *property* DeformationProbe.Total *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Total.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.TotalDeformation"></a>

### *property* DeformationProbe.TotalDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Type"></a>

### *property* DeformationProbe.Type *: [Ansys.Mechanical.DataModel.Enums.ProbeResultType](../../../../../Mechanical/DataModel/Enums/ProbeResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ProbeResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.VisibleProperties"></a>

### *property* DeformationProbe.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.XAxis"></a>

### *property* DeformationProbe.XAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.XAxisDeformation"></a>

### *property* DeformationProbe.XAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.XCoordinate"></a>

### *property* DeformationProbe.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.YAxis"></a>

### *property* DeformationProbe.YAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.YAxisDeformation"></a>

### *property* DeformationProbe.YAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.YCoordinate"></a>

### *property* DeformationProbe.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ZAxis"></a>

### *property* DeformationProbe.ZAxis *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxis.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ZAxisDeformation"></a>

### *property* DeformationProbe.ZAxisDeformation *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZAxisDeformation.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ZCoordinate"></a>

### *property* DeformationProbe.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DeformationProbe.Activate"></a>

### DeformationProbe.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.AddComment"></a>

### DeformationProbe.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.AddFigure"></a>

### DeformationProbe.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.AddImage"></a>

### DeformationProbe.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ClearGeneratedData"></a>

### DeformationProbe.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Copy"></a>

### DeformationProbe.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.CopyTo"></a>

### DeformationProbe.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.CreateObjRef"></a>

### DeformationProbe.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.CreateParameter"></a>

### DeformationProbe.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Cut"></a>

### DeformationProbe.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Delete"></a>

### DeformationProbe.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Duplicate"></a>

### DeformationProbe.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.DuplicateWithoutResults"></a>

### DeformationProbe.DuplicateWithoutResults() → Ansys.ACT.Automation.Mechanical.DataModelObject

Run the DuplicateWithoutResults action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Equals"></a>

### DeformationProbe.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.EvaluateAllResults"></a>

### DeformationProbe.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.ExportAnimation"></a>

### DeformationProbe.ExportAnimation(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat](../../../../../Mechanical/DataModel/Enums/GraphicsAnimationExportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GraphicsAnimationExportFormat), settings: [Ansys.Mechanical.Graphics.AnimationExportSettings](../../../../../Mechanical/Graphics/AnimationExportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.AnimationExportSettings)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ExportAnimation action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetAPIName"></a>

### DeformationProbe.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetAPIName method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetAllProperties"></a>

### DeformationProbe.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetChildren"></a>

### DeformationProbe.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DeformationProbe.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetDetailsView"></a>

### DeformationProbe.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetEnumName"></a>

### DeformationProbe.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetHashCode"></a>

### DeformationProbe.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetIconFile"></a>

### DeformationProbe.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetLifetimeService"></a>

### DeformationProbe.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetObjectData"></a>

### DeformationProbe.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetParameter"></a>

### DeformationProbe.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetPath"></a>

### DeformationProbe.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetPropertyName"></a>

### DeformationProbe.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetPropertyValue"></a>

### DeformationProbe.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetVisibleProperties"></a>

### DeformationProbe.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GetVisiblePropertyNames"></a>

### DeformationProbe.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GroupAllSimilarChildren"></a>

### DeformationProbe.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.GroupSimilarObjects"></a>

### DeformationProbe.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.InitializeLifetimeService"></a>

### DeformationProbe.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.IsPropertyEditable"></a>

### DeformationProbe.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DeformationProbe.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.IsPropertyVisible"></a>

### DeformationProbe.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DeformationProbe.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.Paste"></a>

### DeformationProbe.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.PropertyByAPIName"></a>

### DeformationProbe.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.PropertyById"></a>

### DeformationProbe.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.PropertyByName"></a>

### DeformationProbe.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.RemoveFromGroup"></a>

### DeformationProbe.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.RemoveParameter"></a>

### DeformationProbe.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.RenameBasedOnDefinition"></a>

### DeformationProbe.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.RetrieveResult"></a>

### DeformationProbe.RetrieveResult() → [None](https://docs.python.org/3/builtins/constants.html#None)

Evaluates the individual probe result without evaluating all the results in the same solution.

<!-- !! processed by numpydoc !! -->

<a id="DeformationProbe.SnapToMeshNodes"></a>

### DeformationProbe.SnapToMeshNodes() → [None](https://docs.python.org/3/builtins/constants.html#None)

Snap the coordinates of probe result to the mesh nodes.

<!-- !! processed by numpydoc !! -->

