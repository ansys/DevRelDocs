# `MassFlowRate`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.MassFlowRate"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.MassFlowRate(internalObject: Any)

<a id="MassFlowRate"></a>

### *class* MassFlowRate(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MassFlowRate.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MassFlowRate.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MassFlowRate.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MassFlowRate.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MassFlowRate.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MassFlowRate.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MassFlowRate.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MassFlowRate.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MassFlowRate.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MassFlowRate.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MassFlowRate.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MassFlowRate.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MassFlowRate.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#MassFlowRate.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MassFlowRate.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MassFlowRate.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MassFlowRate.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MassFlowRate.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MassFlowRate.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MassFlowRate.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MassFlowRate.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MassFlowRate.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MassFlowRate.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MassFlowRate.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MassFlowRate.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MassFlowRate.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MassFlowRate.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MassFlowRate.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MassFlowRate.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MassFlowRate.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MassFlowRate.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MassFlowRate.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MassFlowRate.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MassFlowRate.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#MassFlowRate.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#MassFlowRate.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MassFlowRate.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MassFlowRate.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MassFlowRate.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MassFlowRate.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MassFlowRate.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#MassFlowRate.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#MassFlowRate.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#MassFlowRate.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MassFlowRate.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#MassFlowRate.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MassFlowRate.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#MassFlowRate.IconName)                                 | IconName property.                                            |
| [`Images`](#MassFlowRate.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#MassFlowRate.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#MassFlowRate.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#MassFlowRate.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#MassFlowRate.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#MassFlowRate.Name)                                         | Name property.                                                |
| [`ObjectId`](#MassFlowRate.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#MassFlowRate.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#MassFlowRate.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#MassFlowRate.Parent)                                     | Parent property.                                              |
| [`Properties`](#MassFlowRate.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#MassFlowRate.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#MassFlowRate.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#MassFlowRate.State)                                       | State property.                                               |
| [`Suppressed`](#MassFlowRate.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#MassFlowRate.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#MassFlowRate.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MassFlowRate.AttachedRefs"></a>

### *property* MassFlowRate.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Children"></a>

### *property* MassFlowRate.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.ClsId"></a>

### *property* MassFlowRate.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Comments"></a>

### *property* MassFlowRate.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.DataModelObjectCategory"></a>

### *property* MassFlowRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Figures"></a>

### *property* MassFlowRate.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GroupingFolder"></a>

### *property* MassFlowRate.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.IconName"></a>

### *property* MassFlowRate.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Images"></a>

### *property* MassFlowRate.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.ImportableObjectSourceId"></a>

### *property* MassFlowRate.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.InternalObject"></a>

### *property* MassFlowRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Location"></a>

### *property* MassFlowRate.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Magnitude"></a>

### *property* MassFlowRate.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Name"></a>

### *property* MassFlowRate.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.ObjectId"></a>

### *property* MassFlowRate.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.ObjectState"></a>

### *property* MassFlowRate.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.ObjectTags"></a>

### *property* MassFlowRate.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Parent"></a>

### *property* MassFlowRate.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Properties"></a>

### *property* MassFlowRate.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.ReadOnly"></a>

### *property* MassFlowRate.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.SharedRefBody"></a>

### *property* MassFlowRate.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.State"></a>

### *property* MassFlowRate.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Suppressed"></a>

### *property* MassFlowRate.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.TransferableObjectId"></a>

### *property* MassFlowRate.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.VisibleProperties"></a>

### *property* MassFlowRate.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MassFlowRate.Activate"></a>

### MassFlowRate.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.AddComment"></a>

### MassFlowRate.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.AddFigure"></a>

### MassFlowRate.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.AddImage"></a>

### MassFlowRate.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Copy"></a>

### MassFlowRate.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.CopyTo"></a>

### MassFlowRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.CreateObjRef"></a>

### MassFlowRate.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.CreateParameter"></a>

### MassFlowRate.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Cut"></a>

### MassFlowRate.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Delete"></a>

### MassFlowRate.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Duplicate"></a>

### MassFlowRate.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Equals"></a>

### MassFlowRate.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetAPIName"></a>

### MassFlowRate.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetAllProperties"></a>

### MassFlowRate.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetChildren"></a>

### MassFlowRate.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MassFlowRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetDetailsView"></a>

### MassFlowRate.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetEnumName"></a>

### MassFlowRate.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetHashCode"></a>

### MassFlowRate.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetIconFile"></a>

### MassFlowRate.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetLifetimeService"></a>

### MassFlowRate.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetObjectData"></a>

### MassFlowRate.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetParameter"></a>

### MassFlowRate.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetPath"></a>

### MassFlowRate.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetPropertyName"></a>

### MassFlowRate.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetPropertyValue"></a>

### MassFlowRate.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetVisibleProperties"></a>

### MassFlowRate.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GetVisiblePropertyNames"></a>

### MassFlowRate.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GroupAllSimilarChildren"></a>

### MassFlowRate.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.GroupSimilarObjects"></a>

### MassFlowRate.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.InitializeLifetimeService"></a>

### MassFlowRate.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.IsPropertyEditable"></a>

### MassFlowRate.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MassFlowRate.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.IsPropertyVisible"></a>

### MassFlowRate.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MassFlowRate.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.Paste"></a>

### MassFlowRate.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.PromoteToNamedSelection"></a>

### MassFlowRate.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.PropertyByAPIName"></a>

### MassFlowRate.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.PropertyById"></a>

### MassFlowRate.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.PropertyByName"></a>

### MassFlowRate.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.RemoveFromGroup"></a>

### MassFlowRate.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MassFlowRate.RemoveParameter"></a>

### MassFlowRate.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

