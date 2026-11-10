# `NodalRotation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalRotation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalRotation(internalObject: Any)

<a id="NodalRotation"></a>

### *class* NodalRotation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NodalRotation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#NodalRotation.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#NodalRotation.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#NodalRotation.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#NodalRotation.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#NodalRotation.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#NodalRotation.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#NodalRotation.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#NodalRotation.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#NodalRotation.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#NodalRotation.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#NodalRotation.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#NodalRotation.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#NodalRotation.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#NodalRotation.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#NodalRotation.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#NodalRotation.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#NodalRotation.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#NodalRotation.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#NodalRotation.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#NodalRotation.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#NodalRotation.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#NodalRotation.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#NodalRotation.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#NodalRotation.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#NodalRotation.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#NodalRotation.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#NodalRotation.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#NodalRotation.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#NodalRotation.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#NodalRotation.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#NodalRotation.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#NodalRotation.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#NodalRotation.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#NodalRotation.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#NodalRotation.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#NodalRotation.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#NodalRotation.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#NodalRotation.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#NodalRotation.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#NodalRotation.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#NodalRotation.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#NodalRotation.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#NodalRotation.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)         | Gets the CoordinateSystem.                                    |
| [`DataModelObjectCategory`](#NodalRotation.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#NodalRotation.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#NodalRotation.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#NodalRotation.IconName)                                 | IconName property.                                            |
| [`Images`](#NodalRotation.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#NodalRotation.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#NodalRotation.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#NodalRotation.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#NodalRotation.Name)                                         | Name property.                                                |
| [`ObjectId`](#NodalRotation.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#NodalRotation.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#NodalRotation.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#NodalRotation.Parent)                                     | Parent property.                                              |
| [`Properties`](#NodalRotation.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#NodalRotation.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`RotationX`](#NodalRotation.RotationX)                               | Gets or sets the RotationX.                                   |
| [`RotationY`](#NodalRotation.RotationY)                               | Gets or sets the RotationY.                                   |
| [`RotationZ`](#NodalRotation.RotationZ)                               | Gets or sets the RotationZ.                                   |
| [`SharedRefBody`](#NodalRotation.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#NodalRotation.State)                                       | State property.                                               |
| [`Suppressed`](#NodalRotation.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#NodalRotation.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#NodalRotation.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodalRotation.AttachedRefs"></a>

### *property* NodalRotation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Children"></a>

### *property* NodalRotation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.ClsId"></a>

### *property* NodalRotation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Comments"></a>

### *property* NodalRotation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.CoordinateSystem"></a>

### *property* NodalRotation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.DataModelObjectCategory"></a>

### *property* NodalRotation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Figures"></a>

### *property* NodalRotation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GroupingFolder"></a>

### *property* NodalRotation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.IconName"></a>

### *property* NodalRotation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Images"></a>

### *property* NodalRotation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.ImportableObjectSourceId"></a>

### *property* NodalRotation.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.InternalObject"></a>

### *property* NodalRotation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Location"></a>

### *property* NodalRotation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Name"></a>

### *property* NodalRotation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.ObjectId"></a>

### *property* NodalRotation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.ObjectState"></a>

### *property* NodalRotation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.ObjectTags"></a>

### *property* NodalRotation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Parent"></a>

### *property* NodalRotation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Properties"></a>

### *property* NodalRotation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.ReadOnly"></a>

### *property* NodalRotation.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RotationX"></a>

### *property* NodalRotation.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RotationY"></a>

### *property* NodalRotation.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RotationZ"></a>

### *property* NodalRotation.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.SharedRefBody"></a>

### *property* NodalRotation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.State"></a>

### *property* NodalRotation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Suppressed"></a>

### *property* NodalRotation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.TransferableObjectId"></a>

### *property* NodalRotation.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.VisibleProperties"></a>

### *property* NodalRotation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalRotation.Activate"></a>

### NodalRotation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.AddComment"></a>

### NodalRotation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.AddFigure"></a>

### NodalRotation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.AddImage"></a>

### NodalRotation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Copy"></a>

### NodalRotation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.CopyTo"></a>

### NodalRotation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.CreateObjRef"></a>

### NodalRotation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.CreateParameter"></a>

### NodalRotation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Cut"></a>

### NodalRotation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Delete"></a>

### NodalRotation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Duplicate"></a>

### NodalRotation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Equals"></a>

### NodalRotation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetAPIName"></a>

### NodalRotation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetAllProperties"></a>

### NodalRotation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetChildren"></a>

### NodalRotation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NodalRotation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetDetailsView"></a>

### NodalRotation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetEnumName"></a>

### NodalRotation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetHashCode"></a>

### NodalRotation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetIconFile"></a>

### NodalRotation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetLifetimeService"></a>

### NodalRotation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetObjectData"></a>

### NodalRotation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetParameter"></a>

### NodalRotation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetPath"></a>

### NodalRotation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetPropertyName"></a>

### NodalRotation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetPropertyValue"></a>

### NodalRotation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetVisibleProperties"></a>

### NodalRotation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GetVisiblePropertyNames"></a>

### NodalRotation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GroupAllSimilarChildren"></a>

### NodalRotation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.GroupSimilarObjects"></a>

### NodalRotation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.InitializeLifetimeService"></a>

### NodalRotation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.IsPropertyEditable"></a>

### NodalRotation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodalRotation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.IsPropertyVisible"></a>

### NodalRotation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NodalRotation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.Paste"></a>

### NodalRotation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.PromoteToNamedSelection"></a>

### NodalRotation.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.PropertyByAPIName"></a>

### NodalRotation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.PropertyById"></a>

### NodalRotation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.PropertyByName"></a>

### NodalRotation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RemoveFromGroup"></a>

### NodalRotation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NodalRotation.RemoveParameter"></a>

### NodalRotation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

