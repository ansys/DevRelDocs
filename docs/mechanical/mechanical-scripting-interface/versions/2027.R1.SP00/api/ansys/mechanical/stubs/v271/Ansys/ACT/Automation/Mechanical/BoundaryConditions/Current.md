# `Current`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current(internalObject: Any)

<a id="Current"></a>

### *class* Current(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Current.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Current.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Current.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Current.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Current.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Current.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Current.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Current.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Current.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Current.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Current.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Current.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Current.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Current.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Current.GetActivateAtLoadStep)         | Gets whether the current is active at the specified load step.                              |
| [`GetAllProperties`](#Current.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Current.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Current.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Current.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Current.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Current.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Current.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Current.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Current.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Current.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Current.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Current.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Current.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Current.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Current.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Current.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Current.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Current.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Current.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Current.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Current.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#Current.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Current.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Current.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Current.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Current.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#Current.SetActivateAtLoadStep)         | Sets whether the current is active at the specified load step.                              |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Current.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#Current.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Current.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Current.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Current.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#Current.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Current.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Current.IconName)                                 | IconName property.                                            |
| [`Images`](#Current.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Current.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Current.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#Current.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#Current.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#Current.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#Current.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#Current.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Current.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Current.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Current.Parent)                                     | Parent property.                                              |
| [`PhaseAngle`](#Current.PhaseAngle)                             | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#Current.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Current.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Current.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#Current.State)                                       | State property.                                               |
| [`Suppressed`](#Current.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#Current.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Current.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Current.AttachedRefs"></a>

### *property* Current.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Current.Children"></a>

### *property* Current.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Current.ClsId"></a>

### *property* Current.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Current.Comments"></a>

### *property* Current.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Current.DataModelObjectCategory"></a>

### *property* Current.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Current.Figures"></a>

### *property* Current.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Current.GroupingFolder"></a>

### *property* Current.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Current.IconName"></a>

### *property* Current.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Current.Images"></a>

### *property* Current.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Current.ImportableObjectSourceId"></a>

### *property* Current.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Current.InternalObject"></a>

### *property* Current.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Current.Location"></a>

### *property* Current.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Current.Magnitude"></a>

### *property* Current.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Current.Name"></a>

### *property* Current.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Current.NumberOfSegments"></a>

### *property* Current.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Current.ObjectId"></a>

### *property* Current.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Current.ObjectState"></a>

### *property* Current.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Current.ObjectTags"></a>

### *property* Current.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Current.Parent"></a>

### *property* Current.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Current.PhaseAngle"></a>

### *property* Current.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Current.Properties"></a>

### *property* Current.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Current.ReadOnly"></a>

### *property* Current.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Current.SharedRefBody"></a>

### *property* Current.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Current.State"></a>

### *property* Current.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Current.Suppressed"></a>

### *property* Current.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Current.TransferableObjectId"></a>

### *property* Current.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Current.VisibleProperties"></a>

### *property* Current.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Current.Activate"></a>

### Current.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Current.AddComment"></a>

### Current.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Current.AddFigure"></a>

### Current.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Current.AddImage"></a>

### Current.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Current.Copy"></a>

### Current.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Current.CopyTo"></a>

### Current.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Current.CreateObjRef"></a>

### Current.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Current.CreateParameter"></a>

### Current.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Current.Cut"></a>

### Current.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Current.Delete"></a>

### Current.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Current.Duplicate"></a>

### Current.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Current.Equals"></a>

### Current.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetAPIName"></a>

### Current.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetActivateAtLoadStep"></a>

### Current.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the current is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetAllProperties"></a>

### Current.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetChildren"></a>

### Current.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Current.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetDetailsView"></a>

### Current.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetEnumName"></a>

### Current.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Current.GetHashCode"></a>

### Current.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetIconFile"></a>

### Current.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetLifetimeService"></a>

### Current.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetObjectData"></a>

### Current.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetParameter"></a>

### Current.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetPath"></a>

### Current.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetPropertyName"></a>

### Current.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetPropertyValue"></a>

### Current.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetVisibleProperties"></a>

### Current.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GetVisiblePropertyNames"></a>

### Current.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Current.GroupAllSimilarChildren"></a>

### Current.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Current.GroupSimilarObjects"></a>

### Current.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Current.InitializeLifetimeService"></a>

### Current.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Current.IsPropertyEditable"></a>

### Current.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Current.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Current.IsPropertyVisible"></a>

### Current.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Current.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Current.Paste"></a>

### Current.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Current.PromoteToNamedSelection"></a>

### Current.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Current.PropertyByAPIName"></a>

### Current.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Current.PropertyById"></a>

### Current.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Current.PropertyByName"></a>

### Current.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Current.RemoveFromGroup"></a>

### Current.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Current.RemoveParameter"></a>

### Current.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Current.SetActivateAtLoadStep"></a>

### Current.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the current is active at the specified load step.

<!-- !! processed by numpydoc !! -->

