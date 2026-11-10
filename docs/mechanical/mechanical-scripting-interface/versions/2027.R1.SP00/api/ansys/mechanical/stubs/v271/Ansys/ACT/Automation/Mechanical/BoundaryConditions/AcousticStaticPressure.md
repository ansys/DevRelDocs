# `AcousticStaticPressure`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticStaticPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticStaticPressure(internalObject: Any)

<a id="AcousticStaticPressure"></a>

### *class* AcousticStaticPressure(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a AcousticStaticPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#AcousticStaticPressure.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#AcousticStaticPressure.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#AcousticStaticPressure.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#AcousticStaticPressure.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#AcousticStaticPressure.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#AcousticStaticPressure.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#AcousticStaticPressure.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#AcousticStaticPressure.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#AcousticStaticPressure.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#AcousticStaticPressure.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#AcousticStaticPressure.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#AcousticStaticPressure.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#AcousticStaticPressure.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#AcousticStaticPressure.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#AcousticStaticPressure.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#AcousticStaticPressure.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#AcousticStaticPressure.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#AcousticStaticPressure.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#AcousticStaticPressure.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#AcousticStaticPressure.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#AcousticStaticPressure.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#AcousticStaticPressure.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#AcousticStaticPressure.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#AcousticStaticPressure.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#AcousticStaticPressure.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#AcousticStaticPressure.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#AcousticStaticPressure.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#AcousticStaticPressure.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#AcousticStaticPressure.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#AcousticStaticPressure.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#AcousticStaticPressure.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#AcousticStaticPressure.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#AcousticStaticPressure.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#AcousticStaticPressure.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#AcousticStaticPressure.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#AcousticStaticPressure.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#AcousticStaticPressure.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#AcousticStaticPressure.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#AcousticStaticPressure.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#AcousticStaticPressure.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#AcousticStaticPressure.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#AcousticStaticPressure.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#AcousticStaticPressure.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticStaticPressure.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#AcousticStaticPressure.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#AcousticStaticPressure.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#AcousticStaticPressure.IconName)                                 | IconName property.                                            |
| [`Images`](#AcousticStaticPressure.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#AcousticStaticPressure.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#AcousticStaticPressure.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticStaticPressure.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#AcousticStaticPressure.Magnitude)                               | Gets or sets the Magnitude.                                   |
| [`Name`](#AcousticStaticPressure.Name)                                         | Name property.                                                |
| [`ObjectId`](#AcousticStaticPressure.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#AcousticStaticPressure.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#AcousticStaticPressure.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#AcousticStaticPressure.Parent)                                     | Parent property.                                              |
| [`Properties`](#AcousticStaticPressure.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticStaticPressure.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticStaticPressure.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#AcousticStaticPressure.State)                                       | State property.                                               |
| [`Suppressed`](#AcousticStaticPressure.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#AcousticStaticPressure.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#AcousticStaticPressure.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticStaticPressure.AttachedRefs"></a>

### *property* AcousticStaticPressure.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Children"></a>

### *property* AcousticStaticPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ClsId"></a>

### *property* AcousticStaticPressure.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Comments"></a>

### *property* AcousticStaticPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.DataModelObjectCategory"></a>

### *property* AcousticStaticPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Figures"></a>

### *property* AcousticStaticPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GroupingFolder"></a>

### *property* AcousticStaticPressure.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.IconName"></a>

### *property* AcousticStaticPressure.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Images"></a>

### *property* AcousticStaticPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ImportableObjectSourceId"></a>

### *property* AcousticStaticPressure.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.InternalObject"></a>

### *property* AcousticStaticPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Location"></a>

### *property* AcousticStaticPressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Magnitude"></a>

### *property* AcousticStaticPressure.Magnitude *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Name"></a>

### *property* AcousticStaticPressure.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ObjectId"></a>

### *property* AcousticStaticPressure.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ObjectState"></a>

### *property* AcousticStaticPressure.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ObjectTags"></a>

### *property* AcousticStaticPressure.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Parent"></a>

### *property* AcousticStaticPressure.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Properties"></a>

### *property* AcousticStaticPressure.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.ReadOnly"></a>

### *property* AcousticStaticPressure.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.SharedRefBody"></a>

### *property* AcousticStaticPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.State"></a>

### *property* AcousticStaticPressure.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Suppressed"></a>

### *property* AcousticStaticPressure.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.TransferableObjectId"></a>

### *property* AcousticStaticPressure.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.VisibleProperties"></a>

### *property* AcousticStaticPressure.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticStaticPressure.Activate"></a>

### AcousticStaticPressure.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddComment"></a>

### AcousticStaticPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddFigure"></a>

### AcousticStaticPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.AddImage"></a>

### AcousticStaticPressure.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Copy"></a>

### AcousticStaticPressure.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.CopyTo"></a>

### AcousticStaticPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.CreateObjRef"></a>

### AcousticStaticPressure.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.CreateParameter"></a>

### AcousticStaticPressure.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Cut"></a>

### AcousticStaticPressure.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Delete"></a>

### AcousticStaticPressure.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Duplicate"></a>

### AcousticStaticPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Equals"></a>

### AcousticStaticPressure.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetAPIName"></a>

### AcousticStaticPressure.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetAllProperties"></a>

### AcousticStaticPressure.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetChildren"></a>

### AcousticStaticPressure.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### AcousticStaticPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetDetailsView"></a>

### AcousticStaticPressure.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetEnumName"></a>

### AcousticStaticPressure.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetHashCode"></a>

### AcousticStaticPressure.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetIconFile"></a>

### AcousticStaticPressure.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetLifetimeService"></a>

### AcousticStaticPressure.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetObjectData"></a>

### AcousticStaticPressure.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetParameter"></a>

### AcousticStaticPressure.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetPath"></a>

### AcousticStaticPressure.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetPropertyName"></a>

### AcousticStaticPressure.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetPropertyValue"></a>

### AcousticStaticPressure.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetVisibleProperties"></a>

### AcousticStaticPressure.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GetVisiblePropertyNames"></a>

### AcousticStaticPressure.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GroupAllSimilarChildren"></a>

### AcousticStaticPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.GroupSimilarObjects"></a>

### AcousticStaticPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.InitializeLifetimeService"></a>

### AcousticStaticPressure.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.IsPropertyEditable"></a>

### AcousticStaticPressure.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticStaticPressure.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.IsPropertyVisible"></a>

### AcousticStaticPressure.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### AcousticStaticPressure.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.Paste"></a>

### AcousticStaticPressure.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PromoteToNamedSelection"></a>

### AcousticStaticPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PropertyByAPIName"></a>

### AcousticStaticPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PropertyById"></a>

### AcousticStaticPressure.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.PropertyByName"></a>

### AcousticStaticPressure.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.RemoveFromGroup"></a>

### AcousticStaticPressure.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="AcousticStaticPressure.RemoveParameter"></a>

### AcousticStaticPressure.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

