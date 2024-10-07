# `RSLoad`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RSLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RSLoad.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RSLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RSLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RSLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RSLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RSLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RSLoad.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RSLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#RSLoad.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RSLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RSLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RSLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RSLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RSLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RSLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#RSLoad.BoundaryCondition)                       | Gets or sets the BoundaryCondition.                           |
| [`Children`](#RSLoad.Children)                                         | Gets the list of children.                                    |
| [`Comments`](#RSLoad.Comments)                                         | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#RSLoad.DataModelObjectCategory)           | Gets the current DataModelObject’s category.                  |
| [`Direction`](#RSLoad.Direction)                                       | Gets or sets the Direction.                                   |
| [`Figures`](#RSLoad.Figures)                                           | Gets the list of associated figures.                          |
| [`Images`](#RSLoad.Images)                                             | Gets the list of associated images.                           |
| [`InternalObject`](#RSLoad.InternalObject)                             | Gets the internal object. For advanced usage only.            |
| [`MissingMassEffect`](#RSLoad.MissingMassEffect)                       | Gets or sets the MissingMassEffect.                           |
| [`MissingMassEffectZPA`](#RSLoad.MissingMassEffectZPA)                 | Gets or sets the MissingMassEffectZPA.                        |
| [`Properties`](#RSLoad.Properties)                                     | Gets the list of properties for this object.                  |
| [`RigidResponseEffect`](#RSLoad.RigidResponseEffect)                   | Gets or sets the RigidResponseEffect.                         |
| [`RigidResponseEffectFreqBegin`](#RSLoad.RigidResponseEffectFreqBegin) | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSLoad.RigidResponseEffectFreqEnd)     | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectType`](#RSLoad.RigidResponseEffectType)           | Gets or sets the RigidResponseEffectType.                     |
| [`RigidResponseEffectZPA`](#RSLoad.RigidResponseEffectZPA)             | Gets or sets the RigidResponseEffectZPA.                      |
| [`ScaleFactor`](#RSLoad.ScaleFactor)                                   | Gets or sets the ScaleFactor.                                 |
| [`Suppressed`](#RSLoad.Suppressed)                                     | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RSLoad.VisibleProperties)                       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="RSLoad.BoundaryCondition"></a>

### *property* RSLoad.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Children"></a>

### *property* RSLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Comments"></a>

### *property* RSLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.DataModelObjectCategory"></a>

### *property* RSLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Direction"></a>

### *property* RSLoad.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Figures"></a>

### *property* RSLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Images"></a>

### *property* RSLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.InternalObject"></a>

### *property* RSLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.MissingMassEffect"></a>

### *property* RSLoad.MissingMassEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.MissingMassEffectZPA"></a>

### *property* RSLoad.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Properties"></a>

### *property* RSLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.RigidResponseEffect"></a>

### *property* RSLoad.RigidResponseEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.RigidResponseEffectFreqBegin"></a>

### *property* RSLoad.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.RigidResponseEffectFreqEnd"></a>

### *property* RSLoad.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.RigidResponseEffectType"></a>

### *property* RSLoad.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.RigidResponseEffectZPA"></a>

### *property* RSLoad.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.ScaleFactor"></a>

### *property* RSLoad.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Suppressed"></a>

### *property* RSLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.VisibleProperties"></a>

### *property* RSLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSLoad.Activate"></a>

### RSLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.AddComment"></a>

### RSLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.AddFigure"></a>

### RSLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.AddImage"></a>

### RSLoad.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.CopyTo"></a>

### RSLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.CreateParameter"></a>

### RSLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Delete"></a>

### RSLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.Duplicate"></a>

### RSLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.GetChildren"></a>

### RSLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.GetParameter"></a>

### RSLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.GroupAllSimilarChildren"></a>

### RSLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.GroupSimilarObjects"></a>

### RSLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.PropertyByAPIName"></a>

### RSLoad.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.PropertyByName"></a>

### RSLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSLoad.RemoveParameter"></a>

### RSLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

