# BodyInteraction

### *class* BodyInteraction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a BodyInteraction.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#BodyInteraction.Delete)                                   | Run the Delete action.                                                            |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BodyInteraction.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BodyInteraction.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BodyInteraction.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#BodyInteraction.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#BodyInteraction.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BodyInteraction.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BodyInteraction.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BodyInteraction.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BodyInteraction.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BodyInteraction.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#BodyInteraction.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BodyInteraction.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BodyInteraction.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`DecayConstant`](#BodyInteraction.DecayConstant)                                                                      | Gets or sets the DecayConstant.                               |
| [`DynamicCoefficient`](#BodyInteraction.DynamicCoefficient)                                                            | Gets or sets the DynamicCoefficient.                          |
| [`NormalForceExponent`](#BodyInteraction.NormalForceExponent)                                                          | Gets or sets the NormalForceExponent.                         |
| [`NormalStressExponent`](#BodyInteraction.NormalStressExponent)                                                        | Gets or sets the NormalStressExponent.                        |
| [`ShearForceExponent`](#BodyInteraction.ShearForceExponent)                                                            | Gets or sets the ShearForceExponent.                          |
| [`ShearStressExponent`](#BodyInteraction.ShearStressExponent)                                                          | Gets or sets the ShearStressExponent.                         |
| [`FrictionCoefficient`](#BodyInteraction.FrictionCoefficient)                                                          | Gets or sets the FrictionCoefficient.                         |
| [`MaximumOffset`](#BodyInteraction.MaximumOffset)                                                                      | Gets or sets the MaximumOffset.                               |
| [`NormalForceLimit`](#BodyInteraction.NormalForceLimit)                                                                | Gets or sets the NormalForceLimit.                            |
| [`NormalStressLimit`](#BodyInteraction.NormalStressLimit)                                                              | Gets or sets the NormalStressLimit.                           |
| [`ShearForceLimit`](#BodyInteraction.ShearForceLimit)                                                                  | Gets or sets the ShearForceLimit.                             |
| [`ShearStressLimit`](#BodyInteraction.ShearStressLimit)                                                                | Gets or sets the ShearStressLimit.                            |
| [`Breakable`](#BodyInteraction.Breakable)                                                                              | Gets or sets the Breakable.                                   |
| [`ContactType`](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType)                                     | Gets or sets the ContactType.                                 |
| [`Suppressed`](#BodyInteraction.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`Location`](#BodyInteraction.Location)                                                                                | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#BodyInteraction.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#BodyInteraction.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#BodyInteraction.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#BodyInteraction.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BodyInteraction.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BodyInteraction.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.Connections import BodyInteraction
```

## Property detail

### *property* BodyInteraction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.DecayConstant *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.DynamicCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.NormalForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.NormalStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.ShearForceExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.ShearStressExponent *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.FrictionCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.MaximumOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumOffset.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.NormalForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.NormalStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.ShearForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.ShearStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* BodyInteraction.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### BodyInteraction.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### BodyInteraction.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
