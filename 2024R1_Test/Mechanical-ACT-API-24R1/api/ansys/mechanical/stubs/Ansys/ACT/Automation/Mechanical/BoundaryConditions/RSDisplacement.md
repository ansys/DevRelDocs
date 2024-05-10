# RSDisplacement

<a id="RSDisplacement"></a>

### *class* RSDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RSDisplacement.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#RSDisplacement.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RSDisplacement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RSDisplacement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RSDisplacement.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#RSDisplacement.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#RSDisplacement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RSDisplacement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RSDisplacement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RSDisplacement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RSDisplacement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RSDisplacement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#RSDisplacement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RSDisplacement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RSDisplacement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#RSDisplacement.LoadData)                                                                                 | Gets or sets the LoadData.                                    |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`BoundaryCondition`](#RSDisplacement.BoundaryCondition)                                                               | Gets or sets the BoundaryCondition.                           |
| [`ScaleFactor`](#RSDisplacement.ScaleFactor)                                                                           | Gets or sets the ScaleFactor.                                 |
| [`MissingMassEffectZPA`](#RSDisplacement.MissingMassEffectZPA)                                                         | Gets or sets the MissingMassEffectZPA.                        |
| [`RigidResponseEffectFreqBegin`](#RSDisplacement.RigidResponseEffectFreqBegin)                                         | Gets or sets the RigidResponseEffectFreqBegin.                |
| [`RigidResponseEffectFreqEnd`](#RSDisplacement.RigidResponseEffectFreqEnd)                                             | Gets or sets the RigidResponseEffectFreqEnd.                  |
| [`RigidResponseEffectZPA`](#RSDisplacement.RigidResponseEffectZPA)                                                     | Gets or sets the RigidResponseEffectZPA.                      |
| [`Direction`](#RSDisplacement.Direction)                                                                               | Gets or sets the Direction.                                   |
| [`RigidResponseEffectType`](./../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | Gets or sets the RigidResponseEffectType.                     |
| [`MissingMassEffect`](#RSDisplacement.MissingMassEffect)                                                               | Gets or sets the MissingMassEffect.                           |
| [`RigidResponseEffect`](#RSDisplacement.RigidResponseEffect)                                                           | Gets or sets the RigidResponseEffect.                         |
| [`Suppressed`](#RSDisplacement.Suppressed)                                                                             | Gets or sets the Suppressed.                                  |
| [`Children`](#RSDisplacement.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#RSDisplacement.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#RSDisplacement.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#RSDisplacement.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RSDisplacement.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RSDisplacement.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RSDisplacement
```

<a id="property-detail"></a>

## Property detail

<a id="RSDisplacement.InternalObject"></a>

### *property* RSDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.LoadData"></a>

### *property* RSDisplacement.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.DataModelObjectCategory"></a>

### *property* RSDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.BoundaryCondition"></a>

### *property* RSDisplacement.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.ScaleFactor"></a>

### *property* RSDisplacement.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.MissingMassEffectZPA"></a>

### *property* RSDisplacement.MissingMassEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectFreqBegin"></a>

### *property* RSDisplacement.RigidResponseEffectFreqBegin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqBegin.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectFreqEnd"></a>

### *property* RSDisplacement.RigidResponseEffectFreqEnd *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectFreqEnd.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectZPA"></a>

### *property* RSDisplacement.RigidResponseEffectZPA *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectZPA.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Direction"></a>

### *property* RSDisplacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffectType"></a>

### *property* RSDisplacement.RigidResponseEffectType *: [Ansys.Mechanical.DataModel.Enums.RigidResponseEffectType](./../../../../Mechanical/DataModel/Enums/RigidResponseEffectType.md#RigidResponseEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffectType.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.MissingMassEffect"></a>

### *property* RSDisplacement.MissingMassEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MissingMassEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RigidResponseEffect"></a>

### *property* RSDisplacement.RigidResponseEffect *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RigidResponseEffect.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Suppressed"></a>

### *property* RSDisplacement.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Children"></a>

### *property* RSDisplacement.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Comments"></a>

### *property* RSDisplacement.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Figures"></a>

### *property* RSDisplacement.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Images"></a>

### *property* RSDisplacement.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RSDisplacement.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Properties"></a>

### *property* RSDisplacement.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.VisibleProperties"></a>

### *property* RSDisplacement.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RSDisplacement.Delete"></a>

### RSDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetChildren"></a>

### RSDisplacement.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RSDisplacement.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### RSDisplacement.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Activate"></a>

### RSDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.CopyTo"></a>

### RSDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.Duplicate"></a>

### RSDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GroupAllSimilarChildren"></a>

### RSDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GroupSimilarObjects"></a>

### RSDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.PropertyByName"></a>

### RSDisplacement.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.PropertyByAPIName"></a>

### RSDisplacement.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.CreateParameter"></a>

### RSDisplacement.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.GetParameter"></a>

### RSDisplacement.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RSDisplacement.RemoveParameter"></a>

### RSDisplacement.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
