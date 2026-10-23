# `HeatFlow`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow(internalObject: Any)

<a id="HeatFlow"></a>

### *class* HeatFlow(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a HeatFlow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#HeatFlow.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#HeatFlow.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#HeatFlow.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#HeatFlow.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#HeatFlow.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#HeatFlow.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#HeatFlow.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#HeatFlow.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#HeatFlow.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#HeatFlow.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#HeatFlow.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#HeatFlow.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#HeatFlow.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#HeatFlow.GetActivateAtLoadStep)                   | Gets whether the heat flow is active at the specified load step.                            |
| [`GetAllProperties`](#HeatFlow.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#HeatFlow.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#HeatFlow.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#HeatFlow.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#HeatFlow.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#HeatFlow.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#HeatFlow.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#HeatFlow.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#HeatFlow.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#HeatFlow.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#HeatFlow.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#HeatFlow.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#HeatFlow.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#HeatFlow.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#HeatFlow.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#HeatFlow.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#HeatFlow.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#HeatFlow.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#HeatFlow.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#HeatFlow.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#HeatFlow.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#HeatFlow.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#HeatFlow.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#HeatFlow.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#HeatFlow.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#HeatFlow.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#HeatFlow.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#HeatFlow.SetActivateAtLoadStep)                   | Sets whether the heat flow is active at the specified load step.                            |
| [`SetComponentActivateAtLoadStep`](#HeatFlow.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#HeatFlow.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#HeatFlow.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#HeatFlow.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#HeatFlow.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#HeatFlow.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DefineAs`](#HeatFlow.DefineAs)                                 | Gets or sets the DefineAs.                                    |
| [`Figures`](#HeatFlow.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#HeatFlow.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#HeatFlow.IconName)                                 | IconName property.                                            |
| [`Images`](#HeatFlow.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#HeatFlow.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#HeatFlow.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#HeatFlow.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#HeatFlow.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#HeatFlow.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#HeatFlow.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#HeatFlow.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#HeatFlow.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#HeatFlow.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#HeatFlow.Parent)                                     | Parent property.                                              |
| [`Properties`](#HeatFlow.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HeatFlow.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#HeatFlow.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#HeatFlow.State)                                       | State property.                                               |
| [`Suppressed`](#HeatFlow.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#HeatFlow.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#HeatFlow.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="HeatFlow.AttachedRefs"></a>

### *property* HeatFlow.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Children"></a>

### *property* HeatFlow.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ClsId"></a>

### *property* HeatFlow.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Comments"></a>

### *property* HeatFlow.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.DataModelObjectCategory"></a>

### *property* HeatFlow.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.DefineAs"></a>

### *property* HeatFlow.DefineAs *: [Ansys.Mechanical.DataModel.Enums.LoadVariationType](../../../../Mechanical/DataModel/Enums/LoadVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineAs.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Figures"></a>

### *property* HeatFlow.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GroupingFolder"></a>

### *property* HeatFlow.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.IconName"></a>

### *property* HeatFlow.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Images"></a>

### *property* HeatFlow.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ImportableObjectSourceId"></a>

### *property* HeatFlow.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.InternalObject"></a>

### *property* HeatFlow.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Location"></a>

### *property* HeatFlow.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Magnitude"></a>

### *property* HeatFlow.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Name"></a>

### *property* HeatFlow.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.NumberOfSegments"></a>

### *property* HeatFlow.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ObjectId"></a>

### *property* HeatFlow.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ObjectState"></a>

### *property* HeatFlow.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ObjectTags"></a>

### *property* HeatFlow.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Parent"></a>

### *property* HeatFlow.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Properties"></a>

### *property* HeatFlow.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.ReadOnly"></a>

### *property* HeatFlow.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SharedRefBody"></a>

### *property* HeatFlow.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.State"></a>

### *property* HeatFlow.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Suppressed"></a>

### *property* HeatFlow.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.TransferableObjectId"></a>

### *property* HeatFlow.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.VisibleProperties"></a>

### *property* HeatFlow.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HeatFlow.Activate"></a>

### HeatFlow.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddComment"></a>

### HeatFlow.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddFigure"></a>

### HeatFlow.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.AddImage"></a>

### HeatFlow.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Copy"></a>

### HeatFlow.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.CopyTo"></a>

### HeatFlow.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.CreateObjRef"></a>

### HeatFlow.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.CreateParameter"></a>

### HeatFlow.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Cut"></a>

### HeatFlow.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Delete"></a>

### HeatFlow.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Duplicate"></a>

### HeatFlow.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Equals"></a>

### HeatFlow.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetAPIName"></a>

### HeatFlow.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetActivateAtLoadStep"></a>

### HeatFlow.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the heat flow is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetAllProperties"></a>

### HeatFlow.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetChildren"></a>

### HeatFlow.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### HeatFlow.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetComponentActivateAtLoadStep"></a>

### HeatFlow.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetDetailsView"></a>

### HeatFlow.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetEnumName"></a>

### HeatFlow.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetHashCode"></a>

### HeatFlow.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetIconFile"></a>

### HeatFlow.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetLifetimeService"></a>

### HeatFlow.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetObjectData"></a>

### HeatFlow.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetParameter"></a>

### HeatFlow.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetPath"></a>

### HeatFlow.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetPropertyName"></a>

### HeatFlow.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetPropertyValue"></a>

### HeatFlow.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetVisibleProperties"></a>

### HeatFlow.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GetVisiblePropertyNames"></a>

### HeatFlow.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GroupAllSimilarChildren"></a>

### HeatFlow.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.GroupSimilarObjects"></a>

### HeatFlow.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.InitializeLifetimeService"></a>

### HeatFlow.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.IsPropertyEditable"></a>

### HeatFlow.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HeatFlow.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.IsPropertyVisible"></a>

### HeatFlow.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### HeatFlow.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.Paste"></a>

### HeatFlow.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PromoteToNamedSelection"></a>

### HeatFlow.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PropertyByAPIName"></a>

### HeatFlow.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PropertyById"></a>

### HeatFlow.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.PropertyByName"></a>

### HeatFlow.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.RemoveFromGroup"></a>

### HeatFlow.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.RemoveParameter"></a>

### HeatFlow.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SetActivateAtLoadStep"></a>

### HeatFlow.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the heat flow is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HeatFlow.SetComponentActivateAtLoadStep"></a>

### HeatFlow.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

