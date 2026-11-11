# `RSVelocity`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSVelocity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSVelocity(internalObject: Any)

<a id="RSVelocity"></a>

### *class* RSVelocity(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RSVelocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RSVelocity.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RSVelocity.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RSVelocity.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RSVelocity.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#RSVelocity.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RSVelocity.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RSVelocity.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RSVelocity.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RSVelocity.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RSVelocity.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RSVelocity.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RSVelocity.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RSVelocity.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#RSVelocity.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RSVelocity.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RSVelocity.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RSVelocity.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RSVelocity.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RSVelocity.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RSVelocity.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RSVelocity.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RSVelocity.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RSVelocity.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RSVelocity.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RSVelocity.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RSVelocity.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RSVelocity.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RSVelocity.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RSVelocity.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RSVelocity.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RSVelocity.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RSVelocity.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RSVelocity.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#RSVelocity.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RSVelocity.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RSVelocity.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RSVelocity.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RSVelocity.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#RSVelocity.AttachedRefs)                                 | AttachedRefs property.                                        |
| [`BoundaryCondition`](#RSVelocity.BoundaryCondition)                       | Gets or sets the BoundaryCondition.                           |
| [`Children`](#RSVelocity.Children)                                         | Gets the list of children.                                    |
| [`ClsId`](#RSVelocity.ClsId)                                               | ClsId property.                                               |
| [`Comments`](#RSVelocity.Comments)                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RSVelocity.DataModelObjectCategory)           | Gets the current DataModelObject's category.                  |
| [`Direction`](#RSVelocity.Direction)                                       | Gets or sets the Direction.                                   |
| [`Figures`](#RSVelocity.Figures)                                           | Gets the list of associated figures.                          |
| [`GroupingFolder`](#RSVelocity.GroupingFolder)                             | GroupingFolder property.                                      |
| [`IconName`](#RSVelocity.IconName)                                         | IconName property.                                            |
| [`Images`](#RSVelocity.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#RSVelocity.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#RSVelocity.LoadData)                                         | Gets or sets the LoadData.                                    |
| [`MissingMassEffect`](#RSVelocity.MissingMassEffect)                       | Gets or sets the MissingMassEffect.                           |
| [`MissingMassEffectZPA`](#RSVelocity.MissingMassEffectZPA)                 | Gets or sets the MissingMassEffectZPA.                        |
| [`Name`](#RSVelocity.Name)                                                 | Name property.                                                |
| [`ObjectId`](#RSVelocity.ObjectId)                                         | ObjectId property.                                            |
| [`ObjectState`](#RSVelocity.ObjectState)                                   | ObjectState property.                                         |
| [`ObjectTags`](#RSVelocity.ObjectTags)                                     | ObjectTags property.                                          |
| [`Parent`](#RSVelocity.Parent)                                             | Parent property.                                              |
| [`Properties`](#RSVelocity.Properties)                                     | Gets the list of properties for this object.                  |
| [`RigidResponseEffect`](#RSVelocity.RigidResponseEffect)                   | Gets or sets the RigidResponseEffect.                         |
| [`RigidResponseEffectFreqBegin`](#RSVelocity.RigidResponseEffectFreqBegin) | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSVelocity.RigidResponseEffectFreqEnd)     | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectType`](#RSVelocity.RigidResponseEffectType)           | Gets or sets the RigidResponseEffectType.                     |
| [`RigidResponseEffectZPA`](#RSVelocity.RigidResponseEffectZPA)             | Gets or sets the RigidResponseEffectZPA.                      |
| [`ScaleFactor`](#RSVelocity.ScaleFactor)                                   | Gets or sets the ScaleFactor.                                 |
| [`State`](#RSVelocity.State)                                               | State property.                                               |
| [`Suppressed`](#RSVelocity.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RSVelocity.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RSVelocity.AttachedRefs"></a>

### *property* RSVelocity.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.BoundaryCondition"></a>

### *property* RSVelocity.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Children"></a>

### *property* RSVelocity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.ClsId"></a>

### *property* RSVelocity.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Comments"></a>

### *property* RSVelocity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.DataModelObjectCategory"></a>

### *property* RSVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Direction"></a>

### *property* RSVelocity.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Figures"></a>

### *property* RSVelocity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GroupingFolder"></a>

### *property* RSVelocity.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.IconName"></a>

### *property* RSVelocity.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Images"></a>

### *property* RSVelocity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.InternalObject"></a>

### *property* RSVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.LoadData"></a>

### *property* RSVelocity.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.MissingMassEffect"></a>

### *property* RSVelocity.MissingMassEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.MissingMassEffectZPA"></a>

### *property* RSVelocity.MissingMassEffectZPA *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Name"></a>

### *property* RSVelocity.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.ObjectId"></a>

### *property* RSVelocity.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.ObjectState"></a>

### *property* RSVelocity.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.ObjectTags"></a>

### *property* RSVelocity.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Parent"></a>

### *property* RSVelocity.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Properties"></a>

### *property* RSVelocity.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffect"></a>

### *property* RSVelocity.RigidResponseEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectFreqBegin"></a>

### *property* RSVelocity.RigidResponseEffectFreqBegin *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectFreqEnd"></a>

### *property* RSVelocity.RigidResponseEffectFreqEnd *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectType"></a>

### *property* RSVelocity.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectZPA"></a>

### *property* RSVelocity.RigidResponseEffectZPA *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.ScaleFactor"></a>

### *property* RSVelocity.ScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.State"></a>

### *property* RSVelocity.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Suppressed"></a>

### *property* RSVelocity.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.VisibleProperties"></a>

### *property* RSVelocity.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSVelocity.Activate"></a>

### RSVelocity.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.AddComment"></a>

### RSVelocity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.AddFigure"></a>

### RSVelocity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.AddImage"></a>

### RSVelocity.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Copy"></a>

### RSVelocity.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.CopyTo"></a>

### RSVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.CreateObjRef"></a>

### RSVelocity.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.CreateParameter"></a>

### RSVelocity.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Cut"></a>

### RSVelocity.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Delete"></a>

### RSVelocity.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Duplicate"></a>

### RSVelocity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Equals"></a>

### RSVelocity.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetAPIName"></a>

### RSVelocity.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetAllProperties"></a>

### RSVelocity.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetChildren"></a>

### RSVelocity.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RSVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetDetailsView"></a>

### RSVelocity.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetEnumName"></a>

### RSVelocity.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetHashCode"></a>

### RSVelocity.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetIconFile"></a>

### RSVelocity.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetLifetimeService"></a>

### RSVelocity.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetObjectData"></a>

### RSVelocity.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetParameter"></a>

### RSVelocity.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetPath"></a>

### RSVelocity.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetPropertyName"></a>

### RSVelocity.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetPropertyValue"></a>

### RSVelocity.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetVisibleProperties"></a>

### RSVelocity.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetVisiblePropertyNames"></a>

### RSVelocity.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GroupAllSimilarChildren"></a>

### RSVelocity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GroupSimilarObjects"></a>

### RSVelocity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.InitializeLifetimeService"></a>

### RSVelocity.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.IsPropertyEditable"></a>

### RSVelocity.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RSVelocity.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.IsPropertyVisible"></a>

### RSVelocity.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RSVelocity.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Paste"></a>

### RSVelocity.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.PropertyByAPIName"></a>

### RSVelocity.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.PropertyById"></a>

### RSVelocity.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.PropertyByName"></a>

### RSVelocity.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RemoveFromGroup"></a>

### RSVelocity.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RemoveParameter"></a>

### RSVelocity.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

