# `RSAcceleration`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RSAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RSAcceleration.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RSAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RSAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RSAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RSAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RSAcceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RSAcceleration.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RSAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#RSAcceleration.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RSAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RSAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RSAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RSAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RSAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RSAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#RSAcceleration.BoundaryCondition)                       | Gets or sets the BoundaryCondition.                           |
| [`Children`](#RSAcceleration.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#RSAcceleration.Comments)                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RSAcceleration.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`Direction`](#RSAcceleration.Direction)                                       | Gets or sets the Direction.                                   |
| [`Figures`](#RSAcceleration.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#RSAcceleration.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#RSAcceleration.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#RSAcceleration.LoadData)                                         | Gets or sets the LoadData.                                    |
| [`MissingMassEffect`](#RSAcceleration.MissingMassEffect)                       | Gets or sets the MissingMassEffect.                           |
| [`MissingMassEffectZPA`](#RSAcceleration.MissingMassEffectZPA)                 | Gets or sets the MissingMassEffectZPA.                        |
| [`Properties`](#RSAcceleration.Properties)                                     | Gets the list of properties for this object.                  |
| [`RigidResponseEffect`](#RSAcceleration.RigidResponseEffect)                   | Gets or sets the RigidResponseEffect.                         |
| [`RigidResponseEffectFreqBegin`](#RSAcceleration.RigidResponseEffectFreqBegin) | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSAcceleration.RigidResponseEffectFreqEnd)     | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectType`](#RSAcceleration.RigidResponseEffectType)           | Gets or sets the RigidResponseEffectType.                     |
| [`RigidResponseEffectZPA`](#RSAcceleration.RigidResponseEffectZPA)             | Gets or sets the RigidResponseEffectZPA.                      |
| [`ScaleFactor`](#RSAcceleration.ScaleFactor)                                   | Gets or sets the ScaleFactor.                                 |
| [`Suppressed`](#RSAcceleration.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RSAcceleration.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RSAcceleration.BoundaryCondition"></a>

### *property* RSAcceleration.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Children"></a>

### *property* RSAcceleration.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Comments"></a>

### *property* RSAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.DataModelObjectCategory"></a>

### *property* RSAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Direction"></a>

### *property* RSAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Figures"></a>

### *property* RSAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Images"></a>

### *property* RSAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.InternalObject"></a>

### *property* RSAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.LoadData"></a>

### *property* RSAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.MissingMassEffect"></a>

### *property* RSAcceleration.MissingMassEffect *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.MissingMassEffectZPA"></a>

### *property* RSAcceleration.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Properties"></a>

### *property* RSAcceleration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffect"></a>

### *property* RSAcceleration.RigidResponseEffect *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectFreqBegin"></a>

### *property* RSAcceleration.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectFreqEnd"></a>

### *property* RSAcceleration.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectType"></a>

### *property* RSAcceleration.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RigidResponseEffectZPA"></a>

### *property* RSAcceleration.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.ScaleFactor"></a>

### *property* RSAcceleration.ScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Suppressed"></a>

### *property* RSAcceleration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.VisibleProperties"></a>

### *property* RSAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSAcceleration.Activate"></a>

### RSAcceleration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.AddComment"></a>

### RSAcceleration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.AddFigure"></a>

### RSAcceleration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.AddImage"></a>

### RSAcceleration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.CopyTo"></a>

### RSAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.CreateParameter"></a>

### RSAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Delete"></a>

### RSAcceleration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.Duplicate"></a>

### RSAcceleration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetChildren"></a>

### RSAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GetParameter"></a>

### RSAcceleration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GroupAllSimilarChildren"></a>

### RSAcceleration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.GroupSimilarObjects"></a>

### RSAcceleration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.PropertyByAPIName"></a>

### RSAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.PropertyByName"></a>

### RSAcceleration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSAcceleration.RemoveParameter"></a>

### RSAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

