# `AnalysisPly`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisPly"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisPly(internalObject: Any)

<a id="AnalysisPly"></a>

### *class* AnalysisPly(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AnalysisPly.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AnalysisPly.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AnalysisPly.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AnalysisPly.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AnalysisPly.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AnalysisPly.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AnalysisPly.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AnalysisPly.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AnalysisPly.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AnalysisPly.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#AnalysisPly.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AnalysisPly.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AnalysisPly.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AnalysisPly.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AnalysisPly.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AnalysisPly.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetElementId`](#AnalysisPly.GetElementId)                           | GetElementId method.                                                                        |
| [`GetElementLayerNumber`](#AnalysisPly.GetElementLayerNumber)         | GetElementLayerNumber method.                                                               |
| [`GetEnumName`](#AnalysisPly.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AnalysisPly.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AnalysisPly.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AnalysisPly.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AnalysisPly.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AnalysisPly.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AnalysisPly.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AnalysisPly.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AnalysisPly.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AnalysisPly.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AnalysisPly.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AnalysisPly.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AnalysisPly.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AnalysisPly.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AnalysisPly.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AnalysisPly.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AnalysisPly.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#AnalysisPly.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AnalysisPly.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AnalysisPly.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AnalysisPly.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AnalysisPly.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Angle`](#AnalysisPly.Angle)                                       | Gets or sets the Angle.                                       |
| [`AttachedRefs`](#AnalysisPly.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AnalysisPly.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AnalysisPly.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AnalysisPly.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AnalysisPly.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`ElementCount`](#AnalysisPly.ElementCount)                         | ElementCount property.                                        |
| [`Figures`](#AnalysisPly.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AnalysisPly.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IDInSource`](#AnalysisPly.IDInSource)                             | Gets the IDInSource.                                          |
| [`IconName`](#AnalysisPly.IconName)                                 | IconName property.                                            |
| [`Images`](#AnalysisPly.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AnalysisPly.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AnalysisPly.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                  | Gets the Material.                                            |
| [`Name`](#AnalysisPly.Name)                                         | Name property.                                                |
| [`NameInSource`](#AnalysisPly.NameInSource)                         | Gets the NameInSource.                                        |
| [`NumberOfElements`](#AnalysisPly.NumberOfElements)                 | Gets the NumberOfElements.                                    |
| [`ObjectId`](#AnalysisPly.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AnalysisPly.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AnalysisPly.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AnalysisPly.Parent)                                     | Parent property.                                              |
| [`Properties`](#AnalysisPly.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AnalysisPly.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#AnalysisPly.State)                                       | State property.                                               |
| [`Thickness`](Thickness.md#Thickness)                               | Gets the Thickness.                                           |
| [`TransferableObjectId`](#AnalysisPly.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AnalysisPly.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AnalysisPly.Angle"></a>

### *property* AnalysisPly.Angle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Angle.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AttachedRefs"></a>

### *property* AnalysisPly.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Children"></a>

### *property* AnalysisPly.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ClsId"></a>

### *property* AnalysisPly.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Comments"></a>

### *property* AnalysisPly.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.DataModelObjectCategory"></a>

### *property* AnalysisPly.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ElementCount"></a>

### *property* AnalysisPly.ElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ElementCount property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Figures"></a>

### *property* AnalysisPly.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GroupingFolder"></a>

### *property* AnalysisPly.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.IDInSource"></a>

### *property* AnalysisPly.IDInSource *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IDInSource.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.IconName"></a>

### *property* AnalysisPly.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Images"></a>

### *property* AnalysisPly.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ImportableObjectSourceId"></a>

### *property* AnalysisPly.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.InternalObject"></a>

### *property* AnalysisPly.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisPlyAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Material"></a>

### *property* AnalysisPly.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Material.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Name"></a>

### *property* AnalysisPly.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.NameInSource"></a>

### *property* AnalysisPly.NameInSource *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NameInSource.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.NumberOfElements"></a>

### *property* AnalysisPly.NumberOfElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberOfElements.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ObjectId"></a>

### *property* AnalysisPly.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ObjectState"></a>

### *property* AnalysisPly.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ObjectTags"></a>

### *property* AnalysisPly.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Parent"></a>

### *property* AnalysisPly.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Properties"></a>

### *property* AnalysisPly.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.ReadOnly"></a>

### *property* AnalysisPly.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.State"></a>

### *property* AnalysisPly.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Thickness"></a>

### *property* AnalysisPly.Thickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.TransferableObjectId"></a>

### *property* AnalysisPly.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.VisibleProperties"></a>

### *property* AnalysisPly.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AnalysisPly.Activate"></a>

### AnalysisPly.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddComment"></a>

### AnalysisPly.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddFigure"></a>

### AnalysisPly.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.AddImage"></a>

### AnalysisPly.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Copy"></a>

### AnalysisPly.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.CopyTo"></a>

### AnalysisPly.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.CreateObjRef"></a>

### AnalysisPly.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.CreateParameter"></a>

### AnalysisPly.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Cut"></a>

### AnalysisPly.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Duplicate"></a>

### AnalysisPly.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Equals"></a>

### AnalysisPly.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetAPIName"></a>

### AnalysisPly.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetAllProperties"></a>

### AnalysisPly.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetChildren"></a>

### AnalysisPly.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AnalysisPly.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetDetailsView"></a>

### AnalysisPly.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetElementId"></a>

### AnalysisPly.GetElementId(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

GetElementId method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetElementLayerNumber"></a>

### AnalysisPly.GetElementLayerNumber(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

GetElementLayerNumber method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetEnumName"></a>

### AnalysisPly.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetHashCode"></a>

### AnalysisPly.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetIconFile"></a>

### AnalysisPly.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetLifetimeService"></a>

### AnalysisPly.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetObjectData"></a>

### AnalysisPly.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetParameter"></a>

### AnalysisPly.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetPath"></a>

### AnalysisPly.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetPropertyName"></a>

### AnalysisPly.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetPropertyValue"></a>

### AnalysisPly.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetVisibleProperties"></a>

### AnalysisPly.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GetVisiblePropertyNames"></a>

### AnalysisPly.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GroupAllSimilarChildren"></a>

### AnalysisPly.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.GroupSimilarObjects"></a>

### AnalysisPly.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.InitializeLifetimeService"></a>

### AnalysisPly.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.IsPropertyEditable"></a>

### AnalysisPly.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AnalysisPly.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.IsPropertyVisible"></a>

### AnalysisPly.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AnalysisPly.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.Paste"></a>

### AnalysisPly.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.PropertyByAPIName"></a>

### AnalysisPly.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.PropertyById"></a>

### AnalysisPly.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.PropertyByName"></a>

### AnalysisPly.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.RemoveFromGroup"></a>

### AnalysisPly.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AnalysisPly.RemoveParameter"></a>

### AnalysisPly.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

