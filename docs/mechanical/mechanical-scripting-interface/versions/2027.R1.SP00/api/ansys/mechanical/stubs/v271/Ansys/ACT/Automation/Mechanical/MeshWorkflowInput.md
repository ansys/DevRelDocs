# `MeshWorkflowInput`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowInput"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowInput(internalObject: Any)

<a id="MeshWorkflowInput"></a>

### *class* MeshWorkflowInput(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Object that wraps IDSMeshWorkflowGeometryDomainAuto.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|-------------------------------------------------------------------------------|-------------------------------------|
| [`IsAcceptableScopingMethod`](#MeshWorkflowInput.IsAcceptableScopingMethod)   | IsAcceptableScopingMethod method.   |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowInput.Activate)                                   | Activate the current object.                                                                |
| [`AddFigure`](#MeshWorkflowInput.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshWorkflowInput.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MeshWorkflowInput.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshWorkflowInput.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshWorkflowInput.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshWorkflowInput.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshWorkflowInput.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshWorkflowInput.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshWorkflowInput.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshWorkflowInput.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MeshWorkflowInput.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshWorkflowInput.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshWorkflowInput.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshWorkflowInput.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MeshWorkflowInput.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshWorkflowInput.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshWorkflowInput.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshWorkflowInput.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshWorkflowInput.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshWorkflowInput.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshWorkflowInput.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshWorkflowInput.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshWorkflowInput.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshWorkflowInput.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshWorkflowInput.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshWorkflowInput.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshWorkflowInput.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshWorkflowInput.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshWorkflowInput.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshWorkflowInput.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshWorkflowInput.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshWorkflowInput.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshWorkflowInput.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshWorkflowInput.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`PropertyTypeInfo`](#MeshWorkflowInput.PropertyTypeInfo)                   | PropertyTypeInfo method.                                                                    |
| [`RemoveFromGroup`](#MeshWorkflowInput.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshWorkflowInput.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnType`](#MeshWorkflowInput.RenameBasedOnType)                 | Renames applying the default name based on type.                                            |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#MeshWorkflowInput.AttachedRefs)                         | AttachedRefs property.                                                                                                                                                                      |
| [`Children`](#MeshWorkflowInput.Children)                                 | Gets the list of children.                                                                                                                                                                  |
| [`CloneInputGeometryData`](#MeshWorkflowInput.CloneInputGeometryData)     | Gets or sets whether the input geometry is transferred by cloning or not. When cloning, the input bodies do not become inactive and their meshes do not become obsolete. Defaults to False. |
| [`ClsId`](#MeshWorkflowInput.ClsId)                                       | ClsId property.                                                                                                                                                                             |
| [`DataModelObjectCategory`](#MeshWorkflowInput.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                                                                                                                                |
| [`Figures`](#MeshWorkflowInput.Figures)                                   | Gets the list of associated figures.                                                                                                                                                        |
| [`GroupingFolder`](#MeshWorkflowInput.GroupingFolder)                     | GroupingFolder property.                                                                                                                                                                    |
| [`IconName`](#MeshWorkflowInput.IconName)                                 | IconName property.                                                                                                                                                                          |
| [`Images`](#MeshWorkflowInput.Images)                                     | Gets the list of associated images.                                                                                                                                                         |
| [`InputDataType`](#MeshWorkflowInput.InputDataType)                       | Gets or sets the transfer type for the input data. If set to “Geometry” only the selected bodies geometry is transferred. Defaults to “Geometry”.                                           |
| [`InputDescription`](#MeshWorkflowInput.InputDescription)                 | InputDescription property.                                                                                                                                                                  |
| [`InputDescriptionJson`](#MeshWorkflowInput.InputDescriptionJson)         | InputDescriptionJson property.                                                                                                                                                              |
| [`InputTypeInformation`](#MeshWorkflowInput.InputTypeInformation)         | InputTypeInformation property.                                                                                                                                                              |
| [`InputTypeInformationJson`](#MeshWorkflowInput.InputTypeInformationJson) | InputTypeInformationJson property.                                                                                                                                                          |
| [`InternalObject`](#MeshWorkflowInput.InternalObject)                     | Gets the internal object. For advanced usage only.                                                                                                                                          |
| [`Location`](#MeshWorkflowInput.Location)                                 | Gets or sets the Location.                                                                                                                                                                  |
| [`Name`](#MeshWorkflowInput.Name)                                         | Name property.                                                                                                                                                                              |
| [`ObjectId`](#MeshWorkflowInput.ObjectId)                                 | ObjectId property.                                                                                                                                                                          |
| [`ObjectState`](#MeshWorkflowInput.ObjectState)                           | ObjectState property.                                                                                                                                                                       |
| [`ObjectTags`](#MeshWorkflowInput.ObjectTags)                             | ObjectTags property.                                                                                                                                                                        |
| [`Parent`](#MeshWorkflowInput.Parent)                                     | Parent property.                                                                                                                                                                            |
| [`Properties`](#MeshWorkflowInput.Properties)                             | Gets the list of properties for this object.                                                                                                                                                |
| [`ScopingMethod`](#MeshWorkflowInput.ScopingMethod)                       | Gets or sets the ScopingMethod.                                                                                                                                                             |
| [`State`](#MeshWorkflowInput.State)                                       | State property.                                                                                                                                                                             |
| [`VisibleProperties`](#MeshWorkflowInput.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowInput.AttachedRefs"></a>

### *property* MeshWorkflowInput.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Children"></a>

### *property* MeshWorkflowInput.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CloneInputGeometryData"></a>

### *property* MeshWorkflowInput.CloneInputGeometryData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the input geometry is transferred by cloning or not. When cloning, the input bodies do not become inactive and their meshes do not become obsolete. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.ClsId"></a>

### *property* MeshWorkflowInput.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.DataModelObjectCategory"></a>

### *property* MeshWorkflowInput.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Figures"></a>

### *property* MeshWorkflowInput.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GroupingFolder"></a>

### *property* MeshWorkflowInput.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.IconName"></a>

### *property* MeshWorkflowInput.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Images"></a>

### *property* MeshWorkflowInput.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InputDataType"></a>

### *property* MeshWorkflowInput.InputDataType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.InputDataType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the transfer type for the input data. If set to “Geometry” only the selected bodies geometry is transferred. Defaults to “Geometry”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InputDescription"></a>

### *property* MeshWorkflowInput.InputDescription *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

InputDescription property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InputDescriptionJson"></a>

### *property* MeshWorkflowInput.InputDescriptionJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

InputDescriptionJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InputTypeInformation"></a>

### *property* MeshWorkflowInput.InputTypeInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), [str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

InputTypeInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InputTypeInformationJson"></a>

### *property* MeshWorkflowInput.InputTypeInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

InputTypeInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InternalObject"></a>

### *property* MeshWorkflowInput.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshWorkflowGeometryDomainAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Location"></a>

### *property* MeshWorkflowInput.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Name"></a>

### *property* MeshWorkflowInput.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.ObjectId"></a>

### *property* MeshWorkflowInput.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.ObjectState"></a>

### *property* MeshWorkflowInput.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.ObjectTags"></a>

### *property* MeshWorkflowInput.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Parent"></a>

### *property* MeshWorkflowInput.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Properties"></a>

### *property* MeshWorkflowInput.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.ScopingMethod"></a>

### *property* MeshWorkflowInput.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.State"></a>

### *property* MeshWorkflowInput.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.VisibleProperties"></a>

### *property* MeshWorkflowInput.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowInput.Activate"></a>

### MeshWorkflowInput.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.AddFigure"></a>

### MeshWorkflowInput.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.AddImage"></a>

### MeshWorkflowInput.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Copy"></a>

### MeshWorkflowInput.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CopyTo"></a>

### MeshWorkflowInput.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CreateObjRef"></a>

### MeshWorkflowInput.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.CreateParameter"></a>

### MeshWorkflowInput.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Cut"></a>

### MeshWorkflowInput.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Delete"></a>

### MeshWorkflowInput.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Duplicate"></a>

### MeshWorkflowInput.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Equals"></a>

### MeshWorkflowInput.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetAPIName"></a>

### MeshWorkflowInput.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetAllProperties"></a>

### MeshWorkflowInput.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetChildren"></a>

### MeshWorkflowInput.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflowInput.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetDetailsView"></a>

### MeshWorkflowInput.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetEnumName"></a>

### MeshWorkflowInput.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetHashCode"></a>

### MeshWorkflowInput.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetIconFile"></a>

### MeshWorkflowInput.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetLifetimeService"></a>

### MeshWorkflowInput.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetObjectData"></a>

### MeshWorkflowInput.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetParameter"></a>

### MeshWorkflowInput.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetPath"></a>

### MeshWorkflowInput.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetPropertyName"></a>

### MeshWorkflowInput.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetPropertyValue"></a>

### MeshWorkflowInput.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetVisibleProperties"></a>

### MeshWorkflowInput.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GetVisiblePropertyNames"></a>

### MeshWorkflowInput.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GroupAllSimilarChildren"></a>

### MeshWorkflowInput.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.GroupSimilarObjects"></a>

### MeshWorkflowInput.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.InitializeLifetimeService"></a>

### MeshWorkflowInput.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.IsAcceptableScopingMethod"></a>

### *classmethod* MeshWorkflowInput.IsAcceptableScopingMethod(scopingMethod: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsAcceptableScopingMethod method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.IsPropertyEditable"></a>

### MeshWorkflowInput.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowInput.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.IsPropertyVisible"></a>

### MeshWorkflowInput.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowInput.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.Paste"></a>

### MeshWorkflowInput.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyByAPIName"></a>

### MeshWorkflowInput.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyById"></a>

### MeshWorkflowInput.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyByName"></a>

### MeshWorkflowInput.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.PropertyTypeInfo"></a>

### MeshWorkflowInput.PropertyTypeInfo(property: Ansys.ACT.Automation.Mechanical.Property) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

PropertyTypeInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.RemoveFromGroup"></a>

### MeshWorkflowInput.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.RemoveParameter"></a>

### MeshWorkflowInput.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowInput.RenameBasedOnType"></a>

### MeshWorkflowInput.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

