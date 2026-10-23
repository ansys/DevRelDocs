# `PrimaryCriterion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PrimaryCriterion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PrimaryCriterion(internalObject: Any)

<a id="PrimaryCriterion"></a>

### *class* PrimaryCriterion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PrimaryCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PrimaryCriterion.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PrimaryCriterion.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PrimaryCriterion.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PrimaryCriterion.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#PrimaryCriterion.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#PrimaryCriterion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PrimaryCriterion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PrimaryCriterion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PrimaryCriterion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PrimaryCriterion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PrimaryCriterion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PrimaryCriterion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PrimaryCriterion.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#PrimaryCriterion.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#PrimaryCriterion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PrimaryCriterion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PrimaryCriterion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PrimaryCriterion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PrimaryCriterion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PrimaryCriterion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PrimaryCriterion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PrimaryCriterion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PrimaryCriterion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PrimaryCriterion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PrimaryCriterion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PrimaryCriterion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PrimaryCriterion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#PrimaryCriterion.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#PrimaryCriterion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PrimaryCriterion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PrimaryCriterion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PrimaryCriterion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PrimaryCriterion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PrimaryCriterion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PrimaryCriterion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PrimaryCriterion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#PrimaryCriterion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PrimaryCriterion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PrimaryCriterion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PrimaryCriterion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PrimaryCriterion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#PrimaryCriterion.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#PrimaryCriterion.AttachedRefs)                             | AttachedRefs property.                                                                                                                                                                                                                                         |
| [`BaseResult`](#PrimaryCriterion.BaseResult)                                 | Gets or sets the BaseResult.                                                                                                                                                                                                                                   |
| [`BoundaryCondition`](#PrimaryCriterion.BoundaryCondition)                   | Gets or sets the BoundaryCondition.                                                                                                                                                                                                                            |
| [`Children`](#PrimaryCriterion.Children)                                     | Gets the list of children.                                                                                                                                                                                                                                     |
| [`ClsId`](#PrimaryCriterion.ClsId)                                           | ClsId property.                                                                                                                                                                                                                                                |
| [`Comments`](#PrimaryCriterion.Comments)                                     | Gets the list of associated comments.                                                                                                                                                                                                                          |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                   | Gets or sets the Coordinate System.                                                                                                                                                                                                                            |
| [`DataModelObjectCategory`](#PrimaryCriterion.DataModelObjectCategory)       | Gets the current DataModelObject's category.                                                                                                                                                                                                                   |
| [`DirectionX`](#PrimaryCriterion.DirectionX)                                 | Gets or sets the DirectionX.                                                                                                                                                                                                                                   |
| [`DirectionY`](#PrimaryCriterion.DirectionY)                                 | Gets or sets the DirectionY.                                                                                                                                                                                                                                   |
| [`DirectionZ`](#PrimaryCriterion.DirectionZ)                                 | Gets or sets the DirectionZ.                                                                                                                                                                                                                                   |
| [`DiscretizationError`](#PrimaryCriterion.DiscretizationError)               | Gets or sets the DiscretizationError.                                                                                                                                                                                                                          |
| [`EnvironmentSelection`](#PrimaryCriterion.EnvironmentSelection)             | Gets or sets which environment to be monitored, this should be a specific  upstream to the structural optimization. Unsupported configurations will result in an underdefined state. For more information see the product documentation for Primary Criterion. |
| [`Figures`](#PrimaryCriterion.Figures)                                       | Gets the list of associated figures.                                                                                                                                                                                                                           |
| [`FrequencyRangeType`](#PrimaryCriterion.FrequencyRangeType)                 | Gets or sets the FrequencyRangeType.                                                                                                                                                                                                                           |
| [`FrequencyReduction`](#PrimaryCriterion.FrequencyReduction)                 | Gets or sets the FrequencyReduction.                                                                                                                                                                                                                           |
| [`GroupingFolder`](#PrimaryCriterion.GroupingFolder)                         | GroupingFolder property.                                                                                                                                                                                                                                       |
| [`HarmonicIndex`](#PrimaryCriterion.HarmonicIndex)                           | Gets or sets the Harmonic Index to be considered for cyclic models.                                                                                                                                                                                            |
| [`IconName`](#PrimaryCriterion.IconName)                                     | IconName property.                                                                                                                                                                                                                                             |
| [`Images`](#PrimaryCriterion.Images)                                         | Gets the list of associated images.                                                                                                                                                                                                                            |
| [`ImportableObjectSourceId`](#PrimaryCriterion.ImportableObjectSourceId)     | ImportableObjectSourceId property.                                                                                                                                                                                                                             |
| [`InternalObject`](#PrimaryCriterion.InternalObject)                         | Gets the internal object. For advanced usage only.                                                                                                                                                                                                             |
| [`Location`](#PrimaryCriterion.Location)                                     | Gets or sets the Location.                                                                                                                                                                                                                                     |
| [`LocationMethod`](#PrimaryCriterion.LocationMethod)                         | Gets or sets the LocationMethod.                                                                                                                                                                                                                               |
| [`MaximumFrequency`](#PrimaryCriterion.MaximumFrequency)                     | Gets or sets the MaximumFrequency.                                                                                                                                                                                                                             |
| [`MinimumFrequency`](#PrimaryCriterion.MinimumFrequency)                     | Gets or sets the MinimumFrequency.                                                                                                                                                                                                                             |
| [`ModeNumber`](#PrimaryCriterion.ModeNumber)                                 | Gets or sets the ModeNumber.                                                                                                                                                                                                                                   |
| [`Name`](#PrimaryCriterion.Name)                                             | Name property.                                                                                                                                                                                                                                                 |
| [`ObjectId`](#PrimaryCriterion.ObjectId)                                     | ObjectId property.                                                                                                                                                                                                                                             |
| [`ObjectState`](#PrimaryCriterion.ObjectState)                               | ObjectState property.                                                                                                                                                                                                                                          |
| [`ObjectTags`](#PrimaryCriterion.ObjectTags)                                 | ObjectTags property.                                                                                                                                                                                                                                           |
| [`Parent`](#PrimaryCriterion.Parent)                                         | Parent property.                                                                                                                                                                                                                                               |
| [`Properties`](#PrimaryCriterion.Properties)                                 | Gets the list of properties for this object.                                                                                                                                                                                                                   |
| [`ReadOnly`](#PrimaryCriterion.ReadOnly)                                     | Gets or sets the ReadOnly.                                                                                                                                                                                                                                     |
| [`ReferenceType`](#PrimaryCriterion.ReferenceType)                           | Gets or sets the ReferenceType.                                                                                                                                                                                                                                |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                                  | Gets or sets the RemotePoint.                                                                                                                                                                                                                                  |
| [`ResponseSelection`](#PrimaryCriterion.ResponseSelection)                   | Gets or sets the  or  to be monitored. Unsupported configurations will result in an underdefined state. An exception is thrown for invalid types. For more information see the product documentation for PrimaryCriterion.                                     |
| [`RobustFrequenciesReduction`](#PrimaryCriterion.RobustFrequenciesReduction) | Gets or sets the RobustFrequenciesReduction.                                                                                                                                                                                                                   |
| [`SpatialReduction`](#PrimaryCriterion.SpatialReduction)                     | Gets or sets the SpatialReduction.                                                                                                                                                                                                                             |
| [`SpatialReductionMethod`](#PrimaryCriterion.SpatialReductionMethod)         | Gets or sets the SpatialReductionMethod.                                                                                                                                                                                                                       |
| [`State`](#PrimaryCriterion.State)                                           | State property.                                                                                                                                                                                                                                                |
| [`Step`](#PrimaryCriterion.Step)                                             | Gets or sets the Step.                                                                                                                                                                                                                                         |
| [`Suppressed`](#PrimaryCriterion.Suppressed)                                 | Gets or sets the Suppressed.                                                                                                                                                                                                                                   |
| [`TransferableObjectId`](#PrimaryCriterion.TransferableObjectId)             | TransferableObjectId property.                                                                                                                                                                                                                                 |
| [`Value`](#PrimaryCriterion.Value)                                           | Gets the Value.                                                                                                                                                                                                                                                |
| [`VectorReduction`](#PrimaryCriterion.VectorReduction)                       | Gets or sets the VectorReduction.                                                                                                                                                                                                                              |
| [`VisibleProperties`](#PrimaryCriterion.VisibleProperties)                   | Gets the list of properties that are visible for this object.                                                                                                                                                                                                  |

<a id="property-detail"></a>

## Property detail

<a id="PrimaryCriterion.AttachedRefs"></a>

### *property* PrimaryCriterion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.BaseResult"></a>

### *property* PrimaryCriterion.BaseResult *: [Ansys.Mechanical.DataModel.Enums.BaseResultType](../../../Mechanical/DataModel/Enums/BaseResultType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BaseResultType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BaseResult.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.BoundaryCondition"></a>

### *property* PrimaryCriterion.BoundaryCondition *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Children"></a>

### *property* PrimaryCriterion.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ClsId"></a>

### *property* PrimaryCriterion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Comments"></a>

### *property* PrimaryCriterion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.CoordinateSystem"></a>

### *property* PrimaryCriterion.CoordinateSystem *: Ansys.Mechanical.DataModel.Interfaces.ICoordinateSystemSelection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DataModelObjectCategory"></a>

### *property* PrimaryCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DirectionX"></a>

### *property* PrimaryCriterion.DirectionX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DirectionX.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DirectionY"></a>

### *property* PrimaryCriterion.DirectionY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DirectionY.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DirectionZ"></a>

### *property* PrimaryCriterion.DirectionZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DirectionZ.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DiscretizationError"></a>

### *property* PrimaryCriterion.DiscretizationError *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DiscretizationError.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.EnvironmentSelection"></a>

### *property* PrimaryCriterion.EnvironmentSelection *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets which environment to be monitored, this should be a specific  upstream to the structural optimization. Unsupported configurations will result in an underdefined state. For more information see the product documentation for Primary Criterion.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Figures"></a>

### *property* PrimaryCriterion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.FrequencyRangeType"></a>

### *property* PrimaryCriterion.FrequencyRangeType *: [Ansys.Mechanical.DataModel.Enums.CriterionFrequencyRangeType](../../../Mechanical/DataModel/Enums/CriterionFrequencyRangeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CriterionFrequencyRangeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencyRangeType.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.FrequencyReduction"></a>

### *property* PrimaryCriterion.FrequencyReduction *: [Ansys.Mechanical.DataModel.Enums.FrequencyReductionType](../../../Mechanical/DataModel/Enums/FrequencyReductionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FrequencyReductionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrequencyReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GroupingFolder"></a>

### *property* PrimaryCriterion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.HarmonicIndex"></a>

### *property* PrimaryCriterion.HarmonicIndex *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Harmonic Index to be considered for cyclic models.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.IconName"></a>

### *property* PrimaryCriterion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Images"></a>

### *property* PrimaryCriterion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ImportableObjectSourceId"></a>

### *property* PrimaryCriterion.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.InternalObject"></a>

### *property* PrimaryCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Location"></a>

### *property* PrimaryCriterion.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.LocationMethod"></a>

### *property* PrimaryCriterion.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.MaximumFrequency"></a>

### *property* PrimaryCriterion.MaximumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.MinimumFrequency"></a>

### *property* PrimaryCriterion.MinimumFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ModeNumber"></a>

### *property* PrimaryCriterion.ModeNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Name"></a>

### *property* PrimaryCriterion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ObjectId"></a>

### *property* PrimaryCriterion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ObjectState"></a>

### *property* PrimaryCriterion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ObjectTags"></a>

### *property* PrimaryCriterion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Parent"></a>

### *property* PrimaryCriterion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Properties"></a>

### *property* PrimaryCriterion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ReadOnly"></a>

### *property* PrimaryCriterion.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ReferenceType"></a>

### *property* PrimaryCriterion.ReferenceType *: [Ansys.Mechanical.DataModel.Enums.VectorReductionReferenceType](../../../Mechanical/DataModel/Enums/VectorReductionReferenceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.VectorReductionReferenceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceType.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RemotePoint"></a>

### *property* PrimaryCriterion.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ResponseSelection"></a>

### *property* PrimaryCriterion.ResponseSelection *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the  or  to be monitored. Unsupported configurations will result in an underdefined state. An exception is thrown for invalid types. For more information see the product documentation for PrimaryCriterion.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RobustFrequenciesReduction"></a>

### *property* PrimaryCriterion.RobustFrequenciesReduction *: [Ansys.Mechanical.DataModel.Enums.RobustFrequenciesReductionType](../../../Mechanical/DataModel/Enums/RobustFrequenciesReductionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RobustFrequenciesReductionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RobustFrequenciesReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.SpatialReduction"></a>

### *property* PrimaryCriterion.SpatialReduction *: [Ansys.Mechanical.DataModel.Enums.SpatialReductionType](../../../Mechanical/DataModel/Enums/SpatialReductionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SpatialReductionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.SpatialReductionMethod"></a>

### *property* PrimaryCriterion.SpatialReductionMethod *: [Ansys.Mechanical.DataModel.Enums.SpatialReductionMethodType](../../../Mechanical/DataModel/Enums/SpatialReductionMethodType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SpatialReductionMethodType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpatialReductionMethod.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.State"></a>

### *property* PrimaryCriterion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Step"></a>

### *property* PrimaryCriterion.Step *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Step.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Suppressed"></a>

### *property* PrimaryCriterion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.TransferableObjectId"></a>

### *property* PrimaryCriterion.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Value"></a>

### *property* PrimaryCriterion.Value *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Value.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.VectorReduction"></a>

### *property* PrimaryCriterion.VectorReduction *: [Ansys.Mechanical.DataModel.Enums.VectorReductionType](../../../Mechanical/DataModel/Enums/VectorReductionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.VectorReductionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VectorReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.VisibleProperties"></a>

### *property* PrimaryCriterion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PrimaryCriterion.Activate"></a>

### PrimaryCriterion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.AddComment"></a>

### PrimaryCriterion.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.AddFigure"></a>

### PrimaryCriterion.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.AddImage"></a>

### PrimaryCriterion.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ClearGeneratedData"></a>

### PrimaryCriterion.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Copy"></a>

### PrimaryCriterion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.CopyTo"></a>

### PrimaryCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.CreateObjRef"></a>

### PrimaryCriterion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.CreateParameter"></a>

### PrimaryCriterion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Cut"></a>

### PrimaryCriterion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Delete"></a>

### PrimaryCriterion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Duplicate"></a>

### PrimaryCriterion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Equals"></a>

### PrimaryCriterion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.EvaluateAllResults"></a>

### PrimaryCriterion.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetAPIName"></a>

### PrimaryCriterion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetAllProperties"></a>

### PrimaryCriterion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetChildren"></a>

### PrimaryCriterion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PrimaryCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetDetailsView"></a>

### PrimaryCriterion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetEnumName"></a>

### PrimaryCriterion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetHashCode"></a>

### PrimaryCriterion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetIconFile"></a>

### PrimaryCriterion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetLifetimeService"></a>

### PrimaryCriterion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetObjectData"></a>

### PrimaryCriterion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetParameter"></a>

### PrimaryCriterion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetPath"></a>

### PrimaryCriterion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetPropertyName"></a>

### PrimaryCriterion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetPropertyValue"></a>

### PrimaryCriterion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetQuantityName"></a>

### PrimaryCriterion.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetVisibleProperties"></a>

### PrimaryCriterion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetVisiblePropertyNames"></a>

### PrimaryCriterion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GroupAllSimilarChildren"></a>

### PrimaryCriterion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GroupSimilarObjects"></a>

### PrimaryCriterion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.InitializeLifetimeService"></a>

### PrimaryCriterion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.IsPropertyEditable"></a>

### PrimaryCriterion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PrimaryCriterion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.IsPropertyVisible"></a>

### PrimaryCriterion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PrimaryCriterion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Paste"></a>

### PrimaryCriterion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.PropertyByAPIName"></a>

### PrimaryCriterion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.PropertyById"></a>

### PrimaryCriterion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.PropertyByName"></a>

### PrimaryCriterion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RemoveFromGroup"></a>

### PrimaryCriterion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RemoveParameter"></a>

### PrimaryCriterion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RenameBasedOnDefinition"></a>

### PrimaryCriterion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

