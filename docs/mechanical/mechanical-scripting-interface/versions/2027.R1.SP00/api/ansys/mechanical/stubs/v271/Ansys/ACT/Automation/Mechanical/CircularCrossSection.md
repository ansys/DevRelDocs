# `CircularCrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CircularCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CircularCrossSection(internalObject: Any)

<a id="CircularCrossSection"></a>

### *class* CircularCrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CircularCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CircularCrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CircularCrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CircularCrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CircularCrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CircularCrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CircularCrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CircularCrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CircularCrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CircularCrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CircularCrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CircularCrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CircularCrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CircularCrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CircularCrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CircularCrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CircularCrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CircularCrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CircularCrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CircularCrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CircularCrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CircularCrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CircularCrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CircularCrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CircularCrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CircularCrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CircularCrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CircularCrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CircularCrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CircularCrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CircularCrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CircularCrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CircularCrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CircularCrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CircularCrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CircularCrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CircularCrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CircularCrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CircularCrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#CircularCrossSection.Area)                                         | Gets the Area.                                                |
| [`AttachedRefs`](#CircularCrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#CircularCrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CircularCrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CircularCrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CircularCrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CircularCrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CircularCrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IYY`](#CircularCrossSection.IYY)                                           | Gets the IYY.                                                 |
| [`IZZ`](#CircularCrossSection.IZZ)                                           | Gets the IZZ.                                                 |
| [`IconName`](#CircularCrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#CircularCrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CircularCrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#CircularCrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#CircularCrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#CircularCrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CircularCrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CircularCrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#CircularCrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#CircularCrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`Radius`](#CircularCrossSection.Radius)                                     | Gets or sets the Radius.                                      |
| [`ReadOnly`](#CircularCrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#CircularCrossSection.State)                                       | State property.                                               |
| [`TransferableObjectId`](#CircularCrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#CircularCrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CircularCrossSection.Area"></a>

### *property* CircularCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.AttachedRefs"></a>

### *property* CircularCrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Children"></a>

### *property* CircularCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.ClsId"></a>

### *property* CircularCrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Comments"></a>

### *property* CircularCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.DataModelObjectCategory"></a>

### *property* CircularCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Figures"></a>

### *property* CircularCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GroupingFolder"></a>

### *property* CircularCrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.IYY"></a>

### *property* CircularCrossSection.IYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.IZZ"></a>

### *property* CircularCrossSection.IZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.IconName"></a>

### *property* CircularCrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Images"></a>

### *property* CircularCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.ImportableObjectSourceId"></a>

### *property* CircularCrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.InternalObject"></a>

### *property* CircularCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Name"></a>

### *property* CircularCrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.ObjectId"></a>

### *property* CircularCrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.ObjectState"></a>

### *property* CircularCrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.ObjectTags"></a>

### *property* CircularCrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Parent"></a>

### *property* CircularCrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Properties"></a>

### *property* CircularCrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Radius"></a>

### *property* CircularCrossSection.Radius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Radius.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.ReadOnly"></a>

### *property* CircularCrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.State"></a>

### *property* CircularCrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.TransferableObjectId"></a>

### *property* CircularCrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.VisibleProperties"></a>

### *property* CircularCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CircularCrossSection.Activate"></a>

### CircularCrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.AddComment"></a>

### CircularCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.AddFigure"></a>

### CircularCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.AddImage"></a>

### CircularCrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Copy"></a>

### CircularCrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.CopyTo"></a>

### CircularCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.CreateObjRef"></a>

### CircularCrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.CreateParameter"></a>

### CircularCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Cut"></a>

### CircularCrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Delete"></a>

### CircularCrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Duplicate"></a>

### CircularCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Equals"></a>

### CircularCrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetAPIName"></a>

### CircularCrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetAllProperties"></a>

### CircularCrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetChildren"></a>

### CircularCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CircularCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetDetailsView"></a>

### CircularCrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetEnumName"></a>

### CircularCrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetHashCode"></a>

### CircularCrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetIconFile"></a>

### CircularCrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetLifetimeService"></a>

### CircularCrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetObjectData"></a>

### CircularCrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetParameter"></a>

### CircularCrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetPath"></a>

### CircularCrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetPropertyName"></a>

### CircularCrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetPropertyValue"></a>

### CircularCrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetVisibleProperties"></a>

### CircularCrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GetVisiblePropertyNames"></a>

### CircularCrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GroupAllSimilarChildren"></a>

### CircularCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.GroupSimilarObjects"></a>

### CircularCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.InitializeLifetimeService"></a>

### CircularCrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.IsPropertyEditable"></a>

### CircularCrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CircularCrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.IsPropertyVisible"></a>

### CircularCrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CircularCrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.Paste"></a>

### CircularCrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.PropertyByAPIName"></a>

### CircularCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.PropertyById"></a>

### CircularCrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.PropertyByName"></a>

### CircularCrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.RemoveFromGroup"></a>

### CircularCrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CircularCrossSection.RemoveParameter"></a>

### CircularCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

