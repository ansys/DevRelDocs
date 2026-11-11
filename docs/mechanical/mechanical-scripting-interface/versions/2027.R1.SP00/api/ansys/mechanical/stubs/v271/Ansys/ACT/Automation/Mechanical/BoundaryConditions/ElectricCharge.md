# `ElectricCharge`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElectricCharge"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElectricCharge(internalObject: Any)

<a id="ElectricCharge"></a>

### *class* ElectricCharge(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ElectricCharge.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ElectricCharge.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ElectricCharge.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ElectricCharge.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ElectricCharge.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ElectricCharge.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ElectricCharge.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ElectricCharge.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ElectricCharge.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ElectricCharge.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ElectricCharge.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ElectricCharge.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ElectricCharge.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ElectricCharge.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ElectricCharge.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ElectricCharge.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ElectricCharge.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ElectricCharge.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ElectricCharge.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ElectricCharge.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ElectricCharge.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ElectricCharge.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ElectricCharge.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ElectricCharge.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ElectricCharge.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ElectricCharge.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ElectricCharge.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ElectricCharge.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ElectricCharge.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ElectricCharge.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ElectricCharge.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ElectricCharge.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ElectricCharge.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ElectricCharge.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#ElectricCharge.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#ElectricCharge.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ElectricCharge.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ElectricCharge.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ElectricCharge.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ElectricCharge.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#ElectricCharge.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#ElectricCharge.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#ElectricCharge.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#ElectricCharge.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ElectricCharge.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#ElectricCharge.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#ElectricCharge.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#ElectricCharge.IconName)                                 | IconName property.                                            |
| [`Images`](#ElectricCharge.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#ElectricCharge.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#ElectricCharge.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#ElectricCharge.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#ElectricCharge.Magnitude)                               | Gets or sets the Magnitude.                                   |
| [`Name`](#ElectricCharge.Name)                                         | Name property.                                                |
| [`ObjectId`](#ElectricCharge.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#ElectricCharge.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#ElectricCharge.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#ElectricCharge.Parent)                                     | Parent property.                                              |
| [`Properties`](#ElectricCharge.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ElectricCharge.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#ElectricCharge.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#ElectricCharge.State)                                       | State property.                                               |
| [`Suppressed`](#ElectricCharge.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#ElectricCharge.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#ElectricCharge.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`VoltageCoupling`](#ElectricCharge.VoltageCoupling)                   | Gets or sets the VoltageCoupling.                             |

<a id="property-detail"></a>

## Property detail

<a id="ElectricCharge.AttachedRefs"></a>

### *property* ElectricCharge.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Children"></a>

### *property* ElectricCharge.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.ClsId"></a>

### *property* ElectricCharge.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Comments"></a>

### *property* ElectricCharge.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.DataModelObjectCategory"></a>

### *property* ElectricCharge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Figures"></a>

### *property* ElectricCharge.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GroupingFolder"></a>

### *property* ElectricCharge.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.IconName"></a>

### *property* ElectricCharge.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Images"></a>

### *property* ElectricCharge.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.ImportableObjectSourceId"></a>

### *property* ElectricCharge.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.InternalObject"></a>

### *property* ElectricCharge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Location"></a>

### *property* ElectricCharge.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Magnitude"></a>

### *property* ElectricCharge.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Name"></a>

### *property* ElectricCharge.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.ObjectId"></a>

### *property* ElectricCharge.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.ObjectState"></a>

### *property* ElectricCharge.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.ObjectTags"></a>

### *property* ElectricCharge.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Parent"></a>

### *property* ElectricCharge.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Properties"></a>

### *property* ElectricCharge.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.ReadOnly"></a>

### *property* ElectricCharge.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.SharedRefBody"></a>

### *property* ElectricCharge.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.State"></a>

### *property* ElectricCharge.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Suppressed"></a>

### *property* ElectricCharge.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.TransferableObjectId"></a>

### *property* ElectricCharge.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.VisibleProperties"></a>

### *property* ElectricCharge.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.VoltageCoupling"></a>

### *property* ElectricCharge.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](Coupling.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElectricCharge.Activate"></a>

### ElectricCharge.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.AddComment"></a>

### ElectricCharge.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.AddFigure"></a>

### ElectricCharge.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.AddImage"></a>

### ElectricCharge.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Copy"></a>

### ElectricCharge.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.CopyTo"></a>

### ElectricCharge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.CreateObjRef"></a>

### ElectricCharge.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.CreateParameter"></a>

### ElectricCharge.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Cut"></a>

### ElectricCharge.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Delete"></a>

### ElectricCharge.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Duplicate"></a>

### ElectricCharge.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Equals"></a>

### ElectricCharge.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetAPIName"></a>

### ElectricCharge.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetAllProperties"></a>

### ElectricCharge.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetChildren"></a>

### ElectricCharge.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ElectricCharge.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetDetailsView"></a>

### ElectricCharge.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetEnumName"></a>

### ElectricCharge.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetHashCode"></a>

### ElectricCharge.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetIconFile"></a>

### ElectricCharge.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetLifetimeService"></a>

### ElectricCharge.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetObjectData"></a>

### ElectricCharge.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetParameter"></a>

### ElectricCharge.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetPath"></a>

### ElectricCharge.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetPropertyName"></a>

### ElectricCharge.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetPropertyValue"></a>

### ElectricCharge.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetVisibleProperties"></a>

### ElectricCharge.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GetVisiblePropertyNames"></a>

### ElectricCharge.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GroupAllSimilarChildren"></a>

### ElectricCharge.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.GroupSimilarObjects"></a>

### ElectricCharge.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.InitializeLifetimeService"></a>

### ElectricCharge.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.IsPropertyEditable"></a>

### ElectricCharge.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElectricCharge.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.IsPropertyVisible"></a>

### ElectricCharge.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ElectricCharge.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.Paste"></a>

### ElectricCharge.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.PromoteToNamedSelection"></a>

### ElectricCharge.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.PropertyByAPIName"></a>

### ElectricCharge.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.PropertyById"></a>

### ElectricCharge.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.PropertyByName"></a>

### ElectricCharge.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.RemoveFromGroup"></a>

### ElectricCharge.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ElectricCharge.RemoveParameter"></a>

### ElectricCharge.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

