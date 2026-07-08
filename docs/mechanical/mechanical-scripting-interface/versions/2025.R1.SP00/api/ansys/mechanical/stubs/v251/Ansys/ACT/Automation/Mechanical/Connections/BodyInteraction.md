# `BodyInteraction`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Connections.BodyInteraction

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BodyInteraction.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#BodyInteraction.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#BodyInteraction.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#BodyInteraction.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#BodyInteraction.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#BodyInteraction.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#BodyInteraction.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#BodyInteraction.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#BodyInteraction.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#BodyInteraction.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#BodyInteraction.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#BodyInteraction.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BodyInteraction.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#BodyInteraction.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#BodyInteraction.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#BodyInteraction.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Breakable`](#BodyInteraction.Breakable)                             | Gets or sets the Breakable.                                   |
| [`Children`](#BodyInteraction.Children)                               | Gets the list of children.                                    |
| [`Comments`](#BodyInteraction.Comments)                               | Gets the list of associated comments.                         |
| [`ContactType`](#BodyInteraction.ContactType)                         | Gets or sets the ContactType.                                 |
| [`DataModelObjectCategory`](#BodyInteraction.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DecayConstant`](#BodyInteraction.DecayConstant)                     | Gets or sets the DecayConstant.                               |
| [`DynamicCoefficient`](#BodyInteraction.DynamicCoefficient)           | Gets or sets the DynamicCoefficient.                          |
| [`Figures`](#BodyInteraction.Figures)                                 | Gets the list of associated figures.                          |
| [`FrictionCoefficient`](#BodyInteraction.FrictionCoefficient)         | Gets or sets the FrictionCoefficient.                         |
| [`Images`](#BodyInteraction.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#BodyInteraction.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#BodyInteraction.Location)                               | Gets or sets the Location.                                    |
| [`MaximumOffset`](#BodyInteraction.MaximumOffset)                     | Gets or sets the MaximumOffset.                               |
| [`NormalForceExponent`](#BodyInteraction.NormalForceExponent)         | Gets or sets the NormalForceExponent.                         |
| [`NormalForceLimit`](#BodyInteraction.NormalForceLimit)               | Gets or sets the NormalForceLimit.                            |
| [`NormalStressExponent`](#BodyInteraction.NormalStressExponent)       | Gets or sets the NormalStressExponent.                        |
| [`NormalStressLimit`](#BodyInteraction.NormalStressLimit)             | Gets or sets the NormalStressLimit.                           |
| [`Properties`](#BodyInteraction.Properties)                           | Gets the list of properties for this object.                  |
| [`ShearForceExponent`](#BodyInteraction.ShearForceExponent)           | Gets or sets the ShearForceExponent.                          |
| [`ShearForceLimit`](#BodyInteraction.ShearForceLimit)                 | Gets or sets the ShearForceLimit.                             |
| [`ShearStressExponent`](#BodyInteraction.ShearStressExponent)         | Gets or sets the ShearStressExponent.                         |
| [`ShearStressLimit`](#BodyInteraction.ShearStressLimit)               | Gets or sets the ShearStressLimit.                            |
| [`Suppressed`](#BodyInteraction.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#BodyInteraction.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BodyInteraction.Breakable"></a>

### *property* BodyInteraction.Breakable *: [Ansys.Mechanical.DataModel.Enums.BondedBreakableType](../../../../Mechanical/DataModel/Enums/BondedBreakableType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.BondedBreakableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Breakable.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Children"></a>

### *property* BodyInteraction.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Comments"></a>

### *property* BodyInteraction.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ContactType"></a>

### *property* BodyInteraction.ContactType *: [Ansys.Mechanical.DataModel.Enums.ContactType](../../../../Mechanical/DataModel/Enums/ContactType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactType.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DataModelObjectCategory"></a>

### *property* BodyInteraction.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DecayConstant"></a>

### *property* BodyInteraction.DecayConstant *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DecayConstant.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.DynamicCoefficient"></a>

### *property* BodyInteraction.DynamicCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Figures"></a>

### *property* BodyInteraction.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.FrictionCoefficient"></a>

### *property* BodyInteraction.FrictionCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrictionCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Images"></a>

### *property* BodyInteraction.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.InternalObject"></a>

### *property* BodyInteraction.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBodyInteractionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Location"></a>

### *property* BodyInteraction.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.MaximumOffset"></a>

### *property* BodyInteraction.MaximumOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumOffset.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalForceExponent"></a>

### *property* BodyInteraction.NormalForceExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalForceLimit"></a>

### *property* BodyInteraction.NormalForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalStressExponent"></a>

### *property* BodyInteraction.NormalStressExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.NormalStressLimit"></a>

### *property* BodyInteraction.NormalStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NormalStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Properties"></a>

### *property* BodyInteraction.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearForceExponent"></a>

### *property* BodyInteraction.ShearForceExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearForceLimit"></a>

### *property* BodyInteraction.ShearForceLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearStressExponent"></a>

### *property* BodyInteraction.ShearStressExponent *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressExponent.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.ShearStressLimit"></a>

### *property* BodyInteraction.ShearStressLimit *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShearStressLimit.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Suppressed"></a>

### *property* BodyInteraction.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.VisibleProperties"></a>

### *property* BodyInteraction.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BodyInteraction.Activate"></a>

### BodyInteraction.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddComment"></a>

### BodyInteraction.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddFigure"></a>

### BodyInteraction.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.AddImage"></a>

### BodyInteraction.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.CopyTo"></a>

### BodyInteraction.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.CreateParameter"></a>

### BodyInteraction.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Delete"></a>

### BodyInteraction.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.Duplicate"></a>

### BodyInteraction.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetChildren"></a>

### BodyInteraction.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GetParameter"></a>

### BodyInteraction.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GroupAllSimilarChildren"></a>

### BodyInteraction.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.GroupSimilarObjects"></a>

### BodyInteraction.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.PropertyByAPIName"></a>

### BodyInteraction.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.PropertyByName"></a>

### BodyInteraction.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BodyInteraction.RemoveParameter"></a>

### BodyInteraction.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

