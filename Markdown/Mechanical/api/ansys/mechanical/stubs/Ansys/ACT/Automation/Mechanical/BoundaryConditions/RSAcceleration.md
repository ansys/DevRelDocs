# RSAcceleration

### *class* RSAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RSAcceleration.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#RSAcceleration.Delete)                                   | Run the Delete action.                                                            |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RSAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RSAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RSAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RSAcceleration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RSAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RSAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RSAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RSAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RSAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RSAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RSAcceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RSAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RSAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`LoadData`](#RSAcceleration.LoadData)                                                                                 | Gets or sets the LoadData.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`BoundaryCondition`](#RSAcceleration.BoundaryCondition)                                                               | Gets or sets the BoundaryCondition.                           |
| [`ScaleFactor`](#RSAcceleration.ScaleFactor)                                                                           | Gets or sets the ScaleFactor.                                 |
| [`MissingMassEffectZPA`](#RSAcceleration.MissingMassEffectZPA)                                                         | Gets or sets the MissingMassEffectZPA.                        |
| [`RigidResponseEffectFreqBegin`](#RSAcceleration.RigidResponseEffectFreqBegin)                                         | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSAcceleration.RigidResponseEffectFreqEnd)                                             | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectZPA`](#RSAcceleration.RigidResponseEffectZPA)                                                     | Gets or sets the RigidResponseEffectZPA.                      |
| [`Direction`](#RSAcceleration.Direction)                                                                               | Gets or sets the Direction.                                   |
| [`RigidResponseEffectType`](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | Gets or sets the RigidResponseEffectType.                     |
| [`MissingMassEffect`](#RSAcceleration.MissingMassEffect)                                                               | Gets or sets the MissingMassEffect.                           |
| [`RigidResponseEffect`](#RSAcceleration.RigidResponseEffect)                                                           | Gets or sets the RigidResponseEffect.                         |
| [`Suppressed`](#RSAcceleration.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`Children`](#RSAcceleration.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#RSAcceleration.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#RSAcceleration.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#RSAcceleration.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RSAcceleration.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RSAcceleration.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RSAcceleration
```

## Property detail

### *property* RSAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.MissingMassEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.RigidResponseEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RSAcceleration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RSAcceleration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RSAcceleration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
