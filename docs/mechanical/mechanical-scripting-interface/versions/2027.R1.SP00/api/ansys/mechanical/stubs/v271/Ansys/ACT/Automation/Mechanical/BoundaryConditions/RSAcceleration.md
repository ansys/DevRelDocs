# `RSAcceleration`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSAcceleration(internalObject: Any)

<a id="RSAcceleration"></a>

### *class* RSAcceleration(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RSAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RSAcceleration.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RSAcceleration.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RSAcceleration.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RSAcceleration.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#RSAcceleration.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RSAcceleration.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RSAcceleration.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RSAcceleration.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RSAcceleration.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RSAcceleration.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RSAcceleration.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RSAcceleration.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RSAcceleration.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#RSAcceleration.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RSAcceleration.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RSAcceleration.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RSAcceleration.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RSAcceleration.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RSAcceleration.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RSAcceleration.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RSAcceleration.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RSAcceleration.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RSAcceleration.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RSAcceleration.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RSAcceleration.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RSAcceleration.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RSAcceleration.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RSAcceleration.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RSAcceleration.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RSAcceleration.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RSAcceleration.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RSAcceleration.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RSAcceleration.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#RSAcceleration.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RSAcceleration.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RSAcceleration.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RSAcceleration.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RSAcceleration.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#RSAcceleration.AttachedRefs)                                 | AttachedRefs property.                                        |
| [`BoundaryCondition`](#RSAcceleration.BoundaryCondition)                       | Gets or sets the BoundaryCondition.                           |
| [`Children`](#RSAcceleration.Children)                                         | Gets the list of children.                                    |
| [`ClsId`](#RSAcceleration.ClsId)                                               | ClsId property.                                               |
| [`Comments`](#RSAcceleration.Comments)                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RSAcceleration.DataModelObjectCategory)           | Gets the current DataModelObject's category.                  |
| [`Direction`](#RSAcceleration.Direction)                                       | Gets or sets the Direction.                                   |
| [`Figures`](#RSAcceleration.Figures)                                           | Gets the list of associated figures.                          |
| [`GroupingFolder`](#RSAcceleration.GroupingFolder)                             | GroupingFolder property.                                      |
| [`IconName`](#RSAcceleration.IconName)                                         | IconName property.                                            |
| [`Images`](#RSAcceleration.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#RSAcceleration.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#RSAcceleration.LoadData)                                         | Gets or sets the LoadData.                                    |
| [`MissingMassEffect`](#RSAcceleration.MissingMassEffect)                       | Gets or sets the MissingMassEffect.                           |
| [`MissingMassEffectZPA`](#RSAcceleration.MissingMassEffectZPA)                 | Gets or sets the MissingMassEffectZPA.                        |
| [`Name`](#RSAcceleration.Name)                                                 | Name property.                                                |
| [`ObjectId`](#RSAcceleration.ObjectId)                                         | ObjectId property.                                            |
| [`ObjectState`](#RSAcceleration.ObjectState)                                   | ObjectState property.                                         |
| [`ObjectTags`](#RSAcceleration.ObjectTags)                                     | ObjectTags property.                                          |
| [`Parent`](#RSAcceleration.Parent)                                             | Parent property.                                              |
| [`Properties`](#RSAcceleration.Properties)                                     | Gets the list of properties for this object.                  |
| [`RigidResponseEffect`](#RSAcceleration.RigidResponseEffect)                   | Gets or sets the RigidResponseEffect.                         |
| [`RigidResponseEffectFreqBegin`](#RSAcceleration.RigidResponseEffectFreqBegin) | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSAcceleration.RigidResponseEffectFreqEnd)     | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectType`](#RSAcceleration.RigidResponseEffectType)           | Gets or sets the RigidResponseEffectType.                     |
| [`RigidResponseEffectZPA`](#RSAcceleration.RigidResponseEffectZPA)             | Gets or sets the RigidResponseEffectZPA.                      |
| [`ScaleFactor`](#RSAcceleration.ScaleFactor)                                   | Gets or sets the ScaleFactor.                                 |
| [`State`](#RSAcceleration.State)                                               | State property.                                               |
| [`Suppressed`](#RSAcceleration.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RSAcceleration.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RSAcceleration.AttachedRefs"></a>

### *property* RSAcceleration.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.BoundaryCondition"></a>

### *property* RSAcceleration.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Children"></a>

### *property* RSAcceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.ClsId"></a>

### *property* RSAcceleration.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Comments"></a>

### *property* RSAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.DataModelObjectCategory"></a>

### *property* RSAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Direction"></a>

### *property* RSAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Figures"></a>

### *property* RSAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GroupingFolder"></a>

### *property* RSAcceleration.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.IconName"></a>

### *property* RSAcceleration.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Images"></a>

### *property* RSAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.InternalObject"></a>

### *property* RSAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.LoadData"></a>

### *property* RSAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.MissingMassEffect"></a>

### *property* RSAcceleration.MissingMassEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.MissingMassEffectZPA"></a>

### *property* RSAcceleration.MissingMassEffectZPA *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Name"></a>

### *property* RSAcceleration.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.ObjectId"></a>

### *property* RSAcceleration.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.ObjectState"></a>

### *property* RSAcceleration.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.ObjectTags"></a>

### *property* RSAcceleration.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Parent"></a>

### *property* RSAcceleration.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Properties"></a>

### *property* RSAcceleration.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffect"></a>

### *property* RSAcceleration.RigidResponseEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectFreqBegin"></a>

### *property* RSAcceleration.RigidResponseEffectFreqBegin *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectFreqEnd"></a>

### *property* RSAcceleration.RigidResponseEffectFreqEnd *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectType"></a>

### *property* RSAcceleration.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectZPA"></a>

### *property* RSAcceleration.RigidResponseEffectZPA *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.ScaleFactor"></a>

### *property* RSAcceleration.ScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.State"></a>

### *property* RSAcceleration.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Suppressed"></a>

### *property* RSAcceleration.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.VisibleProperties"></a>

### *property* RSAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSAcceleration.Activate"></a>

### RSAcceleration.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.AddComment"></a>

### RSAcceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.AddFigure"></a>

### RSAcceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.AddImage"></a>

### RSAcceleration.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Copy"></a>

### RSAcceleration.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.CopyTo"></a>

### RSAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.CreateObjRef"></a>

### RSAcceleration.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.CreateParameter"></a>

### RSAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Cut"></a>

### RSAcceleration.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Delete"></a>

### RSAcceleration.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Duplicate"></a>

### RSAcceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Equals"></a>

### RSAcceleration.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetAPIName"></a>

### RSAcceleration.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetAllProperties"></a>

### RSAcceleration.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetChildren"></a>

### RSAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RSAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetDetailsView"></a>

### RSAcceleration.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetEnumName"></a>

### RSAcceleration.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetHashCode"></a>

### RSAcceleration.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetIconFile"></a>

### RSAcceleration.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetLifetimeService"></a>

### RSAcceleration.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetObjectData"></a>

### RSAcceleration.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetParameter"></a>

### RSAcceleration.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetPath"></a>

### RSAcceleration.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetPropertyName"></a>

### RSAcceleration.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetPropertyValue"></a>

### RSAcceleration.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetVisibleProperties"></a>

### RSAcceleration.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetVisiblePropertyNames"></a>

### RSAcceleration.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GroupAllSimilarChildren"></a>

### RSAcceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GroupSimilarObjects"></a>

### RSAcceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.InitializeLifetimeService"></a>

### RSAcceleration.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.IsPropertyEditable"></a>

### RSAcceleration.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RSAcceleration.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.IsPropertyVisible"></a>

### RSAcceleration.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RSAcceleration.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Paste"></a>

### RSAcceleration.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.PropertyByAPIName"></a>

### RSAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.PropertyById"></a>

### RSAcceleration.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.PropertyByName"></a>

### RSAcceleration.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RemoveFromGroup"></a>

### RSAcceleration.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RemoveParameter"></a>

### RSAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

