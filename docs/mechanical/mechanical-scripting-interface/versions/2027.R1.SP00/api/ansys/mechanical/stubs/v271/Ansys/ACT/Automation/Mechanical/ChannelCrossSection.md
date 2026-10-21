# `ChannelCrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ChannelCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ChannelCrossSection(internalObject: Any)

<a id="ChannelCrossSection"></a>

### *class* ChannelCrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ChannelCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ChannelCrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ChannelCrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ChannelCrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ChannelCrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ChannelCrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ChannelCrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ChannelCrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ChannelCrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ChannelCrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ChannelCrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ChannelCrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ChannelCrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ChannelCrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ChannelCrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ChannelCrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ChannelCrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ChannelCrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ChannelCrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ChannelCrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ChannelCrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ChannelCrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ChannelCrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ChannelCrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ChannelCrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ChannelCrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ChannelCrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ChannelCrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ChannelCrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ChannelCrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ChannelCrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ChannelCrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ChannelCrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ChannelCrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ChannelCrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ChannelCrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ChannelCrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ChannelCrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ChannelCrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#ChannelCrossSection.Area)                                         | Gets the Area.                                                |
| [`AttachedRefs`](#ChannelCrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ChannelCrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ChannelCrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ChannelCrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ChannelCrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ChannelCrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ChannelCrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IYY`](#ChannelCrossSection.IYY)                                           | Gets the IYY.                                                 |
| [`IZZ`](#ChannelCrossSection.IZZ)                                           | Gets the IZZ.                                                 |
| [`IconName`](#ChannelCrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#ChannelCrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ChannelCrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ChannelCrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#ChannelCrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#ChannelCrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ChannelCrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ChannelCrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ChannelCrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#ChannelCrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ChannelCrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ChannelCrossSection.State)                                       | State property.                                               |
| [`Thick1`](#ChannelCrossSection.Thick1)                                     | Gets or sets the Thick1.                                      |
| [`Thick2`](#ChannelCrossSection.Thick2)                                     | Gets or sets the Thick2.                                      |
| [`Thick3`](#ChannelCrossSection.Thick3)                                     | Gets or sets the Thick3.                                      |
| [`TransferableObjectId`](#ChannelCrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ChannelCrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`Width1`](#ChannelCrossSection.Width1)                                     | Gets or sets the Width1.                                      |
| [`Width2`](#ChannelCrossSection.Width2)                                     | Gets or sets the Width2.                                      |
| [`Width3`](#ChannelCrossSection.Width3)                                     | Gets or sets the Width3.                                      |

<a id="property-detail"></a>

## Property detail

<a id="ChannelCrossSection.Area"></a>

### *property* ChannelCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AttachedRefs"></a>

### *property* ChannelCrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Children"></a>

### *property* ChannelCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ClsId"></a>

### *property* ChannelCrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Comments"></a>

### *property* ChannelCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.DataModelObjectCategory"></a>

### *property* ChannelCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Figures"></a>

### *property* ChannelCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GroupingFolder"></a>

### *property* ChannelCrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IYY"></a>

### *property* ChannelCrossSection.IYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IZZ"></a>

### *property* ChannelCrossSection.IZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IconName"></a>

### *property* ChannelCrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Images"></a>

### *property* ChannelCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ImportableObjectSourceId"></a>

### *property* ChannelCrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.InternalObject"></a>

### *property* ChannelCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Name"></a>

### *property* ChannelCrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ObjectId"></a>

### *property* ChannelCrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ObjectState"></a>

### *property* ChannelCrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ObjectTags"></a>

### *property* ChannelCrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Parent"></a>

### *property* ChannelCrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Properties"></a>

### *property* ChannelCrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.ReadOnly"></a>

### *property* ChannelCrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.State"></a>

### *property* ChannelCrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick1"></a>

### *property* ChannelCrossSection.Thick1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick2"></a>

### *property* ChannelCrossSection.Thick2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Thick3"></a>

### *property* ChannelCrossSection.Thick3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.TransferableObjectId"></a>

### *property* ChannelCrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.VisibleProperties"></a>

### *property* ChannelCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width1"></a>

### *property* ChannelCrossSection.Width1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width2"></a>

### *property* ChannelCrossSection.Width2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Width3"></a>

### *property* ChannelCrossSection.Width3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ChannelCrossSection.Activate"></a>

### ChannelCrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddComment"></a>

### ChannelCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddFigure"></a>

### ChannelCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.AddImage"></a>

### ChannelCrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Copy"></a>

### ChannelCrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.CopyTo"></a>

### ChannelCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.CreateObjRef"></a>

### ChannelCrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.CreateParameter"></a>

### ChannelCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Cut"></a>

### ChannelCrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Delete"></a>

### ChannelCrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Duplicate"></a>

### ChannelCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Equals"></a>

### ChannelCrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetAPIName"></a>

### ChannelCrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetAllProperties"></a>

### ChannelCrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetChildren"></a>

### ChannelCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ChannelCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetDetailsView"></a>

### ChannelCrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetEnumName"></a>

### ChannelCrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetHashCode"></a>

### ChannelCrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetIconFile"></a>

### ChannelCrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetLifetimeService"></a>

### ChannelCrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetObjectData"></a>

### ChannelCrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetParameter"></a>

### ChannelCrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetPath"></a>

### ChannelCrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetPropertyName"></a>

### ChannelCrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetPropertyValue"></a>

### ChannelCrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetVisibleProperties"></a>

### ChannelCrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GetVisiblePropertyNames"></a>

### ChannelCrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GroupAllSimilarChildren"></a>

### ChannelCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.GroupSimilarObjects"></a>

### ChannelCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.InitializeLifetimeService"></a>

### ChannelCrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IsPropertyEditable"></a>

### ChannelCrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ChannelCrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.IsPropertyVisible"></a>

### ChannelCrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ChannelCrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.Paste"></a>

### ChannelCrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.PropertyByAPIName"></a>

### ChannelCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.PropertyById"></a>

### ChannelCrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.PropertyByName"></a>

### ChannelCrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.RemoveFromGroup"></a>

### ChannelCrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ChannelCrossSection.RemoveParameter"></a>

### ChannelCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

