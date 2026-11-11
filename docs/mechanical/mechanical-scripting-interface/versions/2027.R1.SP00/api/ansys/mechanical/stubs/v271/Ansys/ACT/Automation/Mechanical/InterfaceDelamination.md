# `InterfaceDelamination`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InterfaceDelamination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.InterfaceDelamination(internalObject: Any)

<a id="InterfaceDelamination"></a>

### *class* InterfaceDelamination(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a InterfaceDelamination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#InterfaceDelamination.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#InterfaceDelamination.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#InterfaceDelamination.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#InterfaceDelamination.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#InterfaceDelamination.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#InterfaceDelamination.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#InterfaceDelamination.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#InterfaceDelamination.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#InterfaceDelamination.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#InterfaceDelamination.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#InterfaceDelamination.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#InterfaceDelamination.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#InterfaceDelamination.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#InterfaceDelamination.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#InterfaceDelamination.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#InterfaceDelamination.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#InterfaceDelamination.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#InterfaceDelamination.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#InterfaceDelamination.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#InterfaceDelamination.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#InterfaceDelamination.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#InterfaceDelamination.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#InterfaceDelamination.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#InterfaceDelamination.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#InterfaceDelamination.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#InterfaceDelamination.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#InterfaceDelamination.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#InterfaceDelamination.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#InterfaceDelamination.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#InterfaceDelamination.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#InterfaceDelamination.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#InterfaceDelamination.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#InterfaceDelamination.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#InterfaceDelamination.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#InterfaceDelamination.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#InterfaceDelamination.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#InterfaceDelamination.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#InterfaceDelamination.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#InterfaceDelamination.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#InterfaceDelamination.AttachedRefs)                         | AttachedRefs property.                                        |
| [`AutomaticTimeStepping`](#InterfaceDelamination.AutomaticTimeStepping)       | Gets or sets the AutomaticTimeStepping.                       |
| [`Children`](#InterfaceDelamination.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#InterfaceDelamination.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#InterfaceDelamination.Comments)                                 | Gets the list of associated comments.                         |
| [`CriticalRate`](#InterfaceDelamination.CriticalRate)                         | Gets or sets the CriticalRate.                                |
| [`DataModelObjectCategory`](#InterfaceDelamination.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DistanceTolerance`](#InterfaceDelamination.DistanceTolerance)               | Gets or sets the DistanceTolerance.                           |
| [`FailureCriteriaOption`](#InterfaceDelamination.FailureCriteriaOption)       | Gets or sets the FailureCriteriaOption.                       |
| [`Figures`](#InterfaceDelamination.Figures)                                   | Gets the list of associated figures.                          |
| [`GenerationMethod`](#InterfaceDelamination.GenerationMethod)                 | Gets or sets the GenerationMethod.                            |
| [`GroupingFolder`](#InterfaceDelamination.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#InterfaceDelamination.IconName)                                 | IconName property.                                            |
| [`Images`](#InterfaceDelamination.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#InterfaceDelamination.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InitialCrack`](#InterfaceDelamination.InitialCrack)                         | Gets or sets the InitialCrack.                                |
| [`InitialTimeStep`](#InterfaceDelamination.InitialTimeStep)                   | Gets or sets the InitialTimeStep.                             |
| [`InternalObject`](#InterfaceDelamination.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`MatchControl`](MeshControls/MatchControl.md#MatchControl)                   | Gets or sets the MatchControl.                                |
| [`Material`](Material.md#Material)                                            | Gets or sets the Material.                                    |
| [`MaximumTimeStep`](#InterfaceDelamination.MaximumTimeStep)                   | Gets or sets the MaximumTimeStep.                             |
| [`Method`](#InterfaceDelamination.Method)                                     | Gets or sets the Method.                                      |
| [`MinimumTimeStep`](#InterfaceDelamination.MinimumTimeStep)                   | Gets or sets the MinimumTimeStep.                             |
| [`Name`](#InterfaceDelamination.Name)                                         | Name property.                                                |
| [`ObjectId`](#InterfaceDelamination.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#InterfaceDelamination.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#InterfaceDelamination.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#InterfaceDelamination.Parent)                                     | Parent property.                                              |
| [`Properties`](#InterfaceDelamination.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#InterfaceDelamination.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SourceLocation`](#InterfaceDelamination.SourceLocation)                     | Gets or sets the SourceLocation.                              |
| [`State`](#InterfaceDelamination.State)                                       | State property.                                               |
| [`Suppressed`](#InterfaceDelamination.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TargetLocation`](#InterfaceDelamination.TargetLocation)                     | Gets or sets the TargetLocation.                              |
| [`ToleranceType`](#InterfaceDelamination.ToleranceType)                       | Gets or sets the ToleranceType.                               |
| [`TransferableObjectId`](#InterfaceDelamination.TransferableObjectId)         | TransferableObjectId property.                                |
| [`Type`](#InterfaceDelamination.Type)                                         | Gets the Type.                                                |
| [`VisibleProperties`](#InterfaceDelamination.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InterfaceDelamination.AttachedRefs"></a>

### *property* InterfaceDelamination.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AutomaticTimeStepping"></a>

### *property* InterfaceDelamination.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Children"></a>

### *property* InterfaceDelamination.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ClsId"></a>

### *property* InterfaceDelamination.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Comments"></a>

### *property* InterfaceDelamination.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.CriticalRate"></a>

### *property* InterfaceDelamination.CriticalRate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.DataModelObjectCategory"></a>

### *property* InterfaceDelamination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.DistanceTolerance"></a>

### *property* InterfaceDelamination.DistanceTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DistanceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.FailureCriteriaOption"></a>

### *property* InterfaceDelamination.FailureCriteriaOption *: [Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption](../../../Mechanical/DataModel/Enums/DelaminationFailureCriteriaOption.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationFailureCriteriaOption) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FailureCriteriaOption.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Figures"></a>

### *property* InterfaceDelamination.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GenerationMethod"></a>

### *property* InterfaceDelamination.GenerationMethod *: [Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod](../../../Mechanical/DataModel/Enums/DelaminationGenerationMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GenerationMethod.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GroupingFolder"></a>

### *property* InterfaceDelamination.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.IconName"></a>

### *property* InterfaceDelamination.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Images"></a>

### *property* InterfaceDelamination.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ImportableObjectSourceId"></a>

### *property* InterfaceDelamination.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.InitialCrack"></a>

### *property* InterfaceDelamination.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.InitialTimeStep"></a>

### *property* InterfaceDelamination.InitialTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.InternalObject"></a>

### *property* InterfaceDelamination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.MatchControl"></a>

### *property* InterfaceDelamination.MatchControl *: [Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl](MeshControls/MatchControl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.MatchControl) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MatchControl.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Material"></a>

### *property* InterfaceDelamination.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.MaximumTimeStep"></a>

### *property* InterfaceDelamination.MaximumTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Method"></a>

### *property* InterfaceDelamination.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.MinimumTimeStep"></a>

### *property* InterfaceDelamination.MinimumTimeStep *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Name"></a>

### *property* InterfaceDelamination.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ObjectId"></a>

### *property* InterfaceDelamination.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ObjectState"></a>

### *property* InterfaceDelamination.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ObjectTags"></a>

### *property* InterfaceDelamination.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Parent"></a>

### *property* InterfaceDelamination.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Properties"></a>

### *property* InterfaceDelamination.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ReadOnly"></a>

### *property* InterfaceDelamination.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.SourceLocation"></a>

### *property* InterfaceDelamination.SourceLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceLocation.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.State"></a>

### *property* InterfaceDelamination.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Suppressed"></a>

### *property* InterfaceDelamination.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.TargetLocation"></a>

### *property* InterfaceDelamination.TargetLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetLocation.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.ToleranceType"></a>

### *property* InterfaceDelamination.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ToleranceType](../../../Mechanical/DataModel/Enums/ToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.TransferableObjectId"></a>

### *property* InterfaceDelamination.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Type"></a>

### *property* InterfaceDelamination.Type *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.VisibleProperties"></a>

### *property* InterfaceDelamination.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InterfaceDelamination.Activate"></a>

### InterfaceDelamination.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddCommandSnippet"></a>

### InterfaceDelamination.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddComment"></a>

### InterfaceDelamination.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddFigure"></a>

### InterfaceDelamination.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.AddImage"></a>

### InterfaceDelamination.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Copy"></a>

### InterfaceDelamination.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.CopyTo"></a>

### InterfaceDelamination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.CreateObjRef"></a>

### InterfaceDelamination.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.CreateParameter"></a>

### InterfaceDelamination.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Cut"></a>

### InterfaceDelamination.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Delete"></a>

### InterfaceDelamination.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Duplicate"></a>

### InterfaceDelamination.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Equals"></a>

### InterfaceDelamination.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetAPIName"></a>

### InterfaceDelamination.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetAllProperties"></a>

### InterfaceDelamination.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetChildren"></a>

### InterfaceDelamination.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### InterfaceDelamination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetDetailsView"></a>

### InterfaceDelamination.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetEnumName"></a>

### InterfaceDelamination.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetHashCode"></a>

### InterfaceDelamination.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetIconFile"></a>

### InterfaceDelamination.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetLifetimeService"></a>

### InterfaceDelamination.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetObjectData"></a>

### InterfaceDelamination.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetParameter"></a>

### InterfaceDelamination.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetPath"></a>

### InterfaceDelamination.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetPropertyName"></a>

### InterfaceDelamination.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetPropertyValue"></a>

### InterfaceDelamination.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetVisibleProperties"></a>

### InterfaceDelamination.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GetVisiblePropertyNames"></a>

### InterfaceDelamination.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GroupAllSimilarChildren"></a>

### InterfaceDelamination.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.GroupSimilarObjects"></a>

### InterfaceDelamination.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.InitializeLifetimeService"></a>

### InterfaceDelamination.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.IsPropertyEditable"></a>

### InterfaceDelamination.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### InterfaceDelamination.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.IsPropertyVisible"></a>

### InterfaceDelamination.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### InterfaceDelamination.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.Paste"></a>

### InterfaceDelamination.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.PropertyByAPIName"></a>

### InterfaceDelamination.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.PropertyById"></a>

### InterfaceDelamination.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.PropertyByName"></a>

### InterfaceDelamination.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.RemoveFromGroup"></a>

### InterfaceDelamination.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="InterfaceDelamination.RemoveParameter"></a>

### InterfaceDelamination.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

