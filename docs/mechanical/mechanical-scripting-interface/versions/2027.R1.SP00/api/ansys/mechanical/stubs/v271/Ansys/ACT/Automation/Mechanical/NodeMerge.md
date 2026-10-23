# `NodeMerge`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NodeMerge"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NodeMerge(internalObject: Any)

<a id="NodeMerge"></a>

### *class* NodeMerge(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NodeMerge.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NodeMerge.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#NodeMerge.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#NodeMerge.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#NodeMerge.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#NodeMerge.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NodeMerge.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NodeMerge.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NodeMerge.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NodeMerge.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NodeMerge.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NodeMerge.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NodeMerge.Equals)                                       | Equals method.                                                                              |
| [`Generate`](#NodeMerge.Generate)                                   | Run the Generate action.                                                                    |
| [`GetAPIName`](#NodeMerge.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NodeMerge.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NodeMerge.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NodeMerge.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NodeMerge.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NodeMerge.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NodeMerge.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NodeMerge.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NodeMerge.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NodeMerge.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NodeMerge.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NodeMerge.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NodeMerge.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#NodeMerge.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NodeMerge.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NodeMerge.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NodeMerge.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NodeMerge.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NodeMerge.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NodeMerge.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NodeMerge.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#NodeMerge.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NodeMerge.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NodeMerge.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NodeMerge.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NodeMerge.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#NodeMerge.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#NodeMerge.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#NodeMerge.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#NodeMerge.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#NodeMerge.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NodeMerge.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#NodeMerge.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#NodeMerge.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#NodeMerge.IconName)                               | IconName property.                                            |
| [`Images`](#NodeMerge.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NodeMerge.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterBodies`](#NodeMerge.MasterBodies)                       | Gets the MasterBodies.                                        |
| [`MasterLocation`](#NodeMerge.MasterLocation)                   | Gets or sets the MasterLocation.                              |
| [`Name`](#NodeMerge.Name)                                       | Name property.                                                |
| [`ObjectId`](#NodeMerge.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#NodeMerge.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#NodeMerge.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#NodeMerge.Parent)                                   | Parent property.                                              |
| [`Properties`](#NodeMerge.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#NodeMerge.ScopingMethod)                     | ScopingMethod property.                                       |
| [`SlaveBodies`](#NodeMerge.SlaveBodies)                         | Gets the SlaveBodies.                                         |
| [`SlaveLocation`](#NodeMerge.SlaveLocation)                     | Gets or sets the SlaveLocation.                               |
| [`State`](#NodeMerge.State)                                     | State property.                                               |
| [`Suppressed`](#NodeMerge.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ToleranceType`](#NodeMerge.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#NodeMerge.ToleranceValue)                   | Gets/ Sets the ToleranceValue.                                |
| [`VisibleProperties`](#NodeMerge.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodeMerge.AttachedRefs"></a>

### *property* NodeMerge.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Children"></a>

### *property* NodeMerge.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ClsId"></a>

### *property* NodeMerge.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Comments"></a>

### *property* NodeMerge.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.DataModelObjectCategory"></a>

### *property* NodeMerge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Figures"></a>

### *property* NodeMerge.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GroupingFolder"></a>

### *property* NodeMerge.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.IconName"></a>

### *property* NodeMerge.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Images"></a>

### *property* NodeMerge.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.InternalObject"></a>

### *property* NodeMerge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.MasterBodies"></a>

### *property* NodeMerge.MasterBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.MasterLocation"></a>

### *property* NodeMerge.MasterLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Name"></a>

### *property* NodeMerge.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ObjectId"></a>

### *property* NodeMerge.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ObjectState"></a>

### *property* NodeMerge.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ObjectTags"></a>

### *property* NodeMerge.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Parent"></a>

### *property* NodeMerge.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Properties"></a>

### *property* NodeMerge.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ScopingMethod"></a>

### *property* NodeMerge.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.SlaveBodies"></a>

### *property* NodeMerge.SlaveBodies *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.SlaveLocation"></a>

### *property* NodeMerge.SlaveLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.State"></a>

### *property* NodeMerge.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Suppressed"></a>

### *property* NodeMerge.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ToleranceType"></a>

### *property* NodeMerge.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ToleranceValue"></a>

### *property* NodeMerge.ToleranceValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets/ Sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.VisibleProperties"></a>

### *property* NodeMerge.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMerge.Activate"></a>

### NodeMerge.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.AddComment"></a>

### NodeMerge.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.AddFigure"></a>

### NodeMerge.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.AddImage"></a>

### NodeMerge.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Copy"></a>

### NodeMerge.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.CopyTo"></a>

### NodeMerge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.CreateObjRef"></a>

### NodeMerge.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.CreateParameter"></a>

### NodeMerge.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Cut"></a>

### NodeMerge.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Delete"></a>

### NodeMerge.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Duplicate"></a>

### NodeMerge.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Equals"></a>

### NodeMerge.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Generate"></a>

### NodeMerge.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetAPIName"></a>

### NodeMerge.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetAllProperties"></a>

### NodeMerge.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetChildren"></a>

### NodeMerge.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NodeMerge.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetDetailsView"></a>

### NodeMerge.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetEnumName"></a>

### NodeMerge.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetHashCode"></a>

### NodeMerge.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetIconFile"></a>

### NodeMerge.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetLifetimeService"></a>

### NodeMerge.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetObjectData"></a>

### NodeMerge.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetParameter"></a>

### NodeMerge.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetPath"></a>

### NodeMerge.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetPropertyName"></a>

### NodeMerge.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetPropertyValue"></a>

### NodeMerge.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetVisibleProperties"></a>

### NodeMerge.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetVisiblePropertyNames"></a>

### NodeMerge.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GroupAllSimilarChildren"></a>

### NodeMerge.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GroupSimilarObjects"></a>

### NodeMerge.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.InitializeLifetimeService"></a>

### NodeMerge.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.IsPropertyEditable"></a>

### NodeMerge.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodeMerge.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.IsPropertyVisible"></a>

### NodeMerge.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodeMerge.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Paste"></a>

### NodeMerge.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.PropertyByAPIName"></a>

### NodeMerge.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.PropertyById"></a>

### NodeMerge.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.PropertyByName"></a>

### NodeMerge.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.RemoveFromGroup"></a>

### NodeMerge.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.RemoveParameter"></a>

### NodeMerge.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.RenameBasedOnDefinition"></a>

### NodeMerge.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

