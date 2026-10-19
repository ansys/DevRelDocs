# `AcousticAbsorptionElement`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionElement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionElement(internalObject: Any)

<a id="AcousticAbsorptionElement"></a>

### *class* AcousticAbsorptionElement(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticAbsorptionElement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticAbsorptionElement.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticAbsorptionElement.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticAbsorptionElement.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticAbsorptionElement.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticAbsorptionElement.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticAbsorptionElement.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticAbsorptionElement.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticAbsorptionElement.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticAbsorptionElement.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticAbsorptionElement.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticAbsorptionElement.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticAbsorptionElement.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticAbsorptionElement.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticAbsorptionElement.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticAbsorptionElement.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticAbsorptionElement.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticAbsorptionElement.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticAbsorptionElement.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticAbsorptionElement.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticAbsorptionElement.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticAbsorptionElement.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticAbsorptionElement.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticAbsorptionElement.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticAbsorptionElement.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticAbsorptionElement.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticAbsorptionElement.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticAbsorptionElement.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticAbsorptionElement.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticAbsorptionElement.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticAbsorptionElement.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticAbsorptionElement.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticAbsorptionElement.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticAbsorptionElement.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticAbsorptionElement.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticAbsorptionElement.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticAbsorptionElement.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticAbsorptionElement.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticAbsorptionElement.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticAbsorptionElement.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticAbsorptionElement.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticAbsorptionElement.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticAbsorptionElement.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticAbsorptionElement.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticAbsorptionElement.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticAbsorptionElement.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticAbsorptionElement.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticAbsorptionElement.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticAbsorptionElement.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticAbsorptionElement.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticAbsorptionElement.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticAbsorptionElement.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#AcousticAbsorptionElement.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticAbsorptionElement.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticAbsorptionElement.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticAbsorptionElement.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticAbsorptionElement.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticAbsorptionElement.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticAbsorptionElement.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticAbsorptionElement.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticAbsorptionElement.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticAbsorptionElement.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticAbsorptionElement.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticAbsorptionElement.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticAbsorptionElement.AttachedRefs"></a>

### *property* AcousticAbsorptionElement.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Children"></a>

### *property* AcousticAbsorptionElement.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ClsId"></a>

### *property* AcousticAbsorptionElement.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Comments"></a>

### *property* AcousticAbsorptionElement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.DataModelObjectCategory"></a>

### *property* AcousticAbsorptionElement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Figures"></a>

### *property* AcousticAbsorptionElement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GroupingFolder"></a>

### *property* AcousticAbsorptionElement.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.IconName"></a>

### *property* AcousticAbsorptionElement.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Images"></a>

### *property* AcousticAbsorptionElement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ImportableObjectSourceId"></a>

### *property* AcousticAbsorptionElement.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.InternalObject"></a>

### *property* AcousticAbsorptionElement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Location"></a>

### *property* AcousticAbsorptionElement.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Name"></a>

### *property* AcousticAbsorptionElement.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ObjectId"></a>

### *property* AcousticAbsorptionElement.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ObjectState"></a>

### *property* AcousticAbsorptionElement.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ObjectTags"></a>

### *property* AcousticAbsorptionElement.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Parent"></a>

### *property* AcousticAbsorptionElement.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Properties"></a>

### *property* AcousticAbsorptionElement.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.ReadOnly"></a>

### *property* AcousticAbsorptionElement.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.SharedRefBody"></a>

### *property* AcousticAbsorptionElement.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.State"></a>

### *property* AcousticAbsorptionElement.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Suppressed"></a>

### *property* AcousticAbsorptionElement.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.TransferableObjectId"></a>

### *property* AcousticAbsorptionElement.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.VisibleProperties"></a>

### *property* AcousticAbsorptionElement.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticAbsorptionElement.Activate"></a>

### AcousticAbsorptionElement.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddComment"></a>

### AcousticAbsorptionElement.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddFigure"></a>

### AcousticAbsorptionElement.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.AddImage"></a>

### AcousticAbsorptionElement.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Copy"></a>

### AcousticAbsorptionElement.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.CopyTo"></a>

### AcousticAbsorptionElement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.CreateObjRef"></a>

### AcousticAbsorptionElement.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.CreateParameter"></a>

### AcousticAbsorptionElement.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Cut"></a>

### AcousticAbsorptionElement.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Delete"></a>

### AcousticAbsorptionElement.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Duplicate"></a>

### AcousticAbsorptionElement.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Equals"></a>

### AcousticAbsorptionElement.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetAPIName"></a>

### AcousticAbsorptionElement.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetAllProperties"></a>

### AcousticAbsorptionElement.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetChildren"></a>

### AcousticAbsorptionElement.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticAbsorptionElement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetDetailsView"></a>

### AcousticAbsorptionElement.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetEnumName"></a>

### AcousticAbsorptionElement.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetHashCode"></a>

### AcousticAbsorptionElement.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetIconFile"></a>

### AcousticAbsorptionElement.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetLifetimeService"></a>

### AcousticAbsorptionElement.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetObjectData"></a>

### AcousticAbsorptionElement.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetParameter"></a>

### AcousticAbsorptionElement.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetPath"></a>

### AcousticAbsorptionElement.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetPropertyName"></a>

### AcousticAbsorptionElement.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetPropertyValue"></a>

### AcousticAbsorptionElement.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetVisibleProperties"></a>

### AcousticAbsorptionElement.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GetVisiblePropertyNames"></a>

### AcousticAbsorptionElement.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GroupAllSimilarChildren"></a>

### AcousticAbsorptionElement.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.GroupSimilarObjects"></a>

### AcousticAbsorptionElement.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.InitializeLifetimeService"></a>

### AcousticAbsorptionElement.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.IsPropertyEditable"></a>

### AcousticAbsorptionElement.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticAbsorptionElement.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.IsPropertyVisible"></a>

### AcousticAbsorptionElement.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticAbsorptionElement.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.Paste"></a>

### AcousticAbsorptionElement.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PromoteToNamedSelection"></a>

### AcousticAbsorptionElement.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PropertyByAPIName"></a>

### AcousticAbsorptionElement.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PropertyById"></a>

### AcousticAbsorptionElement.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.PropertyByName"></a>

### AcousticAbsorptionElement.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.RemoveFromGroup"></a>

### AcousticAbsorptionElement.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticAbsorptionElement.RemoveParameter"></a>

### AcousticAbsorptionElement.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

