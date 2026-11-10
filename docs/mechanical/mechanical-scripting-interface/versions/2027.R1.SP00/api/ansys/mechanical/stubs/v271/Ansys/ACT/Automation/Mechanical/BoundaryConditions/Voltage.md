# `Voltage`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage(internalObject: Any)

<a id="Voltage"></a>

### *class* Voltage(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Voltage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Voltage.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Voltage.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#Voltage.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#Voltage.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#Voltage.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Voltage.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Voltage.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Voltage.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Voltage.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Voltage.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Voltage.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Voltage.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Voltage.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Voltage.GetActivateAtLoadStep)         | Gets whether the voltage is active at the specified load step.                              |
| [`GetAllProperties`](#Voltage.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Voltage.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Voltage.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Voltage.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#Voltage.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Voltage.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Voltage.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Voltage.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Voltage.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Voltage.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Voltage.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Voltage.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Voltage.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Voltage.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Voltage.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Voltage.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Voltage.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Voltage.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Voltage.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Voltage.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Voltage.PromoteToNamedSelection)     | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#Voltage.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Voltage.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Voltage.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Voltage.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Voltage.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#Voltage.SetActivateAtLoadStep)         | Sets whether the voltage is active at the specified load step.                              |

### Properties

| Name | Description |
|-----------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Voltage.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#Voltage.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Voltage.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Voltage.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Voltage.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#Voltage.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Voltage.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Voltage.IconName)                                 | IconName property.                                            |
| [`Images`](#Voltage.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Voltage.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Voltage.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#Voltage.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#Voltage.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#Voltage.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#Voltage.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#Voltage.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Voltage.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Voltage.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Voltage.Parent)                                     | Parent property.                                              |
| [`PhaseAngle`](#Voltage.PhaseAngle)                             | Gets or sets the PhaseAngle.                                  |
| [`Properties`](#Voltage.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Voltage.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Voltage.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`State`](#Voltage.State)                                       | State property.                                               |
| [`Suppressed`](#Voltage.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#Voltage.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Voltage.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`VoltageCoupling`](#Voltage.VoltageCoupling)                   | Gets or sets the VoltageCoupling.                             |

<a id="property-detail"></a>

## Property detail

<a id="Voltage.AttachedRefs"></a>

### *property* Voltage.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Children"></a>

### *property* Voltage.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ClsId"></a>

### *property* Voltage.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Comments"></a>

### *property* Voltage.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.DataModelObjectCategory"></a>

### *property* Voltage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Figures"></a>

### *property* Voltage.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GroupingFolder"></a>

### *property* Voltage.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.IconName"></a>

### *property* Voltage.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Images"></a>

### *property* Voltage.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ImportableObjectSourceId"></a>

### *property* Voltage.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.InternalObject"></a>

### *property* Voltage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Location"></a>

### *property* Voltage.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Magnitude"></a>

### *property* Voltage.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Name"></a>

### *property* Voltage.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.NumberOfSegments"></a>

### *property* Voltage.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ObjectId"></a>

### *property* Voltage.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ObjectState"></a>

### *property* Voltage.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ObjectTags"></a>

### *property* Voltage.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Parent"></a>

### *property* Voltage.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PhaseAngle"></a>

### *property* Voltage.PhaseAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Properties"></a>

### *property* Voltage.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.ReadOnly"></a>

### *property* Voltage.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.SharedRefBody"></a>

### *property* Voltage.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.State"></a>

### *property* Voltage.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Suppressed"></a>

### *property* Voltage.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.TransferableObjectId"></a>

### *property* Voltage.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.VisibleProperties"></a>

### *property* Voltage.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.VoltageCoupling"></a>

### *property* Voltage.VoltageCoupling *: [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](Coupling.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VoltageCoupling.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Voltage.Activate"></a>

### Voltage.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.AddComment"></a>

### Voltage.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.AddFigure"></a>

### Voltage.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.AddImage"></a>

### Voltage.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Copy"></a>

### Voltage.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.CopyTo"></a>

### Voltage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.CreateObjRef"></a>

### Voltage.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.CreateParameter"></a>

### Voltage.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Cut"></a>

### Voltage.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Delete"></a>

### Voltage.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Duplicate"></a>

### Voltage.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Equals"></a>

### Voltage.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetAPIName"></a>

### Voltage.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetActivateAtLoadStep"></a>

### Voltage.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the voltage is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetAllProperties"></a>

### Voltage.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetChildren"></a>

### Voltage.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Voltage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetDetailsView"></a>

### Voltage.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetEnumName"></a>

### Voltage.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetHashCode"></a>

### Voltage.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetIconFile"></a>

### Voltage.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetLifetimeService"></a>

### Voltage.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetObjectData"></a>

### Voltage.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetParameter"></a>

### Voltage.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetPath"></a>

### Voltage.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetPropertyName"></a>

### Voltage.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetPropertyValue"></a>

### Voltage.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetVisibleProperties"></a>

### Voltage.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GetVisiblePropertyNames"></a>

### Voltage.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GroupAllSimilarChildren"></a>

### Voltage.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.GroupSimilarObjects"></a>

### Voltage.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.InitializeLifetimeService"></a>

### Voltage.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.IsPropertyEditable"></a>

### Voltage.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Voltage.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.IsPropertyVisible"></a>

### Voltage.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Voltage.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.Paste"></a>

### Voltage.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PromoteToNamedSelection"></a>

### Voltage.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PropertyByAPIName"></a>

### Voltage.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PropertyById"></a>

### Voltage.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.PropertyByName"></a>

### Voltage.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.RemoveFromGroup"></a>

### Voltage.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.RemoveParameter"></a>

### Voltage.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Voltage.SetActivateAtLoadStep"></a>

### Voltage.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the voltage is active at the specified load step.

<!-- !! processed by numpydoc !! -->

