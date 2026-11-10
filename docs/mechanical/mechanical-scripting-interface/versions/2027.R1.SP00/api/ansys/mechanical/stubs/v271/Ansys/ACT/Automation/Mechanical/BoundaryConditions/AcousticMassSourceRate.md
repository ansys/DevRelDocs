# `AcousticMassSourceRate`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticMassSourceRate"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticMassSourceRate(internalObject: Any)

<a id="AcousticMassSourceRate"></a>

### *class* AcousticMassSourceRate(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticMassSourceRate.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticMassSourceRate.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticMassSourceRate.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticMassSourceRate.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticMassSourceRate.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticMassSourceRate.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticMassSourceRate.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticMassSourceRate.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticMassSourceRate.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticMassSourceRate.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticMassSourceRate.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticMassSourceRate.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticMassSourceRate.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticMassSourceRate.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticMassSourceRate.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticMassSourceRate.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticMassSourceRate.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticMassSourceRate.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticMassSourceRate.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticMassSourceRate.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticMassSourceRate.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticMassSourceRate.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticMassSourceRate.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticMassSourceRate.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticMassSourceRate.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticMassSourceRate.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetQuantityName`](#AcousticMassSourceRate.GetQuantityName)                     | GetQuantityName method.                                                                     |
| [`GetVisibleProperties`](#AcousticMassSourceRate.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticMassSourceRate.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticMassSourceRate.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticMassSourceRate.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticMassSourceRate.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticMassSourceRate.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticMassSourceRate.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticMassSourceRate.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticMassSourceRate.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticMassSourceRate.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticMassSourceRate.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticMassSourceRate.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticMassSourceRate.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticMassSourceRate.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticMassSourceRate.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticMassSourceRate.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticMassSourceRate.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticMassSourceRate.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticMassSourceRate.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticMassSourceRate.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticMassSourceRate.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticMassSourceRate.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticMassSourceRate.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticMassSourceRate.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticMassSourceRate.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticMassSourceRate.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#AcousticMassSourceRate.Magnitude)                               | Gets or sets the Magnitude.                                   |
| [`Name`](#AcousticMassSourceRate.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticMassSourceRate.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticMassSourceRate.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticMassSourceRate.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticMassSourceRate.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticMassSourceRate.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticMassSourceRate.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticMassSourceRate.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticMassSourceRate.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticMassSourceRate.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticMassSourceRate.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticMassSourceRate.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticMassSourceRate.AttachedRefs"></a>

### *property* AcousticMassSourceRate.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Children"></a>

### *property* AcousticMassSourceRate.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.ClsId"></a>

### *property* AcousticMassSourceRate.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Comments"></a>

### *property* AcousticMassSourceRate.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.DataModelObjectCategory"></a>

### *property* AcousticMassSourceRate.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Figures"></a>

### *property* AcousticMassSourceRate.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GroupingFolder"></a>

### *property* AcousticMassSourceRate.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.IconName"></a>

### *property* AcousticMassSourceRate.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Images"></a>

### *property* AcousticMassSourceRate.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.ImportableObjectSourceId"></a>

### *property* AcousticMassSourceRate.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.InternalObject"></a>

### *property* AcousticMassSourceRate.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Location"></a>

### *property* AcousticMassSourceRate.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Magnitude"></a>

### *property* AcousticMassSourceRate.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Name"></a>

### *property* AcousticMassSourceRate.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.ObjectId"></a>

### *property* AcousticMassSourceRate.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.ObjectState"></a>

### *property* AcousticMassSourceRate.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.ObjectTags"></a>

### *property* AcousticMassSourceRate.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Parent"></a>

### *property* AcousticMassSourceRate.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Properties"></a>

### *property* AcousticMassSourceRate.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.ReadOnly"></a>

### *property* AcousticMassSourceRate.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.SharedRefBody"></a>

### *property* AcousticMassSourceRate.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.State"></a>

### *property* AcousticMassSourceRate.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Suppressed"></a>

### *property* AcousticMassSourceRate.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.TransferableObjectId"></a>

### *property* AcousticMassSourceRate.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.VisibleProperties"></a>

### *property* AcousticMassSourceRate.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticMassSourceRate.Activate"></a>

### AcousticMassSourceRate.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.AddComment"></a>

### AcousticMassSourceRate.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.AddFigure"></a>

### AcousticMassSourceRate.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.AddImage"></a>

### AcousticMassSourceRate.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Copy"></a>

### AcousticMassSourceRate.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.CopyTo"></a>

### AcousticMassSourceRate.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.CreateObjRef"></a>

### AcousticMassSourceRate.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.CreateParameter"></a>

### AcousticMassSourceRate.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Cut"></a>

### AcousticMassSourceRate.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Delete"></a>

### AcousticMassSourceRate.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Duplicate"></a>

### AcousticMassSourceRate.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Equals"></a>

### AcousticMassSourceRate.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetAPIName"></a>

### AcousticMassSourceRate.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetAllProperties"></a>

### AcousticMassSourceRate.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetChildren"></a>

### AcousticMassSourceRate.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticMassSourceRate.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetDetailsView"></a>

### AcousticMassSourceRate.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetEnumName"></a>

### AcousticMassSourceRate.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetHashCode"></a>

### AcousticMassSourceRate.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetIconFile"></a>

### AcousticMassSourceRate.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetLifetimeService"></a>

### AcousticMassSourceRate.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetObjectData"></a>

### AcousticMassSourceRate.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetParameter"></a>

### AcousticMassSourceRate.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetPath"></a>

### AcousticMassSourceRate.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetPropertyName"></a>

### AcousticMassSourceRate.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetPropertyValue"></a>

### AcousticMassSourceRate.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetQuantityName"></a>

### AcousticMassSourceRate.GetQuantityName(obj: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetVisibleProperties"></a>

### AcousticMassSourceRate.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GetVisiblePropertyNames"></a>

### AcousticMassSourceRate.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GroupAllSimilarChildren"></a>

### AcousticMassSourceRate.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.GroupSimilarObjects"></a>

### AcousticMassSourceRate.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.InitializeLifetimeService"></a>

### AcousticMassSourceRate.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.IsPropertyEditable"></a>

### AcousticMassSourceRate.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticMassSourceRate.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.IsPropertyVisible"></a>

### AcousticMassSourceRate.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticMassSourceRate.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.Paste"></a>

### AcousticMassSourceRate.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.PromoteToNamedSelection"></a>

### AcousticMassSourceRate.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.PropertyByAPIName"></a>

### AcousticMassSourceRate.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.PropertyById"></a>

### AcousticMassSourceRate.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.PropertyByName"></a>

### AcousticMassSourceRate.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.RemoveFromGroup"></a>

### AcousticMassSourceRate.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticMassSourceRate.RemoveParameter"></a>

### AcousticMassSourceRate.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

