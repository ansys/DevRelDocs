# `FixedRotation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedRotation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedRotation(internalObject: Any)

<a id="FixedRotation"></a>

### *class* FixedRotation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FixedRotation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FixedRotation.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FixedRotation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#FixedRotation.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FixedRotation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FixedRotation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FixedRotation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FixedRotation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FixedRotation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FixedRotation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FixedRotation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FixedRotation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FixedRotation.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FixedRotation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FixedRotation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FixedRotation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FixedRotation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FixedRotation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FixedRotation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FixedRotation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FixedRotation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FixedRotation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FixedRotation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FixedRotation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FixedRotation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FixedRotation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FixedRotation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FixedRotation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FixedRotation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FixedRotation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FixedRotation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FixedRotation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FixedRotation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FixedRotation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FixedRotation.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FixedRotation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FixedRotation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FixedRotation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FixedRotation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FixedRotation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FixedRotation.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#FixedRotation.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#FixedRotation.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#FixedRotation.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)         | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#FixedRotation.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#FixedRotation.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#FixedRotation.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#FixedRotation.IconName)                                 | IconName property.                                            |
| [`Images`](#FixedRotation.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#FixedRotation.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#FixedRotation.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#FixedRotation.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#FixedRotation.Name)                                         | Name property.                                                |
| [`ObjectId`](#FixedRotation.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#FixedRotation.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#FixedRotation.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#FixedRotation.Parent)                                     | Parent property.                                              |
| [`Properties`](#FixedRotation.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FixedRotation.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`RotationX`](#FixedRotation.RotationX)                               | Gets or sets the RotationX.                                   |
| [`RotationY`](#FixedRotation.RotationY)                               | Gets or sets the RotationY.                                   |
| [`RotationZ`](#FixedRotation.RotationZ)                               | Gets or sets the RotationZ.                                   |
| [`SharedRefBody`](#FixedRotation.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#FixedRotation.State)                                       | State property.                                               |
| [`Suppressed`](#FixedRotation.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#FixedRotation.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#FixedRotation.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FixedRotation.AttachedRefs"></a>

### *property* FixedRotation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Children"></a>

### *property* FixedRotation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ClsId"></a>

### *property* FixedRotation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Comments"></a>

### *property* FixedRotation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CoordinateSystem"></a>

### *property* FixedRotation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.DataModelObjectCategory"></a>

### *property* FixedRotation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Figures"></a>

### *property* FixedRotation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GroupingFolder"></a>

### *property* FixedRotation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.IconName"></a>

### *property* FixedRotation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Images"></a>

### *property* FixedRotation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ImportableObjectSourceId"></a>

### *property* FixedRotation.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.InternalObject"></a>

### *property* FixedRotation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Location"></a>

### *property* FixedRotation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Name"></a>

### *property* FixedRotation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ObjectId"></a>

### *property* FixedRotation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ObjectState"></a>

### *property* FixedRotation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ObjectTags"></a>

### *property* FixedRotation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Parent"></a>

### *property* FixedRotation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Properties"></a>

### *property* FixedRotation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ReadOnly"></a>

### *property* FixedRotation.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationX"></a>

### *property* FixedRotation.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationY"></a>

### *property* FixedRotation.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationZ"></a>

### *property* FixedRotation.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.SharedRefBody"></a>

### *property* FixedRotation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.State"></a>

### *property* FixedRotation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Suppressed"></a>

### *property* FixedRotation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.TransferableObjectId"></a>

### *property* FixedRotation.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.VisibleProperties"></a>

### *property* FixedRotation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedRotation.Activate"></a>

### FixedRotation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddComment"></a>

### FixedRotation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddFigure"></a>

### FixedRotation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddImage"></a>

### FixedRotation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Copy"></a>

### FixedRotation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CopyTo"></a>

### FixedRotation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CreateObjRef"></a>

### FixedRotation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CreateParameter"></a>

### FixedRotation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Cut"></a>

### FixedRotation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Delete"></a>

### FixedRotation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Duplicate"></a>

### FixedRotation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Equals"></a>

### FixedRotation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetAPIName"></a>

### FixedRotation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetAllProperties"></a>

### FixedRotation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetChildren"></a>

### FixedRotation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FixedRotation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetDetailsView"></a>

### FixedRotation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetEnumName"></a>

### FixedRotation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetHashCode"></a>

### FixedRotation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetIconFile"></a>

### FixedRotation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetLifetimeService"></a>

### FixedRotation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetObjectData"></a>

### FixedRotation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetParameter"></a>

### FixedRotation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetPath"></a>

### FixedRotation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetPropertyName"></a>

### FixedRotation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetPropertyValue"></a>

### FixedRotation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetVisibleProperties"></a>

### FixedRotation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetVisiblePropertyNames"></a>

### FixedRotation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GroupAllSimilarChildren"></a>

### FixedRotation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GroupSimilarObjects"></a>

### FixedRotation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.InitializeLifetimeService"></a>

### FixedRotation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.IsPropertyEditable"></a>

### FixedRotation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FixedRotation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.IsPropertyVisible"></a>

### FixedRotation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FixedRotation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Paste"></a>

### FixedRotation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PromoteToNamedSelection"></a>

### FixedRotation.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PropertyByAPIName"></a>

### FixedRotation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PropertyById"></a>

### FixedRotation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PropertyByName"></a>

### FixedRotation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RemoveFromGroup"></a>

### FixedRotation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RemoveParameter"></a>

### FixedRotation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

