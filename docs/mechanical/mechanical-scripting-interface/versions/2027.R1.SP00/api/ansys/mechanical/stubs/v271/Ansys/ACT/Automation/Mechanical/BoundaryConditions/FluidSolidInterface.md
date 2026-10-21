# `FluidSolidInterface`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface(internalObject: Any)

<a id="FluidSolidInterface"></a>

### *class* FluidSolidInterface(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FluidSolidInterface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FluidSolidInterface.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FluidSolidInterface.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#FluidSolidInterface.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FluidSolidInterface.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FluidSolidInterface.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FluidSolidInterface.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FluidSolidInterface.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FluidSolidInterface.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FluidSolidInterface.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FluidSolidInterface.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FluidSolidInterface.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FluidSolidInterface.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#FluidSolidInterface.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FluidSolidInterface.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FluidSolidInterface.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FluidSolidInterface.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FluidSolidInterface.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FluidSolidInterface.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FluidSolidInterface.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FluidSolidInterface.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FluidSolidInterface.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FluidSolidInterface.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FluidSolidInterface.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FluidSolidInterface.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FluidSolidInterface.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FluidSolidInterface.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FluidSolidInterface.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FluidSolidInterface.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FluidSolidInterface.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FluidSolidInterface.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FluidSolidInterface.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FluidSolidInterface.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FluidSolidInterface.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#FluidSolidInterface.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#FluidSolidInterface.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FluidSolidInterface.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FluidSolidInterface.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FluidSolidInterface.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FluidSolidInterface.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#FluidSolidInterface.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#FluidSolidInterface.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#FluidSolidInterface.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#FluidSolidInterface.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FluidSolidInterface.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`ExportResults`](#FluidSolidInterface.ExportResults)                       | Gets or sets the ExportResults.                               |
| [`Figures`](#FluidSolidInterface.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#FluidSolidInterface.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#FluidSolidInterface.IconName)                                 | IconName property.                                            |
| [`Images`](#FluidSolidInterface.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#FluidSolidInterface.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InterfaceNumber`](#FluidSolidInterface.InterfaceNumber)                   | Gets or sets the InterfaceNumber.                             |
| [`InternalObject`](#FluidSolidInterface.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#FluidSolidInterface.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#FluidSolidInterface.Name)                                         | Name property.                                                |
| [`ObjectId`](#FluidSolidInterface.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#FluidSolidInterface.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#FluidSolidInterface.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#FluidSolidInterface.Parent)                                     | Parent property.                                              |
| [`Properties`](#FluidSolidInterface.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FluidSolidInterface.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#FluidSolidInterface.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#FluidSolidInterface.State)                                       | State property.                                               |
| [`Suppressed`](#FluidSolidInterface.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#FluidSolidInterface.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#FluidSolidInterface.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FluidSolidInterface.AttachedRefs"></a>

### *property* FluidSolidInterface.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Children"></a>

### *property* FluidSolidInterface.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ClsId"></a>

### *property* FluidSolidInterface.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Comments"></a>

### *property* FluidSolidInterface.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.DataModelObjectCategory"></a>

### *property* FluidSolidInterface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ExportResults"></a>

### *property* FluidSolidInterface.ExportResults *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExportResults.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Figures"></a>

### *property* FluidSolidInterface.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GroupingFolder"></a>

### *property* FluidSolidInterface.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.IconName"></a>

### *property* FluidSolidInterface.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Images"></a>

### *property* FluidSolidInterface.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ImportableObjectSourceId"></a>

### *property* FluidSolidInterface.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.InterfaceNumber"></a>

### *property* FluidSolidInterface.InterfaceNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InterfaceNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.InternalObject"></a>

### *property* FluidSolidInterface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Location"></a>

### *property* FluidSolidInterface.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Name"></a>

### *property* FluidSolidInterface.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ObjectId"></a>

### *property* FluidSolidInterface.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ObjectState"></a>

### *property* FluidSolidInterface.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ObjectTags"></a>

### *property* FluidSolidInterface.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Parent"></a>

### *property* FluidSolidInterface.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Properties"></a>

### *property* FluidSolidInterface.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.ReadOnly"></a>

### *property* FluidSolidInterface.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.SharedRefBody"></a>

### *property* FluidSolidInterface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.State"></a>

### *property* FluidSolidInterface.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Suppressed"></a>

### *property* FluidSolidInterface.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.TransferableObjectId"></a>

### *property* FluidSolidInterface.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.VisibleProperties"></a>

### *property* FluidSolidInterface.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidSolidInterface.Activate"></a>

### FluidSolidInterface.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddComment"></a>

### FluidSolidInterface.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddFigure"></a>

### FluidSolidInterface.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.AddImage"></a>

### FluidSolidInterface.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Copy"></a>

### FluidSolidInterface.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.CopyTo"></a>

### FluidSolidInterface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.CreateObjRef"></a>

### FluidSolidInterface.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.CreateParameter"></a>

### FluidSolidInterface.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Cut"></a>

### FluidSolidInterface.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Delete"></a>

### FluidSolidInterface.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Duplicate"></a>

### FluidSolidInterface.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Equals"></a>

### FluidSolidInterface.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetAPIName"></a>

### FluidSolidInterface.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetAllProperties"></a>

### FluidSolidInterface.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetChildren"></a>

### FluidSolidInterface.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FluidSolidInterface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetDetailsView"></a>

### FluidSolidInterface.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetEnumName"></a>

### FluidSolidInterface.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetHashCode"></a>

### FluidSolidInterface.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetIconFile"></a>

### FluidSolidInterface.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetLifetimeService"></a>

### FluidSolidInterface.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetObjectData"></a>

### FluidSolidInterface.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetParameter"></a>

### FluidSolidInterface.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetPath"></a>

### FluidSolidInterface.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetPropertyName"></a>

### FluidSolidInterface.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetPropertyValue"></a>

### FluidSolidInterface.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetVisibleProperties"></a>

### FluidSolidInterface.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GetVisiblePropertyNames"></a>

### FluidSolidInterface.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GroupAllSimilarChildren"></a>

### FluidSolidInterface.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.GroupSimilarObjects"></a>

### FluidSolidInterface.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.InitializeLifetimeService"></a>

### FluidSolidInterface.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.IsPropertyEditable"></a>

### FluidSolidInterface.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FluidSolidInterface.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.IsPropertyVisible"></a>

### FluidSolidInterface.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FluidSolidInterface.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.Paste"></a>

### FluidSolidInterface.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PromoteToNamedSelection"></a>

### FluidSolidInterface.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PropertyByAPIName"></a>

### FluidSolidInterface.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PropertyById"></a>

### FluidSolidInterface.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.PropertyByName"></a>

### FluidSolidInterface.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.RemoveFromGroup"></a>

### FluidSolidInterface.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FluidSolidInterface.RemoveParameter"></a>

### FluidSolidInterface.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

