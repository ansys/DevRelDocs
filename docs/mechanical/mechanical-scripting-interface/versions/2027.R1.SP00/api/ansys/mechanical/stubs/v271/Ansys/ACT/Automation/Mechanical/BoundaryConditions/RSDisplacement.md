# `RSDisplacement`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSDisplacement(internalObject: Any)

<a id="RSDisplacement"></a>

### *class* RSDisplacement(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a RSDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#RSDisplacement.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#RSDisplacement.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#RSDisplacement.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#RSDisplacement.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#RSDisplacement.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#RSDisplacement.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#RSDisplacement.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#RSDisplacement.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#RSDisplacement.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#RSDisplacement.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#RSDisplacement.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#RSDisplacement.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#RSDisplacement.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#RSDisplacement.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#RSDisplacement.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#RSDisplacement.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#RSDisplacement.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#RSDisplacement.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#RSDisplacement.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#RSDisplacement.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#RSDisplacement.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#RSDisplacement.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#RSDisplacement.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#RSDisplacement.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#RSDisplacement.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#RSDisplacement.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#RSDisplacement.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#RSDisplacement.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#RSDisplacement.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#RSDisplacement.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#RSDisplacement.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#RSDisplacement.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#RSDisplacement.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#RSDisplacement.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#RSDisplacement.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#RSDisplacement.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#RSDisplacement.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#RSDisplacement.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#RSDisplacement.AttachedRefs)                                 | AttachedRefs property.                                        |
| [`BoundaryCondition`](#RSDisplacement.BoundaryCondition)                       | Gets or sets the BoundaryCondition.                           |
| [`Children`](#RSDisplacement.Children)                                         | Gets the list of children.                                    |
| [`ClsId`](#RSDisplacement.ClsId)                                               | ClsId property.                                               |
| [`Comments`](#RSDisplacement.Comments)                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RSDisplacement.DataModelObjectCategory)           | Gets the current DataModelObject's category.                  |
| [`Direction`](#RSDisplacement.Direction)                                       | Gets or sets the Direction.                                   |
| [`Figures`](#RSDisplacement.Figures)                                           | Gets the list of associated figures.                          |
| [`GroupingFolder`](#RSDisplacement.GroupingFolder)                             | GroupingFolder property.                                      |
| [`IconName`](#RSDisplacement.IconName)                                         | IconName property.                                            |
| [`Images`](#RSDisplacement.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#RSDisplacement.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#RSDisplacement.LoadData)                                         | Gets or sets the LoadData.                                    |
| [`MissingMassEffect`](#RSDisplacement.MissingMassEffect)                       | Gets or sets the MissingMassEffect.                           |
| [`MissingMassEffectZPA`](#RSDisplacement.MissingMassEffectZPA)                 | Gets or sets the MissingMassEffectZPA.                        |
| [`Name`](#RSDisplacement.Name)                                                 | Name property.                                                |
| [`ObjectId`](#RSDisplacement.ObjectId)                                         | ObjectId property.                                            |
| [`ObjectState`](#RSDisplacement.ObjectState)                                   | ObjectState property.                                         |
| [`ObjectTags`](#RSDisplacement.ObjectTags)                                     | ObjectTags property.                                          |
| [`Parent`](#RSDisplacement.Parent)                                             | Parent property.                                              |
| [`Properties`](#RSDisplacement.Properties)                                     | Gets the list of properties for this object.                  |
| [`RigidResponseEffect`](#RSDisplacement.RigidResponseEffect)                   | Gets or sets the RigidResponseEffect.                         |
| [`RigidResponseEffectFreqBegin`](#RSDisplacement.RigidResponseEffectFreqBegin) | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSDisplacement.RigidResponseEffectFreqEnd)     | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectType`](#RSDisplacement.RigidResponseEffectType)           | Gets or sets the RigidResponseEffectType.                     |
| [`RigidResponseEffectZPA`](#RSDisplacement.RigidResponseEffectZPA)             | Gets or sets the RigidResponseEffectZPA.                      |
| [`ScaleFactor`](#RSDisplacement.ScaleFactor)                                   | Gets or sets the ScaleFactor.                                 |
| [`State`](#RSDisplacement.State)                                               | State property.                                               |
| [`Suppressed`](#RSDisplacement.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RSDisplacement.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RSDisplacement.AttachedRefs"></a>

### *property* RSDisplacement.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.BoundaryCondition"></a>

### *property* RSDisplacement.BoundaryCondition *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Children"></a>

### *property* RSDisplacement.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.ClsId"></a>

### *property* RSDisplacement.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Comments"></a>

### *property* RSDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.DataModelObjectCategory"></a>

### *property* RSDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Direction"></a>

### *property* RSDisplacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Figures"></a>

### *property* RSDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GroupingFolder"></a>

### *property* RSDisplacement.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.IconName"></a>

### *property* RSDisplacement.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Images"></a>

### *property* RSDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.InternalObject"></a>

### *property* RSDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.LoadData"></a>

### *property* RSDisplacement.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.MissingMassEffect"></a>

### *property* RSDisplacement.MissingMassEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.MissingMassEffectZPA"></a>

### *property* RSDisplacement.MissingMassEffectZPA *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Name"></a>

### *property* RSDisplacement.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.ObjectId"></a>

### *property* RSDisplacement.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.ObjectState"></a>

### *property* RSDisplacement.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.ObjectTags"></a>

### *property* RSDisplacement.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Parent"></a>

### *property* RSDisplacement.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Properties"></a>

### *property* RSDisplacement.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffect"></a>

### *property* RSDisplacement.RigidResponseEffect *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectFreqBegin"></a>

### *property* RSDisplacement.RigidResponseEffectFreqBegin *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectFreqEnd"></a>

### *property* RSDisplacement.RigidResponseEffectFreqEnd *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectType"></a>

### *property* RSDisplacement.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectZPA"></a>

### *property* RSDisplacement.RigidResponseEffectZPA *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.ScaleFactor"></a>

### *property* RSDisplacement.ScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.State"></a>

### *property* RSDisplacement.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Suppressed"></a>

### *property* RSDisplacement.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.VisibleProperties"></a>

### *property* RSDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSDisplacement.Activate"></a>

### RSDisplacement.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.AddComment"></a>

### RSDisplacement.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.AddFigure"></a>

### RSDisplacement.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.AddImage"></a>

### RSDisplacement.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Copy"></a>

### RSDisplacement.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.CopyTo"></a>

### RSDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.CreateObjRef"></a>

### RSDisplacement.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.CreateParameter"></a>

### RSDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Cut"></a>

### RSDisplacement.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Delete"></a>

### RSDisplacement.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Duplicate"></a>

### RSDisplacement.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Equals"></a>

### RSDisplacement.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetAPIName"></a>

### RSDisplacement.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetAllProperties"></a>

### RSDisplacement.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetChildren"></a>

### RSDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### RSDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetDetailsView"></a>

### RSDisplacement.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetEnumName"></a>

### RSDisplacement.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetHashCode"></a>

### RSDisplacement.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetIconFile"></a>

### RSDisplacement.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetLifetimeService"></a>

### RSDisplacement.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetObjectData"></a>

### RSDisplacement.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetParameter"></a>

### RSDisplacement.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetPath"></a>

### RSDisplacement.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetPropertyName"></a>

### RSDisplacement.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetPropertyValue"></a>

### RSDisplacement.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetVisibleProperties"></a>

### RSDisplacement.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetVisiblePropertyNames"></a>

### RSDisplacement.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GroupAllSimilarChildren"></a>

### RSDisplacement.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GroupSimilarObjects"></a>

### RSDisplacement.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.InitializeLifetimeService"></a>

### RSDisplacement.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.IsPropertyEditable"></a>

### RSDisplacement.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RSDisplacement.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.IsPropertyVisible"></a>

### RSDisplacement.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### RSDisplacement.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Paste"></a>

### RSDisplacement.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.PropertyByAPIName"></a>

### RSDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.PropertyById"></a>

### RSDisplacement.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.PropertyByName"></a>

### RSDisplacement.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RemoveFromGroup"></a>

### RSDisplacement.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RemoveParameter"></a>

### RSDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

