# `RotationalAcceleration`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalAcceleration(internalObject: Any)

<a id="RotationalAcceleration"></a>

### *class* RotationalAcceleration(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RotationalAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RotationalAcceleration.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RotationalAcceleration.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RotationalAcceleration.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RotationalAcceleration.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#RotationalAcceleration.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RotationalAcceleration.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RotationalAcceleration.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RotationalAcceleration.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RotationalAcceleration.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RotationalAcceleration.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RotationalAcceleration.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RotationalAcceleration.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RotationalAcceleration.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetActivateAtLoadStep`](#RotationalAcceleration.GetActivateAtLoadStep)         | Gets whether the rotational acceleration is active at the specified load step.              |
| [`GetAllProperties`](#RotationalAcceleration.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RotationalAcceleration.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RotationalAcceleration.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RotationalAcceleration.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RotationalAcceleration.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RotationalAcceleration.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RotationalAcceleration.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RotationalAcceleration.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RotationalAcceleration.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RotationalAcceleration.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RotationalAcceleration.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RotationalAcceleration.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RotationalAcceleration.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RotationalAcceleration.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RotationalAcceleration.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RotationalAcceleration.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RotationalAcceleration.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RotationalAcceleration.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RotationalAcceleration.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RotationalAcceleration.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#RotationalAcceleration.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RotationalAcceleration.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RotationalAcceleration.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RotationalAcceleration.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RotationalAcceleration.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetActivateAtLoadStep`](#RotationalAcceleration.SetActivateAtLoadStep)         | Sets whether the rotational acceleration is active at the specified load step.              |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#RotationalAcceleration.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Axis`](#RotationalAcceleration.Axis)                                         | Gets or sets the Axis.                                        |
| [`Children`](#RotationalAcceleration.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#RotationalAcceleration.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#RotationalAcceleration.Comments)                                 | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#CoordinateSystem)                  | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#RotationalAcceleration.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`DefineBy`](#RotationalAcceleration.DefineBy)                                 | Gets or sets the DefineBy.                                    |
| [`Figures`](#RotationalAcceleration.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#RotationalAcceleration.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#RotationalAcceleration.IconName)                                 | IconName property.                                            |
| [`Images`](#RotationalAcceleration.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#RotationalAcceleration.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`IndependentVariable`](#RotationalAcceleration.IndependentVariable)           | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#RotationalAcceleration.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#RotationalAcceleration.Location)                                 | Gets or sets the Location.                                    |
| [`Magnitude`](#RotationalAcceleration.Magnitude)                               | Gets the Magnitude.                                           |
| [`Name`](#RotationalAcceleration.Name)                                         | Name property.                                                |
| [`NumberOfSegments`](#RotationalAcceleration.NumberOfSegments)                 | Gets or sets the NumberOfSegments.                            |
| [`ObjectId`](#RotationalAcceleration.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#RotationalAcceleration.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#RotationalAcceleration.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#RotationalAcceleration.Parent)                                     | Parent property.                                              |
| [`Properties`](#RotationalAcceleration.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#RotationalAcceleration.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#RotationalAcceleration.State)                                       | State property.                                               |
| [`Suppressed`](#RotationalAcceleration.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#RotationalAcceleration.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#RotationalAcceleration.VisibleProperties)               | Gets the list of properties that are visible for this object. |
| [`XComponent`](#RotationalAcceleration.XComponent)                             | Gets the XComponent.                                          |
| [`XCoordinate`](#RotationalAcceleration.XCoordinate)                           | Gets or sets the XCoordinate.                                 |
| [`YComponent`](#RotationalAcceleration.YComponent)                             | Gets the YComponent.                                          |
| [`YCoordinate`](#RotationalAcceleration.YCoordinate)                           | Gets or sets the YCoordinate.                                 |
| [`ZComponent`](#RotationalAcceleration.ZComponent)                             | Gets the ZComponent.                                          |
| [`ZCoordinate`](#RotationalAcceleration.ZCoordinate)                           | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="RotationalAcceleration.AttachedRefs"></a>

### *property* RotationalAcceleration.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Axis"></a>

### *property* RotationalAcceleration.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Children"></a>

### *property* RotationalAcceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ClsId"></a>

### *property* RotationalAcceleration.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Comments"></a>

### *property* RotationalAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.CoordinateSystem"></a>

### *property* RotationalAcceleration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.DataModelObjectCategory"></a>

### *property* RotationalAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.DefineBy"></a>

### *property* RotationalAcceleration.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Figures"></a>

### *property* RotationalAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GroupingFolder"></a>

### *property* RotationalAcceleration.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.IconName"></a>

### *property* RotationalAcceleration.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Images"></a>

### *property* RotationalAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ImportableObjectSourceId"></a>

### *property* RotationalAcceleration.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.IndependentVariable"></a>

### *property* RotationalAcceleration.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.InternalObject"></a>

### *property* RotationalAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Location"></a>

### *property* RotationalAcceleration.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Magnitude"></a>

### *property* RotationalAcceleration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Name"></a>

### *property* RotationalAcceleration.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.NumberOfSegments"></a>

### *property* RotationalAcceleration.NumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ObjectId"></a>

### *property* RotationalAcceleration.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ObjectState"></a>

### *property* RotationalAcceleration.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ObjectTags"></a>

### *property* RotationalAcceleration.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Parent"></a>

### *property* RotationalAcceleration.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Properties"></a>

### *property* RotationalAcceleration.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ReadOnly"></a>

### *property* RotationalAcceleration.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.State"></a>

### *property* RotationalAcceleration.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Suppressed"></a>

### *property* RotationalAcceleration.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.TransferableObjectId"></a>

### *property* RotationalAcceleration.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.VisibleProperties"></a>

### *property* RotationalAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.XComponent"></a>

### *property* RotationalAcceleration.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.XCoordinate"></a>

### *property* RotationalAcceleration.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.YComponent"></a>

### *property* RotationalAcceleration.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.YCoordinate"></a>

### *property* RotationalAcceleration.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ZComponent"></a>

### *property* RotationalAcceleration.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ZCoordinate"></a>

### *property* RotationalAcceleration.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotationalAcceleration.Activate"></a>

### RotationalAcceleration.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.AddComment"></a>

### RotationalAcceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.AddFigure"></a>

### RotationalAcceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.AddImage"></a>

### RotationalAcceleration.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Copy"></a>

### RotationalAcceleration.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.CopyTo"></a>

### RotationalAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.CreateObjRef"></a>

### RotationalAcceleration.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.CreateParameter"></a>

### RotationalAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Cut"></a>

### RotationalAcceleration.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Delete"></a>

### RotationalAcceleration.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Duplicate"></a>

### RotationalAcceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Equals"></a>

### RotationalAcceleration.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetAPIName"></a>

### RotationalAcceleration.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetActivateAtLoadStep"></a>

### RotationalAcceleration.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the rotational acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetAllProperties"></a>

### RotationalAcceleration.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetChildren"></a>

### RotationalAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RotationalAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetDetailsView"></a>

### RotationalAcceleration.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetEnumName"></a>

### RotationalAcceleration.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetHashCode"></a>

### RotationalAcceleration.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetIconFile"></a>

### RotationalAcceleration.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetLifetimeService"></a>

### RotationalAcceleration.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetObjectData"></a>

### RotationalAcceleration.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetParameter"></a>

### RotationalAcceleration.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetPath"></a>

### RotationalAcceleration.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetPropertyName"></a>

### RotationalAcceleration.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetPropertyValue"></a>

### RotationalAcceleration.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetVisibleProperties"></a>

### RotationalAcceleration.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetVisiblePropertyNames"></a>

### RotationalAcceleration.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GroupAllSimilarChildren"></a>

### RotationalAcceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GroupSimilarObjects"></a>

### RotationalAcceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.InitializeLifetimeService"></a>

### RotationalAcceleration.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.IsPropertyEditable"></a>

### RotationalAcceleration.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotationalAcceleration.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.IsPropertyVisible"></a>

### RotationalAcceleration.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RotationalAcceleration.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Paste"></a>

### RotationalAcceleration.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.PropertyByAPIName"></a>

### RotationalAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.PropertyById"></a>

### RotationalAcceleration.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.PropertyByName"></a>

### RotationalAcceleration.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.RemoveFromGroup"></a>

### RotationalAcceleration.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.RemoveParameter"></a>

### RotationalAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.SetActivateAtLoadStep"></a>

### RotationalAcceleration.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/builtins/functions.html#int), bActive: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets whether the rotational acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

