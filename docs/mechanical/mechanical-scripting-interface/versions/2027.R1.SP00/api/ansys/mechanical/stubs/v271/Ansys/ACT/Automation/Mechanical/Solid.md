# `Solid`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Solid"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Solid(internalObject: Any)

<a id="Solid"></a>

### *class* Solid(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Solid.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Solid.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Solid.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddGeometry`](#Solid.AddGeometry)                             | Add solid to the geometry.                                                                  |
| [`Copy`](#Solid.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Solid.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Solid.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Solid.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Solid.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Solid.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Solid.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Solid.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Solid.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Solid.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Solid.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Solid.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Solid.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Solid.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Solid.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Solid.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Solid.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Solid.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Solid.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Solid.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Solid.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Solid.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Solid.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Solid.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Solid.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Solid.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Solid.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Solid.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Solid.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Solid.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Solid.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Solid.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Solid.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveGeometry`](#Solid.RemoveGeometry)                       | Remove the solid from the geometry.                                                         |
| [`RemoveParameter`](#Solid.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`UpdateGeometry`](#Solid.UpdateGeometry)                       | Update the solid on the geometry.                                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Solid.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#Solid.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Solid.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Solid.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)    | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Solid.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`GroupingFolder`](#Solid.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Solid.IconName)                                 | IconName property.                                            |
| [`ImportableObjectSourceId`](#Solid.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Solid.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Name`](#Solid.Name)                                         | Name property.                                                |
| [`ObjectId`](#Solid.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Solid.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Solid.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Solid.Parent)                                     | Parent property.                                              |
| [`PartName`](#Solid.PartName)                                 | Gets the PartName.                                            |
| [`Properties`](#Solid.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Solid.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#Solid.State)                                       | State property.                                               |
| [`TransferableObjectId`](#Solid.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Solid.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`X1`](#Solid.X1)                                             | Gets or sets the X1.                                          |
| [`X2`](#Solid.X2)                                             | Gets or sets the X2.                                          |
| [`Y1`](#Solid.Y1)                                             | Gets or sets the Y1.                                          |
| [`Y2`](#Solid.Y2)                                             | Gets or sets the Y2.                                          |
| [`Z1`](#Solid.Z1)                                             | Gets or sets the Z1.                                          |
| [`Z2`](#Solid.Z2)                                             | Gets or sets the Z2.                                          |

<a id="property-detail"></a>

## Property detail

<a id="Solid.AttachedRefs"></a>

### *property* Solid.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Children"></a>

### *property* Solid.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Solid.ClsId"></a>

### *property* Solid.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Comments"></a>

### *property* Solid.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Solid.CoordinateSystem"></a>

### *property* Solid.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Solid.DataModelObjectCategory"></a>

### *property* Solid.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GroupingFolder"></a>

### *property* Solid.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.IconName"></a>

### *property* Solid.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.ImportableObjectSourceId"></a>

### *property* Solid.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.InternalObject"></a>

### *property* Solid.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolidAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Name"></a>

### *property* Solid.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.ObjectId"></a>

### *property* Solid.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.ObjectState"></a>

### *property* Solid.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.ObjectTags"></a>

### *property* Solid.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Parent"></a>

### *property* Solid.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.PartName"></a>

### *property* Solid.PartName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PartName.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Properties"></a>

### *property* Solid.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Solid.ReadOnly"></a>

### *property* Solid.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Solid.State"></a>

### *property* Solid.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.TransferableObjectId"></a>

### *property* Solid.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.VisibleProperties"></a>

### *property* Solid.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Solid.X1"></a>

### *property* Solid.X1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X1.

<!-- !! processed by numpydoc !! -->

<a id="Solid.X2"></a>

### *property* Solid.X2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X2.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Y1"></a>

### *property* Solid.Y1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y1.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Y2"></a>

### *property* Solid.Y2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y2.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Z1"></a>

### *property* Solid.Z1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z1.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Z2"></a>

### *property* Solid.Z2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z2.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Solid.Activate"></a>

### Solid.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Solid.AddComment"></a>

### Solid.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Solid.AddGeometry"></a>

### Solid.AddGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

Add solid to the geometry.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Copy"></a>

### Solid.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Solid.CopyTo"></a>

### Solid.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Solid.CreateObjRef"></a>

### Solid.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.CreateParameter"></a>

### Solid.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Cut"></a>

### Solid.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Delete"></a>

### Solid.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Duplicate"></a>

### Solid.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Equals"></a>

### Solid.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetAPIName"></a>

### Solid.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetAllProperties"></a>

### Solid.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetChildren"></a>

### Solid.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Solid.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetDetailsView"></a>

### Solid.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetEnumName"></a>

### Solid.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetHashCode"></a>

### Solid.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetIconFile"></a>

### Solid.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetLifetimeService"></a>

### Solid.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetObjectData"></a>

### Solid.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetParameter"></a>

### Solid.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetPath"></a>

### Solid.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetPropertyName"></a>

### Solid.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetPropertyValue"></a>

### Solid.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetVisibleProperties"></a>

### Solid.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GetVisiblePropertyNames"></a>

### Solid.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GroupAllSimilarChildren"></a>

### Solid.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Solid.GroupSimilarObjects"></a>

### Solid.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Solid.InitializeLifetimeService"></a>

### Solid.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.IsPropertyEditable"></a>

### Solid.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Solid.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.IsPropertyVisible"></a>

### Solid.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Solid.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.Paste"></a>

### Solid.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Solid.PropertyByAPIName"></a>

### Solid.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Solid.PropertyById"></a>

### Solid.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Solid.PropertyByName"></a>

### Solid.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Solid.RemoveFromGroup"></a>

### Solid.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Solid.RemoveGeometry"></a>

### Solid.RemoveGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

Remove the solid from the geometry.

<!-- !! processed by numpydoc !! -->

<a id="Solid.RemoveParameter"></a>

### Solid.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Solid.UpdateGeometry"></a>

### Solid.UpdateGeometry() → [None](https://docs.python.org/3/builtins/constants.html#None)

Update the solid on the geometry.

<!-- !! processed by numpydoc !! -->

