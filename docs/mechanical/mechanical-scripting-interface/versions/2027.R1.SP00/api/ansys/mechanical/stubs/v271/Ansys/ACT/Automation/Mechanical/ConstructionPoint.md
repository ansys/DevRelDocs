# `ConstructionPoint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ConstructionPoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ConstructionPoint(internalObject: Any)

<a id="ConstructionPoint"></a>

### *class* ConstructionPoint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ConstructionPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ConstructionPoint.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ConstructionPoint.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ConstructionPoint.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ConstructionPoint.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ConstructionPoint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ConstructionPoint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ConstructionPoint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ConstructionPoint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ConstructionPoint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ConstructionPoint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ConstructionPoint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ConstructionPoint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ConstructionPoint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ConstructionPoint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ConstructionPoint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ConstructionPoint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ConstructionPoint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ConstructionPoint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ConstructionPoint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ConstructionPoint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ConstructionPoint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ConstructionPoint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ConstructionPoint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ConstructionPoint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ConstructionPoint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ConstructionPoint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ConstructionPoint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ConstructionPoint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ConstructionPoint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ConstructionPoint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ConstructionPoint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ConstructionPoint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ConstructionPoint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ConstructionPoint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ConstructionPoint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ConstructionPoint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ConstructionPoint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ConstructionPoint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetLocation`](#ConstructionPoint.SetLocation)                             | Sets the point location.                                                                    |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ConstructionPoint.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#ConstructionPoint.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#ConstructionPoint.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#ConstructionPoint.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ConstructionPoint.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ConstructionPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ConstructionPoint.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#ConstructionPoint.IconName)                               | IconName property.                                            |
| [`Images`](#ConstructionPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ConstructionPoint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LocationX`](#ConstructionPoint.LocationX)                             | Gets or sets the LocationX.                                   |
| [`LocationY`](#ConstructionPoint.LocationY)                             | Gets or sets the LocationY.                                   |
| [`LocationZ`](#ConstructionPoint.LocationZ)                             | Gets or sets the LocationZ.                                   |
| [`Name`](#ConstructionPoint.Name)                                       | Name property.                                                |
| [`ObjectId`](#ConstructionPoint.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#ConstructionPoint.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#ConstructionPoint.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#ConstructionPoint.Parent)                                   | Parent property.                                              |
| [`Properties`](#ConstructionPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`State`](#ConstructionPoint.State)                                     | State property.                                               |
| [`VisibleProperties`](#ConstructionPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ConstructionPoint.AttachedRefs"></a>

### *property* ConstructionPoint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Children"></a>

### *property* ConstructionPoint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.ClsId"></a>

### *property* ConstructionPoint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Comments"></a>

### *property* ConstructionPoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.DataModelObjectCategory"></a>

### *property* ConstructionPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Figures"></a>

### *property* ConstructionPoint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupingFolder"></a>

### *property* ConstructionPoint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.IconName"></a>

### *property* ConstructionPoint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Images"></a>

### *property* ConstructionPoint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.InternalObject"></a>

### *property* ConstructionPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSConstructionPointAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationX"></a>

### *property* ConstructionPoint.LocationX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationX.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationY"></a>

### *property* ConstructionPoint.LocationY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationY.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.LocationZ"></a>

### *property* ConstructionPoint.LocationZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocationZ.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Name"></a>

### *property* ConstructionPoint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.ObjectId"></a>

### *property* ConstructionPoint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.ObjectState"></a>

### *property* ConstructionPoint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.ObjectTags"></a>

### *property* ConstructionPoint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Parent"></a>

### *property* ConstructionPoint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Properties"></a>

### *property* ConstructionPoint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.State"></a>

### *property* ConstructionPoint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.VisibleProperties"></a>

### *property* ConstructionPoint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ConstructionPoint.Activate"></a>

### ConstructionPoint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddComment"></a>

### ConstructionPoint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddFigure"></a>

### ConstructionPoint.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.AddImage"></a>

### ConstructionPoint.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Copy"></a>

### ConstructionPoint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CopyTo"></a>

### ConstructionPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CreateObjRef"></a>

### ConstructionPoint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.CreateParameter"></a>

### ConstructionPoint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Cut"></a>

### ConstructionPoint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Delete"></a>

### ConstructionPoint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Duplicate"></a>

### ConstructionPoint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Equals"></a>

### ConstructionPoint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetAPIName"></a>

### ConstructionPoint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetAllProperties"></a>

### ConstructionPoint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetChildren"></a>

### ConstructionPoint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ConstructionPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetDetailsView"></a>

### ConstructionPoint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetEnumName"></a>

### ConstructionPoint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetHashCode"></a>

### ConstructionPoint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetIconFile"></a>

### ConstructionPoint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetLifetimeService"></a>

### ConstructionPoint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetObjectData"></a>

### ConstructionPoint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetParameter"></a>

### ConstructionPoint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetPath"></a>

### ConstructionPoint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetPropertyName"></a>

### ConstructionPoint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetPropertyValue"></a>

### ConstructionPoint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetVisibleProperties"></a>

### ConstructionPoint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GetVisiblePropertyNames"></a>

### ConstructionPoint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupAllSimilarChildren"></a>

### ConstructionPoint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.GroupSimilarObjects"></a>

### ConstructionPoint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.InitializeLifetimeService"></a>

### ConstructionPoint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.IsPropertyEditable"></a>

### ConstructionPoint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstructionPoint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.IsPropertyVisible"></a>

### ConstructionPoint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ConstructionPoint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.Paste"></a>

### ConstructionPoint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByAPIName"></a>

### ConstructionPoint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyById"></a>

### ConstructionPoint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.PropertyByName"></a>

### ConstructionPoint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.RemoveFromGroup"></a>

### ConstructionPoint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.RemoveParameter"></a>

### ConstructionPoint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ConstructionPoint.SetLocation"></a>

### ConstructionPoint.SetLocation(newvalue: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the point location.

<!-- !! processed by numpydoc !! -->

