# `FeatureDetection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FeatureDetection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.FeatureDetection(internalObject: Any)

<a id="FeatureDetection"></a>

### *class* FeatureDetection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FeatureDetection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FeatureDetection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FeatureDetection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddImage`](#FeatureDetection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#FeatureDetection.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#FeatureDetection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FeatureDetection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FeatureDetection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FeatureDetection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FeatureDetection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FeatureDetection.Delete)                                       | Run the Delete action.                                                                      |
| [`DetectFeatures`](#FeatureDetection.DetectFeatures)                       | DetectFeatures method.                                                                      |
| [`Duplicate`](#FeatureDetection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FeatureDetection.Equals)                                       | Equals method.                                                                              |
| [`EvaluateAllResults`](#FeatureDetection.EvaluateAllResults)               | Run the EvaluateAllResults action.                                                          |
| [`GetAPIName`](#FeatureDetection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FeatureDetection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FeatureDetection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FeatureDetection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FeatureDetection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FeatureDetection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FeatureDetection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FeatureDetection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FeatureDetection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FeatureDetection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FeatureDetection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FeatureDetection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FeatureDetection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FeatureDetection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FeatureDetection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FeatureDetection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FeatureDetection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FeatureDetection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FeatureDetection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FeatureDetection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FeatureDetection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FeatureDetection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FeatureDetection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FeatureDetection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FeatureDetection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FeatureDetection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FeatureDetection.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#FeatureDetection.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#FeatureDetection.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#FeatureDetection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FeatureDetection.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Definition`](#FeatureDetection.Definition)                           | Get the FeatureDetectionDefinition object.                    |
| [`GroupingFolder`](#FeatureDetection.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#FeatureDetection.IconName)                               | IconName property.                                            |
| [`Images`](#FeatureDetection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FeatureDetection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FeatureDetection.Location)                               | Gets or sets the Location.                                    |
| [`Name`](#FeatureDetection.Name)                                       | Name property.                                                |
| [`NamedSelection`](NamedSelection.md#NamedSelection)                   | Gets or sets the NamedSelection.                              |
| [`ObjectId`](#FeatureDetection.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#FeatureDetection.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#FeatureDetection.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#FeatureDetection.Parent)                                   | Parent property.                                              |
| [`Properties`](#FeatureDetection.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#FeatureDetection.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`State`](#FeatureDetection.State)                                     | State property.                                               |
| [`VisibleProperties`](#FeatureDetection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FeatureDetection.AttachedRefs"></a>

### *property* FeatureDetection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Children"></a>

### *property* FeatureDetection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ClsId"></a>

### *property* FeatureDetection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Comments"></a>

### *property* FeatureDetection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.DataModelObjectCategory"></a>

### *property* FeatureDetection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Definition"></a>

### *property* FeatureDetection.Definition *: [Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition](FeatureDetectionDefinition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.FeatureDetectionDefinition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the FeatureDetectionDefinition object.
: This object contains all the Feature Detection data like Fillets, Holes, Chamfers detection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GroupingFolder"></a>

### *property* FeatureDetection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.IconName"></a>

### *property* FeatureDetection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Images"></a>

### *property* FeatureDetection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.InternalObject"></a>

### *property* FeatureDetection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFeatureDetectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Location"></a>

### *property* FeatureDetection.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Name"></a>

### *property* FeatureDetection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.NamedSelection"></a>

### *property* FeatureDetection.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ObjectId"></a>

### *property* FeatureDetection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ObjectState"></a>

### *property* FeatureDetection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ObjectTags"></a>

### *property* FeatureDetection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Parent"></a>

### *property* FeatureDetection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Properties"></a>

### *property* FeatureDetection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ScopingMethod"></a>

### *property* FeatureDetection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.State"></a>

### *property* FeatureDetection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.VisibleProperties"></a>

### *property* FeatureDetection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FeatureDetection.Activate"></a>

### FeatureDetection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.AddComment"></a>

### FeatureDetection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.AddImage"></a>

### FeatureDetection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.ClearGeneratedData"></a>

### FeatureDetection.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Copy"></a>

### FeatureDetection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.CopyTo"></a>

### FeatureDetection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.CreateObjRef"></a>

### FeatureDetection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.CreateParameter"></a>

### FeatureDetection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Cut"></a>

### FeatureDetection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Delete"></a>

### FeatureDetection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.DetectFeatures"></a>

### FeatureDetection.DetectFeatures() → [None](https://docs.python.org/3/builtins/constants.html#None)

DetectFeatures method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Duplicate"></a>

### FeatureDetection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Equals"></a>

### FeatureDetection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.EvaluateAllResults"></a>

### FeatureDetection.EvaluateAllResults() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetAPIName"></a>

### FeatureDetection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetAllProperties"></a>

### FeatureDetection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetChildren"></a>

### FeatureDetection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FeatureDetection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetDetailsView"></a>

### FeatureDetection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetEnumName"></a>

### FeatureDetection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetHashCode"></a>

### FeatureDetection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetIconFile"></a>

### FeatureDetection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetLifetimeService"></a>

### FeatureDetection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetObjectData"></a>

### FeatureDetection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetParameter"></a>

### FeatureDetection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetPath"></a>

### FeatureDetection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetPropertyName"></a>

### FeatureDetection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetPropertyValue"></a>

### FeatureDetection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetVisibleProperties"></a>

### FeatureDetection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GetVisiblePropertyNames"></a>

### FeatureDetection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GroupAllSimilarChildren"></a>

### FeatureDetection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.GroupSimilarObjects"></a>

### FeatureDetection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.InitializeLifetimeService"></a>

### FeatureDetection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.IsPropertyEditable"></a>

### FeatureDetection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FeatureDetection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.IsPropertyVisible"></a>

### FeatureDetection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FeatureDetection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.Paste"></a>

### FeatureDetection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.PropertyByAPIName"></a>

### FeatureDetection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.PropertyById"></a>

### FeatureDetection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.PropertyByName"></a>

### FeatureDetection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.RemoveFromGroup"></a>

### FeatureDetection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FeatureDetection.RemoveParameter"></a>

### FeatureDetection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

