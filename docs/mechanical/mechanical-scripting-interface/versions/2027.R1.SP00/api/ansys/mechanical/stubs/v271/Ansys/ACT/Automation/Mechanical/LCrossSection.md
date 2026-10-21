# `LCrossSection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LCrossSection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.LCrossSection(internalObject: Any)

<a id="LCrossSection"></a>

### *class* LCrossSection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a LCrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#LCrossSection.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#LCrossSection.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#LCrossSection.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#LCrossSection.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#LCrossSection.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#LCrossSection.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#LCrossSection.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#LCrossSection.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#LCrossSection.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#LCrossSection.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#LCrossSection.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#LCrossSection.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#LCrossSection.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#LCrossSection.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#LCrossSection.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#LCrossSection.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#LCrossSection.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#LCrossSection.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#LCrossSection.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#LCrossSection.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#LCrossSection.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#LCrossSection.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#LCrossSection.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#LCrossSection.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#LCrossSection.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#LCrossSection.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#LCrossSection.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#LCrossSection.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#LCrossSection.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#LCrossSection.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#LCrossSection.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#LCrossSection.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#LCrossSection.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#LCrossSection.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#LCrossSection.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#LCrossSection.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#LCrossSection.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#LCrossSection.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Area`](#LCrossSection.Area)                                         | Gets the Area.                                                |
| [`AttachedRefs`](#LCrossSection.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#LCrossSection.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#LCrossSection.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#LCrossSection.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#LCrossSection.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#LCrossSection.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#LCrossSection.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IYY`](#LCrossSection.IYY)                                           | Gets the IYY.                                                 |
| [`IZZ`](#LCrossSection.IZZ)                                           | Gets the IZZ.                                                 |
| [`IconName`](#LCrossSection.IconName)                                 | IconName property.                                            |
| [`Images`](#LCrossSection.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#LCrossSection.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#LCrossSection.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#LCrossSection.Name)                                         | Name property.                                                |
| [`ObjectId`](#LCrossSection.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#LCrossSection.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#LCrossSection.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#LCrossSection.Parent)                                     | Parent property.                                              |
| [`Properties`](#LCrossSection.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#LCrossSection.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#LCrossSection.State)                                       | State property.                                               |
| [`Thick1`](#LCrossSection.Thick1)                                     | Gets or sets the Thick1.                                      |
| [`Thick2`](#LCrossSection.Thick2)                                     | Gets or sets the Thick2.                                      |
| [`TransferableObjectId`](#LCrossSection.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#LCrossSection.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`Width1`](#LCrossSection.Width1)                                     | Gets or sets the Width1.                                      |
| [`Width2`](#LCrossSection.Width2)                                     | Gets or sets the Width2.                                      |

<a id="property-detail"></a>

## Property detail

<a id="LCrossSection.Area"></a>

### *property* LCrossSection.Area *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.AttachedRefs"></a>

### *property* LCrossSection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Children"></a>

### *property* LCrossSection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.ClsId"></a>

### *property* LCrossSection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Comments"></a>

### *property* LCrossSection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.DataModelObjectCategory"></a>

### *property* LCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Figures"></a>

### *property* LCrossSection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GroupingFolder"></a>

### *property* LCrossSection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.IYY"></a>

### *property* LCrossSection.IYY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.IZZ"></a>

### *property* LCrossSection.IZZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.IconName"></a>

### *property* LCrossSection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Images"></a>

### *property* LCrossSection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.ImportableObjectSourceId"></a>

### *property* LCrossSection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.InternalObject"></a>

### *property* LCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Name"></a>

### *property* LCrossSection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.ObjectId"></a>

### *property* LCrossSection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.ObjectState"></a>

### *property* LCrossSection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.ObjectTags"></a>

### *property* LCrossSection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Parent"></a>

### *property* LCrossSection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Properties"></a>

### *property* LCrossSection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.ReadOnly"></a>

### *property* LCrossSection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.State"></a>

### *property* LCrossSection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Thick1"></a>

### *property* LCrossSection.Thick1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Thick2"></a>

### *property* LCrossSection.Thick2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.TransferableObjectId"></a>

### *property* LCrossSection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.VisibleProperties"></a>

### *property* LCrossSection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Width1"></a>

### *property* LCrossSection.Width1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Width2"></a>

### *property* LCrossSection.Width2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LCrossSection.Activate"></a>

### LCrossSection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.AddComment"></a>

### LCrossSection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.AddFigure"></a>

### LCrossSection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.AddImage"></a>

### LCrossSection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Copy"></a>

### LCrossSection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.CopyTo"></a>

### LCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.CreateObjRef"></a>

### LCrossSection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.CreateParameter"></a>

### LCrossSection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Cut"></a>

### LCrossSection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Delete"></a>

### LCrossSection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Duplicate"></a>

### LCrossSection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Equals"></a>

### LCrossSection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetAPIName"></a>

### LCrossSection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetAllProperties"></a>

### LCrossSection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetChildren"></a>

### LCrossSection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### LCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetDetailsView"></a>

### LCrossSection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetEnumName"></a>

### LCrossSection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetHashCode"></a>

### LCrossSection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetIconFile"></a>

### LCrossSection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetLifetimeService"></a>

### LCrossSection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetObjectData"></a>

### LCrossSection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetParameter"></a>

### LCrossSection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetPath"></a>

### LCrossSection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetPropertyName"></a>

### LCrossSection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetPropertyValue"></a>

### LCrossSection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetVisibleProperties"></a>

### LCrossSection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GetVisiblePropertyNames"></a>

### LCrossSection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GroupAllSimilarChildren"></a>

### LCrossSection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.GroupSimilarObjects"></a>

### LCrossSection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.InitializeLifetimeService"></a>

### LCrossSection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.IsPropertyEditable"></a>

### LCrossSection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LCrossSection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.IsPropertyVisible"></a>

### LCrossSection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### LCrossSection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.Paste"></a>

### LCrossSection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.PropertyByAPIName"></a>

### LCrossSection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.PropertyById"></a>

### LCrossSection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.PropertyByName"></a>

### LCrossSection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.RemoveFromGroup"></a>

### LCrossSection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="LCrossSection.RemoveParameter"></a>

### LCrossSection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

