# RSVelocity

<a id="RSVelocity"></a>

### *class* RSVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RSVelocity.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#RSVelocity.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RSVelocity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RSVelocity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RSVelocity.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RSVelocity.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RSVelocity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RSVelocity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RSVelocity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RSVelocity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RSVelocity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RSVelocity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RSVelocity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RSVelocity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RSVelocity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#RSVelocity.LoadData)                                                                                     | Gets or sets the LoadData.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`BoundaryCondition`](#RSVelocity.BoundaryCondition)                                                                   | Gets or sets the BoundaryCondition.                           |
| [`ScaleFactor`](#RSVelocity.ScaleFactor)                                                                               | Gets or sets the ScaleFactor.                                 |
| [`MissingMassEffectZPA`](#RSVelocity.MissingMassEffectZPA)                                                             | Gets or sets the MissingMassEffectZPA.                        |
| [`RigidResponseEffectFreqBegin`](#RSVelocity.RigidResponseEffectFreqBegin)                                             | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSVelocity.RigidResponseEffectFreqEnd)                                                 | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectZPA`](#RSVelocity.RigidResponseEffectZPA)                                                         | Gets or sets the RigidResponseEffectZPA.                      |
| [`Direction`](#RSVelocity.Direction)                                                                                   | Gets or sets the Direction.                                   |
| [`RigidResponseEffectType`](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | Gets or sets the RigidResponseEffectType.                     |
| [`MissingMassEffect`](#RSVelocity.MissingMassEffect)                                                                   | Gets or sets the MissingMassEffect.                           |
| [`RigidResponseEffect`](#RSVelocity.RigidResponseEffect)                                                               | Gets or sets the RigidResponseEffect.                         |
| [`Suppressed`](#RSVelocity.Suppressed)                                                                                 | Gets or sets the Suppressed.                                  |
| [`Children`](#RSVelocity.Children)                                                                                     | Gets the list of children.                                    |
| [`Comments`](#RSVelocity.Comments)                                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#RSVelocity.Figures)                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#RSVelocity.Images)                                                                                         | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RSVelocity.Properties)                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RSVelocity.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RSVelocity
```

<a id="property-detail"></a>

## Property detail

<a id="RSVelocity.InternalObject"></a>

### *property* RSVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.LoadData"></a>

### *property* RSVelocity.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.DataModelObjectCategory"></a>

### *property* RSVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.BoundaryCondition"></a>

### *property* RSVelocity.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.ScaleFactor"></a>

### *property* RSVelocity.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.MissingMassEffectZPA"></a>

### *property* RSVelocity.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectFreqBegin"></a>

### *property* RSVelocity.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectFreqEnd"></a>

### *property* RSVelocity.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectZPA"></a>

### *property* RSVelocity.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Direction"></a>

### *property* RSVelocity.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffectType"></a>

### *property* RSVelocity.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.MissingMassEffect"></a>

### *property* RSVelocity.MissingMassEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RigidResponseEffect"></a>

### *property* RSVelocity.RigidResponseEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Suppressed"></a>

### *property* RSVelocity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Children"></a>

### *property* RSVelocity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Comments"></a>

### *property* RSVelocity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Figures"></a>

### *property* RSVelocity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Images"></a>

### *property* RSVelocity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RSVelocity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Properties"></a>

### *property* RSVelocity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.VisibleProperties"></a>

### *property* RSVelocity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSVelocity.Delete"></a>

### RSVelocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetChildren"></a>

### RSVelocity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RSVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.AddComment"></a>

### RSVelocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.AddFigure"></a>

### RSVelocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.AddImage"></a>

### RSVelocity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Activate"></a>

### RSVelocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.CopyTo"></a>

### RSVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.Duplicate"></a>

### RSVelocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GroupAllSimilarChildren"></a>

### RSVelocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GroupSimilarObjects"></a>

### RSVelocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.PropertyByName"></a>

### RSVelocity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.PropertyByAPIName"></a>

### RSVelocity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.CreateParameter"></a>

### RSVelocity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.GetParameter"></a>

### RSVelocity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSVelocity.RemoveParameter"></a>

### RSVelocity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
