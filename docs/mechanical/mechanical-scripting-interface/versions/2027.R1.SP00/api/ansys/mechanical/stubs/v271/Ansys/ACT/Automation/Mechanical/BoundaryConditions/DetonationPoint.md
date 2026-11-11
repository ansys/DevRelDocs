# `DetonationPoint`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.DetonationPoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.DetonationPoint(internalObject: Any)

<a id="DetonationPoint"></a>

### *class* DetonationPoint(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a DetonationPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#DetonationPoint.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#DetonationPoint.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#DetonationPoint.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#DetonationPoint.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#DetonationPoint.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#DetonationPoint.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#DetonationPoint.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#DetonationPoint.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#DetonationPoint.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#DetonationPoint.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#DetonationPoint.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#DetonationPoint.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#DetonationPoint.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#DetonationPoint.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#DetonationPoint.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#DetonationPoint.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#DetonationPoint.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#DetonationPoint.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#DetonationPoint.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#DetonationPoint.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#DetonationPoint.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#DetonationPoint.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#DetonationPoint.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#DetonationPoint.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#DetonationPoint.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#DetonationPoint.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#DetonationPoint.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#DetonationPoint.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#DetonationPoint.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#DetonationPoint.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#DetonationPoint.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#DetonationPoint.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#DetonationPoint.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#DetonationPoint.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#DetonationPoint.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#DetonationPoint.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#DetonationPoint.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#DetonationPoint.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#DetonationPoint.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#DetonationPoint.AttachedRefs)                         | AttachedRefs property.                                        |
| [`BurnInstantaneously`](#DetonationPoint.BurnInstantaneously)           | Gets or sets the BurnInstantaneously.                         |
| [`Children`](#DetonationPoint.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#DetonationPoint.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#DetonationPoint.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#DetonationPoint.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DetonationTime`](#DetonationPoint.DetonationTime)                     | Gets or sets the DetonationTime.                              |
| [`Figures`](#DetonationPoint.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#DetonationPoint.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#DetonationPoint.IconName)                                 | IconName property.                                            |
| [`Images`](#DetonationPoint.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#DetonationPoint.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#DetonationPoint.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#DetonationPoint.Location)                                 | Gets or sets the Direction.                                   |
| [`Name`](#DetonationPoint.Name)                                         | Name property.                                                |
| [`ObjectId`](#DetonationPoint.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#DetonationPoint.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#DetonationPoint.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#DetonationPoint.Parent)                                     | Parent property.                                              |
| [`Properties`](#DetonationPoint.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#DetonationPoint.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#DetonationPoint.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#DetonationPoint.State)                                       | State property.                                               |
| [`Suppressed`](#DetonationPoint.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#DetonationPoint.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#DetonationPoint.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`XCoordinate`](#DetonationPoint.XCoordinate)                           | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#DetonationPoint.YCoordinate)                           | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#DetonationPoint.ZCoordinate)                           | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="DetonationPoint.AttachedRefs"></a>

### *property* DetonationPoint.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.BurnInstantaneously"></a>

### *property* DetonationPoint.BurnInstantaneously *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BurnInstantaneously.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Children"></a>

### *property* DetonationPoint.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ClsId"></a>

### *property* DetonationPoint.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Comments"></a>

### *property* DetonationPoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.DataModelObjectCategory"></a>

### *property* DetonationPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.DetonationTime"></a>

### *property* DetonationPoint.DetonationTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DetonationTime.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Figures"></a>

### *property* DetonationPoint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GroupingFolder"></a>

### *property* DetonationPoint.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.IconName"></a>

### *property* DetonationPoint.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Images"></a>

### *property* DetonationPoint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ImportableObjectSourceId"></a>

### *property* DetonationPoint.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.InternalObject"></a>

### *property* DetonationPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Location"></a>

### *property* DetonationPoint.Location *: [Ansys.ACT.Math.Vector3D](../../../Math/Vector3D.md#ansys.mechanical.stubs.v271.Ansys.ACT.Math.Vector3D) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Name"></a>

### *property* DetonationPoint.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ObjectId"></a>

### *property* DetonationPoint.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ObjectState"></a>

### *property* DetonationPoint.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ObjectTags"></a>

### *property* DetonationPoint.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Parent"></a>

### *property* DetonationPoint.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Properties"></a>

### *property* DetonationPoint.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ReadOnly"></a>

### *property* DetonationPoint.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.SharedRefBody"></a>

### *property* DetonationPoint.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.State"></a>

### *property* DetonationPoint.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Suppressed"></a>

### *property* DetonationPoint.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.TransferableObjectId"></a>

### *property* DetonationPoint.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.VisibleProperties"></a>

### *property* DetonationPoint.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.XCoordinate"></a>

### *property* DetonationPoint.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.YCoordinate"></a>

### *property* DetonationPoint.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ZCoordinate"></a>

### *property* DetonationPoint.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DetonationPoint.Activate"></a>

### DetonationPoint.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.AddComment"></a>

### DetonationPoint.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.AddFigure"></a>

### DetonationPoint.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.AddImage"></a>

### DetonationPoint.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Copy"></a>

### DetonationPoint.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.CopyTo"></a>

### DetonationPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.CreateObjRef"></a>

### DetonationPoint.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.CreateParameter"></a>

### DetonationPoint.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Cut"></a>

### DetonationPoint.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Delete"></a>

### DetonationPoint.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Duplicate"></a>

### DetonationPoint.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Equals"></a>

### DetonationPoint.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetAPIName"></a>

### DetonationPoint.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetAllProperties"></a>

### DetonationPoint.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetChildren"></a>

### DetonationPoint.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### DetonationPoint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetDetailsView"></a>

### DetonationPoint.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetEnumName"></a>

### DetonationPoint.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetHashCode"></a>

### DetonationPoint.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetIconFile"></a>

### DetonationPoint.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetLifetimeService"></a>

### DetonationPoint.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetObjectData"></a>

### DetonationPoint.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetParameter"></a>

### DetonationPoint.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetPath"></a>

### DetonationPoint.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetPropertyName"></a>

### DetonationPoint.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetPropertyValue"></a>

### DetonationPoint.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetVisibleProperties"></a>

### DetonationPoint.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetVisiblePropertyNames"></a>

### DetonationPoint.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GroupAllSimilarChildren"></a>

### DetonationPoint.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GroupSimilarObjects"></a>

### DetonationPoint.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.InitializeLifetimeService"></a>

### DetonationPoint.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.IsPropertyEditable"></a>

### DetonationPoint.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DetonationPoint.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.IsPropertyVisible"></a>

### DetonationPoint.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### DetonationPoint.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Paste"></a>

### DetonationPoint.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.PromoteToNamedSelection"></a>

### DetonationPoint.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.PropertyByAPIName"></a>

### DetonationPoint.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.PropertyById"></a>

### DetonationPoint.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.PropertyByName"></a>

### DetonationPoint.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.RemoveFromGroup"></a>

### DetonationPoint.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.RemoveParameter"></a>

### DetonationPoint.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

