# `ICrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ICrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ICrossSection(internalObject: Any)

<a id="ICrossSection"></a>

### *class* ICrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ICrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ICrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ICrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ICrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ICrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ICrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ICrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ICrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ICrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ICrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ICrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ICrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ICrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ICrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ICrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ICrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ICrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ICrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ICrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ICrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ICrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ICrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ICrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ICrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ICrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ICrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ICrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ICrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ICrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ICrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ICrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ICrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ICrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ICrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ICrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ICrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ICrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ICrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ICrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#ICrossSection.Area)                                         | Gets the Area.                                                |
| [`AttachedRefs`](#ICrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ICrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ICrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ICrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ICrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ICrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ICrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IYY`](#ICrossSection.IYY)                                           | Gets the IYY.                                                 |
| [`IZZ`](#ICrossSection.IZZ)                                           | Gets the IZZ.                                                 |
| [`IconName`](#ICrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#ICrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ICrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ICrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#ICrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#ICrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ICrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ICrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ICrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#ICrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ICrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#ICrossSection.State)                                       | State property.                                               |
| [`Thick1`](#ICrossSection.Thick1)                                     | Gets or sets the Thick1.                                      |
| [`Thick2`](#ICrossSection.Thick2)                                     | Gets or sets the Thick2.                                      |
| [`Thick3`](#ICrossSection.Thick3)                                     | Gets or sets the Thick3.                                      |
| [`TransferableObjectId`](#ICrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ICrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`Width1`](#ICrossSection.Width1)                                     | Gets or sets the Width1.                                      |
| [`Width2`](#ICrossSection.Width2)                                     | Gets or sets the Width2.                                      |
| [`Width3`](#ICrossSection.Width3)                                     | Gets or sets the Width3.                                      |

<a id="property-detail"></a>

## Property detail

<a id="ICrossSection.Area"></a>

### *property* ICrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.AttachedRefs"></a>

### *property* ICrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Children"></a>

### *property* ICrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.ClsId"></a>

### *property* ICrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Comments"></a>

### *property* ICrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.DataModelObjectCategory"></a>

### *property* ICrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Figures"></a>

### *property* ICrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GroupingFolder"></a>

### *property* ICrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.IYY"></a>

### *property* ICrossSection.IYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.IZZ"></a>

### *property* ICrossSection.IZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.IconName"></a>

### *property* ICrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Images"></a>

### *property* ICrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.ImportableObjectSourceId"></a>

### *property* ICrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.InternalObject"></a>

### *property* ICrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Name"></a>

### *property* ICrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.ObjectId"></a>

### *property* ICrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.ObjectState"></a>

### *property* ICrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.ObjectTags"></a>

### *property* ICrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Parent"></a>

### *property* ICrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Properties"></a>

### *property* ICrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.ReadOnly"></a>

### *property* ICrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.State"></a>

### *property* ICrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Thick1"></a>

### *property* ICrossSection.Thick1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Thick2"></a>

### *property* ICrossSection.Thick2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Thick3"></a>

### *property* ICrossSection.Thick3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.TransferableObjectId"></a>

### *property* ICrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.VisibleProperties"></a>

### *property* ICrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Width1"></a>

### *property* ICrossSection.Width1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Width2"></a>

### *property* ICrossSection.Width2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Width3"></a>

### *property* ICrossSection.Width3 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ICrossSection.Activate"></a>

### ICrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.AddComment"></a>

### ICrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.AddFigure"></a>

### ICrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.AddImage"></a>

### ICrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Copy"></a>

### ICrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.CopyTo"></a>

### ICrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.CreateObjRef"></a>

### ICrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.CreateParameter"></a>

### ICrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Cut"></a>

### ICrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Delete"></a>

### ICrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Duplicate"></a>

### ICrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Equals"></a>

### ICrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetAPIName"></a>

### ICrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetAllProperties"></a>

### ICrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetChildren"></a>

### ICrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ICrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetDetailsView"></a>

### ICrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetEnumName"></a>

### ICrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetHashCode"></a>

### ICrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetIconFile"></a>

### ICrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetLifetimeService"></a>

### ICrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetObjectData"></a>

### ICrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetParameter"></a>

### ICrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetPath"></a>

### ICrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetPropertyName"></a>

### ICrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetPropertyValue"></a>

### ICrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetVisibleProperties"></a>

### ICrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GetVisiblePropertyNames"></a>

### ICrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GroupAllSimilarChildren"></a>

### ICrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.GroupSimilarObjects"></a>

### ICrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.InitializeLifetimeService"></a>

### ICrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.IsPropertyEditable"></a>

### ICrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ICrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.IsPropertyVisible"></a>

### ICrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ICrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.Paste"></a>

### ICrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.PropertyByAPIName"></a>

### ICrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.PropertyById"></a>

### ICrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.PropertyByName"></a>

### ICrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.RemoveFromGroup"></a>

### ICrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ICrossSection.RemoveParameter"></a>

### ICrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

