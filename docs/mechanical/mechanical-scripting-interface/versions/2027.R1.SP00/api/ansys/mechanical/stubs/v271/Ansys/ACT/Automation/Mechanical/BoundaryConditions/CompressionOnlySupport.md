# `CompressionOnlySupport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CompressionOnlySupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.CompressionOnlySupport(internalObject: Any)

<a id="CompressionOnlySupport"></a>

### *class* CompressionOnlySupport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CompressionOnlySupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CompressionOnlySupport.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#CompressionOnlySupport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CompressionOnlySupport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CompressionOnlySupport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#CompressionOnlySupport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CompressionOnlySupport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CompressionOnlySupport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CompressionOnlySupport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CompressionOnlySupport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CompressionOnlySupport.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CompressionOnlySupport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CompressionOnlySupport.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CompressionOnlySupport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CompressionOnlySupport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CompressionOnlySupport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CompressionOnlySupport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CompressionOnlySupport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CompressionOnlySupport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CompressionOnlySupport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CompressionOnlySupport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CompressionOnlySupport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CompressionOnlySupport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CompressionOnlySupport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CompressionOnlySupport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CompressionOnlySupport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CompressionOnlySupport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CompressionOnlySupport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CompressionOnlySupport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CompressionOnlySupport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CompressionOnlySupport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CompressionOnlySupport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CompressionOnlySupport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CompressionOnlySupport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#CompressionOnlySupport.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#CompressionOnlySupport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CompressionOnlySupport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CompressionOnlySupport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CompressionOnlySupport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CompressionOnlySupport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CompressionOnlySupport.AttachedRefs)                         | AttachedRefs property.                                        |
| [`AutomaticNormalStiffness`](#CompressionOnlySupport.AutomaticNormalStiffness) | Gets or sets the AutomaticNormalStiffness.                    |
| [`Children`](#CompressionOnlySupport.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#CompressionOnlySupport.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#CompressionOnlySupport.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompressionOnlySupport.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#CompressionOnlySupport.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#CompressionOnlySupport.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#CompressionOnlySupport.IconName)                                 | IconName property.                                            |
| [`Images`](#CompressionOnlySupport.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#CompressionOnlySupport.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#CompressionOnlySupport.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#CompressionOnlySupport.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#CompressionOnlySupport.Name)                                         | Name property.                                                |
| [`NormalStiffnessFactor`](#CompressionOnlySupport.NormalStiffnessFactor)       | Gets or sets the NormalStiffnessFactor.                       |
| [`ObjectId`](#CompressionOnlySupport.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#CompressionOnlySupport.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#CompressionOnlySupport.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#CompressionOnlySupport.Parent)                                     | Parent property.                                              |
| [`Properties`](#CompressionOnlySupport.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#CompressionOnlySupport.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#CompressionOnlySupport.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#CompressionOnlySupport.State)                                       | State property.                                               |
| [`Suppressed`](#CompressionOnlySupport.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#CompressionOnlySupport.TransferableObjectId)         | TransferableObjectId property.                                |
| [`UpdateStiffness`](#CompressionOnlySupport.UpdateStiffness)                   | Gets or sets the UpdateStiffness.                             |
| [`VisibleProperties`](#CompressionOnlySupport.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompressionOnlySupport.AttachedRefs"></a>

### *property* CompressionOnlySupport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AutomaticNormalStiffness"></a>

### *property* CompressionOnlySupport.AutomaticNormalStiffness *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutomaticNormalStiffness.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Children"></a>

### *property* CompressionOnlySupport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ClsId"></a>

### *property* CompressionOnlySupport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Comments"></a>

### *property* CompressionOnlySupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.DataModelObjectCategory"></a>

### *property* CompressionOnlySupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Figures"></a>

### *property* CompressionOnlySupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GroupingFolder"></a>

### *property* CompressionOnlySupport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.IconName"></a>

### *property* CompressionOnlySupport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Images"></a>

### *property* CompressionOnlySupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ImportableObjectSourceId"></a>

### *property* CompressionOnlySupport.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.InternalObject"></a>

### *property* CompressionOnlySupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Location"></a>

### *property* CompressionOnlySupport.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Name"></a>

### *property* CompressionOnlySupport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.NormalStiffnessFactor"></a>

### *property* CompressionOnlySupport.NormalStiffnessFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NormalStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ObjectId"></a>

### *property* CompressionOnlySupport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ObjectState"></a>

### *property* CompressionOnlySupport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ObjectTags"></a>

### *property* CompressionOnlySupport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Parent"></a>

### *property* CompressionOnlySupport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Properties"></a>

### *property* CompressionOnlySupport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.ReadOnly"></a>

### *property* CompressionOnlySupport.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.SharedRefBody"></a>

### *property* CompressionOnlySupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.State"></a>

### *property* CompressionOnlySupport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Suppressed"></a>

### *property* CompressionOnlySupport.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.TransferableObjectId"></a>

### *property* CompressionOnlySupport.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.UpdateStiffness"></a>

### *property* CompressionOnlySupport.UpdateStiffness *: [Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness](../../../../Mechanical/DataModel/Enums/UpdateContactStiffness.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.UpdateContactStiffness) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UpdateStiffness.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.VisibleProperties"></a>

### *property* CompressionOnlySupport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompressionOnlySupport.Activate"></a>

### CompressionOnlySupport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddComment"></a>

### CompressionOnlySupport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddFigure"></a>

### CompressionOnlySupport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.AddImage"></a>

### CompressionOnlySupport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Copy"></a>

### CompressionOnlySupport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.CopyTo"></a>

### CompressionOnlySupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.CreateObjRef"></a>

### CompressionOnlySupport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.CreateParameter"></a>

### CompressionOnlySupport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Cut"></a>

### CompressionOnlySupport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Delete"></a>

### CompressionOnlySupport.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Duplicate"></a>

### CompressionOnlySupport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Equals"></a>

### CompressionOnlySupport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetAPIName"></a>

### CompressionOnlySupport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetAllProperties"></a>

### CompressionOnlySupport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetChildren"></a>

### CompressionOnlySupport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CompressionOnlySupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetDetailsView"></a>

### CompressionOnlySupport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetEnumName"></a>

### CompressionOnlySupport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetHashCode"></a>

### CompressionOnlySupport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetIconFile"></a>

### CompressionOnlySupport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetLifetimeService"></a>

### CompressionOnlySupport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetObjectData"></a>

### CompressionOnlySupport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetParameter"></a>

### CompressionOnlySupport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetPath"></a>

### CompressionOnlySupport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetPropertyName"></a>

### CompressionOnlySupport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetPropertyValue"></a>

### CompressionOnlySupport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetVisibleProperties"></a>

### CompressionOnlySupport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GetVisiblePropertyNames"></a>

### CompressionOnlySupport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GroupAllSimilarChildren"></a>

### CompressionOnlySupport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.GroupSimilarObjects"></a>

### CompressionOnlySupport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.InitializeLifetimeService"></a>

### CompressionOnlySupport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.IsPropertyEditable"></a>

### CompressionOnlySupport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompressionOnlySupport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.IsPropertyVisible"></a>

### CompressionOnlySupport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CompressionOnlySupport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.Paste"></a>

### CompressionOnlySupport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PromoteToNamedSelection"></a>

### CompressionOnlySupport.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PropertyByAPIName"></a>

### CompressionOnlySupport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PropertyById"></a>

### CompressionOnlySupport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.PropertyByName"></a>

### CompressionOnlySupport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.RemoveFromGroup"></a>

### CompressionOnlySupport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CompressionOnlySupport.RemoveParameter"></a>

### CompressionOnlySupport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

