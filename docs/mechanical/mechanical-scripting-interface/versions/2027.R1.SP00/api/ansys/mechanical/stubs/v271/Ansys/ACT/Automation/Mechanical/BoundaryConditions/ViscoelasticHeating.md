# `ViscoelasticHeating`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ViscoelasticHeating"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ViscoelasticHeating(internalObject: Any)

<a id="ViscoelasticHeating"></a>

### *class* ViscoelasticHeating(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ViscoelasticHeating.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ViscoelasticHeating.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ViscoelasticHeating.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#ViscoelasticHeating.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ViscoelasticHeating.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ViscoelasticHeating.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ViscoelasticHeating.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ViscoelasticHeating.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ViscoelasticHeating.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ViscoelasticHeating.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ViscoelasticHeating.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ViscoelasticHeating.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ViscoelasticHeating.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ViscoelasticHeating.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ViscoelasticHeating.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ViscoelasticHeating.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ViscoelasticHeating.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ViscoelasticHeating.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ViscoelasticHeating.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ViscoelasticHeating.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ViscoelasticHeating.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ViscoelasticHeating.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ViscoelasticHeating.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ViscoelasticHeating.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ViscoelasticHeating.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ViscoelasticHeating.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ViscoelasticHeating.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ViscoelasticHeating.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ViscoelasticHeating.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ViscoelasticHeating.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ViscoelasticHeating.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ViscoelasticHeating.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ViscoelasticHeating.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ViscoelasticHeating.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ViscoelasticHeating.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ViscoelasticHeating.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ViscoelasticHeating.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ViscoelasticHeating.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ViscoelasticHeating.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ViscoelasticHeating.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ViscoelasticHeating.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ViscoelasticHeating.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ViscoelasticHeating.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#ViscoelasticHeating.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ViscoelasticHeating.IconName)                                 | IconName property.                                            |
| [`Images`](#ViscoelasticHeating.Images)                                     | Gets the list of associated images.                           |
| [`InternalObject`](#ViscoelasticHeating.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#ViscoelasticHeating.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#ViscoelasticHeating.Name)                                         | Name property.                                                |
| [`ObjectId`](#ViscoelasticHeating.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ViscoelasticHeating.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ViscoelasticHeating.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ViscoelasticHeating.Parent)                                     | Parent property.                                              |
| [`Properties`](#ViscoelasticHeating.Properties)                             | Gets the list of properties for this object.                  |
| [`State`](#ViscoelasticHeating.State)                                       | State property.                                               |
| [`Suppressed`](#ViscoelasticHeating.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`ViscoelasticLossFraction`](#ViscoelasticHeating.ViscoelasticLossFraction) | Gets or sets the ViscoelasticLossFraction.                    |
| [`VisibleProperties`](#ViscoelasticHeating.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ViscoelasticHeating.AttachedRefs"></a>

### *property* ViscoelasticHeating.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Children"></a>

### *property* ViscoelasticHeating.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.ClsId"></a>

### *property* ViscoelasticHeating.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Comments"></a>

### *property* ViscoelasticHeating.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.DataModelObjectCategory"></a>

### *property* ViscoelasticHeating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GroupingFolder"></a>

### *property* ViscoelasticHeating.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.IconName"></a>

### *property* ViscoelasticHeating.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Images"></a>

### *property* ViscoelasticHeating.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.InternalObject"></a>

### *property* ViscoelasticHeating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPlasticHeatingAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Location"></a>

### *property* ViscoelasticHeating.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Name"></a>

### *property* ViscoelasticHeating.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.ObjectId"></a>

### *property* ViscoelasticHeating.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.ObjectState"></a>

### *property* ViscoelasticHeating.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.ObjectTags"></a>

### *property* ViscoelasticHeating.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Parent"></a>

### *property* ViscoelasticHeating.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Properties"></a>

### *property* ViscoelasticHeating.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.State"></a>

### *property* ViscoelasticHeating.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Suppressed"></a>

### *property* ViscoelasticHeating.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.ViscoelasticLossFraction"></a>

### *property* ViscoelasticHeating.ViscoelasticLossFraction *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ViscoelasticLossFraction.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.VisibleProperties"></a>

### *property* ViscoelasticHeating.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ViscoelasticHeating.Activate"></a>

### ViscoelasticHeating.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.AddComment"></a>

### ViscoelasticHeating.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.AddImage"></a>

### ViscoelasticHeating.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Copy"></a>

### ViscoelasticHeating.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.CopyTo"></a>

### ViscoelasticHeating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.CreateObjRef"></a>

### ViscoelasticHeating.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.CreateParameter"></a>

### ViscoelasticHeating.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Cut"></a>

### ViscoelasticHeating.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Delete"></a>

### ViscoelasticHeating.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Duplicate"></a>

### ViscoelasticHeating.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Equals"></a>

### ViscoelasticHeating.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetAPIName"></a>

### ViscoelasticHeating.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetAllProperties"></a>

### ViscoelasticHeating.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetChildren"></a>

### ViscoelasticHeating.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ViscoelasticHeating.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetDetailsView"></a>

### ViscoelasticHeating.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetEnumName"></a>

### ViscoelasticHeating.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetHashCode"></a>

### ViscoelasticHeating.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetIconFile"></a>

### ViscoelasticHeating.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetLifetimeService"></a>

### ViscoelasticHeating.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetObjectData"></a>

### ViscoelasticHeating.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetParameter"></a>

### ViscoelasticHeating.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetPath"></a>

### ViscoelasticHeating.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetPropertyName"></a>

### ViscoelasticHeating.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetPropertyValue"></a>

### ViscoelasticHeating.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetVisibleProperties"></a>

### ViscoelasticHeating.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GetVisiblePropertyNames"></a>

### ViscoelasticHeating.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GroupAllSimilarChildren"></a>

### ViscoelasticHeating.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.GroupSimilarObjects"></a>

### ViscoelasticHeating.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.InitializeLifetimeService"></a>

### ViscoelasticHeating.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.IsPropertyEditable"></a>

### ViscoelasticHeating.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ViscoelasticHeating.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.IsPropertyVisible"></a>

### ViscoelasticHeating.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ViscoelasticHeating.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.Paste"></a>

### ViscoelasticHeating.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.PropertyByAPIName"></a>

### ViscoelasticHeating.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.PropertyById"></a>

### ViscoelasticHeating.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.PropertyByName"></a>

### ViscoelasticHeating.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.RemoveFromGroup"></a>

### ViscoelasticHeating.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ViscoelasticHeating.RemoveParameter"></a>

### ViscoelasticHeating.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

