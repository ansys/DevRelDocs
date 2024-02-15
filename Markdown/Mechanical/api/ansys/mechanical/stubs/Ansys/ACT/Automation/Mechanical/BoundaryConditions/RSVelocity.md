# RSVelocity

### *class* RSVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RSVelocity.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#RSVelocity.Delete)                                   | Run the Delete action.                                                            |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RSVelocity
```

## Property detail

### *property* RSVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.MissingMassEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.RigidResponseEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RSVelocity.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RSVelocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RSVelocity.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RSVelocity.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RSVelocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RSVelocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RSVelocity.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RSVelocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RSVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RSVelocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RSVelocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RSVelocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RSVelocity.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RSVelocity.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RSVelocity.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RSVelocity.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RSVelocity.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
