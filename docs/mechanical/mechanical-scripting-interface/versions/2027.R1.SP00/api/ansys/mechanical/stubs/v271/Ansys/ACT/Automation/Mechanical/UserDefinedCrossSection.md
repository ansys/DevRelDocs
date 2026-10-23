# `UserDefinedCrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.UserDefinedCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.UserDefinedCrossSection(internalObject: Any)

<a id="UserDefinedCrossSection"></a>

### *class* UserDefinedCrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a UserDefinedCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#UserDefinedCrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#UserDefinedCrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#UserDefinedCrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#UserDefinedCrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#UserDefinedCrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#UserDefinedCrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#UserDefinedCrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#UserDefinedCrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#UserDefinedCrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#UserDefinedCrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#UserDefinedCrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#UserDefinedCrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#UserDefinedCrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#UserDefinedCrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#UserDefinedCrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#UserDefinedCrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#UserDefinedCrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#UserDefinedCrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#UserDefinedCrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#UserDefinedCrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#UserDefinedCrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#UserDefinedCrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#UserDefinedCrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#UserDefinedCrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#UserDefinedCrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#UserDefinedCrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#UserDefinedCrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#UserDefinedCrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#UserDefinedCrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#UserDefinedCrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#UserDefinedCrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#UserDefinedCrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#UserDefinedCrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#UserDefinedCrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#UserDefinedCrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#UserDefinedCrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#UserDefinedCrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#UserDefinedCrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#UserDefinedCrossSection.Area)                                         | Gets or sets the Area.                                        |
| [`AttachedRefs`](#UserDefinedCrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`CGZ`](#UserDefinedCrossSection.CGZ)                                           | Gets or sets the CGZ.                                         |
| [`CGy`](#UserDefinedCrossSection.CGy)                                           | Gets or sets the CGy.                                         |
| [`Children`](#UserDefinedCrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#UserDefinedCrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#UserDefinedCrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#UserDefinedCrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#UserDefinedCrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#UserDefinedCrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#UserDefinedCrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#UserDefinedCrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#UserDefinedCrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#UserDefinedCrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Iw`](#UserDefinedCrossSection.Iw)                                             | Gets or sets the Iw.                                          |
| [`Iyy`](#UserDefinedCrossSection.Iyy)                                           | Gets or sets the Iyy.                                         |
| [`Izz`](#UserDefinedCrossSection.Izz)                                           | Gets or sets the Izz.                                         |
| [`J`](#UserDefinedCrossSection.J)                                               | Gets or sets the J.                                           |
| [`Name`](#UserDefinedCrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#UserDefinedCrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#UserDefinedCrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#UserDefinedCrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#UserDefinedCrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#UserDefinedCrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#UserDefinedCrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SHy`](#UserDefinedCrossSection.SHy)                                           | Gets or sets the SHy.                                         |
| [`SHz`](#UserDefinedCrossSection.SHz)                                           | Gets or sets the SHz.                                         |
| [`State`](#UserDefinedCrossSection.State)                                       | State property.                                               |
| [`TransferableObjectId`](#UserDefinedCrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#UserDefinedCrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="UserDefinedCrossSection.Area"></a>

### *property* UserDefinedCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Area.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AttachedRefs"></a>

### *property* UserDefinedCrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CGZ"></a>

### *property* UserDefinedCrossSection.CGZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CGZ.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CGy"></a>

### *property* UserDefinedCrossSection.CGy *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CGy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Children"></a>

### *property* UserDefinedCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ClsId"></a>

### *property* UserDefinedCrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Comments"></a>

### *property* UserDefinedCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.DataModelObjectCategory"></a>

### *property* UserDefinedCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Figures"></a>

### *property* UserDefinedCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GroupingFolder"></a>

### *property* UserDefinedCrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.IconName"></a>

### *property* UserDefinedCrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Images"></a>

### *property* UserDefinedCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ImportableObjectSourceId"></a>

### *property* UserDefinedCrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.InternalObject"></a>

### *property* UserDefinedCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Iw"></a>

### *property* UserDefinedCrossSection.Iw *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Iw.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Iyy"></a>

### *property* UserDefinedCrossSection.Iyy *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Iyy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Izz"></a>

### *property* UserDefinedCrossSection.Izz *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Izz.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.J"></a>

### *property* UserDefinedCrossSection.J *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the J.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Name"></a>

### *property* UserDefinedCrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ObjectId"></a>

### *property* UserDefinedCrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ObjectState"></a>

### *property* UserDefinedCrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ObjectTags"></a>

### *property* UserDefinedCrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Parent"></a>

### *property* UserDefinedCrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Properties"></a>

### *property* UserDefinedCrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.ReadOnly"></a>

### *property* UserDefinedCrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.SHy"></a>

### *property* UserDefinedCrossSection.SHy *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SHy.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.SHz"></a>

### *property* UserDefinedCrossSection.SHz *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SHz.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.State"></a>

### *property* UserDefinedCrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.TransferableObjectId"></a>

### *property* UserDefinedCrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.VisibleProperties"></a>

### *property* UserDefinedCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="UserDefinedCrossSection.Activate"></a>

### UserDefinedCrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddComment"></a>

### UserDefinedCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddFigure"></a>

### UserDefinedCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.AddImage"></a>

### UserDefinedCrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Copy"></a>

### UserDefinedCrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CopyTo"></a>

### UserDefinedCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CreateObjRef"></a>

### UserDefinedCrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.CreateParameter"></a>

### UserDefinedCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Cut"></a>

### UserDefinedCrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Delete"></a>

### UserDefinedCrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Duplicate"></a>

### UserDefinedCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Equals"></a>

### UserDefinedCrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetAPIName"></a>

### UserDefinedCrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetAllProperties"></a>

### UserDefinedCrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetChildren"></a>

### UserDefinedCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### UserDefinedCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetDetailsView"></a>

### UserDefinedCrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetEnumName"></a>

### UserDefinedCrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetHashCode"></a>

### UserDefinedCrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetIconFile"></a>

### UserDefinedCrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetLifetimeService"></a>

### UserDefinedCrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetObjectData"></a>

### UserDefinedCrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetParameter"></a>

### UserDefinedCrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetPath"></a>

### UserDefinedCrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetPropertyName"></a>

### UserDefinedCrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetPropertyValue"></a>

### UserDefinedCrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetVisibleProperties"></a>

### UserDefinedCrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GetVisiblePropertyNames"></a>

### UserDefinedCrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GroupAllSimilarChildren"></a>

### UserDefinedCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.GroupSimilarObjects"></a>

### UserDefinedCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.InitializeLifetimeService"></a>

### UserDefinedCrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.IsPropertyEditable"></a>

### UserDefinedCrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### UserDefinedCrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.IsPropertyVisible"></a>

### UserDefinedCrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### UserDefinedCrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.Paste"></a>

### UserDefinedCrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.PropertyByAPIName"></a>

### UserDefinedCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.PropertyById"></a>

### UserDefinedCrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.PropertyByName"></a>

### UserDefinedCrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.RemoveFromGroup"></a>

### UserDefinedCrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="UserDefinedCrossSection.RemoveParameter"></a>

### UserDefinedCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

