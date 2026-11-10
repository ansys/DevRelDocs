# `InternalHeatGeneration`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.InternalHeatGeneration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.InternalHeatGeneration(internalObject: Any)

<a id="InternalHeatGeneration"></a>

### *class* InternalHeatGeneration(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a InternalHeatGeneration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#InternalHeatGeneration.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#InternalHeatGeneration.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#InternalHeatGeneration.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#InternalHeatGeneration.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#InternalHeatGeneration.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#InternalHeatGeneration.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#InternalHeatGeneration.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#InternalHeatGeneration.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#InternalHeatGeneration.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#InternalHeatGeneration.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#InternalHeatGeneration.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#InternalHeatGeneration.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#InternalHeatGeneration.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#InternalHeatGeneration.GetActivateAtLoadStep)         | Gets whether the internal heat generation is active at the specified load step.             |
| [`GetAllProperties`](#InternalHeatGeneration.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#InternalHeatGeneration.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#InternalHeatGeneration.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#InternalHeatGeneration.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#InternalHeatGeneration.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#InternalHeatGeneration.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#InternalHeatGeneration.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#InternalHeatGeneration.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#InternalHeatGeneration.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#InternalHeatGeneration.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#InternalHeatGeneration.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#InternalHeatGeneration.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#InternalHeatGeneration.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#InternalHeatGeneration.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#InternalHeatGeneration.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#InternalHeatGeneration.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#InternalHeatGeneration.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#InternalHeatGeneration.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#InternalHeatGeneration.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#InternalHeatGeneration.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#InternalHeatGeneration.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#InternalHeatGeneration.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#InternalHeatGeneration.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#InternalHeatGeneration.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#InternalHeatGeneration.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#InternalHeatGeneration.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#InternalHeatGeneration.SetActivateAtLoadStep)         | Sets whether the internal heat generation is active at the specified load step.             |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#InternalHeatGeneration.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#InternalHeatGeneration.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#InternalHeatGeneration.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#InternalHeatGeneration.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#InternalHeatGeneration.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#InternalHeatGeneration.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#InternalHeatGeneration.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#InternalHeatGeneration.IconName)                                 | IconName property.                                            |
| [`Images`](#InternalHeatGeneration.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#InternalHeatGeneration.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#InternalHeatGeneration.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#InternalHeatGeneration.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#InternalHeatGeneration.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#InternalHeatGeneration.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#InternalHeatGeneration.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#InternalHeatGeneration.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#InternalHeatGeneration.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#InternalHeatGeneration.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#InternalHeatGeneration.Parent)                                     | Parent property.                                              |
| [`Properties`](#InternalHeatGeneration.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#InternalHeatGeneration.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#InternalHeatGeneration.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#InternalHeatGeneration.State)                                       | State property.                                               |
| [`Suppressed`](#InternalHeatGeneration.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#InternalHeatGeneration.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#InternalHeatGeneration.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InternalHeatGeneration.AttachedRefs"></a>

### *property* InternalHeatGeneration.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Children"></a>

### *property* InternalHeatGeneration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ClsId"></a>

### *property* InternalHeatGeneration.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Comments"></a>

### *property* InternalHeatGeneration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.DataModelObjectCategory"></a>

### *property* InternalHeatGeneration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Figures"></a>

### *property* InternalHeatGeneration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GroupingFolder"></a>

### *property* InternalHeatGeneration.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.IconName"></a>

### *property* InternalHeatGeneration.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Images"></a>

### *property* InternalHeatGeneration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ImportableObjectSourceId"></a>

### *property* InternalHeatGeneration.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.InternalObject"></a>

### *property* InternalHeatGeneration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Location"></a>

### *property* InternalHeatGeneration.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Magnitude"></a>

### *property* InternalHeatGeneration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Name"></a>

### *property* InternalHeatGeneration.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.NumberOfSegments"></a>

### *property* InternalHeatGeneration.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ObjectId"></a>

### *property* InternalHeatGeneration.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ObjectState"></a>

### *property* InternalHeatGeneration.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ObjectTags"></a>

### *property* InternalHeatGeneration.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Parent"></a>

### *property* InternalHeatGeneration.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Properties"></a>

### *property* InternalHeatGeneration.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ReadOnly"></a>

### *property* InternalHeatGeneration.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.SharedRefBody"></a>

### *property* InternalHeatGeneration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.State"></a>

### *property* InternalHeatGeneration.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Suppressed"></a>

### *property* InternalHeatGeneration.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.TransferableObjectId"></a>

### *property* InternalHeatGeneration.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.VisibleProperties"></a>

### *property* InternalHeatGeneration.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InternalHeatGeneration.Activate"></a>

### InternalHeatGeneration.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddComment"></a>

### InternalHeatGeneration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddFigure"></a>

### InternalHeatGeneration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddImage"></a>

### InternalHeatGeneration.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Copy"></a>

### InternalHeatGeneration.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.CopyTo"></a>

### InternalHeatGeneration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.CreateObjRef"></a>

### InternalHeatGeneration.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.CreateParameter"></a>

### InternalHeatGeneration.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Cut"></a>

### InternalHeatGeneration.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Delete"></a>

### InternalHeatGeneration.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Duplicate"></a>

### InternalHeatGeneration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Equals"></a>

### InternalHeatGeneration.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetAPIName"></a>

### InternalHeatGeneration.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetActivateAtLoadStep"></a>

### InternalHeatGeneration.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the internal heat generation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetAllProperties"></a>

### InternalHeatGeneration.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetChildren"></a>

### InternalHeatGeneration.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### InternalHeatGeneration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetDetailsView"></a>

### InternalHeatGeneration.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetEnumName"></a>

### InternalHeatGeneration.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetHashCode"></a>

### InternalHeatGeneration.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetIconFile"></a>

### InternalHeatGeneration.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetLifetimeService"></a>

### InternalHeatGeneration.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetObjectData"></a>

### InternalHeatGeneration.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetParameter"></a>

### InternalHeatGeneration.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetPath"></a>

### InternalHeatGeneration.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetPropertyName"></a>

### InternalHeatGeneration.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetPropertyValue"></a>

### InternalHeatGeneration.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetVisibleProperties"></a>

### InternalHeatGeneration.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetVisiblePropertyNames"></a>

### InternalHeatGeneration.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GroupAllSimilarChildren"></a>

### InternalHeatGeneration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GroupSimilarObjects"></a>

### InternalHeatGeneration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.InitializeLifetimeService"></a>

### InternalHeatGeneration.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.IsPropertyEditable"></a>

### InternalHeatGeneration.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### InternalHeatGeneration.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.IsPropertyVisible"></a>

### InternalHeatGeneration.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### InternalHeatGeneration.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Paste"></a>

### InternalHeatGeneration.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PromoteToNamedSelection"></a>

### InternalHeatGeneration.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PropertyByAPIName"></a>

### InternalHeatGeneration.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PropertyById"></a>

### InternalHeatGeneration.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PropertyByName"></a>

### InternalHeatGeneration.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.RemoveFromGroup"></a>

### InternalHeatGeneration.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.RemoveParameter"></a>

### InternalHeatGeneration.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.SetActivateAtLoadStep"></a>

### InternalHeatGeneration.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the internal heat generation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

