# `VoltageGround`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VoltageGround"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.VoltageGround(internalObject: Any)

<a id="VoltageGround"></a>

### *class* VoltageGround(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a VoltageGround.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#VoltageGround.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#VoltageGround.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#VoltageGround.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#VoltageGround.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#VoltageGround.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#VoltageGround.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#VoltageGround.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#VoltageGround.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#VoltageGround.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#VoltageGround.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#VoltageGround.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#VoltageGround.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#VoltageGround.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#VoltageGround.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#VoltageGround.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#VoltageGround.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#VoltageGround.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#VoltageGround.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#VoltageGround.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#VoltageGround.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#VoltageGround.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#VoltageGround.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#VoltageGround.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#VoltageGround.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#VoltageGround.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#VoltageGround.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#VoltageGround.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#VoltageGround.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#VoltageGround.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#VoltageGround.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#VoltageGround.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#VoltageGround.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#VoltageGround.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#VoltageGround.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#VoltageGround.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#VoltageGround.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#VoltageGround.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#VoltageGround.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#VoltageGround.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#VoltageGround.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#VoltageGround.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#VoltageGround.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#VoltageGround.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#VoltageGround.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#VoltageGround.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#VoltageGround.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#VoltageGround.IconName)                                 | IconName property.                                            |
| [`Images`](#VoltageGround.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#VoltageGround.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#VoltageGround.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#VoltageGround.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#VoltageGround.Name)                                         | Name property.                                                |
| [`ObjectId`](#VoltageGround.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#VoltageGround.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#VoltageGround.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#VoltageGround.Parent)                                     | Parent property.                                              |
| [`Properties`](#VoltageGround.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#VoltageGround.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#VoltageGround.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#VoltageGround.State)                                       | State property.                                               |
| [`Suppressed`](#VoltageGround.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#VoltageGround.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#VoltageGround.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`VoltageCoupling`](#VoltageGround.VoltageCoupling)                   | Gets or sets the VoltageCoupling.                             |

<a id="property-detail"></a>

## Property detail

<a id="VoltageGround.AttachedRefs"></a>

### *property* VoltageGround.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Children"></a>

### *property* VoltageGround.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.ClsId"></a>

### *property* VoltageGround.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Comments"></a>

### *property* VoltageGround.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.DataModelObjectCategory"></a>

### *property* VoltageGround.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Figures"></a>

### *property* VoltageGround.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GroupingFolder"></a>

### *property* VoltageGround.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.IconName"></a>

### *property* VoltageGround.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Images"></a>

### *property* VoltageGround.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.ImportableObjectSourceId"></a>

### *property* VoltageGround.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.InternalObject"></a>

### *property* VoltageGround.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Location"></a>

### *property* VoltageGround.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Name"></a>

### *property* VoltageGround.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.ObjectId"></a>

### *property* VoltageGround.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.ObjectState"></a>

### *property* VoltageGround.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.ObjectTags"></a>

### *property* VoltageGround.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Parent"></a>

### *property* VoltageGround.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Properties"></a>

### *property* VoltageGround.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.ReadOnly"></a>

### *property* VoltageGround.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.SharedRefBody"></a>

### *property* VoltageGround.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.State"></a>

### *property* VoltageGround.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Suppressed"></a>

### *property* VoltageGround.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.TransferableObjectId"></a>

### *property* VoltageGround.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.VisibleProperties"></a>

### *property* VoltageGround.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.VoltageCoupling"></a>

### *property* VoltageGround.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](Coupling.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="VoltageGround.Activate"></a>

### VoltageGround.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.AddComment"></a>

### VoltageGround.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.AddFigure"></a>

### VoltageGround.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.AddImage"></a>

### VoltageGround.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Copy"></a>

### VoltageGround.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.CopyTo"></a>

### VoltageGround.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.CreateObjRef"></a>

### VoltageGround.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.CreateParameter"></a>

### VoltageGround.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Cut"></a>

### VoltageGround.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Delete"></a>

### VoltageGround.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Duplicate"></a>

### VoltageGround.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Equals"></a>

### VoltageGround.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetAPIName"></a>

### VoltageGround.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetAllProperties"></a>

### VoltageGround.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetChildren"></a>

### VoltageGround.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### VoltageGround.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetDetailsView"></a>

### VoltageGround.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetEnumName"></a>

### VoltageGround.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetHashCode"></a>

### VoltageGround.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetIconFile"></a>

### VoltageGround.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetLifetimeService"></a>

### VoltageGround.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetObjectData"></a>

### VoltageGround.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetParameter"></a>

### VoltageGround.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetPath"></a>

### VoltageGround.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetPropertyName"></a>

### VoltageGround.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetPropertyValue"></a>

### VoltageGround.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetVisibleProperties"></a>

### VoltageGround.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GetVisiblePropertyNames"></a>

### VoltageGround.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GroupAllSimilarChildren"></a>

### VoltageGround.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.GroupSimilarObjects"></a>

### VoltageGround.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.InitializeLifetimeService"></a>

### VoltageGround.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.IsPropertyEditable"></a>

### VoltageGround.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VoltageGround.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.IsPropertyVisible"></a>

### VoltageGround.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### VoltageGround.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.Paste"></a>

### VoltageGround.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.PromoteToNamedSelection"></a>

### VoltageGround.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.PropertyByAPIName"></a>

### VoltageGround.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.PropertyById"></a>

### VoltageGround.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.PropertyByName"></a>

### VoltageGround.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.RemoveFromGroup"></a>

### VoltageGround.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="VoltageGround.RemoveParameter"></a>

### VoltageGround.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

