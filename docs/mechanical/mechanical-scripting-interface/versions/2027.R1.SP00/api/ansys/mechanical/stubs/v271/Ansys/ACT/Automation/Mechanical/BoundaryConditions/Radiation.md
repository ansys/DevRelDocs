# `Radiation`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Radiation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Radiation(internalObject: Any)

<a id="Radiation"></a>

### *class* Radiation(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Radiation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Radiation.Activate)                                             | Activate the current object.                                                                |
| [`AddComment`](#Radiation.AddComment)                                         | Creates a new child Comment.                                                                |
| [`AddFigure`](#Radiation.AddFigure)                                           | Creates a new child Figure.                                                                 |
| [`AddImage`](#Radiation.AddImage)                                             | Creates a new child Image.                                                                  |
| [`Copy`](#Radiation.Copy)                                                     | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Radiation.CopyTo)                                                 | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Radiation.CreateObjRef)                                     | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Radiation.CreateParameter)                               | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Radiation.Cut)                                                       | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Radiation.Delete)                                                 | Run the Delete action.                                                                      |
| [`Duplicate`](#Radiation.Duplicate)                                           | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Radiation.Equals)                                                 | Equals method.                                                                              |
| [`GetAPIName`](#Radiation.GetAPIName)                                         | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#Radiation.GetActivateAtLoadStep)                   | Gets whether the radiation is active at the specified load step.                            |
| [`GetAllProperties`](#Radiation.GetAllProperties)                             | GetAllProperties method.                                                                    |
| [`GetChildren`](#Radiation.GetChildren)                                       | Gets the list of children, filtered by type.                                                |
| [`GetComponentActivateAtLoadStep`](#Radiation.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                                      |
| [`GetDetailsView`](#Radiation.GetDetailsView)                                 | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Radiation.GetEnumName)                                       | Enum name bound to value                                                                    |
| [`GetHashCode`](#Radiation.GetHashCode)                                       | GetHashCode method.                                                                         |
| [`GetIconFile`](#Radiation.GetIconFile)                                       | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Radiation.GetLifetimeService)                         | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Radiation.GetObjectData)                                   | GetObjectData method.                                                                       |
| [`GetParameter`](#Radiation.GetParameter)                                     | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Radiation.GetPath)                                               | GetPath method.                                                                             |
| [`GetPropertyName`](#Radiation.GetPropertyName)                               | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Radiation.GetPropertyValue)                             | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Radiation.GetVisibleProperties)                     | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Radiation.GetVisiblePropertyNames)               | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Radiation.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Radiation.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Radiation.InitializeLifetimeService)           | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Radiation.IsPropertyEditable)                         | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Radiation.IsPropertyVisible)                           | IsPropertyVisible method.                                                                   |
| [`Paste`](#Radiation.Paste)                                                   | Pastes to the current DataModelObject context.                                              |
| [`PromoteToNamedSelection`](#Radiation.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                                     |
| [`PropertyByAPIName`](#Radiation.PropertyByAPIName)                           | Get a property by its API name.                                                             |
| [`PropertyById`](#Radiation.PropertyById)                                     | PropertyById method.                                                                        |
| [`PropertyByName`](#Radiation.PropertyByName)                                 | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Radiation.RemoveFromGroup)                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Radiation.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#Radiation.SetActivateAtLoadStep)                   | Sets whether the radiation is active at the specified load step.                            |
| [`SetComponentActivateAtLoadStep`](#Radiation.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                                      |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AmbientTemperature`](#Radiation.AmbientTemperature)             | Gets the AmbientTemperature.                                  |
| [`AttachedRefs`](#Radiation.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#Radiation.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Radiation.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Radiation.Comments)                                 | Gets the list of associated comments.                         |
| [`Correlation`](#Radiation.Correlation)                           | Gets or sets the Correlation.                                 |
| [`DataModelObjectCategory`](#Radiation.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`EditDataFor`](#Radiation.EditDataFor)                           | Gets or sets the EditDataFor.                                 |
| [`Emissivity`](#Radiation.Emissivity)                             | Gets or sets the Emissivity.                                  |
| [`Enclosure`](#Radiation.Enclosure)                               | Gets or sets the Enclosure.                                   |
| [`EnclosureType`](#Radiation.EnclosureType)                       | Gets or sets the EnclosureType.                               |
| [`Figures`](#Radiation.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Radiation.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Radiation.IconName)                                 | IconName property.                                            |
| [`Images`](#Radiation.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Radiation.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Radiation.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#Radiation.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#Radiation.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#Radiation.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#Radiation.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Radiation.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Radiation.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Radiation.Parent)                                     | Parent property.                                              |
| [`Properties`](#Radiation.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Radiation.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#Radiation.SharedRefBody)                       | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#Radiation.ShellFace)                               | Gets or sets the ShellFace.                                   |
| [`State`](#Radiation.State)                                       | State property.                                               |
| [`Suppressed`](#Radiation.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#Radiation.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Radiation.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Radiation.AmbientTemperature"></a>

### *property* Radiation.AmbientTemperature *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AmbientTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AttachedRefs"></a>

### *property* Radiation.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Children"></a>

### *property* Radiation.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ClsId"></a>

### *property* Radiation.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Comments"></a>

### *property* Radiation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Correlation"></a>

### *property* Radiation.Correlation *: [Ansys.Mechanical.DataModel.Enums.RadiationType](../../../../Mechanical/DataModel/Enums/RadiationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RadiationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Correlation.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.DataModelObjectCategory"></a>

### *property* Radiation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.EditDataFor"></a>

### *property* Radiation.EditDataFor *: [Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection](../../../../Mechanical/DataModel/Enums/ConvectionTableSelection.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EditDataFor.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Emissivity"></a>

### *property* Radiation.Emissivity *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Emissivity.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Enclosure"></a>

### *property* Radiation.Enclosure *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Enclosure.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.EnclosureType"></a>

### *property* Radiation.EnclosureType *: [Ansys.Mechanical.DataModel.Enums.EnclosureType](../../../../Mechanical/DataModel/Enums/EnclosureType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.EnclosureType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnclosureType.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Figures"></a>

### *property* Radiation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GroupingFolder"></a>

### *property* Radiation.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.IconName"></a>

### *property* Radiation.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Images"></a>

### *property* Radiation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ImportableObjectSourceId"></a>

### *property* Radiation.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.InternalObject"></a>

### *property* Radiation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Location"></a>

### *property* Radiation.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Name"></a>

### *property* Radiation.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.NumberOfSegments"></a>

### *property* Radiation.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ObjectId"></a>

### *property* Radiation.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ObjectState"></a>

### *property* Radiation.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ObjectTags"></a>

### *property* Radiation.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Parent"></a>

### *property* Radiation.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Properties"></a>

### *property* Radiation.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ReadOnly"></a>

### *property* Radiation.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SharedRefBody"></a>

### *property* Radiation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.ShellFace"></a>

### *property* Radiation.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.State"></a>

### *property* Radiation.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Suppressed"></a>

### *property* Radiation.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.TransferableObjectId"></a>

### *property* Radiation.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.VisibleProperties"></a>

### *property* Radiation.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Radiation.Activate"></a>

### Radiation.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddComment"></a>

### Radiation.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddFigure"></a>

### Radiation.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.AddImage"></a>

### Radiation.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Copy"></a>

### Radiation.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.CopyTo"></a>

### Radiation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.CreateObjRef"></a>

### Radiation.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.CreateParameter"></a>

### Radiation.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Cut"></a>

### Radiation.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Delete"></a>

### Radiation.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Duplicate"></a>

### Radiation.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Equals"></a>

### Radiation.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetAPIName"></a>

### Radiation.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetActivateAtLoadStep"></a>

### Radiation.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the radiation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetAllProperties"></a>

### Radiation.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetChildren"></a>

### Radiation.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Radiation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetComponentActivateAtLoadStep"></a>

### Radiation.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetDetailsView"></a>

### Radiation.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetEnumName"></a>

### Radiation.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetHashCode"></a>

### Radiation.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetIconFile"></a>

### Radiation.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetLifetimeService"></a>

### Radiation.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetObjectData"></a>

### Radiation.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetParameter"></a>

### Radiation.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetPath"></a>

### Radiation.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetPropertyName"></a>

### Radiation.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetPropertyValue"></a>

### Radiation.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetVisibleProperties"></a>

### Radiation.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GetVisiblePropertyNames"></a>

### Radiation.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GroupAllSimilarChildren"></a>

### Radiation.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.GroupSimilarObjects"></a>

### Radiation.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.InitializeLifetimeService"></a>

### Radiation.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.IsPropertyEditable"></a>

### Radiation.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Radiation.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.IsPropertyVisible"></a>

### Radiation.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Radiation.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.Paste"></a>

### Radiation.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PromoteToNamedSelection"></a>

### Radiation.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PropertyByAPIName"></a>

### Radiation.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PropertyById"></a>

### Radiation.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.PropertyByName"></a>

### Radiation.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.RemoveFromGroup"></a>

### Radiation.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.RemoveParameter"></a>

### Radiation.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SetActivateAtLoadStep"></a>

### Radiation.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the radiation is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Radiation.SetComponentActivateAtLoadStep"></a>

### Radiation.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/builtins/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

