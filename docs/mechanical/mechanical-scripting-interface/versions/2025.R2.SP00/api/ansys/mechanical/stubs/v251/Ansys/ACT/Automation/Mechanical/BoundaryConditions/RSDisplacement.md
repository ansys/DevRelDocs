# `RSDisplacement`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RSDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RSDisplacement.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RSDisplacement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RSDisplacement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RSDisplacement.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RSDisplacement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RSDisplacement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RSDisplacement.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RSDisplacement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#RSDisplacement.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RSDisplacement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RSDisplacement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RSDisplacement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RSDisplacement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RSDisplacement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RSDisplacement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#RSDisplacement.BoundaryCondition)                       | Gets or sets the BoundaryCondition.                           |
| [`Children`](#RSDisplacement.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#RSDisplacement.Comments)                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RSDisplacement.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`Direction`](#RSDisplacement.Direction)                                       | Gets or sets the Direction.                                   |
| [`Figures`](#RSDisplacement.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#RSDisplacement.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#RSDisplacement.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#RSDisplacement.LoadData)                                         | Gets or sets the LoadData.                                    |
| [`MissingMassEffect`](#RSDisplacement.MissingMassEffect)                       | Gets or sets the MissingMassEffect.                           |
| [`MissingMassEffectZPA`](#RSDisplacement.MissingMassEffectZPA)                 | Gets or sets the MissingMassEffectZPA.                        |
| [`Properties`](#RSDisplacement.Properties)                                     | Gets the list of properties for this object.                  |
| [`RigidResponseEffect`](#RSDisplacement.RigidResponseEffect)                   | Gets or sets the RigidResponseEffect.                         |
| [`RigidResponseEffectFreqBegin`](#RSDisplacement.RigidResponseEffectFreqBegin) | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSDisplacement.RigidResponseEffectFreqEnd)     | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectType`](#RSDisplacement.RigidResponseEffectType)           | Gets or sets the RigidResponseEffectType.                     |
| [`RigidResponseEffectZPA`](#RSDisplacement.RigidResponseEffectZPA)             | Gets or sets the RigidResponseEffectZPA.                      |
| [`ScaleFactor`](#RSDisplacement.ScaleFactor)                                   | Gets or sets the ScaleFactor.                                 |
| [`Suppressed`](#RSDisplacement.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RSDisplacement.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RSDisplacement.BoundaryCondition"></a>

### *property* RSDisplacement.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Children"></a>

### *property* RSDisplacement.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Comments"></a>

### *property* RSDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.DataModelObjectCategory"></a>

### *property* RSDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Direction"></a>

### *property* RSDisplacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Figures"></a>

### *property* RSDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Images"></a>

### *property* RSDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.InternalObject"></a>

### *property* RSDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.LoadData"></a>

### *property* RSDisplacement.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.MissingMassEffect"></a>

### *property* RSDisplacement.MissingMassEffect *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.MissingMassEffectZPA"></a>

### *property* RSDisplacement.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Properties"></a>

### *property* RSDisplacement.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffect"></a>

### *property* RSDisplacement.RigidResponseEffect *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectFreqBegin"></a>

### *property* RSDisplacement.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectFreqEnd"></a>

### *property* RSDisplacement.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectType"></a>

### *property* RSDisplacement.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectZPA"></a>

### *property* RSDisplacement.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.ScaleFactor"></a>

### *property* RSDisplacement.ScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Suppressed"></a>

### *property* RSDisplacement.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.VisibleProperties"></a>

### *property* RSDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSDisplacement.Activate"></a>

### RSDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.AddComment"></a>

### RSDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.AddFigure"></a>

### RSDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.AddImage"></a>

### RSDisplacement.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.CopyTo"></a>

### RSDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.CreateParameter"></a>

### RSDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Delete"></a>

### RSDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Duplicate"></a>

### RSDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetChildren"></a>

### RSDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetParameter"></a>

### RSDisplacement.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GroupAllSimilarChildren"></a>

### RSDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GroupSimilarObjects"></a>

### RSDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.PropertyByAPIName"></a>

### RSDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.PropertyByName"></a>

### RSDisplacement.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RemoveParameter"></a>

### RSDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

