# RSLoad

### *class* RSLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RSLoad.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#RSLoad.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RSLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RSLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RSLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RSLoad.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RSLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RSLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RSLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RSLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RSLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RSLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RSLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RSLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RSLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`BoundaryCondition`](#RSLoad.BoundaryCondition)                                                                       | Gets or sets the BoundaryCondition.                           |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`ScaleFactor`](#RSLoad.ScaleFactor)                                                                                   | Gets or sets the ScaleFactor.                                 |
| [`MissingMassEffectZPA`](#RSLoad.MissingMassEffectZPA)                                                                 | Gets or sets the MissingMassEffectZPA.                        |
| [`RigidResponseEffectFreqBegin`](#RSLoad.RigidResponseEffectFreqBegin)                                                 | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSLoad.RigidResponseEffectFreqEnd)                                                     | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectZPA`](#RSLoad.RigidResponseEffectZPA)                                                             | Gets or sets the RigidResponseEffectZPA.                      |
| [`Direction`](#RSLoad.Direction)                                                                                       | Gets or sets the Direction.                                   |
| [`RigidResponseEffectType`](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | Gets or sets the RigidResponseEffectType.                     |
| [`MissingMassEffect`](#RSLoad.MissingMassEffect)                                                                       | Gets or sets the MissingMassEffect.                           |
| [`RigidResponseEffect`](#RSLoad.RigidResponseEffect)                                                                   | Gets or sets the RigidResponseEffect.                         |
| [`Suppressed`](#RSLoad.Suppressed)                                                                                     | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#RSLoad.Children)                                                                                         | Gets the list of children.                                    |
| [`Comments`](#RSLoad.Comments)                                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#RSLoad.Figures)                                                                                           | Gets the list of associated figures.                          |
| [`Images`](#RSLoad.Images)                                                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RSLoad.Properties)                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RSLoad.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RSLoad
```

## Property detail

### *property* RSLoad.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.MissingMassEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.RigidResponseEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RSLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RSLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RSLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RSLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RSLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RSLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RSLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RSLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RSLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RSLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RSLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RSLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RSLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RSLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RSLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RSLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RSLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
