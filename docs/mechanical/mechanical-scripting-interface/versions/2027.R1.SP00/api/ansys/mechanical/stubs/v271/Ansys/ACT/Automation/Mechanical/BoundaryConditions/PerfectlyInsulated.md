# `PerfectlyInsulated`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PerfectlyInsulated"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PerfectlyInsulated(internalObject: Any)

<a id="PerfectlyInsulated"></a>

### *class* PerfectlyInsulated(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a PerfectlyInsulated.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#PerfectlyInsulated.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#PerfectlyInsulated.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#PerfectlyInsulated.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#PerfectlyInsulated.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#PerfectlyInsulated.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#PerfectlyInsulated.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#PerfectlyInsulated.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#PerfectlyInsulated.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#PerfectlyInsulated.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#PerfectlyInsulated.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#PerfectlyInsulated.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#PerfectlyInsulated.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#PerfectlyInsulated.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#PerfectlyInsulated.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#PerfectlyInsulated.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#PerfectlyInsulated.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#PerfectlyInsulated.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#PerfectlyInsulated.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#PerfectlyInsulated.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#PerfectlyInsulated.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#PerfectlyInsulated.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#PerfectlyInsulated.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#PerfectlyInsulated.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#PerfectlyInsulated.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#PerfectlyInsulated.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#PerfectlyInsulated.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#PerfectlyInsulated.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#PerfectlyInsulated.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#PerfectlyInsulated.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#PerfectlyInsulated.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#PerfectlyInsulated.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#PerfectlyInsulated.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#PerfectlyInsulated.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#PerfectlyInsulated.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#PerfectlyInsulated.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#PerfectlyInsulated.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#PerfectlyInsulated.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#PerfectlyInsulated.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#PerfectlyInsulated.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#PerfectlyInsulated.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#PerfectlyInsulated.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#PerfectlyInsulated.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#PerfectlyInsulated.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PerfectlyInsulated.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DefineAs`](#PerfectlyInsulated.DefineAs)                                 | Gets or sets the DefineAs.                                    |
| [`Figures`](#PerfectlyInsulated.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#PerfectlyInsulated.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#PerfectlyInsulated.IconName)                                 | IconName property.                                            |
| [`Images`](#PerfectlyInsulated.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#PerfectlyInsulated.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#PerfectlyInsulated.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#PerfectlyInsulated.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#PerfectlyInsulated.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#PerfectlyInsulated.Name)                                         | Name property.                                                |
| [`ObjectId`](#PerfectlyInsulated.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#PerfectlyInsulated.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#PerfectlyInsulated.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#PerfectlyInsulated.Parent)                                     | Parent property.                                              |
| [`Properties`](#PerfectlyInsulated.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PerfectlyInsulated.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#PerfectlyInsulated.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#PerfectlyInsulated.State)                                       | State property.                                               |
| [`Suppressed`](#PerfectlyInsulated.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#PerfectlyInsulated.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#PerfectlyInsulated.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PerfectlyInsulated.AttachedRefs"></a>

### *property* PerfectlyInsulated.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Children"></a>

### *property* PerfectlyInsulated.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.ClsId"></a>

### *property* PerfectlyInsulated.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Comments"></a>

### *property* PerfectlyInsulated.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.DataModelObjectCategory"></a>

### *property* PerfectlyInsulated.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.DefineAs"></a>

### *property* PerfectlyInsulated.DefineAs *: [Ansys.Mechanical.DataModel.Enums.LoadVariationType](../../../../Mechanical/DataModel/Enums/LoadVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineAs.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Figures"></a>

### *property* PerfectlyInsulated.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GroupingFolder"></a>

### *property* PerfectlyInsulated.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.IconName"></a>

### *property* PerfectlyInsulated.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Images"></a>

### *property* PerfectlyInsulated.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.ImportableObjectSourceId"></a>

### *property* PerfectlyInsulated.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.InternalObject"></a>

### *property* PerfectlyInsulated.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Location"></a>

### *property* PerfectlyInsulated.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Magnitude"></a>

### *property* PerfectlyInsulated.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Name"></a>

### *property* PerfectlyInsulated.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.ObjectId"></a>

### *property* PerfectlyInsulated.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.ObjectState"></a>

### *property* PerfectlyInsulated.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.ObjectTags"></a>

### *property* PerfectlyInsulated.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Parent"></a>

### *property* PerfectlyInsulated.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Properties"></a>

### *property* PerfectlyInsulated.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.ReadOnly"></a>

### *property* PerfectlyInsulated.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.SharedRefBody"></a>

### *property* PerfectlyInsulated.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.State"></a>

### *property* PerfectlyInsulated.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Suppressed"></a>

### *property* PerfectlyInsulated.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.TransferableObjectId"></a>

### *property* PerfectlyInsulated.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.VisibleProperties"></a>

### *property* PerfectlyInsulated.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PerfectlyInsulated.Activate"></a>

### PerfectlyInsulated.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.AddComment"></a>

### PerfectlyInsulated.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.AddFigure"></a>

### PerfectlyInsulated.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.AddImage"></a>

### PerfectlyInsulated.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Copy"></a>

### PerfectlyInsulated.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.CopyTo"></a>

### PerfectlyInsulated.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.CreateObjRef"></a>

### PerfectlyInsulated.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.CreateParameter"></a>

### PerfectlyInsulated.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Cut"></a>

### PerfectlyInsulated.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Delete"></a>

### PerfectlyInsulated.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Duplicate"></a>

### PerfectlyInsulated.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Equals"></a>

### PerfectlyInsulated.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetAPIName"></a>

### PerfectlyInsulated.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetAllProperties"></a>

### PerfectlyInsulated.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetChildren"></a>

### PerfectlyInsulated.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### PerfectlyInsulated.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetDetailsView"></a>

### PerfectlyInsulated.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetEnumName"></a>

### PerfectlyInsulated.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetHashCode"></a>

### PerfectlyInsulated.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetIconFile"></a>

### PerfectlyInsulated.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetLifetimeService"></a>

### PerfectlyInsulated.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetObjectData"></a>

### PerfectlyInsulated.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetParameter"></a>

### PerfectlyInsulated.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetPath"></a>

### PerfectlyInsulated.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetPropertyName"></a>

### PerfectlyInsulated.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetPropertyValue"></a>

### PerfectlyInsulated.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetVisibleProperties"></a>

### PerfectlyInsulated.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GetVisiblePropertyNames"></a>

### PerfectlyInsulated.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GroupAllSimilarChildren"></a>

### PerfectlyInsulated.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.GroupSimilarObjects"></a>

### PerfectlyInsulated.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.InitializeLifetimeService"></a>

### PerfectlyInsulated.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.IsPropertyEditable"></a>

### PerfectlyInsulated.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PerfectlyInsulated.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.IsPropertyVisible"></a>

### PerfectlyInsulated.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### PerfectlyInsulated.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.Paste"></a>

### PerfectlyInsulated.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.PromoteToNamedSelection"></a>

### PerfectlyInsulated.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.PropertyByAPIName"></a>

### PerfectlyInsulated.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.PropertyById"></a>

### PerfectlyInsulated.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.PropertyByName"></a>

### PerfectlyInsulated.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.RemoveFromGroup"></a>

### PerfectlyInsulated.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="PerfectlyInsulated.RemoveParameter"></a>

### PerfectlyInsulated.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

