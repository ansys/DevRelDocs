# `CircularTubeCrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CircularTubeCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CircularTubeCrossSection(internalObject: Any)

<a id="CircularTubeCrossSection"></a>

### *class* CircularTubeCrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CircularTubeCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CircularTubeCrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CircularTubeCrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CircularTubeCrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CircularTubeCrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CircularTubeCrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CircularTubeCrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CircularTubeCrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CircularTubeCrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CircularTubeCrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CircularTubeCrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CircularTubeCrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CircularTubeCrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CircularTubeCrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CircularTubeCrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CircularTubeCrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CircularTubeCrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CircularTubeCrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CircularTubeCrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CircularTubeCrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CircularTubeCrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CircularTubeCrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CircularTubeCrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CircularTubeCrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CircularTubeCrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CircularTubeCrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CircularTubeCrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CircularTubeCrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CircularTubeCrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CircularTubeCrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CircularTubeCrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CircularTubeCrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CircularTubeCrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CircularTubeCrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CircularTubeCrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CircularTubeCrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CircularTubeCrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CircularTubeCrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CircularTubeCrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#CircularTubeCrossSection.Area)                                         | Gets the Area.                                                |
| [`AttachedRefs`](#CircularTubeCrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#CircularTubeCrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CircularTubeCrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CircularTubeCrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CircularTubeCrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CircularTubeCrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CircularTubeCrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IYY`](#CircularTubeCrossSection.IYY)                                           | Gets the IYY.                                                 |
| [`IZZ`](#CircularTubeCrossSection.IZZ)                                           | Gets the IZZ.                                                 |
| [`IconName`](#CircularTubeCrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#CircularTubeCrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CircularTubeCrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InnerRadius`](#CircularTubeCrossSection.InnerRadius)                           | Gets or sets the InnerRadius.                                 |
| [`InternalObject`](#CircularTubeCrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#CircularTubeCrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#CircularTubeCrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CircularTubeCrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CircularTubeCrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`OuterRadius`](#CircularTubeCrossSection.OuterRadius)                           | Gets or sets the OuterRadius.                                 |
| [`Parent`](#CircularTubeCrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#CircularTubeCrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CircularTubeCrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#CircularTubeCrossSection.State)                                       | State property.                                               |
| [`TransferableObjectId`](#CircularTubeCrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#CircularTubeCrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CircularTubeCrossSection.Area"></a>

### *property* CircularTubeCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.AttachedRefs"></a>

### *property* CircularTubeCrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Children"></a>

### *property* CircularTubeCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.ClsId"></a>

### *property* CircularTubeCrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Comments"></a>

### *property* CircularTubeCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.DataModelObjectCategory"></a>

### *property* CircularTubeCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Figures"></a>

### *property* CircularTubeCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GroupingFolder"></a>

### *property* CircularTubeCrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.IYY"></a>

### *property* CircularTubeCrossSection.IYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.IZZ"></a>

### *property* CircularTubeCrossSection.IZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.IconName"></a>

### *property* CircularTubeCrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Images"></a>

### *property* CircularTubeCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.ImportableObjectSourceId"></a>

### *property* CircularTubeCrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.InnerRadius"></a>

### *property* CircularTubeCrossSection.InnerRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InnerRadius.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.InternalObject"></a>

### *property* CircularTubeCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Name"></a>

### *property* CircularTubeCrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.ObjectId"></a>

### *property* CircularTubeCrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.ObjectState"></a>

### *property* CircularTubeCrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.ObjectTags"></a>

### *property* CircularTubeCrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.OuterRadius"></a>

### *property* CircularTubeCrossSection.OuterRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OuterRadius.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Parent"></a>

### *property* CircularTubeCrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Properties"></a>

### *property* CircularTubeCrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.ReadOnly"></a>

### *property* CircularTubeCrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.State"></a>

### *property* CircularTubeCrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.TransferableObjectId"></a>

### *property* CircularTubeCrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.VisibleProperties"></a>

### *property* CircularTubeCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CircularTubeCrossSection.Activate"></a>

### CircularTubeCrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.AddComment"></a>

### CircularTubeCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.AddFigure"></a>

### CircularTubeCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.AddImage"></a>

### CircularTubeCrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Copy"></a>

### CircularTubeCrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.CopyTo"></a>

### CircularTubeCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.CreateObjRef"></a>

### CircularTubeCrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.CreateParameter"></a>

### CircularTubeCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Cut"></a>

### CircularTubeCrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Delete"></a>

### CircularTubeCrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Duplicate"></a>

### CircularTubeCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Equals"></a>

### CircularTubeCrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetAPIName"></a>

### CircularTubeCrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetAllProperties"></a>

### CircularTubeCrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetChildren"></a>

### CircularTubeCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CircularTubeCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetDetailsView"></a>

### CircularTubeCrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetEnumName"></a>

### CircularTubeCrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetHashCode"></a>

### CircularTubeCrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetIconFile"></a>

### CircularTubeCrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetLifetimeService"></a>

### CircularTubeCrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetObjectData"></a>

### CircularTubeCrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetParameter"></a>

### CircularTubeCrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetPath"></a>

### CircularTubeCrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetPropertyName"></a>

### CircularTubeCrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetPropertyValue"></a>

### CircularTubeCrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetVisibleProperties"></a>

### CircularTubeCrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GetVisiblePropertyNames"></a>

### CircularTubeCrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GroupAllSimilarChildren"></a>

### CircularTubeCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.GroupSimilarObjects"></a>

### CircularTubeCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.InitializeLifetimeService"></a>

### CircularTubeCrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.IsPropertyEditable"></a>

### CircularTubeCrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CircularTubeCrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.IsPropertyVisible"></a>

### CircularTubeCrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CircularTubeCrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.Paste"></a>

### CircularTubeCrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.PropertyByAPIName"></a>

### CircularTubeCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.PropertyById"></a>

### CircularTubeCrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.PropertyByName"></a>

### CircularTubeCrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.RemoveFromGroup"></a>

### CircularTubeCrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CircularTubeCrossSection.RemoveParameter"></a>

### CircularTubeCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

